// ==UserScript==
// @name              romneyRemove
// @description    A script to remove romney from your feed.
// @author            Blake Kizer
// @include           http://*.facebook.com/*
// @include           https://*.facebook.com/*
// @match             http://*.facebook.com/*
// @match             https://*.facebook.com/*
// @exclude          http://*.facebook.com/ajax/*
// @exclude          https://*.facebook.com/ajax/*
// @exclude          http://*.facebook.com/connect/*
// @exclude          https://*.facebook.com/connect/*
// @version          1.0
// ==/UserScript==

function romneyRemove(){
	var posts = document.getElementsByClassName("uiStreamMessage");
	
	for(var i=0; i<posts.length; i++){
		if(posts[i].innerHTML.toLowerCase().indexOf("romney") != -1)
		{ 
			posts[i].parentNode.removeChild(posts[i])};
		}
	}
}

if (addEventListener in document) { 
	document.addEventListener('load', romneyRemove(), false);
} else { 
	 document.onload = romneyRemove();
}
