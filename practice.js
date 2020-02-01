/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get myName() {
        return this.name;
    }
}

static function getNames(myObjs) {
    objNames = new Array(myObjs.length);
    for(i=0; i<myObjs.length; i++) {
        objNames[i] = myObjs[i].myName();
    }
    return objNames;
}

var p1 = new Person("Alex", 20);
var p2 = new Person("Kathy", 18);
var p3 = new Person("Chris", 22);
var objs = [p1, p2, p3];

console.log( this.getNames(objs) );