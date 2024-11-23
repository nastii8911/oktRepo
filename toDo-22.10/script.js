"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_todo_item_js_1 = require("./create-todo-item.js");
const is_duplicate_task_js_1 = require("./is-duplicate-task.js");
// Получаем элементы через querySelector с добавлением типов
const textInput = document.querySelector(".task-input");
const descriptionInput = document.querySelector(".task-description");
const dateInput = document.querySelector(".task-date");
const addTaskButton = document.querySelector(".add-task-button");
const generateButton = document.querySelector(".generate-btn");
const todoList = document.querySelector(".todo-list");
if (!textInput || !descriptionInput || !dateInput || !addTaskButton || !todoList || !generateButton) {
    throw new Error("Не удалось найти необходимые элементы на странице.");
}
textInput.addEventListener("input", toggleAddButtonState);
descriptionInput.addEventListener("input", toggleAddButtonState);
dateInput.addEventListener("input", toggleAddButtonState);
addTaskButton.addEventListener("click", onAddTaskButtonClick);
generateButton.addEventListener("click", onGenerateButtonClick);
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Функция для генерации случайного текста
function generateRandomText() {
    const tasks = ["Покупка продуктов", "Завершить проект", "Позвонить другу", "Написать отчёт", "Прочитать книгу"];
    const descriptions = ["описание задачи", "сделать задачу", "отменить задачу", "завершить задачу", "продлить задачу"];
    return {
        task: tasks[getRandomInRange(0, tasks.length - 1)],
        description: descriptions[getRandomInRange(0, descriptions.length - 1)],
    };
}
// Функция для очистки полей ввода и сброса кнопки
function resetForm() {
    textInput.value = "";
    descriptionInput.value = "";
    dateInput.value = "";
    addTaskButton.disabled = true;
}
// Функция для управления состоянием кнопки
function toggleAddButtonState() {
    // const isTaskInputFilled = textInput.value.trim() !== "";
    // const isTaskDescriptionFilled = descriptionInput.value.trim() !== "";
    // const isTaskDateFilled = Boolean(dateInput.value);
    // const shouldEnableButton = isTaskInputFilled && isTaskDescriptionFilled && isTaskDateFilled;
    // addTaskButton.disabled = !shouldEnableButton;
    const isTaskInputFilled = textInput.value.trim() !== "";
    const isTaskDescriptionFilled = descriptionInput.value.trim() !== "";
    const isTaskDateFilled = Boolean(dateInput.value);
    const shouldEnableButton = isTaskInputFilled && isTaskDescriptionFilled && isTaskDateFilled;
    console.log("Поля заполнены:", {
        isTaskInputFilled,
        isTaskDescriptionFilled,
        isTaskDateFilled,
        shouldEnableButton,
    });
    addTaskButton.disabled = !shouldEnableButton;
}
function onAddTaskButtonClick() {
    const text = textInput.value.trim();
    const description = descriptionInput.value.trim();
    const dateValue = dateInput.value;
    if (!dateValue) {
        console.error("Не указана дата!");
        return;
    }
    const date = new Date(dateValue);
    if (isNaN(date.getTime())) {
        console.error("Некорректная дата!");
        return;
    }
    if (!text || !description) {
        console.error("Не все поля заполнены!");
        return;
    }
    if ((0, is_duplicate_task_js_1.isDuplicateTask)(text)) {
        alert("Задача с таким названием уже существует!");
        return;
    }
    const newTask = (0, create_todo_item_js_1.createTodoItem)(text, description, date);
    if (newTask) {
        todoList.appendChild(newTask);
    }
    resetForm();
}
function onGenerateButtonClick() {
    const randomText = generateRandomText();
    textInput.value = randomText.task;
    descriptionInput.value = randomText.description;
    // Обновить состояние кнопки "Добавить задачу"
    toggleAddButtonState();
}
