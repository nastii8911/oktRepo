export function createTodoItem(text: string, description: string, date: Date): HTMLLIElement {
    const newTaskItem = document.createElement("li");
    newTaskItem.classList.add("todo-item");

    // Контейнер для текста задачи и описания
    const todoContent = document.createElement("div");
    console.log(todoContent.classList);
    todoContent.classList.add("todo-content");

    const taskTitle = document.createElement("span");
    taskTitle.classList.add("task__title");
    taskTitle.textContent = `${text}`;

    const dateSpan = document.createElement("span");
    dateSpan.classList.add("task__date");
    // dateSpan.textContent = `Сделать до: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    const formattedDate = date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    dateSpan.textContent = `Сделать до: ${formattedDate}`;

    const taskDescription = document.createElement("small");
    taskDescription.textContent = description;

    // Добавляем элементы к контейнеру
    todoContent.appendChild(taskTitle);
    todoContent.appendChild(dateSpan);
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

function deleteTask(taskElement: HTMLLIElement): void {
    const todoList = document.querySelector(".todo-list") as HTMLElement;

    todoList.removeChild(taskElement);
}
