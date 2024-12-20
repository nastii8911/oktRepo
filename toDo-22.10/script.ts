import { createTodoItem } from "./create-todo-item.js";
import { isDuplicateTask } from "./is-duplicate-task.js";

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

function generateRandomText(): RandomTask {
  const tasks: string[] = ["Покупка продуктов", "Завершить проект", "Позвонить другу", "Написать отчёт", "Прочитать книгу"];
  const descriptions: string[] = ["описание задачи", "сделать задачу", "отменить задачу", "завершить задачу", "продлить задачу"];

  return {
    task: tasks[getRandomInRange(0, tasks.length - 1)],
    description: descriptions[getRandomInRange(0, descriptions.length - 1)],
  };
}

function resetForm(): void {
  textInput.value = "";
  descriptionInput.value = "";
  dateInput.value = "";
  addTaskButton.disabled = true;
}

function toggleAddButtonState(): void {
  const isTaskInputFilled = textInput.value.trim() !== "";
  const isTaskDescriptionFilled = descriptionInput.value.trim() !== "";
  const isTaskDateFilled = Boolean(dateInput.value);
  const shouldEnableButton = isTaskInputFilled && isTaskDescriptionFilled && isTaskDateFilled;

  addTaskButton.disabled = !shouldEnableButton;
}

function onAddTaskButtonClick(): void {
  const text = textInput.value.trim();
  const description = descriptionInput.value.trim();
  const dateValue = dateInput.value;

  if (!dateValue) {
    console.error("Не указана дата!");
    return;
  }

  const date = new Date(dateValue);
  if (isNaN(date.getTime())) {
    console.error("Некорректная дата:", dateValue);
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

  const newTaskItem = createTodoItem(text, description, date);
  todoList.appendChild(newTaskItem);
  resetForm();
}

function onGenerateButtonClick() {
  const randomText = generateRandomText();
  textInput.value = randomText.task;
  descriptionInput.value = randomText.description;

  toggleAddButtonState();
}
