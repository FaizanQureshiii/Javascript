async function getdata(){
    let data=await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.5294&longitude=74.3773&hourly=temperature_2m')
    const result=await data.json();
    console.log(result)
}


getdata()
                                               

function getdata1(){
    return new Promise((resolve,reject)=>{
        fetch('https://api.open-meteo.com/v1/forecast?latitude=35.5294&longitude=74.3773&hourly=temperature_2m')
        .then(response=>response.json())
        .then(data=>{
            const simplifieddata={
                "hourly":{
                    "temperature_2m":data.hourly.temperature_2m
                    
                }
                .resolve(simplifieddata)
            }
        })
    })
}

getdata1();