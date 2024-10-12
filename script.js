"use strict";
const p = document.querySelector(".text");
const button = document.querySelector("button");
const sumButton = document.querySelector(".sum-button");
button.addEventListener("click", () => {
    console.log("click happened");
    p.textContent = "Hello";
    // p.style.backgroundColor = "red"
    p.classList.toggle("green");
});
const input1 = document.querySelector("input:nth-child(1)");
const input2 = document.querySelector("input:nth-child(2)");
sumButton.addEventListener("click", () => {
    // @ts-expect-error
    sumButton.textContent += Number(input1.value) + Number(input2.value);
});
