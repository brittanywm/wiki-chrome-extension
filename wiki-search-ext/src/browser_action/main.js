$(document).ready(function () {
  $(".no-result-found").hide();
  $("#btn").click(function () {
    var url = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch="
    var searchInfo = "";
    searchInfo = $("#mySearch").val();
    
    $.getJSON(url + searchInfo)
      .done(function (data) {
        var sendUrl = "https://en.wikipedia.org/wiki/";
        var linksHTML = "<div>";
        $.each(data.query.search, function (index, value) {
          linksHTML += "<a href='" + sendUrl + value.title.replace(/ /g, "_") + "'target='_blank'>" + "<br />" +"<span class='titleIncrease'>" +value.title +"</span>"+ "<br />" + "<p>" + value.snippet + "</p>" + "</a>";
        });
        linksHTML += "</div>"
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
