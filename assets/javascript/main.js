//let counter = 0;
//while(couter < 100) {
//    console.log(counter);
//    counter++;
//}

//for(let counter = 0; counter < 100; counter++) {
//    console.log(counter);
//}

//for (let i = 0; i < 100; i++) {
//  debugger;
//  console.log(i);
//}

//for (let i = 100; i > 0; i--) {
//  console.log(i);
//}

//for (let i = 0; i < 100; i++) {
//    console.log(i);
//  }

let groceryAisles = ["Produce", "Meat", "International", "Dairy"];

//let aisles = [
//  ["bananas", "Tomato", "Eggplant", "Avocados"],
//  ["Steak", "Chorizo", "Chicken", "Italian Sausage"],
//  ["pasta", "Matoke", "Ramyun", "Tacos", "Seaweed", "Mole"],
//  [
//    "Whipped Cream",
//    "Yogurt",
//    ["2% Milk", "Oat Milk", "Almond Milk"],
//    "Goat Cheese",
//  ],
//];

let aisles = [
  ["bananas", "Tomato", "Eggplant", "Avocados"],
  ["Steak", "Chorizo", "Chicken", "Italian Sausage"],
  ["pasta", "Matoke", "Ramyun", "Tacos", "Seaweed", "Mole"],
  ["Whipped Cream", "Yogurt", "Milk", "Goat Cheese"],
];
console.log(groceryAisles[2]);
console.log(groceryAisles);
console.log(aisles);
//just bananas
console.log(aisles[0][0]);
//just Matoke
console.log(aisles[2][1]);
// treats string as array so output should be h
console.log(aisles[1][1][1]);
// should be Oat Milk
console.log(aisles[3][2][1]);

for (let i = 0; i < aisles.length; i++) {
  console.log(aisles[i]);
}

for (let i = 0; i < aisles.length; i++) {
  console.log(aisles[i][0]);
}

for (let i = 0; i < aisles.length; i++) {
  console.log(aisles[i].length);
}

// to get everything in all the arrays
//for (let i = 0; i < aisles.length; i++) {
//  console.log(aisles[i]);
//  debugger;
//  for (let j = 0; j < aisles[i].length; j++) {
//    console.log(aisles[i][j]);
//  }
//}

// to get everything in all the arrays
//for (let i = 0; i < aisles.length; i++) {
//  for (let j = 0; j < aisles[i].length; j++) {
//    console.log(aisles[i][j]);
//  }
//}

// to get everything in all the arrays beside the groceryAisles
for (let i = 0; i < aisles.length; i++) {
  for (let j = 0; j < aisles[i].length; j++) {
    console.log(groceryAisles[i] + " " + aisles[i][j]);
  }
}
