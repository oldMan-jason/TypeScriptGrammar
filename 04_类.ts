/**
 *  类的定义
 */
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

/**
 * 类的继承
 */
class Animal {

    run(distance: number) {
        console.log(`跑了 多少 距离: ${distance}`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.run(10);

/**
 *  访问修饰符
 *  public 默认
 *  private 不能在声明它的类的外部访问
 *  protected 再派生类中仍然可以访问
 *  readonly 只读属性
 */

/**
 *  set get 方法
 */
let passcode = "secret passcode";

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    alert(employee.fullName);
}
