/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
var students = []
let student1 = {
        name : "Ann",
        age : 20 };
let student2 = {
        name : "Justine",
        age : 21 };
let student3 = {
        name : "Dan",
        age : 25,
}

students.push( student1 )
students.push( student2 )

function searchName( ar ) {
  const newLib = [];
  for ( i in ar ){
    var stu_name = ar[i].name;
    newLib.push( stu_name );
  }
  return newLib;                                       //return the array newLib outside of the function when function is invoked
}

/* Testing
var student_names = searchName(students)
for ( stu in student_names ){
  console.log( student_names[stu] );
}
*/
