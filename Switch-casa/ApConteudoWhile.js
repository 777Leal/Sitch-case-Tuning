const usuario = { mome: `Rogério`, Idade: 19, time: `BahiaMaster` }
const MensagemSaudações1 = `Bem-vindo Tricolor`;
const MensagemSaudações2 = `Bem-vindo Rubro-Negro`;
const MensagemSaudações3 = `Bem-vindo Vascaíno`;
const MensagemSaudaçõesGeral = `Bem-vindo Tricolor`;
const MensagemDeEscolha = `Clique no setor qual deja adquirir seu inresso.`;
const MensagemFinal = `Divirta-se no estádio do maracanã.`;

do {
    usuario.time === `Fluminense` && usuario.Idade >= 18
        console.log(MensagemSaudações1);
        usuario.time === `Flamengo` && usuario.Idade >= 18
        console.log(MensagemSaudações2);
        usuario.Idade >=18
        console.log(MensagemSaudaçõesGeral);
        console.log(`Não vendemos ingressos para menores de 18 anos.`)

console.log(MensagemDeEscolha);
console.log(MensagemFinal);

} while (NumeroDeRepeticoes < 5000);