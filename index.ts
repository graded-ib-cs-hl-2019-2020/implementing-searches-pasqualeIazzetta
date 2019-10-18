import { linearSorted, linearUnsorted, binary } from "./searches"
import { quickSort } from "./sorts"

// to run this file, open a Terminal window (in VS code can do this with
// Terminal -> New Terminal from the menu) and type `ts-node index.ts`
// You can also do this by simply typing ctrl-shift-b (cmd-shift-b on mac)


let arrSize = 10000000
let minVal = 0;
let maxVal = 10000;

// test all three algorithms on this simple array first
let arr1 = [2, 2, 2, 2, 2, 2, 2, 2, 3, 8];

let failed = false;
if (arr1[linearSorted(arr1, 9)] != 8) {
    failed = true;
    console.log("linearSorted failed on arr1 searching for 9");
}
if (arr1[linearSorted(arr1, 2)] != 2) {
    failed = true;
    console.log("linearSorted failed on arr1 searching for 2");
}
if (arr1[linearSorted(arr1, 0)] != 2) {
    failed = true;
    console.log("linearSorted failed on arr1 searching for 0");
}
if (arr1[linearUnsorted(arr1, 9)] != 8) {
    failed = true;
    console.log("linearUnsorted failed on arr1 searching for 9");
}
if (arr1[linearUnsorted(arr1, 2)] != 2) {
    failed = true;
    console.log("linearUnsorted failed on arr1 searching for 2");
}
if (arr1[linearUnsorted(arr1, 0)] != 2) {
    failed = true;
    console.log("linearUnsorted failed on arr1 searching for 0");
}

if (arr1[binary(arr1, 9)] != 8) {
    failed = true;
    console.log("binary failed on arr1 searching for 9");
}
if (arr1[binary(arr1, 2)] != 2) {
    failed = true;
    console.log("binary failed on arr1 searching for 2");
}
if (arr1[binary(arr1, 0)] != 2) {
    failed = true;
    console.log("binary failed on arr1 searching for 0");
}
if (!failed) {
    console.log("all searches worked!")
}
console.log("Generating array with " + arrSize +
    " elements between " + minVal + " and " + maxVal);

let checkValue = minVal + Math.random() * (maxVal - minVal);
console.log("Searching for values <= " + checkValue);

let unsorted: number[] = [];
let sorted: number[] = [];
let sorted2: number[] = [];

let actualAnswer = minVal;
unsorted[0] = minVal;
sorted[0] = minVal;

for (let i = 1; i < arrSize; i++) {
    let n = Math.random() * maxVal;
    if (n > actualAnswer && n <= checkValue) {
        actualAnswer = n
    }
    unsorted[i] = n;
    sorted[i] = n;
    sorted2[i] = n;
}

console.time("Time to sort array (quickSort)");
quickSort(sorted, 0, sorted.length - 1, sorted.length);
console.timeEnd("Time to sort array (quickSort)");

console.time("linearUnsorted");
let i = linearUnsorted(unsorted, checkValue);
let works = (unsorted[i] == actualAnswer) ? "It worked!" : "It didn't work."
console.log("\nlinearUnsorted: unsorted[" + i + "] = " + unsorted[i] + " - " + works);
console.timeEnd("linearUnsorted");

console.time("linearSorted");
i = linearSorted(sorted, checkValue);
works = (sorted[i] == actualAnswer) ? "It worked!" : "It didn't work."
console.log("\nlinearSorted: sorted[" + i + "] = " + sorted[i] + " - " + works);
console.timeEnd("linearSorted");

console.time("binary");
i = binary(sorted, checkValue);
works = (sorted[i] == actualAnswer) ? "It worked!" : "It didn't work."
console.log("\nbinary: sorted[" + i + "] = " + sorted[i] + " - " + works);
console.timeEnd("binary");

