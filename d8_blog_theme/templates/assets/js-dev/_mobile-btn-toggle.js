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
