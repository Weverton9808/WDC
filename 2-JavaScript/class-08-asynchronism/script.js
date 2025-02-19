// timeout and interval

console.log("Antes");

setTimeout(() => {
  console.log("Timeout");
}, 0);

setInterval(() => {
  console.log("Interval");
}, 0);

setInterval(() => {
  const clock = new Date();
  // console.log(clock.toLocaleTimeString());
}, 10);

console.log("Depois");

// promises

const urlAPI = "https://jsonplaceholder.typicode.com";

// "https://jsonplaceholder.typicode.com/users"
fetch(urlAPI + "/users")
  .then((response) => response.json())
  .then((data) => console.log(data));

console.log("Final");

for (let i = 0; i < 200000; i++) {
  console.log(i);
}

setTimeout(() => {
  console.log("Timeout!");
}, 1000);
