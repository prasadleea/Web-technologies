/** Array is special variable which can hold more than one value
 * length,toString(),indexOf(),lastIndexOf(),pop(),push(),shift(),unshift(),slice()concat(),splice(),includes,
 * forEach(),map(),filter(),reduce(),find(),every(),some().
 */

console.log("Arrays and Array methods");
let myCars=["BMW","Audi","Honda","Volvo"];
console.log("mycars",myCars);
console.log("type of Array",typeof myCars);
console.log(myCars[2]);
console.log(myCars.length);

//add Elements in  array
//push------------->add element in array at end
//unshift---------->add element in array in the begining
//spread operator-->add elements
myCars.push("Hyundai");
console.log(myCars);
myCars.unshift("Tata");
console.log(myCars);
myCars=["Mahindra",...myCars,"Maruthi"];
console.log(myCars);

//remove the element in array
//pop()-->removes last element
//shift--->removes first element
let popItem=myCars.pop();
console.log(popItem);
console.log(myCars);
let shiftList=myCars.shift();
console.log(shiftList);
console.log(myCars);


 
//modify the element in array
//replace
myCars[3]="KIA";
//myCars[myCars.indexOf("Honda")]="KIA";
console.log("replace Honda with KIA",myCars);

//array allows duplicate values
//but 'set' will not allow
let myFavPeople=["Mark","Marble","Monkey","Thiru","Thiru"];
console.log("Not remove duplicates in myFavPeople",myFavPeople); 
let mySet=new Set(myFavPeople);
console.log("removes duplicates",mySet);//removes duplicates

//search element 
//indexOf--->returns  indexnumber/-1
//includes--->returns true/false
console.log(myCars.indexOf("Audi"));  //ans 2
console.log(myCars.indexOf("Honda"));// ans-1(means not there in array)
console.log(myCars.includes("Audi")); //ans true
console.log(myCars.includes("Honda")); //ans false

//how to convert array into string
//toString()-->seprated by ","
//join()--->decide separator
console.log("arrayto string -->",myCars.toString());
console.log("Array to String -->",myCars.join(" "));

//splice--->to add element from array ,to remove element from array
//splice(param1,param2,rest)
//param1-->postion where new element is added
//param2-->how many elements needs to be removed
//rest---->write the elements needs to be removed
//splice-->returns the array of deleted elements
//splice-->Splice modify the original array
const fruits=["Banana","Orange","Apple","Mango"];
//add 2 fruits
fruits.splice(2,0,"Lemon","Kiwi");
console.log("fruits",fruits);
//remove 2 fruits
let removedfruits=fruits.splice(0,2);
console.log("removedfruits",removedfruits);
console.log("fruits",fruits);

//slice(param1,param2)-->extract the portion from array we
//param1 ---> index of argument,  param2-->index of end argument +1
let sliceArray=fruits.slice(1,3);
console.log("slicedArray",sliceArray); 

/**forEach((currItem,index,originalArray) =>{  
 })
//it takes parameter as  call back function
//call back function has three parameters. parameter-1-->currentItem, parameter-2--->Index, parameter-3-->Original Array
//in function even we give one parameter also it will execute  */
//can not return array
let bankingTransactions =[5000,-7000,-4000,2000,9000];
console.log("bankingTransactions",bankingTransactions);

bankingTransactions.forEach((curritem,index,array) => {
    console.log("curritem",curritem);
    console.log("index Position",index);
    console.log("Array",array);
});
    bankingTransactions.forEach((curritem,index) => {

        console.log("curritem",curritem);
        console.log("index Position",index);
    })
   finalArray=[];
    bankingTransactions.forEach((curritem) => {
          
        curritem=curritem/10;
        console.log("CurrentItem",curritem);
        finalArray=[...finalArray,curritem];
    })

    console.log(finalArray);

    /** Map method   1.returns array as well but not in for each loop */
  
    // let updatedArray= bankingTransactions.map((curritem) => curritem=curritem/10);
    let updatedArray= bankingTransactions.map((curritem) => {
        return curritem=curritem/10;
    });                
  
        console.log("updatedArray",updatedArray);


    //filter
    let myFruits=["fig","Apple","Guva","Chery"];
    //give the fruits which thefruitname is greater than 3 characters

    let filterdFruits=myFruits.map((curritem)=> curritem.length >3);
     console.log("filterdFruits",filterdFruits);//ans [false,true,true,true]
   
     let filterdFruit=myFruits.filter((curritem)=> curritem.length >3);
     console.log("filterdFruit",filterdFruit); //ans ['Apple', 'Guva', 'Chery']

     //find (to check  for single entry )
     //check if the transaction array have 9000 entry 
    //entry does not find undefined

   let entryFor9000= bankingTransactions.find(curritem =>{
    return  curritem ==9000;
   
    });
     console.log("entryFor9000"," ",entryFor9000);