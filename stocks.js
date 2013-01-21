function stocks() {
var query = escape('select * from yahoo.finance.quotes where symbol in ("AAPL")');
var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json&env=http%3A%2F%2Fdatatables.org%2Falltables.env&callback=?";
$.getJSON(url, function(data) {
	console.log(data);
    var html = data.query.results.quote;
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
    $("#stocks").html('<div id="arrow" style="color: '+color+';">'+arrow+'</div><div id="quote">AAPL '+html.BidRealtime+'</div>');
});
}
t=setTimeout(function(){stocks()},15000);
