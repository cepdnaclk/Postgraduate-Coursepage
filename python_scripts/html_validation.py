import os
import requests
import sys

folderPath = "../pages/"
allFiles = os.listdir(folderPath)


def get_permalink(filePath):
    with open(filePath, "r") as f:
        data = f.read().split("\n")
        for each in data:
            if "permalink" in each:
                permalink = each.split(":")[1].strip()
                get_status_code(permalink)


def get_status_code(permalink):
    bass_url = "http://localhost:4000"
    response = requests.get(bass_url + permalink)
    status_code = response.status_code
    print(permalink, status_code)
    return status_code


for each in allFiles:
    if(os.path.isdir(folderPath+each)):
        files = os.listdir(folderPath+each)
        for eachFile in files:
            filePath = folderPath + each + "/" + eachFile
            get_permalink(filePath)

    else:
        filePath = folderPath + each
        get_permalink(filePath)
