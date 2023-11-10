import re
from flask import request
from application.utilities.response import api_response_error, api_response_success
from application.constants.phoneNumberData import GSM_PREFIXES, AREA_CODES

class PhoneNumberController:
    @staticmethod
    def check_number ():
        phoneNumber = request.args.get("phone")
        try:
            patternValidPhoneNumber = r"^(\+?62|0)(\d{3})\d{7,9}$"
            match = re.match(patternValidPhoneNumber, phoneNumber)
            
            countryPhoneCode = match.group(1)
            prefixCode = match.group(2)
            
            if not prefixCode in  GSM_PREFIXES:
                # type it's home phone number
                return api_response_success({
                  "type": "home",
                  "area_code": AREA_CODES[prefixCode]
                })
            else:
                return api_response_success({
                  "type": "mobile",
                  "provider": GSM_PREFIXES[prefixCode],
                  "phone": phoneNumber,
                  
                })
        except Exception as err:
            return api_response_error("inavlid phone number format, ex: 6288xxxxxxxxxx")
    @staticmethod
    def generator ():
        pass