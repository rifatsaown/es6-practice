const numbers = [2,4,6,8,10,12];
const square = numbers.map(x=>x*x);
console.log(square);

const product = [
    {name: 'Rifat' , clg: 'Cant' , school: 'BAFSPKP'},
    {name: 'Rat' , clg: 'Cant' , school: 'KRSP'}
]
const school = product.map(x=>x.school);
console.log(school);

product.forEach (x=> console.log(x));