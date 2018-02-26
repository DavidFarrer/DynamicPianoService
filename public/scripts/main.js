var navbar = document.querySelector(".navbar-fixed-top");
var logo = document.querySelector("#logo");


window.addEventListener("scroll", function(e) {
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
	if (scrollTop > 20 && !navbar.classList.contains("fix-top")) {
		navbar.classList.add("fix-top");
		logo.src = "./public/images/small-logo.png";
	} else if (scrollTop < 20 && navbar.classList.contains("fix-top")) {
		navbar.classList.remove("fix-top");
		logo.src = "./public/images/logo-large1.png";
	}
});