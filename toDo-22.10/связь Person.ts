class Person {
  name: string;
  age: number;
  connections: Person[];

  constructor({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
    this.connections = [];
  }

  addConnections(person: Person): void {
    if (person instanceof Person) {
      if (!this.connections.includes(person)) {
        this.connections.push(person); // Добавляем связь
        person.connections.push(this); // Двусторонняя связь
      }
    } else {
      throw new Error("Connection must be an instance of Person");
    }
  }

  getConnections(): string[] {
    return this.connections.map((conn) => conn.name);
  }
}

const ivan = new Person({ name: "Ivan", age: 30 });
const peter = new Person({ name: "Petr", age: 26 });

console.log(ivan.getConnections()); // []
console.log(peter.getConnections()); // []

ivan.addConnections(peter);

console.log(ivan.getConnections()); // ["Petr"]
console.log(peter.getConnections()); // ["Ivan"]
