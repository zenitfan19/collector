$(document).ready(function() { 
  /*infinity swap*/

  $('.compare-main-wrap-container__td:contains("∞")').css('font-size', '40px');
  
  
  /*swap screen*/

  $('[data-compare-condition="second"]').hide();
  $('.compare-top__btn').click(function(){
    if($(this).attr('data-compare-condition') == 'first'){
      $('[data-compare-condition="first"]').hide();
      $('[data-compare-condition="second"]').show();
      $('.compare-main').attr('data-compare-main-condition', 'second');
    } else {
      $('[data-compare-condition="second"]').hide();
      $('[data-compare-condition="first"]').show();
      $('.compare-main').attr('data-compare-main-condition', 'first');
    }
  });

  
  /*функция меняющая содержимое видимого блока*/

  swapValue();
  function swapValue(){
    $('.compare-main-match-select_first .top-select__p').html($('.compare-main-match-select_first .option[data-active-option="active-option"]').html());
    $('.compare-main-match-select_second .top-select__p').html($('.compare-main-match-select_second .option[data-active-option="active-option"]').html());
    $('.compare-main-match-select_third .top-select__p').html($('.compare-main-match-select_third .option[data-active-option="active-option"]').html());
  }
  
  /*динамика с селекторами*/

   //Прячем выпадашки
  $('.top-select').click(function(){
    if ($(this).attr('data-top-active') == 'deactive'){
      $(this).attr('data-top-active', 'active');
      $(this).parent().find('.bot-select').attr('data-bot-select', 'visible');
    } else {
      $(this).attr('data-top-active', 'deactive');
      $(this).parent().find('.bot-select').attr('data-bot-select', 'hidden');
    }
  });



});