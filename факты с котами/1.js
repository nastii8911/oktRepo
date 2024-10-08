"use strict";
// fetch - извлекать
const promise = fetch("https://jsonplaceholder.typicode.com/todos");
console.log(promise);
// JSON - java script object notation
promise
    .then((response) => {
    // Сюда попадем, если 100, 200, 300, 400, 500
    if (!response.ok) {
        // Сюда попадем, если 400, 500
        throw new Error("It's not ok!");
    }
    console.log("fulfilled", response);
    return response.json();
})
    .then((todos) => {
    console.log("Завершился парсинг JSON'a:", todos);
})
    .catch((err) => {
    // Сюда попадем, если нет интернета, или сервер недоступен, или неправильный протокол http / https
    console.log("rejected", err.message);
});
const queryParams = new URLSearchParams();
queryParams.append("max_length", "10");
fetch(`https://catfact.ninja/facts?${queryParams.toString()}`)
    .then((res) => res.json())
    .then((json) => {
    // Фильтруем факты, содержащие слово 'dog' или 'Dogs'
    const dogFacts = json.data.filter((data) => data.fact.toLowerCase().includes("dog")).map((data) => data.fact);
    // Выводим отфильтрованные факты
    console.log(dogFacts);
})
    .catch((err) => {
    console.error("Произошла ошибка", err);
});
// navigator.clipboard
//   .writeText("Hello world from js !")
//   .then(() => {
//     console.log("Successfully copied !");
//   })
//   .catch(() => {
//     console.error("Forbidden !");
//   });
// console.log("start")
// for (let i = 0; i < 10_000_000_000; i++) {}
// console.log("end")
// Домашка
// 1) Вывести все туду, у которых заголовок состоит из 3 слов
// 2) Вывести все заголовки, которые состоят из 3 слов
// 3) Повторить URL, UrlSearchParams + отправить запросы с квери параметрами
// 4) https://learn.javascript.ru/long-polling
// 5) Разобраться, что такое API
// 6) Найти 3 разных API и как-то с ними поработать: "api free"
