import requests
import json

endpoint = 'http://160.94.51.142/omeka/api/'
item_id = '13462'
file_json = requests.get('http://160.94.51.142/omeka/api/files/4446').json()
file_json['element_texts'] = {'text': 'Title goes here', 'html': False}
print file_json
file_updated = requests.put('http://160.94.51.142/omeka/api/files/4446', data=file_json)
print file_updated._content