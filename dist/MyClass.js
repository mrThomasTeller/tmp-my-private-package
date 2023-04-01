"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyClass {
    constructor(name) {
        this._name = name;
    }
    greet() {
        return `Hello, ${this._name}!`;
    }
}
exports.default = MyClass;
