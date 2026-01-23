# sample-portal

Search for samples, add collection date and notes

Existing Sample IDs for testing: [1, 2]

## Local Development

_Set up the Python Enviorment and Start the Flask app_

```
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask --app backend/app.py run --debug
```

_Install modules and Start the Next.js UI_

```
cd sample-portal-ui
npm install
npm run dev
```
