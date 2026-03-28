export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { search_keywords = 'virtual assistant', count = '20' } = req.query;

  try {
    const url = `https://jobicy.com/api/v2/remote-jobs?count=${count}&search_keywords=${encodeURIComponent(search_keywords)}&job_categories=supporting`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Jobicy fetch failed');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message, jobs: [] });
  }
}
