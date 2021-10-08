//prnt even no:s
// -----------
// var arr=[2,3,4,5,6]
// var even=arr.filter(num=>num%2==0)
// console.log(even);

//prnt all number >3
// var nums=arr.filter(num=>num>3)
// console.log(nums);

var arry=[2,3,4,5,6,7]

var arr=arry.filter(num=>num%2!=0)
console.log(arr);

var even=arry.filter(num=>num%2==0).map(num=>num**2)
console.log(even);