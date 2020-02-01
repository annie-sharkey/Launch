/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
var temp = [["John",22],["Pablo",69],["Escobar",99]];

function printer(array){
    for (var i = 0; i < temp.length; i++) {
        return temp[i][0];
    }