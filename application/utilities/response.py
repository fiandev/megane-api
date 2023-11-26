from flask import jsonify
from datetime import datetime

def response_json (data, code):
    return jsonify(data), code

def api_response_error (message, code = 500):
    return response_json({
      "code": code,
      "status": "failed",
      "message": message,
      "server_time": datetime.now(),
      "author": "fiandev",
      "docs": "https://megane-api.fiandev.my.id/",
    }, code)

def api_response_success (data, status = "success", code = 200, otherStateData = {}):
    responseTemplate = {
      "code": code,
      "status": status,
      "server_time": datetime.now(),
      "data": data,
      "author": "fiandev",
      "docs": "https://megane-api.fiandev.my.id/",
    }
    
    for key in otherStateData:
        responseTemplate[key] = otherStateData[key]
    
    return response_json(responseTemplate, code)