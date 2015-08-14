var share_url         =    "http://zkdesign.co.nz" ;
var share_image      =    "http://localhost/zkdesign/images/logo.png";
//full url not ../images should be http://www.
var title               =    "ZK Design | Creative Portfolio of Zaine Kingi";
var description       =    "Web Developemnt, Gaphic Design and Illustration work produced by the Auckland based digital designer Zaine Kingi.";
//title and description should be formatted ie, remove all special char otherwise it may creates errors on social media sites.
var FB_url            =    "http://www.facebook.com/sharer.php?s=100&p[title]="+(title)+"&p[summary]="+description+"&p[url]="+encodeURIComponent(share_url)+"&p[images][0]="+(share_image);
var GP_url            =    "https://plus.google.com/share?url="+encodeURIComponent(share_url);
var TW_url            =    "http://twitter.com/home?status="+escape(title)+"+"+encodeURIComponent(share_url);
var Pt_url            =    "http://pinterest.com/pin/create/bookmarklet/?media="+encodeURIComponent(share_image)+"&url="+encodeURIComponent(share_url)+"& is_video=false&description="+description;
var TB_url            =    "http://www.tumblr.com/share/photo?source="+encodeURIComponent(share_image)+"&caption="+(description)+"&clickthru="+encodeURIComponent(share_url);
var LK_url            =    "http://www.linkedin.com/shareArticle?mini=true&url="+encodeURIComponent(share_url)+"&title="+(title)+"&source="+encodeURIComponent(siteurl);
jQuery("#ref_fb").attr('href',FB_url);
jQuery("#ref_gp").attr('href',GP_url);
jQuery("#ref_tw").attr('href',TW_url);
jQuery("#ref_pr").attr('href',Pt_url);
jQuery("#ref_tum").attr('href',TB_url);
jQuery("#ref_lkd").attr('href',LK_url);