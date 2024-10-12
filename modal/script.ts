// Получаем элементы для управления модальным окном
const openModalButton = document.querySelector(".open") as HTMLElement;
const modal = document.querySelector(".modal") as HTMLElement;
const closeModalButton = document.querySelector(".modal__close") as HTMLElement;

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

const ul = document.querySelector("ul") as HTMLElement;
const li = document.querySelector("li") as HTMLElement;

ul.addEventListener("click", (event) => {
  console.log("event.target", event.target);
  console.log("event.currentTarget", event.currentTarget);
});
