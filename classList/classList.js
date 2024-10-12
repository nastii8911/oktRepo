"use strict";
const myElement = document.getElementById("myElement");
// Добавить класс
myElement.classList.add("highlight");
// Удалить класс
myElement.classList.remove("box");
// Переключить класс
myElement.classList.toggle("active");
// Проверить наличие класса
if (myElement.classList.contains("active")) {
    console.log("Element is active");
}
//  Вопрос: Почему в этом случае null?
document === null || document === void 0 ? void 0 : document.addEventListener("DOMContentLoaded", () => {
    const myElement = document.getElementById("myElement");
    if (!myElement)
        return;
    // Добавить класс
    myElement.classList.add("highlight");
    // Удалить класс
    myElement.classList.remove("box");
    // Переключить класс
    myElement.classList.toggle("active");
    // Проверить наличие класса
    if (myElement.classList.contains("active")) {
        console.log("Element is active");
    }
});
