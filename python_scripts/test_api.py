import unittest
import json

def json_validation(filename):
    with open(filename) as f:
        data = f.read()
    try:
        json.loads(data)
        return True
    except ValueError as err:
        print(err)
        return False


class Test_API(unittest.TestCase):
      
    def setUp(self):
        self.api_path = "../_site/api/courses/index.json"
    
    def test_api_json_syntax(self):
        self.assertTrue(json_validation(self.api_path), "Invalid json syntax in API")


if __name__ == '__main__':
    unittest.main()