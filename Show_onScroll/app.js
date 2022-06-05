var animationElements = document.querySelectorAll('.show-on-scroll');

function toggleAnimationElementInWindow(element) {

    var rect = element.getClientRects()[0];
    // Lấy chiều cao màn hình
    var heightScreen = window.innerHeight
    
    // check element có bên trong màn hình hay ko?
    if(!(rect.bottom < 0 || rect.top > heightScreen)){
        // Bên trong thì vào đây
        element.classList.add('start')
    } else {
        // Ngoài thì vào đây
        element.classList.remove('start')
    }
}

function checkAnimation() {
    animationElements.forEach(el => {
        toggleAnimationElementInWindow(el)
    })
} 

window.onscroll = checkAnimation