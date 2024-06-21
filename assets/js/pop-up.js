$(document).ready(function() {
$('.overlapped_close').on('click', function(){
        $('body').css('overflow', 'auto');
        $('#overlapped_display').addClass('disappear');
        $('.overlapped_scroll').html('<p>No description available</p>');
    });
    $('.education-section-3.section-6 a').on('click', function(){
        $('body').css('overflow', 'hidden');
        $('.overlapped_scroll').html($(this).parent('div').find('.read-more').html());
        $('#overlapped_display').removeClass('disappear');
    });
    $('.exhibitions-section-3.section-1 .img').on('click', function(){
        $('body').css('overflow', 'hidden');
        $('.overlapped_scroll').html($(this).parent('div').find('.img .read-more').html());
        $('#overlapped_display').removeClass('disappear');
    });
});