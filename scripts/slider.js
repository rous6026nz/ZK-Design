/*========================================================================
 * File Name: slider.js
 * Description: Script file for Obligatory Slider website tutorial.
 ========================================================================*/
(function($) {
    var sliderUL = $('div.slider').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs[0].width, // 600
        imgsLen = imgs.length, // the amount of imgs = 4
        current = 1,
        totalImgsWidth = imgsLen * imgWidth; // imgs width x number of imgs
        
    $('#slider_nav').show().find('button').on('click', function() {
            var direction = $(this).data('dir');
                loc = imgWidth; // 600
            
            // update current value
            (direction === 'next') ? ++current: --current;
            
            // if first image
            if ( current === 0 ) {
                current = imgsLen;
                loc = totalImgsWidth - imgWidth;
                direction = 'next';
            } else if ( current - 1 === imgsLen ) { // Are we at the end? Should we reset?
                current = 1;
                loc = 0;
            }
            
            transition( sliderUL, loc, direction );
        });
        
        function transition( container, loc, direction ) {
            var unit; // -= +=
            
            if (direction && loc !== 0 ) {
                unit = ( direction === 'next' ) ? '-=' : '+=';
            }
            
            container.animate({
                'marginLeft': unit ? ( unit + loc ) : loc
            });
        }
        
})(jQuery);