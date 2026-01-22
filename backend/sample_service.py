from sample_data import temp_db
from datetime import date

class SampleNotFoundException(Exception):
  pass

def find_one(id: int):
  try:
    id = int(id)
  except (ValueError, TypeError):
    raise ValueError(f"Sample {id} not found")

  sample = temp_db.get(id, None)

  if not sample:
    raise SampleNotFoundException(f"Sample {id} not found")

  return sample

def update_one(sample_id: int, collection_date_str: str, notes: str):
  sample = find_one(sample_id)

  try:
    collection_date = date.fromisoformat(collection_date_str)
  except ValueError:
    raise ValueError(f"'{collection_date_str}' is not a valid date (YYYY-MM-DD)")
  
  sample['collection_date'] = collection_date
  sample['notes'] = notes

  return sample
