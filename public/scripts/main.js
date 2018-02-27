var navbar = document.querySelector(".navbar-fixed-top");
var logo = document.querySelector("#logo");
var toggle = document.querySelector(".navbar-toggle");
var collapse = document.querySelector(".navbar-collapse");
var navbarLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("load", setNavStyle)
window.addEventListener("scroll", setNavStyle);

function setNavStyle(e) {
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if (scrollTop > 20 && !navbar.classList.contains("fix-top")) {
		navbar.classList.add("fix-top");
		logo.src = "./public/images/small-logo.png";
	} else if (scrollTop < 20 && navbar.classList.contains("fix-top")) {
		navbar.classList.remove("fix-top");
		logo.src = "./public/images/logo-large1.png";
	}
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