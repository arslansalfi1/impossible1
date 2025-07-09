export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: false, message: 'Method Not Allowed' });
  }

  const { username, password } = req.body;

  // یہاں تم اپنی لاگ اِن چیکنگ کرو گے (مثلاً DB سے)
  if (username === 'admin' && password === 'admin123') {
    res.status(200).json({ status: true, token: 'sample_token_123' });
  } else {
    res.status(401).json({ status: false, message: 'Invalid credentials' });
  }
}
