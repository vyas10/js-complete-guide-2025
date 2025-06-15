const task3Element = document.getElementById('task-3');

// Assignment 1
function noParam() {
    alert("This function has no parameters");
}

function oneParam(name) {
    alert(name);
}

// Assignment 2
noParam();
oneParam("Chirag");

// Assignment 3
task3Element.addEventListener('click', noParam);

// Assignment 4
function combine(string1, string2, string3) {
    const combinedText = `${string1} ${string2} ${string3}`;
    return combinedText;
}

// Assignment 5
const combinedString = combine("Pratik", "Chirag", "Rashmi")
alert(combinedString);