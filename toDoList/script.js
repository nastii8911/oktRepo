"use strict";
const p = document.querySelector(".text");
const button = document.querySelector("button");
const sumButton = document.querySelector(".sum-button");
console.log(p);
console.dir(p);
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log("click happened");
    p.textContent = "hellooo";
    //   p.style.backgroundColor = "red";
    p.classList.toggle("green");
});
const input = document.querySelector("input:nth-child(1)");
const input1 = document.querySelector("input:nth-child(2)");
sumButton.addEventListener("click", () => {
    console.dir(input);
    console.dir(input1);
    //@ts-expect-error
    sumButton.textContent += Number(input.value) + Number(input1.value);
});
