
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('right-0');
  mobileMenu.classList.toggle('right-[-100%]');
});

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");

  const spans = menuBtn.querySelectorAll("span");

  if (menuBtn.classList.contains("open")) {

    spans[0].classList.add("translate-y-[7px]", "rotate-45");

    spans[1].classList.add("opacity-0");

    spans[2].classList.add("-translate-y-[7px]", "-rotate-45");
  } else {

    spans[0].classList.remove("translate-y-[7px]", "rotate-45");
    spans[1].classList.remove("opacity-0");
    spans[2].classList.remove("-translate-y-[7px]", "-rotate-45");
  }
});

//SLIDER//

$(document).ready(function () {
    $('.autoplay').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 400,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: '.prev',
        nextArrow: '.next',

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    });

});
