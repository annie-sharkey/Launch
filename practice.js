/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
let objects = {
person1:{name: "Jason Bourne", age: 22}, 
person2:{name: "Melissa Jameson", age:18}, 
person3:{name:"John Adams", age:285}
}


function nameList(list){
  let objnames = []
    for(let i in list){
        objnames.push(list[i].name);
    }
  return objnames
}

console.log(nameList(objects));