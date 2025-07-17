const myobject={
    name:'faizan',
    age:21,
    address:'pune',
    bg:'o+'
}
for (const key in  myobject) {
    console.log(`${key} : ${myobject[key]}`);
    
    
}


//to make the arrray or object nirrtatable we use for in loop
//otherwise we use map 
//for of loops work for arrays


//for...in works with objects: It iterates over the enumerable properties (keys) of an object. But it doesn't work directly with Map.
//
//for...of works with iterables: It works with iterable objects like arrays, Map, Set, etc., to iterate over values. However, plain objects are not iterable directly, so for...of doesn't work with them. To iterate over an object's properties, you would need to use Object.keys(), Object.values(), or Object.entries()
//
//