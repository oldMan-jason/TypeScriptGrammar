
// 接口属性字段合并
interface Box {
    width: number
    height: number
}

interface Box {
    scale: number
}

let b: Box = { width: 12, height: 12, scale: 1 }


// 接口函数合并
interface MyFunction {
    add(): string
    (a: string): number
    a1: (a1: string) => number
}


interface MyFunction {
    add(): string
}

interface MyFunction {
    add1(): number
}

function test1(a: MyFunction) {
    a.add();
    a("1")
    a.a1('1')
}

// 命名空间合并

namespace Animals {
    export class Zebra { }
}

namespace Animals {

    export interface Legged {
        numberOfLegs: number;
    }
    export class Dog { }
}

// 命名空间可以用来扩展枚举型
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName == "yellow") {
            return Color.red + Color.green;
        }
        else if (colorName == "white") {
            return Color.red + Color.green + Color.blue;
        }
        else if (colorName == "magenta") {
            return Color.red + Color.blue;
        }
        else if (colorName == "cyan") {
            return Color.green + Color.blue;
        }
    }
}