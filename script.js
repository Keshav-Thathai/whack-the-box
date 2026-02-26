let score = 0;
let timeLeft = 30;

let box = document.createElement("div");
box.className = "box";
document.getElementById("gameArea").appendChild(box);

function moveBox() {
  let x = Math.random() * 250;
  let y = Math.random() * 250;
  box.style.left = x + "px";
  box.style.top = y + "px";
}

box.onclick = function () {
  score++;
  document.getElementById("score").innerText = score;

  document.getElementById("hitSound").currentTime = 0;
  document.getElementById("hitSound").play();

  moveBox();
};

function startGame() {
  moveBox();

  let timer = setInterval(function () {
    timeLeft--;
    document.getElementById("time").innerText = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert("Game Over! Score: " + score);
    }
  }, 1000);
}


