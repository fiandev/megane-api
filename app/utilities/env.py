import os
ENV_PATH_FILE = os.path.abspath("./.env")

def parse_env (path):
    cotnent = ""
    items = []
    with open(path) as file:
        content = file.read()
        file.close()
        
    items = list(content.split("\n"))
    result = {}
    
    for item in items:
        splited = list(item.split("="))
        key = splited[0].strip()
        value = splited[1].replace('"', "").replace("'", '').strip()
        result[key] = value
    
    return result

def env(key, alternativeValue = None):
    items = parse_env(ENV_PATH_FILE)
    
    return items[key] if key in items else alternativeValue
