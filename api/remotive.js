export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const { search = 'virtual assistant', limit = '20' } = req.query;

  try {
    const url = `https://remotive.com/api/remote-jobs?search=${encodeURIComponent(search)}&limit=${limit}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Remotive fetch failed');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message, jobs: [] });
  }
}
