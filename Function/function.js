"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(num) {
    return num + 2;
    // return "swap";
}
sum(30);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("singer");
function signup(name, age, isLogged) {
    return name.toLowerCase() + "and age is: " + age;
}
console.log(signup("Swapnil", 22, true));
var getLogin = function (name, age) {
    return name;
};
// void -> doesn't return anything
var say = function (name) {
    console.log("Hi");
};
// never - doesn't return any value
var handleError = function (name) {
    throw new Error();
};
