const sum = (num1, num2)=> num1+num2;
console.log(sum(15,20));

const multiply = (num1, num2, num3)=> num1*num2*num3;
console.log(multiply(12,2,6));

const multiply2 = num => num * 24;
console.log(multiply2(2));

const name =() => "Rifat"
console.log(name());

const result =(num1, num2)=>{
    const sum = num1+num2;
    const sum2 = num1-num2;
    return sum * sum2;}
console.log(result(10,2));