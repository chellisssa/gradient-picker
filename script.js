var colorStart = document.querySelector("#start");
var colorEnd = document.querySelector("#end");
var toTop = document.querySelector(".top");
var toTopRight = document.querySelector(".top-right");
var toRight = document.querySelector(".right");
var toBottomRight = document.querySelector(".bottom-right");
var toBottom = document.querySelector(".bottom");
var toBottomLeft = document.querySelector(".bottom-left");
var toLeft = document.querySelector(".left");
var toTopLeft = document.querySelector(".top-left");
var output = document.querySelector(".output");

function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

function directionUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
}

colorStart.addEventListener('change', handleUpdate);
colorEnd.addEventListener('change', handleUpdate);

toTop.addEventListener("click", directionUpdate);
toTopRight.addEventListener("click", directionUpdate);
toRight.addEventListener("click", directionUpdate);
toBottomRight.addEventListener("click", directionUpdate);
toBottom.addEventListener("click", directionUpdate);
toBottomLeft.addEventListener("click", directionUpdate);
toLeft.addEventListener("click", directionUpdate);
toTopLeft.addEventListener("click", directionUpdate);
