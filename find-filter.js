const number = [20, 32, 54, 24, 95, 13, 97, 21];
const big = number.filter(x=> x > 30);
const small = number.filter(x=> x <30);
console.log("Big number :", big, "Small Number :", small);
const smallAgent = number.find(x=> x == 21);
console.log(smallAgent);
const product = [
    {name: 'Rifat' , clg: 'Cant' , school: 'BAFSPKP'},
    {name: 'Rat' , clg: 'Cant' , school: 'KRSP'}
];
const productRifat = product.filter(x => x.name == "Rat");
const clg = product.find(x => x.school == "KRSP");
console.log(clg , productRifat)