import unittest
import requests
import os


def get_permalink(filePath):
    with open(filePath, "r") as f:
        data = f.read().split("\n")
        for each in data:
            if "permalink" in each:
                permalink = each.split(":")[1].strip()
                return permalink


def get_status_code(permalink):
    base_url = "https://sheiiz.github.io/Postgraduate-Coursepage"
    response = requests.get(base_url + permalink)
    status_code = response.status_code
    return status_code


class Test_Pages(unittest.TestCase):
      
    def setUp(self):
        self.home = '/'
        self.msc = '/msc'
        self.api = '/api/courses/'
        self.folderPath = "../../pages/courses"
    

    def test_home_page(self):
        self.assertEqual(get_status_code(self.home), 200, "home.html page not found")

    def test_msc_page(self):
        self.assertEqual(get_status_code(self.msc), 200, "msc.html Page not found")
    
    def test_api(self):
        self.assertEqual(get_status_code(self.api), 200, "API not found")

    def test_course_pages(self):
        allFiles = os.listdir(self.folderPath)

        for eachFile in allFiles:
            filePath = self.folderPath + "/" + eachFile
            permalink = get_permalink(filePath)
            status_code = get_status_code(permalink)
            self.assertEqual(status_code, 200, eachFile+" Page not found")

if __name__ == '__main__':
    unittest.main()