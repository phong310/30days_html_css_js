var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btnRemoveAll = document.querySelector('.remove-all')

var tags = ['Javascript', 'NodeJS'];

function renderTag() {
   content.innerHTML='';
  for(var i=0; i<tags.length; i++) {
    const tag = tags[i];
    content.innerHTML += `<li>
                  ${tag}
                  <i class="fa-solid fa-xmark" onclick=removeTag(${i})></i>
                </li>`
  }
  content.appendChild(input);
  input.focus();
}
renderTag()

input.addEventListener('keydown', function(e) {
  if(e.key == 'Enter') {
    tags.push(input.value.trim());
    input.value='';
    renderTag()
  }
})
function removeTag(index) {
  tags.splice(index, 1);
  renderTag()
}
btnRemoveAll.addEventListener('click', function() {
  tags=[];
  renderTag()
})
