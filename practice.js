/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

let obj = [
    {
        name: "Daniel",
        age: 21
    },
    {
        name: "Baker",
        age: 25
    }

]
function getName(objects) {
    var names = []
    objects.map(function(x){
        names.push(x.name)
    });
    console.log(names)
}


getName(obj)