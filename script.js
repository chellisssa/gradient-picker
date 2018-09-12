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
var radial = document.querySelector(".radial");
var body = document.querySelector("body");
var radialCode = document.querySelector(".radial-code");
var linearCode = document.querySelector(".linear-code");

// DEFAULT VALUES
document.getElementById("colorStart").innerHTML = "#ff80ff";
document.getElementById("colorStartRad").innerHTML = "#ff80ff";
document.getElementById("colorEnd").innerHTML = "#ffff80";
document.getElementById("colorEndRad").innerHTML = "#ffff80";
document.getElementById("direction").innerHTML = "to top right";


function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  if (`--${this.name}` === '--colorStart') {
    document.getElementById("colorStart").textContent = this.value;
    document.getElementById("colorStartRad").textContent = this.value;
  } else if (`--${this.name}` === '--colorEnd') {
    document.getElementById("colorEnd").textContent = this.value;
    document.getElementById("colorEndRad").textContent = this.value;
  }
}

function directionUpdate() {
  body.classList.remove("radial-grad");
  linearCode.classList.remove("visually-hidden");
  radialCode.classList.add("visually-hidden");
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  document.getElementById("direction").textContent = this.value;
}

radial.addEventListener("click", function() {
  body.classList.add("radial-grad");
  linearCode.classList.add("visually-hidden");
  radialCode.classList.remove("visually-hidden");
})

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
