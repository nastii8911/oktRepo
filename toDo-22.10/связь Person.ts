function getRandomInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Person {
  public id: number;
  public name: string;
  public age: number;
  public connections: Person[];

  constructor({ name, age }: { name: string; age: number }) {
    this.name = name;
    this.age = age;
    this.connections = [];
    this.id = getRandomInRange(1, 100000);
  }

  public addConnection(person: Person): void {
    const connectionsIds = this.connections.map((conn) => conn.id);

    if (!connectionsIds.includes(person.id)) {
      this.connections.push(person);
      person.connections.push(this);
    }
  }

  public getConnections(): string[] {
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
