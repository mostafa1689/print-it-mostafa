const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentSlideIndex = 0;

const bannerElement = document.querySelector("#banner");

const arrowLeft = document.querySelector("#banner .arrow_left");

const arrowRight = document.querySelector("#banner .arrow_right");

///////// 		Evenement     ///////////////

arrowLeft.addEventListener("click", (e) => {

  if (currentSlideIndex === 0) {
    currentSlideIndex = slides.length - 1;
  } else {
    currentSlideIndex--;
  }
  displaySlides(currentSlideIndex);
});


arrowRight.addEventListener("click", (e) => {
  if (currentSlideIndex === slides.length - 1) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }
  displaySlides(currentSlideIndex);
});

///////  		creation bulles point		//////////////////

const displayIndicator = () => {
  const dots = document.querySelector("#banner .dots");
  slides.forEach((value) => {
    const dotItem = document.createElement("div");
    dots.appendChild(dotItem);
    dotItem.setAttribute("class", "dot");
  });
};

const selectIndicator = (slideIndex) => {
  const indicators = document.querySelectorAll(".dot");
  indicators.forEach((indicator, index) => {
    if (index === slideIndex) {
      indicator.classList.add("dot_selected");
    } else {
      indicator.classList.remove("dot_selected");
    }
  });
};



////////  		Afficher les slides 		///////////

const displaySlides = (numImage) => {
  const bannerImg = document.querySelector("#banner .banner-img");
  const bannerParag = document.querySelector("#banner p");
  
  bannerParag.innerHTML = `${slides[numImage].tagLine}`;

  if (!bannerImg) {
    bannerElement.insertAdjacentHTML(
      "afterbegin",
      `<img class="banner-img " src="./assets/images/slideshow/${slides[numImage].image}" alt= "${slides[numImage].image}">`
    );
  } else {
    bannerImg.setAttribute(
      "src",
      `./assets/images/slideshow/${slides[numImage].image}`
    );
  }

  selectIndicator(numImage);
};

displayIndicator();
displaySlides(currentSlideIndex);

const indicators = document.querySelectorAll(".dot");
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {

      currentSlideIndex  = index ;

      displaySlides(currentSlideIndex);
    })
  });

