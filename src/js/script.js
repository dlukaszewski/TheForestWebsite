const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerLogo = document.querySelector(".hamburger-logo");
const navMobile = document.querySelector(".nav-mobile");
const navLinkMobile = document.querySelectorAll(".nav__link-mobile");
const hamburgerBox = document.querySelector(".hamburger-box");

const handleNav = () => {
	hamburgerBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	hamburgerBox.classList.toggle("hamburger-box--active");
	hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon.png");
	deleteAnimation();
    turnWhiteLogo();
};
hamburgerBtn.addEventListener("click", handleNav);

const deleteAnimation = () => {
	navLinkMobile.forEach(item => {
		item.addEventListener("click", () => {
			hamburgerBtn.classList.remove("is-active");
			navMobile.classList.remove("nav-mobile--active");
			hamburgerBox.classList.remove("hamburger-box--active");
			hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon_white.png");
		});
	});
};
const turnWhiteLogo = () => {
	if (!hamburgerBtn.classList.contains("is-active")) {
		hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon_white.png");
	}
};
