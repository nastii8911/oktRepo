export {};

const data = [5, 8, 9, 2, 1];
const newArr = [];

for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
        newArr.push(data[i]);
    }
}
// const fn = (element, i) => {}
// fn(5, 0);
// fn(8, 1);
// fn(9, 2);
// fn(2, 3);
// fn(1, 4);
data.forEach((element, i) => {
    if (element % 2 === 0) newArr.push(element);
});

const filtered = data.filter((element, i): boolean => {
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
});
// [5, 9]
// const x = fn(9, 2);
console.log(filtered);

// const sum = (a: number, b: number) => {}
