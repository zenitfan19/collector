$.fn.hasAttr = function(name) {  
  if (this.attr(name) !== undefined) {
    return 0;
  }
  return 1;
};


$(document).ready(function() { 

  /*resize*/
  $(window).resize(function() {
    findLeft();
  });


  
  
  /*swap screen*/
  
  $('[data-compare-condition="second"]').hide();
  $('.compare-top__btn').click(function(){
    if($(this).attr('data-compare-condition') == 'first'){
      $('[data-compare-condition="first"]').hide();
      $('[data-compare-condition="second"]').show();
      $('.compare-main').attr('data-compare-main-condition', 'second');
      outputCol();
      widthCols();
    } else {
      $('[data-compare-condition="second"]').hide();
      $('[data-compare-condition="first"]').show();
      $('.compare-main').attr('data-compare-main-condition', 'first');
      $('.compare-main-wrap-container__td span').remove();
      delCol();
      delWidthCols();
    }
  });

    
  

  
  /*функция меняющая содержимое видимого блока*/

  swapValue();
  function swapValue(){
    $('.compare-main-match-select_first .top-select__p').html($('.compare-main-match-select_first .option[data-active-option="active-option"]').html());
    $('.compare-main-match-select_second .top-select__p').html($('.compare-main-match-select_second .option[data-active-option="active-option"]').html());
    $('.compare-main-match-select_third .top-select__p').html($('.compare-main-match-select_third .option[data-active-option="active-option"]').html());
  }
  
  /*кнопка с добавлением/скрытием 3-го селектора*/

  function findLeft (){
    var leftPX;
    if ($('.compare-main-match-select[data-select="visible"]').length == 2){
      leftPX = 326 + 30;
    } else {
      leftPX = 326 + 40 + 138;
    }
    var left = $('.compare-main').width() / 2 + leftPX;
    $('.compare-main-match__add').css('top', '128px');
    $('.compare-main-match__add').css('left', left + 'px');
  }
  findLeft();



  /*динамика с селекторами*/
  $('.top-select').click(function(){
    if ($(this).attr('data-top-active') == 'deactive'){
      $(this).attr('data-top-active', 'active');
      $(this).parent().find('.bot-select').attr('data-bot-select', 'visible');
    } else {
      $(this).attr('data-top-active', 'deactive');
      $(this).parent().find('.bot-select').attr('data-bot-select', 'hidden');
    }
  });


  /*выбор активного пакета и смена disabled */
  $('.option').click(function(){
    
    $('.bot-select').attr('data-bot-select', 'hidden');
    $('.top-select').attr('data-top-active', 'deactive');

    var dataIndex = $(this).attr('data-index');
    var oldIndex = $(this).parent().find('[data-active-option="active-option"]').attr('data-index');
    
    $('[data-index="' + oldIndex + '"').removeAttr('data-disabled');
    $('[data-index="' + oldIndex + '"').removeAttr('data-active-option');

    $(this).attr('data-active-option', 'active-option')
    $('[data-index="' + dataIndex + '"').attr('data-disabled', 'disabled');

    swapValue();
    outputCol();
  });


  /*Добавление/скрытие 3 колонки*/
  $('.compare-main-match__add').click(function(){  
    if ($(this).attr('data-count') == 2){ /*добавляем 3 столбец*/
      var i = 1;
      while (($('.compare-main-match-select_third .bot-select .option[data-index="' + i + '"]').hasAttr('data-disabled')) !== 1) {
        i++;
      }
      $('[data-index="' + i + '"]').attr('data-disabled', 'disabled');
      $('.compare-main-match-select_third [data-index="' + i + '"]').attr('data-active-option', 'active-option');


      $('.compare-main-match-select_third').attr('data-select', 'visible');
      $(this).attr('data-count', '3');
      swapValue();
      findLeft();
      $('.compare-main-match__add').css('transform', 'rotate(45deg)')
      outputCol();
      widthCols();
    } else { /*убираем 3 столбец*/
      $('.compare-main-match-select_third').attr('data-select', 'hidden');
      $(this).attr('data-count', '2');

      var indClose = $('.compare-main-match-select_third .option[data-active-option="active-option"]').attr('data-index');
      $('[data-index="' + indClose + '"]').removeAttr('data-disabled');
      $('[data-index="' + indClose + '"]').removeAttr('data-active-option');
      swapValue();
      findLeft();
      $('.compare-main-match__add').css('transform', 'rotate(0deg)')
      outputCol();
      widthCols();
    }
    
  });
  
  

  
  /*по умолчанию столбцы*/
  function delCol () {
    $('.compare-main-wrap-container__td').show();
    $('.compare-main-wrap-container__td').css('order', '0');
    backUp();
  }


  /*Воостановление удаленных строк*/
  function backUp() {
    $('.compare-main-wrap').show();
    $('.compare-main-wrap-container-tr').show();
  }

  /* обрезка лишних строк  и разделов*/
  function cutRow () {
    backUp();
    /*для 2 столбцовой*/
    if ($('.compare-main-match__add').attr('data-count') == 2) {
      $('.compare-main-wrap').each(function(tab){
        $('.compare-main-wrap-container-tr').each(function(){
          var ct = 0;
          $(this).find('.compare-main-wrap-container__td').each(function(){
            if(($(this).html() == '') && ($(this).css('display') == 'block')) {
              ct++;
            } 
          })
          if (ct == 2){
            $(this).find('.compare-main-wrap-container__td').each(function(){
              if(($(this).html() == '') && ($(this).css('display') == 'block')) {
                $(this).hide();
              } 
            })
            $(this).hide();
          } 
        });
        if ($(this).find('.compare-main-wrap-container').height() == 0){
          $(this).hide();
        }
      })
    }

    /*для 3 столбцовой*/
    if ($('.compare-main-match__add').attr('data-count') == 3) {
      $('.compare-main-wrap').each(function(tab){
        $('.compare-main-wrap-container-tr').each(function(){
          var ct = 0;
          $(this).find('.compare-main-wrap-container__td').each(function(){
            if(($(this).html() == '') && ($(this).css('display') == 'block')) {
              ct++;
            } 
          })
          if (ct == 3){
            $(this).find('.compare-main-wrap-container__td').each(function(){
              if(($(this).html() == '') && ($(this).css('display') == 'block')) {
                $(this).hide();
              } 
            })
            $(this).hide();
          } 
        });
        if ($(this).find('.compare-main-wrap-container').height() == 0){
          $(this).hide();
        }
      })
    }
  };
  
  /*вывод столбцов в зависимости от заголовков*/
  function outputCol (){
    delCol(); //Сначала все чистим
    $('.compare-main-wrap-container__td span').remove();
    $('.compare-main-wrap-container__td').hide();
    /*для первого столбца*/
    var indexCol = +$('.compare-main-match-select_first .option[data-active-option="active-option"]').attr('data-index') + 1;
    $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol + ')').show();
    $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol + ')').css('order', '1');
    

    /*для второго столбца*/
    var indexCol1 = +$('.compare-main-match-select_second .option[data-active-option="active-option"]').attr('data-index') + 1;
    $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol1 + ')').show();
    $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol1 + ')').css('order', '2');
    
    /*для третьего столбца*/
    if ($('.compare-main-match-select_third').attr('data-select') == 'visible'){
      var indexCol2 = +$('.compare-main-match-select_third .option[data-active-option="active-option"]').attr('data-index') + 1;
      $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol2 + ')').show();
      $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol2 + ')').css('order', '3');
    }
    cutRow();  /*форматируем таблицу*/

    /*первый столбец*/

    $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol + ')').each(function(i){
      var titleTr = $(this).parent().find('.compare-main-wrap-container__td0').html();
      if($(this).parent().css('display') == 'flex'){
        if($(this).html() == ''){
          $(this).prepend('<span>-</span>');
        } else {
          if ($(this).children().is('svg')){
            $(this).find('svg').hide();
            $(this).prepend('<span>' + titleTr + '</span>')
          } else {
            $(this).prepend('<span>' + titleTr + ': ' + '</span>')
          }
        }
      }
    });

    /*второй столбец*/

    $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol1 + ')').each(function(i){
      var titleTr = $(this).parent().find('.compare-main-wrap-container__td0').html();
      if($(this).parent().css('display') == 'flex'){
        if($(this).html() == ''){
          $(this).prepend('<span>-</span>');
        } else {
          if ($(this).children().is('svg')){
            $(this).find('svg').hide();
            $(this).prepend('<span>' + titleTr + '</span>')
          } else {
            $(this).prepend('<span>' + titleTr + ': ' + '</span>')
          }
        }
      }
    })

    /*третий столбец*/
    if ($('.compare-main-match-select_third').attr('data-select') == 'visible'){
      $('.compare-main-wrap-container-tr .compare-main-wrap-container__td:nth-child(' + indexCol2 + ')').each(function(i){
        var titleTr = $(this).parent().find('.compare-main-wrap-container__td0').html();
        if($(this).parent().css('display') == 'flex'){
          if($(this).html() == ''){
            $(this).prepend('<span>-</span>');
          } else {
            if ($(this).children().is('svg')){
              $(this).find('svg').hide();
              $(this).prepend('<span>' + titleTr + '</span>')
            } else {
              $(this).prepend('<span>' + titleTr + ': ' + '</span>')
            }
          }
        }
      })
    }

  }
  
  

  /*функция для выставления ширины*/
  function widthCols(){
    var genWidth;
    if ($('.compare-main-match-select[data-select="visible"]').length == 2){
      genWidth = 592;
    } else {
      genWidth = 592 + 316;
    }
    $('.compare-main-wrap').css('max-width', genWidth);
    $('.compare-main-wrap').css('margin', '0 auto');
    $('.compare-main-wrap-container__td').css('width', (genWidth / 2));
  };
  function delWidthCols(){
    $('.compare-main-wrap').css('max-width', '100%');
    $('.compare-main-wrap-container__td').css('width', '15%');
    $('.compare-main-wrap-container__td0').css('width', '25%');
  }
});
