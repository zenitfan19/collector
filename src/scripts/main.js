$(document).ready(function(){

  /*spincrement*/
  var show = true;
  var countbox = ".advantage-block";
  $(window).on("scroll load resize", function () {
      if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
      var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
      var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
      var w_height = $(window).height(); // Высота окна браузера
      var d_height = $(document).height(); // Высота всего документа
      var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
      if (w_top - 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
          $('.advantage-increment').css('opacity', '1');
          $('.advantage-increment').spincrement({
              thousandSeparator: "",
              duration: 1700
          });
            
          show = false;
      }
  });

  /*wow*/
  new WOW().init();


  /*magnific popup*/
  $('.cta-block__btn').magnificPopup({
    type: 'inline'
  });

  /*required*/
  $('.label-wrap').find('[required]').parent().append('<div class="required-dot"></div>');
  $('.label-wrap textarea').parent().parent().find('.required-dot').css('top', '30px');

  /*mask for form*/
  $('[name="tel"]').inputmask({
		mask: "+7 999 999-99-99",
		showMaskOnHover: false,
		showMaskOnFocus: true
  });
  $('[name="email"]').inputmask({ 
		alias: "email",
		showMaskOnHover: false,
		showMaskOnFocus: true
	});
});