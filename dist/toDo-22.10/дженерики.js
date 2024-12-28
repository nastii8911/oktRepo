"use strict";
function printEveryElement(array) {
    array.forEach((x) => console.log(x));
    const myArr = [];
}
const a = [1, 2, "a", 3];
printEveryElement(a);
const nums = [1, 2, 3];
printEveryElement(nums);
const key = "city";
function changeObject(user, key, value) {
    user[key] = value;
    return user;
}
const oldUser = {
    city: "Moscow",
    name: "Alex",
    age: 1,
};
const newUser = changeObject(oldUser, "age", 123);
console.log(newUser);
const bookAction = {
    date: "123",
    description: "123",
    action: "book",
};
// function createAction(actionName: string) {
//     return {
//         date: "123",
//         actionAuthor: "",
//         actionName: actionName,
//     };
// }
// const bookAction2 = createAction("book");
// const returnAction2 = createAction("return");
// bookAction2.actionAuthor;
// returnAction2.actionAuthor;
// const data = createData<string>([])
[1, 2, 3].map((x) => x);
