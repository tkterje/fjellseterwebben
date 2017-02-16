//custom Javascript



// sticky toTop
$(document).ready(function() {
    $(window).scroll(function() {
        var distanceFromTop = $(document).scrollTop();
        if (distanceFromTop >= $('#pageTop').height())
        {
            $('#toTop').addClass('fixed');
        }
        else
        {
            $('#toTop').removeClass('fixed');
        }
    });
});