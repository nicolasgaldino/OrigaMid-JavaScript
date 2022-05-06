function initTabNav() {
  const tabImg = document.querySelectorAll('.js-tabmenu li');
  const tabSec = document.querySelectorAll('.js-tabcontent section');
  if(tabImg.length && tabSec.length) {
    tabSec[0].classList.add('ativo');
    function activeTab(index) {
      tabSec.forEach((section) => {
        section.classList.remove('ativo');
      });
      tabSec[index].classList.add('ativo');
    }
    tabImg.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const activeClass = 'ativo'
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function scrollSuave() {
  const intLink = document.querySelectorAll('.js-menu a[href^="#"]');
  if(intLink.length) {
    function secScroll(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    intLink.forEach((link) => {
      link.addEventListener('click', secScroll)
    });
  }
}
scrollSuave();

function secScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windHalf = window.innerHeight * 0.6
  if(sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const secTop = section.getBoundingClientRect().top;
        const secVis = (secTop - windHalf) < 0;
        if(secVis) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }
    window.addEventListener('scroll', animaScroll);
  }
  animaScroll()
}
secScroll();