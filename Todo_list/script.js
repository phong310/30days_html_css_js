var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todos = document.querySelector('.todo')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let val = input.value.trim();

    if(val) {
        addToDoList({
            text: val
        })
    }
    input.value = '';
})

// hàm thêm task
function addToDoList(todo) {

    var li = document.createElement('li');
    li.innerHTML = `<span>${todo.text}</span>
                    <i class="fa-solid fa-trash"></i>`

    if(todo.status === 'completed') {
        li.setAttribute('class', 'completed')
    }

    // thêm completed khi click
    li.addEventListener('click', function() {
        this.classList.toggle('completed')
    })

    // khi click vào thùng rác
    li.querySelector('i').addEventListener('click', function() {

        // Xóa thẻ cha là thẻ <li>
        this.parentElement.remove()
    })



    todos.appendChild(li)
}
