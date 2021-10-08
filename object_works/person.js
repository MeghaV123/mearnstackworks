var person = {
    p_id: 100,
    p_name: "ajay",
    age: 25
}

//chk for vaccinated key is present if yes vaccinated:true else vaccination:false
// if ("vaccinated" in person) {
//     person.vaccinated = true
// }
// else {
//     person.vaccinated = false
// }
// console.log(person);

if ("vaccinated" in person) {
    person.vaccinated +=1
}
else {
    person.vaccinated = 1
}
console.log(person);