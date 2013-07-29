import sys
import csv
import getopt
from pyparsing import *

TRUE = Keyword("true").setParseAction( replaceWith(True) )
FALSE = Keyword("false").setParseAction( replaceWith(False) )
NULL = Keyword("null").setParseAction( replaceWith(None) )

jsonString = dblQuotedString.setParseAction( removeQuotes )
jsonNumber = Combine( Optional('-') + ( '0' | Word('123456789',nums) ) +
                    Optional( '.' + Word(nums) ) +
                    Optional( Word('eE',exact=1) + Word(nums+'+-',nums) ) )

jsonObject = Forward()
jsonVar = Forward()
varValue = Forward()
jsonValue = Forward()
jsonElements = delimitedList( jsonValue )
jsonArray = Group(Suppress('[') + Optional(jsonElements) + Suppress(']') )
jsonValue << ( jsonString | jsonNumber | Group(jsonObject)  | jsonArray | TRUE | FALSE | NULL )
varValue = Word( alphas+"_", alphanums+"_" )
memberDef = Group( jsonString + Suppress(':') + jsonValue )
jsonMembers = delimitedList( memberDef )
varName = Word( alphas+"_", alphanums+"_" )
jsonObject << Dict( Suppress('{') + Optional(jsonMembers) + Suppress('}') )
jsonVar << Dict( "var " + varName + '=' + varValue + Suppress(';'))

jsonComment = cppStyleComment 
jsonObject.ignore( jsonComment )
jsonVar.ignore( jsonComment )

def parse_js(js_file):
    vars = {}
    data = {}
    var_name = ''
    for line in js_file.readlines():
        if line.strip()[:3] == 'var':
            vars[var_name] = data
            data = {}
            var_name = line[3:].split()[0]
            vars[var_name] = {}
        else:
            vals = commaSeparatedList.parseString(line)
            print var_name, vals
            if len(vals) > 1:
                data[vals[0]] = vals
    return vars

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
        csv_file = csv.writer(open('hd1.csv', 'w'))
        js_files = ['N:\LabMed\Medical School\HD-1\HD1 2012-13\HD1 2012-13 CD\Contents\data.js',
                    'N:\LabMed\Medical School\HD-2\HD2 2012-13\HD2 CD\lib\js\data.js']
        for filename in js_files:
            print filename
            js_file = open(filename)
            vars = jsonVar.parseString(js_file.read())
            print vars
            # for var in vars:
                # if var[:len(var)-1] == 'period':
                    # print var, vars[var]
                # if 'lab' in var:
                    # lab_id = var
                    # lab = vars[var]
                    # for case_id in lab:
                        # case = lab[case_id]
                        # print "Title:", case[1]
                        # if case[2] in vars:
                            # case_resources = vars[case[2]]
                            # for resource in case_resources:
                                # resource_data = [item.strip("'[]") for item in case_resources[resource]]
                                # resource_data.insert(0, lab_id.lower())
                                # csv_file.writerow(resource_data)
    except Usage, err:
        print >>sys.stderr, err.msg
        print >>sys.stderr, "for help use --help"
        return 2

if __name__ == "__main__":
    sys.exit(main())