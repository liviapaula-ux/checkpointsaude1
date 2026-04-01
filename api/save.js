export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body;
    const params = new URLSearchParams(data).toString();

    const scriptURL =
      'https://script.google.com/macros/s/AKfycbwxxKwC6QorFSKIjSGjRXprfXMaTHw8cL2WiRnr0vNgG5FR1PWYBfdW5mbLuTy5cU5g/exec?' + params;

    const response = await fetch(scriptURL);
    const text = await response.text();

    return res.status(200).json({
      success: true,
      googleResponse: text
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
