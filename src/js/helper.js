document.addEventListener('DOMContentLoaded', function () { var t = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); t.length > 0 && t.forEach(function (t) { t.addEventListener('click', function () { var e = t.dataset.target, n = document.getElementById(e); t.classList.toggle('is-active'), n.classList.toggle('is-active') }) }) })
window.sr = ScrollReveal()
sr.reveal('.sr', { duration: 1100, delay: 200, reset: true })
var scroll = new SmoothScroll('a[href*="#"]')

var upButton = document.getElementsByClassName('upButton')[0]

document.addEventListener('scroll', function () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  if (scrollTop > 1200) {
    upButton.classList.add('upButton--visible')
  } else {
    if (upButton.classList.contains('upButton--visible')) {
      upButton.classList.remove('upButton--visible')
    }
  }
})

upButton.addEventListener('click', function () {
  scroll.animateScroll(document.body)
})
