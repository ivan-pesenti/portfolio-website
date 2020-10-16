class RocketManager {
    setupRocket = function () {
        jQuery(window).scroll(function(){
            if(jQuery(window).scrollTop()<50){
                jQuery('#rocketmeluncur').slideUp(500);
            }else{
                jQuery('#rocketmeluncur').slideDown(500);
            }
        
        var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
        var scrolltoprocketmeluncur = $('#rocketmeluncur')[0];
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
    }
}