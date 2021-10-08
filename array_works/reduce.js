var arr=[2,3,4,5,6,7]
var total=arr.reduce((num1,num2)=>num1+num2)
console.log(total);
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(max);
var min=arr.reduce((num1,num2)=>num2<num1?num2:num1)
console.log(min);