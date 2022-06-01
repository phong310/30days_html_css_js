var ranger = document.querySelector(".ranger");
var process = document.querySelector(".process");
var value = document.querySelector(".process span");
var body = document.querySelector("body");

function updateProcess(percent) {
  process.style.width = `${percent}%`;
  value.innerHTML = `${percent}%`;
  body.style.background = `rgba(0,0,0, ${percent / 100})`;
}

ranger.addEventListener("mousemove", function (e) {
  var pageX = e.pageX;
  var offSetLeft = this.offsetLeft;
  var processWidth = pageX - offSetLeft;
  var percent = (processWidth / this.offsetWidth) * 100;
  percent = Math.round(percent);
  updateProcess(percent);
});
updateProcess(30);
