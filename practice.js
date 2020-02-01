/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

let ppl = [{name: "hehe", age: 10},{name: "hoho", age: 11}];

let getNames = listOfPeople => {
    for (let i = 0; i < listOfPeople.length; i++) {
        console.log(listOfPeople[i].name);
    }
};

getNames(ppl);