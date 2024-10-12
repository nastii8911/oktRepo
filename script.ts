const p = document.querySelector(".text") as HTMLElement
const button = document.querySelector("button") as HTMLElement
const sumButton = document.querySelector(".sum-button") as HTMLElement

console.log(p)
console.dir(p)

// 123qwdqwd

button.addEventListener("click", () => {
    console.log("click happened")

    p.textContent = "Hello"
    // p.style.backgroundColor = "red"

    p.classList.toggle("green")
})

const x: number | undefined = undefined as number | undefined
// 4.4444444444444444.toFixed(2) 4.44

try {
    const y = x!.toFixed().toLowerCase().toUpperCase()
} catch (error) {
    console.log("Произошла ошибка", error)
}

console.log(123)

const input1 = document.querySelector("input:nth-child(1)") as HTMLElement
const input2 = document.querySelector("input:nth-child(2)") as HTMLElement

sumButton.addEventListener("click", () => {
    // @ts-expect-error
    sumButton.textContent += Number(input1.value) + Number(input2.value)
})
