alert("Welcome to GIT page!");

const container = document.getElementById("container");
const button = document.getElementById("changeColor");

const colors = ['#a43131', '#118c13ff'];
let currentColor = 0;

button.addEventListener("click", () => {
    currentColor = (currentColor + 1) % colors.length;
    container.style.backgroundColor = colors[currentColor];
});