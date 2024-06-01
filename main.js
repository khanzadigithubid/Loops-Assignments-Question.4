//4.Exploring Objects with for...in Loop
//Objective: Practice working with objects in TypeScript and iterating over their properties using a for...in loop.
//Instructions:
//1. Create a simple object with three items:
//o Define an object called myObject with three properties: item1, item2, and item3, each with corresponding string values.
//2. Use a for...in loop to get properties' names and values from the object:
//o Iterate through the properties of myObject using a for...in loop.
//o Inside the loop, print each property's name and its corresponding value to the console.
// Create a simple object with three items
var person = {
    firstName: "Khanzadi",
    lastName: "Wazir Ali",
    age: 20,
};
// Use a for...in loop to get properties' names and values from the object
for (var property in person) {
    console.log(person);
    console.log("Property: ".concat(property, ", Value: ").concat(person[property]));
    console.log("Property: ".concat(property, ", Name: ").concat(person[property]));
}
