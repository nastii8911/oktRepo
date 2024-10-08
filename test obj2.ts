type User = {
    name: string
    age: number
    name2: string
    age2: number
    sayH: any
}
const sayHello = () => console.log("Hello")
const user: User = {
    name: "John",
    age: 11,
    name2: "Alice",
    age2: 12,
    sayH: sayHello,
}

// user.sayH();
// console.log(typeof user.sayH);
// console.log(user["sayH"]);
// function getKey(): "name" {
//   const key = "name";
//   return key;
// }

// console.log(user[getKey()]);
// console.log(Object.keys(user));
Object.keys(user).forEach((key) => {
    // @ts-expect-error
    const value = user[key]
    console.log(value)
    //   console.log(key);
})

// Правильный вывод ключей с типами:
;(Object.keys(user) as (keyof User)[]).forEach((key) => {
    const value = user[key]
    //   console.log(value);
})
// Object.entries(user).forEach((pair, index) => {
//   const key = pair[0];
//   const value = pair[1];
//   console.log(key, value, index);
// });

type Animal = {
    name: string
    age: number
}

type Bird = Animal & {
    speed: number
}

type AnimalKey = keyof Animal // "name" | "age"

function printAnimalName(animal: Animal) {
    const keys = Object.keys(animal) as AnimalKey[]

    const key = keys[2]
    const maybeUndefined = animal[key]
}

const animal: Animal = { name: "dog", age: 1 }
const bird: Bird = { name: "сова", speed: 250, age: 1 }

printAnimalName(animal) // ["name", "age"]
printAnimalName(bird) // ["name", "age", "speed"]
