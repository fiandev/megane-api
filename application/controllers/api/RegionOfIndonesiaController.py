import json
from flask import jsonify, request
from application.utilities.response import api_response_error, api_response_success
from application.constants.pathfiles import LIST_DISTRICTS_PATHFILE, LIST_DATA_PATHFILE

class RegionOfIndonesiaController:
    @staticmethod
    def search_district ():
        query = request.args.get("search")
        
        try:
            items = results = []
            
            with open(LIST_DATA_PATHFILE + "/districts.json") as file:
                items = json.loads(file.read())
                file.close()
            
            for item in items:
                if item["name"].lower().find(query.lower()) > -1:
                    results.append(item)
            
            return api_response_success(results)
        except Exception as err:
            return api_response_error(f"kecamatan { query } tidak ditemukan !")
            
    def search_province ():
        query = request.args.get("search")
        
        try:
            items = results = []
            
            with open(LIST_DATA_PATHFILE + "/provinces.json") as file:
                items = json.loads(file.read())
                file.close()
            
            for item in items:
                if item["name"].lower().find(query.lower()) > -1:
                    results.append(item)
            
            return api_response_success(results)
        except Exception as err:
            return api_response_error(f"provinsi { query } tidak ditemukan !")