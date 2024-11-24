const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, "tasks.json");

// Middleware для работы с JSON
app.use(express.json());

// Получить все задачи
app.get("/tasks", (req, res) => {
  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Ошибка чтения данных" });
    }
    res.json(JSON.parse(data || "[]"));
  });
});

// Добавить новую задачу
app.post("/tasks", (req, res) => {
  const newTask = req.body;

  fs.readFile(DATA_FILE, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Ошибка чтения данных" });
    }

    const tasks = JSON.parse(data || "[]");
    tasks.push(newTask);

    fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Ошибка записи данных" });
      }
      res.status(201).json(newTask);
    });
  });
});

// Запустить сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
