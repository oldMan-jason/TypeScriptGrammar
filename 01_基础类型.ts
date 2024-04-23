/**
 *  基础类型：
 *  布尔，数字，字符串，数组，元祖，枚举，any，Void，Null，Undefined，Object
 */
let isDone: boolean = true

let age: number = 18

let userName: string = 'jason'
let longString: string = `my name is ${userName}`

let list: number[] = [1, 2, 3]
let list1: Array<number> = [1, 2, 3]

let httpResponse: [number, string] = [200, 'success']
httpResponse[0] = 400

enum Color {
    red = 1, green
}
let color: Color = Color.green
console.log(color);

let notSure: any = 4
notSure = false
notSure = 'value'
// 与any类似，但是Object类型的变量只是允许赋值，但是不能够调用任意方法
let obj: Object = 4
let anyValueList: any[] = [1, '2', false]

// void 主要是函数返回
function test(params: number): void {
    console.log(params);
}

let unusable: void = undefined;

/**
 * Object 它是一个通用类型，可以被赋予任何类型的值
 * objetc 表示该类型接受所有引用类型，即非基本类型，也就是说除了 string、number、boolean 、undefined和 null类型外，都可以赋值给他。
 */
function create(a: Object): void {
    console.log(a);
}
create({ argu: 1 })

// 类型断言（类型转换）
let someValue: any = '我是一个字符串'
let strLen: number = (someValue as string).length
let strLen1: number = (<string>someValue).length



















