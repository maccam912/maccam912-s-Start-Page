function weather() {
var query = escape('select item from weather.forecast where woeid="12781895"');
var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&callback=?";
$.getJSON(url, function(data) {
	var item = data.query.results.channel.item;
	console.log(data);
	var html = '<div class="weathercontainer" id="nowcontainer"><div id="nowlabel">Now</div><div id="nowcond"><img src="http://l.yimg.com/a/i/us/we/52/'+item.condition.code+'.gif"/>'+item.condition.text+'</div><div id="temp">'+item.condition.temp+'°</div></div>';
    html += '<div class="weathercontainer" id="tomorrowcontainer"><div id="tomorrowlabel">Tomorrow</div><div id="high">'+item.forecast[1].high+'°</div><div id="forecast">'+item.forecast[1].text+'</div><div id="low">'+item.forecast[1].low+'°</div></div>';
    $("#weather").html("");
    $("#weather").html(html);
});
t=setTimeout(function(){weather()},60000);
}
