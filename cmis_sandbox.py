import cmislib
import sys

cmisClient = cmislib.CmisClient('http://160.94.51.184:8080/alfresco/cmisatom', sys.argv[1], sys.argv[2])
repo = cmisClient.defaultRepository
print repo
rootFolder = repo.rootFolder
print rootFolder
props = rootFolder.properties
print props
children = rootFolder.getChildren()
for child in children:
    print child, child.properties['cmis:name']
    print child.properties
