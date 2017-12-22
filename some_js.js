let getTime = milli => {
  let time = new Date(milli);
  let hours = time.getUTCHours();
  let minutes = time.getUTCMinutes();
  let seconds = time.getUTCSeconds();
  let milliseconds = time.getUTCMilliseconds();
  return hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
};
var newTime = getTime(1513900800000);
console.log(newTime);
