//QUESTION 2
let num1 = 7;
let num2 = 5;
console.log(num1 > num2);


let c = 2;
let d = 6;
console.log(c < d);

let e = 90;
let f = 90;
console.log(e == f);

let i = 5;
let j = '5';
console.log(i === j);

let num88 = 5;
let num99 = 13;

if (num88 <= num99)
    console.log("small");
console.log("large");
console.log(3 == 3 && 10 == 10)
console.log(1 < 3 || 2 < 3)


for (let i = 1; i < 10; i += 7) {

    console.log(i);
}


let nu = 66;
let num4 = 67;
let multiply = nu * num4;
console.log(multiply); // 12


let ex1 = 3;
let ex2 = 3;
let exponent = ex1 ** ex2;
console.log(exponent);




//QUESTION 3
let classGroup = "Arts";

if (classGroup === "Science") {
    console.log("Bolatito will be taking Physics, Chemistry, Biology, Technical Drawing, English, and Mathematics.")
} else if (classGroup === "Social Science") {
    console.log("Bolatito will be taking Accounting, Commerce, Marketing, Geography, English, and Mathematics.");
} else if (classGroup === "Arts") {
    console.log("Bolatito will be taking Government, Economics, Literature, History, English, and Mathematics.");
} else {
    console.log("Invalid class group. Bolatito will be taking the General Subjects: English and Mathematics.");
}

//QUESTION 4
for (let i = 1; i < 20; i += 7) {

    console.log(i);
}


//QUESTION 5

let num = 5;
let pwr = NearestPowerOf2(num);

function NearestPowerOf2(num) {
    // check if the input is positive

    if (num <= 0) {
        return 0;
    }

    // find the nearest power of 2 to the input number using a for loop
    let nearestPowerOf2 = 1;

    while (nearestPowerOf2 * 2 <= num) {
        nearestPowerOf2 *= 2;
    }

    return nearestPowerOf2;
}
console.log("The number " + pwr + " is the power of 2 nearest to " + num + ".");