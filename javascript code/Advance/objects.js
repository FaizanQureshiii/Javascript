const mySym=Symbol("key1");
const man={
name:'faizan',
age:21,
[mySym]:'secret',
isMarried:true,
hobbies:['cricket','music'],
address:{
    street:'1st street',
    city:'pune',
    state:'maharashtra'

}

}
console.log(man[mySym]);

console.log(man['age']);
//Object.freeze(man);
man.age=22;
console.log(man['age']);

console.log( man['address']);


//const tinder=new Object();  singleton object 

//const tinder={}; non singleton object 
