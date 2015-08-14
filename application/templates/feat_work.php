<?php if ( ! defined ( 'BASEPATH' )) exit ( 'No direct script access allowed' );?>
<!--*****************************************************************************
 * File Name: feat_work.php
 * PATH: application/template/main.css
 * Description: Featured Work links template for ZKDesign Website.
 * Version: 1.01.a
 * Author: Zaine Kingi
 * ============================= Change History ==============================
 * - Ver- -- By -- --------------------- Changes -----------------------------
 * 1.01.a          Initial Release
 ****************************************************************************-->
<aside class="aside">
    <hgroup>
        <h2>More Work</h2>
    </hgroup>
    
    <?php if($title == 'Graphic Design')
    {
        echo '  <p><a href="web_work"; >Web Design</a></p>
                <p><a href="illust_work"; >Illustration Artwork</a></p>
                <p><a href="innovation_work"; >Design Innovation</a></p>';
        
    }elseif($title == 'Web Design and Development')
    {
        echo '  <p><a href="gd_work"; >Graphic Design</a></p>
                <p><a href="illust_work"; >Illustration Artwork</a></p>
                <p><a href="innovation_work"; >Design Innovation</a></p>';
    }elseif($title == 'Illustration')
    {
        echo '  <p><a href="gd_work"; >Graphic Design</a></p>
                <p><a href="web_work"; >Web Design</a></p>
                <p><a href="innovation_work"; >Design Innovation</a></p>';
    }elseif($title == 'Responsive Web Design')
    {
        echo '  <p><a href="gd_work"); >Graphic Design</a></p>
                <p><a href="web_work"; >Web Design</a></p>
                <p><a href="illust_work"; >Illustration Artwork</a></p>
                <p><a href="innovation_work"); >Design Innovation</a></p>';
    }elseif($title == 'Design Innovation')
    {
        echo '  <p><a href= "gd_work"; >Graphic Design</a></p>
                <p><a href="web_work"; >Web Design</a></p>
                <p><a href="illust_work"; >Illustration Artwork</a></p>';
    }
    
echo '</aside>';