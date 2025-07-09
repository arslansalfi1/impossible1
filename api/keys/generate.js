export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: false, message: 'Method Not Allowed' });
  }

  const { duration, device_limit } = req.body;

  // Key generation logic
  const newKey = Math.random().toString(36).substring(2, 10).toUpperCase();

  res.status(200).json({
    status: true,
    key: newKey,
    duration,
    device_limit
  });
}
