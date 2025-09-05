const nome = "Gabriel";

function saudacao(nome, hora) {
    if (hora < 12) {
        console.log(`Bom dia, ${nome}`);
    } else if (hora < 18) {
        console.log(`Boa tarde, ${nome}`);
    } else {
        console.log(`Boa noite, ${nome}`);
    }
}

saudacao(nome, 9);
saudacao(nome, 14);
saudacao(nome, 20);