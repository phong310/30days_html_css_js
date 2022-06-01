var modal = document.querySelector('.modal');
var btnOpen = document.querySelector('.open-modal-btn');
var iconClose = document.querySelector('.modal__header i');
var btnClose = document.querySelector('.close');

function modalToggle(e) {
    modal.classList.toggle('hide');
}
btnOpen.addEventListener('click', modalToggle)
btnClose.addEventListener('click', modalToggle)
iconClose.addEventListener('click', modalToggle)
modal.addEventListener('click', function(e) {
    if (e.target == e.currentTarget) {
        modalToggle();
    }
})