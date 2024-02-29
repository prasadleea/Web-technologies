/**
 * write a function that takes a string as input and returns a new string  with the first letter of each word capitalzed
 * Example:Input:"hello world"
           Output:"Hello World"
*/

const capitalizeFirstLetter=(inputString) => inputString.split(" ").map((curritem) =>curritem[0].toUpperCase() + curritem.slice(1)).join(" ");

console.log(capitalizeFirstLetter("hello world welcome to learn salesforce"));

/**const capitalizeFirstLetters=function(inputString){
    let outputString=inputString.split(" ").map((curritem) =>curritem[0].toUpperCase() + curritem.slice(1)).join(" ");
console.log(outputString);
};
capitalizeFirstLetters("hello world welcome to learn salesforce"); */

/**
 * 2.Write a function it takes a string as input retuns the reverse of the string,maintaing the case of each charcter.
Example :input :"Hello World"
        output:"dlroW olleH" */
        
const reverseStringWithCase=(inputString)=> inputString.split("").reverse().join("")
console.log(reverseStringWithCase("Hello World"));

/**const rev=(inputstring)=>{
let array=inputstring.split("");
console.log(array);
let revArray=array.reverse().join("")
console.log(revArray);
}
 rev("Hello World");*/
 



/**3. Write a function that takes string as input and returns the number of occurance of each character in the string
 *  as an object where characters  are in object property and occurence of character number in vaule of the object  
 * Example input:"hello" 
 *         output:{h:1,e:1,l:2,o:1}*/
const countCharcters=(inputString)=>{
   let output={};
    
     let inputArray=inputString.split(""); 
    console.log(inputArray);
    
   
        
        /**  for(let curritem in inputArray){
         console.log("curritem",inputArray[curritem]);
         if(output.hasOwnProperty(inputArray[curritem]))
         {
            output[inputArray[curritem]]=output[inputArray[curritem]]+1;
         }
         else
         {
            output[inputArray[curritem]]=1;
         }

         }*/
      

    
      for(let curritem of inputArray)
 {
  // inputArray.map(curritem =>{
        console.log("curritem of array",curritem)
        
       if(output.hasOwnProperty(curritem))  
     {
      output[curritem]=output[curritem]+1;
     } 
      else
      {
        output[curritem]=1;
      }
    
  }
     // } )  
   
   console.log(output);
    
};
countCharcters("helllo");

//3.generate user name based on input as shown below
//Example: input=ankith Dileep Jain;
//         output=ADJ
const generateUserName=(inputString)=>//inputString.toUpperCase() .split(" ").map((curritem) =>curritem[0]).join("");
  
 {
       console.log("input =",inputString);  
    let upperCase=inputString.toUpperCase();
    console.log("upperCase",upperCase);
    let inputArray=upperCase.split(" ");
    console.log("inputArray",inputArray);
    let outputArray=inputArray.map((curritem)=> curritem[0]);
    console.log("outputArray",outputArray);
    console.log("output",outputArray.join("")); }
   //console.log("output",generateUserName); 


generateUserName("ankith Dileep Jain");

//4.example input=[1,2,2,3,4,4,5]
//         output=[1,2,3,4,5]
 let input=[1,2,2,3,4,4,5];
 let set=new Set(input);
 console.log("output",set)



