/**
 *  函数
 */
function fc0(a: number) {

}

let fc1 = function test(params: number) {

}

let fc2 = function (params: number): string {
    return '11'
}

let fc3 = (params: number): void => {

}

/**
 *  可选参数和默认参数
 *  可选参数必须在必填参数后面，
 */
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");
let result3 = buildName("Bob", "Adams");

// 参数默认值
function buildName1(firstName: string, lastName: string = 'jason') {
    return firstName + " " + lastName;
}

// 剩余参数
function buildName2(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

/**
 *  this的使用
 */
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}


let cardPicker = deck.createCardPicker();
// 独立调用cardPicker() this视为window，any类型
let pickedCard = cardPicker();

// 修改为 箭头函数,箭头函数能保存函数创建时的this值，而不是调用时的值：
let deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // 箭头函数
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            console.log(this);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker1();

/**
 *  this再回调函数中
 */
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickBad = (e: string) => {
        this.info = e;
    }
}
let h = new Handler();
