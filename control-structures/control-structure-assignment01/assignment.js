const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random();

// 1
if (randomNumber > 0.7) {
    alert("yay it hit the mark!");
}


//2

// Way 1
let myArray = [1, 2, 3, 4];
for (const i of myArray) {
    console.log(i);
}

// Way 2
let k = 0;
while (k < myArray.length) {
    console.log(myArray[k]);
    k++;
}


// 3
let j = myArray.length;
while (j >= 0) {
    console.log(myArray[j]);
    j--;
}


// 4
if ((randomNumber > 0.7 && randomNumber2 > 0.7) || (randomNumber <= 0.2 || randomNumber2 <= 0.2)) {
    alert("Greater than 0.7 or smaller than 0.2");
}