//inside the class we use 'this' 
//outside the class we use reference name(obj1)
// javascript is interperter(line by line)
//javasript is used in frontend and backend
//duty of setStudent() intializing instance variable
//constuctor() intializing instance variable

class student{
    //setStudent(roll,course,stud_name){ 
        constructor(roll,course,stud_name){
        this.roll=roll,
        this.course=course,
        this.stud_name=stud_name
    }
    //roll,course,stud_name(local variables)
    //this.roll,this.course,this.stud_name (instance variables)
    printStudent(){
        console.log(this.roll,this.course,this.stud_name); 
    }
}
var obj1=new student(1,"bca","arun");
// obj1.setStudent(1,"bca","abhi")
// console.log(obj1.stud_name);
// console.log(obj1.roll);
obj1.printStudent()

// var obj2=new student();
// obj2.setStudent(2,"bcom","anju")
// obj2.printStudent()