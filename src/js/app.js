const switchLanguage = new SwitchLanguage();
switchLanguage.setupNavbar();
switchLanguage.addLinksOnButton();

const rocketManager = new RocketManager();
rocketManager.setupRocket();


const run = () => {     
    // declare variable
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');
    
    navToggle.addEventListener('click', () => {
        document.getElementById('iconToToggle').classList.toggle('fa-times-circle');
        // hide switch language menu when burger menu is opened and viceversa
        var alienToggle = document.querySelector(".alien-toggle");
        document.body.classList.toggle('nav-open');
        if (document.body.className.indexOf("nav-open") > -1) {
            alienToggle.style['z-index'] = 0;
        } else {
            alienToggle.style['z-index'] = 1000;
        }
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
            document.getElementById('iconToToggle').classList.toggle('fa-times-circle');
    
            // unhide switch language menu when the navbar is closed by selecting a section of the page
            var alienToggle = document.querySelector(".alien-toggle");
            alienToggle.style['z-index'] = 1000;
        });
    });    
}

run();