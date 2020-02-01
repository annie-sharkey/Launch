/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

let person1 = {
    name: "Joe",
    age: 15
};

let person2 = {
    name: "Jim",
    age: 29
};

let arr = {person1, person2};

function justNames (arr) {
    let returnedPeople = [];

    for (let i = 0; i < arr.length; i++) {
        returnedPeople.push(arr[i].name);
    }

    return returnedPeople;
};

print(justNames(arr));