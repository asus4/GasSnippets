/**
* Convert Date to Unix Time
* @param {DateTiem} arguments - DateTime object
* @return {Number} unixtime
*/
function DATE2UNIXTIME() {
  var dt = arguments[0];
  var unixtime = Math.floor(dt.getTime() / 1000);
  return unixtime;
}