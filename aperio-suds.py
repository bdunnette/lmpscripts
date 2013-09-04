# This program is free software; you can redistribute it and/or modify
# it under the terms of the (LGPL) GNU Lesser General Public License as
# published by the Free Software Foundation; either version 3 of the 
# License, or (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Library Lesser General Public License for more details at
# ( http://www.gnu.org/licenses/lgpl.html ).
#
# You should have received a copy of the GNU Lesser General Public License
# along with this program; if not, write to the Free Software
# Foundation, Inc., 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
# written by: Jeff Ortel ( jortel@redhat.com )

import sys
import urllib
import logging
import traceback as tb
import suds.metrics as metrics
from suds import WebFault
from suds.client import Client

errors = 0

#setup_logging()

logging.getLogger('suds.client').setLevel(logging.DEBUG)
logging.getLogger('suds.metrics').setLevel(logging.DEBUG)
logging.getLogger('suds').setLevel(logging.DEBUG)

try:
    url = 'http://gleason.ahc.umn.edu/dataserver/Aperio.Images/Image?method=wsdl'
    data = urllib.urlopen(url).read()
    print "Data: " + data
    client = Client(url)
    print client.factory.resolver.schema
    print client
    print 'Logon()'
    reply = client.service.Logon('lampstudent','pass')
    print reply
except WebFault, f:
    errors += 1
    print f
    print f.fault
except Exception, e:
    errors += 1
    print e
    tb.print_exc()

print '\nFinished: errors = %d' % errors

