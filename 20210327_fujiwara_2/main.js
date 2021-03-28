const border = document.getElementById("border");
border.addEventListener("click", () => {
  const border = document.getElementById("border");
  border.classList.toggle("in");
  const nav = document.getElementById("nav");
  nav.classList.toggle("in");
});