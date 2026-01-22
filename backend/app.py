from flask import Flask, request, jsonify
from flask_cors import CORS
import sample_service as sample_service

app = Flask(__name__)
CORS(app)

@app.errorhandler(sample_service.SampleNotFoundException)
def handle_sample_not_found(e):
    return jsonify({"error": "Not Found", "message": str(e)}), 404

@app.errorhandler(ValueError)
def handle_value_error(e):
    return jsonify({"error": "Bad Request", "message": str(e)}), 400

@app.get("/sample/<id>")
def find_sample(id):
  return sample_service.find_one(id)

@app.post("/sample/submit")
def submit_sample():
  data = request.get_json()

  if 'sample_id' not in data or 'collection_date' not in data:
    return jsonify({"message": "Missing required fields"}), 400

  updated_sample = sample_service.update_one(
        data['sample_id'], 
        data['collection_date'], 
        data.get('notes', '')
    )

  return jsonify(updated_sample), 200
