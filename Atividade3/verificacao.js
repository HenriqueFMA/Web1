const buscarBtn = document.getElementById('buscar');
const resultadoDiv = document.getElementById('resultado');

const buscarCEP = () => {
  const cep = document.getElementById('cep').value.trim();

  // Validar se o CEP tem 8 dígitos
  if (!/^\d{8}$/.test(cep)) {
    resultadoDiv.innerHTML = '<p style="color:red;">CEP inválido. Digite 8 números.</p>';
    return;
  }

  // Limpar resultados anteriores
  resultadoDiv.innerHTML = 'Carregando...';

  // Chamar API do ViaCEP
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        resultadoDiv.innerHTML = '<p style="color:red;">CEP não encontrado.</p>';
      } else {
        resultadoDiv.innerHTML = `
          <p><strong>Logradouro:</strong> ${data.logradouro || 'Não disponível'}</p>
          <p><strong>Bairro:</strong> ${data.bairro || 'Não disponível'}</p>
          <p><strong>Cidade:</strong> ${data.localidade || 'Não disponível'}</p>
          <p><strong>Estado:</strong> ${data.uf || 'Não disponível'}</p>
        `;
      }
    })
    .catch(() => {
      resultadoDiv.innerHTML = '<p style="color:red;">Erro ao buscar o CEP.</p>';
    });
};

buscarBtn.addEventListener('click', () => buscarCEP());