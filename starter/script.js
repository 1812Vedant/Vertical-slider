const sliderContainer = document.querySelector(".slider-container");

const leftSlider = document.querySelector(".left-slider");
const rightSlider = document.querySelector(".right-slider");

const arrowup = document.querySelector(".arrow-up-button");
const arrowdown = document.querySelector(".arrow-down-button");

// Event listeners
// you don't call function one after another
const totalImage = rightSlider.querySelectorAll("div").length;
//console.log(totalImage);
arrowup.addEventListener("click", () => changeSlider("up"));

arrowdown.addEventListener("click", () => changeSlider("down"));

///////////////////////////////////////logic
const sliderHeight = sliderContainer.clientHeight;
const calc = sliderHeight * (totalImage - 1);
//console.log(calc);

// using same property for declaration and same for function usecase will create problem
// leftSlider.style.transform = `translateY(-${
//   sliderHeight * (totalImage - 1)
//  }px)`;

leftSlider.style.top = ` -${(totalImage - 1) * 100}vh`;
let activeSlideIndex = 0;

//console.log(sliderHeight);
const changeSlider = function (direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > totalImage - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = totalImage - 1;
    }
  }
  rightSlider.style.transform = `translateY(-${
    sliderHeight * activeSlideIndex
  }px)`;

  leftSlider.style.transform = `translateY(${
    sliderHeight * activeSlideIndex
  }px)`;
  // console.log(sliderHeight * activeSlideIndex);
};

//https://restcountries.eu/rest/v2/name/portugal

const getCountryName = function (country) {
  const ans = fetch(`https://restcountries.eu/rest/v2/name/${country}`);
  ans.then(function (response) {
    console.log(response.json());
  });
};

getCountryName("portugal");
