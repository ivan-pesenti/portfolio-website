jQuery(window).scroll(function(){
    if(jQuery(window).scrollTop()<50){
        jQuery('#rocketmeluncur').slideUp(500);
    }else{
        jQuery('#rocketmeluncur').slideDown(500);
    }

var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
var scrolltoprocketmeluncur = $('#rocketmeluncur')[0];
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
    var leftrocketmeluncur = parseInt(ftrocketmeluncur.offsetLeft);
    leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
    scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '1.75em';
}
})

jQuery('#rocketmeluncur').click(function(){
    jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
            duration: 600,  
            easing: 'linear'
        });
    
    var self = this;
    this.className += ' '+"launchrocket";
    setTimeout(function(){
      self.className = 'showrocket';
    },800)
});


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