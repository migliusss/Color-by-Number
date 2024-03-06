let section = document.getElementById("section-color");
let display = 0;

function hideShow() {
  if (display === 1) {
    section.style.display = "flex";
    display = 0;
  } else {
    section.style.display = "none";
    display = 1;
  }
}
