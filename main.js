( function($) {
    $.fn.Light = function(options) {
       options = $.extend({}, $.fn.Light.defaults, options);
       
       return this.each(function () {
         var windowHeigth = window.innerHeight || $(window).height(),
             windowWidth  = window.innerWidth  || $(window).width();
      
         $('<div id="overlay"></div>')
         .css({
           'opacity': '0',
           'position': 'fixed',
           'top': '0',
           'left': '0',
           'height': '100%',
           'width': '100%',
           'background': options.color+' url('+options.loadingUrl+') no-repeat scroll center center',
           'z-index': '998'
         })
         .animate({'opacity':'0.5'}, 'slow')
         .appendTo('body');
         
         $('<div id="lightbox"></div>')
         .hide()
         .css({
            'position' : 'fixed',
            'z-index' : '999'  
         })
         .appendTo('body');
         
         $('<img>')
         .attr('src', $(this).attr('src'))
         .css({
          'max-height': windowHeigth, 
           'max-width':  windowWidth
          })
          .load(function() {
            console.log("Load");
            $('#lightbox')
            .css({
               'top':  (windowHeigth - $('#lightbox').height()) / 2,
                           'left': (windowWidth  - $('#lightbox').width())  / 2
                        })
                        .fadeIn();
                })
                .appendTo('#lightbox');  
                
                 $('#overlay, #lightbox').click(function() {
                      $('#overlay, #lightbox')
                      .fadeOut('slow', function() {
                   $('#overlay, #lightbox').remove();
                  });
             });  
       })
           
  }
  $.fn.Light.defaults={
      'loadingUrl':'loading.gif',
      'color':'black'
    }
  })(jQuery);
  
  
  $('.Light').css({
    'cursor':'pointer'
  });
  $('.Light').click(function()
  {
    $(this).Light();  
  });
