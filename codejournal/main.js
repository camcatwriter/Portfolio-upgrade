// Variables - containers that store values

var myVariable // declared, but not initialized - it has no value
// also, don't use "var" anymore. ES6 teaches us about "let" and "cosnt"

let thisVariable = 'Camille' // declared and initiialized variable

const ANSWER = 42 
// MDN JavaScript data structres

// STRING

let string1 = 'Hello World!' // look up the difference between stroing literals and using a contructor

let string2 = newstring('Hello World!') // example of constructor

// NUMBER

let thisNum = 3.14159276

// BOOLEAN

let thisBool = true

// equality vs strict equality == or ===

let result = ANSWER + 84 + false + '9000' // example of type coercion

'1' == 1 // true but should not be used
'1' === 1 // false use this you want this kind of equality checking
// the strict equality check comes out falso because they are not the same data type

// ARRAY

let minArray = [ ]

let myArray = [42, 'Bob', result, thisBool; false] // arrays honld almost anything
// arrays are varaibles that can be declared and initialized

myArray [4] // will take out the item in slot four, in this case false
// first slot in designated as 0

// OBJECT

let minimalObject = {}

const myCar = {
    make: 'Chevrolet',
    color: 'Red',
    year : 1965,
    vin: '298734981238731h283udis',
}