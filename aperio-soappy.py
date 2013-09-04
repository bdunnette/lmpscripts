import SOAPpy
service_url = "https://gleason.ahc.umn.edu/dataserver/Aperio.Security/Logon?method=wsdl"
namespace = "http://www.aperio.com/webservices"
client = SOAPpy.SOAPProxy(service_url, namespace)
client.config.dumpSOAPOut = 1
client.config.dumpSOAPIn = 1
print client.Logon()
