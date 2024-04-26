window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});
//// slider
////////////////////////////////
const sliderViewport = document.querySelector(".image-slider__viewport");

const sliderImageContainer = sliderViewport.querySelector(
  ".image-slider__container"
);

const numberOfSliderImages =
  sliderImageContainer.querySelectorAll("img").length;

let slideOffset = 0;

const moveSlides = (offset) => {
  const imageWidth = sliderImageContainer.querySelector("img").offsetWidth;
  sliderImageContainer.style.transform = `translateX(-${
    offset * imageWidth
  }px)`;
};

let timer;

const setTimer = () => {
  timer = setInterval(() => {
    slideOffset = slideOffset < numberOfSliderImages - 1 ? slideOffset + 1 : 0;
    moveSlides(slideOffset);
  }, 2000);
};

setTimer();
// المشكله بقي لما يخلصو بيدي شاشه بيضا اسه الحل؟

// النص اللي بيظهر فالبتون

var isDisplayed = false;

document.getElementById("myButton").addEventListener("click", function () {
  var displayTextElement = document.getElementById("displayText");
  if (!isDisplayed) {
    displayTextElement.innerText =
      " Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.";
    displayTextElement.style.color = "black-50";
    displayTextElement.style.fontSize = "20px";
    displayTextElement.style.fontFamily = "Arial, sans-serif";
    displayTextElement.style.background = "#eff7fa";
    displayTextElement.style.padding = "5px";
    displayTextElement.style.borderRadius = "15px";
    isDisplayed = true;
  } else {
    displayTextElement.innerText = "";
    displayTextElement.style.color = "";
    displayTextElement.style.fontSize = "";
    displayTextElement.style.fontFamily = "";
    displayTextElement.style.background = "";
    displayTextElement.style.padding = "";
    displayTextElement.style.borderRadius = "";
    isDisplayed = false;
  }
});
var isDisplayed = false;

document.getElementById("myButton-1").addEventListener("click", function () {
  var displayTextElement = document.getElementById("displayText-1");
  if (!isDisplayed) {
    displayTextElement.innerText =
      "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus. Seamlessly optimize empowered testing procedures before revolutionary processes. Progressively facilitate client-centered technologies whereas extensive users. Authoritatively.";
    displayTextElement.style.color = "black-50";
    displayTextElement.style.fontSize = "20px";
    displayTextElement.style.fontFamily = "Arial, sans-serif";
    displayTextElement.style.background = "#eff7fa";
    displayTextElement.style.padding = "5px";
    displayTextElement.style.borderRadius = "15px";
    isDisplayed = true;
  } else {
    displayTextElement.innerText = "";
    displayTextElement.style.color = "";
    displayTextElement.style.fontSize = "";
    displayTextElement.style.fontFamily = "";
    displayTextElement.style.background = "";
    displayTextElement.style.padding = "";
    displayTextElement.style.borderRadius = "";
    isDisplayed = false;
  }
});
document.getElementById("myButton-2").addEventListener("click", function () {
  var displayTextElement = document.getElementById("displayText-2");
  if (!isDisplayed) {
    displayTextElement.innerText =
      "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.";
    displayTextElement.style.color = "black-50";
    displayTextElement.style.fontSize = "20px";
    displayTextElement.style.fontFamily = "Arial, sans-serif";
    displayTextElement.style.background = "#eff7fa";
    displayTextElement.style.padding = "5px";
    displayTextElement.style.borderRadius = "15px";
    isDisplayed = true;
  } else {
    displayTextElement.innerText = "";
    displayTextElement.style.color = "";
    displayTextElement.style.fontSize = "";
    displayTextElement.style.fontFamily = "";
    displayTextElement.style.background = "";
    displayTextElement.style.padding = "";
    displayTextElement.style.borderRadius = "";
    isDisplayed = false;
  }
});
document.getElementById("myButton-3").addEventListener("click", function () {
  var displayTextElement = document.getElementById("displayText-3");
  if (!isDisplayed) {
    displayTextElement.innerText =
      "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table. Professionally embrace customer directed value vis-a-vis high-quality portals. Quickly underwhelm B2C users with maintainable benefits.";
    displayTextElement.style.color = "black-50";
    displayTextElement.style.fontSize = "20px";
    displayTextElement.style.fontFamily = "Arial, sans-serif";
    displayTextElement.style.background = "#eff7fa";
    displayTextElement.style.padding = "5px";
    displayTextElement.style.borderRadius = "15px";
    isDisplayed = true;
  } else {
    displayTextElement.innerText = "";
    displayTextElement.style.color = "";
    displayTextElement.style.fontSize = "";
    displayTextElement.style.fontFamily = "";
    displayTextElement.style.background = "";
    displayTextElement.style.padding = "";
    displayTextElement.style.borderRadius = "";
    isDisplayed = false;
  }
});
