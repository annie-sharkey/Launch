/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
let objects = [{
    name: "bob",
    age: 12
},  {
    name: "bob2",
    age: 10
}]

function getNames(objects){
    let output = []
    objects.forEach((obj => {
        output.push(obj["name"])
    }))
    return output
}

console.log(getNames(objects))