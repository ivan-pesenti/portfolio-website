import {data} from './language-db.js';

const langEl = document.querySelector('.lang-wrap');
const link = langEl.querySelectorAll('a');

// item to change based on the language
const homeNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[0].getElementsByTagName('a')[0];
const aboutNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[1].getElementsByTagName('a')[0];
const servicesNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[2].getElementsByTagName('a')[0];
const skillsNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[3].getElementsByTagName('a')[0];
const titleIntro = document.querySelector('.section__title--intro').getElementsByTagName('h1')[0];
const titleAbout = document.querySelector('.section__title--about');
const subtitleAbout = document.querySelector('.section__subtitle--about');
const bodyAboutFirst = document.querySelector('.about-me__body').getElementsByTagName('p')[0];
const bodyAboutSecond = document.querySelector('.about-me__body').getElementsByTagName('p')[1];
const bodyAboutFinal = document.querySelector('.about-me__final').getElementsByTagName('p')[0];
const titleServices = document.querySelector('.section__title--services');
const subtitleServicesFirst = document.querySelector('.services').getElementsByTagName('h3')[0];
const bodyServicesFirst = document.querySelector('.services').getElementsByTagName('p')[0];
const subtitleServicesSecond = document.querySelector('.services').getElementsByTagName('h3')[1];
const bodyServicesSecond = document.querySelector('.services').getElementsByTagName('p')[1];
const subtitleServicesLast = document.querySelector('.services').getElementsByTagName('h3')[2];
const bodyServicesLast = document.querySelector('.services').getElementsByTagName('p')[2];
const titleSkills = document.querySelector('.section__title--skills');
const subtitleSkills = document.querySelector('.section__subtitle--skills');

// loop on link in order to add/remove class active from buttons
link.forEach (el => {
    el.addEventListener('click', () => {
        // remove class active from the current selected item
        langEl.querySelector('.active').classList.remove('active');
        // add the active class to the element just clicked
        el.classList.add('active');

        // get selected language        
        const languageSelected = el.getAttribute('language');

        // set innerHtml of the element
        homeNavbar.innerHTML = data[languageSelected].homeNavbar;
        aboutNavbar.innerHTML = data[languageSelected].aboutNavbar;
        servicesNavbar.innerHTML = data[languageSelected].servicesNavbar;
        skillsNavbar.innerHTML = data[languageSelected].skillsNavbar;
        titleIntro.innerHTML = data[languageSelected].titleIntro;
        titleAbout.innerHTML = data[languageSelected].titleAbout;
        subtitleAbout.innerHTML = data[languageSelected].subtitleAbout;
        bodyAboutFirst.innerHTML = data[languageSelected].bodyAboutFirst;
        bodyAboutSecond.innerHTML = data[languageSelected].bodyAboutSecond;
        bodyAboutFinal.innerHTML = data[languageSelected].bodyAboutLast;
        titleServices.innerHTML = data[languageSelected].titleServices;
        subtitleServicesFirst.innerHTML = data[languageSelected].subtitleServicesFirst;
        bodyServicesFirst.innerHTML = data[languageSelected].bodyServicesFirst;
        subtitleServicesSecond.innerHTML = data[languageSelected].subtitleServicesSecond;
        bodyServicesSecond.innerHTML = data[languageSelected].bodyServicesSecond;
        subtitleServicesLast.innerHTML = data[languageSelected].subtitleServicesLast;
        bodyServicesLast.innerHTML = data[languageSelected].bodyServicesLast;
        titleSkills.innerHTML = data[languageSelected].titleSkills;
        subtitleSkills.innerHTML = data[languageSelected].subtitleSkills;

    });
});