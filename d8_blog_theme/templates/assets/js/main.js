(function(window, document, $) {
  "use strict";
  // _mobile-btn-toggle.js

  var btnToogle = document.querySelector(".navbar-toggle");
  var elHighLight = document.querySelector("#highlighted");
  var elMain = document.querySelector("#main");
  var elFooter = document.querySelector(".site-footer");
  btnToogle.addEventListener(
    "click",
    function() {
      // alert('teste');

      elHighLight.classList.add("transition");
      elMain.classList.add("transition");
      elFooter.classList.add("transition");

      // setTimeout(function(){
      //   elHighLight.classList.toggle('blur');
      //   elMain.classList.toggle('blur');
      //   elFooter.classList.toggle('blur');
      // },200);
    },
    false
  );
})(window, document, jQuery);

/*(function (window, document, $) {
    'use strict';
    // file name inserir o nome do arquivo **** importante ***
})(window, document, jQuery);*/

(function (window, document, $) {
    'use strict';
    var socialButton = $('.share-buttons').children('a');
    
    var newsUrl = window.location.href;
    var newsTitle = $('.page-internal-header .title h2').text();


    socialButton.click(function () {

        var botao = $(this);
        var socialUrl = botao.attr('href') + newsUrl;
        var socialUrlTwitter = 'https://twitter.com/intent/tweet?text='+ newsTitle +'&url='+ newsUrl +'&via=puc_sp';

        if ( botao.hasClass('twitter') ) {
            
            window.open(
                socialUrlTwitter,
                "DescriptiveWindowName",
                "width=640,height=480,resizable,scrollbars=yes,status=1,left="
				//centraliza horizontal
				+ (document.documentElement.clientWidth - 640) / 2
				//centraliza vertical
				+ ",top="+ (document.documentElement.clientHeight - 480) / 2
            );
            return false;
            
            
        } else {
            window.open(
                socialUrl,
                "DescriptiveWindowName",
                "width=640,height=480,resizable,scrollbars=yes,status=1,left="
				//centraliza horizontal
				+ (document.documentElement.clientWidth - 640) / 2
				//centraliza vertical
				+ ",top="+ (document.documentElement.clientHeight - 480) / 2
            );
            return false;
        }
    });
})(window, document, jQuery);

(function (window, document, $) {
    'use strict';
    var socialButtonListagem = $('.box-call-news').children('.text-box').children('.infos').children('.share').children('ul').children('li').children('a');
    
    var newsUrl = window.location.href;
    var newsTitle = $('.page-internal-header .title h2').text();


    socialButtonListagem.click(function () {

        var botao = $(this);
        var socialUrl = botao.attr('href');
        //var socialUrlTwitter = 'https://twitter.com/intent/tweet?text='+ newsTitle +'&url='+ newsUrl +'&via=puc_sp';

        
            window.open(
                socialUrl,
                "DescriptiveWindowName",
                "width=640,height=480,resizable,scrollbars=yes,status=1,left="
				//centraliza horizontal
				+ (document.documentElement.clientWidth - 640) / 2
				//centraliza vertical
				+ ",top="+ (document.documentElement.clientHeight - 480) / 2
            );
            return false;
    });

})(window, document, jQuery);
(function(window, document, $) {
  "use strict";
  //file name:  _slider-home.js

  if ($(".slider-home-wrapper").length) {
    $(".slider-main-wrapper")
      .children(".slider-item")
      .each(function() {
        var imageUrl = $(this)
          .children(".image")
          .find("img")
          .attr("src");
        $(this).css({
          "background-image": "url(" + imageUrl + ")"
        });
      });

    $(".slider-main-wrapper ").slick({
      dots: true,
      speed: 1000,
      arrows: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000
    });

    window.addEventListener("load", function() {
      // var listDots = document.querySelectorAll(".slick-dots li button");

      var listDotsArray = Array.prototype.slice.call(
        document.querySelectorAll(".slick-dots li button")
      ); // transforma o nodelist do querySelecto em array

      var listSliderTextArray = Array.prototype.slice.call(
        document.querySelectorAll(".slider-main-wrapper .slider-item .title a")
      );

      listDotsArray.map(function(elm, index) {
        elm.textContent = listSliderTextArray[index].textContent;
      });

      // listSliderTextArray.map(function(elm, index) {
      //   console.log("no map de slider item", index);
      //   console.log("no map de slider item", elm);
      // });
    });

    // $(".slider-nav-wrapper .view-element-content .view").slick({
    //   dots: false,
    //   speed: 400,
    //   arrows: false,
    //   slidesToShow: 3,
    //   infinite: false,
    //   asNavFor: ".slider-main-wrapper .view-element-content .view"
    // });
  }
})(window, document, jQuery);
