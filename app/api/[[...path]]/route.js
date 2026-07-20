import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const MONGO_URL = process.env.MONGO_URL
const DB_NAME = process.env.DB_NAME || 'olive_orange'

let cachedClient = null
async function getDb() {
  if (!MONGO_URL) throw new Error('MONGO_URL not configured')
  if (!cachedClient) {
    cachedClient = new MongoClient(MONGO_URL)
    await cachedClient.connect()
  }
  return cachedClient.db(DB_NAME)
}

function json(data, init = {}) {
  return NextResponse.json(data, init)
}

/* -------- Game Challenge scoring engine (rule-based AI) -------- */
// Each question is weighted. Higher weighted 'pain' answers reduce score.
const QUESTION_WEIGHTS = {
  lose_leads: { weight: 14, recommends: ['CRM', 'AI Chatbots'] },
  use_excel: { weight: 12, recommends: ['ERP', 'Inventory Management'] },
  miss_followups: { weight: 12, recommends: ['CRM', 'AI Automation'] },
  customers_wait: { weight: 10, recommends: ['Service Desk', 'AI Chatbots'] },
  sales_struggling: { weight: 12, recommends: ['CRM', 'Real Estate CRM'] },
  manual_invoices: { weight: 10, recommends: ['Billing Software', 'ERP'] },
  no_hr_system: { weight: 8, recommends: ['HRMS'] },
  no_reports: { weight: 12, recommends: ['ERP', 'AI Automation'] },
}

function scoreGame(answers = {}) {
  // answers: { key: 'yes' | 'no' | 'sometimes' }
  let painTotal = 0
  let maxPain = 0
  const recs = new Set()

  for (const [key, def] of Object.entries(QUESTION_WEIGHTS)) {
    maxPain += def.weight
    const a = answers[key]
    let factor = 0
    if (a === 'yes') factor = 1
    else if (a === 'sometimes') factor = 0.55
    else factor = 0
    painTotal += def.weight * factor
    if (factor >= 0.55) def.recommends.forEach(r => recs.add(r))
  }

  const healthPct = Math.max(6, Math.round(100 - (painTotal / maxPain) * 100))
  const health = Math.min(100, healthPct)

  let verdict, tone
  if (health >= 80) { verdict = 'Strong'; tone = 'Your business is running smoothly. A few smart upgrades can push you to the top.' }
  else if (health >= 55) { verdict = 'Healthy'; tone = 'You are doing well, but there are clear gaps costing you leads and revenue.' }
  else if (health >= 35) { verdict = 'At Risk'; tone = 'You are losing customers and time to manual work. It is time to automate.' }
  else { verdict = 'Critical'; tone = 'Your business is bleeding leads, cash and hours. Urgent digital transformation needed.' }

  const priorityRecs = Array.from(recs).slice(0, 5)
  const growthGap = 100 - health

  return {
    health,
    verdict,
    tone,
    recommendations: priorityRecs.length ? priorityRecs : ['CRM', 'AI Automation'],
    growthGap,
    estimatedRevenueLift: `${Math.round(15 + growthGap * 0.6)}% – ${Math.round(30 + growthGap * 0.9)}%`,
    generatedAt: new Date().toISOString(),
  }
}

/* -------- Route handler -------- */
async function handle(request, ctx) {
  const params = await ctx.params
  const seg = (params?.path || []).join('/')
  const method = request.method

  try {
    // Health
    if (seg === '' || seg === 'health') {
      return json({ ok: true, service: 'olive-orange-api', ts: Date.now() })
    }

    // POST /api/game/score  { answers, lead: {name,phone,email,company} }
    if (seg === 'game/score' && method === 'POST') {
      const body = await request.json().catch(() => ({}))
      const answers = body.answers || {}
      const lead = body.lead || {}
      const result = scoreGame(answers)
      const doc = {
        id: uuidv4(),
        type: 'game_score',
        answers,
        lead,
        result,
        createdAt: new Date().toISOString(),
      }
      try {
        const db = await getDb()
        await db.collection('game_scores').insertOne({ ...doc })
      } catch (e) {
        // fail silently for MVP if DB is down
      }
      return json({ ok: true, id: doc.id, result })
    }

    // POST /api/demo  { name, phone, email, company, service, message }
    if (seg === 'demo' && method === 'POST') {
      const body = await request.json().catch(() => ({}))
      const doc = {
        id: uuidv4(),
        type: 'demo_request',
        ...body,
        createdAt: new Date().toISOString(),
      }
      try {
        const db = await getDb()
        await db.collection('leads').insertOne({ ...doc })
      } catch (e) {}
      return json({ ok: true, id: doc.id })
    }

    // POST /api/contact
    if (seg === 'contact' && method === 'POST') {
      const body = await request.json().catch(() => ({}))
      const doc = {
        id: uuidv4(),
        type: 'contact',
        ...body,
        createdAt: new Date().toISOString(),
      }
      try {
        const db = await getDb()
        await db.collection('leads').insertOne({ ...doc })
      } catch (e) {}
      return json({ ok: true, id: doc.id })
    }

    // GET /api/leads  (basic admin peek)
    if (seg === 'leads' && method === 'GET') {
      const db = await getDb()
      const items = await db.collection('leads').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
      return json({ ok: true, items })
    }

    return json({ ok: false, error: 'Not found', path: seg }, { status: 404 })
  } catch (err) {
    return json({ ok: false, error: err.message }, { status: 500 })
  }
}

export const GET = handle
export const POST = handle
export const PUT = handle
export const DELETE = handle
export const PATCH = handle
