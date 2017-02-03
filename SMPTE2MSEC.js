/**
* Convert Date to NTSC Time Code
* @param {DateTiem} arguments - DateTime object
* @return {Number} millisec
*/
function SMPTE2MSEC() {
  var date = arguments[0];

  // Date to timecode
  var min = date.getHours();
  var sec = date.getMinutes();
  var frame = date.getSeconds();
  
  // msec
  return Math.floor((min * 60 + sec + frame / 29.97) * 1000);
  
}