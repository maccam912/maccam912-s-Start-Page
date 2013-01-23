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

function twitter(str) {
    $("#twitter").html("");
    var arr = str.split("+");
    for (var i = 0; i < arr.length; i++) {
        tweet(arr[i]);
    }
    t=setTimeout(function(){twitter(user)},(3600000*arr.length)/200);
}

function tweet(user){
    var numTweets = 1;
    var url = 'http://api.twitter.com/1/statuses/user_timeline.json?callback=?&count='+numTweets+'&include_rts=1&include_entities=1&screen_name='+user;
    console.log(url);
    $.getJSON(url,function(data){
        $("#twitter").append('<div class="tweet">');
        $(".tweet").last().append('<div class="user">'+user+'</div>');
        for(var i = 0; i< data.length; i++){
            var tweet = data[i].text;
            var created = parseDate(data[i].created_at);
            var createdDate = created.getDate()+'-'+(created.getMonth()+1)+'-'+created.getFullYear()+' at '+created.getHours()+':'+created.getMinutes();
            tweet = tweet.parseURL().parseUsername().parseHashtag();
            $(".tweet").last().append('<div class="tweettext">'+tweet+'</div>');
            $("#twitter").append('</div>');
        }
    });
}
