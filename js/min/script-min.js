function animer(){requestAnimFrame(function(){var e=$(window).scrollTop();$("html").hasClass("lt-ie9")||jsPlumb.setSuspendDrawing(!1),$("body").hasClass("has-bloc-small"),$("html").hasClass("lt-ie9")||($("body").hasClass("has-video")&&!$("#etiquette").length&&$(window).width()>=1250&&($("body").hasClass("accueil")||$("html").hasClass("isSafari")||$("html").hasClass("lt-ie9")||jsPlumb.repaint($(".bloc-btn-video"),{left:Math.round($(".bloc-btn-video").offset().left),top:Math.round($(".bloc-btn-video").offset().top)})),(TweenMax.isTweening($("#wrapper-content"))||TweenMax.isTweening($("#container-menu-wrapper"))||TweenMax.isTweening($("#menu-wrapper"))||TweenMax.isTweening($("#menu-wrapper ul"))||TweenMax.isTweening($("#menu-wrapper ul li"))||TweenMax.isTweening($("#menu-wrapper ul li a .txt-circle"))||TweenMax.isTweening($("#circle-dashed-container")))&&($("body").hasClass("has-video")&&$("body").hasClass("accueil")&&!$("#etiquette").length&&($("html").hasClass("isSafari")||$("html").hasClass("lt-ie9")||(jsPlumb.repaint($("#menu-wrapper")),jsPlumb.repaint($(".bloc-btn-video"),{left:$(".bloc-btn-video").offset().left,top:$(".bloc-btn-video").offset().top}))),$("body").hasClass("contact")&&$(window).width()>=979&&jsPlumb.repaint($("#bloc-adresse"),{left:Math.round($("#bloc-adresse").offset().left),top:Math.round($("#bloc-adresse").offset().top)}),($("body").hasClass("category")||$("body").hasClass("rh")||$("body").hasClass("recherche")||$("body").hasClass("search"))&&jsPlumb.repaint($(".wrapper-blocs .bloc-full")))),$("body").hasClass("rh-detail")&&(e>$("#bloc-actus").offset().top&&e<$("#bloc-actus").offset().top+$("#bloc-actus").height()-50?TweenMax.set($("a.btn-postuler"),{position:"fixed",right:"inherit",left:$("#bloc-actus").offset().left+$("#bloc-actus").width()-25+"px"}):TweenMax.set($("a.btn-postuler"),{position:"absolute",right:"-23px",left:"inherit"})),$("html").hasClass("lt-ie9")||$("#etiquette").length&&(jsPlumb.repaint($("#zone-actus"),{left:Math.round($("#zone-actus").offset().left),top:Math.round($("#zone-actus").offset().top)}),jsPlumb.repaint($("#etiquette"),{left:Math.round($("#etiquette").offset().left),top:Math.round($("#etiquette").offset().top)})),refreshLink(),animer()})}function menuOuvertDefault(){$(window).width()>1024&&null==$.cookie("cookieMenu")&&($.cookie("cookieMenu","open"),ouvertureMenu(),setTimeout(function(){fermetureMenu()},2e3))}function ouvertureMenu(){function e(){tlCircles.to($("#menu-wrapper ul li").eq(0),.3,{top:"94px",left:"300px",ease:Cubic.easeInOut}),tlCircles.to($("#menu-wrapper ul li").eq(1),.3,{top:"235px",left:"310px",delay:.05,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(2),.3,{top:"321px",left:"166px",delay:.1,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(3),.3,{top:"235px",left:"20px",delay:.2,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(4),.3,{top:"94px",left:"32px",delay:.25,ease:Cubic.easeInOut},0)}TweenMax.set($("#menu-wrapper"),{css:{className:"+=active"}}),tlMenuWrapper.remove(),tlCircleDashed.remove(),tlCircles.remove(),tlWrapperBlocs.remove(),tlMenuWrapper=new TimelineMax,tlCircleDashed=new TimelineMax,tlCircles=new TimelineMax,tlWrapperBlocs=new TimelineMax,TweenMax.to($("#label-menu"),.05,{opacity:0,display:"none",ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul"),.05,{scale:1.2,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul"),.05,{scale:1,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul li"),.1,{left:"40%",top:"40%",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.05,{scale:1.2,ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#container-menu-wrapper"),.2,{marginTop:"-110px",ease:Cubic.easeInOut}),$("html").hasClass("lt-ie9")?tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"20px",ease:Cubic.easeInOut,delay:.2}):tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-10px",ease:Cubic.easeInOut,delay:.2}),tlMenuWrapper.set($("#menu-wrapper ul li"),{width:"98px",height:"98px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"),{display:"inline-block",ease:Cubic.easeInOut,onComplete:e}),tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"),{width:"312px",height:"312px",marginTop:"-156px",marginLeft:"-156px",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.2,{scale:1,delay:.3,ease:Cubic.easeInOut})}function fermetureMenu(){function e(){tlCircles.to($("#menu-wrapper ul li").eq(0),.4,{top:"221px",left:"312px",ease:Cubic.easeInOut}),tlCircles.to($("#menu-wrapper ul li").eq(1),.4,{top:"281px",left:"277px",delay:.05,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(2),.4,{top:"312px",left:"205px",delay:.1,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(3),.4,{top:"281px",left:"130px",delay:.2,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(4),.4,{top:"221px",left:"98px",delay:.25,ease:Cubic.easeInOut},0),tlCircles.to($("#label-menu"),.15,{opacity:1,display:"block",ease:Cubic.easeInOut})}TweenMax.set($("#menu-wrapper"),{css:{className:"-=active"}}),tlMenuWrapper.remove(),tlCircleDashed.remove(),tlCircles.remove(),tlWrapperBlocs.remove(),tlMenuWrapper=new TimelineMax,tlCircleDashed=new TimelineMax,tlCircles=new TimelineMax,tlWrapperBlocs=new TimelineMax,tlMenuWrapper.set($("#menu-wrapper ul"),{scale:1,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul li"),.3,{left:"40%",top:"40%",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#container-menu-wrapper"),.5,{marginTop:"-180px",ease:Cubic.easeInOut}),$("html").hasClass("lt-ie9")?tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-50px",ease:Cubic.easeInOut,delay:.3}):tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-90px",ease:Cubic.easeInOut,delay:.3}),tlMenuWrapper.set($("#menu-wrapper ul li"),{width:"20px",height:"20px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a"),{borderWidth:"0px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"),{display:"none",ease:Cubic.easeInOut,onComplete:e}),tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"),{width:"224px",height:"224px",marginTop:"-112px",marginLeft:"-112px",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:1,delay:.7,ease:Cubic.easeInOut})}function hoverMenu(){var e;e=new TimelineMax;var a;a=new TimelineMax;var t;t=new TimelineMax,$("#menu-wrapper").hover(function(){ouvertureMenu()},function(){fermetureMenu()})}function btnVideoClick(){$("a.btn-video").click(function(){return ouvrirBlocVideo(),!1})}function ouvrirBlocVideo(){$(window).scrollTop(0),$("body").addClass("video-ouverte"),TweenMax.set($("footer"),{display:"none"}),TweenMax.set($(".bloc-btn-video"),{display:"none"}),TweenMax.to($("#wrapper-content"),.5,{x:"-100%",ease:Cubic.easeInOut,onComplete:completeWrapperContent}),TweenMax.to($("#bloc-menu-responsive"),.5,{x:"-100%",ease:Cubic.easeInOut}),tlBlocVisuContent=new TimelineMax,tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.5,{right:"50%",marginRight:"-21.5%",ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.2,{opacity:0,ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#fond-couleur-bloc-visu"),.2,{opacity:0,display:"none",ease:Cubic.easeInOut,onComplete:completeFondCouleur}),updateUrlBlocVideo()}function updateUrlBlocVideo(){var e=$("ul#autres-videos li.active");if(e.hasClass("has-video")){var a=e.data("url-video"),t=e.data("poster-name");window.location.hash="#video#"+a+"#"+t}else if(e.hasClass("has-calameo")){var s=e.data("id-calameo");window.location.hash="#calameo#"+s}else if(e.hasClass("has-image")){var i=e.data("image-name");window.location.hash="#image#"+s}}function completeWrapperContent(){}function completeFondCouleur(){TweenMax.set($("#bloc-visu"),{display:"none"}),TweenMax.set($("#container-bloc-visu-content"),{display:"none"});var e=new TimelineMax({onComplete:addClassBlocAutresVideos});e.to($("#bloc-autres-videos"),.4,{display:"block",marginRight:"0",ease:Cubic.easeInOut}),e.to($("#bloc-autres-videos"),.4,{marginRight:"-196px",delay:1.2,ease:Cubic.easeInOut}),e.to($("#bloc-retour-video"),.2,{marginLeft:"-20px",ease:Cubic.easeInOut})}function addClassBlocAutresVideos(){$("#bloc-autres-videos").addClass("canTween")}function btnRetourVideoClick(){$("a#retour-video").click(function(){return window.location.hash="",$("body").removeClass("video-ouverte"),$("#bloc-autres-videos").removeClass("canTween"),stopVideos(),TweenMax.set($(".bloc-btn-video"),{display:"block"}),TweenMax.set($("#wrapper-content"),{display:"block"}),TweenMax.set($("#bloc-visu"),{display:"block"}),TweenMax.set($("#container-bloc-visu-content"),{display:"block"}),TweenMax.to($("#bloc-menu-responsive"),.2,{x:"0%",delay:1,ease:Cubic.easeInOut,onComplete:blocMenuResponsiveRetour}),TweenMax.to($("#bloc-retour-video"),.2,{marginLeft:"-200px",ease:Cubic.easeInOut}),TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"-250px",x:"0px",display:"none",ease:Cubic.easeInOut}),tlBlocVisuContentRetour=new TimelineMax,tlBlocVisuContentRetour.to($("#fond-couleur-bloc-visu"),.2,{opacity:1,display:"block",ease:Cubic.easeInOut}),tlBlocVisuContentRetour.to($("#bloc-fond-visu .bloc-visu-content"),.2,{opacity:1,ease:Cubic.easeInOut,onComplete:completeFondCouleurRetour}),!1})}function blocMenuResponsiveRetour(){TweenMax.set($("footer"),{display:"block"})}function completeFondCouleurRetour(){TweenMax.to($("#bloc-fond-visu .bloc-visu-content"),.5,{right:"0",marginRight:"0%",ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-content"),.5,{x:"0%",ease:Cubic.easeInOut})}function btnPlusVideos(){$("a#plus-autres-videos").hover(function(){!$("#bloc-autres-videos").hasClass("canTween")||isMobile.any||$("#bloc-autres-videos").hasClass("open")||(TweenMax.to($("#bloc-autres-videos"),.2,{x:"-20px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{scale:"1.1",ease:Cubic.easeInOut}))},function(){TweenMax.to($("#bloc-autres-videos"),.2,{x:"0px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{scale:"1",ease:Cubic.easeInOut})}),$("a#retour-video").hover(function(){isMobile.any||(TweenMax.to($("#bloc-retour-video"),.2,{x:"20px",ease:Cubic.easeInOut}),TweenMax.to($("a#retour-video .icon-retour"),.2,{scale:"1.1",ease:Cubic.easeInOut}))},function(){TweenMax.to($("#bloc-retour-video"),.2,{x:"0px",ease:Cubic.easeInOut}),TweenMax.to($("a#retour-video .icon-retour"),.2,{scale:"1",ease:Cubic.easeInOut})}),$("a#plus-autres-videos").click(function(){return $("#bloc-autres-videos").hasClass("open")?$("#bloc-autres-videos").hasClass("canTween")&&(TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"-196px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{rotation:0,ease:Cubic.easeInOut}),$("#bloc-autres-videos").toggleClass("open")):$("#bloc-autres-videos").hasClass("canTween")&&(TweenMax.set($("#bloc-autres-videos"),{x:"0"}),TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"0px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{rotation:45,ease:Cubic.easeInOut}),$("#bloc-autres-videos").toggleClass("open")),!1})}function stopVideos(){$(".video-js").length&&$(".video-js")[0].player.pause()}function categBlocCopies(){$("html").hasClass("lt-ie9")||setTimeout(function(){$(".categ-bloc-copie").each(function(e){var a=$(this).parent(),t=$(".categ-bloc .txt-categ-bloc",a).width(),s=$(".categ-bloc .txt-categ-bloc",a).height();TweenMax.set($(".txt-categ-bloc-copie",this),{width:t+"px",height:s+"px"}),TweenMax.set($(this),{display:"block"})}),$(".detail-bloc-copie").each(function(e){var a=$(this).parent(),t=$(".detail-bloc .txt-detail-bloc",a).width(),s=$(".detail-bloc .txt-detail-bloc",a).height();TweenMax.set($(".txt-detail-bloc-copie",this),{width:t+"px",height:s+"px"}),TweenMax.set($(this),{display:"block"})}),$(".ribbon-copie").each(function(e){if($(window).width()>767){var a=$(this).parent(),t=$(".ribbon .ribbon-content",a).width(),s=$(".ribbon .ribbon-content",a).height();TweenMax.set($(".ribbon-content",this),{width:t+"px",height:s+"px"}),TweenMax.set($(this),{display:"block"})}})},500)}function blocPenche(){$("html").hasClass("lt-ie9")||$("body").hasClass("actus")||$("body").hasClass("blog")||$("body").hasClass("category")||$("body").hasClass("rh")||$("body").hasClass("recherche")||$("body").hasClass("search")||$(".bloc-penche").each(function(e){var a=$(this).height();a>300?TweenMax.set($(this),{rotation:0}):a>200?TweenMax.set($(this),{rotation:-3,x:0,y:0,z:0}):TweenMax.set($(this),{rotation:-4,x:0,y:0,z:0})})}function hoverBlocInnovation(){$("html").hasClass("lt-ie9")||$("#container-pop").parent(".bloc-small").hover(function(){TweenMax.fromTo($("#container-pop"),.5,{scale:"0"},{scale:"1",ease:Cubic.easeInOut}),TweenMax.fromTo($("#container-pop2"),.4,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.1}),TweenMax.fromTo($("#container-pop3"),.7,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.2}),TweenMax.fromTo($("#container-pop4"),.5,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.1})},function(){})}function lienSitemap(){TweenMax.set($("#sitemap-modal"),{y:50}),$("a#lien-sitemap").click(function(){return openModal(),!1}),$("#overlay").click(function(){return closeModal(),!1}),$("#lien-close-modal").click(function(){return closeModal(),!1}),$("a#menu-responsive").click(function(){return openModal(),!1})}function openModal(){TweenMax.to($("#overlay"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut}),TweenMax.to($("#sitemap-modal"),.4,{y:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-sitemap-modal"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut})}function closeModal(){TweenMax.to($("#overlay"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-sitemap-modal"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#sitemap-modal"),.4,{y:50,ease:Cubic.easeInOut})}function lienInterlocuteur(){TweenMax.set($("#interlocuteur-modal"),{y:50}),$("a.btn-interlocuteur").click(function(){return openInterlocuteurModal(),!1}),$("#overlay-interlocuteur").click(function(){return closeInterlocuteurModal(),!1}),$("#lien-close-interlocuteur-modal").click(function(){return closeInterlocuteurModal(),!1})}function openInterlocuteurModal(){TweenMax.to($("#overlay-interlocuteur"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut}),TweenMax.to($("#interlocuteur-modal"),.4,{y:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-interlocuteur-modal"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut})}function closeInterlocuteurModal(){TweenMax.to($("#overlay-interlocuteur"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-interlocuteur-modal"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#interlocuteur-modal"),.4,{y:50,ease:Cubic.easeInOut})}function liensSitemapMobile(){$("a.circle-sitemap").click(function(){if($(window).width()<=767){$(this).toggleClass("open");var e=$(this).parent();return $("ul.liste-liens-sitemap",e).slideToggle(),!1}})}function initSitemapMobile(){$("a.circle-sitemap.open").removeClass("open"),$(window).width()<=767?TweenMax.set($("ul.liste-liens-sitemap"),{display:"none"}):TweenMax.set($("ul.liste-liens-sitemap"),{display:"block"})}function initVideo(){$("#id-video-js").length&&(player=videojs("id-video-js",{techOrder:["youtube"],ytcontrols:!1}))}function svgFallback(){Modernizr.svg||$("object").each(function(e){var a=$(this).attr("data-fallback"),t=$(this).attr("id");$(this).after("<img src='"+a+"' alt='' id='"+t+"' />"),$(this).remove()})}function ordreBlocSmall(){$(".bloc-small").each(function(e){$(this).addClass("pos-"+(e+1))})}function btnInterlocuteur(){$(".btn-interlocuteur").click(function(){return!1})}function autresVideos(){$("ul#autres-videos li a").click(function(){if($(window).scrollTop(0),$("ul#autres-videos li.active").removeClass("active"),$(this).parent().addClass("active"),$(this).parent().hasClass("has-video")){var e=$(this).parent().data("url-video"),a=$(this).parent().data("poster-name");$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><video id='id-video-js' class='video-js vjs-default-skin' controls preload='auto' width='100%' height='100%' poster='"+a+"' src='"+e+"'></video></div>"),0!=player&&player.dispose(),initVideo()}else if($(this).parent().hasClass("has-calameo")){var t=$(this).parent().data("id-calameo");$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><iframe class='calameo-iframe' src='//v.calameo.com/?bkcode="+t+"&view=book' width='300' height='194' frameborder='0' scrolling='no' allowtransparency allowfullscreen style='margin:0 auto;'></iframe></div>")}else if($(this).parent().hasClass("has-image")){var s=$(this).parent().data("image-name");$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><div class='wrapper-img'><img src='"+s+"'></div></div>")}return updateUrlBlocVideo(),!1})}function isSafari(){-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("html").addClass("isSafari")}function btnCategoriesArticles(){TweenMax.set($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),{rotation:90}),$("a#btn-categories-articles").click(function(){return $("#categories-articles").hasClass("open")?($(window).width()>1024?TweenMax.set($("#categories-articles"),{display:"none"}):$("#categories-articles").slideToggle({duration:300,step:function(){$("body").hasClass("category")&&jsPlumb.repaint($(".wrapper-blocs .bloc-full"))}}),TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),.15,{rotation:90,ease:Cubic.easeInOut}),$("#categories-articles").removeClass("open")):($(window).width()>1024?(TweenMax.set($("#categories-articles"),{display:"block"}),TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),.15,{rotation:0,ease:Cubic.easeInOut})):($("#categories-articles").slideToggle({duration:300,step:function(){$("body").hasClass("category")&&jsPlumb.repaint($(".wrapper-blocs .bloc-full"))}}),TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),.15,{rotation:-90,ease:Cubic.easeInOut})),$("#categories-articles").addClass("open")),!1})}function refreshLink(){if($("body").hasClass("category")||$("body").hasClass("rh")||$("body").hasClass("recherche")||$("body").hasClass("search")){var e=$(".wrapper-blocs .bloc-full").length;$(".wrapper-blocs .bloc-full").each(function(a){e-1>a&&(jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$(this),target:$(this).nextAll(".wrapper-blocs .bloc-full").eq(0),anchors:[[.5,.9,0,0],[.5,.1,0,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]}))})}}function loader(){TweenMax.to($("#infscr-loading").find("img"),.5,{rotation:360,repeat:-1,ease:Quad.easeInOut}),setTimeout(loader,500)}function scanUrl(){var e=window.location.pathname,a=window.location.hash.split("#");if(a.length>=3)switch(a[1]){case"video":$("ul#autres-videos li.has-video[data-url-video='"+a[2]+"'][data-poster-name='"+a[3]+"']").length&&($("ul#autres-videos li.active").removeClass("active"),$("ul#autres-videos li.has-video[data-url-video='"+a[2]+"'][data-poster-name='"+a[3]+"']").parent().addClass("active"),$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><video id='id-video-js' class='video-js vjs-default-skin' controls preload='auto' width='100%' height='100%' poster='"+a[3]+"' src='"+a[2]+"'></video></div>"),0!=player&&player.dispose(),initVideo(),ouvrirBlocVideo());break;case"calameo":$("ul#autres-videos li.has-calameo[data-id-calameo='"+a[2]+"']").length&&($("#wrapper-embed").replaceWith("<div id='wrapper-embed'><iframe class='calameo-iframe' src='//v.calameo.com/?bkcode="+a[2]+"&view=book' width='300' height='194' frameborder='0' scrolling='no' allowtransparency allowfullscreen style='margin:0 auto;'></iframe></div>"),ouvrirBlocVideo());break;case"image":$("ul#autres-videos li.has-image[data-image-name='"+a[2]+"']").length&&($("#wrapper-embed").replaceWith("<div id='wrapper-embed'><div class='wrapper-img'><img src='"+a[2]+"'></div></div>"),ouvrirBlocVideo())}}function checkMedia(){var e="http://stereosuper.fr/valid/IMA/site/wordpress/rse/",a=document.location.pathname.split("/");if(""===a[a.length-1])var t=a[a.length-2];else var t=a[a.length-1];$("a").each(function(e){if($(this).attr("href").split("#").length>=3){var a=$(this).attr("href").substr(0,$(this).attr("href").indexOf("#")).split("/");if(""===a[a.length-1])var s=a[a.length-2];else var s=a[a.length-1];s===t&&$(this).click(function(){var e=$(this).attr("href").split("#");if(e.length>=3)switch(e[1]){case"video":$("ul#autres-videos li.has-video[data-url-video='"+e[2]+"'][data-poster-name='"+e[3]+"']").length&&($("ul#autres-videos li.active").removeClass("active"),$("ul#autres-videos li.has-video[data-url-video='"+e[2]+"'][data-poster-name='"+e[3]+"']").parent().addClass("active"),$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><video id='id-video-js' class='video-js vjs-default-skin' controls preload='auto' width='100%' height='100%' poster='"+e[3]+"' src='"+e[2]+"'></video></div>"),0!=player&&player.dispose(),initVideo(),ouvrirBlocVideo());break;case"calameo":$("ul#autres-videos li.has-calameo[data-id-calameo='"+e[2]+"']").length&&($("#wrapper-embed").replaceWith("<div id='wrapper-embed'><iframe class='calameo-iframe' src='//v.calameo.com/?bkcode="+e[2]+"&view=book' width='300' height='194' frameborder='0' scrolling='no' allowtransparency allowfullscreen style='margin:0 auto;'></iframe></div>"),ouvrirBlocVideo());break;case"image":$("ul#autres-videos li.has-image[data-image-name='"+e[2]+"']").length&&($("#wrapper-embed").replaceWith("<div id='wrapper-embed'><div class='wrapper-img'><img src='"+e[2]+"'></div></div>"),ouvrirBlocVideo())}return!1})}})}function preventEmptySearch(){$("#search-sitemap").on("submit",function(e){var a=$(".input-search-sitemap"),t=a.val(),s=t.length;return 0===s?(a.focus(),void e.preventDefault()):void 0})}var tlMenuWrapper;tlMenuWrapper=new TimelineMax;var tlCircleDashed;tlCircleDashed=new TimelineMax;var tlCircles;tlCircles=new TimelineMax;var tlWrapperBlocs;tlWrapperBlocs=new TimelineMax;var player=0;!function(){for(var e=0,a=["ms","moz","webkit","o"],t=0;t<a.length&&!window.requestAnimationFrame;++t)window.requestAnimationFrame=window[a[t]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[a[t]+"CancelAnimationFrame"]||window[a[t]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(a,t){var s=(new Date).getTime(),i=Math.max(0,16-(s-e)),o=window.setTimeout(function(){a(s+i)},i);return e=s+i,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),$(function(){function e(){$("#zone-actus a.btn-bloc").click(function(){return $(this).hasClass("btn-actu")?void 0:($(this).hasClass("open")?($(this).removeClass("open"),TweenMax.set($(".btn-icon-plus",this),{display:"block"}),TweenMax.set($(".btn-icon-moins",this),{display:"none"})):($(this).addClass("open"),TweenMax.to($(this).closest(".bloc-penche"),.3,{rotation:0}),TweenMax.set($(".btn-icon-plus",this),{display:"none"}),TweenMax.set($(".btn-icon-moins",this),{display:"block"})),$(".suite-bloc").slideToggle({duration:300,step:function(){$("body").hasClass("has-bloc-small")&&($("html").hasClass("lt-ie9")||(s.repaint($("#bloc-actus")),s.repaint($(".bloc-small").first())))},complete:function(){var e=$(this).closest(".bloc-penche").height();e>300?TweenMax.to($(this).closest(".bloc-penche"),.2,{rotation:0}):e>200?TweenMax.to($(this).closest(".bloc-penche"),.2,{rotation:-3,x:0,y:0,z:0}):TweenMax.to($(this).closest(".bloc-penche"),.2,{rotation:-4,x:0,y:0,z:0})}}),!1)})}var a=[[[1,.6,.5,.8],[.1,.8,0,.5]],[[1,.4,0,1],[.1,.7,.2,0]],[[.51,1,0,1],[.7,.1,0,0]],[[0,.2,0,.5],[.5,0,0,-1.5]],[[1,.6,0,1],[0,.9,0,1]]];if(!$("html").hasClass("lt-ie9")){var t=jsPlumb.getInstance();t.setContainer($("#zone-blocs-accueil"));var s=jsPlumb.getInstance();s.setContainer($(".wrapper-blocs"))}checkMedia(),scanUrl(),animer(),$(window).width()>1024&&setTimeout(function(){menuOuvertDefault()},1e3),$("html").hasClass("lt-ie9")&&ordreBlocSmall(),isSafari(),hoverMenu(),categBlocCopies(),blocPenche(),lienSitemap(),lienInterlocuteur(),initSitemapMobile(),liensSitemapMobile(),initVideo(),svgFallback(),e(),btnInterlocuteur(),autresVideos(),btnCategoriesArticles(),preventEmptySearch(),$("body").hasClass("accueil")&&hoverBlocInnovation(),$("body").hasClass("has-video")&&(btnVideoClick(),btnRetourVideoClick(),btnPlusVideos()),($("body").hasClass("blog")||$("body").hasClass("category"))&&loader(),$(window).resize(function(){if(initSitemapMobile(),!$("html").hasClass("lt-ie9")&&($("body").hasClass("has-bloc-small")&&(t.repaint($(".bloc-small")),s.repaint($("#bloc-actus"))),($("body").hasClass("category")||$("body").hasClass("rh")||$("body").hasClass("recherche")||$("body").hasClass("search"))&&jsPlumb.repaint($(".wrapper-blocs .bloc-full")),$("body").hasClass("contact")&&($(window).width()>=979?(jsPlumb.detachAllConnections($("#bloc-adresse")),jsPlumb.detachAllConnections($("#pin-map")),jsPlumb.setContainer($("#container-bg-map")),jsPlumb.connect({source:$("#bloc-adresse"),target:$("#pin-map"),anchors:[[.5,0,0,0],[1,.5,1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})):(jsPlumb.detachAllConnections($("#bloc-adresse")),jsPlumb.detachAllConnections($("#pin-map")))),!$("html").hasClass("isSafari")&&!$("html").hasClass("lt-ie9")&&$("body").hasClass("has-video")&&!$("#etiquette").length))if($(window).width()>=1250)if(jsPlumb.detachAllConnections($(".bloc-btn-video")),$("body").hasClass("accueil")){var e=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#menu-wrapper"),target:$(".bloc-btn-video"),anchors:[[.97,.5,1,0],[0,.5,-1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Flowchart",{stub:400,cornerRadius:40,gap:40}]})}else{var e=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#bloc-actus"),target:$(".bloc-btn-video"),anchors:[[.97,.35,1,0],[0,.5,-.5,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})}else jsPlumb.detachAllConnections($(".bloc-btn-video"));$(window).width()>1024?$("html").hasClass("lt-ie9")?TweenMax.set($(".wrapper-blocs"),{marginTop:"-50px"}):TweenMax.set($(".wrapper-blocs"),{marginTop:"-90px"}):TweenMax.set($(".wrapper-blocs"),{marginTop:"0px"})}),$("html").hasClass("lt-ie9")||jsPlumb.ready(function(){if(isSafari(),!$("html").hasClass("lt-ie9")){if($("body").hasClass("has-bloc-small")){var e=$(".bloc-small").length;$(".bloc-small").each(function(s){e-1>s&&t.connect({source:$(this),target:$(this).nextAll(".bloc-small").eq(0),anchors:a[s],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]})}),s.connect({source:$("#bloc-actus"),target:$(".bloc-small").first(),anchors:[[.2,1,-1,0],[.4,.1,0,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]})}if(!$("html").hasClass("isSafari")&&!$("html").hasClass("lt-ie9")&&$("body").hasClass("has-video")&&!$("#etiquette").length&&$(window).width()>=1250)if($("body").hasClass("accueil")){var i=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#menu-wrapper"),target:$(".bloc-btn-video"),anchors:[[.97,.5,1,0],[0,.5,-1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Flowchart",{stub:400,cornerRadius:40,gap:40}]})}else{var i=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#bloc-actus"),target:$(".bloc-btn-video"),anchors:[[.97,.35,1,0],[0,.5,-.5,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})}$("body").hasClass("contact")&&$(window).width()>=979&&(jsPlumb.setContainer($("#container-bg-map")),jsPlumb.connect({source:$("#bloc-adresse"),target:$("#pin-map"),anchors:[[.5,0,1,0],[1,.5,-.5,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})),$("#etiquette").length&&(jsPlumb.setContainer($("body")),jsPlumb.connect({source:$("#zone-actus"),target:$("#etiquette"),anchors:[[.95,.4,0,0],[.28,.06,0,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]}))}refreshLink()}),$(document).scroll(function(){$("html").hasClass("lt-ie9")||$("body").hasClass("has-video")&&!$("#etiquette").length&&$(window).width()>=1250&&(jsPlumb.repaint($(".bloc-btn-video"),{left:$(".bloc-btn-video").offset().left,top:$(".bloc-btn-video").offset().top}),$("body").hasClass("accueil")||jsPlumb.repaint($("#bloc-actus")))})});