/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

var indiv = [{
	name: "John",
	age: 33
}, {
	name: "Tom",
	age: 45
}]

function funct(indiv){
    var names = [];
    for(var i =0; i < indiv.length; i++){
        names[i] = indiv[i].name;
    }
    return names;
}