var btnSuccess = document.querySelector(".success");
var btnWarning = document.querySelector(".warning");
var btnError = document.querySelector(".error");

btnSuccess.addEventListener("click", function () {
  createToast("success");
});
btnWarning.addEventListener("click", function () {
  createToast("warning");
});
btnError.addEventListener("click", function () {
  createToast("error");
});

function createToast(status) {
  let templateInner = `<i class="fa-regular fa-circle-check"></i>
  <span class="message">This is a success message</span>`;

  switch (status) {
    case "success":
      templateInner = `<i class="fa-regular fa-circle-check"></i>
                       <span class="message">This is a success message</span>`;
      break;
    case "warning":
      templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
                       <span class="message">This is a warning message</span>`;
      break;
    case "error":
      templateInner = `<i class="fa-solid fa-triangle-exclamation"></i>
                       <span class="message">This is a error message</span>`;
      break;
  }
  var toast = document.createElement("div");
  toast.classList.add("toasts");
  toast.classList.add(status);
  toast.innerHTML = `${templateInner}
  <span class="countdown"></span>`;

  var toastList = document.getElementById("toasts");
  toastList.appendChild(toast);

  setTimeout(function(){
    toast.style.animation = 'slide_hide 2s ease forwards'
  }, 4000)
  setTimeout(function(){
    toast.remove()
  }, 6000)
}
