(function($) {

	function getElementsByClass(matchClass) {
		var matchElements = [];
	
		var elems = document.getElementsByTagName('*'), i;
		for (i in elems) {
			if((' ' + elems[i].className + ' ').indexOf(' ' + matchClass + ' ') > -1) {
				matchElements.push(elems[i]);
			}
		}
		
		return matchElements;
	}
	
	function remove(arr) {
		for (i in arr) {
			var elems = getElementsByClass(arr[i]), i;

			for (i in elems) {
				elems[i].parentNode.removeChild(elems[i]);
			}
		}
	}
	
	remove(["fb-like",
			"fb-share-button",
			"fb-send",
			"fb-post",
			"fb-follow",
			"fb-comments",
			"fb-activity",
			"fb-recomendations",
			"fb-recomendations-bar",
			"fb-like-box",
			"fb-facepile"]);

})(window);
