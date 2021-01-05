import $ from "jquery";

export class RocketManager {
    setupRocket() {
        $(window).scroll(function () {
            if ($(window).scrollTop() < 50) {
                $('#rocketmeluncur').slideUp(500);
            } else {
                $('#rocketmeluncur').slideDown(500);
            }

            var ftrocketmeluncur = $("#ft")[0] ? $("#ft")[0] : $(document.body)[0];
            var scrolltoprocketmeluncur = $('#rocketmeluncur')[0];
            var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
            var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
            if (basewrocketmeluncur < 1000) {
                var leftrocketmeluncur = parseInt(ftrocketmeluncur.offsetLeft);
                leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
                scrolltoprocketmeluncur.style.left = (basewrocketmeluncur + leftrocketmeluncur) + 'px';
            } else {
                scrolltoprocketmeluncur.style.left = 'auto';
                scrolltoprocketmeluncur.style.right = '1.75em';
            }
        })

        $('#rocketmeluncur').click(function () {
            $("html, body").animate({ scrollTop: '0px', display: 'none' }, {
                duration: 600,
                easing: 'linear'
            });

            var self = this;
            this.className += ' ' + "launchrocket";
            setTimeout(function () {
                self.className = 'showrocket';
            }, 800)
        });
    }
}