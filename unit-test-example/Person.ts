export class Person{
    _name: string;
    _age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    get name(){
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }

    get age(){
        return this._age;
    }

    set age(value: number){
        if(!Person.isValidAge(value)){
            throw new Error("That value '" + value + "' is not a valid age.")
        }

        this._age = value;
    }

    static isValidAge (value): Boolean{
        return value >= 0 && value <= 120;
    };
}