// var num1=10,num2=20;
// if(num1>num2){
//     console.log(`${num1} is highest num`);
// }
// else if(num1<num2){
//     console.log(`${num2} is highest`);
// }
// else{
//     console.log("both are equal");
// }

var num1=10,num2=20,num3=30;
if((num1>num2) &(num1>num3)){
    console.log(`${num1} is highest num`);
}
else if((num1<num2)&(num1<num3)){
    console.log(`${num2} is highest`);
}
else if((num3<num1)&(num3<num2)){
    console.log(`${num3} is high`);
}
else{
    console.log("three are equal");
}