const callsite = require('callsite')
const path = require('path')
let cachedIndex = null
let cwd = process.cwd()
if (cwd.length > 1) cwd = cwd + '/'

module.exports = function (stack, cache) {
  if (typeof stack === 'undefined') stack = 1
  if (typeof stack === 'number') return wrap(callsite()[Math.abs(stack + 1)])
  return module.exports.search(stack, cache)
}

module.exports.search = function (search, cache) {
  if (typeof search === 'string') {
    if (typeof cachedIndex === 'number') return wrap(callsite()[cachedIndex])
    let result = callsite().find((stack, i) => {
      let found = stack.getTypeName() === search ||
        stack.getMethodName() === search ||
        stack.getFunctionName() === search ||
        stack.getFileName().split(path.sep).includes(search)
      if (found && cache) cachedIndex = i
      return found
    })
    if (result) return wrap(result)
  }
  return wrap(callsite()[0])
}

module.exports.invalidate = function () {
  cachedIndex = null
  return module.exports
}

function wrap(stack) {
  stack.getRelativeFileName = () => stack.getFileName().replace(cwd, '')
  return stack;
}