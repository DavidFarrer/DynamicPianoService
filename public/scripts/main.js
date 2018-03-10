var navbar = document.querySelector(".navbar-fixed-top");
var logo = document.querySelector("#logo");
var toggle = document.querySelector(".navbar-toggle");
var collapse = document.querySelector(".navbar-collapse");
var navbarLinks = document.querySelectorAll(".navbar-link");

function navbarSwitcher(el) {
	var logo = document.querySelector("#logo");

	var FIX = "fix";
	var FLOW = "flow";
	var fixTop = "fix-top";
	var scrolling = false;

	var theme;

	var sources = {
		fix: "./public/images/small-logo.png",
		flow: "./public/images/logo-large1.png"
	};

	//Preload secondary image for faster rendering on first showing
	var preloadImage = new Image();
	preloadImage.src = sources.fix;

	var scroll_handler = function() {
		console.log("scrolling");
		return setTimeout(function() {
			if (scrolling) return;
			scrolling = true;
			var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
			var new_theme = scrollTop > 20 ? FIX : FLOW;

			if (new_theme === theme) {
				scrolling = false;
				return;
			}

			logo.src = sources[new_theme];
			if (new_theme === FIX) {
				el.classList.add(fixTop);
			} else {
				el.classList.remove(fixTop);
			}

			theme = new_theme;
			scrolling = false;
		});
	}
	window.addEventListener("scroll", scroll_handler);
	window.addEventListener("load", scroll_handler);
}

// Toggle if navbar menu is open or closed
function toggleMenu() {
    collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
}

function closeMenusOnResize() {
    if (document.body.clientWidth >= 768) {
        collapse.classList.add("collapse");
        collapse.classList.remove("in");
    }
}

navbarLinks.forEach(function(navbarLink) {
	navbarLink.addEventListener("click", function(e) {
		if (collapse.classList.contains("in")) {
			toggleMenu();
		}
	});
});
window.addEventListener('resize', closeMenusOnResize, false);
toggle.addEventListener('click', toggleMenu, false);
navbarSwitcher(navbar);