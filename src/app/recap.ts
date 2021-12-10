const username: string = 'Luis';

const sum = (a: number, b: number): number => {
  return a + b
}

sum(1, 2);

class Person {
  private age: number;
  lastName: string;

  constructor(age: number, lastName: string, public firstName: string) {
    this.age = age;
    this.lastName = lastName;
  }
}

const luis = new Person(41, 'Rangel', 'Abdel');

console.log(luis.lastName);
console.log(luis.firstName);
