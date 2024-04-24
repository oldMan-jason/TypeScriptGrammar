/**
 *  泛型函数定义
 */
function identity<T>(arg: T): T {
    return arg;
}

/**
 *  泛型参数
 */
function identity1<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity1;

/**
 *  泛型类，再类名后<T>
 */
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };