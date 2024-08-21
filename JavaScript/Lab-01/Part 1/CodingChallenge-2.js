// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Data for Mark
const markMass = 60;
const markHeight = 1.69;

// Data for John
const johnMass = 54;
const johnHeight = 1.95;

// Calculate BMI for Mark
const markBMI = markMass / (markHeight * markHeight);

// Calculate BMI for John
const johnBMI = johnMass / (johnHeight * johnHeight);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI.toFixed(1)}) is higher than John's (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`John's BMI (${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(1)})!`);
} else {
    console.log("Mark and John have the same BMI!"); 
}