//let arr=[1,2,3,4,5,6];
//console.log(arr.slice(1,3));
//console.log('A',arr);
//
//console.log(arr.splice(1,3));
//console.log('B',arr);

//so when we use slice it will give us the values till we slice and the original array doesnt have any effect and range is not included i it 
//so when we use splice it will remove the values from the array and range is included in it

//push works on existing array 
//concat works on new array 

const marvel=["ironman","spiderman","thor"];
const dc=["superman","hulk","batman"];

//marvel.push(dc);

//console.log(marvel);

const newarr=marvel.concat(dc);
console.log(newarr);
