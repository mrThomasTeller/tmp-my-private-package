export default class MyClass {
    constructor(name) {
        this._name = name;
    }
    greet() {
        return `Hello, ${this._name}!`;
    }
}
