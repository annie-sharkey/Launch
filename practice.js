/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

let pairs = [
    {name: "grace",
     age: 18
    },
    {name: "sk",
     age: 20
    },
    {name: "theo",
     age:16
    }
];

function example(allPairs){
    let returnArr = [];
    for(let i = 0; i < allPairs.length; i++){
        returnArr.push(allPairs[i].name)
    }
    return returnArr;
}
print(example(pairs));