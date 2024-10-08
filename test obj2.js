"use strict";
const sayHello = () => console.log("Hello");
const user = {
    name: "John",
    age: 11,
    name2: "Alice",
    age2: 12,
    sayH: sayHello,
};
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
    const value = user[key];
    console.log(value);
    //   console.log(key);
});
Object.keys(user).forEach((key) => {
    const value = user[key];
    //   console.log(value);
});
function printAnimalName(animal) {
    const keys = Object.keys(animal);
    const key = keys[2];
    const maybeUndefined = animal[key];
}
const animal = { name: "dog", age: 1 };
const bird = { name: "сова", speed: 250, age: 1 };
printAnimalName(animal); // ["name", "age"]
printAnimalName(bird); // ["name", "age", "speed"]
