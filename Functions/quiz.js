function smoothScroll(target) {
    const targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth' // Use smooth scrolling behavior
  });
}