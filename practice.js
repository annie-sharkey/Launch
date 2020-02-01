/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.

*/
var peoples =[{
    name: "John",
    age: 19
},
    {name: "jake",
    age: 20,
}
]
function printNames(peoples){
    nameArray=[]
    for(people of peoples){
        var n = people['name']
        nameArray.push(n)
    }
    return nameArray
}