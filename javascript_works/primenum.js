
//6(1,2,3,6)
//7(1,7)
//11(1,11)

var num=7;
var flag=0;
for(let i=2;i<num;i++){
    if (num%i==0) {
        flag+=1;
        break;
    }
}
console.log(flag==0?"prime":"not prime");