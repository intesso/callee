const callee = require('./index')

// functions
function a() {
  console.log('a', callee().getFunctionName())
  b()
}

function b() {
  console.log('b', callee().getFunctionName())
  c()
}

let c = () => {
  console.log('c', callee(2).getFunctionName())
  d()
}

let d = () => {
  console.log('d', callee().getFunctionName())
  let es6Class = new ES6Class()
  es6Class.c()
  console.log('search', callee('a').getRelativeFileName(), callee('a').getFunctionName(), callee('a').getLineNumber())
  console.log('cache', callee('c', true).getRelativeFileName(),  callee('c', true).getFunctionName(), callee('c', true).getLineNumber(), callee('c', true).getColumnNumber())
  console.log('search after cache', callee('a').getRelativeFileName(), callee('a').getFunctionName(), callee('a').getLineNumber())
}

// ES6 Class definition
class ES6Class {
  constructor() {
  }

  print() {
    console.log('----')
    console.log('this type', callee(0).getTypeName())
    console.log('this function', callee(0).getFunctionName())
    console.log('this method', callee(0).getMethodName())
    console.log('this file', callee(0).getFileName())
  }
  c() {
    console.log('----')
    console.log('this type', callee().getTypeName())
    console.log('this function', callee().getFunctionName())
    console.log('this method', callee().getMethodName())
    console.log('this file', callee().getFileName())
  }
  callSomething() {
    this.myClass = new MyClass()
    this.myClass.c()
  }
}

// Constructor Function
function MyClass() {
  if (!(this instanceof MyClass)) return new MyClass()
}

MyClass.prototype.print = function p() {
  console.log('----')
  console.log('this type', callee(0).getTypeName())
  console.log('this function', callee(0).getFunctionName())
  console.log('this method', callee(0).getMethodName())
  console.log('this file', callee(0).getFileName())
}
MyClass.prototype.c = function c() {
  console.log('----')
  console.log('this type', callee().getTypeName())
  console.log('this function', callee().getFunctionName())
  console.log('this method', callee().getMethodName())
  console.log('this file', callee().getFileName())
}
MyClass.prototype.callSomething = function s() {
  this.es6Class = new ES6Class()
  this.es6Class.c()
}

// call ES6 classes
new ES6Class().print()
new ES6Class().callSomething()

// call constructor function
MyClass().print()
MyClass().callSomething()

console.log('---')
console.log('type', callee(0).getTypeName(), callee(0).getTypeName() === 'Object')
console.log('function', callee(0).getFunctionName())
console.log('method', callee(0).getMethodName())
console.log('filename', callee(0).getRelativeFileName())
console.log('line', callee(0).getLineNumber())
console.log('column', callee(0).getColumnNumber())

// call functions
a()

console.log('---')
