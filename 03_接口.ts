/**
 * 接口： 为类型进行命名或者定义契约规范
 */

interface myInterface {
    homeAddress: string
    tel: number
    personName: string
    printInfo: () => void
    getTel: (name: string) => number
}

function test(info: myInterface) {
    info.printInfo()
}

/**
 *  可选属性
 */
interface SquareConfig {
    color?: string
    width: number
}

/**
 *  只读属性
 */
interface Point {
    readonly x: number
    readonly y: number
}

let p: Point = { x: 1, y: 2 }
// p.x = 3  error


/**
 *  函数类型
 */

interface SearchFunc {
    (source: string): boolean
}
let fnc: SearchFunc = (source: string): boolean => {
    return false;
}

// 属性为函数类型
interface SearchFunc1 {
    search: (source: string) => boolean
}

/**
 *  可索引类型
 */
interface StringArray {
    [index: number]: string //索引签名
}

let stringValues: StringArray = ['jason', 'jack']
let userName = stringValues[0]
console.log(userName);

class Animal {
    animalName: string;
    constructor(animalName: string) {
        this.animalName = animalName;
    }
}
class Dog extends Animal {
    eat: string;
    constructor(eat: string, dogName: string) {
        super(dogName);
        this.eat = eat;
    }
}

class Cat extends Animal {
    eat: string;
    constructor(eat: string, catName: string) {
        super(catName);
        this.eat = eat;
    }
}

interface AnimalOkay {
    [x: number]: Cat;
    [x: string]: Cat;
}

let animals = [new Dog('dog', '啃骨头'), new Cat('cat', '吃鱼'), new Animal('animal')]
console.log(animals[0]);

// 字符串索引能很好的描述Dictionary
interface NumberDictionary {
    readonly [index: string]: number;
    length: number,
    width: number,
}

let ob = { la: 100 }
console.log(ob.la);
console.log(ob['la']);

let ob1 = { 'la': 1 }
console.log(ob1.la);

let numbers: NumberDictionary = { length: 200, width: 100 };
console.log(numbers['length']);



/**
 *  类类型
 */

// 实现接口
interface ClockInterface {
    currentTime: Date
    // 未实现函数
    setTime(date: Date): void
}

class Clock implements ClockInterface {

    constructor(h: number, m: number) {
        this.currentTime = new Date()
    }
    setTime(date: Date) {
        this.currentTime = date
    }
    currentTime: Date
}

/**
 *  接口继承
 *  接口可以继承过个接口
 */
interface ShapeFace {
    color: string
}

interface Square extends ShapeFace {
    sideLength: number;
}

let square = <Square>{};
square.color = 'red'
square.sideLength = 2;
console.log(square);

let s = { color: 'red', sideLength: 2 }

/**
 *  接口混合类型
 *  一个对象可以同时做为函数和对象使用，并带有额外的属性
 */

interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {
        return '作为函数使用'
    }
    // 对象使用
    counter.interval = 3
    counter.reset = function () {
        counter.interval = 0;
    }
    return counter;
}

let c = getCounter()
c.reset()
console.log(c(10));
console.log(c.interval);





