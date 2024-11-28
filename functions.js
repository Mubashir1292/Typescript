"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    //*  we are'nt be able return here a string or any other type other then number
    return num + 3;
}
console.log(addTwo(4));
function signup(name, email, password) {
    console.log(name, email, password);
    return name;
}
// ! by using union method in functions in typescript we can add two datatypes of every parameter , and return type also
signup("2", "3", "4");
function login(name, id) {
    return name + id;
}
login("Mubashir", 3);
