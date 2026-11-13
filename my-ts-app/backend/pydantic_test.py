import json

def safe_parse(reply):
    try:
        data = json.loads(reply)       # can crash, so it sits inside try
        return data                    # worked: hand back the dictionary
    except json.JSONDecodeError:
        return {"error": "bad reply"}  # failed: hand back an error dictionary


print(safe_parse('{"field": "email"}'))
print(safe_parse('Here is your JSON: {"field": "email"}'))
print(safe_parse(''))