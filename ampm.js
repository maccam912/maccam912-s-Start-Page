function ampm()
{
var h = new Date().getHours();
var ampm = "am";
if (h > 11) {
ampm = "pm";
}
$("#ampm").html(ampm);
}
t=setTimeout(function(){ampm()},500);