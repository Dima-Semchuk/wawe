$(function(){
  
  $('.slider-blog__list').slick({
    dots: true,
    arrows: false
  });

  $('.menu__btn, .menu__link').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('.menu__btn').toggleClass('is-active');
    $('body').toggleClass('body__overflow');
  });


  // $(".hamburger").click(function(){
  //   $(this).toggleClass("is-active");
  // });


  $('body').on("click",".menu__link, .logo, .header__icon", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

  // let e=!1;
  // $(window).scroll(function(){
  //   40<$(this).scrollTop()&&!e?($(".header__top").addClass("header--scroll"),e=!0):$(this).scrollTop()<40&&e&&($(".header__top").removeClass("header--scroll"),e=!1)
  // });

  window.addEventListener('scroll', function() {
    let e = document.querySelector('.header__top');
    if (scrollY > 100) {
        e.classList.add("header--scroll");
    } else {
        e.classList.remove("header--scroll");
    }
});
    

  var mixer = mixitup('.portfolio__content');

});