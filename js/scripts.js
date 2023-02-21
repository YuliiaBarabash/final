//  Carousel

$(document).ready(function () {
  $(".section__card-carousel").slick({
      mobileFirst: true,
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      infinite: true,
      responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        }]
  });
})

$(document).ready(function () {
  $(".section__review-carousel").slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true
  });
})

$(document).ready(function () {
  $('.section__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 7000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
      breakpoint: 480,
      settings: "unslick"
    }]
  });
})


// РАБОЧИЙ СКРИПТ ЗАКРІТИЕ ВИДЕО
var timeVar = '';

body = document.querySelector('body');

button = document.querySelector('#video-play');

iframe = document.querySelector('#video')


button.onclick = function ()

{

  if (iframe.style.display == "#video")

  {


    iframe.style = "display: none";


  } else

  {

    iframe.style = "display: block";
    timeVar = 1;

  }

}

body.onclick = function ()

{

  if (!timeVar)

  {


    iframe.style = "display: none";

  }

  if (timeVar) {
    setTimeout(function () {
      timeVar = '';
    }, 100);
  }

}






// Burger

let burger = document.querySelector("#burger-icon");
let header = document.querySelector("#header");
burger.onclick = function () {
  header.classList.toggle("menu-open");
};

const exampleModal = document.getElementById('contact')
exampleModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-toggle')
  const modalTitle = exampleModal.querySelector('.modal-contact__title')
  const modalBodyInput = exampleModal.querySelector('.modal-contact-body textarea')
})