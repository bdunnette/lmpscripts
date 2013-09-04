import csv
import sys
import oboparser

filename = sys.argv[1]
reader = csv.reader(open(filename, 'r'))
writer = csv.writer(open(filename.replace('.csv', '-tagged.csv'), 'w'))
cases = {}
do_filename = 'HumanDO.obo'
do_data = oboparser.parse(do_filename, ['is_a'])
print do_data.get_terms()
for row in reader:
    case_title = row[0].strip('" ')
    print case_title.lower(), do_data.get_term(case_title.lower())