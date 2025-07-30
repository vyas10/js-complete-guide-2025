let firstName = "Max";
// let firstName = "Manuel"; // This is not allowed - let cannot be redeclared. Although it can be reassigned
if (firstName == "Max") {
  //let hobbies = ["Swimming", "Cooking"]; // If I define this by let it won't be accessible at line 18-19
  var hobbies = ["Swimming", "Cooking"]; // But this will be accessible at line 18-19
  console.log(hobbies);
}
var lastName = " Nuer";
var lastName = "Vyas"; // This on the other hand is possible with var
function greet() {
  let age = 30;
  let firstName = "Manuel"; // This is called shadowing
  console.log(`Hello, ${firstName} ${age}!`);
}

greet();
console.log(firstName); // This will print Max
// console.log("", age); // This will throw an error
console.log(hobbies);

// Hoisting
console.log(myHost);
var myHost = "Prats"; // This will give undefined

// console.log(myHost2, myHost3); // Error: Cannot access 'myHost2' before initialization
let myHost2 = "Pratsik";
const myHost3 = "Ratsik";
