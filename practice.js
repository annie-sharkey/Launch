/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

var p1 = {name:"Alan", age:18};
var p2 = {name:"Dakota", age:19};
var p3 = {name:"Jim", age:54};

var pepArray = {p1, p2, p3};

function peopleNames(arr){
    var pepNames =[];

    for (let i=0; i<arr.length; i++){
        pepNames.push(arr[i].name);
    }

    return pepNames;
}

console.log(peopleNames(pepArray));