//  setTimeout(()=>{ },5000);
  let checkmark="\u2713";
  setTimeout(()=>{
    console.log("Timout done "+checkmark);
  },1000);

  let intervalDetails=setInterval(() => {
    console.log("Timeinterval done",checkmark);
  }, 1000);

 setTimeout(()=>{
  clearInterval(intervalDetails);
  console.log("Interval Processing Stopped");
 },3000);

 let intervalCount=0;
 let timeoutCount=0;

function intervalFunction(){
  intervalCount++;
  console.log(`interval tick: ${intervalCount}`);
  if(intervalCount==5){
    clearInterval(intervalId);
  }
}

function timeoutFunction(){
  timeoutCount++;
  console.log(`Timmeout tick: ${timeoutCount}`);
  if(timeoutCount==5){
    clearInterval(timeoutId);
  }
}
 const  intervalId=setInterval(intervalFunction,3000);
 const timeoutId  =setTimeout(timeoutFunction,15000);
 console.log("Start");