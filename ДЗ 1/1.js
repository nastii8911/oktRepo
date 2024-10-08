"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const promise = fetch("https://jsonplaceholder.typicode.com/todos");
// Получаем данные с API
promise
    .then((response) => {
    // Проверяем успешный ли ответ
    if (!response.ok) {
        throw new Error("It's not ok!");
    }
    return response.json();
})
    .then((todos) => {
    // console.log("Завершился парсинг JSON'a:", todos)
    // Фильтруем todos, у которых заголовок состоит из 3 слов
    const filteredTodos = todos.filter((todo) => {
        const words = todo.title.split(" ").filter((word) => word.length > 0); // Убираем пустые элементы
        //["", "", "", "this", "", "", "is", "a", "", "test", "", "", ""].filter(word => word.length > 0)
        return words.length === 3; // Проверяем, что в заголовке 3 слова
    });
    const filteredTodos2 = todos.filter((todo) => todo.title.split(" ").length === 3);
    console.log("Todos с заголовком из 3 слов:", filteredTodos2);
})
    .catch((err) => {
    console.log("rejected", err.message);
});
