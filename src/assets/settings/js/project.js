function ready() {
    const totalTime = 3000;
    const incrementAmount = 1;
    const totalIncrements = 100;
    const incrementInterval = totalTime / totalIncrements;
    let progressWidth = $('.progress').width() / 100;

    let currentNumber = 0;
    let timer;

    function incrementNumber() {
        if (currentNumber < 100) {
            currentNumber += incrementAmount;
            $('.progress-bar').text(currentNumber + '%');

            $('.progress-bar').width(progressWidth * currentNumber);
            timer = setTimeout(incrementNumber, incrementInterval);
        } else {
            $('.loading-mask').addClass('loading-mask-over');
            setTimeout(() => {
                $('.loading-mask').hide();
                $('body').css('overflow-y', 'auto');
              }, 1000);
        }
    }

    incrementNumber();
}

$(document).ready(function() {
    ready();

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