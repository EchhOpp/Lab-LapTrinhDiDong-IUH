// Coding Challenge #1
// We're building a football betting app (soccer for my American friends )! Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
// Test data for 6: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored


// Assuming game data is in this format
let game = {
    team1: ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Gnarby', 'Lewandowski'],
    team2: ['Team2Player1', 'Team2Player2', 'Team2Player3', 'Team2Player4', 'Team2Player5', 'Team2Player6', 'Team2Player7', 'Team2Player8', 'Team2Player9', 'Team2Player10', 'Team2Player11'],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels']
};

// Task 1: Create one player array for each team
let players1 = game.team1;
let players2 = game.team2;

// Task 2: The first player in any player array is the goalkeeper
let gk = players1[0];
// The others are field players
let fieldPlayers = players1.slice(1);

// Task 3: Create an array 'allPlayers' containing all players of both teams
let allPlayers = [...players1, ...players2];

// Task 4: Create a new array with all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
let players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// Task 5: Create one variable for each odd
let { team1, draw, team2 } = game.odds;

// Task 6: Write a function that receives an arbitrary number of player names and prints each of them to the console, along with the number of goals that were scored in total
function printGoals(...players) {
    console.log(...players);
    console.log(`Total goals: ${players.length}`);
}

// Test data for task 6
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Task 7: Print to the console which team is more likely to win, without using an if/else statement or the ternary operator
console.log(`Team more likely to win: ${team1 < team2 ? 'team1' : 'team2'}`);