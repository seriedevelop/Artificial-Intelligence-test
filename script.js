'use strict'

// Logo hover:

const logo = document.querySelector('.header__logo');
const img = logo.querySelector('.logo__image');

logo.addEventListener('mouseenter', () => {
    img.src = './assets/images/logo/logohover.svg';
  }
);

logo.addEventListener('mouseleave', () => {
    img.src = './assets/images/logo/logo.svg';
  }
);

// Humburger menu:

const hamburgerButton = document.querySelector('.humburger-button');
const headerNav = document.querySelector('.header__nav');

if (hamburgerButton && headerNav) {
  hamburgerButton.addEventListener('click', () => {

    hamburgerButton.classList.toggle('active');

    headerNav.classList.toggle('open');

  });
}


// Animation:

function onEntry(entries) {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('element-show');
    }

  });
}

const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver(onEntry, observerOptions);
const animatedElements = document.querySelectorAll('.element-animation');

animatedElements.forEach(element => {
  observer.observe(element);
});