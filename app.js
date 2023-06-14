console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } 
    else {
        console.log(i)
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

for (let i = 1; i <100; i++) {
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FIZZBUZZ");
    } else {
        if (i % 3 == 0) {
            console.log(i, "FIZZ");
        }
        if (i % 5 == 0) {
            console.log(i, "BUZZ");
        }
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");


let i = 1;

while (i < 100) {
    if (i % 2 !== 0) {
        console.log(i)
    }

    i++;
}

let x = 1;

do {
    if (x % 2 !== 0) {
        console.log(x);
    }

    x++;
} while (x < 100);

let y = 1;

while (y <= 100) {
    let output = "";

    if (y % 3 == 0){
    output += "FIZZ";
    }

    if (y % 5 == 0){
        output += "BUZZ";
    }
    
    console.log(`${y} ${output}`);

    y++;
}

let z = 1;

do {
    let output = "";

    if (z % 3 == 0){
    output += "FIZZ";
    }

    if (z % 5 == 0){
        output += "BUZZ";
    }
    
    console.log(`${z} ${output}`);

    z++;
} while (z <= 100);



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); 
let n = Math.round(Math.random() * (500 - 100) + 100); 

for (let i = 1; i <= n; i++) {
    if (i == value) {
    console.log(`Found ${value}!`);
    break;
    }

    if (i == n) {
        console.log(`Did not find ${value} within 1-${n}`);
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let m = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let i = start; i <= m; i++) {
    let output = "";

    if (i % fizzDivisor == 0) {
        output += "FIZZ";
    }

    if (i % buzzDivisor == 0) {
        output += "BUZZ";
    }

    console.log(`${i} ${output}`);
}

console.log(fizzDivisor, buzzDivisor);
