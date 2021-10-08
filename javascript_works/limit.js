//var num=3;
//low=8 upp=24
//2**2=4
//3**2=9

var num=2,low=8,upp=27;
for (let i = 0;i<=upp;i++) {
   let res=i**num;
   if((res>=low) & (res<=upp)){
       console.log(i);
   }
}