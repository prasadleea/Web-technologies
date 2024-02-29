let cal1result=cal1(10,5);//calling fuction before declarationor 
console.log("cal1",cal1result);
//function declaration :legacy 
function cal1(number1,number2) 
{
    let sum=number1+number2;
    return sum;
}
// function expression:recommended  and can not call the function before intialization
let cal2=function(number1,number2){
  if(number2)
  {
        let sum=number1+number2;
    return sum;
  }
  else{
    return number1;
  }
}

let cal2result=cal2(10,5);
console.log("cal2",cal2result);

let cal3result=cal2(10);
console.log("cal3result",cal3result);

let cal4=(number1,number2)=>
{
    if(number2)
    {
          let sum=number1+number2;
      return sum;
    }
    else{
      return number1;
    }
}

console.log(cal4(10,5));

let greet=function(username){
    return `${username} Welcome to JS`
}
let greetArrowFunction=username =>  //we can remove brackets and return keyword when have single statement
     `${username} Welcome to JS`

console.log(greet("Ankith"));
console.log(greetArrowFunction("Amith"));

let meet=()=>"welcome To Js"
console.log(meet());

// callback function: its is a function given as arrgument or parameter to another function.It waits until the first function execution 
function greetme(name,callMe){
    console.log(`${name} wlecome`);
    callMe();
}
function hello(){
    console.log("To programming World");
}
function goodbye(){
    console.log("see you,Good night");
}
greetme("Anil",hello);
greetme("Anil",goodbye);

setTimeout(()=>{},1000);