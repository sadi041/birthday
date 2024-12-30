const playButton = document.getElementById("playButton");
const confettiCanvas = document.getElementById("confettiCanvas");
const confettiContext = confettiCanvas.getContext("2d");

let confetti = [];
const colors = ["#ff6f61", "#ffe066", "#6be585", "#6fc0ff", "#e66bff"];

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

function createConfettiPiece() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height,
    size: Math.random() * 5 + 5,
    color: colors[Math.floor(Math.random() * colors.length)],
    velocityX: Math.random() * 2 - 1,
    velocityY: Math.random() * 3 + 2,
  };
}

function drawConfetti() {
  confettiContext.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confetti.forEach((piece) => {
    confettiContext.fillStyle = piece.color;
    confettiContext.fillRect(piece.x, piece.y, piece.size, piece.size);
    piece.x += piece.velocityX;
    piece.y += piece.velocityY;

    if (piece.y > confettiCanvas.height) {
      piece.y = 0;
      piece.x = Math.random() * confettiCanvas.width;
    }
  });

  requestAnimationFrame(drawConfetti);
}

playButton.addEventListener("click", () => {
  if (confetti.length === 0) {
    for (let i = 0; i < 200; i++) {
      confetti.push(createConfettiPiece());
    }
  }
  drawConfetti();
});