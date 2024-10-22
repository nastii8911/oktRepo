// Функция для проверки наличия дубликатов задач

export function isDuplicateTask(text: string): boolean {
  const todoList = document.querySelector(".todo-list") as HTMLElement;

  // const existingTasks: string[] = Array.from(todoList.querySelectorAll(".task__title")).map(x => x.textContent);
  const existingTasks: string[] = [...todoList.querySelectorAll(".task__title")].map((x) => x.textContent ?? "");

  text = text.toLowerCase();

  console.log(existingTasks, text);

  return existingTasks.some((x) => x.toLowerCase() === text);
}
