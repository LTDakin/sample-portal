from flask import Flask, request, jsonify
from flask_cors import CORS
from sample_service import find_one, update_one, SampleNotFoundException

app = Flask(__name__)
CORS(app)

@app.get("/sample/<int:id>")
def find_sample(id):
  try:
    return find_one(id)
  except SampleNotFoundException as e:
    return jsonify({"message": str(e)}), 404

@app.post("/sample/submit")
def submit_sample():
  data = request.get_json()

  sample_id: int = data.get('sample_id', None)
  collection_date: str = data.get('collection_date', None)
  notes: str = data.get('notes', '')

  if not sample_id:
    return jsonify({"message": 'Submit missing sample_id'}), 400

  if not collection_date:
    return jsonify({"message": 'Submit missing collection_date'}), 400

  return update_one(sample_id, collection_date, notes)
