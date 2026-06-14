# JavaScript Revision for Placements 🚀

This repository contains my JavaScript revision notes and practice code for internship and placement preparation.

## Roadmap

### Day 1: Variables
- var
- let
- const
- Scope
- Hoisting
- Difference between var, let, and const

### Day 2: Data Types
- String
- Number
- Boolean
- Null
- Undefined
- BigInt
- Symbol

### Day 3: Operators
- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Assignment Operators

### Day 4: Conditional Statements
- if
- else
- else if
- switch

### Day 5: Loops
- for
- while
- do-while
- for...of
- for...in

### Day 6: Functions
- Function Declaration
- Function Expression
- Arrow Functions
- Callback Functions

### Day 7: Arrays
- Array Methods
- map()
- filter()
- reduce()

### Day 8: Objects
- Object Creation
- Object Methods
- Destructuring

### Day 9: DOM Manipulation
- Selecting Elements
- Event Handling
- DOM Methods

### Day 10: ES6 Features
- Template Literals
- Destructuring
- Spread Operator
- Rest Operator

## Goal

- Complete JavaScript from scratch.
- Prepare for internships and placements.
- Build strong problem-solving skills.
- Maintain consistency every day.

## Progress

- [x] Day 1: Variables
- [ ] Day 2: Data Types
- [ ] Day 3: Operators
- [ ] Day 4: Conditional Statements
- [ ] Day 5: Loops

---

What is a Variable?

A variable is a container that stores data.

let name = "Sibtain";
let age = 21;
1. var

Old way of declaring variables.

var city = "Patna";
Properties

✅ Can be redeclared

var a = 10;
var a = 20;

✅ Can be reassigned

var a = 10;
a = 30;

❌ Not block scoped

if (true) {
    var x = 100;
}

console.log(x); // 100
2. let

Modern way when value may change.

let score = 50;
Properties

❌ Cannot be redeclared

let a = 10;
let a = 20; // Error

✅ Can be reassigned

let a = 10;
a = 20;

✅ Block scoped

if (true) {
    let x = 100;
}

console.log(x); // Error
3. const

Used when value should not change.

const PI = 3.14;
Properties

❌ Cannot be redeclared

❌ Cannot be reassigned

const PI = 3.14;
PI = 5; // Error

✅ Block scoped

⭐ If you find these notes useful, feel free to star the repository.
