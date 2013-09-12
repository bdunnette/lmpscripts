import requests
import json

upload_file = requests.post("http://160.94.51.184/omeka/api/files", data={"data": {"item": {"id": 13456}}, "file": ("filename.txt", "Just some text...")})
print upload_file.json()
