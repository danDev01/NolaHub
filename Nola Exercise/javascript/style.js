const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('primary-navigation');

navToggle.addEventListener('click', () => {
    primaryNav.toggleAttribute.toggle('data-visible')
});