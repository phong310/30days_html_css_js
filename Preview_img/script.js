var upload = document.querySelector('#mypicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('change', function(e) {

    // files[0] lấy các thuộc tính của ảnh 
    var file = upload.files[0];

    if(!file)
        return;

    // Check file ảnh có đuôi là jpg
    if(!file.name.endsWith('.jpg')){
        error.innerHTML = `Không phải định dạng JPG !`;
        return;
    } else {
        error.innerHTML =``;
    }

    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
})