const callee = require('./index')

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
}

a()