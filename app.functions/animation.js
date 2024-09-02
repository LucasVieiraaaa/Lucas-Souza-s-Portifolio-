  // Fade-In animation
  document.addEventListener("DOMContentLoaded", function() {
    var fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('fade-in-active');
        }, index * 100); // 100 milliseconds interval
    });
});
  
  
  window.addEventListener('scroll', function() {
    var textBox = document.querySelector('.slide_animation');
    var rect = textBox.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
    // Se o text-box estiver na visão do usuário
    if (rect.top < windowHeight && rect.bottom >= 0) {
      textBox.style.opacity = '1'; // Define a opacidade para 1 para iniciar a animação
    }
  });