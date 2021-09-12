const number = [20, 32, 54, 24, 95, 13, 97, 21];
console.log(number);
console.log(...number);

console.log(Math.max(...number));

const number2 = [...number];
number2.push(21);
console.log(number);