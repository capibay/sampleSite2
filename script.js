

// var flag2 = false;
// $('#section-17 .main-frame').hide();
// fun17();
// function fun17() {

//     if (!$('#section-17 .section').hasClass('no-animate') && !flag2) {
//         $('#section-17 .main-frame').hide().delay(1200).slideDown('slow');
//         flag2 = true;
//     }
// }

$(`#section6 .subcontent`).hide();
$('#section6 .category #c1').show();
$('#section6 .categories #1').addClass('active');

$('#section6 .name').click(function () {
    let id = $(this).attr('id');
    $('#section6 .categories .name').removeClass('active');
    $(this).addClass('active');
    $(`#section6 .subcontent`).fadeOut();
    $(`#section6 .category #c${id}`).delay(350).fadeIn();

});

$(window).on('scroll', (e) => {
    if ($(window).scrollTop() > $(window).height()) {
        $('nav').addClass('black');

    }
    else {
        $('nav').removeClass('black');
    }

})