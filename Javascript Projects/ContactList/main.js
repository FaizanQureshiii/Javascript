

let searchname=document.getElementById('searchInput');

searchname.addEventListener('keyup',filteritems);
function filteritems(e){
                                                       
e.preventDefault();
let filtername=e.target.value.toLowerCase();   

let ul=document.querySelector('#contactList');

let items=ul.querySelectorAll('li');

for(let i=0;i<items.length;i++){
    let a = items[i].getElementsByTagName('a')[0];
    if(a.innerHTML.toLowerCase().indexOf(filtername)!=-1){
        items[i].style.display="block";
    }else{
        items[i].style.display="none";
    }
}



}        



