function clock()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var day = today.getDay();
var dom = today.getDate();
var month = today.getMonth();
h = h%12;
m=checkTime(m);
h=checkTime(h);
if (h == 0) {
    h = 12;
}
$("#clock").html("");
$("#clock").html(h+":"+m);

var weekday = new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var months = new Array(12);
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

$("#date").html(weekday[day]+", "+months[month]+" "+dom);

t=setTimeout(function(){clock()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
