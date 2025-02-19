const user = {
  name: "Goku",
  age: 51,
  rule: "Saiyajin",
  Saiyajin1: true,
  Saiyajin2: true,
  Saiyajin3: true,
};

const user2 = {
  name: "Gohan",
  age: 15,
  rule: "Saiyajin",
  Saiyajin1: true,
  Saiyajin2: true,
  Saiyajin3: false,
};

console.log(typeof user);
console.log(user);
console.log(user.name);
console.log(user.rule);

console.log(user2.name);
console.log(user2.Saiyajin3);

// array (vector or list)
const animes = [
  "Os Cavaleiros dos Zodíacos",
  "Dragon Ball",
  "Naruto",
  "ThunderCats",
  "Heeman",
];

console.log(animes);
console.log(animes[0]);
console.log(animes[1]);
console.log(animes[4]);

const pokemon = [
  { name: "Charmander", level: 6 },
  { name: "Bulbasour", level: 5 },
  { name: "Squirtle", level: 4 },
];

console.log(pokemon);
console.log(pokemon[0]);
console.log(pokemon[1].name);
console.log(pokemon[2].level);
 