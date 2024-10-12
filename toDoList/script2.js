"use strict";
// Получаем элементы input, кнопку и список
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const todoList = document.getElementById("todoList");
// Добавляем обработчик события на кнопку
addTaskButton.addEventListener("click", () => {
    // Получаем текст задачи из input
    const taskText = taskInput.value.trim();
    // Проверяем, что input не пустой
    if (!taskText) {
        alert("Введите задачу!");
        return;
    }
    // Создаем новый элемент списка <li>
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskText;
    newTaskItem.classList.add("todo-item"); // Добавляем класс для стилизации
    // Добавляем задачу в список
    todoList.appendChild(newTaskItem);
    // Очищаем поле ввода
    taskInput.value = "";
});
