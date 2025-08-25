const PI = 3.14;
let contador = 0;
contador = contador + 1;

saudacao();

function saudacao() {
    console.log("Ola!");
}

let nome = "Ana";        // string
let idade = 30;          // number
let ativo = true;        // boolean
let nada = null;         // null
let indef;   // undefined

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ativo);
console.log(typeof nada);
console.log(typeof indef);

console.log('Ola! ' + nome + ' voce tem ' + idade + ' anos');

console.log(`Ola! ${nome} voce tem ${idade} anos`);

if (30 == '30') {
    console.log('30 e igual a 30');
}

if (30 === '30') {
    console.log('30 e igual a 30'); // Não printa
} else {
    console.log('30 nao e igual a 30');
}

const p = document.querySelector('p');
p.innerHTML = 'O joão disse: <strong>"Olá!"</strong>';

/*
<p>O joão disse: <strong>"Olá!"</strong></p>
*/

let dia = 4;
switch (dia) {
    case 1:
        console.log("Segunda");
        break;
    case 2:
        console.log("Terça");
        break;
    default:
        console.log("Outro dia");
}

const nomes = ["Ana", "Bruno"];
for (const n of nomes) {
  console.log(n); // "Ana", "Bruno"
}

for (let i = 0; i < 2; i++) {
    console.log(nomes[i]);
}

const input = document.querySelector("input");
input.value = "Ola";

const btn = document.querySelector("button");
const hiddenState = "hidden";

const arrowFunction = () => {
    console.log("Arrow function");
};

btn.addEventListener("click", () => {
    const div = document.querySelector("div");

    if (div.classList.contains(hiddenState)) {
        div.classList.remove(hiddenState);
    } else {
        div.classList.add(hiddenState);
    }
});