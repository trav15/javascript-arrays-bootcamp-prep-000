var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

addElementToBeginningOfArray(chocolateBars, "m&ms")
console.log(chocolateBars)
destructivelyAddElementToBeginningOfArray(chocolateBars, "twix")
console.log(chocolateBars)