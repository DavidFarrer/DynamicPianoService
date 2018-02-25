var navbar = document.querySelector(".navbar-fixed-top");

alert("HI");

window.addEventListener("scroll", function(e) {
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if (scrollTop > 20) {
		navbar.classList.add("fix-top");
	} else {
		navbar.classList.remove("fix-top");
	}
});