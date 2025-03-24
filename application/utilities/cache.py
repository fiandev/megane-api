import os
import time
from application.constants.pathfiles import PROJECT_PATH

def cache (key, value = None, ttl = 60):
    if not os.path.exists(f"{PROJECT_PATH}/.cache"):
        os.makedirs(f"{PROJECT_PATH}/.cache")
    
    if os.path.exists(f"{PROJECT_PATH}/.cache/{key}") and not value:
        with open(f"{PROJECT_PATH}/.cache/{key}", "r+") as file:
            cache_data = file.read().splitlines()
            cached_at = float(cache_data[0])

            if time.time() - cached_at > ttl:
                return None
            else:
                return bytes.fromhex(cache_data[1]).decode("utf-8")
    else:
        encoded_value = bytes(value, "utf-8").hex()

        with open(f"{PROJECT_PATH}/.cache/{key}", "w+") as file:
            file.write(f"{time.time()}\n{encoded_value}")
            file.close()
            
        return value
