$(document).ready(function() {
    let topButton = $('#go_to_top');

    $(window).scroll(function()  {
        const scroll = $(this).scrollTop();
        if (scroll > 20) {
            topButton.show();
        } else {
            topButton.hide();
        }
    });
    
    topButton.click((e) => {
        e.preventDefault();
        $('html').animate(
            {
                scrollTop: 0
            },
            'fast'
        );
    });
});