function printEveryElement<T extends string | number>(array: T[]): void {
    array.forEach((x) => console.log(x));
    const myArr: T[] = [];
}

const a: (string | number)[] = [1, 2, "a", 3];
printEveryElement<string | number>(a);

const nums: number[] = [1, 2, 3];
printEveryElement(nums);

type User = {
    name: string;
    city: string;
    age: number;
};

type City = User["city"];

const key: keyof User = "city";

function changeObject<K extends keyof User>(user: User, key: K, value: User[K]) {
    user[key] = value;
    return user;
}

const oldUser: User = {
    city: "Moscow",
    name: "Alex",
    age: 1,
};

const newUser = changeObject<"age">(oldUser, "age", 123);

console.log(newUser);

// const newUser: User = {
//     city: 'Moscow',
//     name: 'John'
// }

type CreateAction<T> = {
    description: string;
    date: string;

    action: T;
};

type BookAction = CreateAction<"book">;
type ReturnAction = CreateAction<"return">;
type PayAction = CreateAction<"pay">;

const bookAction: BookAction = {
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
