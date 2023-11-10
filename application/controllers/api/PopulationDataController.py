import re
from flask import request
from application.utilities.response import api_response_error, api_response_success
from application.utilities.kk import parse_district, parse_subdistrict, parse_birthdate, parse_province

class PopulationDataController:
    @staticmethod
    def ID_number ():
        nik = request.args.get("nik")
        
        try:
          pattern = r"^(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{4})$"
          match = re.match(pattern, nik)
          if not match:
              raise Exception("invalid nik")
          
          province = match.group(1)
          district = match.group(2)
          subdistrict = match.group(3)
          dateOfBirth = match.group(4)
          monthOfBirth = match.group(5)
          yearOfBirth = match.group(6)
          uniqid = match.group(7)
          
          return api_response_success({
            "nik": nik,
            "province": parse_province(province),
            "district": parse_district(province + district),
            "subdistrict": parse_subdistrict(province + district + subdistrict),
            "birthdate": parse_birthdate(dateOfBirth, monthOfBirth, yearOfBirth),
            "uniqid": uniqid,
          })
        except Exception as err:
            return api_response_error("invalid nik")