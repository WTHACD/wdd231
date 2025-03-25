document.addEventListener("DOMContentLoaded", () => {
	const menuBtn = document.getElementById("menuBtn");
	const mainNav = document.getElementById("mainNav");
	
	menuBtn.addEventListener("click", () => {
	  mainNav.classList.toggle("nav-open");
	});
  });
  