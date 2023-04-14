const navMobile = document.querySelector("nav.mobile .nav")
const hamburger = document.querySelector(".hamburger")
const hamburgerClose = document.querySelector(".hamburger-close")

hamburger.addEventListener("click", () => {
	navMobile.style.transform = "translateX(0%)"
})
hamburgerClose.addEventListener("click", () => {
	navMobile.style.transform = "translateX(100%)"
})

const heroImage = document.querySelector(".wrapper > .left")
const text = document.querySelector("#two")

heroImage.addEventListener("mouseenter", () => {
	console.log("hovered")
	text.innerText = "= Dessert!"
})

heroImage.addEventListener("mouseleave", () => {
	console.log("hovered")
	text.innerText = "Stressed? ->"
})
