chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		//alert("No google");
		//document.getElementById("program-nav").innerHTML += '<p>TESTING!!</p>';
		// ----------------------------------------------------------

	}
	}, 10);
});