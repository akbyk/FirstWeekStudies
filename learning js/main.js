console.log("Hello, World!");
// printing to the console
const NAME = "John";
console.log("Hello, " + NAME + "!");
// Output: Hello, John!
let age = 30;
let message = "Happy " + age + "th Birthday!";
    // Output: Happy 30th Birthday!
const PI = 3.14159;
// const variables cannot be reassigned
let fullname = "John Doe";
// String concatenation



console.log(fullname.length);
console.log(fullname.toUpperCase());
// Output: JOHN DOE 
console.log("lorem10".length);
// Output: 7

// Math.floor() rounds a number down to the nearest integer
console.log(Math.floor(3.7)); // Output: 3
console.log(Math.floor(9.2)); // Output: 9

// Math.ceil() rounds a number up to the nearest integer
console.log(Math.ceil(3.7)); // Output: 4
console.log(Math.ceil(9.2)); // Output: 10

// Math.round() rounds a number to the nearest integer
console.log(Math.round(3.7)); // Output: 4
console.log(Math.round(9.2)); // Output: 9

// Math.trunc() removes the decimal part of a number (similar to Math.floor() for positive numbers)
console.log(Math.trunc(3.7)); // Output: 3
console.log(Math.trunc(9.2)); // Output: 9

// Math.abs() returns the absolute value of a number
console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(3.14)); // Output: 3.14

// Math.random() generates a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // Output: a random number between 0 and 1

// Example: Generating a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber); // Output: a random number between 1 and 10

// let is for variables that can be reassigned

let x = 5;
let y = 10;
let sum = x + y;
console.log(sum); // Output: 15

let difference = x - y;
console.log(difference); // Output: -5

let product = x * y;
console.log(product); // Output: 50

let quotient = x / y;
console.log(quotient); // Output: 0.5

let remainder = x % y;
console.log(remainder); // Output: 5

let exponentiation = x ** y;
console.log(exponentiation); // Output: 9765625

let num = 10;
num += 5; // num = num + 5
console.log(num); // Output: 15

let first = 5;
first -= 3; // x = x - 3
console.log(first); // Output: 2

let second = 10;
second *= 2; // y = y * 2
console.log(second); // Output: 20

let third = 15;
third /= 3; // z = z / 3
console.log(third); // Output: 5

let fourth = 7;
fourth %= 4; // a = a % 4
console.log(fourth); // Output: 3


// uppercase is for const variables

console.log(typeof NAME); // Output: string
console.log(typeof age); // Output: number
console.log(typeof message); // Output: string
console.log(typeof PI); // Output: number
console.log(typeof fullname); // Output: string
console.log(typeof console); // Output: object
console.log(typeof console.log); // Output: function
// typeof operator returns the data type of a variable or an expression



///////////////////////




// Example car object
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    mileage: 5000,
    isRunning: false,
    start: function() {
        this.isRunning = true;
        console.log("The car has started.");
    },
    stop: function() {
        this.isRunning = false;
        console.log("The car has stopped.");
    },
    drive: function(distance) {
        if (this.isRunning) {
            this.mileage += distance;
            console.log(`The car has driven ${distance} miles.`);
        } else {
            console.log("The car is not running.");
        }
    }
};

// Accessing car properties
console.log(car.brand); // Output: Toyota
console.log(car.model); // Output: Camry
console.log(car.year); // Output: 2022
console.log(car.color); // Output: Silver
console.log(car.mileage); // Output: 5000
console.log(car.isRunning); // Output: false

// Calling car methods
car.start(); // Output: The car has started.
car.drive(100); // Output: The car has driven 100 miles.
car.stop(); // Output: The car has stopped.

// Button event listener
document.querySelector('button').addEventListener('click', function() {
    if (car.isRunning) {
        car.stop();
    } else {
        car.start();
    }
});

///////////////////////////


// Example function
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!
greet("Bob"); // Output: Hello, Bob!


let text1 = "Hello, World!";
let length1 = text1.length; // Output: 13

let char11 = text1.charAt(0); // Output: "H"
let char22 = text1.charCodeAt(0); // Output: 72

let letter1 = text1.charAt(7); // Output: "W"
let letter3 = text1[7]; // Output: "W"

let slicedtext1 = text1.slice(7, 12); // Output: "World"
let substringText = text1.substring(7, 12); // Output: "World"
let substrText = text1.substring(7, 12); // Output: "World"



/*
HTML Events 
An HTML event can be something the browser does, or something a user does.
examples:
- An HTML web page has finished loading
- An HTML input field was changed
- An HTML button was clicked

JavaScript can be executed when an event occurs, like when a user clicks on an HTML element.
*/


// <element event='some JavaScript'>

// elements can be buttons or input fields or any other HTML element

// event examples: onclick, onchange, onmouseover, onmouseout, onkeydown, onload, onunload, onscroll, onfocus, onblur, onsubmit, onreset, onselect, oncontextmenu, onerror, onresize, ondrag, ondrop, ondragstart, ondragend, ondragover, ondragenter

// In the following example, an onclick attribute (with code), is added to a <button> element:

// Example
// <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>

   let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let length = text.length;


let char1 = text.charAt(0);
let char2 = text.charCodeAt(0);
let letter = NAME.at(2);
let letter2 =   NAME[2];

/*There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length) */

document.querySelector('button').addEventListener('click', function(event) {
    console.log('clientX:', event.clientX);
    console.log('clientY:', event.clientY);
});


/*There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length) */

document.querySelector('button').addEventListener('click', function(event) {
    console.log('clientX:', event.clientX);
    console.log('clientY:', event.clientY);
});




let message1 = `Hello, ${NAME}! You are ${age} years old.`;
console.log(message); // Output: Hello, John! You are 30 years old.


let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

console.log(total); // Output: Total: 12.50


// Example of HTML templates

const htmlTemplate = `
    <div>
        <h1>${NAME}</h1>
        <p>Age: ${age}</p>
    </div>
`;
console.log(htmlTemplate);
//In this example, the htmlTemplate variable contains an HTML template with the NAME and age variables inserted using the ${} syntax.



let bigNumber = BigInt(12345678901234567890);
console.log(bigNumber);
// Output: 12345678901234567890n

let bigSum = bigNumber + BigInt(98765432109876543210);
console.log(bigSum);
// Output: 111111111111111111100n

let bigProduct = bigNumber * BigInt(2);
console.log(bigProduct);
// Output: 24691357802469135780n


let num1 = 10;
console.log(num.toString()); // Output: "10"

let num2 = 3.14159;
console.log(num2.toFixed(2)); // Output: "3.14"

let num3 = 5.6789;
console.log(num3.toPrecision(3)); // Output: "5.68"

let num4 = -10;
console.log(Math.abs(num4)); // Output: 10

let num5 = 2.5;
console.log(Math.ceil(num5)); // Output: 3

let num6 = 2.5;
console.log(Math.floor(num6)); // Output: 2

let num7 = 2.5;
console.log(Math.round(num7)); // Output: 3

let num8 = 2.5;
console.log(Math.trunc(num8)); // Output: 2

let num9 = 2.5;
console.log(num9.toFixed(0)); // Output: "3"

let num10 = 2.5;
console.log(num10.toFixed(1)); // Output: "2.5"

let num11 = 2.5;
console.log(num11.toFixed(2)); // Output: "2.50"

let num12 = 2.5;
console.log(num12.toFixed(3)); // Output: "2.500"

let num13 = 2.5;
console.log(num13.toFixed(4)); // Output: "2.5000"



let EPSILON = Number.EPSILON;
let max = Number.MAX_VALUE;
let min = Number.MIN_VALUE;
let positiveInfinity = Number.POSITIVE_INFINITY;
let negativeInfinity = Number.NEGATIVE_INFINITY;
let notANumber = Number.NaN;


let index = text.indexOf("W");
console.log(index); // Output: 7

let lastIndex = text.lastIndexOf("W");
console.log(lastIndex); // Output: 7

let indexsec = text.indexOf("W", 8);   
console.log(index); // Output: -1
//having a second parameter in the indexOf method will start the search from that index
// -1 means the character was not found



 