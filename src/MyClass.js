export default class MyClass {
  #name;

  constructor(name) {
    this.#name = name;
  }

  greet() {
    return `Hello, ${this.#name}!`;
  }
}
