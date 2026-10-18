const check = (label, ok) => console.log(`${ok ? "√" : "X"} ${label}`);

const h1 = document.querySelector('h1');
const contentElements = document.querySelectorAll('.content');
const contactForm = document.getElementById('contact-form');
const emailInput = document.querySelector('#contact-form input[type="email"]');
const navItems = document.querySelectorAll('nav li');
const firstNavLink = document.querySelector('.nav-link');
const lastPara = document.querySelector('article p:last-of-type');
const submitBtn = document.querySelector('button[type="submit"]');
const allH2 = document.querySelectorAll('h2');
const footer = document.querySelector('footer');

check('TODO 1 h1', !!h1);
check('TODO 2 content', contentElements.length > 0);
check('TODO 3 contact-form', !!contactForm);
check('TODO 4 email input', !!emailInput);
check('TODO 5 nav li', navItems.length > 0);
check('TODO 6 first .nav-link', !!firstNavLink);
check('TODO 7 last p', !!lastPara);

const notFound = document.querySelector('.does-not-exist');
console.log('does-not-exist returns:', notFound);

const navTexts = [...navItems].map(el => el.textContent);
console.log('navTexts:', navTexts);