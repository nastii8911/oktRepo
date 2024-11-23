import { createTodoItem } from "./create-todo-item.js";
import { isDuplicateTask } from "./is-duplicate-task.js";

// Получаем элементы через querySelector с добавлением типов
const textInput = document.querySelector(".task-input") as HTMLInputElement;
const descriptionInput = document.querySelector(".task-description") as HTMLInputElement;
const dateInput = document.querySelector(".task-date") as HTMLInputElement;
const addTaskButton = document.querySelector(".add-task-button") as HTMLButtonElement;
const generateButton = document.querySelector(".generate-btn") as HTMLButtonElement;
const todoList = document.querySelector(".todo-list") as HTMLElement;

if (!textInput || !descriptionInput || !dateInput || !addTaskButton || !todoList || !generateButton) {
  throw new Error("Не удалось найти необходимые элементы на странице.");
}

textInput.addEventListener("input", toggleAddButtonState);
descriptionInput.addEventListener("input", toggleAddButtonState);
dateInput.addEventListener("input", toggleAddButtonState);
addTaskButton.addEventListener("click", onAddTaskButtonClick);
generateButton.addEventListener("click", onGenerateButtonClick);

type RandomTask = {
  task: string;
  description: string;
};

function getRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайного текста
function generateRandomText(): RandomTask {
  const tasks: string[] = ["Покупка продуктов", "Завершить проект", "Позвонить другу", "Написать отчёт", "Прочитать книгу"];
  const descriptions: string[] = ["описание задачи", "сделать задачу", "отменить задачу", "завершить задачу", "продлить задачу"];

  return {
    task: tasks[getRandomInRange(0, tasks.length - 1)],
    description: descriptions[getRandomInRange(0, descriptions.length - 1)],
  };
}

// Функция для очистки полей ввода и сброса кнопки
function resetForm(): void {
  textInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  addTaskButton.disabled = true;
}

// Функция для управления состоянием кнопки
function toggleAddButtonState(): void {
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

  if (isDuplicateTask(text)) {
    alert("Задача с таким названием уже существует!");
    return;
  }

  const newTask = createTodoItem(text, description, date);
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
