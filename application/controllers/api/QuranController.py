"""
endpoints
https://api.npoint.io/99c279bb173a6e28359c/data
"""
import json
from flask import request
import requests as xhr
from application.utilities.response import api_response_error, api_response_success

class QuranController:
    @staticmethod 
    def list_surah():
        try:
            response = xhr.get("https://api.npoint.io/99c279bb173a6e28359c/data")
            data = response.json()
            
            return api_response_success(data)
        except Exception as err:
            return api_response_error(f"[{ str(err) }], please contact author : https://github.com/fiandev")
    
    def show_surah(surah_id):
        try:
            if int(surah_id) < 1 or int(surah_id) > 114:
                raise Exception("invalid surah_id value")
            
            response = xhr.get(f"https://quran-api-32ouuhnph-renomureza.vercel.app/surahs/{surah_id}")
            data = response.json()
            
            return api_response_success(data)
        except Exception as err:
            return api_response_error(f"{ str(err) }, please contact author : https://github.com/fiandev", code=404)
    
    def show_juz(juz_id):
        try:
            if int(juz_id) < 1 or int(juz_id) > 30:
                raise Exception("invalid juz_id value")
            response = xhr.get(f"https://quran-6g54mk0s9-gadingnst.vercel.app/juz/{ juz_id }")
            data = response.json()
            
            return api_response_success(data["data"])
        except Exception as err:
            return api_response_error(f"{ str(err) }, please contact author : https://github.com/fiandev")
    
    def search_quran ():
        try:
            search = None
            limit = 3
            results = []
            start = 1
            end = 30
            
            try:
                search = request.args.get("search")
                limit = int(request.args.get("limit"))
                start = int(request.args.get("start"))
                end = int(request.args.get("end"))
            except Exception as err:
                return api_response_error("invalid parameter", code=201)
            
            if not search:
                raise Exception("receive null on search parameter")
            
            if start < 1:
                raise Exception("invalid start juzId")
            if end > 30:
                raise Exception("invalid end juzId")
            
            for juzId in range(start, end + 1):
                response = xhr.get(f"https://quran-6g54mk0s9-gadingnst.vercel.app/juz/{ juzId }")
                data = response.json()
                
                if not data["data"]["verses"]:
                    continue
                for ayah in data["data"]["verses"]:
                    if ayah["translation"]["id"].find(search) > -1 or ayah["tafsir"]["id"]["short"].find(search) > -1:
                        ayahId = ayah["number"]["inQuran"]
                        result = {
                          "ayah_number": ayahId,
                          "translation": ayah["translation"]["id"],
                          "tafsir": ayah["tafsir"]["id"]["short"],
                          "context": {}
                        }
                        contextData = xhr.get(f"https://api-alquran-cloud.translate.goog/v1/ayah/{ ayahId }/id").json()
                        result['context'] = {
                          "surah_name": contextData["data"]["surah"]["englishName"],
                          "revelation": contextData["data"]["surah"]["revelationType"],
                          "numberInSurah": contextData["data"]["numberInSurah"],
                          "text": contextData["data"]["text"],
                        }
                        
                        results.append(result)
                if len(results) >= limit:
                    break
            
            return api_response_success(results, otherStateData={
              "query": search,
              "range": f"juz { start } - juz { end }"
            })
        except Exception as err:
            raise err
            return api_response_error(f"{ str(err) }, please contact author : https://github.com/fiandev")