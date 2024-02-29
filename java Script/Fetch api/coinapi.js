async function loadExchangeRate(){
    let response=await fetch("https://rest.coinapi.io/v1/exchangerate/BTS/USD",{
        method:"GET",
        headers:{
            'X-CoinAPI-Key':"445A860E-5830-4E40-A8F0-D93D527D0578"
        }
});
let data=await response.json();
console.log("data",data)
}

loadExchangeRate();