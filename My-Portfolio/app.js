const navbar = document.getElementById("nav-links");
const bar = document.getElementById("bar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    console.log("clicked navbar");
    navbar.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    console.log("navbar closed");
    navbar.classList.remove("active");
  });
}
