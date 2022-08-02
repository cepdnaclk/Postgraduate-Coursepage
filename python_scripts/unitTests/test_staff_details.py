import unittest
import json

def json_validation(filename):
    with open(filename) as f:
        data = f.read()
    try:
        json.loads(data)
        print("Valid json syntax")
        return True
    except ValueError as err:
        print(err)
        return False

class Test_StaffDetails(unittest.TestCase):
      
    def setUp(self):
        self.api_path = "../../_data/staff_details.json"
    
    def test_staffDetails_json_syntax(self):
        self.assertTrue(json_validation(self.api_path), "Invalid json syntax in staff_details.json")


if __name__ == '__main__':
    unittest.main()