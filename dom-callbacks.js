const blueDiv = document.getElementById("blueDiv");
const redDiv = document.getElementById("redDiv");

const colores = ["red", "blue", "green", "lime", "yellow", "lightcoral", "lightblue"];

const changeColor = (element, color) => {
    console.log("Hola")
  element.style.backgroundColor = color;
};

blueDiv.addEventListener("click", () =>
  changeColor(blueDiv, colores[Math.floor(Math.random() * colores.length)])
);

redDiv.addEventListener("click", () => changeColor(blueDiv, colores[Math.floor(Math.random() * colores.length)]))
