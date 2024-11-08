// - - - - - - - - - - - - - - - E x 1 - - - - - - - - - - - - - - - //

let CursoEscolhido = { curso: `Desenvolvimento de Sistemas` }
let DesenvolvimentoDeSistema = `Desenvolvimento de Sistemas`
let Logística = `Logística`
let Administração = `Administração`

    switch (CursoEscolhido.curso) {
        case  "Desenvolvimento de Sistemas":
            console.log(`Bem-vindo ao curso de Desenvolvimento de sistemas!`)
            break;
        case  "Logística":
            console.log(`Bem-vindo ao curso de Logística!`)
            break;
        case  "Administração":
            console.log(`Bem-vindo ao curso de Administração!`)
            break;
    default:
        console.log(`Curso não encontrado!`)
    }

// - - - - - - - - - - - - - - - E x 2 - - - - - - - - - - - - - - - //

let Number1 = (5);
let Number2 = (10);

let number1e2 = { resultado: Number1 * Number2 }

    switch (number1e2.resultado) {
        case (Number1 * Number2):
         console.log(`O resultado da multiplicação é: ${number1e2.resultado}.`);
        break;
    default:
        console.log(`O resultado da multiplicação não pôde ser obtido.`);
    }

    
// - - - - - - - - - - - - - - - E x 3 - - - - - - - - - - - - - - - //

let IdadeSelecionada = { Idade: 10 }

    switch (true) {
        case (IdadeSelecionada.Idade < 16):
            console.log(`Você esta em seu período: Infantil`);
            break;
        case (IdadeSelecionada.Idade = 16 &&  IdadeSelecionada.Idade <= 18):
            console.log(`Você esta em seu período: Jovem`);
            break;
        case (IdadeSelecionada.Idade = 19 &&  IdadeSelecionada.Idade <= 65):
            console.log(`Você esta em seu período: Adulto`);
            break;
        case (IdadeSelecionada.Idade = 65 &&  IdadeSelecionada.Idade > 66):
            console.log(`Você esta em seu período: Idoso!`);
            break;
    default:
        console.log(`Idade não compreendida!`);
    }

// - - - - - - - - - - - - - - - E x 4 - - - - - - - - - - - - - - - //

let NotaRetirada = { nota: 7 };

switch (true) {
    case (NotaRetirada.nota >= 0 && NotaRetirada.nota <= 6):
        console.log(`Sua nota está classificada como: Insuficiente!`);
        break;
    case (NotaRetirada.nota === 7):
        console.log(`Sua nota está classificada como: Regular!`);
        break;
    case (NotaRetirada.nota >= 8 && NotaRetirada.nota <= 9):
        console.log(`Sua nota está classificada como: Bom!`);
        break;
    case (NotaRetirada.nota === 10):
        console.log(`Sua nota está classificada como: Excelente!`);
        break;
    default:
        console.log(`Prova não realizada!`);
}

// - - - - - - - - - - - - - - - E x 5 - - - - - - - - - - - - - - - //

let DiaDaSemana =  { Dia: 1 }

    switch (true) {
        case (DiaDaSemana.Dia === 1):
            console.log(`O dia de hoje é: Segunda-feira.`);
        break;
        case (DiaDaSemana.Dia === 2):
            console.log(`O dia de hoje é: Terça-feira.`);
        break;
        case (DiaDaSemana.Dia === 3):
            console.log(`O dia de hoje é: Quarta-feira.`);
        break;
        case (DiaDaSemana.Dia === 4):
            console.log(`O dia de hoje é: Quinta-feira.`);
        break;
        case (DiaDaSemana.Dia === 5):
            console.log(`O dia de hoje é: Sexta-feira.`);
        break
        case (DiaDaSemana.Dia === 6):
            console.log(`O dia de hoje é: Sábado.`);
        break
        case  (DiaDaSemana.Dia === 7):
            console.log(`O dia de hoje é:  Domingo.`);
        break;
    default:
            console.log(`Dia da semana não definido.`)
}

// - - - - - - - - - - - - - - - E x 6 - - - - - - - - - - - - - - - //

let EventoAno = { Evento: `Semana de tecnologia` }
let FestaJunina = `Festa junina`
let SemanadeTecnologia = `Semana de teconologia`
let FeiradeProfissões = `Feira de profissões`

    switch (EventoAno.Evento) {
        case  "Festa junina":
            console.log(`Muita bebida e comida, brincadeiras e danças!`);
            break;
        case  "Semana de tecnologia":
            console.log(`Uma semana repleto de tecnologia, internet e wi-fi!`)
            break;
        case  "Feira de profissões":
            console.log(`Temas de profissões, trabalhos e diversos serviços!`)
            break;
    default:
        console.log(`Evento não encontrado!`)
    }

// - - - - - - - - - - - - - - - E x 7 - - - - - - - - - - - - - - - //

let mes = {mes:1}
switch(true){
        case mes.mes === 1:
            console.log("Esse mês é: Janeiro")
        break;
        case mes.mes === 2:
            console.log("Esse mês é: Fevereiro")
        break;
        case mes.mes === 3:
            console.log("Esse mês é: Março")
        break;
        case mes.mes === 4:
            console.log("Esse mês é: Abril")
        break;
        case mes.mes === 5:
            console.log("Esse mês é: Maio")
        break;
        case mes.mes === 6:
            console.log("Esse mês é: Junho")
        break;
        case mes.mes === 7:
            console.log("Esse mês é: Julho")
        break
        case mes.mes === 8:
            console.log("Esse mês é: Agosto")
        break;
        case mes.mes === 9:
            console.log("Esse mês é: Setembro")
        break;
        case mes.mes === 10:
            console.log("Esse mês é: Outubro")
        break;
        case mes.mes === 11:
            console.log("Esse mês é: Novembro")
        break;
        case mes.mes === 12:
            console.log("Esse mês é: Dezembro")
        break;
}

// - - - - - - - - - - - - - - - E x 8 - - - - - - - - - - - - - - - //

let EstacoesAno =  { Quadrimestre: 1 }

    switch (true) {
        case (EstacoesAno.Quadrimestre === 1):
            console.log(`A estação do ano em que estamos, é o: Verão.`);
        break;
        case (EstacoesAno.Quadrimestre === 2):
            console.log(`A estação do ano em que estamos, é o: Outono.`);
        break;
        case (EstacoesAno.Quadrimestre === 3):
            console.log(`A estação do ano em que estamos, é o: Inverno.`);
        break;
        case (EstacoesAno.Quadrimestre === 4):
            console.log(`A estação do ano em que estamos, é o: Primavera.`);
    }

// - - - - - - - - - - - - - - - E x 9 - - - - - - - - - - - - - - - //

function converte (valor, unidade) {
    switch (unidade) {
        case 'cm' :
            console.log(`${valor} em m é ${valor / 1000} e em km é ${valor / 1000000}.`)
            break;
        case 'm' :
            console.log(`${valor} em cm é ${valor * 1000} e em km é ${valor / 1000}.`)
            break;
        case 'km' :
            console.log(`${valor} em cm é ${valor /1000000} e em m é ${valor / 1000}.`)
            break;
        default:
            console.log(`Essa metragem não está entre cm, m e km`)
    }
}

converte(1000, 'm')

// - - - - - - - - - - - - - - - E x 10 - - - - - - - - - - - - - - - //

let Notinha = { ValorAvaliação: 9 };

switch (true) {
    case (Notinha.ValorAvaliação === 10 || Notinha.ValorAvaliação === 9):
        console.log(`A nota esta categorizada como: A`);
        break;
    case (Notinha.ValorAvaliação === 8 ||  Notinha.ValorAvaliação === 7):
        console.log(`A nota esta categorizada como: B`);
        break;
    case (Notinha.ValorAvaliação === 6 || Notinha.ValorAvaliação === 5):
        console.log(`A nota esta categorizada como: C`);
        break;
    case (Notinha.ValorAvaliação === 4 || Notinha.ValorAvaliação === 3):
        console.log(`A nota esta categorizada como: D`);
        break;
    case (Notinha.ValorAvaliação === 2 || Notinha.ValorAvaliação === 1):
        console.log(`A nota esta categorizada como: F`);
        break;
    default:
        console.log(`A nota não pôde ser analisada.`);
}

// - - - - - - - - - - - - - - - E x 11 - - - - - - - - - - - - - - - //

function converteMoeda (valor, unidade) {
    switch (unidade) {
        case 'USD':
            console.log(`${valor} em USD é ${valor / 5.71}.`);
            break;
        case 'EUR':
            console.log(`${valor} em EUR é ${valor * 6.12}.`);
            break;
        case 'GBP':
            console.log(`${valor} em GBP é ${valor / 7.97}.`);
            break;
        default:
            console.log(`Essa moeda não está entre (USD, EUR, GBP)`)
    }
}
converteMoeda(1000, 'USD')

// - - - - - - - - - - - - - - - E x 12 - - - - - - - - - - - - - - - //

let CursoAescolher = {CursoAtual:"Técnico",};

    switch(CursoAescolher.CursoAtual){ 
        case  "Técnico":
            console.log("Seu curso é Técnico")
     break;
     case  "Superior":
          console.log("Seu curso é Superior")
      break;
      case  "extensão":
          console.log("Seu curso é Extensão");
      break;
    default:
         console.log("Curso não encontrado");
}

// - - - - - - - - - - - - - - - E x 13 - - - - - - - - - - - - - - - //

let dificuldade = {not:1}
    switch(true) {
        case dificuldade.not === 1:
            console.log(`Essa atividade tem prioridade alta.`)
        break;
        case dificuldade.not === 2:
            console.log(`Essa atividade tem prioridade media.`)
        break;
        case dificuldade.not === 3:
            console.log(`Essa atividade tem prioridade baixa.`)
        break;
    default:
            console.log(`Essa atividade não pôde ser avaliada.`)
}

// - - - - - - - - - - - - - - - E x 14 - - - - - - - - - - - - - - - //

function calcularIMC(Peso, Altura) {
let IMC = Peso / (Altura * Altura);

    switch  (true) {
        case (IMC < 18.5):
    console.log("Classificação: Abaixo do peso");
        break;
        case (IMC >= 18.5 && IMC <= 24.9):
    console.log("Classificação: Peso normal");
        break;
        case  (IMC >= 25 && IMC <= 29.9):
    console.log("Classificação: Sobrepeso");
        break;
        case (IMC >= 30):
    console.log("Classificação: Obesidade");
    }
}
calcularIMC(80, 1.80);

// - - - - - - - - - - - - - - - E x 15 - - - - - - - - - - - - - - - //

let Documentação = {documento:"RG",};

    switch(Documentação.documento){ 
    case "RG": 
        console.log("Você precisa de um RG");
    break;
    case "CPF": 
        console.log("Você precisa de um CPF");
    break;
    case "Passaporte":
        console.log("Você precisa de um Passaporte");
    break;
}

// - - - - - - - - - - - - - - - E x 16 - - - - - - - - - - - - - - - //

let passagem = {valorPassagem:"estudante",};

   switch(passagem.valorPassagem){ 
      case  "estudantes" : 
       console.log("Você pagara apenas R$2,50")
      break;
      case "trabalhador" : 
        console.log("A empresa pagara por vc")
      break;
      case  "idosa":
      console.log("O estado paga sua passagem");
      break;
    default:
      console.log("Voçê pagara normal R$5,00 ");
}

// - - - - - - - - - - - - - - - E x 17 - - - - - - - - - - - - - - - //

function tempoAguardado (tempoAguardado) {
    switch (true) {
        case tempoAguardado < 0.1 :
            console.log(`O tempo de desempenho é rapido`);
            break;
        case tempoAguardado > 0.1 && tempoAguardado < 1 :
            console.log(`O tempo de desempenho é moderado`);
            break;
        case tempoAguardado > 1 && tempoAguardado < 3 :
            console.log(`O tempo de desempenho é lento`);
            break;
        case tempoAguardado > 3 :
            console.log(`O tempo de desempenho é muito lento`);
    }
}

tempoAguardado (0.05);

// - - - - - - - - - - - - - - - E x 18 - - - - - - - - - - - - - - - //

let deficiencia = {deficienciaEspecifica:"visual"}

    switch(deficiencia.deficienciaEspecifica) { 
        case  "visual" : 
          console.log("Você tem deficiência visual.");
        break;
        case "auditiva" : 
          console.log("Você tem deficiência auditiva.");
        break;
        case  "motora":
          console.log("Você tem deficiência motora.");
        break;
}

// - - - - - - - - - - - - - - - E x 19 - - - - - - - - - - - - - - - //

function nota0a100 (notinha) {
    switch (true) {
        case (notinha === 100 && notinha >= 90):
            console.log('A nota esta categorizada como: A');
            break;
        case (notinha <= 80 &&  notinha >= 70):
            console.log('A nota esta categorizada como: B');
            break;
        case (notinha <= 60 && notinha >= 50):
            console.log('A nota esta categorizada como: C');
            break;
        case (notinha <= 40 && notinha >= 30):
            console.log('A nota esta categorizada como: D');
            break;
        case (notinha <= 20 && notinha >= 10):
            console.log('A nota esta categorizada como: F');
            break;
        default:
            console.log('A nota não pôde ser analisada.');
    }
}

nota0a100(70)

// - - - - - - - - - - - - - - - E x 20 - - - - - - - - - - - - - - - //

let TemperaturaClimática = {GrausEmFuncaoClimatica:20}
    switch(true) {
        case (TemperaturaClimática.GrausEmFuncaoClimatica >= 0 && TemperaturaClimática.GrausEmFuncaoClimatica <= 15):
            console.log(`Devido a condição climática, teremos um dia Chuvoso.`);
            break;
        case (TemperaturaClimática.GrausEmFuncaoClimatica >= 16 && TemperaturaClimática.GrausEmFuncaoClimatica <= 21):
            console.log(`Devido a condição climática, teremos um dia Nublado.`);
            break;
        case (TemperaturaClimática.GrausEmFuncaoClimatica >= 22 && TemperaturaClimática.GrausEmFuncaoClimatica <= 36):
            console.log(`Devido a condição climática, teremos um dia Ensolarado.`);
            break;
    default:
            console.log(`Clima não decodificado.`);
    }