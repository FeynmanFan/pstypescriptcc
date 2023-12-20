"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (!Person.isValidAge(value)) {
                throw new Error("That value '" + value + "' is not a valid age.");
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.isValidAge = function (value) {
        return value >= 0 && value <= 120;
    };
    ;
    return Person;
}());
exports.Person = Person;
