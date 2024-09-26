from flask import Flask, jsonify, request
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)


@app.route("/api/greet", methods=["POST"])
def greet():
    data = request.get_json()
    username = data.get("username", "Guest")
    return jsonify({"message": f"Hello, {username}!"}), 200


@app.route("/api/getData", methods=["POST"])
def get_data():
    username = request.get_json()
    username = username.get("username")
    url = f"https://leetcode.com/u/{username}"
    res = requests.get(url)
    return jsonify(res.json())


if __name__ == "__main__":
    app.run(debug=True)
