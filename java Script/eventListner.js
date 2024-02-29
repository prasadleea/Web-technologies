document.addEventListener("valueten",(event) =>{
    console.log("Access event Data",event.detail.message);
});
function changehandler(event){
    console.log(event.target.value);
   /**let value=parseInt(event.target.value);
   if(value==10)
   OR
*/ 
    let value = event.target.value;
    if(value ==10){
        const myevent=new CustomEvent("valueten",{
            detail: {
                message :"User have Entered Value 10"
            },
        });
            document.dispatchEvent(myevent);
    }

}