const toggleButton = document.getElementById("toggle-theme");
const themeLink = document.getElementById("theme-style");

let isLight = true;

toggleButton.addEventListener("click", () => {
  if (isLight) {

    themeLink.href = "./src/css/dark-mode.css";
  } else {

    themeLink.href = "./src/css/style.css";
  }
  isLight = !isLight;
});
