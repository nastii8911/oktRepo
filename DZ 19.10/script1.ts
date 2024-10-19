// Получаем элементы через querySelector с добавлением типов
const taskInput = document.querySelector(".task-input") as HTMLInputElement;
const taskDescription = document.querySelector(
  ".task-description"
) as HTMLTextAreaElement;
const addTaskButton = document.querySelector(
  ".add-task-button"
) as HTMLButtonElement;
const todoList = document.querySelector(".todo-list") as HTMLElement;

// Проверяем, что элементы существуют
if (!taskInput || !taskDescription || !addTaskButton || !todoList) {
  throw new Error("Не удалось найти необходимые элементы на странице.");
}

// Функция для управления состоянием кнопки
function toggleAddButtonState(): void {
  const isTaskInputFilled = taskInput.value.trim() !== "";
  const isTaskDescriptionFilled = taskDescription.value.trim() !== "";
  const shouldEnableButton = isTaskInputFilled && isTaskDescriptionFilled;

  addTaskButton.disabled = !shouldEnableButton;
}

// Добавляем проверки для проверки,чтобы кнопка была активна
taskInput.addEventListener("input", toggleAddButtonState);
taskDescription.addEventListener("input", toggleAddButtonState);

// Функция для очистки полей ввода и сброса кнопки
function resetForm(): void {
  taskInput.value = "";
  taskDescription.value = "";
  addTaskButton.disabled = true;
}

// Функция для удаления задачи
function deleteTask(taskElement: HTMLLIElement): void {
  todoList.removeChild(taskElement);
}

//Функция для проверки наличия дубликатов задач
// function isDuplicateTask(taskText: string): boolean {
//   const existingTasks = todoList.querySelectorAll(".todo-item span");
//   for (const task of existingTasks) {
//   }
// }

// Функция для создания нового элемента списка
function createTodoItem(
  taskText: string,
  taskDescriptionText: string
): HTMLLIElement {
  const newTaskItem = document.createElement("li");
  newTaskItem.classList.add("todo-item");

  // Контейнер для текста задачи и описания
  const todoContent = document.createElement("div");
  todoContent.classList.add("todo-content");

  const taskTitle = document.createElement("span");
  taskTitle.textContent = taskText;
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

  // Проверяем, что поля не пустые
  if (taskText && taskDescriptionText) {
    {
      const newTaskItem = createTodoItem(taskText, taskDescriptionText);
      todoList.appendChild(newTaskItem);
      resetForm();
    }
  }
});
