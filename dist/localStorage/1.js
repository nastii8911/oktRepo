"use strict";
var _a;
console.log(123);
const myInput = document.querySelector("input");
const initialValue = localStorage.getItem("email");
if (initialValue !== null) {
    myInput.value = initialValue;
}
myInput.addEventListener("input", (e) => {
    const target = e.target;
    localStorage.setItem("email", target.value);
});
localStorage.setItem("user-theme", "dark");
const theme = localStorage.getItem("user-theme");
const myUser = { name: "Настя", city: "Москва" };
const myArray = [{ text: "Hello" }, 12, "String", true];
const myBool = true;
localStorage.setItem("myUser", JSON.stringify(myUser));
localStorage.setItem("myArray", JSON.stringify(myArray));
localStorage.setItem("myBool", JSON.stringify(myBool));
localStorage.setItem("myNumber", (42).toString());
// Домашка
// - прикрутить json-server к тудушкам
// - прикрутить localStorage к тудушкам
// - Привести по несколько примеров использования на localStorage, sessionStorage, cookies
// - ??, + отличия от ||
// - посмотреть еще раз про ошибки про класс Error, try catch, обработанные и необработанные исключения
const user2 = JSON.parse((_a = localStorage.getItem("myUser")) !== null && _a !== void 0 ? _a : "");
console.log(localStorage.getItem("myUser"), user2.city);
console.log(localStorage.getItem("myArray"));
console.log(localStorage.getItem("myBool"));
console.log(JSON.parse(localStorage.getItem("myNumber")) + 2);
