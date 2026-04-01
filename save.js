export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const data = req.body;

  const scriptURL = 'https://script.google.com/macros/s/AKfycby-H95vstybCskfJ21JH0YIf7N4pQPBPSCLsvkvUxAORGgHon27zhCNJTnUplBAeJI/exec';

  try {
    await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return res.status(200).json({ success: true });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}