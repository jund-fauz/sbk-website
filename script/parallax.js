parallax($(window).scrollTop())
$('.grid-1 > .icon').css('max-width', $('.grid-1 > .icon').height())

$(window).scroll(() => parallax($(this).scrollTop()))

function parallax(firstScroll) {
    const scroll = firstScroll - 1711
    $('.clip-long').css(
      'clip-path',
      `polygon(0 0, ${67 + scroll / 35}% 0, ${
        50 + scroll / 35
      }% 100%, 0 100%)`
    )
    $('.clip-short').css(
      'clip-path',
      `polygon(0 0, ${67 + scroll / 35}% 0, ${
        40 + scroll / 35
      }% 100%, 0 100%)`
    )
}