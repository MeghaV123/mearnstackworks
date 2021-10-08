var num=15
// if(num%15==0){
//     console.log("fizz buz");
// }
// else if(num%5==0){
//     console.log("buz");
// }
// else if(num%3==0){
//     console.log("fizz");
// }
// else{
//     console.log("number is invalid");
// }
var res="";
if(num%3==0){
    res+="fizz";
}
if(num%5==0){
    res+="buz"
}
console.log(res);