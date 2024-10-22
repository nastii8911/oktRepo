"use strict";
// Получаем элементы через querySelector с добавлением типов
const taskInput = document.querySelector(".task-input");
const taskDescription = document.querySelector(".task-description");
const taskDate = document.querySelector(".task-date");
const addTaskButton = document.querySelector(".add-task-button");
const generateButton = document.querySelector(".generate-btn");
const todoList = document.querySelector(".todo-list");
// Проверяем, что элементы существуют
if (!taskInput ||
    !taskDescription ||
    !taskDate ||
    !addTaskButton ||
    !todoList ||
    !generateButton) {
    throw new Error("Не удалось найти необходимые элементы на странице.");
}
// Функция для генерации случайного текста
function generateRandomText() {
    const tasks = [
        "Покупка продуктов",
        "Завершить проект",
        "Позвонить другу",
        "Написать отчёт",
        "Прочитать книгу",
    ];
    const descriptions = [
        "описание задачи",
        "описание задачи",
        "описание задачи",
        "описание задачи",
        "описание задачи",
    ];
    // Случайный индекс для задач и описаний
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    console.log(randomTask);
    console.log(typeof randomTask);
    return { task: randomTask, description: randomDescription };
}
// Функция для управления состоянием кнопки
function toggleAddButtonState() {
    const isTaskInputFilled = taskInput.value.trim() !== "";
    const isTaskDescriptionFilled = taskDescription.value.trim() !== "";
    const isTaskDateFilled = taskDate.value !== null;
    const shouldEnableButton = isTaskInputFilled && isTaskDescriptionFilled && isTaskDateFilled;
    addTaskButton.disabled = !shouldEnableButton;
}
// Добавляем проверки для проверки, чтобы кнопка была активна
taskInput.addEventListener("input", toggleAddButtonState);
taskDescription.addEventListener("input", toggleAddButtonState);
taskDate.addEventListener("input", toggleAddButtonState);
// Функция для очистки полей ввода и сброса кнопки
function resetForm() {
    taskInput.value = "";
    taskDescription.value = "";
    taskDate.value = "";
    addTaskButton.disabled = true;
}
// Функция для удаления задачи
function deleteTask(taskElement) {
    todoList.removeChild(taskElement);
}
// Функция для проверки наличия дубликатов задач
function isDuplicateTask(taskText) {
    var _a;
    const existingTasks = todoList.querySelectorAll(".todo-item span");
    for (let task of existingTasks) {
        if (((_a = task.textContent) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) === taskText.toLowerCase()) {
            return true;
        }
    }
    return false;
}
// Функция для создания нового элемента списка
function createTodoItem(taskText, taskDescriptionText, taskDateText) {
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("todo-item");
    // Контейнер для текста задачи и описания
    const todoContent = document.createElement("div");
    todoContent.classList.add("todo-content");
    const taskTitle = document.createElement("span");
    taskTitle.textContent = `${taskText}  Сделать до: ${taskDateText}`;
    const taskDescription = document.createElement("small");
    taskDescription.textContent = taskDescriptionText;
    // Добавляем элементы к контейнеру
    todoContent.appendChild(taskTitle);
    todoContent.appendChild(taskDescription);
    // Создаем кнопку удаления
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteTask(newTaskItem));
    // Добавляем содержимое и кнопку удаления в элемент списка
    newTaskItem.appendChild(todoContent);
    newTaskItem.appendChild(deleteButton);
    return newTaskItem;
}
// Добавляем обработчик события на кнопку
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const taskDescriptionText = taskDescription.value.trim();
    const taskDateText = taskDate.value.trim();
    // Проверяем, что поля не пустые
    if (taskText && taskDescriptionText && taskDateText) {
        if (isDuplicateTask(taskText)) {
            alert("Задача с таким названием уже существует!");
        }
        else {
            const newTaskItem = createTodoItem(taskText, taskDescriptionText, taskDateText);
            todoList.appendChild(newTaskItem);
            resetForm();
        }
    }
});
// Обработчик события для кнопки генерации случайного текста
generateButton.addEventListener("click", () => {
    const randomText = generateRandomText();
    taskInput.value = randomText.task;
    taskDescription.value = randomText.description;
    // Обновить состояние кнопки "Добавить задачу"
    toggleAddButtonState();
});
