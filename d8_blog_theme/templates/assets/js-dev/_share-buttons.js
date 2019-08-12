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