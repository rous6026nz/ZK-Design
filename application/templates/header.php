<!DOCTYPE html>
<!-- Update your html tag to include the itemscope and itemtype attributes. -->
<html itemscope itemtype="http://schema.org/Person">
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
        
        <meta property="og:title" content="<?php $title ?>" />
        <meta property="og:type" content="Zaine Kingi's Digital Design Portfolio" />
        <meta property="og:url" content="http://www.zkdesign.co.nz" />
        <meta property="og:image" content="<?php echo base_url('/apple-touch-icon-114x114.png') ?>" />
        
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
        <script type="text/javascript" src="<?php echo base_url('/scripts/share.js') ?>"></script>
        
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
        
        <!-- Facebook SDK Script -->
        <div id="fb-root"></div>
        <script>(function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
        
        <header id="main">
            <section id="zkdesign">
                <div id="logo">
                    <a href="<?php echo base_url(); ?>" ><img src="<?php echo base_url('/images/logo.png') ?>" alt="ZK Design Logo" /></a>
                </div>
                <?php
                if ($title == 'Admin Page')
                {
                    $this->load->view('../templates/admin_nav');
                }
                elseif ($title == 'Admin Login')
                {
                    $this->load->view('../templates/nav');
                    echo '<p>';?>
                        <a href="<?php echo base_url("site/login"); ?>">Reset</a>
                    <?php echo '</p>';
                }
                else
                {
                    $this->load->view('../templates/nav');
                    echo '<p>';?>
                        <a href="<?php echo base_url("site/login"); ?>">Admin</a>
                    <?php echo '</p>';
                }
                ?>
            </section>
        </header>
        <hr/>