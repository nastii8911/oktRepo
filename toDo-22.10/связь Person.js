"use strict";
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
class Person {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
        this.connections = [];
        this.id = getRandomInRange(1, 100000);
    }
    addConnection(person) {
        const connectionsIds = this.connections.map((conn) => conn.id);
        if (!connectionsIds.includes(person.id)) {
            this.connections.push(person);
            person.connections.push(this);
        }
    }
    getConnections() {
        return this.connections.map((conn) => conn.name);
    }
}
const ivan = new Person({ name: "Ivan", age: 30 });
const peter = new Person({ name: "Petr", age: 26 });
console.log(ivan.getConnections()); // []
console.log(peter.getConnections()); // []
ivan.addConnection(peter);
console.log(ivan.getConnections()); // ["Petr"]
console.log(peter.getConnections()); // ["Ivan"]
