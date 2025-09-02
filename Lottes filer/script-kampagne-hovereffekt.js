const kampagner = document.querySelectorAll('.item--kampagne-harry-potter, .item--kampagne-tintin');

kampagner.forEach(k => {
  k.addEventListener('mouseenter', () => {
    k.style.transform = "scale(1.05)";
    k.style.transition = "transform 0.3s";
  });
  k.addEventListener('mouseleave', () => {
    k.style.transform = "scale(1)";
  });
});