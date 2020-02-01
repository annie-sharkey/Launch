/*
Create an array of objects with properties name and age. 
Make a function that accepts this array and returns an array of 
just the names.
*/
let personArr = [{
	name: "Sam",
	age: 20
}, {
	name: "Jack",
	age: 25
}, {
	name: "Deborah",
	age: 19
}]

function justNames(personArr){
	let namesArr = [];
	for(let i = 0; i < personArr.length; i++){
		namesArr.push(personArr[i].name)
	}
	return namesArr;
}

console.log(justNames(personArr));
