export default async function handler(req, res) {
  const data = req.body;

  const params = new URLSearchParams(data).toString();

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwxxKwC6QorFSKIjSGjRXprfXMaTHw8cL2WiRnr0vNgG5FR1PWYBfdW5mbLuTy5cU5g/exec?' + params;

  try {
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
