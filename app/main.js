const hamburgerIcon = document.querySelector(".hamburger-icon");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("open");
  document.body.classList.toggle("mobile-overflow");
});
