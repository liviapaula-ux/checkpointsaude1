export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const data = req.body || {};

    const nome = encodeURIComponent(data.nome || '');
    const email = encodeURIComponent(data.email || '');
    const peso = encodeURIComponent(data.peso || '');
    const altura = encodeURIComponent(data.altura || '');
    const estadoCivil = encodeURIComponent(data.estadoCivil || '');
    const dpp = encodeURIComponent(data.dpp || '');
    const dum = encodeURIComponent(data.dum || '');
    const idadeGestacional = encodeURIComponent(data.idadeGestacional || '');
    const primeiraGestacao = encodeURIComponent(data.primeiraGestacao || '');
    const tipoGestacao = encodeURIComponent(data.tipoGestacao || '');
    const historicoClinico = encodeURIComponent(data.historicoClinico || '');
    const diagnosticos = encodeURIComponent(data.diagnosticos || '');
    const medicamentos = encodeURIComponent(data.medicamentos || '');
    const intercorrencias = encodeURIComponent(data.intercorrencias || '');

    const scriptURL =
      `https://script.google.com/macros/s/AKfycbwxxKwC6QorFSKIjSGjRXprfXMaTHw8cL2WiRnr0vNgG5FR1PWYBfdW5mbLuTy5cU5g/exec?nome=${nome}&email=${email}&peso=${peso}&altura=${altura}&estadoCivil=${estadoCivil}&dpp=${dpp}&dum=${dum}&idadeGestacional=${idadeGestacional}&primeiraGestacao=${primeiraGestacao}&tipoGestacao=${tipoGestacao}&historicoClinico=${historicoClinico}&diagnosticos=${diagnosticos}&medicamentos=${medicamentos}&intercorrencias=${intercorrencias}`;

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
