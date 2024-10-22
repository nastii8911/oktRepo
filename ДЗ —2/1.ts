const promise = fetch("https://jsonplaceholder.typicode.com/todos");

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

// Получаем данные с API
promise
  .then((response) => {
    // Проверяем успешный ли ответ
    if (!response.ok) {
      throw new Error("It's not ok!");
    }
    return response.json();
  })
  .then((todos: Todo[]) => {
    // console.log("Завершился парсинг JSON'a:", todos);

    // Фильтруем todos, у которых заголовок состоит из 3 слов
    const filteredTitles = todos.filter(isWordsNumberGreaterThan3).map((todo) => todo.title); // Получаем только заголовки

    const filteredTodos2 = todos.filter((todo) => todo.title.split(" ").length === 3).map((x) => x.title);

    console.log("Заголовки с 3 словами:", filteredTodos2);
  })
  .catch((err) => {
    console.log("rejected", err.message);
  });

function isWordsNumberGreaterThan3(todo: Todo): boolean {
  const words = todo.title.split(" "); // Разделяем строку по пробелу
  return words.length === 3; // Проверяем, что в заголовке 3 слова
}

export {};
