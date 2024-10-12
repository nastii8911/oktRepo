// Получаем элементы input, кнопку и список
const taskInput = document.getElementById("taskInput") as HTMLInputElement;
const addTaskButton = document.getElementById("addTaskButton") as HTMLElement;
const todoList = document.getElementById("todoList") as HTMLElement;

// Добавляем обработчик события на кнопку
addTaskButton.addEventListener("click", () => {
  // Получаем текст задачи из input
  const taskText = taskInput.value.trim();

  // Проверяем, что input не пустой
  if (taskText !== "") {
    // Создаем новый элемент списка <li>
    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskText;
    newTaskItem.classList.add("todo-item"); // Добавляем класс для стилизации

    // Добавляем задачу в список
    todoList.appendChild(newTaskItem);

    // Очищаем поле ввода
    taskInput.value = "";
  } else {
    alert("Введите задачу!");
  }
});
