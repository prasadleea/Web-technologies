/**function loadRandomUser()
{
    fetch("https://reqres.in/api/users",{method:"GET",})
   // .then((response)=> console.log(response) );
    .then((response)=>response.json())
    .then((data)=>console.log(data));
}
loadRandomUser();**/
async function loadRandomUser()
{
    let response=await fetch("https://reqres.in/api/users")
   // .then((response)=> console.log(response) );
    let data=await response.json()
    console.log("data",data);
}
loadRandomUser();
