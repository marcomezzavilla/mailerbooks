const heroCover = document.querySelectorAll('.hero-anchors a');
const navigationPrev = document.querySelector('.navigation-item.prev');
const navigationNext = document.querySelector('.navigation-item.next');
const fadeIns = document.querySelectorAll('.fade-in');
const fadeInOptions = {
  threshold: 0.5,
};
const books = document.querySelectorAll('.books-item');
const booksOptions = {
  threshold: 0.1,
};

setTimeout(() => {
  heroCover.forEach((cover, index) => {
    cover.style.opacity = 1;
    cover.style.transition = `opacity 0.4s ${index / 15}s`;
  });
}, 100);

const fadeInObserver = new IntersectionObserver((entries, fadeInObserver) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, fadeInOptions);

fadeIns.forEach((fadeIn) => {
  fadeInObserver.observe(fadeIn);
});

// naive approach to update vertical navigation with buttons
const booksObserver = new IntersectionObserver((entries, booksObserver) => {
  entries.forEach((entry) => {
    let nextBook = entry.target.nextElementSibling;
    let prevBook = entry.target.previousElementSibling;

    if (entry.isIntersecting) {
      if (prevBook && prevBook.classList.contains('books-item')) {
        navigationPrev.href = '#' + prevBook.id;
        navigationPrev.classList.remove('is-inactive');
      } else {
        navigationPrev.classList.add('is-inactive');
      }

      if (nextBook && nextBook.classList.contains('books-item')) {
        navigationNext.href = '#' + nextBook.id;
        navigationNext.classList.remove('is-inactive');
      } else {
        navigationNext.classList.add('is-inactive');
      }
    }
  });
}, booksOptions);

books.forEach((book) => {
  booksObserver.observe(book);
});
