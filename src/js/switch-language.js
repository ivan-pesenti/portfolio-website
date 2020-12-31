// import { data } from "./language-db";
import jsonData from "../assets/data/language-db.json";
export class SwitchLanguage {

    constructor() {
        // item to change based on the language
        this.homeNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[0].getElementsByTagName('a')[0];
        this.aboutNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[1].getElementsByTagName('a')[0];
        this.servicesNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[2].getElementsByTagName('a')[0];
        this.skillsNavbar = document.querySelector('.nav__list').getElementsByTagName('li')[3].getElementsByTagName('a')[0];
        this.titleIntro = document.querySelector('.section__title--intro').getElementsByTagName('h1')[0];
        this.titleAbout = document.querySelector('.section__title--about');
        this.subtitleAbout = document.querySelector('.section__subtitle--about');
        this.bodyAboutFirst = document.querySelector('.about-me__body').getElementsByTagName('p')[0];
        this.bodyAboutSecond = document.querySelector('.about-me__body').getElementsByTagName('p')[1];
        this.bodyAboutFinal_1 = document.querySelector('.about-me__final').getElementsByTagName('span')[0];
        this.bodyAboutFinal_2 = document.querySelector('.about-me__final').getElementsByTagName('span')[1];
        this.titleServices = document.querySelector('.section__title--services');
        this.subtitleServicesFirst = document.querySelector('.services').getElementsByTagName('h3')[0];
        this.bodyServicesFirst = document.querySelector('.services').getElementsByTagName('p')[0];
        this.subtitleServicesSecond = document.querySelector('.services').getElementsByTagName('h3')[1];
        this.bodyServicesSecond = document.querySelector('.services').getElementsByTagName('p')[1];
        this.subtitleServicesLast = document.querySelector('.services').getElementsByTagName('h3')[2];
        this.bodyServicesLast = document.querySelector('.services').getElementsByTagName('p')[2];
        this.titleSkills = document.querySelector('.section__title--skills');
        this.subtitleSkills = document.querySelector('.section__subtitle--skills');

        // effect to open/close language switch section
        this.alienToggle = document.querySelector('.alien-toggle');
        this.alienLinks = document.querySelectorAll('.alien__link');
    }

    setupNavbar() {
        // manage open/close of navbar
        this.alienToggle.addEventListener('click', () => {
            document.getElementById('alienToToggle').classList.toggle('fa-times-circle');
            // hide burger menu when switch language menu is opened and viceversa
            var navToggle = document.querySelector(".nav-toggle");
            document.body.classList.toggle('alien-open');
            if (document.body.className.indexOf("alien-open") > -1) {
                navToggle.style['z-index'] = 0;
            } else {
                navToggle.style['z-index'] = 1000;
            }
        });
    }

    addLinksOnButton() {
        // loop on link in order to add/remove class active from buttons    
        this.alienLinks.forEach(al => {
            al.addEventListener('click', () => {

                // get selected language        
                const languageSelected = al.getAttribute('language');

                // get text from the selected language
                const languageData = jsonData.filter(obj => {
                    var result;
                    if (obj.language === languageSelected) {
                        result = obj.data
                    }
                    return result;
                })[0].data;

                // set innerHtml of the element
                this.homeNavbar.innerHTML = languageData.homeNavbar;
                this.aboutNavbar.innerHTML = languageData.aboutNavbar;
                this.servicesNavbar.innerHTML = languageData.servicesNavbar;
                this.skillsNavbar.innerHTML = languageData.skillsNavbar;
                this.titleIntro.innerHTML = languageData.titleIntro;
                this.titleAbout.innerHTML = languageData.titleAbout;
                this.subtitleAbout.innerHTML = languageData.subtitleAbout;
                this.bodyAboutFirst.innerHTML = languageData.bodyAboutFirst;
                this.bodyAboutSecond.innerHTML = languageData.bodyAboutSecond;
                this.bodyAboutFinal_1.innerHTML = languageData.bodyAboutLast_1;
                this.bodyAboutFinal_2.innerHTML = languageData.bodyAboutLast_2;
                this.titleServices.innerHTML = languageData.titleServices;
                this.subtitleServicesFirst.innerHTML = languageData.subtitleServicesFirst;
                this.bodyServicesFirst.innerHTML = languageData.bodyServicesFirst;
                this.subtitleServicesSecond.innerHTML = languageData.subtitleServicesSecond;
                this.bodyServicesSecond.innerHTML = languageData.bodyServicesSecond;
                this.subtitleServicesLast.innerHTML = languageData.subtitleServicesLast;
                this.bodyServicesLast.innerHTML = languageData.bodyServicesLast;
                this.titleSkills.innerHTML = languageData.titleSkills;
                this.subtitleSkills.innerHTML = languageData.subtitleSkills;

                // remove alien-open class in order to collapse it to the left 
                document.body.classList.remove('alien-open');
                document.getElementById('alienToToggle').classList.toggle('fa-times-circle');

                // unhide burger menu when the switch language menu is closed by selecting a language
                var navToggle = document.querySelector(".nav-toggle");
                navToggle.style['z-index'] = 1000;
            });
        });
    }
}
