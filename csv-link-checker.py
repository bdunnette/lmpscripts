import csv
import urllib
import sys

filename = sys.argv[1]
reader = csv.reader(open(filename, 'r'))
writer = csv.writer(open(filename.replace('.csv', '-checked.csv'), 'w'))
for row in reader:
    url = row[0]
    if urllib.urlopen(url).getcode() == 200:
        writer.writerow(row)
    else:
        print "%s not found, skipping..." % url