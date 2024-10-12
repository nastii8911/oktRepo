const p = document.querySelector(".text") as HTMLElement;
const button = document.querySelector("button") as HTMLElement;
const sumButton = document.querySelector(".sum-button") as HTMLElement;
console.log(p);
console.dir(p);

button?.addEventListener("click", () => {
  console.log("click happened");
  p.textContent = "hellooo";
  //   p.style.backgroundColor = "red";
  p.classList.toggle("green");
});

const input = document.querySelector("input:nth-child(1)") as HTMLElement;
const input1 = document.querySelector("input:nth-child(2)") as HTMLElement;
sumButton.addEventListener("click", () => {
  console.dir(input);
  console.dir(input1);
  //@ts-expect-error
  sumButton.textContent += Number(input.value) + Number(input1.value);
});
