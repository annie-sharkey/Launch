/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

let people = [
    {name: "Kellan", age: 18},
    {name: "Frank", age: 22},
    {name: "Alice", age: 58},
    {name: "Tina", age: 33},
    {name: "Jimmy", age: 15} 
];

names = (persons) => {
    let namesArr = [];
    for (let i=0; i<persons.length; i++) {
        namesArr[i]=person[i].name;
    }
    return namesArr;
}