import csv
import urllib
import sys

filename = sys.argv[1]
reader = csv.reader(open(filename, 'r'), delimiter="|")
writer = csv.writer(open(filename.replace('.csv', '-checked.csv'), 'w'), delimiter="|")
cases = {}
for row in reader:
    case_title = row[0].strip('" ')
    cases[case_title] = []
    urls = row[1].split(",")
    for url in urls:
        if urllib.urlopen(url).getcode() == 200:
            cases[case_title].append(url)
        else:
            print "%s not found, skipping..." % url

for case in cases:
    if len(cases[case]):
        writer.writerow([case, ",".join(cases[case])])