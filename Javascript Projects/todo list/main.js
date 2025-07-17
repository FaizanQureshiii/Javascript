const input=document.getElementById("input-task");
const ul=document.querySelector(".listss");
const checkbox=document.querySelectorAll(".checkbox");

input.addEventListener("keyup",function(e){
    
    e.preventDefault();
  
 
    if(e.key=="Enter" && input.value==""){
        alert("Please enter a task");
        return false;
    }
    else if(e.key=="Enter"){ 

   
    const li=document.createElement("li");
    li.className="list-item";
    li.appendChild(document.createTextNode(input.value));

 


    const date = document.createElement("p");
    date.className="date";
    date.appendChild(document.createTextNode(new Date().toDateString()));
    li.appendChild(date);
    const check=document.createElement("input");
    check.type="checkbox";
    check.className="checkbox";
    li.appendChild(check);
    ul.appendChild(li);

    input.value="";
    let timeoutid;
        check.addEventListener("click",function(){
            
            if(check.checked){
                li.style.textDecoration="line-through";
                 timeoutid=setTimeout(() => {
                    ul.removeChild(li);
                }, 5000);

            }
            else if(!check.checked){
                li.style.textDecoration="none";
               clearTimeout(timeoutid);

               
                
            }
        
        })
   
    }

});