const $carousel = $(".carusel-wrapper");
const $slides = $(".comment");
let currentIndex = 0;

function showSlide(index) {
   if (index < 0) {
      currentIndex = $slides.length - 1;
   } else if (index >= $slides.length) {
      currentIndex = 0;
   }

   $carousel.css("transform", `translateX(-${currentIndex * 100}%)`);
}

const autoAdvanceInterval = 3000;

setInterval(function () {
   currentIndex++;
   showSlide(currentIndex);
}, autoAdvanceInterval);