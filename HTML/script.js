let myFavCars =["Audi","Bmw","Suzki","Hyundi"];
let myDetails={
fname:"Ankith",
lname:"Jain",
age:   75,
};
for(let i=0;i<myFavCars.length;i++)
{
    console.log(`${i+1}.${myFavCars[i]}`);
    console.log(i+1 +"."+ myFavCars[i]);
}
for(let curritem of myFavCars){
    console.log("curritem",curritem);
}
/* To get index of Array  */
for(let [index,car] of myFavCars.entries()){
    console.log(index+1 +"."+car);
    console.log(`${index+1}.${car}`);
}

for(let curritem of Object.keys(myDetails)){
    console.log("curritem",curritem);
    console.log("Property value",myDetails[curritem]);//we can get VALUES with KEYS by DYNAMIC METHOD WITH EXAMPLE myDetails[curritem]
    console.log(curritem +":"+ myDetails[curritem]);
}

for(let curritem of Object.values(myDetails)){
    console.log(curritem);
}
for(let curritem of Object.entries(myDetails)){
    console.log("current Item",curritem);
}
/*destructure the above output array*/
for(let[key,value] of Object.entries(myDetails)){
    console.log(key,value);
}
// for in loop

for(let curritem in myFavCars){
    console.log(curritem);// gives only index in array
    console.log(Number(curritem)+1,myFavCars[curritem]);// gives entries or data of the array. here index of string converted to integer using number
}
for(let curritem in myDetails){
   // console.log(curritem);//gives only property value or key value
    console.log(curritem,myDetails[curritem]);
}

let openingHours={
fri :{open :"10AM", close:"11PM"},
sat :{open:"9AM",close:"10PM"},
sun :{open:"8PM",close:"9PM"},
};
for(let item in openingHours){
 let{open,close}=openingHours[item];
 //console.log(item);//gives fri,sat,sun means property value.
console.log(item,openingHours[item]);
console.log(open,close);
}
for(let item in openingHours){
    let{open,close}=openingHours[item];
   // console.log("On",item,"office start at",open,"close at",close);
  console.log(`On ${item} office start at ${open} close at ${close}`);
}
// for of loop for openingHours Object
for(let [Day,{open,close}] of Object.entries(openingHours)){
 
 console.log(Day,open,close);
 console.log(`On ${Day} office start at ${open} close at ${close}`);
}

/**MAP
 * We can have KEY of different DATA TYPES or any data type but in javascrit object KEY should be STRING Data type only 
 * new Map() ---- Create the map
 * map.set(key,value) -add the value by key
 * map.get(key)---- Returns the value by key,Undifiend if key does not exit in map
 * map.has(key)-----returns true if the key exists,false otherwise
 * map.clear()------removes everything from the map
 * map.size---------Returns the current element count
 * */

console.log("Map Collection");
let myMap=new Map();
myMap.set("1","Leela");
myMap.set(2,50);
myMap.set(true,"trainer");
console.log("myMap",myMap);
/// to access values from map
console.log(myMap.get("1"));
console.log(myMap.get(true));
console.log(myMap.size);


let favPlaces=new Map([["Jaipur","Palace"],["Pune","Fort"],["Goa","Beaches"]]);
console.log("favPlaces",favPlaces);

for(let [key,value] of favPlaces)
{
    console.log(key,value);
}
for (let currItem of favPlaces.keys()){
    console.log(currItem);
    
}
for (let currItem of favPlaces.values()){
    console.log(currItem);
} 

/**SET collection
 * set is collection of unique values,it can  value of store any datatype
 * new Set()---Creates a new set
 *  add()------adds elements to set
 * delete()----removes element from set
 * has() ------Retuns true if a value exists
 * clear()-----Removes all elements from a set
 *  */ 
let mySet =new Set();
mySet.add("Burger");
mySet.add("Pizza");
mySet.add("Sandwich");
mySet.add("Milk");
mySet.add("Pizza");
console.log("mySet",mySet);

console.log(mySet.has("Sandwich"));
console.log(mySet.has("pani puri"));
mySet.delete("Sandwich");
console.log(mySet);

let myCities =new Set(["Pune","Hyderbad","Banglore"]);
console.log(myCities);

for(let items of myCities){
    console.log(items);
}
