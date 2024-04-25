/**
 *  导出声明
 */
export interface StringValidator {
    isAcceptable(s: string): boolean
}

// 常量导出
export const numberRegexp = /^[0-9]+$/;


export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// default 导出只有一个 导出类
export default class ZipCodeValidator1 {
    static numberRegexp = /^[0-9]+$/;
    isAcceptable(s: string) {
        return s.length === 5 && ZipCodeValidator1.numberRegexp.test(s);
    }
}

// 函数导出
export function testFc(params: number) {

}

/**
 *  export = 
 *  export =语法定义一个模块的导出对象。 这里的对象一词指的是类，接口，命名空间，函数或枚举。
 *  若使用export =导出一个模块，则必须使用TypeScript的特定语法import module = require("module")来导入此模块。
 */


/**
 *  命名空间
 *  nameSpace
 */
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}


namespace Validation {
    const lettersRegexp = /^[A-Za-z]+$/;
    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }
}


namespace Validation {
    const numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

let strings = ["Hello", "98052", "101"];


let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${s}" - ${validators[name].isAcceptable(s) ? "matches" : "does not match"} ${name}`);
    }
}