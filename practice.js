/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/


var people = [
    {
    name: "Chris",
    age: 18,
    },
    {
    name: "Jamal",
    age: 30,
    },
    {
    name: "Trevor",
    age: 21,
    },
    ];


    function arrFunc(arrOfObj){
        arrOfObj.map(function(item) { 
        delete item.age; 
        return arrOfObj; 
});
        return arrOfObj;
    }


    console.log(arrFunc(people));


    


    