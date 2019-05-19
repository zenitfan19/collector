$(document).ready(function(){

  /* для пропорциональных блоков*/
  var koef = 1440/635;
  $('.main-search-block').height($('.main-search-block').width() / koef);
  var koef1 = 680/357;
  $('.main-news-item_b .main-news-item-img').height($('.main-news-item_b .main-news-item-img').width() / koef1);
  var koef2 = 335/218;
  $('.main-news-item_s .main-news-item-img').height($('.main-news-item_s .main-news-item-img').width() / koef2);
  var koef3 = 440/256;
  $('.head .gen-title').css('left', ($('.head').width() / 2) - ($('.head .gen-title').width() / 2) );
  var koef4 = 453/200;
  $('.lots-item__img').height($('.lots-item__img').width() / koef4);

  /* для центрирования заголовка */ 
  $('.articles-item-img').height($('.articles-item-img').width() / koef3);
  
  /* для определения аукционных item*/
  $('.lots-item').each(function(i, el){
    if($(el).attr('data-lider') == 1){
      $(el).find('.lots-item__lider').show();
    }
    if($(el).attr('data-favourites') == 1){
      $(el).find('svg path').css('fill', 'rgba(198,154,96, 1)');
    }
  })
  

  /*resize*/
  $(window).resize(function(){
    /* для пропорциональных блоков*/
    $('.main-search-block').height($('.main-search-block').width() / koef);
    $('.main-news-item_b .main-news-item-img').height($('.main-news-item_b .main-news-item-img').width() / koef1);
    $('.main-news-item_s .main-news-item-img').height($('.main-news-item_s .main-news-item-img').width() / koef2);
    $('.articles-item-img').height($('.articles-item-img').width() / koef3);
    $('.lots-item__img').height($('.lots-item__img').width() / koef4);

    /* для центрирования заголовка */ 
    $('.head .gen-title').css('left', ($('.head').width() / 2) - ($('.head .gen-title').width() / 2) );
  });

  /*меняю стили для хедера на главной*/
  $('.main-search-block').parent().parent().find('.main-header').addClass('main-header_white');

  /*селектор в шапке*/
  $('.sort-select-display span').html($('.sort-select-options .sort-opt[data-selected="selected"]').html());
  $('.sort-select-display').click(function(){
    $('.sort-select-options').toggleClass('open');
  });
  $('.sort-opt').click(function(){
    $('.sort-select-options .sort-opt[data-selected="selected"]').attr('data-selected', '');
    $(this).attr('data-selected', 'selected');
    $('.sort-select-options').toggleClass('open');
    $('.sort-select-display span').html($('.sort-select-options .sort-opt[data-selected="selected"]').html());
  });
});