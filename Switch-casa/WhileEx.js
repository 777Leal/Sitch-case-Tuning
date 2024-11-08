// - - - - - - - - - - - - - - - E x 1 - - - - - - - - - - - - - - - //

// const prompt = require (`prompt-sync`)();

// let CadastroAluno = [];
// let Continuar;

// do {
//     let Nick = prompt(" Digite o seu nome: ");
//     let Idade = prompt(" Digite a sua idade: ");

//     CadastroAluno.push({nome: Nick, idade: Idade});

//     Continuar = prompt(" Deseja cadastrar novo aluno? (S/N): ");

// } while (Continuar == "S" || Continuar == "s");

// console.log(`Alunos cadastrados em nosssa lista, `,CadastroAluno);

// - - - - - - - - - - - - - - - E x 2 - - - - - - - - - - - - - - - //

// const SimularNotas = require (`prompt-sync`)();

// let NotaAlunos = [];
// let Prosseguir;

// do {
//     let Nota1 = parseFloat(SimularNotas(" Digite sua primeira nota: "));
//     let Nota2 = parseFloat(SimularNotas(" Digite sua segunda nota: "));
//     let Nota3 = parseFloat(SimularNotas(" Digite sua terceira nota: "));
//     let MediaNotas = (Nota1 + Nota2 + Nota3 ) /3;

//     console.log(MediaNotas);

//     NotaAlunos.push({nota1: Nota1, nota2: Nota2, nota3: Nota3});
//     NotaAlunos.push({MediaNotas});

//     Prosseguir = SimularNotas(" Deseja avaliar mais uma média de notas? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Média retirada de nossas notas, `,NotaAlunos);

// - - - - - - - - - - - - - - - E x 3 - - - - - - - - - - - - - - - //

// const usuario = {
//     nome: 'Leal',
//     senha: 1234
// };

// do{
// if (usuario.nome === 'Leal' && usuario.senha === 1234) {
//     console.log(`Bem-vindo, ${usuario.nome}`);
// } else {
//     console.log('Acesso negado.');
// }
// }while(false);

// - - - - - - - - - - - - - - - E x 4 - - - - - - - - - - - - - - - //

// let num = require ('prompt-sync')();
// let poten = [];
// let contin;

// do{
//     let numero = num("digite um numero");
//     let potencia = num("digite uma potencia");
//     let calculo = numero ** potencia

//     poten.push ({calculo});

//     contin = num('deseja colocar outra conta (s/n): ');
// }while(contin.toLowerCase() === 's');

// console.log('contas feitas,', poten);

// - - - - - - - - - - - - - - - E x 5 - - - - - - - - - - - - - - - //



// - - - - - - - - - - - - - - - E x 6 - - - - - - - - - - - - - - - //

// const SimularNotas = require (`prompt-sync`)();

// let NotaAlunos = [];
// let Prosseguir;

// do {
//     let Nota1 = parseFloat(SimularNotas(" Digite sua primeira nota: "));
//     let Nota2 = parseFloat(SimularNotas(" Digite sua segunda nota: "));
//     let Nota3 = parseFloat(SimularNotas(" Digite sua terceira nota: "));
//     let MediaNotas = (Nota1 + Nota2 + Nota3 ) /3;

//     console.log(MediaNotas);

//     NotaAlunos.push({nota1: Nota1, nota2: Nota2, nota3: Nota3});
//     NotaAlunos.push({MediaNotas});

//     Prosseguir = SimularNotas(" Deseja avaliar mais uma média de notas? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Média retirada de nossas notas, `,NotaAlunos);

// - - - - - - - - - - - - - - - E x 7 - - - - - - - - - - - - - - - //

// let leal = require('prompt-sync')();

// let NumeroAleatorio = Math.floor(Math.random() * 10) + 1;
// let TentativaDeAdivinhar;

// do {
//     TentativaDeAdivinhar = parseInt(leal("Adivinhe o número entre 1 e 10:"));
    
//     if (TentativaDeAdivinhar !== NumeroAleatorio) {
// console.log("O número que você digitou não é o número sorteado."); }

// } while (TentativaDeAdivinhar !== NumeroAleatorio);

// console.log("Muito bem! Este foi o número sorteado");

// - - - - - - - - - - - - - - - E x 8 - - - - - - - - - - - - - - - //

// const prompt= require ('prompt-sync')();

// let cadastroalunos = [ ];
// let continuar;

// do{
//     let nome = prompt('Digite o nome do aluno:  ');
//     let idade = prompt('Digite a idade do aluno:  ');
//     if (idade >=16 && idade <= 100) {
//         console.log(`A idade está entre 16 e 100 anos`);
//     }

//     cadastroalunos.push({nome: nome, idade: idade});

//     continuar= prompt('Deseja cadatrar novo aluno? (s/n) ');
// } while(continuar.toLocaleLowerCase() == 's');

//     console.log( 'Alunos cadastro na lista: ', cadastroalunos);

// - - - - - - - - - - - - - - - E x 9 - - - - - - - - - - - - - - - //

// const AveriguarEstoqueEproduto = require (`prompt-sync`)();

// let EstoqueEproduto = [];
// let ProximoPasso;

// do {
//     let NomeProduto = AveriguarEstoqueEproduto(" Digite o nome de seu produto: ");
//     let QuantidadeEstoque = AveriguarEstoqueEproduto(" Digite a quantidade de produtos em seu estoque: ");

//     EstoqueEproduto.push({nomdeproduto: NomeProduto, quantidadeestoque: QuantidadeEstoque});

//     ProximoPasso = AveriguarEstoqueEproduto(" Deseja vincular o número de outro produto com a quantidade em estoque? (S/N): ");

// } while (ProximoPasso == "S" || ProximoPasso == "s");

// console.log(`Estoque dos produtos denidos, `,EstoqueEproduto);

// - - - - - - - - - - - - - - - E x 10 - - - - - - - - - - - - - - - //

// function fatorial(n) {
//     let resultado = 1;
//     for (let i = 2; i <= n; i++) {
//         resultado *= i;
//     }
//     return resultado;
// }

// let continuar;

// do {
//     let numero = parseInt(prompt("Digite um número inteiro positivo para calcular seu fatorial:"));

//     if (numero >= 0) {

//         let resultado = fatorial(numero);

//         alert("O fatorial de " + numero + " é " + resultado + ".");

//     } else {
//         alert("Por favor, digite um número inteiro positivo.");
//     }

//     continuar = prompt("Você deseja calcular outro fatorial? (sim/não):").toLowerCase();

// } while (continuar === "sim");
//     alert("Obrigado por usar o programa!");

// - - - - - - - - - - - - - - - E x 11 - - - - - - - - - - - - - - - //

// const prompt = require('prompt-sync')();
// let saldo = 0
// while (true){

// let operacao = prompt("digite 'deposito' para depositar, 'saque' para sacar, 'sair' para sair");
// if(operacao === 'deposito'){
//     let deposito = parseFloat(prompt('falar do deposito'));
//     if(!isNaN(deposito) && deposito > 0){
//         saldo += deposito; 
//         console.log (`seu deposito foi realizado com sucesso, seu valor é ${saldo.toFixed(2)}.`);
    
//     }else{ console.log("valor invalido");}


// }
// else if(operacao === 'saque'){
//     let saque = parseFloat(prompt('valor do saque'));
//     if (!isNaN(saque) && saque > 0 && saque <= saldo ){
//         saldo -= saque;
//         console.log(`saque realizado com sucesso ${saldo.toFixed(2)}.`);
//         console.log (`seu saque foi realizado com sucesso, seu valor é ${saldo.toFixed(2)}.`);

//     }else{(saldo < saque)
//         console.log(`operacao invalida ou saldo insuficiente, seu saldo é de ${saldo.toFixed(2)}.`);
//     }


// }else if(operacao === 'sair'){
//     console.log('operacao encerrada');
//     break;

//     }else{
//         console.log("operacao invalida");

//     }

// }

// - - - - - - - - - - - - - - - E x 12 - - - - - - - - - - - - - - - //

// let continuar;

// do {
//     let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
//     let fahrenheit = (celsius * 9/5) + 32;

//     alert(celsius + "°C é igual a " + fahrenheit.toFixed(2) + "°F.");

//     continuar = prompt("Deseja realizar outra conversão? (s/n):").toLowerCase();

// } while (continuar === `S` || continuar === `s`);
//     alert("Obrigado por usar o aplicativo!");

// - - - - - - - - - - - - - - - E x 13 - - - - - - - - - - - - - - - //

// const SimularNotas = require ('prompt-sync')();

// let compras = [ ];
// let Prosseguir;

// do {
//     let c1 = parseFloat(SimularNotas(" Digite o valor da primeira compra: "));
//     let c2 = parseFloat(SimularNotas(" Digite  o valor da segunda compra: "));
//     let c3 = parseFloat(SimularNotas(" Digite  o valor da terceira compra: "));
//     let MediaNotas = (c1 + c2 + c3 ) ;

//     console.log(MediaNotas);

//     compras.push({nota1: c1, nota2: c2, nota3: c3});
//     compras.push({MediaNotas});

//     Prosseguir = SimularNotas(" Deseja saber o valor de mais alguma compra? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Média retirada de nossas notas, `,compras);

// - - - - - - - - - - - - - - - E x 14 - - - - - - - - - - - - - - - //

// const SimularNotas = require (`prompt-sync`)();

// let ValorJurosSimples = [];
// let Prosseguir;

// do {
//     let Capital = parseFloat(SimularNotas(" Digite o valor de sua capital: "));
//     let TaxaDeJuros = parseFloat(SimularNotas(" Digite o valor da taxa de juros anual: "));
//     let Tempo = parseFloat(SimularNotas(" Digite o valor do tempo anual: "));
//     let JurosSimples = (Capital * TaxaDeJuros * Tempo);
    
//     ValorJurosSimples.push({capital: Capital, taxadejuros: TaxaDeJuros, tempo: Tempo});
//     ValorJurosSimples.push({JurosSimples});

//     Prosseguir = SimularNotas(" Deseja avaliar mais alguma ocorrência com juros simples? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Valor do juros simples atribuído, `,ValorJurosSimples);

// - - - - - - - - - - - - - - - E x 15 - - - - - - - - - - - - - - - //

const avaliacao = require ('prompt-sync')();

let avaliacaoAlunos= [ ];
let continuar;

    do{
        let nome = avaliacao("Digite o nome do aluno: ");
        let nota1 = parseFloat(avaliacao("Digite a nota de avaliação de 1 a 5 para a escola: "));

        avaliacaoAlunos.push((nota1))
        continuar= avaliacao("Deseja fazer outra avaliação? (S/N): ");
    } while(continuar== 'S' || continuar == 's') (continuar=='N' || continuar == 'n');

        console.log(avaliacaoAlunos);