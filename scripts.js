//****** SLIDE - 1 *********/
document.addEventListener("DOMContentLoaded", () => {
  initializeSlideshows();
});

function initializeSlideshows() {
  let slideshows = document.querySelectorAll(".slideshow-container");
  slideshows.forEach((slideshow) => {
    slideshow.setAttribute("data-slide-index", 1);
    showSlides(slideshow, 1);
  });
}

function plusSlides(element, n) {
  let slideshow = element.closest(".slideshow-container");
  let currentIndex = parseInt(slideshow.getAttribute("data-slide-index"));
  showSlides(slideshow, currentIndex + n);
}

function currentSlide(element, n) {
  let slideshow = element.closest(".slideshow-container");
  showSlides(slideshow, n);
}

function showSlides(slideshow, n) {
  let slides = slideshow.querySelectorAll(".mySlides");
  let dots = slideshow.querySelectorAll(".dot");

  console.log("Slides:", slides);
  console.log("Dots:", dots);

  // let currentIndex = parseInt(slideshow.getAttribute('data-slide-index'));

  if (n > slides.length) {
    n = 1;
  }
  if (n < 1) {
    n = slides.length;
  }
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  dots.forEach((dot) => {
    dot.className = dot.className.replace(" active", "");
  });

  slides[n - 1].style.display = "block";

  dots[n - 1].className += " active";

  slideshow.setAttribute("data-slide-index", n);
}
//******* PEOPLE-ITEM *******//
let buttons = document.querySelectorAll(".icon-btn");
buttons.forEach(function (button) {
  button.onclick = function () {
    let ele = button.querySelector("i");
    if (ele.style.color === "black" || ele.style.color === "") {
      ele.style.color = "red";
    } else {
      ele.style.color = "black";
    }
  };
});
//** ******//
let allStarRatings = document.querySelectorAll(".item-star-rating");

allStarRatings.forEach(function (starRating) {
  let stars = starRating.querySelectorAll(".rating-star");

  stars.forEach(function (star, index) {
    star.onclick = function () {
      if (star.classList.contains("active")) {
        stars.forEach(function (s) {
          s.classList.remove("active");
        });
      } else {
        stars.forEach(function (s, i) {
          if (i <= index) {
            s.classList.add("active");
          } else {
            s.classList.remove("active");
          }
        });
      }
    };
  });
});
//**************** TAB ******************/
function openGender(genderName) {
  var i;
  var x = document.getElementsByClassName("gender-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(genderName).style.display = "block";
  document.getElementById("selected-gender").textContent = genderName;

  console.log(genderName);
}
//********* */

//************** COLLAPSIBLE ***************/
let coll1 = document.getElementsByClassName("collapsible");
let i1;

for (i = 0; i < coll1.length; i++) {
  coll1[i].addEventListener("click", function () {
    this.classList.toggle("active-coll");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
//************** LEFT-COLLAPSIBLE ****************/
var coll2 = document.getElementsByClassName("left-collapsible");
var i2;

for (i = 0; i < coll2.length; i++) {
  coll2[i].addEventListener("click", function () {
    this.classList.toggle("active-left");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
//*************** CLO-CARD-SLIDE *****************/
let slideIndexClo = 1;
showSlidesClo(slideIndexClo);

function plusSlidesClo(n) {
  showSlidesClo((slideIndexClo += n));
}

function currentSlideClo(n) {
  showSlidesClo((slideIndexClo = n));
}

function showSlidesClo(n) {
  let i;
  let slides = document.getElementsByClassName("thumbnail-image2");
  if (n > slides.length) {
    slideIndexClo = 1;
  }
  if (n < 1) {
    slideIndexClo = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  let curSlide = slides[slideIndexClo - 1];
  curSlide.style.display = "block";

  let grs = document.querySelectorAll(".thumbnail-image");
  let lengthGrs = grs.length;
  for (let index = 0; index < lengthGrs; index++) {
    const element = grs[index];
    element.classList.remove("active");
  }

  let gr = curSlide.getAttribute("data-gr");
  let ele = document.querySelector('.thumbnail-image[data-gr="' + gr + '"]');
  if (ele) {
    ele.classList.add("active");
  }
}

//function hide all child img
function hideAllChildImg() {
  let grChild = document.querySelectorAll(".thumbnail-image");
  let length = grChild.length;
  for (let index = 0; index < length; index++) {
    const ele = grChild[index];
    ele.classList.remove("active");
  }
}

function hideAllParentImg() {
  let grParent = document.querySelectorAll(".thumbnail-image2");
  let length = grParent.length;
  for (let index = 0; index < length; index++) {
    const ele = grParent[index];
    ele.style.display = "none";
  }
}

//*********** CHANGE-IMAGE  *************/

function changeImages(smallImageSrc, largeImageSrc) {
  // Cập nhật hình ảnh nhỏ
  let imgChild = document.querySelector("#dynamicImage1 img");
  imgChild.src = smallImageSrc;

  // Cập nhật hình ảnh lớn
  let imgParent = document.querySelector("#dynamicImage2 img");
  imgParent.src = largeImageSrc;

  // Hiển thị hình ảnh nhỏ và lớn
  hideAllChildImg();
  let firstChild = document.querySelector("#dynamicImage1");
  firstChild.classList.add("active");

  hideAllParentImg();
  let firstParent = document.querySelector("#dynamicImage2");
  firstParent.style.display = "block";
}

//************* ITEM-COLLAPSIBLE **************/
let coll3 = document.getElementsByClassName("details-collapsible");
let i3;

for (i = 0; i < coll3.length; i++) {
  coll3[i].addEventListener("click", function () {
    this.classList.toggle("active-coll3");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//**********************************************/
//************** QUANTITY-COLL ****************/
let coll4 = document.getElementsByClassName("quantity-coll-row");
let i4;

for (i = 0; i < coll4.length; i++) {
  coll4[i].addEventListener("click", function () {
    this.classList.toggle("active-coll4");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// function mouseOverToggle(elementId) {
//     let dropEle = document.getElementById(elementId);
//     if(dropEle){
//         dropEle.style.display = 'block';
//     }
// }

// function mouseOutToggle(elementId) {
//     let dropEle = document.getElementById(elementId);
//     if(dropEle){
//         dropEle.style.display = 'none';
//     }
// }

// function mouseOverToggle(elementId) {
//     let dropEle = document.getElementById(elementId);
//     if (dropEle) {
//         dropEle.style.visibility = 'visible';
//     }
// }

// function mouseOutToggle(elementId) {
//     let dropEle = document.getElementById(elementId);
//     if (dropEle) {
//         dropEle.style.visibility = 'hidden';
//     }
// }

// mouseOverToggle('dropdown-item-women');
// mouseOutToggle('dropdown-item-women');
//**** */

//     if (slides.length > 0) {
//         slides.forEach((slide) => {
//             slide.style.display = 'none';
//         });

//         slides[n - 1].style.display = 'block';
//     } else {
//         console.error('No slides found for this slideshow.');
//     }

//     // Check if dots exist before attempting to access className
//     if (dots.length > 0) {
//         dots.forEach((dot) => {
//             dot.className = dot.className.replace(' active', '');
//         });

//         dots[n - 1].className += ' active';
//     } else {
//         console.error('No dots found for this slideshow.');
//     }

//     slideshow.setAttribute('data-slide-index', n);
// }
//*** */

//********* FINAL ************/

//****** SLIDE - 2 *********//
