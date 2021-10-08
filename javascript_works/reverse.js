var num = 123;
//var res=0;
while (num != 0) {
    var digit=num%10;
    console.log(digit);
    num=Math.floor(num/10)
    //let digit = num % 10;
   // res += digit;
    num = Math.floor(num / 10)
}

//console.log(res);
// var - global
// let - block level scope