const callsite = require('callsite')

module.exports = function(stack) {
  if (typeof stack === 'undefined') stack = 1
  return callsite()[Math.abs(stack + 1)]
}