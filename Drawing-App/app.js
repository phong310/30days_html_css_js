var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var increase = document.querySelector('#increase')
var sizeEl = document.querySelector('#size')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


var currentPos = {
    x: 0,
    y: 0
}
var currentPosAfter = {
    x: 0,
    y: 0
}
var isDrawing = false
var colorPanit = ''

document.addEventListener('mousedown', function(e) {
    currentPos = {
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing = true
})
document.addEventListener('mousemove', function(e) {
   if(isDrawing) {
    currentPosAfter = {
        x: e.offsetX,
        y: e.offsetY
    }
    // Vẽ vòng tròn
    ctx.beginPath();
    ctx.arc(currentPos.x, currentPos.y, size, 0, 2 * Math.PI);
    ctx.fillStyle = colorPanit
    ctx.fill()


    // Các hàm vẽ outline
    ctx.beginPath();
    ctx.lineWidth = size * 2;
    ctx.moveTo(currentPos.x, currentPos.y);
    ctx.lineTo(currentPosAfter.x, currentPosAfter.y);
    // Chọn màu
    ctx.strokeStyle = colorPanit;
    ctx.stroke();

    currentPos.x = currentPosAfter.x;
    currentPos.y = currentPosAfter.y
   }
})
document.addEventListener('mouseup', function(e) {
    isDrawing = false
})

color.addEventListener('change', function(e) {
    colorPanit = e.target.value
})

eraser.addEventListener('click', function(e) {
    colorPanit = '#ffffff'
})

// Chỉnh size
var size = 5;

// init
sizeEl.innerText = size;

decrease.addEventListener('click', function() {
    size -= 5;
    size = size > 5 ? size : 5;
    sizeEl.innerText = size;
})
increase.addEventListener('click', function() {
    size += 5;
    size = size <  30 ? size : 30;
    sizeEl.innerText = size;
})

// Delete
clear.addEventListener('click', function() {
    var canvasStart = canvas.getClientRects()[0]
    ctx.clearRect(0, 0, canvasStart.width, canvasStart.height)
})

// Save
save.addEventListener('click', function() {
    var output = canvas.toDataURL('image/png');
    save.setAttribute('href', output);
})