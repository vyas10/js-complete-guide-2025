## Note1 :

When a function is called before the function is defined (in that order) it will still run as js has this feature in which it goes through the code and reads all the fucntions and takes them to the top.

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

## Concept 2: 2 ways of calling a function

In general, you call a function that you defined by using its name (e.g. add) and adding parentheses (with any parameters the function might need - or empty parentheses if no parameters are required like in the above example).

=> add()

This is how you execute a function from your code. Whenever JavaScript encounters this statement, it goes ahead and runs the code in the function. Period!

Sometimes however, you don't want to execute the function immediately. You rather want to "tell JavaScript" that it should execute a certain function at some point in the future (e.g. when some event occurs).

That's when you don't directly call the function but when you instead just provide JavaScript with the name of the function.

=> someButton.addEventListener('click', add);

---

## concept 3 : defer vs async for loading scripts
