from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "http://127.0.0.1:3000"])
 # Only allow React app

@app.route("/members")
def members():
    return jsonify({"members": ["Member1", "Member2", "Member3"]})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
