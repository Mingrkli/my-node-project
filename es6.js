// Here we test out all the cool things that were added in ES6 :D
const r = 100;
const g = 40;
const b = 255;

const message = `The color is ${getColor()}`;
// console.log(message);

function getColor() {
    return `(${r}, ${g}, ${b})`;
}

// Arrow functions
const multiply = (a, b) => {
    return a * b;
};

const add = (a, b) => a + b;

const divide = (num, den) => {
    if (den === 0) {
        return undefined;
    } else {
        return num / den;
    }
};

const printMe = (msg) => console.log(msg);

let result = multiply(20, 3);
// console.log(`Multiply: ${result}`);

result = add(20, 3);
// console.log(`Add: ${result}`);

result = divide(0, 0);
// console.log(`Divide: ${result}`);
result = divide(20, 4);
// console.log(`Divide: ${result}`);

// printMe("Howdy there :D");

// function in function :D
const snacks = ["pizza", "Watermelon", "Chips", "Donuts", "Cookies", "Pie"];

// const list = snacks.map((snack) => `<li>${snack}</li>`);
const list = snacks.map((snack) => `Me want ${snack} :D`);

console.log(list);
