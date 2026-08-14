// let prices = [5, 10, 15, 20, 25];
// let result=prices.map(price=> price*3);
// console.log(result);



// let scores = [10, 20, 30, 40, 50];
// // let updatedScores=[];
// let output=scores.map(score=> score+5);
// console.log(output)


// let productPrices = [500, 800, 1200, 1500, 2000];
// let discountPrice=productPrices.map(price=> price- (price*10/100))
// console.log(discountPrice);


// let students = ["Rakib", "Karim", "Sakib", "Nabil"];
// let identity=students.map(student=> student+ " -Student");
// console.log(identity);


// let products = [
//   { id: 101, name: "Keyboard", price: 1200 },
//   { id: 102, name: "Mouse", price: 700 },
//   { id: 103, name: "Monitor", price: 15000 },
//   { id: 104, name: "Headphone", price: 2500 }
// ];

// let find=products.find(product=> product.price>2000);
// console.log(find);


let learners = [
  { id: 11, name: "Rakib", marks: 72 },
  { id: 12, name: "Sakib", marks: 85 },
  { id: 13, name: "Nabil", marks: 91 },
  { id: 14, name: "Karim", marks: 68 }
];

let Idnumber = learners.find(lerner=> lerner.id===13);
console.log(Idnumber);

