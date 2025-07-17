function func1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {

            resolve("404")

        },100)
    })
}
function func2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("function 2")
        },200)
    })
}

function onsuccess(data){
    console.log(`success ${data}`)

}
function Onerror(error){
    console.log(error)
}
function onFinally(){
console.log("finally in the end ")

}
func1()
.then(func2)
.then(onsuccess)
.catch(Onerror)
.finally(onFinally)


function getdata(){
    return new Promise((resolve,reject)=>{
        fetch('https://api.open-meteo.com/v1/forecast?latitude=35.5294&longitude=74.3773&hourly=temperature_2m')
        .then(response=>response.json())
        .then(data=>{
            const simplifiedData={
                current_temperature: data.hourly.temperature_2m[0],
                next_24_hours: data.hourly.temperature_2m.slice(0, 24)
            };
            resolve(simplifiedData);
        }) 
            

    })
}


function displaydata(data){
    console.log(data)
}
getdata()
.then(displaydata)