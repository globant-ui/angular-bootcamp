/* Functions */

/* Minimum */
function min(n1, n2) {
  if (n1 < n2)
    return n1
  else
    return n2;
}

/* Recursion: Is Even */
function isEven(n) {
  if (n !== parseInt(n) || n === NaN)
    return 'n must be an integer'
  else if (n < 0)
    return isEven(-n)
  else if (n === 1)
    return false
  else if (n === 0)
    return true
  else
    return isEven(n - 2);
}

/* Bean counting */

/* Count Char */
function countChar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char)
      count++;
  }
  return count;

}

/* Count B's */
function countBs(string) {
  return countChar(string, 'B');
}