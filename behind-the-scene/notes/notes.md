## Note1: ES6
- ES6 is a major update to JavaScript that includes new syntax and features.
- It introduces classes, modules, arrow functions, template literals, destructuring, and more.

## Note2: Shadowing
- Shadowing occurs when a variable in a local scope has the same name as a variable in an outer scope.

## Note3: let, const, var
- `let` and `const` are block-scoped, meaning they are only accessible within the block they are defined in.
- `let` can be reassigned but not redeclared in the same scope. 
- `const` cannot be reassigned or redeclared in the same scope.
- `var` is function-scoped, meaning it is accessible throughout the function it is defined in.

## Note4: Block
- A block can be anything enclosed in curly braces `{}`.

## Note5: Hoisting
- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.
- Variables declared with `var` are hoisted, but their initialization is not.
- Variables declared with `let` and `const` are also hoisted, but they are not initialized until the line of code where they are defined is executed.
- Functions are hoisted, meaning they can be called before they are defined in the code.

## Note6: strict mode
- Strict mode is a way to opt in to a restricted variant of JavaScript.
- It helps catch common coding mistakes and "unsafe" actions such as defining global variables.
- It can be enabled by adding `"use strict";` at the beginning of a script or function.

## Note7: Heap vs Stack
- The stack is a region of memory that stores primitive values and references to objects.
- The heap is a region of memory that stores objects and functions.
- The stack is used for static memory allocation, while the heap is used for dynamic memory allocation.

## Note8: Primitive & Reference values
- Primitive values include numbers, strings, booleans, `null`, `undefined`, and symbols.
- Reference values include objects, arrays, and functions.
- Primitive values are immutable and passed by value, while reference values are mutable and passed by reference.

## Note9: Spread Operator
- The spread operator (`...`) allows an iterable (like an array) to be expanded in places where zero or more arguments or elements are expected.
- It can be used to create shallow copies of arrays or objects, or to merge multiple arrays or objects into one.

## Note10: Shallow vs Deep Copy
- A shallow copy creates a new object or array that is a copy of the original, but it only copies the references to the objects contained within it.
- A deep copy creates a new object or array that is a complete copy of the original, including all nested objects and arrays.
- Shallow copies can lead to unintended side effects if the original object is modified, while deep copies do not have this issue. 


