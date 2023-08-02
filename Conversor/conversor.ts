import PromptSync from 'prompt-sync';

const prompt = PromptSync({ sigint: true }); // Permite terminar o programa com CTRL-C

//let nome = prompt('Digite seu nome');

import axios from 'axios';

class Conversor {
  private apiUrl: string;

  constructor() {
    this.apiUrl = 'https://api.exchangerate.host/convert';
  }

  async obterTaxaDeConversao(moedaOrigem: string, moedaDestino: string): Promise<{ taxa: number, dataConversao: string }> {
    try {
      const url = `${this.apiUrl}?from=${moedaOrigem}&to=${moedaDestino}&amount=1`;
      const response = await axios.get(url);

      if (response.data.success) {
        const taxa = response.data.info.rate;
        const dataConversao = response.data.date; // Usar a data retornada pela API
        return { taxa, dataConversao };
      } else {
        throw new Error('Erro ao obter a taxa de conversão');
      }
    } catch (error) {
      throw new Error('Erro ao obter a taxa de conversão');
    }
  }

  async converterValor(moedaOrigem: string, moedaDestino: string, valor: number): Promise<number> {
    try {
      const taxaDeConversao = await this.obterTaxaDeConversao(moedaOrigem, moedaDestino);
      return valor * taxaDeConversao.taxa;
    } catch (error) {
      throw new Error('Erro ao converter valor');
    }
  }
}

export default Conversor;