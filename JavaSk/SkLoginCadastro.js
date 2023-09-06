const wrapper = document.querySelector('.wrapper');
const loginLink1 = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const perfil = document.querySelector('.perfil');
const iconClose2 = document.querySelector('icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink1.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

perfil.addEventListener('click', () => {
    wrapper.classList.toggle('active-popup');
});

iconClose2.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});