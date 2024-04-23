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
    [index: string]: number;
    lenght: number,
    width: number,
}

// let ob = { la: 100 }
// console.log(ob.la);
// console.log(ob['la']);
let ob1 = { 'la': 1 }
console.log(ob1.la);


let numbers: NumberDictionary = { lenght: 200, width: 100 };
console.log(numbers['length']);




