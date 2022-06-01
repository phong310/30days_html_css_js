var btnSearch = document.querySelector('.search-box__btn');
btnSearch.addEventListener('click', function() {
  this.parentElement.classList.add('open');
  this.previousElementSibling.focus();
})