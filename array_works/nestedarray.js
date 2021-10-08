var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikikl",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]

//sort emp wrk exp asc,desc
employees.sort((emp1,emp2)=>(emp2[5]-emp2[4])-(emp1[5]-emp1[4]))
console.log(employees);
employees.sort((emp1,emp2)=>emp2[4]-emp1[5])-(emp=>emp[4]-emp[5])
console.log(employees);

//sort emp wrk salary
employees.sort((emp1,emp2)=>emp1[2]-emp2[2])
console.log(employees);
employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(employees);

employees.sort((emp1,emp2)=>emp1[2]-emp2[2]).filter(emp=>emp[3]=="developer")
console.log(employees);
employees.sort((emp1,emp2)=>emp2[2]-emp1[2]).map(emp=>emp[3]=="developer")
console.log(employees);




// var res=employees.filter(emp=>emp[3]==)








//add bonus of 5000rs for all developers
// var sal=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[2]+5000)
// console.log(sal);

// var employee_name=employees.map((emp=>emp[1]))
// console.log(employee_name);


// var developers=employees.filter(emp=>emp[3]=="developer").map(emp=>emp[1])
// console.log(developers);

//prnt names of ba
// var name_ba=employees.filter(emp=>emp[3]=="ba").map(emp=>emp[1])
// console.log(name_ba);

//prnt developers name exp > 6yrs
// var develp_exp=employees.filter(emp=>(emp[3]=="developer") & (emp[5]-emp[4]>6)).map(emp=>emp[1])
// console.log(develp_exp);






// var developer_count=0;
// for(let employee of employees){
//     if (employee[3]=="developer"){
//         developer_count++;
//     }
// }
// console.log("developers=",developer_count);

// for(let employee of employees){
//     console.log(employee[1],"exp",employee[5]-employee[4]);
// }

//total salary of developers
//      -----------
// var total=0;
// for(let employee of employees){
//     if(employee[3]=="developer"){
//         total+=employee[2]

//     }
// }

//highest salary of employee
  // -------------------

// var high_salary=0;
// for(let employee of employees){
//     if(high_salary<employee[2]){
//         high_salary=employee[2]
//     }
// }
// console.log(high_salary);
 

//lowest salARY OF EMPLOYEE
//    -----------------
// var low_salary=employees[0] [2];
// for(let employee of employees){
//     if(low_salary>employee[2]){
//         low_salary=employee[2]
//     }
// }
// console.log(low_salary);


