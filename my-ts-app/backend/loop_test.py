import json

def safe_parse(reply):
    try:
        data = json.loads(reply)
       
        return data
    except json.JSONDecodeError:
       return '{"error": "bad reply"}'