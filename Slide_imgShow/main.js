var listImg = document.querySelectorAll(".list_image img");
var imgFeature = document.querySelector(".img-feature");
var btnPrev = document.querySelector(".prev");
var btnNext = document.querySelector(".next");

var currentIndex = 0;
function updateImageByIndex(index) {
  // remove active
  document.querySelectorAll(".list_image div").forEach((item) => {
    item.classList.remove("active");
  });
  currentIndex = index;
  imgFeature.src = listImg[index].getAttribute("src");
  listImg[index].parentElement.classList.add("active");
}

listImg.forEach((imgElement, index) => {
  imgElement.addEventListener("click", function () {
    updateImageByIndex(index);
  });
});
btnPrev.addEventListener("click", function () {
  if (currentIndex === 0) {
    currentIndex = listImg.length - 1;
  } else {
    currentIndex--;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideLeft 1s ease-in-out forwards";
  }, 200);
});
btnNext.addEventListener("click", function () {
  if (currentIndex === listImg.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  imgFeature.style.animation = "";
  setTimeout(() => {
    updateImageByIndex(currentIndex);
    imgFeature.style.animation = "slideRight 1s ease-in-out forwards";
  }, 200);
});
