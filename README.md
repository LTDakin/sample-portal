# sample-portal

Search for samples, add collection date and notes

## Local Development

_Start the Flask app_

```
source venv/bin/activate
pip install -r requirements.txt
flask --app backend/app.py run --debug
```

_Start the Next.js UI_
Enter the frontend directory and install modules

```
cd sample-portal-ui
npm install
npm run dev
```
