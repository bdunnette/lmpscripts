import sys
import getopt
import csv
import urllib
import oboparser

class Usage(Exception):
    def __init__(self, msg):
        self.msg = msg

def main(argv=None):
    if argv is None:
        argv = sys.argv
    try:
        try:
            opts, args = getopt.getopt(argv[1:], "h", ["help"])
        except getopt.error, msg:
             raise Usage(msg)
        do_filename = 'HumanDO.obo'
        do_file = open(do_filename, 'w')
        do_csv = csv.writer(open('HumanDO.csv', 'w'))
        print "Downloading HumanDO file..."
        do_svn = urllib.urlopen('http://diseaseontology.svn.sourceforge.net/svnroot/diseaseontology/trunk/HumanDO.obo')
        do_text = do_svn.read()
        print "Writing to file..."
        do_file.write(do_text)
        do_file.close()
        print "Parsing data..."
        do_data = oboparser.parse(do_filename, ['is_a'])
        for term in do_data.get_terms():
            do_csv.writerow([term.id, term.name, term.definition, str([synonym[0] for synonym in term.synonyms if synonym[1] == 'EXACT']).strip("[]"), str([relationship[2] for relationship in term.relationships]).strip("[]")])
    except Usage, err:
        print >>sys.stderr, err.msg
        print >>sys.stderr, "for help use --help"
        return 2

if __name__ == "__main__":
    sys.exit(main())