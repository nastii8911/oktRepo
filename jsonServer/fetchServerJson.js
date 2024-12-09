"use strict";
fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json", // Указываем, что отправляем данные в формате JSON
    },
    body: JSON.stringify({
        name: "Nina",
        email: "Nina@example.com",
    }),
})
    .then((response) => response.json())
    .then((data) => console.log("User added:", data))
    .catch((error) => console.error("Error:", error));
fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
