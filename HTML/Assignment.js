const game={
    team1 :'India',
    team2 :'Australia',
    players:[
        [
            'Dhoni',
            'Sharma',
            'Kholi',
            'Rahul',
            'Jadeja',
            'Pandey',
            'Chahal',
            'Ashwin',
            'Khan',
            'Bhumra',
            'Shami',
        ],
        [
            'Wade',
            'Cummins',
            'Green',
            'Maxwell',
            'Finch',
            'Hazlewood',
            'Marsh',
            'Stoinis',
            'Richardson',
            'Starc',
            'Warner',
        ],

    ],
    Century:['Kholi','Sharma','Warner','Maxwell'],

    odds:{
        team1: 3.33,
        x: 3.25,
        team2 :6.5,
   },
};

// Create one player array foe each team(variable 'player1'and 'player2')
let [player1,player2]=game.players;
console.log("player1",player1);
console.log("player2",player2);

/**console.log("player1");
    for(let [index,value] of player1.entries()){
        console.log( index+1+"."+value);  
    }   
    console.log("player2");
    for(let [index,value] of player2.entries()){
        console.log( index+1+"."+value);  
    } */  

    //2.The first player in any player  array is the wicketkeeper and others are field plaayers
    let [wicketkeeper,...fieldplayers] =player1;
    console.log("Wicketkeeper",wicketkeeper);
    console.log("fieldplayers",fieldplayers);
   /**  console.log("fieldplayers");
   for( let Value of fieldplayers)
   {
     console.log(Value);
   } */  

   // 3.Creeate an array "allPlayers" containing all players of both teams

   let allPlayers = [...player1,...player2];
   console.log(allPlayers);
   
   //add extra 3 players to player1
   let playerFinal =[...player1,"Sandeep","Jhon","Sunil"];
   console.log("playerFinal",playerFinal);

// Based on game.odds object,create one variable for each odd(called 'team1','dreaw','team2')

let {team1,x :draw,team2}=game.odds;
console.log("team1",team1);
console.log("draw",draw);
console.log("team2",team2);
 
/** team with lower odd more like to win
 * Print the console more likely to win
 * with out using if/else statement or ternary operator 
 
if(team1>team2){
    console.log("Team2 will win");
}else{
    console.log("team1 will win");
}    

ternary operator

team1>team2 ? console.log("Team2 will win") :console.log("Team1 will win");
*/

//logical operator && ||!

team1 < team2 && console.log("Team1 will win ");
team2 < team1 && console.log("Team2 will win ");

// or
console.log(team1 < team2) || console.log("Team1 will win ") 
//or
team1 < team2 && console.log("Team1 will win ") ||
team2 < team1 && console.log("Team2 will win ");

/**loop over thegame.century array and p0rint each player name 
  to the console,along with the century number 
  {example:"Century1: kohli"} 
*/

for(let [index,value] of game.Century.entries()){
    console.log(`Century ${index + 1} :${value}`);
}

//average value of odds
let sum=0;
let counter=0;
for(let curritem of Object.values(game.odds)){
sum=sum+curritem;
counter=counter+1;
}
console.log(sum);
console.log(counter);
console.log("average",Math.round(sum/counter));

// in another method with for in loop

let insum=0;
let incounter=0;
for(let curritem in game.odds){
    console.log(curritem ,game.odds[curritem]);
   
insum=insum+game.odds[curritem];
incounter=incounter+1;
}

console.log("sum",insum);
console.log("counter",incounter);
console.log("average",Math.floor(insum/incounter));




    

