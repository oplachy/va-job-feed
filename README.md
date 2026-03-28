# VA & Data Entry Job Feed

A live job feed pulling from Remotive, Himalayas, and Jobicy — all free, no API keys needed.

---

## Deploy in 5 minutes

### Step 1 — Create a GitHub repo

1. Go to [github.com/new](https://github.com/new)
2. Name it `va-job-feed`
3. Keep it **Public**, click **Create repository**

### Step 2 — Upload these files

On the new repo page, click **"uploading an existing file"** and drag in all the files from this folder:

```
va-job-feed/
├── api/
│   ├── remotive.js
│   ├── himalayas.js
│   └── jobicy.js
├── public/
│   └── index.html
├── package.json
├── vercel.json
└── README.md
```

Click **Commit changes**.

### Step 3 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and log in with GitHub
2. Click **Add New → Project**
3. Find and import your `va-job-feed` repo
4. Set **Root Directory** to `public`
5. Click **Deploy**

Vercel will give you a URL like `https://va-job-feed.vercel.app`

### Step 4 — Update your URL (optional but recommended)

Open `public/index.html` and find this line near the top of the script:

```js
const BASE_URL = '';
```

Replace it with your Vercel URL:

```js
const BASE_URL = 'https://va-job-feed.vercel.app';
```

Commit the change and Vercel will auto-redeploy.

---

## How it works

- `public/index.html` — the full frontend (filters, search, job cards)
- `api/remotive.js` — Vercel serverless function that proxies Remotive API
- `api/himalayas.js` — proxies Himalayas API
- `api/jobicy.js` — proxies Jobicy API
- The proxy functions add CORS headers so your browser can fetch freely

---

## Local development

Install Vercel CLI:
```bash
npm i -g vercel
```

Run locally:
```bash
vercel dev
```

Then open [http://localhost:3000](http://localhost:3000)
