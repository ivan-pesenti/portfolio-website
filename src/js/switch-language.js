import { data } from "./language-db";

export class SwitchLanguage {

    constructor(){
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
        this.bodyAboutFinal = document.querySelector('.about-me__final').getElementsByTagName('p')[0];
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
        
                // set innerHtml of the element
                this.homeNavbar.innerHTML = data[languageSelected].homeNavbar;
                this.aboutNavbar.innerHTML = data[languageSelected].aboutNavbar;
                this.servicesNavbar.innerHTML = data[languageSelected].servicesNavbar;
                this.skillsNavbar.innerHTML = data[languageSelected].skillsNavbar;
                this.titleIntro.innerHTML = data[languageSelected].titleIntro;
                this.titleAbout.innerHTML = data[languageSelected].titleAbout;
                this.subtitleAbout.innerHTML = data[languageSelected].subtitleAbout;
                this.bodyAboutFirst.innerHTML = data[languageSelected].bodyAboutFirst;
                this.bodyAboutSecond.innerHTML = data[languageSelected].bodyAboutSecond;
                this.bodyAboutFinal.innerHTML = data[languageSelected].bodyAboutLast;
                this.titleServices.innerHTML = data[languageSelected].titleServices;
                this.subtitleServicesFirst.innerHTML = data[languageSelected].subtitleServicesFirst;
                this.bodyServicesFirst.innerHTML = data[languageSelected].bodyServicesFirst;
                this.subtitleServicesSecond.innerHTML = data[languageSelected].subtitleServicesSecond;
                this.bodyServicesSecond.innerHTML = data[languageSelected].bodyServicesSecond;
                this.subtitleServicesLast.innerHTML = data[languageSelected].subtitleServicesLast;
                this.bodyServicesLast.innerHTML = data[languageSelected].bodyServicesLast;
                this.titleSkills.innerHTML = data[languageSelected].titleSkills;
                this.subtitleSkills.innerHTML = data[languageSelected].subtitleSkills;
        
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
