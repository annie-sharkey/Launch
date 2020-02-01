/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
function bioMaker(name1, age1) {
    let bios = {
        name: name1,
        age: age1
    }
    return bios
}

let bios = {
    name: "sample",
    age: 23
}
let bios1 = {
    name: "sample1",
    age: 29
}
let people = {bios1, bios}; // semi colons may not necesssary
//function bioMaker
for (let i = 0; i < 100; i++) {
    people.push(bioMaker("functionname", 100))
}

//bioMaker("functionname", 100);
//.map()

function justName(array) {
    names = {};
    array.map( names.push(name));
    return namesonly;
}
console.log(justName(people));