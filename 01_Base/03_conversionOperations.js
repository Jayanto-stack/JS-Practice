// When values get converted and when not?
// let assume we are having the below variables
let score = true

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // provide the output 33, but if you add any alphabet (abc) into the string then again it provide the output number
console.log(valueInNumber); // To check what is stored into the valueInNumbers after adding alphabets into the strings.
// The output will be NaN which means Not a Number
// Now if you change the store value to null into the variable then, the output will become 0
// If you change the value into undefined, then the output will be NaN

// Basic Conversion
// "33" => NaN
// If you put true value into the variable then it gives output 1
// true => 1; false => 0

// Boolean Conversion
// Now if you put number 1 or 0 into the vlue of variable then you can check it boolean operator output
// Now beloww code gives different output for different input values
// "" => false; "jayanto" => True; 1 => True; 0 => False;
// Like this we can convert number or string into boolean
// Suppose create a variable
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// Convert something into String
let someNumber = 45
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


