#!/usr/bin/env python3
"""
Backend API Test Suite for Olive Orange Technologies
Tests all API endpoints after package.json + next.config.js changes
"""

import requests
import json
import time
from pymongo import MongoClient

# Configuration
BASE_URL = "http://localhost:3000/api"
MONGO_URL = "mongodb://localhost:27017"
# Read DB_NAME from environment, default to 'olive_orange' (same logic as backend)
import os
DB_NAME = os.getenv('DB_NAME', 'olive_orange')

def print_test_header(test_name):
    print(f"\n{'='*80}")
    print(f"TEST: {test_name}")
    print(f"{'='*80}")

def print_success(message):
    print(f"✅ SUCCESS: {message}")

def print_error(message):
    print(f"❌ ERROR: {message}")

def print_info(message):
    print(f"ℹ️  INFO: {message}")

# Test 1: GET /api/health
def test_health_endpoint():
    print_test_header("GET /api/health")
    try:
        response = requests.get(f"{BASE_URL}/health", timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code != 200:
            print_error(f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        
        # Validate response structure
        if not data.get('ok'):
            print_error("Response 'ok' field is not true")
            return False
        
        if data.get('service') != 'olive-orange-api':
            print_error(f"Expected service='olive-orange-api', got '{data.get('service')}'")
            return False
        
        if 'ts' not in data:
            print_error("Response missing 'ts' field")
            return False
        
        print_success("Health endpoint working correctly")
        return True
        
    except Exception as e:
        print_error(f"Exception occurred: {str(e)}")
        return False

# Test 2: POST /api/game/score
def test_game_score_endpoint():
    print_test_header("POST /api/game/score")
    try:
        payload = {
            "answers": {
                "lose_leads": "yes",
                "use_excel": "yes",
                "miss_followups": "sometimes",
                "customers_wait": "no",
                "sales_struggling": "yes",
                "manual_invoices": "yes",
                "no_hr_system": "no",
                "no_reports": "yes"
            },
            "lead": {
                "name": "Test User",
                "phone": "9999999999",
                "email": "test@example.com",
                "company": "Test Co"
            }
        }
        
        response = requests.post(f"{BASE_URL}/game/score", json=payload, timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code != 200:
            print_error(f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        
        # Validate response structure
        if not data.get('ok'):
            print_error("Response 'ok' field is not true")
            return False
        
        if 'id' not in data:
            print_error("Response missing 'id' field")
            return False
        
        if 'result' not in data:
            print_error("Response missing 'result' field")
            return False
        
        result = data['result']
        
        # Validate result structure
        required_fields = ['health', 'verdict', 'tone', 'recommendations', 'growthGap', 'estimatedRevenueLift', 'generatedAt']
        for field in required_fields:
            if field not in result:
                print_error(f"Result missing '{field}' field")
                return False
        
        # Validate health score range
        health = result['health']
        if not isinstance(health, int) or health < 0 or health > 100:
            print_error(f"Health score {health} is not in range 0-100")
            return False
        
        print_info(f"Health Score: {health}")
        
        # Validate verdict
        valid_verdicts = ['Strong', 'Healthy', 'At Risk', 'Critical']
        if result['verdict'] not in valid_verdicts:
            print_error(f"Verdict '{result['verdict']}' is not one of {valid_verdicts}")
            return False
        
        print_info(f"Verdict: {result['verdict']}")
        
        # Validate recommendations is non-empty array
        if not isinstance(result['recommendations'], list) or len(result['recommendations']) == 0:
            print_error("Recommendations array is empty or not an array")
            return False
        
        print_info(f"Recommendations: {result['recommendations']}")
        
        # Verify MongoDB persistence
        try:
            client = MongoClient(MONGO_URL)
            db = client[DB_NAME]
            doc = db.game_scores.find_one({'id': data['id']})
            
            if not doc:
                print_error(f"Document with id {data['id']} not found in game_scores collection")
                return False
            
            print_success(f"Document persisted to MongoDB game_scores collection")
            
        except Exception as e:
            print_error(f"MongoDB verification failed: {str(e)}")
            return False
        
        print_success("Game score endpoint working correctly")
        return True
        
    except Exception as e:
        print_error(f"Exception occurred: {str(e)}")
        return False

# Test 3: POST /api/demo
def test_demo_endpoint():
    print_test_header("POST /api/demo")
    try:
        payload = {
            "name": "Demo Test",
            "phone": "8888888888",
            "email": "demo@test.com",
            "company": "Demo Corp",
            "service": "Oli CRM",
            "message": "I want a demo"
        }
        
        response = requests.post(f"{BASE_URL}/demo", json=payload, timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code != 200:
            print_error(f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        
        # Validate response structure
        if not data.get('ok'):
            print_error("Response 'ok' field is not true")
            return False
        
        if 'id' not in data:
            print_error("Response missing 'id' field")
            return False
        
        demo_id = data['id']
        print_info(f"Demo ID: {demo_id}")
        
        # Verify MongoDB persistence
        try:
            client = MongoClient(MONGO_URL)
            db = client[DB_NAME]
            doc = db.leads.find_one({'id': demo_id})
            
            if not doc:
                print_error(f"Document with id {demo_id} not found in leads collection")
                return False
            
            if doc.get('type') != 'demo_request':
                print_error(f"Document type is '{doc.get('type')}', expected 'demo_request'")
                return False
            
            print_success(f"Document persisted to MongoDB leads collection with type=demo_request")
            
        except Exception as e:
            print_error(f"MongoDB verification failed: {str(e)}")
            return False
        
        print_success("Demo endpoint working correctly")
        return True
        
    except Exception as e:
        print_error(f"Exception occurred: {str(e)}")
        return False

# Test 4: POST /api/contact
def test_contact_endpoint():
    print_test_header("POST /api/contact")
    try:
        payload = {
            "name": "Contact Test",
            "phone": "7777777777",
            "email": "contact@test.com",
            "company": "Contact Co",
            "message": "Please reach out"
        }
        
        response = requests.post(f"{BASE_URL}/contact", json=payload, timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code != 200:
            print_error(f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        
        # Validate response structure
        if not data.get('ok'):
            print_error("Response 'ok' field is not true")
            return False
        
        if 'id' not in data:
            print_error("Response missing 'id' field")
            return False
        
        contact_id = data['id']
        print_info(f"Contact ID: {contact_id}")
        
        # Verify MongoDB persistence
        try:
            client = MongoClient(MONGO_URL)
            db = client[DB_NAME]
            doc = db.leads.find_one({'id': contact_id})
            
            if not doc:
                print_error(f"Document with id {contact_id} not found in leads collection")
                return False
            
            if doc.get('type') != 'contact':
                print_error(f"Document type is '{doc.get('type')}', expected 'contact'")
                return False
            
            print_success(f"Document persisted to MongoDB leads collection with type=contact")
            
        except Exception as e:
            print_error(f"MongoDB verification failed: {str(e)}")
            return False
        
        print_success("Contact endpoint working correctly")
        return True
        
    except Exception as e:
        print_error(f"Exception occurred: {str(e)}")
        return False

# Test 5: GET /api/leads
def test_leads_endpoint():
    print_test_header("GET /api/leads")
    try:
        response = requests.get(f"{BASE_URL}/leads", timeout=10)
        print_info(f"Status Code: {response.status_code}")
        
        if response.status_code != 200:
            print_error(f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        
        # Validate response structure
        if not data.get('ok'):
            print_error("Response 'ok' field is not true")
            return False
        
        if 'items' not in data:
            print_error("Response missing 'items' field")
            return False
        
        if not isinstance(data['items'], list):
            print_error("'items' field is not an array")
            return False
        
        print_info(f"Total leads returned: {len(data['items'])}")
        
        # Check if recent demo and contact submissions are present
        demo_found = False
        contact_found = False
        
        for item in data['items']:
            if item.get('type') == 'demo_request' and item.get('email') == 'demo@test.com':
                demo_found = True
                print_info(f"Found demo submission: {item.get('name')} - {item.get('email')}")
            if item.get('type') == 'contact' and item.get('email') == 'contact@test.com':
                contact_found = True
                print_info(f"Found contact submission: {item.get('name')} - {item.get('email')}")
        
        if not demo_found:
            print_error("Demo submission from test 3 not found in leads list")
            return False
        
        if not contact_found:
            print_error("Contact submission from test 4 not found in leads list")
            return False
        
        print_success("Leads endpoint working correctly and returns recent submissions")
        return True
        
    except Exception as e:
        print_error(f"Exception occurred: {str(e)}")
        return False

# Test 6: GET /api/nonexistent (404 test)
def test_404_endpoint():
    print_test_header("GET /api/nonexistent (404 test)")
    try:
        response = requests.get(f"{BASE_URL}/nonexistent", timeout=10)
        print_info(f"Status Code: {response.status_code}")
        print_info(f"Response: {response.text}")
        
        if response.status_code != 404:
            print_error(f"Expected status 404, got {response.status_code}")
            return False
        
        data = response.json()
        
        # Validate response structure
        if data.get('ok') != False:
            print_error("Response 'ok' field should be false")
            return False
        
        if 'error' not in data:
            print_error("Response missing 'error' field")
            return False
        
        if data.get('error') != 'Not found':
            print_error(f"Expected error='Not found', got '{data.get('error')}'")
            return False
        
        if data.get('path') != 'nonexistent':
            print_error(f"Expected path='nonexistent', got '{data.get('path')}'")
            return False
        
        print_success("404 endpoint working correctly")
        return True
        
    except Exception as e:
        print_error(f"Exception occurred: {str(e)}")
        return False

# Main test runner
def main():
    print("\n" + "="*80)
    print("BACKEND API TEST SUITE - Olive Orange Technologies")
    print("Testing after package.json + next.config.js changes")
    print("="*80)
    
    results = {}
    
    # Run all tests
    results['health'] = test_health_endpoint()
    time.sleep(0.5)
    
    results['game_score'] = test_game_score_endpoint()
    time.sleep(0.5)
    
    results['demo'] = test_demo_endpoint()
    time.sleep(0.5)
    
    results['contact'] = test_contact_endpoint()
    time.sleep(0.5)
    
    results['leads'] = test_leads_endpoint()
    time.sleep(0.5)
    
    results['404'] = test_404_endpoint()
    
    # Print summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASSED" if result else "❌ FAILED"
        print(f"{test_name:20s} : {status}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    
    if passed == total:
        print("\n🎉 ALL TESTS PASSED! Backend APIs are working correctly.")
        return 0
    else:
        print(f"\n⚠️  {total - passed} test(s) failed. Please review the errors above.")
        return 1

if __name__ == "__main__":
    exit(main())
