function stocks(s) {
    var stockarray = s.split("+");
    var stockstring = "";
    for (var i = 0; i < stockarray.length; i++) {
        stockstring += '"'+stockarray[i]+'",';
    }
    stockstring = stockstring.slice(0,-1);
var query = escape('select * from yahoo.finance.quotes where symbol in ('+stockstring+')');
var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=?";
$.getJSON(url, function(data) {
	console.log(data);
    $("#stocks").html("");
    for (var i = 0; i < data.query.count; i++) {
    var html = data.query.results.quote[i];
    var arrow = " ";
    var color = "#fff";
    if (parseFloat(html.Change) > 0) {
        arrow = "▲";
        color = "#00ff00";
    }
    if (parseFloat(html.Change) < 0) {
        arrow = "▼";
        color = "#ff0000";
    }
    $("#stocks").append('<div id="arrow" style="color: '+color+';">'+arrow+'</div><div id="quote">'+html.symbol+' '+html.BidRealtime+'</div>');
}
});
t=setTimeout(function(){stocks(s)},15000);
}
