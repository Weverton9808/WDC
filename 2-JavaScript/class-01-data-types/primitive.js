let myName = "Emanuel"; // string
let age = 30.5; // number
const cpf = "123.123.123-12"; // string
let isAdmin = true; // boolean

myName = "Emanuel Quintino";
// cpf = "outra coisa";

console.log(myName);
console.log(cpf);
console.log(isAdmin);

console.log(typeof myName);
console.log(typeof cpf);
console.log(typeof isAdmin);

document.write("Bem-vindo, " + myName); // concat
console.log(myName + 1); // type coercion
console.log(Number("2") + 3); // type coversion
console.log(typeof Number("2"));
console.log(typeof String(age));

// template literals (string)
console.log(`Meu nome é ${myName} e tenho ${age} anos`);
