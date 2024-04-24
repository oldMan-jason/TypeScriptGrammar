/**
 *  枚举
 */

// 数字枚举
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

// 字符串枚举
enum Direction {
    Up_Str = "UP",
    Down_Str = "DOWN",
    Left_Str = "LEFT",
    Right_Str = "RIGHT",
}

// const 枚举
const enum Enum1 {
    A = 1,
    B = A * 2
}

/**
 *  枚举的反向映射
 */
enum Enum2 {
    A
}
let a = Enum2.A;
let nameOfA = Enum2[a]; // "A"

/**
 *  外部枚举
 */
declare enum Enum3 {
    A = 1,
    B,
    C = 2
}