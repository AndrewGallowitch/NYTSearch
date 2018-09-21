
// variable for input data

var apiKey = "3ace526835954f818a6959f9afab27b2";

// onclick function to run ajax
$("#searchButton").on("click", function (event) {

    event.preventDefault();
    $("#articleDump").empty();

    var searchName = $("#searchForm").val();
    var startYear = $("#searchStartYear").val();
    var endYear = $("#searchEndYear").val();
    var limit = $("#recordsRetrieved option:selected").val();

    console.log(searchName);
    console.log(startYear);
    console.log(endYear);
    console.log(limit);

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=" + searchName + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1230&api-key=" + apiKey + "&fq=" + limit;

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).then(function (data) {

        var result = data.response;
        console.log(result);
        for (i = 0; i < limit; i++) {
            var articleDump = $('#articleDump');

            var newDiv = $("<div class='container bg-dark rounded p-3'>");
            var title = $("<h3 class='text-light'>");
            var newSpan = $("<span class='badge badge-secondary mr-2'>");
            var newSmall = $("<small class='text-light'>");

            newSpan.text(i + 1);
            title.text(result.docs[i].headline.main);
            newSmall.text(result.docs[i].byline.original);

            title.prepend(newSpan);
            newDiv.append(title);
            newDiv.append(newSmall);

            articleDump.append(newDiv);
        };
    });
});
// for loop (function) containing user limit to enter in URL
// EMPTY DIV BEFORE RUNNING LOOP

