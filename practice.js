/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
let students = [
    {
        name: 'John Smith',
        age: 18
  },
    {
        name: 'Mary Smith',
        age: 22
    },
    {
        name: 'Robert Jones',
        age: 30
    }
  ]

function names (array){
    var namesArray = new Array();
    for(let i = 0; i < array.length; i++){
        namesArray.push(array[i].name);
    }
    return namesArray;
}

console.log(names(students));