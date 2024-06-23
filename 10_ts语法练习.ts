
// boolean类型
let isDone : boolean = false;

// number类型
let count: number = 100
let double: number = 12.12;

// 字符串类型
let str: string = "12";
str = "jason";

// 数组
let arr: number[] = [1,2];
let arr1: Array<number> = [1,2];

// 元组
let trup:[string,number] = ["code",200]
trup = ["age",20];

// 枚举
enum Color{
    red,blue,green
}
let c: Color = Color.blue

// Unknown类型
let notSure: unknown = 23
notSure = "shaozj"

// undefined 和 null
let u: undefined = undefined
let n: null = null

// 联合类型
let myFavoriteNumber: string|number;
myFavoriteNumber = 12
myFavoriteNumber = "name"

// 函数
function test(){
    console.log("11");
}
function test1():void{
    console.log("22");
}
function test2():number{
    return 12;
}

// 匿名函数
let fun = function(x:number,y:number): number{
    return x+ y;
}
fun(1,2);

//可选参数
function buildName(firstName: string,lastName?: string){
    if(lastName)
    {
        return firstName + lastName;
    }
    return firstName;
}
buildName("j",)
buildName("shao","zejun")

// 剩余参数
function getEmployeeName(firstName: string,...reseOfName:string[]){
    return firstName+reseOfName.join("and");
}
let employeeName = getEmployeeName("shao","jason","tim")


// 箭头函数
let arrowFunc = (argumen:number) =>{
    if (argumen >0) {
        return "正数"
    }else if(argumen == 0){
        return "0"
    }else{
        return "负数"
    }
}

console.log(arrowFunc(2));

console.info("log 日志输出")

// 类
export class Person {
    private name: string;
    private age: number;
    constructor(name: string,age:number) {
        this.name = name
        this.age = age
    }
}