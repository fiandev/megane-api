import re

def parse_title (title: str) -> dict:
    VALID_USER_TAGGED = r"\@(\w+|\d+)"
    VALID_HASTAG = r"\#(\w+|\d+)"
    
    tags = re.findall(VALID_USER_TAGGED, title)
    hashtags = re.findall(VALID_HASTAG, title)
    
    return {
      "tags": list(map(lambda item: f"@{ item }", tags)),
      "hashtags": list(map(lambda item: f"#{ item }", hashtags)),
    }