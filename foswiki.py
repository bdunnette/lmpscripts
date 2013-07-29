import sys
import urllib
import urllib2

# Tries to open the url with the params through the method specified
def fetch_url(url, params, method):
  params = urllib.urlencode(params)
  if method=="GET":
    f = urllib2.urlopen(url+"?"+params)
  else:
    # Usually a POST
    f = urllib2.urlopen(url, params)
  return (f.read(), f.code)

url = "http://wiki.umn.edu/bin/login/Sandbox/BrianDunnetteSandbox"
method = "POST"
params = {"username": "dunn0172", "password": "@HoleyPatioMime"}

# Fetch the content and response code
[content, response_code] = fetch_url(url, params, method)

# Check if the server responded with a success code (200)
if (response_code == 200):
  print content
else:
  print response_code