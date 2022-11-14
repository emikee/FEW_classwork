var app = {
    nytArticles: [],

    initialize: function() {
        app.getNYTData();
    },
    
    makeHTML: function() {
        var theHTML = '';
        for (var i = 0; i < app.nytArticles.length; i++) {
            theHTML += "<div class = 'nytArticle'>";
            theHTML += "<div class = 'articleImage'>";
            theHTML += "<img src='" + app.nytArticles[i].multimedia[0].url + "'/>"
            theHTML += "</div>";
            theHTML += "<div class = 'text'>"
            theHTML += '<h3>' + app.nytArticles[i].title + '</h3>';
            theHTML += '<p>' + app.nytArticles[i].published_date + '</p>';
            theHTML += '</div></div>'
        }
        $('.container').html(theHTML);
    },

    getNYTData: function() {
        console.log("get ny times data");
        var currentSearchWord = 'food';
        var nytURL = `https://api.nytimes.com/svc/topstories/v2/${currentSearchWord}.json?api-key=`;
        var myKey = 'HFZgjvv6ZCeGF2rUqaw8CcLACNS3oGIs';
        var nytReqURL = nytURL + myKey;
        console.log(nytReqURL);
        fetch(nytReqURL)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                app.nytArticles = data.results;
                app.makeHTML();
            })
            .catch(error => console.log(error));
    }
}