let slideIndex = 0;
let imgSrc = [
  "/Assets/HeroImages/evermore-carousel-img.png",
  "/Assets/HeroImages/fearless-carousel-img.png",
  "/Assets/HeroImages/red-carousel-img.png"
];

const changeSlides = () => {
  let slide = document.querySelector("#slides");
  slide.src = imgSrc[slideIndex%imgSrc.length];
  slideIndex++;
  setTimeout(changeSlides, 2000);
}

changeSlides();