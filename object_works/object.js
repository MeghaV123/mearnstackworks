//object define{}
//key value pairs
// values are accessed by using corresponding key
var employee={id:1000,name:"arun",design:"developer",salary:25000}

console.log(employee["name"]);
console.log(employee.salary);

// update employee salary as 30000
employee["salary"]=30000 // employee.salary=30000
console.log(employee);

//check the key value gender is present or not
console.log("gender" in employee);

// add new key value paire gender:male
employee["gender"]="male"
console.log(employee);

//add 40 in to the salary
employee.salary+=40
console.log(employee);