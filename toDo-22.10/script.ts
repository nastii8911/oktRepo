// Получаем элементы через querySelector с добавлением типов
const taskInput = document.querySelector(".task-input") as HTMLInputElement;
const taskDescription = document.querySelector(
  ".task-description"
) as HTMLInputElement;
const taskDate = document.querySelector(".task-date") as HTMLInputElement;
const addTaskButton = document.querySelector(
  ".add-task-button"
) as HTMLButtonElement;
const generateButton = document.querySelector(
  ".generate-btn"
) as HTMLButtonElement;
const todoList = document.querySelector(".todo-list") as HTMLElement;

// Проверяем, что элементы существуют
if (
  !taskInput ||
  !taskDescription ||
  !taskDate ||
  !addTaskButton ||
  !todoList ||
  !generateButton
) {
  throw new Error("Не удалось найти необходимые элементы на странице.");
}
type randomTask = {
  task: string;
  description: string;
};
// Функция для генерации случайного текста
function generateRandomText(): randomTask {
  const tasks: string[] = [
    "Покупка продуктов",
    "Завершить проект",
    "Позвонить другу",
    "Написать отчёт",
    "Прочитать книгу",
  ];
  const descriptions: string[] = [
    "описание задачи",
    "описание задачи",
    "описание задачи",
    "описание задачи",
    "описание задачи",
  ];

  // Случайный индекс для задач и описаний
  const randomTask = tasks[Math.floor(Math.random() * tasks.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];
  console.log(randomTask);
  console.log(typeof randomTask);
  return { task: randomTask, description: randomDescription };
}

// Функция для управления состоянием кнопки
function toggleAddButtonState(): void {
  const isTaskInputFilled = taskInput.value.trim() !== "";
  const isTaskDescriptionFilled = taskDescription.value.trim() !== "";
  const isTaskDateFilled = taskDate.value !== null;
  const shouldEnableButton =
    isTaskInputFilled && isTaskDescriptionFilled && isTaskDateFilled;

  addTaskButton.disabled = !shouldEnableButton;
}

// Добавляем проверки для проверки, чтобы кнопка была активна
taskInput.addEventListener("input", toggleAddButtonState);
taskDescription.addEventListener("input", toggleAddButtonState);
taskDate.addEventListener("input", toggleAddButtonState);

// Функция для очистки полей ввода и сброса кнопки
function resetForm(): void {
  taskInput.value = "";
  taskDescription.value = "";
  taskDate.value = "";
  addTaskButton.disabled = true;
}

// Функция для удаления задачи
function deleteTask(taskElement: HTMLLIElement): void {
  todoList.removeChild(taskElement);
}

// Функция для проверки наличия дубликатов задач
function isDuplicateTask(taskText: string): boolean {
  const existingTasks = todoList.querySelectorAll(".todo-item span");
  for (let task of existingTasks) {
    if (task.textContent?.trim().toLowerCase() === taskText.toLowerCase()) {
      return true;
    }
  }
  return false;
}

// Функция для создания нового элемента списка
function createTodoItem(
  taskText: string,
  taskDescriptionText: string,
  taskDateText: string
): HTMLLIElement {
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
    } else {
      const newTaskItem = createTodoItem(
        taskText,
        taskDescriptionText,
        taskDateText
      );
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
