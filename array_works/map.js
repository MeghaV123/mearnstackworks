// Map    --> there is no condition is check through all object then we use map  parameter=1
// filter --> condition will check through all objects,then we use filter
// reduce --> 2 parameters to find array sum,max,min  (it will show single value)
// sort   --> it will order the array elements
// some   --> return boolean value  "it will check the given data is present in the array" not present=false,present=true
// find   --> to find the given data from array
// forEach--> when we use foreach we cannot assign variable


//squares of each number
//   ----------

var arr=[2,3,4,5,6]
// var cube=num=>num**3
// var cubes=arr.map(cube)
// console.log(cubes);

var squares=arr.map((num)=>num**2)
console.log(squares);

