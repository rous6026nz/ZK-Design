<section class="gallery_container">
    <hgroup>
	<h1>Responsive Web Design</h1>
	<h2>Design optimized for low resolution screens, and the mobile platform.</h2>
    </hgroup>
</section>
<hr/>
<section class="gallery_container">
    <div id="slider">
	<ul>
	    <li>
		<img src="<?php echo base_url('/images/work/zbmx_website.jpg') ?>" alt="Mobile BMX App" />
	    </li>
	    <li>
		<img src="<?php echo base_url('/images/work/cards_website2.jpg') ?>" alt="Naomi's Creative Cards website Cards Catalog Page." />
	    </li>
	</ul>
    </div>
    <div id="slider_nav">
	<span data-dir="prev" class="fade_reverse left btn"></span>
	<span data-dir="next" class="fade_reverse right btn"></span>
    </div>
</section>
<hr/>
<section class="section2" role="section2">
    <div class="work_desc">
	<p class="drop_caps">
	    Responsive Web Design.
	</p>
    </div>
    <?php $this->load->view('../templates/feat_work'); ?>
</section>