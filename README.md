# callee

retrieve calling function/method information (tiny wrapper for callsite)

# usage

`callee()` returns the `CallSite` Object of the calling function.

`callee(2)` returns the `CallSite` Object of the calling function of the calling function.

... you get the idea:

```js
const callee = require('callee')

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
```

prints out: 

```sh
a null
b a
c a
d c
```

# CallSite methods

see: https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/callsite/index.d.ts

```ts
  getThis(): any;
  getTypeName(): string;
  getFunctionName(): string;
  getMethodName(): string;
  getFileName(): string;
  getLineNumber(): number;
  getColumnNumber(): number;
  getFunction(): Function;
  getEvalOrigin(): string;
  isNative(): boolean;
  isToplevel(): boolean;
  isEval(): boolean;
  isConstructor(): boolean;
```

# dependencies

single dependency: [callsite](https://github.com/tj/callsite)

# license

MIT