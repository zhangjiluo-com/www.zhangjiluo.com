# Promise

Promise 是一种管理异步操作的对象或者说解决方案，主要用于解决传统回调函数方式处理异步出现的回调地狱的问题，可以让异步代码逻辑同步化的方式处理。

Promise 有三种状态：`pending` `fulfilled` `rejected`，大体可以分成两类：已决然和未决。

Promise 的注册的回调会按照注册顺序异步执行。

Promise 如果 resolve 一个 thenable 对象（包括 Promise 对象），那么 Promise 的状态会使用 thenable 对象进行注册回调。

## Promises/A+ 规范

[Promises/A+ 规范](https://promisesaplus.com) 定义

## Promise 实现

[我的 Promise 实现](https://github.com/zhangjiluo-com/my-promise/)

## EcmaScript Promise

[EcmaScript Promise](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

相比 Promise/A+ 规范，EcmaScript Promise 中的 then 方法注册的回调函数会在放到微任务队列中执行
