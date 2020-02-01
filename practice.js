/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

let testArray = [p1 = {name:"Joe", age:34}, p2 = {name:"Suzy", age:38}, 
p3 = {name:"Martin", age:20}, p4 = {name:"Caroline", age:23},
p5 = {name:"Maria", age:25}]

function getNames(peopleArray) {
    var answerArray = []
    for (i = 0; i < peopleArray.length; i++) {
        answerArray.push(peopleArray[i].name)
    }
    return answerArray
}

console.log(getNames(testArray))