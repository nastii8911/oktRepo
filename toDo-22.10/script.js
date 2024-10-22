import { createTodoItem } from "./create-todo-item.js";
import { isDuplicateTask } from "./is-duplicate-task.js";
// Получаем элементы через querySelector с добавлением типов
const textInput = document.querySelector(".task-input");
const descriptionInput = document.querySelector(".task-description");
const dateInput = document.querySelector(".task-date");
const addTaskButton = document.querySelector(".add-task-button");
const generateButton = document.querySelector(".generate-btn");
const todoList = document.querySelector(".todo-list");
// F2 - переименовать переменную
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
    const isTaskInputFilled = textInput.value.trim() !== "";
    const isTaskDescriptionFilled = descriptionInput.value.trim() !== "";
    const isTaskDateFilled = Boolean(dateInput.value);
    const shouldEnableButton = isTaskInputFilled && isTaskDescriptionFilled && isTaskDateFilled;
    addTaskButton.disabled = !shouldEnableButton;
}
function onAddTaskButtonClick() {
    const text = textInput.value.trim();
    const description = descriptionInput.value.trim();
    const date = new Date(dateInput.value); // 2024-10-10 => new Date("2024-10-10")
    if (!text || !description || !date)
        return;
    if (isDuplicateTask(text)) {
        alert("Задача с таким названием уже существует!");
        return;
    }
    const newTaskItem = createTodoItem(text, description, date);
    todoList.appendChild(newTaskItem);
    resetForm();
}
function onGenerateButtonClick() {
    const randomText = generateRandomText();
    textInput.value = randomText.task;
    descriptionInput.value = randomText.description;
    // Обновить состояние кнопки "Добавить задачу"
    toggleAddButtonState();
}
