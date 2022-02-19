/**
 * Carousel for mobile hero section
 * Changes hero image src after 2 secs
 * @param {number} slideIndex - number of image index to be displayed
 * @param {array of string} imgSrc - array of sources of hero images
 */

const changeSlides = (slideIndex, imgSrc) => {
  let slide = document.querySelector("#slides");
  slide.src = imgSrc[slideIndex%imgSrc.length];
  slideIndex++;
  setTimeout(changeSlides, 2000, slideIndex, imgSrc);
}

changeSlides(0, [
  "/Assets/HeroImages/evermore-carousel-img.png",
  "/Assets/HeroImages/fearless-carousel-img.png",
  "/Assets/HeroImages/red-carousel-img.png"
]);