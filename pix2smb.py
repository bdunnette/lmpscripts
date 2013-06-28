import sys
import os
import shutil
import argparse
from datetime import date

parser = argparse.ArgumentParser(description='Copy image files to server')
parser.add_argument('cases', help='case ID(s) to copy', nargs='+')
parser.add_argument('--source_dir', help='directory to copy images from', default='D:\\')
parser.add_argument('--dest_dir', help='directory to copy images to', default='\\\\labmed.ahc.umn.edu\\labmed\\LabMed\\Path\\Images')
parser.add_argument('--move_to', help='directory to move copied files to')
#parser.add_argument('--dest_dir', help='directory to copy images to', default='C:\\temp')
parser.add_argument('--type', help='type of images being transferred', default='EM')
parser.add_argument('--facility', help='facility where images were taken', default='UMMCF')
parser.add_argument("-v", "--verbose", help="increase output verbosity", action="store_true")
args = parser.parse_args()
#print args
ctime = date.fromtimestamp(os.path.getctime(args.source_dir))
for case_id in args.cases:
	case_id = case_id.upper()
	if args.type.capitalize() == 'Grosslab':
		destination = '\\'.join([args.dest_dir, args.type, str(ctime.year), args.facility, case_id])
	else:
		destination = '\\'.join([args.dest_dir, args.type, str(ctime.year), case_id])
	if args.verbose:
		print "Copying files for case %s to %s" % (case_id, destination)
	shutil.copytree(args.source_dir, destination)
	if args.move_to:
		shutil.move(args.source_dir, '\\'.join([args.move_to, case_id]))
