const burger = document.getElementById('burger');
const navLink = document.querySelector('.nav-link');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLink.classList.toggle('active');
});
