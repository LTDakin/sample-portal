from flask import Flask, request, jsonify
from flask_cors import CORS
from sample_service import find_one, update_one, SampleNotFoundException

app = Flask(__name__)
CORS(app)

@app.get("/sample/<id>")
def find_sample(id):
  try:
    return find_one(id)
  except SampleNotFoundException as e:
    return jsonify({"message": str(e)}), 404
  except ValueError as e:
    return jsonify({"message": str(e)}), 400

@app.post("/sample/submit")
def submit_sample():
  data = request.get_json()

  sample_id: str = data.get('sample_id', None)
  collection_date: str = data.get('collection_date', None)
  notes: str = data.get('notes', '')

  if not sample_id:
    return jsonify({"message": 'Missing sample_id'}), 400

  if not collection_date:
    return jsonify({"message": 'Missing collection_date'}), 400

  try:
    return update_one(sample_id, collection_date, notes)
  except SampleNotFoundException as e:
    return jsonify({"message": str(e)}), 400
  except ValueError as e:
    return jsonify({"message": str(e)}), 400
