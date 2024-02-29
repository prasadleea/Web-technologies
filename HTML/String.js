let myDetail="My Name is Ankith";
console.log("myDetails",myDetail);
console.log("myDetails",myDetail.length);
 
//Extracting the string

let text ='Apple, Banana, Banana, Kiwi';
console.log(text);
// slice(start position,end postion+1)
//substring(start position,end)
//substr(start position,length)
let textBanana=text.slice(7,13);
/**        OR
let textBanana=text.slice(text.indexOf("Banana"),text.indexOf("Banana") + 6);*/
console.log(textBanana);

let remaingFruits =text.slice(7);
console.log("reaming Fruits",remaingFruits);//ans Banana, Banana, Kiwi

let lastletter=text.slice(-1);
console.log("lastletter",lastletter);//ans i

let part=text.slice(-12);
console.log("part",part);//ans:part Banana, Kiwi

//substring(start position,end)
//neagive value is treated as zero

let substringBanana=text.substring(7,13);
console.log(substringBanana);

let remaingFruit =text.substring(7);
console.log("reaming Fruits",remaingFruit);

let parts=text.substring(-12);// ans:parts Apple, Banana, Kiwi(because -12 will become zero)
console.log("parts",parts);

//substr(start position,length)
 let substrbanana =text.substr(7,6);//here length of banana=6
 console.log("substrbanana",substrbanana);

 // replace
 //replace will only replace the first match
// replace is case sensitive
//replace will not modify the existing string

let newFruitText=text.replace('Banana','Mango');
console.log(newFruitText);
console.log(text);

console.log(myDetail);
console.log(myDetail.toUpperCase());
console.log(myDetail.toLowerCase());
//concatination String
let text1="hello";
let text2="Js";
let text3=text1.concat(" ","World");
let text4=text1.concat(" ",text2);
console.log(text3);
console.log(text4);
console.log(`${text1} ${text2}`);

// trim(),trimStart(),trimEnd()

let trimMe="   hello World    "
console.log(trimMe);
console.log(trimMe.trim());
console.log(trimMe.trimStart());
console.log(trimMe.trimEnd());

//padStart,padEnd  (for strings)
let myNumber="5"; //00005
console.log(myNumber.padStart(5,"0"));
console.log(myNumber.padEnd(2,"$"));
/**let word="Guva";
console.log(word.padStart(2," "));*/

//split (split the total string statement into array of words)
//split method will return you an array

let splitString="Amith,Sujith,Akhil,Ajay,Anand";
let splitArray =splitString.split(",");
console.log("splitArray", splitArray);

let splitString1="Amith,Sujith,Akash King *Prasad Suresh,Kumar";
let splitArray1=splitString1.split(" ");
let splitArray2=splitString1.split(",");
let splitArray3=splitString1.split(" *");
console.log("splitArray1",splitArray1);
console.log("splitArray2",splitArray2);
console.log("splitArray3",splitArray3);

//convert array into String
//toString
//join
let toString=splitArray.toString();
console.log("array to string",toString);
//In join() we can give join("*" or "," or " " or "any symbol" )
let joinString=splitArray.join(" ");
console.log("array to string using join method =>",joinString);
 let join2 = splitArray1.join("*");
 console.log("array to string using join method =>",join2);
let join3=splitArray2.join("*");
let join4=splitArray2.join("&");
console.log(join3," ",join4);

//search the String(SEARCH,MATCH)
//indexOf =>returns the index position of string,"if string is not present returns -1"
//includes=>if present returns "true"or else it retuns "false"
  console.log(text);
  console.log(text.indexOf("Banana"));//ans is 7 (7 is the index postion of Banana."even if you two Banana in string it will show fist Banana index position")  )
  console.log(text.indexOf("Mango"));//ans is -1(String is not present)
  console.log(text.includes("Banana"));// true
  console.log(text.includes("Mango"));//false
//startsWith();
//endsWith();
console.log(text.startsWith("Apple"));//true
console.log(text.startsWith("Banana"));//false
console.log(text.endsWith("Kiwi"));//true
console.log(text.endsWith("Banana"));//false

//to remove duplicates im the string
/**break the string into array--->split()
 * convert array into set=> conversion
 *combine the set  --> join()
*/
let newString="Hello World World";
let newStringArray=newString.split(" ");
console.log("array",newStringArray);
finalArray=[];
newStringArray.map((currItem)=>{
    if(!finalArray.includes(currItem))
    {
        finalArray=[...finalArray,currItem];
    }
});
console.log(finalArray);
console.log(finalArray.join(" "));