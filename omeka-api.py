import requests
import json
import sys
import pprint

endpoint = 'http://160.94.51.142/omeka/api/'
item_id = '13462'
file_json = requests.get('http://160.94.51.142/omeka/api/files/4446').json()
pprint.pprint(file_json)

default_element_set = requests.get('http://160.94.51.142/omeka/api/element_sets/1').json()
title_element = requests.get('http://160.94.51.142/omeka/api/elements?name=Title').json()
title_element_id = title_element[0]['id']

file_update_url = 'http://160.94.51.142/omeka/api/files/4442?key=%s' % sys.argv[1]
new_element = {'name': 'title', 'text': 'Gross of ARDS', 'html': False, 'element': {'id': title_element_id}}
file_json['element_texts'] = [new_element]
file_json['tags'] = ['foo']
file_updated = requests.put(file_update_url, data=json.dumps(file_json))
pprint.pprint(file_updated._content)