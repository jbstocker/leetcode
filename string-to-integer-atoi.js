var myAtoi = function (str) {
  var result = str.match(/^\s*([-+]?\d+)/);
  if (!result) return 0;
  if (result[1] > 2147483647) return 2147483647;
  if (result[1] < -2147483648) return -2147483648;
  return parseInt(result[1]);
};

console.log(myAtoi('test value 4123 and more'));
