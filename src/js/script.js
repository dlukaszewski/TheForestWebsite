const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerLogo = document.querySelector(".hamburger-logo");
const navMobile = document.querySelector(".nav-mobile");
const navLinkMobile = document.querySelectorAll(".nav__link-mobile");
const hamburgerBox = document.querySelector(".hamburger-box");
const allSections = document.querySelectorAll([
	".black-section",
	".white-section",
]);
const footerYear = document.querySelector(".footer__year");
const googleMap = document.getElementById("map");

const handleNav = () => {
	hamburgerBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	hamburgerBox.classList.toggle("hamburger-box--active");
	hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon.png");
	turnWhiteLogo();
	deleteAnimation();
	handleScroll();
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
		if (
			section.classList.contains("white-section") &&
			section.offsetTop <= currentSection + 30
		) {
			hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon.png");
			hamburgerBox.style.border = "1px solid black";
		} else if (
			section.classList.contains("black-section") &&
			section.offsetTop <= currentSection + 30
		) {
			hamburgerLogo.setAttribute("src", "dist/img/tree_nature_icon_white.png");
			hamburgerBox.style.border = "1px solid #fff";
		}
	});
};
const handleFooterYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
const initMap = () => {
	const calderaYellowStone = { lat: 44.413, lng: -110.723 };

	const map = new google.maps.Map(googleMap, {
		zoom: 12,
		center: calderaYellowStone,
	});
	const marker = new google.maps.Marker({
		position: calderaYellowStone,
		map: map,
	});
};

window.initMap = initMap;
hamburgerBtn.addEventListener("click", handleNav);
window.addEventListener("scroll", handleScroll);
handleFooterYear();
