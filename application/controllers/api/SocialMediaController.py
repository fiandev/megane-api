import requests as xhr
import re
from application.utilities.response import api_response_error, api_response_success
from application.utilities.request import get_params
from application.utilities.parser import parse_title

IG_DOWNLODER_API_URL = "https://aemt.me/download/igdl"
TIKTOK_DOWNLODER_API_URL = "https://aemt.me/download/tikdl"
TIKTOK_SLIDE_DOWNLODER_API_URL = "https://aemt.me/download/tiktokslide"
TIKTOK_RANDOM_USERPOST_API_URL = "https://aemt.me/download/asupantt"

VALID_VT_URL = r"^((http(s)?)\:\/\/)?vt.tiktok.com/((\w|\d)+)\/?$"

class SocialMediaController ():
    @staticmethod
    def ig_downloader ():
        try:
            url = get_params("url")
            data = xhr.get(f"{ IG_DOWNLODER_API_URL }?url={ url }").json()
            result = data["result"]
            
            return api_response_success(result)
        except Exception as err:
            return api_response_error(str(err))
    
    def tiktok_downloader ():
        try:
            url = get_params("url")
            
            if not re.match(VALID_VT_URL, url):
                raise Exception("invalid vt url !")
                
            data = xhr.get(f"{ TIKTOK_DOWNLODER_API_URL }/?url={ url }").json()
            result = data["result"]
            
            return api_response_success({
              "thumbnail": result["info_video"]["thumbnail"],
              "post_author": result["author_info"],
              "media": {
                "no_watermark": result["url"]["nowm"],
                "watermark": result["url"]["wm"],
                "music": result["url"]["audio"],
              }
            })
        except Exception as err:
            return api_response_error(str(err))
    
    def tiktok_slide_downloader ():
        try:
            url = get_params("url")
            
            if not re.match(VALID_VT_URL, url):
                raise Exception("invalid vt url !")
                
            data = xhr.get(f"{ TIKTOK_SLIDE_DOWNLODER_API_URL }/?url={ url }").json()
            result = data["result"]["data"]
            
            return api_response_success({
              "cover": result["cover"],
              "post_author": result["author"],
              "images": result["images"],
              "media": {
                "music": result["music"],
              }
            })
        except Exception as err:
            return api_response_error(str(err))
    
    def tiktok_random_user_post ():
        try:
            username = get_params("username")
            
            data = xhr.get(f"{ TIKTOK_RANDOM_USERPOST_API_URL }/?username={ username }").json()
            result = data["result"]["data"]
            parsed_title = parse_title(result["caption"])
            
            return api_response_success({
              "title": result["caption"],
              **parsed_title,
              "post_author": result["author"],
              "media": {
                "music": result["music"]["play"],
                "no_watermark": result["video"],
              }
            })
        except Exception as err:
            return api_response_error(str(err))
    
    def tiktok_statistic ():
        try:
            url = get_params("url")
            
            if not re.match(VALID_VT_URL, url):
                raise Exception("invalid vt url !")
                
            data = xhr.get(f"{ TIKTOK_DOWNLODER_API_URL }/?url={ url }").json()
            result = data["result"]
            parsed_title = parse_title(result["info_video"]["title"])
            
            return api_response_success({
              **result["info_video"],
              **parsed_title,
              "post_author": result["author_info"],
              "media": {
                "no_watermark": result["url"]["nowm"],
                "watermark": result["url"]["wm"],
                "music": result["url"]["audio"],
              }
            })
        except Exception as err:
            return api_response_error(str(err))