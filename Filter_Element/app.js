var foodBtns = document.querySelectorAll('.food-menu button');
var foodList = document.querySelectorAll('.food-item');

foodBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const type = e.target.getAttribute('type-food');

        // Remove & Add active
        document.querySelector('.food-menu button.active').classList.remove('active');
        e.target.classList.add('active');

        foodList.forEach(item => {
            if(type === 'all' || item.getAttribute('type-food') == type) {
                item.classList.remove('hide')
            } else {
                item.classList.add('hide')
            }
        })
    })
})