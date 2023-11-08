from flask import Flask, request, jsonify
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS

UPLOAD_FOLDER = 'uploads/'
project_id = 'xxxxx'
region = 'xxxxxx1'
cluster_name = 'xxxxx'
JAR_FILE = 'xxxxxx'

app = Flask(__name__)
CORS(app, origins=["*"])
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

searchByTerm_TestData = {
    "searchTerm": "KING",
    "executionTime": 300,
    "results": [
        {
            "docID": 1,
            "docFolder": "histories",
            "docName": "1kinghenryiv",
            "frequencies": 169
        },
        {
            "docID": 2,
            "docFolder": "histories",
            "docName": "1kinghenryiv",
            "frequencies": 160
        }
    ]
}

searchByTopN_TestData = {
    "topN": 3,
    "results": [
        {
            "term": "KING",
            "totalFrequencies": 5000
        },
        {
            "term": "HENRY",
            "totalFrequencies": 4500
        },
        {
            "term": "THE",
            "totalFrequencies": 4000
        }
    ]
}


# Path to upload docs into backend application folder
@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify(success=False, error="No file part"), 401

    files = request.files.getlist('file')
    for f in files:
        if f.filename == '':
            return jsonify(success=False, error="No selected file"), 402
        if f:
            filename = secure_filename(f.filename)
            path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            f.save(path)
        else:
            return jsonify(success=False, error="File type not allowed"), 403
    print("Successful")
    return jsonify(success=True), 200


@app.route('/search/byterm', methods=['POST'])
def search_by_term():
    # if request.json is None:
    #     return jsonify(error="Invalid JSON"), 400

    # term = request.json.get('term')

    # if not term:
    #     return jsonify(error="Query parameter missing or not valid"), 400

    # results = []

    # return jsonify(results=results), 200
    return jsonify(searchByTerm_TestData), 200


@app.route('/search/topn', methods=['POST'])
def search_by_topn():
    # if request.json is None:
    #     return jsonify(error="Invalid JSON"), 400

    # topN = request.json.get('topN')

    # if topN is None:
    #     return jsonify(error="Query parameter missing"), 400

    # if not str(topN).isdigit() or int(topN) <= 0:
    #     return jsonify(error="Query parameter not valid"), 400

    return jsonify(searchByTopN_TestData), 200


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
