let Person1 = {
  name: "Amy",
  age: 43
};
let Person2 = {
  name: "Josh",
  age: 26
};
let Person3 = {
  name: "Amy's Sister",
  age: 14
};
let Person4 = {
  name: "Josh's Sister",
  age: 19
};

let people = new Array(Person1, Person2, Person3, Person4);

function getNames(pplArray) {
  var justNames = new Array();
  for (var i = 0; i<pplArray.length; i++) {
    justNames.push(pplArray.name);
  }
  return justNames;
}

/*
Create an array of objects with properties name and age.
Make a function that accepts this array and returns an array of
just the names.
*/
