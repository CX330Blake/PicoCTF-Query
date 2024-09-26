import requests

username = "CX330Blake"
url = f"https://leetcode.com/u/{username}"

response = requests.get(url)
print("Y" if "Edit" in response.text else "N")
