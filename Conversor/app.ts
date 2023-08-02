//SEM VÍRGULA
/* import Conversor from './conversor';

async function main() {
  const conversor = new Conversor();

  try {
    const moedaOrigem = 'BRL';
    const moedaDestino = 'USD';
    const valor = 100;

    const taxaDeConversao = await conversor.obterTaxaDeConversao(moedaOrigem, moedaDestino);
    const valorConvertido = await conversor.converterValor(moedaOrigem, moedaDestino, valor);
    const dataAtual = new Date().toLocaleDateString('pt-BR'); //Data atual no formato 'DD-MM-YYYY'

    console.log("------------------------------------------");
    console.log("Data da Conversão:", dataAtual); // Data atual
    console.log("Moeda de Origem:", moedaOrigem);
    console.log("Moeda de Destino:", moedaDestino);
    console.log("------------------------------------------");
    console.log("Valor:", valor);
    console.log(`Valor Convertido: ${valorConvertido.toFixed(2)} ${moedaDestino}`);
    console.log(`Taxa de conversão: ${moedaOrigem} => ${taxaDeConversao.taxa.toFixed(6)} => ${moedaDestino}`);
    console.log("------------------------------------------");
} catch (error: any) {
    console.error('Erro ao converter valor:', error.message);
  }
}

main(); */





//ESTAMOS TRABALHANDO COM VÍRGULA AGORA
/*import Conversor from './conversor';

async function main() {
  const conversor = new Conversor();

  try {
    const moedaOrigem = 'BRL';
    const moedaDestino = 'USD';
    const valor = 80.95;

    const taxaDeConversao = await conversor.obterTaxaDeConversao(moedaOrigem, moedaDestino);
    const valorConvertido = await conversor.converterValor(moedaOrigem, moedaDestino, valor);
    const dataAtual = new Date().toLocaleDateString('pt-BR'); //Data atual no formato 'DD-MM-YYYY'

    console.log("------------------------------------------");
    console.log("Data da Conversão:", dataAtual); // Data atual
    console.log("Moeda de Origem:", moedaOrigem);
    console.log("Moeda de Destino:", moedaDestino);
    console.log("------------------------------------------");
    console.log("Valor:", valor.toLocaleString('pt-BR')); // Utilizamos toLocaleString com 'pt-BR' para formatar o número com vírgula
    console.log(`Valor Convertido: ${valorConvertido.toLocaleString('pt-BR')} ${moedaDestino}`); // Utilizamos toLocaleString com 'pt-BR' para formatar o número com vírgula
    console.log(`Taxa de conversão: ${moedaOrigem} => ${taxaDeConversao.taxa.toLocaleString('pt-BR')} => ${moedaDestino}`); // Utilizamos toLocaleString com 'pt-BR' para formatar o número com vírgula
    console.log("------------------------------------------");
  } catch (error: any) {
    console.error('Erro ao converter valor:', error.message);
  }
}

main();*/


//TRABALHANDO COM PONTO E VÍRGULA
/* import Conversor from './conversor';

async function main() {
  const conversor = new Conversor();

  try {
    const moedaOrigem = 'BRL';
    const moedaDestino = 'USD';
    const valorString = '100,99'; // Use uma string para manter a vírgula como separador decimal

    // Substituir vírgulas por pontos antes de converter o valor em número
    const valor = parseFloat(valorString.replace(',', '.'));

    const taxaDeConversao = await conversor.obterTaxaDeConversao(moedaOrigem, moedaDestino);
    const valorConvertido = await conversor.converterValor(moedaOrigem, moedaDestino, valor);
    const dataAtual = new Date().toLocaleDateString('pt-BR'); //Data atual no formato 'DD-MM-YYYY'

    console.log("------------------------------------------");
    console.log("Data da Conversão:", dataAtual); // Data atual
    console.log("Moeda de Origem:", moedaOrigem);
    console.log("Moeda de Destino:", moedaDestino);
    console.log("------------------------------------------");
    console.log("Valor:", valor.toLocaleString('pt-BR')); // Utilizamos toLocaleString com 'pt-BR' para formatar o número com vírgula
    console.log(`Valor Convertido: ${valorConvertido.toLocaleString('pt-BR')} ${moedaDestino}`); // Utilizamos toLocaleString com 'pt-BR' para formatar o número com vírgula
    console.log(`Taxa de conversão: ${moedaOrigem} => ${taxaDeConversao.taxa.toLocaleString('pt-BR')} => ${moedaDestino}`); // Utilizamos toLocaleString com 'pt-BR' para formatar o número com vírgula
    console.log("------------------------------------------");
  } catch (error: any) {
    console.error('Erro ao converter valor:', error.message);
  }
}

main();*/

import Conversor from './conversor';
import prompt from 'prompt-sync';

async function main() {
  const conversor = new Conversor();
  const promptSync = prompt();

  try {
    // Obter valores do usuário
    let moedaOrigem = promptSync('Digite a moeda de origem (ex: BRL): ').toUpperCase();

    // Verificar se a moeda de origem foi fornecida
    if (moedaOrigem.trim() === '') {
      console.log("É necessário colocar uma sigla para a moeda de Origem.");
      return;
    }

    const moedaDestino = promptSync('Digite a moeda de destino (ex: USD): ').toUpperCase();
    const valorString = promptSync('Digite o valor a ser convertido: ');

    // Verificar se as moedas são válidas
    if (moedaOrigem.length !== 3 || moedaDestino.length !== 3) {
      throw new Error('As moedas de origem e destino devem ser códigos de moeda válidos (com 3 caracteres).');
    }

    // Substituir vírgulas por pontos antes de converter o valor em número
    const valor = parseFloat(valorString.replace(',', '.'));

    // Verificar se o valor é um número válido maior que zero
    if (isNaN(valor) || valor <= 0) {
      throw new Error('O valor a ser convertido deve ser um número válido maior que zero.');
    }

    const taxaDeConversao = await conversor.obterTaxaDeConversao(moedaOrigem, moedaDestino);
    let valorConvertido = await conversor.converterValor(moedaOrigem, moedaDestino, valor);

    // Arredondar o valor convertido para 2 casas decimais
    valorConvertido = Math.round(valorConvertido * 100) / 100;

    const dataAtual = new Date().toLocaleDateString('pt-BR');

    console.log("------------------------------------------");
    console.log("Data da Conversão:", dataAtual);
    console.log("Moeda de Origem:", moedaOrigem);
    console.log("Moeda de Destino:", moedaDestino);
    console.log("------------------------------------------");
    console.log("Valor:", valor.toLocaleString('pt-BR'));
    console.log(`Valor Convertido: ${valorConvertido.toLocaleString('pt-BR')} ${moedaDestino}`);
    console.log(`Taxa de conversão: ${moedaOrigem} => ${taxaDeConversao.taxa.toLocaleString('pt-BR', { minimumFractionDigits: 6, maximumFractionDigits: 6 })} => ${moedaDestino}`);
    console.log("------------------------------------------");
  } catch (error: any) {
    // Tratar erro de comunicação com a API
    if (error.message === 'Failed to fetch') {
      console.error('Erro de comunicação com a API. Verifique sua conexão com a internet.');
    } else {
      console.error('Erro:', error.message);
    }
  }
}

main();


