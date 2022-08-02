import unittest
import json
import requests


def json_validation(url):
    r = requests.get(url)
    try:
        json.loads(r.text)
        print("Valid json syntax")
        return True
    except ValueError as err:
        print(err)
        return False


class Test_API(unittest.TestCase):

    def setUp(self):
        self.api_url = "https://cepdnaclk.github.io/Postgraduate-Coursepage/api/courses/"

    def test_api_json_syntax(self):
        self.assertTrue(json_validation(self.api_url),"Invalid json syntax in API")


if __name__ == '__main__':
    unittest.main()
