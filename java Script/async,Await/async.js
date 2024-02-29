/**function generatePromise(message){
 return new Promise((resolve,reject)=>{
    if(!message){
        reject("Message is empty");   

    }else{
        setTimeout(()=>{
            console.log(message);
            resolve()
        },1000);
    }
    })
}*/

//promise method
/**generatePromise("1st call").then(()=>{
    console.log("Promise resolved Successfully");
    generatePromise("2nd call")
}).then(()=>{
    console.log("2nd promise resolved sucessfully");
    generatePromise();

}).catch((error)=>{
    console.log("Promise Rejected",error);
})*/

//alternative method
/**generatePromise().then(()=>{
    console.log("Promise resolved Successfully");
    
}).catch((error)=>{
    console.log("Promise is rejeccted",error);
})*/

//async method
/**async function generateDifferencePromise(){
    try{
        await generatePromise("1stcall");
    await generatePromise();
}catch(error){
    console.log(error)
}
}*/
//generateDifferencePromise();

function resolveTimeOut(value,delay)
{
    return new Promise((resolve)=>setTimeout(() => {
        
    resolve(value)}, delay))
   }

function rejectTimeOut(reason,delay)
{
    return new Promise((resolve,reject) => setTimeout(() => {
        
    reject(reason)}, delay))
}

async function load(){
    let promise2=resolveTimeOut("resolve 2",500);
   let promise1=resolveTimeOut("Timing resolved",1000);
    let promise3= rejectTimeOut("Time to reject",300);
    //Promise.all([arg1,arg2,..]). in this method all Promises have to be resolved.
   const allPromise=Promise.all([promise1,promise2]);
   //Promise.any([arg1,arg2,..]) in this method any one promise will be resolved wil give resolved out put 
     const anyPromise=Promise.any([promise1,promise2,promise3]);
     //Promise.race([arg1,arg2,...]) in this method with low time delay willshown as output
     const racePromise=Promise.race([promise2,promise1,promise3]);

try {
    const lists=await allPromise;
    console.log("lists",lists);
    const anyList=await anyPromise;
    console.log("anyList",anyList);
    const raceList=await racePromise;
    console.log("raceList",raceList);
} catch (error) {
  console.log(error);  
}
}
load();