//array
//define[]
//size is not fixed
//insertion order preserved
//array index starting from  0th index
//it is possible to store same and different type of object/data
//fecting array elements index
//arrayname.push()
//arrayname.length[]

var expenses=[10000,12000,20000,22000,12000,13000]
//console.log(expenses);

//console.log(expenses[1]);
//console.log(expenses.length);//6

//iterating through array

// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

// for(let amount of expenses){
//     console.log(amount);
// }

//find total expenses
var total=0;
for(let amount of expenses){
   // console.log(amount);
    total=total+amount;
}
//console.log(total);

for(let amount of expenses){
    // if(amount<15000){
    //     console.log(amount); }
}

//add 3000 rs more with feb exp
expenses[1]+=5000;
console.log(expenses);

//inserting an element to end of the array
expenses.push(50000);
console.log(expenses);