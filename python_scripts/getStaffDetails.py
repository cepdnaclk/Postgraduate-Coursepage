# Update the Project information from the Publication API, pre-process and
# link with the student and staff profile pages

# Author: E/15/150 Nuwan Jaliyagoda - nuwanjaliyagoda@eng.pdn.ac.lk

import requests
import os
import json

try:
    url = "https://api.ce.pdn.ac.lk/people/v1/staff/all/index.json"
    r = requests.get(url)

    if r.status_code == 200:
        # it is available
        staff_details = json.loads(r.text)
        filename = "../_data/staff_details.json"
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        with open(filename, "w") as f:
            f.write(json.dumps(staff_details, indent=4))

        print("Staff-Details: Success")
    else:
        print("Staff-Details: Failed")

except:
    print('parse failed; ' + url)
