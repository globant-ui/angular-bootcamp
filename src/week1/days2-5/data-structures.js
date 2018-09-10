/* Data structures */

/* Sum & range */
function sum(array) {
  let result = 0;
  for (let i of array) {
    result += i;
  }
  return result;
}

function range(start, end, step = start < end ? 1 : -1) {
  let array = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

/* Reverse array */
function reverseArray(array) {
  let toReturn = [];
  for (let i = array.length - 1; i >= 0; i--) {
    toReturn.push(array[i]);
  }
  return toReturn;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let aux = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = aux;
  }
  return array;
}

/* List */
function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  let node = list;
  while (node != null) {
    array.push(node.value);
    node = node.rest;
  }
  return array;
}

function nth(list, n) {
  if (n == 0) return list.value;
  else if (!list) return undefined;
  else return nth(list.rest, n - 1);
}

function prepend(value, list) {
  return { value, rest: list };
}

/* Deep comparison */
function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null || typeof a != Object || typeof b != Object) return false;

  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  if (keysA.length != keysB) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key]))
      return false;
  }

  return true;
}