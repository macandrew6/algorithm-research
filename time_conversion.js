/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour 
clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Output format:

Convert and print given time in 24 hour format, where 00 <= hh <= 23

Sample Input:

07:05:45PM

Sample Output:

19:05:45
*/

function timeConversion(s) {
  let convertedTime = '';
  
  let timeArr = s.slice(0,8).split(':');
  if (s.slice(8) === 'PM') {
    if (timeArr[0] === '12') {
      convertedTime = '12';
    } else {
      convertedTime += (parseInt(timeArr[0]) + 12).toString();
    }
  } else {
    if (timeArr[0] === '12') {
      convertedTime += '00';
    } else {
      convertedTime += timeArr[0];
    }
  }
  for (let i = 1; i < timeArr.length; i++) {
    convertedTime += `:${timeArr[i]}`;
  }

  return convertedTime;
}

console.log(timeConversion('12:45:54PM'));