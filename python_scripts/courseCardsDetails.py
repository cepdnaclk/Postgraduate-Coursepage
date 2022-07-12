# Python script to generate the json file to display all the course cards.
# Collect data from courses frontmatter & create the json file.
# Run this if you add a new course or change the existing course frontmatter details.

# Author: E/18/203 Shehan Madhusanka - e18203@eng.pdn.ac.lk

import os
import json
import requests
import sys

jsonDetails = []
jsonFilePath = "../_data/course_cards.json"


def get_course_details():
    folderPath = "../pages/courses/"
    allFiles = os.listdir(folderPath)

    for eachCourse in allFiles:
        currentCoursePath = folderPath + eachCourse

        try:
            coursePage = open(currentCoursePath, "r")
            courseContent = coursePage.read().split('\n')
            coursePage.close()

            eachCourseDetails = {}
            for eachLine in courseContent:
                if "course_name" in eachLine:
                    eachCourseDetails["course_name"] = eachLine.split(":")[
                        1].strip()
                if "course_code" in eachLine:
                    eachCourseDetails["course_code"] = eachLine.split(":")[
                        1].strip()
                if "course_type" in eachLine:
                    eachCourseDetails["course_type"] = eachLine.split(":")[
                        1].strip()
                if "course_credits" in eachLine:
                    eachCourseDetails["course_credits"] = eachLine.split(":")[
                        1].strip()
                if "permalink" in eachLine:
                    eachCourseDetails["coursePage_url"] = eachLine.split(":")[
                        1].strip()
                if "email_coordinator" in eachLine:
                    eachCourseDetails["email_coordinator"] = eachLine.split(":")[
                        1].strip()

        except:
            sys.exit("Cannot open the " + currentCoursePath + " file")

        jsonDetails.append(eachCourseDetails)


def get_lecturer_details():
    apiIndex = "https://api.ce.pdn.ac.lk/people/v1/staff/"

    for each in jsonDetails:
        staffMemberID = each["email_coordinator"].split("@")[0].strip()
        url = apiIndex + staffMemberID

        r = requests.get(url)
        if(r.status_code == 200):
            data = json.loads(r.text)
            each["course_coordinator"] = data["name"]
            each["course_coordinator_img"] = data["profile_image"]

        else:
            print("ERROR : " + url + " : " + str(r.status_code))
            each["course_coordinator"] = "#"
            each["course_coordinator_img"] = "#"


def start_writing():
    with open(jsonFilePath, "w") as f:
        f.write("[")
        f.close()


def add_content():
    with open(jsonFilePath, "a") as f:
        for i in range(len(jsonDetails)):
            f.write('''
    {
        "course_type" : "''' + jsonDetails[i]["course_type"]+'''",
        "course_code" : "''' + jsonDetails[i]["course_code"]+'''",
        "course_name" : "''' + jsonDetails[i]["course_name"]+'''",
        "course_credits" : "''' + jsonDetails[i]["course_credits"]+'''",
        "course_coordinator_img" : "''' + jsonDetails[i]["course_coordinator_img"]+'''",
        "course_coordinator" : "''' + jsonDetails[i]["course_coordinator"]+'''",
        "coursePage_url" : "''' + jsonDetails[i]["coursePage_url"]+'''"
    }''')
            if(i != len(jsonDetails)-1):
                f.write(",")
        f.close()


def end_writing():
    with open(jsonFilePath, "a") as f:
        f.write("\n]")
        f.close()
        print("JsonFile Succesfully Created")


def run():
    get_course_details()
    get_lecturer_details()
    start_writing()
    add_content()
    end_writing()


if __name__ == "__main__":
    print("Running")
    run()
