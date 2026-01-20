from flask import Flask, request
from sample_service import find_one, update_one

app = Flask(__name__)

@app.get("/sample/<id>")
def find_sample(id: int):
  return find_one(id)

@app.post("/sample/submit")
def submit_sample():
  form = request.form

  sample_id: int = form.get('sample_id', None)
  collection_date: str = form.get('collection_date', None)
  notes: str = form.get('notes', '')

  if not sample_id and not collection_date:
      raise Exception('Submit missing sample_id or collection_date')
  
  return update_one(sample_id, collection_date, notes)
