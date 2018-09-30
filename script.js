var colorStart = document.querySelector("#start");
var colorEnd = document.querySelector("#end");
var output = document.querySelector(".output");
var radial = document.querySelector(".radial");
var body = document.querySelector("body");
var radialCode = document.querySelector(".radial-code");
var linearCode = document.querySelector(".linear-code");
var changeStart = document.querySelector(".change-start");
var changeEnd = document.querySelector(".change-end");

// DEFAULT VALUES
document.getElementById("colorStart").innerHTML = "#ff80ff";
document.getElementById("colorStartRad").innerHTML = "#ff80ff";
document.getElementById("colorEnd").innerHTML = "#ffff80";
document.getElementById("colorEndRad").innerHTML = "#ffff80";
changeStart.value = "#ff80ff";
changeEnd.value = "#ffff80";
document.getElementById("direction").innerHTML = "to top right";


function handleUpdate() {
  document.documentElement.style.setProperty(`--${this.name}`, this.value);
  if (`--${this.name}` === '--colorStart') {
    document.getElementById("colorStart").textContent = this.value;
    document.getElementById("colorStartRad").textContent = this.value;
<<<<<<< HEAD
    changeStart.value = this.value;
  } else if (`--${this.name}` === '--colorEnd') {
=======
  } 
  if (`--${this.name}` === '--colorEnd') {
>>>>>>> a1579db3d5fcbe19593eb6f0bb33115da2606b7d
    document.getElementById("colorEnd").textContent = this.value;
    document.getElementById("colorEndRad").textContent = this.value;
    changeEnd.value = this.value;
  }
}

function directionUpdate(value) {
  body.classList.remove("radial-grad");
  linearCode.classList.remove("visually-hidden");
  radialCode.classList.add("visually-hidden");
  document.documentElement.style.setProperty(`--direction`, value);
  document.getElementById("direction").textContent = value;
}

radial.addEventListener("click", function() {
  body.classList.add("radial-grad");
  linearCode.classList.add("visually-hidden");
  radialCode.classList.remove("visually-hidden");
})

colorStart.addEventListener('change', handleUpdate);
colorEnd.addEventListener('change', handleUpdate);
changeStart.addEventListener('change', handleUpdate);
changeEnd.addEventListener('change', handleUpdate)
