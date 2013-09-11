import requests
import json
import omeka_api_config
from subprocess import call

api_endpoint = omeka_api_config.API_ENDPOINT
api_key = omeka_api_config.API_KEY

item_list = requests.get(api_endpoint + "items?per_page=250").json()
for item in item_list:
    case_title = item['element_texts'][0]['text'].strip()
    print case_title
    item_files = requests.get(api_endpoint + "files?item=" + str(item['id'])).json()
    for file in item_files:
    	if 'marked' not in file['original_filename']:
			marked_url = file['original_filename'].replace("_images", "_marked").replace("160.94.51.142", "160.94.51.184")
			print marked_url
			marked_file = requests.get(marked_url)
			if marked_file.status_code == 200:
				marked_filename = marked_url.rsplit("/",1)[1].replace(".jpg", "_marked.jpg")
				marked_file_local = open(marked_filename, "wb")
				marked_file_local.write(marked_file.content)
				marked_file_local.close()
				# Unfortunately, when posting both file and data, requests 1.2.3 doesn't seem to be compatible with Omeka's API... so we'll shell out to curl.
				call("/usr/bin/curl --form file=@%s --form data='{\"item\": {\"id\":%s}}' %sfiles?key=%s" % (marked_filename, item['id'], api_endpoint, api_key), shell=True)