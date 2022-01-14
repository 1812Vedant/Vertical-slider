const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upArrow = document.querySelector(".arrowbutton-1");
const downArrow = document.querySelector(".arrowbutton-2");

//this will give all elements in right side
const slidesLength = rightSlide.querySelectorAll("div").length;

console.log(slidesLength);

let activeSlideIndex = 0;

//leftSlide.style.top = `-${300}vh`; //study this why we use -

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;
const sliderHeight = sliderContainer.clientHeight;
upArrow.addEventListener("click", () => changeSlide("up"));

downArrow.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  rightSlide.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
  console.log(activeSlideIndex * sliderHeight);
};
