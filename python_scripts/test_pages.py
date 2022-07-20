import unittest
import requests
import os

# from test_functions import get_permalink, get_status_code

def get_permalink(filePath):
    with open(filePath, "r") as f:
        data = f.read().split("\n")
        for each in data:
            if "permalink" in each:
                permalink = each.split(":")[1].strip()
                return permalink

def get_status_code(permalink):
    base_url = "http://localhost:4000"
    response = requests.get(base_url + permalink)
    status_code = response.status_code
    return status_code


class Test_Pages(unittest.TestCase):
      
    def setUp(self):
        self.home = "http://localhost:4000/"
        self.msc = "http://localhost:4000/msc"
        self.folderPath = "../pages/courses"
    

    def test_home_page(self):
        self.assertEqual(requests.get(self.home).status_code, 200, "home.html page not found")

    def test_msc_page(self):
        self.assertEqual(requests.get(self.msc).status_code, 200, "msc.html Page not found")


    def test_course_pages(self):
        allFiles = os.listdir(self.folderPath)
        for eachFile in allFiles:
            filePath = self.folderPath + "/" + eachFile
            permalink = get_permalink(filePath)
            status_code = get_status_code(permalink)
            self.assertEqual(status_code, 200, eachFile+" Page not found")


if __name__ == '__main__':
    unittest.main()