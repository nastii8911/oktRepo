// Функция для проверки наличия дубликатов задач
export function isDuplicateTask(text) {
    const todoList = document.querySelector(".todo-list");
    // const existingTasks: string[] = Array.from(todoList.querySelectorAll(".task__title")).map(x => x.textContent);
    const existingTasks = [...todoList.querySelectorAll(".task__title")].map((x) => { var _a; return (_a = x.textContent) !== null && _a !== void 0 ? _a : ""; });
    text = text.toLowerCase();
    console.log(existingTasks, text);
    return existingTasks.some((x) => x.toLowerCase() === text);
}
