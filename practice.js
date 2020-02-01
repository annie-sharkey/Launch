/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/


var p1 = {name:"Jim", age:"20"};
var p2 = {name:"Jan", age:"40"};
var p3 = {name:"Jeff", age:"60"};


let our_array = []


function nameSearch(our_array){ 
  let retArray = []; // Empty Array to add names to


  for (let i = 0; i < our_array.length; i++){
       retArray.push(our_array[i][0]);
   }
  // When the loop is finished, return retArray
  return retArray;
}

