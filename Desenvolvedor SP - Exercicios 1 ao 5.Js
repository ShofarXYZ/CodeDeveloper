1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça
{
K = K + 1;
SOMA = SOMA + K;
}

imprimir(SOMA);

Ao final do processamento, qual será o valor da variável SOMA?

**Resposta : O valor da variável SOMA ao final do processamento será 91.  

**Rodar no console da pagina do navegador para chegar na conclusao da resposta 
em JavaScript.

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

______________________________________________________________________________________________

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
(exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci 
e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 

** Rodar no console da pagina do navegador para chegar na conclusao da resposta em JavaScript.

let num = 21; // número definido para ser verificado
let anterior = 0, atual = 1, proximo;

while (atual < num) {
  proximo = anterior + atual;
  anterior = atual;
  atual = proximo;
}

if (atual === num) {
  console.log(num + " pertence à sequência de Fibonacci.");
} else {
  console.log(num + " não pertence à sequência de Fibonacci.");
}

______________________________________________________________________________________________

3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

IMPORTANTE:
a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser 
ignorados no cálculo da média;

** Rodar no console da pagina do navegador para chegar na conclusao da resposta 
em JavaScript.

const faturamentoMensal = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 3, valor: 26139.6134 },
    { dia: 4, valor: 0.0 },
    { dia: 5, valor: 0.0 },
    { dia: 6, valor: 26742.6612 },
    { dia: 7, valor: 0.0 },
    { dia: 8, valor: 42889.2258 },
    { dia: 9, valor: 46251.174 },
    { dia: 10, valor: 11191.4722 },
    { dia: 11, valor: 0.0 },
    { dia: 12, valor: 0.0 },
    { dia: 13, valor: 3847.4823 },
    { dia: 14, valor: 373.7838 },
    { dia: 15, valor: 2659.7563 },
    { dia: 16, valor: 48924.2448 },
    { dia: 17, valor: 18419.2614 },
    { dia: 18, valor: 0.0 },
    { dia: 19, valor: 0.0 },
    { dia: 20, valor: 35240.1826 },
    { dia: 21, valor: 43829.1667 },
    { dia: 22, valor: 18235.6852 },
    { dia: 23, valor: 4355.0662 },
    { dia: 24, valor: 13327.1025 },
    { dia: 25, valor: 0.0 },
    { dia: 26, valor: 0.0 },
    { dia: 27, valor: 25681.8318 },
    { dia: 28, valor: 1718.1221 },
    { dia: 29, valor: 13220.495 },
    { dia: 30, valor: 8414.61 },
  ];
  
  // Calcula o menor valor de faturamento diário
  const menorFaturamento = faturamentoMensal.reduce((menor, dia) => {
    if (dia.valor < menor) {
      return dia.valor;
    }
    return menor;
  }, faturamentoMensal[0].valor);
  
  console.log(`Menor faturamento diário: R$${menorFaturamento.toFixed(2)}`);
  
  // Calcula o maior valor de faturamento diário
  const maiorFaturamento = faturamentoMensal.reduce((maior, dia) => {
    if (dia.valor > maior) {
      return dia.valor;
    }
    return maior;
  }, 0);
  
  console.log(`Maior faturamento diário: R$${maiorFaturamento.toFixed(2)}`);
  
  // Calcula a média mensal de faturamento, ignorando os dias sem faturamento
  const diasComFaturamento = faturamentoMensal.filter((dia) => dia.valor > 0);
  const mediaMensal =
    diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0) /
    diasComFaturamento.length;
  
  console.log(`Média mensal de faturamento: R$${mediaMensal.toFixed(2)}`);
  
______________________________________________________________________________________________

4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

  SP – R$67.836,43
  RJ – R$36.678,66
  MG – R$29.229,88
  ES – R$27.165,48
  Outros – R$19.849,53
  
Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

** Rodar no console da pagina do navegador para chegar na conclusao da resposta 
em JavaScript.

// Definindo os valores de faturamento mensal por estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Calculando o valor total mensal da distribuidora
const faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calculando o percentual de representação de cada estado dentro do valor total mensal da distribuidora
const percentualSP = (faturamentoSP / faturamentoTotal) * 100;
const percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
const percentualMG = (faturamentoMG / faturamentoTotal) * 100;
const percentualES = (faturamentoES / faturamentoTotal) * 100;
const percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;

// Exibindo os percentuais de representação de cada estado
console.log(`Percentual de representação de SP: ${percentualSP.toFixed(2)}%`);
console.log(`Percentual de representação de RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`Percentual de representação de MG: ${percentualMG.toFixed(2)}%`);
console.log(`Percentual de representação de ES: ${percentualES.toFixed(2)}%`);
console.log(`Percentual de representação de Outros: ${percentualOutros.toFixed(2)}%`);

______________________________________________________________________________________________

5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;

** Rodar no console da pagina do navegador para chegar na conclusao da resposta 
em JavaScript.

let str = "Desenvolvedor SP"; // definindo a string
let inverted = ""; // inicializando a string invertida

// loop de trás para frente na string original
for (let i = str.length - 1; i >= 0; i--) {
  inverted += str[i]; // adicionando cada caractere na string invertida
}

console.log(inverted); // exibe a palavra invertida PS rodevlovneseD



