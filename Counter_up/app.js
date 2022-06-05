// var fb = document.querySelector('.facebook h3')
// var yt = document.querySelector('.youtube h3')
// var Ig = document.querySelector('.instagram h3')
var listCounter = document.querySelectorAll('.counter')

function count(el) {
    var numberEl = el.querySelector('.number');
    var to = parseInt(numberEl.innerText)
    var count = 0;
    var time = 200;
    var step = to / time;


    let counting = setInterval(() => {
        count+=step;
        if(count > to) {
            clearInterval(counting)
            numberEl.innerText = to;
        } else {
            numberEl.innerText = Math.round(count);
        }
    }, 1)
}

listCounter.forEach(item => {
    count(item)
})
// count(fb, 3300)
// count(yt, 1000)
// count(Ig, 9900)

 