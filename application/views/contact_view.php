<section class="section2" role="section2">
    <header>
	<hgroup>
	    <h1>Contact Info</h1>
	    <h2>Drop me a text, email or call</h2>
	</hgroup>
    </header>
    <section id="contact_map">
	<div id="inner">
	    <div id="contact_dts">
		<div id="contact_head">
		    <h2>get in touch with me</h2>
		</div>
		<div id="contact_page_info">
		    <h3>Address</h3><p>5B camrose place,<br/> glenfield, northshore,<br/> auckland, new zealand,<br/> 0626</p>
		    <h3>Telephone</h3><p>&#43;6421 897337</p>
		    <h3>Email</h3><p>rous6026nz@gmail.com</p>
		</div>
	    </div>
	    <span id="map"></span>
	</div>
    </section>
    <hgroup>
	<h1>Make Contact</h1>
	<h2>Fill in the form, and I will contact you...</h2>
    </hgroup>
    <div>
	<div id="form">
	    <?php
		echo form_open('email');
		echo form_label('Name', 'name');
		echo form_input('name', set_value('name'), 'placeholder="Name is required"', 'id="name"');
		echo form_label('Email', 'email');
		echo form_input('email', set_value('email'), 'placeholder="Email is required"', 'id="email"');
		echo form_label('Your Comments', 'message');
		echo form_textarea('message', set_value('message'), 'placeholder="Your Message is required"', 'id="message"');
		echo form_submit('send_email', 'Send');
		echo "<div class='errors'>";
		    echo validation_errors();
		echo "</div>";
	    ?>
	</div>
	<?php echo form_close(); ?> 
	<div id="personal_dets">
	    <h2>Social Networks.</h2>
	    <p>Twitter: <a href="https://twitter.com/ZaineKingi">@ZaineKingi</a></p>
	    <p>LinkedIn: <a href="http://nz.linkedin.com/in/zainekingi">Zaine Kingi</a></p>
	    <p>AboutMe: <a href="http://about.me/zaine.kingi">http://about.me/zaine.kingi</a></p>
	</div>
    </div>
</section>
<!--End of file contact_view.php
    Location: ./application/views/contact_view.php-->