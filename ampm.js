function ampm() {
var h = new Date().getHours();
var ampmstr = "am";
if (h > 11) {
ampmstr = "pm";
}
$("#ampm").html("");
$("#ampm").html(ampmstr);
t=setTimeout(function() {ampm()},500);
}
