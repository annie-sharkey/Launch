/*
Create an array of objects with properties name and age.
Make a function that accepts this array and returns an array of
just the names.
*/
let person1 = {
  name: "Matt",
  age: 19
};

let person2 = {
  name: "Alex",
  age: 20
};

let person3 = {
  name: "Nick",
  age: 21
};

let person4 = {
  name: "John",
  age: 22
};

let newArray = [person1, person2, person3, person4];

function nameOutput(arr){
  let outputArray = [];
  for (let index = 0; index<arr.length; index++){
    outputArray.push(arr[index]["name"]);
  };
  return outputArray;
}

console.log(nameOutput(newArray))
