export default class MyClass {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  public greet(): string {
    return `Hello, ${this._name}!`;
  }
}
