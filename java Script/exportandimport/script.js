/**import doMul, {weekdays,DATE_OF_BIRTH_YEAR,sayHi,doAdd } from "./utils.js";
console.log("weekdays",weekdays);
console.log("DATE_OF_BIRTH_YEAR",DATE_OF_BIRTH_YEAR);
sayHi("Welcome to JS ");
doAdd(5,4);
doMul(2,4)*/
import doMul from "./utils.js";
import * as lwc from "./utils.js";
console.log("weekdays",lwc.weekdays);
console.log("DATE_OF_BIRTH_YEAR",lwc.DATE_OF_BIRTH_YEAR);
lwc.sayHi("Welcome to JS ");
lwc.doAdd(5,4);
doMul(2,4)