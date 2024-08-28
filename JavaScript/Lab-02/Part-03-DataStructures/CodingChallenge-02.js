// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
// 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)
// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names 
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

// Assuming the 'game' object looks something like this:
let game = {
    teams: ['Bayern Munich', 'Borrussia Dortmund'],
    odds: {
        team1: 1.33,
        draw: 3.25,
        team2: 6.5,
    },
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};

// Task 1
for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
}

// Task 2
let averageOdd = Object.values(game.odds).reduce((a, b) => a + b) / Object.values(game.odds).length;
console.log(`Average odd: ${averageOdd}`);

// Task 3
for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'draw' ? 'draw' : `victory ${game.teams[team.slice(-1) - 1]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
}

// Task 4 (Bonus)
let scorers = {};
for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);