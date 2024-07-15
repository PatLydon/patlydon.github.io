const kenguru = document.getElementById("kenguru");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
  jump();
});

function jump() {
  // kenguru.classList.add("jump" )
  if(kenguru.classList != "jump"){
    kenguru.classList.add("jump")
  }
  setTimeout(function () {
    kenguru.classList.remove("jump")
  }, 300)
}

let isAlive = setInterval (function () {
  let kenguruTop = parseInt(window.getComputedStyle(kenguru).getPropertyValue("top"));
  let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 150 && cactusLeft > 50 && kenguruTop >= 254){
  alert ("YOU SUCK!!")
    }
  
 })

// var user = ""

