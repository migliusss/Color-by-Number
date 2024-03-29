/**
 * This script is used to show the selected image when the user selects an image from the dropdown.
 */
document.addEventListener("DOMContentLoaded", function () {
  // Get the button and add a click event listener.
  document
    .getElementById("show-image-button")
    .addEventListener("click", function (event) {
      event.preventDefault();

      const imageSelect = document.getElementById("image-select");
      const selectedValue = imageSelect.value;

      // If no picture is selected (value is ""), do nothing.
      if (selectedValue === "") {
        return;
      }

      // Show the selected image.
      const selectedPicture = document.getElementById(
        "section-color-" + selectedValue
      );
      if (selectedPicture) {
        selectedPicture.style.display = "flex";
        selectedPicture.style.justifyContent = "center";
        selectedPicture.style.alignItems = "center";
        selectedPicture.style.flexDirection = "column";
        selectedPicture.style.height = "100vh";

        selectedPicture.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
});

/**
 * This script is used to color the rectangles when the user clicks on them.
 */
const rainbowGridLayout = [
  [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1, 0, 0, 0],
  [0, 0, 1, 2, 3, 3, 4, 4, 4, 4, 4, 4, 3, 3, 2, 1, 0, 0],
  [0, 1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 5, 4, 3, 3, 2, 1, 0],
  [0, 1, 2, 3, 4, 5, 6, 7, 7, 7, 7, 6, 5, 4, 3, 2, 1, 0],
  [1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 7, 6, 5, 4, 3, 2, 1],
  [1, 2, 3, 4, 6, 7, 8, 8, 1, 1, 8, 8, 7, 6, 4, 3, 2, 1],
  [1, 2, 3, 4, 6, 7, 8, 1, 0, 0, 1, 8, 7, 6, 4, 3, 2, 1],
  [1, 2, 3, 4, 6, 7, 8, 1, 0, 0, 1, 8, 7, 6, 4, 3, 2, 1],
  [1, 2, 3, 4, 6, 7, 8, 1, 0, 0, 1, 8, 7, 6, 4, 3, 2, 1],
  [1, 2, 3, 4, 6, 7, 8, 1, 0, 0, 1, 8, 7, 6, 4, 3, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
];

const rainbowColorPalette = {
  1: "#242235",
  2: "#c5291f",
  3: "#de6a2c",
  4: "#e8a43b",
  5: "#f4da51",
  6: "#87fb6d",
  7: "#5aa8f2",
  8: "#713bef",
};

document.addEventListener("DOMContentLoaded", function () {
  let selectedNumber = null;

  function clearHighlights() {
    document.querySelectorAll(".rectangle.highlighted").forEach((rect) => {
      rect.classList.remove("highlighted");
    });
  }

  document.querySelectorAll("#palette-container button").forEach((button) => {
    button.addEventListener("click", function () {
      selectedNumber = this.dataset.colorNumber;
      clearHighlights();

      document.querySelectorAll("#palette-container button").forEach((btn) => {
        btn.style.opacity =
          btn.dataset.colorNumber === selectedNumber ? "1" : "0.5";
      });

      document.querySelectorAll(".rectangle").forEach((rect) => {
        if (
          rect.dataset.number === selectedNumber &&
          !rect.classList.contains("colored")
        ) {
          rect.classList.add("highlighted");
        }
      });
    });
  });

  // Set up the grid based on the rainbowGridLayout array.
  const grid = document.getElementById("grid");

  rainbowGridLayout.forEach((row, rowIndex) => {
    row.forEach((number, columnIndex) => {
      const rect = document.createElement("div");
      rect.classList.add("rectangle");
      rect.textContent = number;

      if (number !== 0) {
        rect.dataset.number = number.toString();
        rect.addEventListener("click", function () {
          if (
            this.dataset.number === selectedNumber &&
            this.classList.contains("highlighted")
          ) {
            const colorToApply = rainbowColorPalette[this.dataset.number];
            this.style.backgroundColor = colorToApply;
            this.classList.add("colored");
            this.classList.remove("highlighted");
            this.textContent = "";
          }
        });
      } else {
        rect.classList.add("non-colorable");
        rect.textContent = "";
      }

      grid.appendChild(rect);
    });
  });
});
