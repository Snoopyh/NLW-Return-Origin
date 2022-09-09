window.addEventListener('scroll', onScroll)
onScroll()

// FUNCÇOES SCROLL
function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(testimonials)
}

function activateMenuAtCurrentSection(section) {
  // linha alvo

  const targetLine = scrollY + innerHeight / 2

  // VERIFICAR SE A SECTION PASSOU DA LINHA
  // quais dados vou precisar?

  // TOP DA SECTION
  const sectionTop = section.offsetTop
  // ALTURA DA SECTION
  const sectionHeight = section.offsetHeight

  // O TOP DA SECTION CHEGOU OU ULTRAPASSOU A LINHA ALVO
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // informaçoes dos dados
  /*console.log(
    `o top da section chegou ou passou `,
    sectionTopReachOrPassedTargetLine
  )*/

  // verificar se esta abaixo da targetLine
  //quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHeight

  // se o final da section passou da linha alvo

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  /*console.log(
    'o fundo da section passou da linha? ',
    sectionTopReachOrPassedTargetLine
  )*/

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  console.log(menuElement)

  menuElement.classList.remove('active')

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
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

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    }
  }
})
