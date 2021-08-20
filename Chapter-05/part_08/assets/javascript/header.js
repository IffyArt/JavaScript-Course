const bg = document.querySelector('.header__img--background')
const navbar = document.querySelector('.navbar')
const text = document.querySelector('.header__container')
const person = document.getElementById('person')
const rock = document.getElementById('rock')

window.addEventListener('scroll', function () {
  var value = window.scrollY
  value > 200 ? (navbar.style.backgroundColor = 'white') : (navbar.style.backgroundColor = 'transparent')

  text.style.transform = `scale(${1 - value * 0.005 > 0 ? 1 - value * 0.005 : '1'})`
  person.style.top = value * -0.5 + 'px'
  rock.style.left = value * -1 + 'px'
})
