(function (win, doc) {
	var docEl = doc.documentElement,
		
		resizeEvt = 'orientation' in window ? 'orientation' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
		};
		if (!doc.addEventListener) return;
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false);
})(window, document);