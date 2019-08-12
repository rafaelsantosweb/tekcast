(function(window, document, $) {
  "use strict";
  //file name:  _slider-home.js

  if ($(".slider-home-wrapper").length) {
    $(".slider-main-wrapper .view-element-content .view")
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

    $(".slider-main-wrapper .view-element-content .view").slick({
      dots: true,
      speed: 400,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true
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
