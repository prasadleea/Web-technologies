//if we don t have class in dev,then to access the div use this below

let element=Array.from(document.querySelectorAll("div"));
console.log(element);

function clickme(){
    alert("Welcome me")
}

function mouseoverhandler()
{
    console.log("Mouse over event executed");
    
let element=document.querySelector(".hover");
    element.style.display="none";
    //element.style.visibility="hidden";
}

function mouseouthandler(){
    let element=document.querySelector(".hover");
    element.style.display="";

}
//to handle an event

document.addEventListener("valueten",(event)=>{
    console.log("Access event Data",event.detail.message);
})
function changehandler(event){
    console.log(event.target.value);
    let value=event.target.value;

    if(value==10){
        const myevent=new CustomEvent("valueten",{
            detail: {
                message:"User  has  enterd  value 10"
            },
        });
            document.dispatchEvent(myevent);
    }

}

//there is also removeEventListener(event name,listener )

