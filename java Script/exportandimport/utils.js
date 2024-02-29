export let weekdays=["Mon","Tue","Wed","Thu","Fri"];
export const DATE_OF_BIRTH_YEAR=1947;
export function sayHi(message){
    alert(message);
}
//Export after declaration
function doAdd(num1,num2){
    alert(num1+num2);
}

export{doAdd};
//default export
export default function doMul(number1,number2){
    alert(number1*number2);
}