<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <!--[if lte IE 8]>
            <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7, IE=9"/>
        <![endif]-->
        <!--[if gte IE 9]>
            <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7, IE=10"/>
        <![endif]-->
        <meta name="author" content="Zaine Kingi Design - www.zkdesign.co.nz"/>
        <meta name="description" content="Zaine Kingi, is an Auckland Based Freelance Web Designer and Web Developer, Specialising in Computer Graphic Design, Web Design, Frontend Development, Mobile App Development, IOS Development, Responsive Web Design, Graphic Design, Illustrations"/>
        <meta name="viewport" content="width=device-width"/>
        
        <!-- Apple-Touch-Icons -->
        <link rel="apple-touch-icon" href="<?php echo base_url('/apple-touch-icon.png') ?>" />
        <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url('/apple-touch-icon-57x57.png') ?>"/>
        <link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url('/apple-touch-icon-72x72.png') ?>"/>
        <link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url('/apple-touch-icon-114x114.png') ?>"/>
        
        <!-- Website Favicon -->
        <link rel="icon" type="image/png" href="<?php echo base_url('/favicon.png') ?>"/>
        
        <title><?php echo  isset($title) ? "ZK Design | $title" : NULL; ?></title>
        
        <!-- css3-mediaqueries.js for IE8 and older -->
        <!--[if lt IE 9]>
            <script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
        <![endif]-->
        
        <!--CSS Stylesheets-->
        <link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url('/styles/main.css'); ?>" />
        <link rel="stylesheet" type="text/css" media="print" href="<?php echo base_url('/styles/main_print.css'); ?>" />
        <!-- Conditional IE Stylesheet Statements -->
        <!--[if gte IE 10]>
            <link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url('/styles/ie10.css'); ?>" />
        <![endif]-->
        <!--[if IE 9]>
            <link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url('/styles/ie9.css'); ?>" />
        <![endif]-->
        <!--[if lte IE 8]>
            <link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url('/styles/ie8.css'); ?>" />
        <![endif]-->
        <script src="<?php echo base_url('/scripts/modernizr.custom.93263.js') ?>"></script>
        <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
        <script type="text/javascript" src="http://code.jquery.com/jquery-migrate-1.1.0.min.js"></script>
        
        <!-- function to hide the address bar on mobile devices -->
        <script type="application/x-javascript">
            addEventListener('load', function() {
                setTimeout(hideAddressBar, 0);
            }, false);
            function hideAddressBar() {
                window.scrollTo(0, 1);
            }
        </script>
        <!-- Analytics tracking script -->
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
        
          ga('create', 'UA-40548471-1', 'zkdesign.co.nz');
          ga('send', 'pageview');
        </script>
    </head>
        <?php
            if ($title == 'Contact Info')
            {
                echo '<body onload="initialize()">';
            }
            else
            {
                echo '<body>';
            }
        ?>
        <header id="main">
            <section id="zkdesign">
                <div id="logo">
                    <a href="<?php echo base_url(); ?>" ><img src="<?php echo base_url('/images/logo.png') ?>" alt="ZK Design Logo" /></a>
                </div>
                <?php
                    $this->load->view('../templates/admin_nav');
                    echo '<p>';?>
                        <a href="<?php echo base_url("admin"); ?>">Reset</a>
                    <?php echo '</p>';
                ?>
            </section>
        </header>
        <hr/>