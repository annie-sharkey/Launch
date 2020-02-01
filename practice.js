/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

//Jack Chandler
//1 February 2020
//practice.js

people_array = [
    {
        name : "Jack",
        age : "18"
    },

    {
        name : "Tom",
        age : "20"
    },

    {
        name : "Ladybug",
        age : "11"
    }
]

function GetNames (array) {
    name_array = [];

    array.forEach(element => {
        name_array.push(element.name)
    });

    return name_array
}
console.log("Name Array:");
console.log(GetNames(people_array));