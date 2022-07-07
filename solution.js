// 1

const lowerLimit = 50;
const upperLimit = 99;
const int1 = 20;
const int2 = 69;
const istInt1Zwischen50Und99 = int1 >= lowerLimit && int1 <= upperLimit;
const istInt2Zwischen50Und99 = int2 >= lowerLimit && int2 <= upperLimit;
if (istInt1Zwischen50Und99 || istInt2Zwischen50Und99) console.log("1", true);

// 2

const int3 = 40;
const istInt3Zwischen50Und99 = int3 >= lowerLimit && int3 <= upperLimit;
if (istInt1Zwischen50Und99 || istInt2Zwischen50Und99 || istInt3Zwischen50Und99)
    console.log("2", true);

// 3

const a = 10;
const b = 1;
const c = 100;
if (a > b && a > c) {
    console.log("3", a);
} else if (b > a && b > c) {
    console.log("3", b);
} else {
    console.log("3", c);
}

const biggestInt = Math.max(int1, int2, int3);
if (biggestInt === int1) {
    console.log("3", int1);
} else if (biggestInt === int2) {
    console.log("3", int2);
} else {
    console.log("3", int3);
}

// 4

const str = "Python";
const positionVonPy = str.indexOf("Py");
//console.log(positionVonPy);
if (positionVonPy === 0) {
    console.log(str);
} else {
    console.log("Py" + str);
}

// 5

const sumInt1Int2 = int1 + int2;
if (sumInt1Int2 >= 50 && sumInt1Int2 <= 80) {
    console.log("65");
} else {
    console.log("80");
}

// 6

const int4 = 10;
const int5 = 30;
const diffInt4Int5 = Math.abs(int4 - int5);
const sumInt4Int5 = int4 + int5;

if (diffInt4Int5 === 8 || sumInt4Int5 === 8) {
    console.log("6", true);
} else {
    console.log("6", false);
}

// 7

if (int4 === 15 || int5 === 15 || sumInt4Int5 === 15) {
    console.log("7", true);
} else {
    console.log("7", false);
}

// 8

const isInt4Multiple7Or11 = int4 % 7 === 0 || int4 % 11 === 0;
const isInt5Multiple7Or11 = int5 % 7 === 0 || int5 % 11 === 0;
if (isInt4Multiple7Or11 || isInt5Multiple7Or11) {
    console.log("8", true);
} else {
    console.log("8", false);
}

// 9
const isInt4EqualToInt5 = int4 === int5;
if (isInt4EqualToInt5) {
    console.log("9", sumInt4Int5 * 3);
} else {
    console.log("9", sumInt4Int5);
}

// 10
const diffInt5And19 = Math.abs(int5 - 19);
if (int5 > 19) {
    console.log("10", diffInt5And19 * 2);
} else {
    console.log("10", diffInt5And19);
}

// 11
// 12
