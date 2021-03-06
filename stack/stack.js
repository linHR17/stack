"use strict";

/*
 *author: 林登锋
 *2016.8.18
 *栈的实现类
 */

function Stack() {
    this.dataStore = [];
    this.top = 0;
}

//压入栈方法
Stack.prototype.push = function(element) {
    this.dataStore[this.top++] = element;
}

//出栈方法
//栈顶的元素删除
//top-1
//将栈顶元素返回给调用者
Stack.prototype.pop = function() {
    if(this.top==0) {
        return undefined;
    }
    var lastItem = this.dataStore.pop();
    this.top--;
    return lastItem;
}

Stack.prototype.toString = function() {
    if(this.top==0) {
        return "此栈为空";
    }
    return this.dataStore.join("|");
}

//查看栈顶元素方法
Stack.prototype.peek = function() {
    return this.dataStore[this.top-1];
}

//返回栈内元素数量
Stack.prototype.length = function() {
    return this.top;
}

//清空栈
Stack.prototype.clear = function() {
    this.top = 0;
    this.dataStore.length = 0;
}

var mr = new Stack();
mr.push("牛A");
mr.push("牛B");
mr.push("牛C");
mr.push("牛D");
console.log(mr.toString());
mr.pop();
console.log(mr.toString());
console.log(mr.top);
mr.pop();
mr.pop();
mr.pop();
console.log(mr.pop());
console.log(mr.toString());
console.log(mr.top);
mr.push("宋喆");
console.log(mr.peek());
console.log(mr.length());
console.log(mr.clear());
