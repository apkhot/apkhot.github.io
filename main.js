// window.addEventListener("scroll", reveal);

// function reveal() {
//   let reveals = document.querySelectorAll(".reveal");

//   for (let i = 0; i < reveals.length; i++) {
//     let windowHeight = window.innerHeight;
//     let revealTop = reveals[i].getBoundingClientRect().top;
//     let revealPoint = 150;

//     if (revealTop < windowHeight - revealPoint)
//       reveals[i].classList.add("activate");
//     else reveals[i].classList.remove("activate");
//   }
// }

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));

window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("menubar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
