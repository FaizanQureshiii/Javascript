const login ={
    username:'faizi',
    password:'12345',

    welcomemessage:function(){
        console.log(`${this.username},welcome to the network`);
    }
    
}

//this keyword refers to the current object ......
//fe if we use this keyword in the browser then we will have windows as current object




//this keyword cant be used in functions
//
//if we use arrow unction we dont have to use function keyword 
//like syntsx is ()= > {}
//
//const addtwonumber=() = >num1+num2;
//
//implicit return when we dont use return keyword and explecit return is when we use return keyword


console.log(this);
login.welcomemessage();

login.username='fahad';

login.welcomemessage();

const addsum= (num1 , num2 )=>num1+num2;
console.log(addsum(1,2));

