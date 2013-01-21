//Twitter Parsers
String.prototype.parseURL = function() {
    return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
        return url.link(url);
    });
};
String.prototype.parseUsername = function() {
    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
        var username = u.replace("@","")
        return u.link("http://twitter.com/"+username);
    });
};
String.prototype.parseHashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace("#","%23")
        return t.link("http://search.twitter.com/search?q="+tag);
    });
};
function parseDate(str) {
    var v=str.split(' ');
    return new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
}

function twitterkstp(){
    var numTweets = 15;
    var url = 'http://api.twitter.com/1/statuses/user_timeline.json?callback=?&count='+numTweets+'&include_rts=1&include_entities=1&screen_name=KSTPbrk';
    console.log(url);
	$.getJSON(url,function(data){
    $("#twitter-feed-kstp").html('<div class="user">KSTPbrk</div>');
    for(var i = 0; i< data.length; i++){
            var tweet = data[i].text;
            var created = parseDate(data[i].created_at);
            var createdDate = created.getDate()+'-'+(created.getMonth()+1)+'-'+created.getFullYear()+' at '+created.getHours()+':'+created.getMinutes();
            tweet = tweet.parseURL().parseUsername().parseHashtag();
            $("#twitter-feed-kstp").append('<p>'+tweet+'</p><hr>');
        }
    });
}
t=setTimeout(function(){twitterkstp()},48000);
