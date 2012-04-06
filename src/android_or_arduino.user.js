// ==UserScript==
// @name           AndroidOrArduino
// @namespace      org.maripo.neta
// @include        *
// ==/UserScript==

(function () {
	var STRING_ARDUINO = 'あるどぅいーの';
	var STRING_ANDROID = 'あんどろいど';
	var crawlTree = function (node){
		for (var index = 0, length=node.childNodes.length; index<length; index++) {
			var item=node.childNodes[index];
			if ('\#text'==item.nodeName) {
				if (item.data) {
					item.data = item.data
						.replace(new RegExp('arduino','ig'),function (all, matched){return ''+all+'('+STRING_ARDUINO+')'})
						.replace(new RegExp('android','ig'),function (all, matched){return ''+all+'('+STRING_ANDROID+')'});
				} 
			} else  if ('TEXTAREA'!=item.nodeName && item.childNodes){
				crawlTree (item);
			}
		}
	};
	crawlTree (document.body);
})();