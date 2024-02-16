const body = document.body;
const nav = document.querySelector('nav');

function handleScroll() {
  if (window.scrollY > 0) {
    body.classList.add('scrolled');
  } else {
    body.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', handleScroll);