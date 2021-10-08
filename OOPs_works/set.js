// class Set{
//     add(object){}
// }           add,has,clear,delete,foreach()

var st=new Set()
st.add(10)
st.add(10)
st.add(40)
console.log(st);

function add(...args){
    return args.reduce((num1,num2)=>num1+num2)
}
console.log(add(10,20,30,40,50));


function getMax(...args){
    return args.reduce((num1,num2)=>num1>num2?num1:num2)
}
console.log(getMax(10,11,12,13,14));