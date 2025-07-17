
const getPromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log('promise');
        resolve('promise resolved');
    })
}

let promise=getPromise();
promise.then(()=>{
    console.log('promise resolved');
});
    

const posts=[ 
    {
        title:'post one',
        body:'this is post one',
        
    },
    {
        title:'post two',
        body:'this is post two', 
    }
];
function getposts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{

         output +=`<li>${post.title}</li>`;

            
         
        });
        document.body.innerHTML=output;


    },1000);

}
getposts();

function Createpost(post,callback){
    setTimeout(()=>{
        posts.push(post);   
        callback();

},2000);
}

Createpost({title:'post three',body:'this is post three'},getposts); 
getposts();



function async(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data1");
            resolve("resolved");
        }, 4000);
    
    })

}

function async2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data2");
            resolve("resolved");
        }, 4000);
    
    })
}
   
console.log("fetching data1");
let p1=async();
p1.then((res)=>{
    console.log(res);
    console.log("fetching data2");
    let p2=async2();
    p2.then((res)=>{
        console.log(res);
    })

})
async function hello(){
    console.log("hello");
}

function api(){
    return new promise((resolve,reject)=>{
        
        setTimeout(() => {
            console.log("api data");
            resolve(200);
        }, 2000);
    })
}

async function getapidata(){
await api();
}