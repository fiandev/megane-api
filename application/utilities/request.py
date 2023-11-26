from flask import request

def get_params (*keys):
    results = {}
    
    for key in set(keys):
        value = request.args.get(key)
        
        if not isinstance(key, str):
            raise Exception(f"data type of key must be string, but '{ type(key) }' received !")
        if not value:
            raise Exception (f"parameter '{ key }' is doesn't passed")
        if len(keys) == 1:
            return value
        results[key] = value
        
    return results

