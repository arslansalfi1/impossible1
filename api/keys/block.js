export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ status: false, message: 'Method Not Allowed' });
  }

  const { key } = req.body;

  // یہاں key کو block کرنے کا logic ہوگا

  res.status(200).json({ status: true, message: `Key ${key} blocked successfully` });
}
