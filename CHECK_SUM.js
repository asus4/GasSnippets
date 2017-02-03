/**
* Simple Check sum
* @param {Array} arguments - 1D Array ex [A0:A6]
* @return {Number} checksum
*/
function CHECK_SUM() {
  var arr = arguments[0].map(function(v){return v[0]});
  var sum = arr.reduce(function(a, b){ return a + b});
  return sum & 0xff;
}