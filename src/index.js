function readNow() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let firstbutton = document.querySelector(".first-button");
firstbutton.addEventListener("click", readNow);

function startReading() {
  let username = prompt("What is your username?");

  alert("Welcome " + username + " , enjoy reading !");
}
let startbutton = document.querySelector(".start-button");
startbutton.addEventListener("click", startReading);
