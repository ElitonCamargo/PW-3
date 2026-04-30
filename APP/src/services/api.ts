import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Interceptor de resposta
api.interceptors.response.use(
    // Apenas retorna a resposta diretamente
  (response) => response,
    // Intercepta erros e loga detalhes
  (error) => {
    // exibe o erro detalhado para depuração
    //isso pode ser ajustado ou removido em produção para evitar exposição de informações sensíveis
    // As variaveis de erro podem divergir tendo como base a api e o tipo de erro, por isso é importante verificar a estrutura do objeto de erro para garantir que as informações corretas sejam logadas
    console.error("Erro na API:", error.response?.data || error.message);
    // Rejeita a promessa para que o erro possa ser tratado posteriormente
    //ou seja, o erro é propagado para que as chamadas de API possam lidar com ele de maneira apropriada, como exibir mensagens de erro para o usuário ou tentar novamente a solicitação
    return Promise.reject(error);
  }
);
