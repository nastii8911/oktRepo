"use strict";
// Получаем элементы для управления модальным окном
const openModalButton = document.querySelector(".open");
const modal = document.querySelector(".modal");
const closeModalButton = document.querySelector(".modal__close");
// Функция для открытия модального окна
openModalButton.addEventListener("click", () => {
    modal.classList.add("opened");
});
// Функция для закрытия модального окна
closeModalButton.addEventListener("click", () => {
    modal.classList.remove("opened");
});
// Закрытие модального окна при клике вне его
modal.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === modal) {
        modal.classList.remove("opened");
    }
});
const ul = document.querySelector("ul");
const li = document.querySelector("li");
ul.addEventListener("click", (event) => {
    console.log("event.target", event.target);
    console.log("event.currentTarget", event.currentTarget);
});
