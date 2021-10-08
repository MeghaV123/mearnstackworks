var student={
    roll:1000,student_name:"ram",course:"MEARN STACK"
}
//CHK BATCH KEY is present or not if not add batch mearnstack aug

// if("batch" in student){
//     console.log("true");
// }
// else{
//     student.batch="mearnstack_aug"
// }
// console.log(student);

if(!("batch" in student)){
    student.batch="mearnstack_aug"
}
console.log(student);
for(let key in  student){
    console.log(key);
    console.log(student[key]);
}