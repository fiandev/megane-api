"""
https://lahelu.com/api/post/get-posts?feed=1&page=2
"""
from flask import request
import requests as xhr
import json, re
from application.utilities.response import api_response_error, api_response_success

CACHE_LAHELU_URL = "https://cache.lahelu.com/"
SHOW_POST_LAHELU_URL = "https://lahelu.com/post/"
LAHELU_MEME_CATEGORIES = {
  "0": "lucu", 
  "20": "relate", 
  "12": "olahraga", 
  "2": "gaming", 
  "22": "nostalgia", 
  "27": "teknologi", 
  "17": "komik", 
  "3": "wtf", 
  "16": "sains", 
  "9": "random", 
  "21": "original", 
  "4": "fakta", 
  "23": "tebakan", 
  "5": "anime", 
  "6": "opini", 
  "14": "sejarah", 
  "25": "musik", 
  "1": "dark", 
  "26": "kartun", 
  "15": "absurd", 
  "19": "sus", 
  "7": "berita", 
  "8": "sindiran", 
  "24": "sad", 
  "18": "cringe", 
  "13": "religius", 
  "11": "binatang", 
  "10": "art"
}

def parseVector (text):
    items = list(text.split(" "))
    pattern = r"^(\'(.*?)\'):(\d+)"
    vectors = []
    
    for item in items:
        match = re.match(pattern, item)
        vectors.append({
          "name": match.group(2),
          "count": int(match.group(3)),
        })
    return vectors

class LaheluController:
    @staticmethod
    def all_memes ():
        page = request.args.get("page")
        try:
            results = []
            otherStateData = {}
            params = {
              "feed": 1,
              "page": page
            }
            response = xhr.get(f"https://lahelu.com/api/post/get-posts", params=params)
            responseData = response.json()
            items = responseData["postInfos"]
           
            for item in items:
                item["postUrl"] = SHOW_POST_LAHELU_URL + item["postID"]
                item["media"] = CACHE_LAHELU_URL + item["media"]
                item["userAvatar"] = item["userAvatar"]
                item["categories"] = list(map(lambda categoryId: LAHELU_MEME_CATEGORIES[str(categoryId)], item["categories"]))
                
                del item["searchVector"]
                results.append(item)
            
            otherStateData["hasMore"] = responseData["hasMore"]
            otherStateData["nextPage"] = responseData["nextPage"]
            
            return api_response_success(results, otherStateData=otherStateData)
        except Exception as err:
            return api_response_error(str(err))
            
    @staticmethod
    def downloader():
        page = request.args.get("page")
        try:
            results = []
            otherStateData = {}
            params = {
              "feed": 1,
              "page": page
            }
            response = xhr.get(f"https://lahelu.com/api/post/get-posts", params=params)
            responseData = response.json()
            items = responseData["postInfos"]
           
            for item in items:
                item["postUrl"] = SHOW_POST_LAHELU_URL + item["postID"]
                item["media"] = CACHE_LAHELU_URL + item["media"]
                item["userAvatar"] = CACHE_LAHELU_URL + item["userAvatar"]
                item["categories"] = list(map(lambda categoryId: LAHELU_MEME_CATEGORIES[str(categoryId)], item["categories"]))
                
                del item["searchVector"]
                results.append(item)
            
            otherStateData["hasMore"] = responseData["hasMore"]
            otherStateData["nextPage"] = responseData["nextPage"]
            
            return api_response_success(results, otherStateData=otherStateData)
        except Exception as err:
            return api_response_error(str(err))