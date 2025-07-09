export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ status: false, message: 'Method Not Allowed' });
  }

  // Normally fetch from DB
  const keys = [
    { key: "ABC123", status: "active", device_limit: 2 },
    { key: "XYZ789", status: "blocked", device_limit: 1 }
  ];

  res.status(200).json({ status: true, keys });
}
