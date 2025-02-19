// strings

console.log("test");

let concept = "prototype (chain)";
let myName = "Emanuel Quintino";

console.log(myName.__proto__);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());

console.log(myName.slice(2));
console.log(myName.slice(-3));
console.log(myName.slice(2, -3));

console.log(concept.length);
console.log(concept.indexOf("web", 5));

// numbers

let num1 = 123456789;
let num2 = 5.9999942343256;

console.log(String(num1).length);
console.log(num2);
console.log(num2.toFixed(2));

console.log(Math.sqrt(81));
console.log(Math.pow(2, 10));

console.log(Math.abs(num2));
console.log(Math.trunc(num2));

console.log(Math.round(5.4)); // 0-4 / 5-9
console.log(Math.ceil(5.001));
console.log(Math.floor(5.999));

console.log(Math.random());
console.log(Math.ceil(Math.random() * 10)); //⭐

const times = ["Corinthians", "Flamengo", "Vasco", "Fortaleza", "Ceará", "São Paulo"];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);

// array
const crush = ["Tiazinha", "Rambo", "Bolzo", "Paola Oliveira", "Mariana Rui Barbosa"];

console.log(crush.length);
console.log(crush[1]);
crush[0] = "Feiticeira";
console.log(crush);

let a = "Emanuel";
a[1] = "M"; // string is immutable!
console.log(a);

console.log(crush.join("-"));
console.log("Bem vindo à aula".replaceAll(" ", "-"));

console.log(crush.includes("Rambo"));
console.log("João Emanuel Vieira Quintino".split(" ")[1]);
console.log(crush.reverse());
console.log("Emanuel".split("").reverse().join(""));

// Crie uma função que receba um texto como parâmetro e diga quantas palavras ele tem.

function wordCount(text) {
  const count = text.split(" ").length;
  return count;
}
const text = "Emanuel Quintino";

console.log(wordCount(text));

const tvPrograms = ["Domingo Legal", "Fantástico", "Domingão com Hulk"];

// LIFO
// tvPrograms.pop();
// tvPrograms.pop();
tvPrograms.push("Bom dia e Cia");
tvPrograms.push("TV Globinho");
tvPrograms.pop();

// FIFO
tvPrograms.unshift("TV Cruj");
tvPrograms.unshift("Castelo Ratimbum");
// tvPrograms.shift()

tvPrograms.splice(3, 2);
tvPrograms.splice(1, 4, "aaaa");

console.log(tvPrograms);

// Date

const dateNow = new Date();
console.log(dateNow);
console.log(dateNow.toLocaleString("pt-BR"));
console.log(dateNow.toLocaleDateString("pt-BR"));
console.log(dateNow.toLocaleTimeString("pt-BR"));

console.log(
  dateNow.toLocaleString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
);

const birthday = new Date("1992-12-25 00:00:00");

console.log(birthday);
console.log((dateNow - birthday) / 1000 / 60 / 60 / 24 / 365.25);

console.log(dateNow.getFullYear());
console.log(birthday.getFullYear());
console.log(dateNow.getFullYear() - birthday.getFullYear());

// ⚠️ Desafio: Crie uma função para verificar palíndromos e retorne TRUE ou FALSE. A lógica deve receber string com palavra ou texto

function isPalindrome(text) {
  const original = text.replaceAll(" ", "").toLocaleLowerCase();

  const reverse = original.split("").reverse().join("");

  return original == reverse;
}

console.log(isPalindrome("A torre da derrota"));

// ⚠️ Desafio: Crie uma lógica que verifique quantos dias faltam para o ano novo (01/01/2025)

const newYear = new Date("2025-01-01 00:00:00");
const today = new Date();
const daysToNewYear = newYear - today;

console.log(Math.floor(daysToNewYear / 1000 / 60 / 60 / 24));

const numbers = [0, 1];
const amount = 10;

for (let i = 2; i < amount; i++) {
  const result = numbers[i - 2] + numbers[i - 1];
  numbers.push(result);
}

console.log(numbers);

console.log(dateNow.toLocaleDateString());
console.log(new Date("2024-07-09").toLocaleTimeString());
console.log(
  new Date("2024-09-07").toLocaleString("en-us", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
);
