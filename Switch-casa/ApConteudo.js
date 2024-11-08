const usuario  = { mome: `Rogério`, Idade: 17, time: `Flamenguense` }
const mensagemBoasVindas1 = `Bem-vindo ao tricolor!`;
const mensagemBoasVindas2 = `Bem-vindo torcedor Rubro-Negro`;
const mensagemBoasVindas3 = `Bem-vindo torcedor Palmerense`;
const mensagemBoasVindas4 = `Bem-vindo torcedor Vascaíno`;

if (usuario.time === `Tricolor`){
    console.log(mensagemBoasVindas1);

} else if  (usuario.time === `Rubro-Negro`){
console.log(mensagemBoasVindas2);
}

else if (usuario.time ===  `Palmerense`) {
    console.log(mensagemBoasVindas3);

} else if (usuario.time ===  `Vascaíno`) {
    console.log(mensagemBoasVindas4);
}

switch (usuario.time)  {
    case `Fluminense`:
        console.log(mensagemBoasVindas1);
        break;
    case `Flamengo`:
        console.log(mensagemBoasVindas2);
        break;
    case `Vasco`:
        console.log(mensagemBoasVindas3);
        break;
    case  `Náutico`:
        console.log(mensagemBoasVindas4);
        break;
    default:
        console.log(mensagemBoasVindas1);
}

// - - - - - - - - - - - - - - - E S P A Ç A M E N T O - - - - - - - - - - - - - - - //

switch (usuario.time) {
    case `Fluminense`:
    case  `Flamengo`:
    case `Grêmio`:
        console.log(mensagemBoasVindas2);
    break;
}
