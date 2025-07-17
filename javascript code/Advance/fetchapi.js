let eurl="https://cat-fact.herokuapp.com/facts";
let dt=document.getElementById("data");
let button=document.querySelector("#btn");
//const getdata=async ()=>{
//    console.log("fetching data");
//    let promise=await fetch(url);
//    console.log(promise);
//    let data=await promise.json();
//   
//dt.innerText=data[0].text;
//}
//button.addEventListener("click",getdata);
const getdata=async ()=>{
    console.log("fetching data");
    let promise=await fetch(url);
    console.log(url)
    let data=promise.json();
    data.innerText=data[0].text;
    
}


const url="https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"

async function getData(){
  const request=new Request(url,{
    headers:{'Authorization':'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'}
    
 })
const response=await fetch(request);
  const data=await response.json()
  console.log(data);


}

getData()