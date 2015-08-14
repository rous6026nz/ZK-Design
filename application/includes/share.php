<?php if ( ! defined ( 'BASEPATH' )) exit ( 'No direct script access allowed' );
echo   '<div class="divider"></div>
        <div class="share clearfix">
            <h1 class="clearfix">Share <span>(With your favourite Social Media platform :-)</span></h1></br>
                
                <!-- Facebook Share Button -->
                <div class="fb-share-button" data-width="150" data-type="button_count"></div>
                
                <!-- Facebook Likes Button -->
                <div class="fb-like" data-width="150" data-layout="button_count" data-action="like" data-show-faces="true" data-share="false"></div>
                
                <!-- LinkedIn Share Button -->
                <script src="//platform.linkedin.com/in.js" type="text/javascript">
                    lang: en_US
                </script>
                <script type="IN/Share" data-counter="right"></script>
                
                <!-- Twitter Share Button -->
                <a href="https://twitter.com/share" class="twitter-share-button" data-via="ZaineKingi" data-size="large" data-related="ZaineKingi">Tweet</a>
                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script>
                
                <!-- Google+ Share Button -->
                <!-- Place this tag where you want the +1 button to render. -->
                <div class="g-plusone" data-annotation="inline" data-width="270"></div>
                <!-- Place this tag after the last +1 button tag. -->                 
                <script type="text/javascript">
                    (function() {
                                var po = document.createElement(\'script\'); po.type = \'text/javascript\'; po.async = true;
                                po.src = \'https://apis.google.com/js/platform.js\';
                                var s = document.getElementsByTagName(\'script\')[0]; s.parentNode.insertBefore(po, s);
                                })();
                </script>
                
                <!-- Pinterest -->
                <script type="text/javascript" async  data-pin-color="red" data-pin-height="28" data-pin-hover="true" src="//assets.pinterest.com/js/pinit.js"></script>
                
        </div><!-- /class:share -->';