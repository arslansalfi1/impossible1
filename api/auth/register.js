export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: false, message: 'Method Not Allowed' });
  }

  const { username, password, accessCode } = req.body;

  // access code logic
  if (accessCode !== 'valid_code') {
    return res.status(403).json({ status: false, message: 'Invalid Access Code' });
  }

  // یہاں تم user کو register کرو گے (DB میں)

  res.status(200).json({ status: true, message: 'User registered successfully' });
}
