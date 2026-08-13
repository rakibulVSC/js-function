// let numbers=[12,25,8,40,18];
// let result=numbers.find(number => number>20);
// console.log(result)


// let numbers = [12, 18, 27, 35, 42, 20];
// let result=numbers.find(number=> number>30);
// // console.log(result)

let numbers = [5, 12, 18, 25, 30, 35, 42, 8];
let result=numbers.find(number=> number>20 && number%2 === 0);
// console.log(result)

let values = [5, 12, 18, 25, 30, 35, 42, 8];
let findAble=values.find(number=> number>10 && number<40 && number % 2 === 0);
// console.log(findAble)

// let prices = [120, 250, 80, 450, 300];
// let check=prices.some(price=> price>400);
// console.log(check)



// let scores = [65, 72, 80, 91, 55];
// let checking=scores.every(score=> score>50);
// console.log(checking)

// let languages = ["HTML", "CSS", "JavaScript", "React"];
// console.log(languages.includes('CSS'))



// let subjects = ["Math", "English", "Physics", "Chemistry"];
// console.log(subjects.indexOf('Physics'));


let tools = ["Git", "GitHub", "VS Code", "Node.js", "React"];
// console.log(tools.indexOf("GitHub"))

let cities = ["Dhaka", "Sylhet", "Chittagong", "Rajshahi"];
console.log(cities.indexOf("Barishal"))