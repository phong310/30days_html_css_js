var images = document.querySelectorAll('.images img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery__inner img');
var gallery = document.querySelector('.gallery');

var currentIndex = 0;

function ShowGallery() {
    // khi nhấn prev
    if (currentIndex == 0) {
        prev.classList.add('hide');
    } else {
        prev.classList.remove('hide');
    }

    // Khi nhấn next
    if (currentIndex == images.length - 1) {
        next.classList.add('hide');
    } else {
        next.classList.remove('hide');
    }

     // hiển thị ảnh
    galleryImg.src = images[currentIndex].src;
    gallery.classList.add('show')
}
// click vào ảnh
images.forEach((item, index) => {
    item.addEventListener('click', function() {
        currentIndex = index;
        ShowGallery();
    })
})

// đóng ảnh
close.addEventListener('click', function() {
    gallery.classList.remove('show')
})

// khi nhấn ESC
document.addEventListener('keydown', function(e) {
    if(e.keyCode == 27) {
        gallery.classList.remove('show')
    }
})

// Nút prev
prev.addEventListener('click', function() {
    if(currentIndex > 0) {
        currentIndex--;
        ShowGallery();
    }
})

// Nút next
next.addEventListener('click', function() {
    if(currentIndex < images.length - 1) {
        currentIndex++;
        ShowGallery();
    }
})