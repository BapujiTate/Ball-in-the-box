var canvas = document.querySelector("#canvas");
canvas.width = document.querySelector('canvas').clientWidth;
canvas.height = document.querySelector('canvas').clientHeight;

var c = canvas.getContext('2d');

var radius = 30
var x = Math.random() * (canvas.width - radius * 2) + radius;
var y = Math.random() * (canvas.height - radius * 2) + radius;
var dx = 3;
var dy = 3;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.lineWidth = 5;
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2, false);
  c.strokeStyle = "#2B2B2B";
  c.stroke();

  if (x + radius > canvas.width || x - radius < 0) {
    dx = -dx;
  }
  if (y + radius > canvas.height || y - radius < 0) {
    dy = -dy;
  }
  x += dx;
  y += dy;
}
animate();
