</body>
<footer>
<section id="footer_content" class="clearfix">
    <div id="zk_details" class="clearfix">
        <h1>Zaine Kingi Design</h1>
        <p>an artist, designer &amp; developer living in Auckland</p>
    </div>
</section>
<hr/>
<section id="ft_contact_info" class="clearfix">
    <div class="ft_contact_info">
        <a href="tel:+6421897337">
            <span class="fade_reverse phone"></span><p>(+6421) 897337</p>
        </a>
        <a href="https://twitter.com/ZaineKingi">
            <span class="fade_reverse twitter"></span><p>Follow me on Twitter</p>
        </a>
        <a href="http://nz.linkedin.com/in/zainekingi">
            <span class="fade_reverse lnkdin"></span>
            <p>Zaine Kingi on LinkdIn</p>
        </a>
    </div>
    <div id="scroller" class="clearfix fade_reverse">
        <span class="scroller"><a href="#"></a></span>
    </div>
</section>  
</footer>
<!-- Loading JQuery Library and all scripts at the bottom for better performance-->
<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.1.0.min.js"></script>
<script type="text/javascript" src="<?php echo base_url('/scripts/goTop.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('/scripts/myfx.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('/scripts/jquery.easing.1.3.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('/scripts/gallery_nav.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('/scripts/jquery.touchSwipe.min.js') ?>"></script>
<script type="text/javascript" src="<?php echo base_url('/scripts/gallery_opts.js') ?>"></script>

<?php
if($title == 'Contact Info'): ?>
    <!-- Script for the google maps api -->
    <!-- Grab Google CDN's jQuery, with a protocol relative URL; fall back to local if offline -->
    <script type="text/javascript" src="<?php echo base_url('scripts/map_api.js') ?>"></script>
    <script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?key=AIzaSyBWXNxa3yaYwz3DLJDLVkGvg1fuYGT1F7Q&sensor=false"></script>
    <script type="text/javascript">
        function initialize() {
            var myOptions = {
                center: new google.maps.LatLng(-36.7751855, 174.720332),
                zoom: 18,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(document.getElementById("map"), myOptions);
            var infoWindow = new google.maps.InfoWindow;
    
            var onMarkerClick = function() {
              var marker = this;
              var latLng = marker.getPosition();
              infoWindow.setContent('<h3 style="padding-left:20px; margin-bottom:10px; color:#343735">ZK Design</h3>' + '<p style="width:250px;padding-left:20px; color:#929392">A full-service digital media designer that combines strong strategic thinking with an eye for innovative, intuitive design to create uniquely engaging digital experiences &#150; all delivered with an unparalleled commitment to client service.</p>');
              infoWindow.open(map, marker);
            };
            google.maps.event.addListener(map, 'click', function() {
              infoWindow.close();
            });
        
            var marker1 = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(-36.7749457, 174.720685)
            });
            
            google.maps.event.addListener(marker1, 'click', onMarkerClick);
        }
    </script>
<?php endif; ?>
</html>