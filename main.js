window.addEventListener('scroll', onScroll)
onScroll()

// FUNCÇOES SCROLL
function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigate.classList.add('scroll')
  } else {
    navigate.classList.remove('scroll')
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// ABRIR FECHAR MENU
function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// SCROLL REVEAL
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#testimonials,
#about,
#about header,
#about .content,
#about img,
footer`)
