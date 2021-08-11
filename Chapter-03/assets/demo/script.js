$(document).ready(function () {
  $('.wrapper>section[id!="Text"]').hide()

  $('.nav>a').click(function () {
    $('.wrapper>section').hide()

    $($(this).attr('href')).show()

    $('.nav>a.active').removeClass('active')

    $(this).addClass('active')

    return false
  })

  $('.aside__menu').click(function () {
    $(this).toggleClass('active')
    $(this).next().toggleClass('active')
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
      $('.aside__top').addClass('active')
    } else {
      $('.aside__top').removeClass('active')
    }
  })

  $('.aside__top').click(function () {
    $('html').animate({ scrollTop: 0 }, 'slow')
    return false
  })
})
