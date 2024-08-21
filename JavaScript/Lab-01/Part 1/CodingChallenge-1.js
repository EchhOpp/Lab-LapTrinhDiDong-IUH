// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// Data 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

// Data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

// Function to calculate BMI
const calculateBMI = (mass, height) => mass / (height * height);

// Data 1 calculations
const markBMI1 = calculateBMI(markMass1, markHeight1);
const johnBMI1 = calculateBMI(johnMass1, johnHeight1);
const markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Data 1:");
console.log("Mark's BMI:", markBMI1);
console.log("John's BMI:", johnBMI1);
console.log("Mark has higher BMI than John:", markHigherBMI1);

// Data 2 calculations
const markBMI2 = calculateBMI(markMass2, markHeight2);
const johnBMI2 = calculateBMI(johnMass2, johnHeight2);
const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("\nData 2:");
console.log("Mark's BMI:", markBMI2);
console.log("John's BMI:", johnBMI2);
console.log("Mark has higher BMI than John:", markHigherBMI2);