"use script";

const numbersOfDrumButton = document.querySelectorAll(".drum").length;
const drum = document.querySelectorAll(".drum");

const getKey = function (e) {
  switch (e.target.textContent) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kickBase = new Audio("sounds/crash.mp3");
      kickBase.play();
      break;
    default:
      console.log(e.target.textContent);
  }
};

for (let i = 0; i < numbersOfDrumButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {
    // this.textCountent can be use in place of e.target
    getKey(e);
  });
}

document.addEventListener("keydown", (e) => {
  getKey(e);
});
