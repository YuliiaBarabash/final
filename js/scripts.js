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
    speed: 4000,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [{
      breakpoint: 480,
      settings: "unslick"
    }]
  });
})








// // VIDEO

// $(function () {
// 	var $videoContainer = $('#video-container'),
// 		$videoControls = $('.section__video-control'),
// 		$video = $('#Video')[0];

// 	$videoControls.click(function () {
// 		if ($video.paused) {
// 			$video.play();
// 			$videoContainer.addClass('video-is-playing');
// 		} else {
// 			$video.pause();
// 			$videoContainer.removeClass('video-is-playing');
// 		}
// 	});
// });

// $(document).on('click', '#video-play', function() {
// 	var $video = $('#video'),
// 		src = $video.attr('src');

// 	$video.attr('src', src + '&autoplay=0');
// });


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

// Counter
// const counters = document.querySelectorAll('.section__counter');
// const speed = 900;

// counters.forEach(counter => {
//   const animate = () => {
//     const value = +counter.getAttribute('.data-number');
//     const data = +counter.innerText;

//     const time = value / speed;
//     if (data < value) {
//       counter.innerText = Math.ceil(data + time);
//       setTimeout(animate, 1);
//     } else {
//       counter.innerText = value;
//     }
//   }

//   animate();
// });


var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.section__counter-heading').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});


// // Counter To Count Number Visit
// var a = 0;
// $(window).scroll(function() {

//   var oTop = $('#counter').offset().top - window.innerHeight;
//   // Md.Asaduzzaman Muhid
//   if (a == 0 && $(window).scrollTop() > oTop) {
//     $('.counter').each(function() {
//         var $this = $(this);
//         jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
//             duration: 2000,
//             easing: 'swing',
//             step: function () {
//                 $this.text(Math.ceil(this.Counter));
//             }
//         });
//     });
//     a = 1;// Md.Asaduzzaman Muhid
//   }
// });

// Modal

const exampleModal = document.getElementById('contact')
exampleModal.addEventListener('show.bs.modal', event => {
  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-toggle')
  const modalTitle = exampleModal.querySelector('.modal-contact__title')
  const modalBodyInput = exampleModal.querySelector('.modal-contact-body textarea')
})