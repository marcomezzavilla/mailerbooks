const cover = document.querySelectorAll('.hero-anchors a');

setTimeout(() => {
  cover.forEach((cover, index) => {
    cover.style.opacity = 1;
    cover.style.transition = `opacity 0.4s ${index / 15}s`;
  });
}, 100);

const fadeIns = document.querySelectorAll('.fade-in');

const fadeInOptions = {
  threshold: 0.5,
};

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('is-visible');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInOptions);

fadeIns.forEach((fadeIn) => {
  fadeInObserver.observe(fadeIn);
});
