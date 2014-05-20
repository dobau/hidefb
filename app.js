(function($) {

	function getElementsByClassOrTag(name) {
		var matchElements = [];
	
		var elems = document.getElementsByTagName('*'), i;
		for (i in elems) {
			var el = elems[i];
		
			if (
				el.tagName == 'fb:' + name 
				|| (' ' + el.className + ' ').indexOf(' fb-' + name + ' ') > -1
			) {
				matchElements.push(el);
			}
		}
		
		return matchElements;
	}
	
	function remove(arr) {
		for (i in arr) {
			var elems = getElementsByClassOrTag(arr[i]), i;

			for (i in elems) {
				elems[i].parentNode.removeChild(elems[i]);
			}
		}
	}
	
	remove(["like",
			"share-button",
			"send",
			"post",
			"follow",
			"comments",
			"activity",
			"recomendations",
			"recomendations-bar",
			"like-box",
			"facepile"]);

})(window);
