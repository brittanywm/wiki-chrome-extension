$(document).ready(function () {
  $(".no-result-found").hide();
  $("#btn").click(function () {
    //$(".no-result-found").hide();
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch="
    var searchInfo = "";
    searchInfo = $("#mySearch").val();
    //alert(searchInfo)
    $.getJSON(url + searchInfo)
      .done(function (data) {
        //console.log(data);
        var sendUrl = "https://en.wikipedia.org/wiki/";
        console.log(data.query.search["title"]);
        var linksHTML = "<div>";
        $.each(data.query.search, function (index, value) {
          linksHTML += "<a href='" + sendUrl + value.title.replace(/ /g, "_") + "'target='_blank'>" + "<br />" +"<span class='titleIncrease'>" +value.title +"</span>"+ "<br />" + "<p>" + value.snippet + "</p>" + "</a>";
          console.log("link title", value.title);
          console.log(value.snippet);
        });
        linksHTML += "</div>"
        console.log("links length", linksHTML.length);
        if (linksHTML.length < 12) {
          $(".no-result-found").show();
        } else {
          $(".no-result-found").hide()
        }
        $(".inner").html(linksHTML);
      })
      .fail(function (error) {
        console.log("Something went wrong");
      })
  })
});
