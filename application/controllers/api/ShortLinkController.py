import pyshorteners
from flask import request
from application.utilities.response import api_response_error, api_response_success

class ShortLinkController:
    @staticmethod
    def generate ():
        defaultVendor = "tinyurl"
        withoutApikeyVendors = ["tinyurl", "qpsru", "osdb", "owly", "isgd"]
        errorVendors = ["gitio"]
        
        url = request.args.get("url")
        apikey = request.args.get("apikey") if request.args.get("apikey") else "APIKEY"
        vendor = request.args.get("vendor") if request.args.get("vendor") else defaultVendor
        
        try:
            shortener = pyshorteners.Shortener(api_key=apikey)
            urlShorten = ""
            
            """
            error API
            """
            if vendor in errorVendors:
                raise Exception(f"sorry vendor { vendor } not available right now !")
            if not vendor in withoutApikeyVendors:
                if not apikey:
                    raise Exception(f"please add apikey parameter when using '{ vendor }' vendor")
            if not url:
                raise Exception("fill url argument first !")
            
            return api_response_success({
              "url": getattr(shortener, vendor).short(url) if hasattr(shortener, vendor) else getattr(shortener, defaultVendor).short(url)
            })
        except Exception as err:
            return api_response_error(str(err), code=201)