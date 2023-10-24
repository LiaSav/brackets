module.exports = function check(str, bracketsConfig) {
  const pairs = new Map(bracketsConfig);

  let arr = [];

  for (const char of str) {
    if (char === pairs.get(arr.at(-1))) {
      arr.pop();
    } else {
      arr.push(char);
    }
  }

  return arr.length === 0;
}
