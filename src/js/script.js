const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerLogo = document.querySelector(".hamburger-logo");
const navMobile = document.querySelector(".nav-mobile");
const navLinkMobile = document.querySelectorAll(".nav__link-mobile");
const hamburgerBox = document.querySelector(".hamburger-box");
const allSections = document.querySelectorAll([".black-section", ".white-section"]);

const handleNav = () => {
	hamburgerBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	hamburgerBox.classList.toggle("hamburger-box--active");
	hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon.png");
	deleteAnimation();
	turnWhiteLogo();
};

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

const handleScroll = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if (section.classList.contains("white-section") && section.offsetTop <= currentSection + 30) {
			hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon.png");
			hamburgerBox.style.border = "1px solid black";
		} else if (section.classList.contains("black-section") && section.offsetTop <= currentSection + 30){
			hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon_white.png");
			hamburgerBox.style.border = "1px solid #fff";
		}
	});
};
// const handleScroll = () => {
// 	const currentSection = window.scrollY;

// 	allWhiteSections.forEach(section => {
// 		if (
// 			section.classList.contains("white-section") &&
// 			section.offsetTop <= currentSection + 30
// 		) {
// 			hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon.png");
// 			hamburgerBox.style.border = "1px solid black";
// 		} else {
// 			// turnWhiteLogo();
// 			hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon_white.png");
// 			hamburgerBox.style.border = "1px solid #fff";
// 		}
// 	});
// };
// handleScroll();
hamburgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleScroll);
