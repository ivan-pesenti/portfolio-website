const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const icon = document.getElementById('iconToToggle');

navToggle.addEventListener('click', () => {
    document.getElementById('iconToToggle').classList.toggle('fa-times-circle');
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        document.getElementById('iconToToggle').classList.toggle('fa-times-circle');

    });
});