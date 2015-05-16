/*!
 * domready (c) Dustin Diaz 2014 - License MIT
 */
! function(e, t) {
	typeof module != "undefined" ? module.exports = t() : typeof define == "function" && typeof define.amd == "object" ? define(t) : this[e] = t()
}("domready", function() {
	var e = [],
		t, n = document,
		r = n.documentElement.doScroll,
		i = "DOMContentLoaded",
		s = (r ? /^loaded|^c/ : /^loaded|^i|^c/).test(n.readyState);
	return s || n.addEventListener(i, t = function() {
			n.removeEventListener(i, t), s = 1;
			while (t = e.shift()) t()
		}),
		function(t) {
			s ? t() : e.push(t)
		}
});

domready(function() {
	var navBtn = document.querySelector('#nav-toggle'),
		nav = document.querySelector('#nav'),
		navActive = false;

	navBtn.addEventListener('touchstart', function() {
		if (!navActive) {
			nav.setAttribute('class', 'mobile');
			document.querySelector('.body').style.left = '80%';
		} else {
			nav.removeAttribute('class');
			document.querySelector('.body').style.left = '0';
		}
	});
});