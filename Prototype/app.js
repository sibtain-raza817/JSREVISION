// A normal function that multiplies a number by 5
function multiplyBy5(num) {
    return num * 5;
}

// Adding a custom property to the function object
multiplyBy5.power = 2;

console.log(multiplyBy5(5));        // 25
console.log(multiplyBy5.power);     // 2
console.log(multiplyBy5.prototype); // {}  (functions in JS have a prototype object)

// Constructor function for creating user objects
function createUser(userName, price) {
    this.userName = userName;
    this.price = price;
}

// Adding a method to the prototype so all created objects can use it
createUser.prototype.increament = function() {
    this.price++;
};

// Another prototype method to print the current price
createUser.prototype.printMe = function() {
    console.log(`Actual price is ${this.price}`);
};

// Use 'new' to create an object from the constructor function
const raza = new createUser("Raza", 25);
const ritesh = new createUser("Ritesh", 250);

// Calling prototype method on the object
raza.printMe();      // Actual price is 25

// Increasing price using prototype method
raza.increament();

raza.printMe();      // Actual price is 26