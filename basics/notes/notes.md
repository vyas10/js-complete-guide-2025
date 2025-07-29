## Note1 :

When a function is called before the function is defined (in that order) it will still run as js has this feature in which it goes through the code and reads all the functions and takes them to the top.

---

## Note2 :

You can't use local/block scope variables (declared inside a funciton), outside of them.

---

## Concept1 : Shadowing

"Shadowed Variables"
You learned about local ("function-internal") variables and global variables.

What happens if you have this code?

let userName = 'Max';
function greetUser(name) {
let userName = name;
alert(userName);
}
userName = 'Manu';
greetUser('Max');
This will actually show an alert that says 'Max' (NOT 'Manu').

You might've expected that an error gets thrown because we use and declare userName more than once - and as you learned, that is not allowed.

It indeed is not allowed on the same level/ in the same scope.

So this would fail:

let userName = 'Max';
let userName = 'Manu';
Why does it work in the first code snippet though?

Because we first create a global variable userName via

let userName = 'Max';
But then we never re-declare that on the global level (that would not be allowed).

We only declare another variable inside of the function. But since variables in functions get their own scope, JavaScript does something which is called "shadowing".

It creates a new variable on a different scope - this variables does not overwrite or remove the global variable by the way - both co-exist.

When referring to userName inside of the greetUser function we now always refer to the local, shadowed variable. Only if no such local variable existed, JavaScript would fall back to the global variable.

## Note3 :

Return statement is the end statement of a function hence there should be only one return statement, anything written after that won't be executed.

---

## Concept 2: Two ways of calling a function

In general, you call a function that you defined by using its name (e.g. add) and adding parentheses (with any parameters the function might need - or empty parentheses if no parameters are required like in the above example).

=> add()

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

=> someButton.addEventListener('click', add);

---

## concept 3 : defer vs async for loading scripts

When you add a script to your HTML file, the browser will stop parsing the HTML until the script is loaded and executed. This can lead to performance issues, especially if the script is large or if it takes a long time to load.
To avoid this, you can use the `defer` or `async` attributes in the script tag.

- `defer`: The script will be executed after the HTML is fully parsed. This means that the script will not block the rendering of the page. You can use `defer` for scripts that need to access the DOM elements that are defined in the HTML.

- `async`: The script will be executed as soon as it is loaded, without blocking the rendering of the page. This means that the script can be executed before the HTML is fully parsed. You can use `async` for scripts that do not depend on the DOM elements.

## concept 4 : Comparing objects & arrays

When you compare objects or arrays in JavaScript, you are comparing their references, not their values. This means that two objects or arrays with the same values will not be considered equal if they are not the same object in memory.

## note4 :

&& has a higher precedence than ||, so it will be evaluated first. This means that if the first condition is true, the second condition will not be evaluated.

## note5 :

When you use the `return` statement in a function, it will stop the execution of the function and return the value to the caller. If you do not use the `return` statement, the function will return `undefined` by default.

## concept5 : Truthy and Falsy values

In JavaScript, there are values that are considered "truthy" and "falsy". These values are used in conditional statements to determine whether a condition is true or false.
Falsy values are values that are considered false in a boolean context. These values include:

- false
- 0
- "" (empty string)
- null
- undefined
- NaN
  Truthy values are values that are considered true in a boolean context. These values include:
- true
- any non-zero number

## concept6 : Coercion vs Conversion

Coercion is the process of converting a value from one type to another automatically by JavaScript. This can happen in various situations, such as when you use a value in a boolean context or when you perform arithmetic operations on values of different types.
Conversion is the process of converting a value from one type to another explicitly using methods like `String()`, `Number()`, or `Boolean()`. This is a more controlled way of converting values and can help avoid unexpected behavior.
