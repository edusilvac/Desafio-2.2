// Importando as bibliotecas necessárias
import PromptSync from 'prompt-sync'; // Biblioteca para receber entrada do usuário no terminal
import axios from 'axios'; // Biblioteca para fazer requisições HTTP

// Criando uma instância do prompt-sync para receber entrada do usuário no terminal
const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Eduardo');

// Classe Conversor
class Conversor {
  private apiUrl: string;

  // Construtor da classe, define a URL base da API de moedas
  constructor() {
    this.apiUrl = 'https://api.exchangerate.host/convert';
  }

  // Método para obter a taxa de conversão entre duas moedas
  async obterTaxaDeConversao(moedaOrigem: string, moedaDestino: string): Promise<{ taxa: number, dataConversao: string }> {
    try {
      // Monta a URL da requisição(Exemplo da URL PASSADA NO PDF)
      const url = `${this.apiUrl}?from=${moedaOrigem}&to=${moedaDestino}&amount=1`;

      // Realiza a requisição HTTP GET para a API usando a biblioteca axios
      const response = await axios.get(url);

      // Verifica se a requisição foi bem-sucedida
      if (response.data.success) {
        // Obtém a taxa de conversão e a data da conversão retornadas pela API
        const taxa = response.data.info.rate;
        const dataConversao = response.data.date; // Usar a data retornada pela API
        return { taxa, dataConversao };
      } else {
        // Caso a requisição não seja bem-sucedida, lança um erro
        throw new Error('Erro ao obter a taxa de conversão');
      }
    } catch (error) {
      // Caso ocorra algum erro na requisição ou tratamento, lança um erro
      throw new Error('Erro ao obter a taxa de conversão');
    }
  }

  // Método para converter um valor de uma moeda para outra com base na taxa de conversão
  async converterValor(moedaOrigem: string, moedaDestino: string, valor: number): Promise<number> {
    try {
      // Obtém a taxa de conversão entre as moedas
      const taxaDeConversao = await this.obterTaxaDeConversao(moedaOrigem, moedaDestino);

      // Calcula o valor convertido multiplicando o valor original pela taxa de conversão
      return valor * taxaDeConversao.taxa;
    } catch (error) {
      // Caso ocorra algum erro durante a conversão, lança um erro
      throw new Error('Erro ao converter valor');
    }
  }
}

// Exporta a classe Conversor para app.ts
export default Conversor;


