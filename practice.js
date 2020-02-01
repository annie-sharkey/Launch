/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
let personArr = [

    {name: "Aidan", age: 19},
    {name: "Asia", age: 5600000},
    {name: "John", age: 10}
];

let names = (arr) => {
    let a2 = [];
    for(i = 0; i < arr.length; i++){
        a2[i] = arr[i].name;
    }
    return a2;
}

console.log(names(personArr));