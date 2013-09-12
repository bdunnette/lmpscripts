import requests
import json
import sys
import pprint
import omeka_api_config
from StringIO import StringIO

api_endpoint = omeka_api_config.API_ENDPOINT
api_key = omeka_api_config.API_KEY

title_element = requests.get(api_endpoint + "elements?name=Title").json()
print title_element
title_element_id = title_element[0]['id']

images = {}

item_list = requests.get(api_endpoint + "items?per_page=250").json()

for item in item_list:
    case_title = item['element_texts'][0]['text'].strip()
    print item['id'], case_title
    item_files = requests.get(api_endpoint + "files?item=" + str(item['id'])).json()
    for file in item_files:
        #print file
        unmarked = file['original_filename']
        marked = unmarked.replace("160.94.51.142", "160.94.51.184").replace("_images", "_marked")
        marked_file = requests.get(marked)
        if marked_file.status_code == 200:
            print "Found %s!" % marked
            marked_filename = marked.rsplit("/",1)[1].replace(".jpg", "_marked.jpg")
            marked_file_local = open(marked_filename, "wb")
            marked_file_local.write(marked_file.content)
            marked_file_local.close()
            marked_file_local = open(marked_filename, "rb")
            upload_data = {"order": "2"}
            print upload_data
            upload_file = {"file": (marked_filename, marked_file_local.read())}
            #print upload_file
            uploaded_file = requests.post(api_endpoint + 'files?key=%s' % api_key, data={"data": upload_data, "file": upload_file})
            print uploaded_file
        
        
        
            