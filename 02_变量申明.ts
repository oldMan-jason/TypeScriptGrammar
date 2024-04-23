
/***
 * var声明以及函数中变量的作用域规则
 * var声明时，它不在乎你声明多少次；你只会得到1个。
 */
var a = 10

// 函数内部定义var变量
function test() {
    var code = 12
    return code;
}

function test1() {
    var a = 10
    return function test11() {
        var b = a + 10;
        return b
    }
}

// 里层的for循环会覆盖变量i，因为所有i都引用相同的函数作用域内的变量
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        console.log(`外i == ${i}`);
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            console.log(`内i == ${i}`);
            sum += currentRow[i];
            console.log(`sum -- ${sum}`);
        }
    }
    return sum;
}

let testarr: number[][] = [[1, 2], [1, 2]]
console.log(sumMatrix(testarr));

/**
 * let 块作用域
 * 它使用的是词法作用域或块作用域。 
 * 不同于使用 var声明的变量那样可以在包含它们的函数外访问，
 * 块作用域变量在包含它们的块或for循环之外是不能访问的。
 */

let b = 10

function f(input: boolean) {
    let a = 100;
    if (input) {
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    // return b;
}

/**
 *  const
 *  它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
 */
const maxLength = 10
const obj = {
    address: "测试地址",
    tel: 1000000
}
// obj = {}   error

// const变量的内部状态是可修改的
obj.address = 'test测试'
obj.tel = 20000

/**
 * 解构数组
 * 使用变量替换了索引取值
 */
let [first, second] = [1, 2]
console.log(first);

function test2([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}

/**
 *  对象解构
 */
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};

let fn: { a: string, b: number } = o;


type C = { a: string, b?: number }

function f1({ a, b }: C): void {
    // ...
}