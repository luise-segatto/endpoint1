const axios = require('axios');

async function fetchDataFromAPI() {
  try {
    // Fazendo uma solicitação GET para o endpoint
    const response = await axios.get('https://niloweb.com.br/transit-room/api/reg_endpoint.php');

    // A resposta.data contém o JSON retornado pela API
    const jsonData = response.data;

    // Faça o que quiser com os dados JSON, como imprimir na console
    console.log(jsonData);
  } catch (error) {
    // Em caso de erro, lidar com ele aqui
    console.error('Erro ao acessar a API:', error.message);
  }
}

// Chamando a função para buscar os dados da API
fetchDataFromAPI();