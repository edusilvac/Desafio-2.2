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
import prompt from 'prompt-sync'; // Importamos o prompt-sync

async function main() {
  const conversor = new Conversor();
  const promptSync = prompt(); // Criamos uma instância do prompt-sync

  try {
    // Obter valores do usuário
    const moedaOrigem = promptSync('Digite a moeda de origem (ex: BRL): ');
    const moedaDestino = promptSync('Digite a moeda de destino (ex: USD): ');
    const valorString = promptSync('Digite o valor a ser convertido: ');

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

main();
