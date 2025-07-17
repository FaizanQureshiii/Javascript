let obj1={1:'faizan',2:'ali'};
let obj2={3:'fai',4:'ahmad'};
let obj3=Object.assign({},obj1,obj2);
console.log(obj3);
console.log(Object.entries(obj3));
console.log(Object.keys(obj3));
console.log(Object.values(obj3));

const obj={
    name:'faizan',
    age:21
}

//destructure

const {name:n}=obj;
console.log(n);

console.log