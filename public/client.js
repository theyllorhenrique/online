const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const player = {
  x: 100,
  y: 100,
  size: 30,
  color: "blue"
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

setInterval(draw, 1000 / 60);