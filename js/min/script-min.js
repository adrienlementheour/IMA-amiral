function animer(){requestAnimFrame(function(){var e=$(window).scrollTop();$("#div-test").css("top",$("body").scrollTop()+20),jsPlumb.setSuspendDrawing(!1),$("body").hasClass("has-bloc-small")&&(jsPlumb.repaint($(".bloc-small").first()),jsPlumb.repaint($("#bloc-actus"))),$("body").hasClass("has-video")&&$(window).width()>=1250&&($("body").hasClass("accueil")||$("html").hasClass("isSafari")||jsPlumb.repaint($(".bloc-btn-video"),{left:Math.round($(".bloc-btn-video").offset().left),top:Math.round($(".bloc-btn-video").offset().top)})),(TweenMax.isTweening($("#wrapper-content"))||TweenMax.isTweening($("#container-menu-wrapper"))||TweenMax.isTweening($("#menu-wrapper"))||TweenMax.isTweening($("#menu-wrapper ul"))||TweenMax.isTweening($("#menu-wrapper ul li"))||TweenMax.isTweening($("#menu-wrapper ul li a .txt-circle"))||TweenMax.isTweening($("#circle-dashed-container")))&&($("body").hasClass("has-video")&&$("body").hasClass("accueil")&&($("html").hasClass("isSafari")||(jsPlumb.repaint($("#menu-wrapper")),jsPlumb.repaint($(".bloc-btn-video"),{left:$(".bloc-btn-video").offset().left,top:$(".bloc-btn-video").offset().top}))),$("body").hasClass("contact")&&$(window).width()>=979&&jsPlumb.repaint($("#bloc-adresse"),{left:Math.round($("#bloc-adresse").offset().left),top:Math.round($("#bloc-adresse").offset().top)}),($("body").hasClass("actus")||$("body").hasClass("blog")||$("body").hasClass("category")||$("body").hasClass("rh"))&&jsPlumb.repaint($(".wrapper-blocs .bloc-full"))),$("body").hasClass("rh-detail")&&(e>$("#bloc-actus").offset().top&&e<$("#bloc-actus").offset().top+$("#bloc-actus").height()-50?TweenMax.set($("a.btn-postuler"),{position:"fixed",right:"inherit",left:$("#bloc-actus").offset().left+$("#bloc-actus").width()-25+"px"}):TweenMax.set($("a.btn-postuler"),{position:"absolute",right:"-23px",left:"inherit"})),animer()})}function menuOuvertDefault(){$(window).width()>1024&&null==$.cookie("cookieMenu")&&($.cookie("cookieMenu","open"),ouvertureMenu(),setTimeout(function(){fermetureMenu()},2e3))}function ouvertureMenu(){function e(){tlCircles.to($("#menu-wrapper ul li").eq(0),.3,{top:"94px",left:"300px",ease:Cubic.easeInOut}),tlCircles.to($("#menu-wrapper ul li").eq(1),.3,{top:"235px",left:"310px",delay:.05,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(2),.3,{top:"321px",left:"166px",delay:.1,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(3),.3,{top:"235px",left:"20px",delay:.2,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(4),.3,{top:"94px",left:"32px",delay:.25,ease:Cubic.easeInOut},0)}TweenMax.set($("#menu-wrapper"),{css:{className:"+=active"}}),tlMenuWrapper.remove(),tlCircleDashed.remove(),tlCircles.remove(),tlWrapperBlocs.remove(),tlMenuWrapper=new TimelineMax,tlCircleDashed=new TimelineMax,tlCircles=new TimelineMax,tlWrapperBlocs=new TimelineMax,TweenMax.to($("#label-menu"),.05,{opacity:0,display:"none",ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul"),.05,{scale:1.2,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul"),.05,{scale:1,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul li"),.1,{left:"40%",top:"40%",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.05,{scale:1.2,ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#container-menu-wrapper"),.2,{marginTop:"-110px",ease:Cubic.easeInOut}),$("html").hasClass("lt-ie9")?tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"20px",ease:Cubic.easeInOut,delay:.2}):tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-10px",ease:Cubic.easeInOut,delay:.2}),tlMenuWrapper.set($("#menu-wrapper ul li"),{width:"98px",height:"98px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"),{display:"inline-block",ease:Cubic.easeInOut,onComplete:e}),tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"),{width:"312px",height:"312px",marginTop:"-156px",marginLeft:"-156px",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.2,{scale:1,delay:.3,ease:Cubic.easeInOut})}function fermetureMenu(){function e(){tlCircles.to($("#menu-wrapper ul li").eq(0),.4,{top:"221px",left:"312px",ease:Cubic.easeInOut}),tlCircles.to($("#menu-wrapper ul li").eq(1),.4,{top:"281px",left:"277px",delay:.05,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(2),.4,{top:"312px",left:"205px",delay:.1,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(3),.4,{top:"281px",left:"130px",delay:.2,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li").eq(4),.4,{top:"221px",left:"98px",delay:.25,ease:Cubic.easeInOut},0),tlCircles.to($("#label-menu"),.15,{opacity:1,display:"block",ease:Cubic.easeInOut})}TweenMax.set($("#menu-wrapper"),{css:{className:"-=active"}}),tlMenuWrapper.remove(),tlCircleDashed.remove(),tlCircles.remove(),tlWrapperBlocs.remove(),tlMenuWrapper=new TimelineMax,tlCircleDashed=new TimelineMax,tlCircles=new TimelineMax,tlWrapperBlocs=new TimelineMax,tlMenuWrapper.set($("#menu-wrapper ul"),{scale:1,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul li"),.3,{left:"40%",top:"40%",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#container-menu-wrapper"),.5,{marginTop:"-180px",ease:Cubic.easeInOut}),$("html").hasClass("lt-ie9")?tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-50px",ease:Cubic.easeInOut,delay:.3}):tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-90px",ease:Cubic.easeInOut,delay:.3}),tlMenuWrapper.set($("#menu-wrapper ul li"),{width:"20px",height:"20px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a"),{borderWidth:"0px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"),{display:"none",ease:Cubic.easeInOut,onComplete:e}),tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"),{width:"224px",height:"224px",marginTop:"-112px",marginLeft:"-112px",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:1,delay:.7,ease:Cubic.easeInOut})}function hoverMenu(){var e;e=new TimelineMax;var t;t=new TimelineMax;var a;a=new TimelineMax,$("#menu-wrapper").hover(function(){ouvertureMenu()},function(){fermetureMenu()})}function btnVideoClick(){$("a.btn-video").click(function(){return $("body").addClass("video-ouverte"),TweenMax.set($("footer"),{display:"none"}),TweenMax.to($("#wrapper-content"),.5,{x:"-100%",ease:Cubic.easeInOut,onComplete:completeWrapperContent}),TweenMax.to($("#bloc-menu-responsive"),.5,{x:"-100%",ease:Cubic.easeInOut}),tlBlocVisuContent=new TimelineMax,tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.5,{right:"50%",marginRight:"-21.5%",ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.2,{opacity:0,ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#fond-couleur-bloc-visu"),.2,{opacity:0,display:"none",ease:Cubic.easeInOut,onComplete:completeFondCouleur}),!1})}function completeWrapperContent(){}function completeFondCouleur(){TweenMax.set($("#bloc-visu"),{display:"none"}),TweenMax.set($("#container-bloc-visu-content"),{display:"none"});var e=new TimelineMax({onComplete:addClassBlocAutresVideos});e.to($("#bloc-autres-videos"),.4,{marginRight:"0",ease:Cubic.easeInOut}),e.to($("#bloc-autres-videos"),.4,{marginRight:"-196px",delay:1.2,ease:Cubic.easeInOut}),e.to($("#bloc-retour-video"),.2,{marginLeft:"0px",ease:Cubic.easeInOut})}function addClassBlocAutresVideos(){$("#bloc-autres-videos").addClass("canTween")}function btnRetourVideoClick(){$("a#retour-video").click(function(){return $("body").removeClass("video-ouverte"),$("#bloc-autres-videos").removeClass("canTween"),stopVideos(),TweenMax.set($("#wrapper-content"),{display:"block"}),TweenMax.set($("#bloc-visu"),{display:"block"}),TweenMax.set($("#container-bloc-visu-content"),{display:"block"}),TweenMax.to($("#bloc-menu-responsive"),.2,{x:"0%",delay:1,ease:Cubic.easeInOut,onComplete:blocMenuResponsiveRetour}),TweenMax.to($("#bloc-retour-video"),.2,{marginLeft:"-200px",ease:Cubic.easeInOut}),TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"-250px",x:"0px",ease:Cubic.easeInOut}),tlBlocVisuContentRetour=new TimelineMax,tlBlocVisuContentRetour.to($("#fond-couleur-bloc-visu"),.2,{opacity:1,display:"block",ease:Cubic.easeInOut}),tlBlocVisuContentRetour.to($("#bloc-fond-visu .bloc-visu-content"),.2,{opacity:1,ease:Cubic.easeInOut,onComplete:completeFondCouleurRetour}),!1})}function blocMenuResponsiveRetour(){TweenMax.set($("footer"),{display:"block"})}function completeFondCouleurRetour(){TweenMax.to($("#bloc-fond-visu .bloc-visu-content"),.5,{right:"0",marginRight:"0%",ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-content"),.5,{x:"0%",ease:Cubic.easeInOut})}function btnPlusVideos(){$("a#plus-autres-videos").hover(function(){!$("#bloc-autres-videos").hasClass("canTween")||isMobile.any||$("#bloc-autres-videos").hasClass("open")||(TweenMax.to($("#bloc-autres-videos"),.2,{x:"-20px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{scale:"1.1",ease:Cubic.easeInOut}))},function(){TweenMax.to($("#bloc-autres-videos"),.2,{x:"0px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{scale:"1",ease:Cubic.easeInOut})}),$("a#plus-autres-videos").click(function(){return $("#bloc-autres-videos").hasClass("open")?$("#bloc-autres-videos").hasClass("canTween")&&(TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"-196px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{rotation:0,ease:Cubic.easeInOut}),$("#bloc-autres-videos").toggleClass("open")):$("#bloc-autres-videos").hasClass("canTween")&&(TweenMax.set($("#bloc-autres-videos"),{x:"0"}),TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"0px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{rotation:45,ease:Cubic.easeInOut}),$("#bloc-autres-videos").toggleClass("open")),!1})}function stopVideos(){$(".video-js").length&&$(".video-js")[0].player.pause()}function categBlocCopies(){$("html").hasClass("lt-ie9")||setTimeout(function(){$(".categ-bloc-copie").each(function(e){var t=$(this).parent(),a=$(".categ-bloc .txt-categ-bloc",t).width(),n=$(".categ-bloc .txt-categ-bloc",t).height();TweenMax.set($(".txt-categ-bloc-copie",this),{width:a+"px",height:n+"px"}),TweenMax.set($(this),{display:"block"})}),$(".detail-bloc-copie").each(function(e){var t=$(this).parent(),a=$(".detail-bloc .txt-detail-bloc",t).width(),n=$(".detail-bloc .txt-detail-bloc",t).height();TweenMax.set($(".txt-detail-bloc-copie",this),{width:a+"px",height:n+"px"}),TweenMax.set($(this),{display:"block"})}),$(".ribbon-copie").each(function(e){if($(window).width()>767){var t=$(this).parent(),a=$(".ribbon .ribbon-content",t).width(),n=$(".ribbon .ribbon-content",t).height();TweenMax.set($(".ribbon-content",this),{width:a+"px",height:n+"px"}),TweenMax.set($(this),{display:"block"})}})},500)}function blocPenche(){(!$("html").hasClass("lt-ie9")&&!$("body").hasClass("actus")&&!$("body").hasClass("blog")||$("body").hasClass("category")&&!$("body").hasClass("rh"))&&$(".bloc-penche").each(function(e){var t=$(this).height();t>300?TweenMax.set($(this),{rotation:0}):t>200?TweenMax.set($(this),{rotation:-3,x:0,y:0,z:0}):TweenMax.set($(this),{rotation:-4,x:0,y:0,z:0})})}function hoverBlocInnovation(){$("html").hasClass("lt-ie9")||$("#container-pop").parent(".bloc-small").hover(function(){TweenMax.fromTo($("#container-pop"),.5,{scale:"0"},{scale:"1",ease:Cubic.easeInOut}),TweenMax.fromTo($("#container-pop2"),.4,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.1}),TweenMax.fromTo($("#container-pop3"),.7,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.2}),TweenMax.fromTo($("#container-pop4"),.5,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.1})},function(){})}function lienSitemap(){TweenMax.set($("#sitemap-modal"),{y:50}),$("a#lien-sitemap").click(function(){return openModal(),!1}),$("#overlay").click(function(){return closeModal(),!1}),$("#lien-close-modal").click(function(){return closeModal(),!1}),$("a#menu-responsive").click(function(){return openModal(),!1})}function openModal(){TweenMax.to($("#overlay"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut}),TweenMax.to($("#sitemap-modal"),.4,{y:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-sitemap-modal"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut})}function closeModal(){TweenMax.to($("#overlay"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-sitemap-modal"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#sitemap-modal"),.4,{y:50,ease:Cubic.easeInOut})}function lienInterlocuteur(){TweenMax.set($("#interlocuteur-modal"),{y:50}),$("a.btn-interlocuteur").click(function(){return openInterlocuteurModal(),!1}),$("#overlay-interlocuteur").click(function(){return closeInterlocuteurModal(),!1}),$("#lien-close-interlocuteur-modal").click(function(){return closeInterlocuteurModal(),!1})}function openInterlocuteurModal(){TweenMax.to($("#overlay-interlocuteur"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut}),TweenMax.to($("#interlocuteur-modal"),.4,{y:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-interlocuteur-modal"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut})}function closeInterlocuteurModal(){TweenMax.to($("#overlay-interlocuteur"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-interlocuteur-modal"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#interlocuteur-modal"),.4,{y:50,ease:Cubic.easeInOut})}function liensSitemapMobile(){$("a.circle-sitemap").click(function(){if($(window).width()<=767){$(this).toggleClass("open");var e=$(this).parent();return $("ul.liste-liens-sitemap",e).slideToggle(),!1}})}function initSitemapMobile(){$("a.circle-sitemap.open").removeClass("open"),$(window).width()<=767?TweenMax.set($("ul.liste-liens-sitemap"),{display:"none"}):TweenMax.set($("ul.liste-liens-sitemap"),{display:"block"})}function initVideo(){$("#id-video-js").length&&(player=videojs("id-video-js",{techOrder:["youtube"],ytcontrols:!1}))}function svgFallback(){Modernizr.svg||$("object").each(function(e){var t=$(this).attr("data-fallback"),a=$(this).attr("id");$(this).after("<img src='"+t+"' alt='' id='"+a+"' />"),$(this).remove()})}function clicLireLaSuite(){$("#zone-actus a.btn-bloc").click(function(){return $(this).hasClass("btn-actu")?void 0:($(this).hasClass("open")?$(this).removeClass("open"):($(this).addClass("open"),TweenMax.to($(this).closest(".bloc-penche"),.3,{rotation:0})),$(".suite-bloc").slideToggle(300,function(){var e=$(this).closest(".bloc-penche").height();e>300?TweenMax.to($(this).closest(".bloc-penche"),.2,{rotation:0}):e>200?TweenMax.to($(this).closest(".bloc-penche"),.2,{rotation:-3,x:0,y:0,z:0}):TweenMax.to($(this).closest(".bloc-penche"),.2,{rotation:-4,x:0,y:0,z:0})}),!1)})}function ordreBlocSmall(){$(".bloc-small").each(function(e){$(this).addClass("pos-"+(e+1))})}function btnInterlocuteur(){$(".btn-interlocuteur").click(function(){return!1})}function autresVideos(){$("ul#autres-videos li a").click(function(){if($("ul#autres-videos li.active").removeClass("active"),$(this).parent().addClass("active"),$(this).parent().hasClass("has-video")){var e=$(this).parent().data("url-video"),t=$(this).parent().data("poster-name");$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><video id='id-video-js' class='video-js vjs-default-skin' controls preload='auto' width='100%' height='100%' poster='"+t+"' src='"+e+"'></video></div>"),0!=player&&player.dispose(),initVideo()}else if($(this).parent().hasClass("has-calameo")){var a=$(this).parent().data("id-calameo");$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><iframe class='calameo-iframe' src='//v.calameo.com/?bkcode="+a+"&view=book' width='300' height='194' frameborder='0' scrolling='no' allowtransparency allowfullscreen style='margin:0 auto;'></iframe></div>")}else if($(this).parent().hasClass("has-image")){var n=$(this).parent().data("image-name");$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><div class='wrapper-img'><img src='"+n+"'></div></div>")}return!1})}function isSafari(){-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")&&$("html").addClass("isSafari")}function btnCategoriesArticles(){TweenMax.set($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),{rotation:90}),$("a#btn-categories-articles").click(function(){return $("#categories-articles").hasClass("open")?($(window).width()>1024?TweenMax.set($("#categories-articles"),{display:"none"}):$("#categories-articles").slideToggle({duration:300,step:function(){($("body").hasClass("actus")||$("body").hasClass("blog")||$("body").hasClass("category"))&&jsPlumb.repaint($(".wrapper-blocs .bloc-full"))}}),TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),.15,{rotation:90,ease:Cubic.easeInOut}),$("#categories-articles").removeClass("open")):($(window).width()>1024?(TweenMax.set($("#categories-articles"),{display:"block"}),TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),.15,{rotation:0,ease:Cubic.easeInOut})):($("#categories-articles").slideToggle({duration:300,step:function(){($("body").hasClass("actus")||$("body").hasClass("blog")||$("body").hasClass("category"))&&jsPlumb.repaint($(".wrapper-blocs .bloc-full"))}}),TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"),.15,{rotation:-90,ease:Cubic.easeInOut})),$("#categories-articles").addClass("open")),!1})}function refreshLink(){if($("body").hasClass("actus")||$("body").hasClass("blog")||$("body").hasClass("category")||$("body").hasClass("rh")){var e=$(".wrapper-blocs .bloc-full").length;$(".wrapper-blocs .bloc-full").each(function(t){e-1>t&&(jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$(this),target:$(this).nextAll(".wrapper-blocs .bloc-full").eq(0),anchors:[[.5,.9,0,0],[.5,.1,0,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]}))})}}function loader(){TweenMax.to($("#infscr-loading").find("img"),3,{rotation:360,repeat:-1,ease:Quad.easeInOut})}var tlMenuWrapper;tlMenuWrapper=new TimelineMax;var tlCircleDashed;tlCircleDashed=new TimelineMax;var tlCircles;tlCircles=new TimelineMax;var tlWrapperBlocs;tlWrapperBlocs=new TimelineMax;var player=0;!function(){for(var e=0,t=["ms","moz","webkit","o"],a=0;a<t.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[t[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[a]+"CancelAnimationFrame"]||window[t[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,a){var n=(new Date).getTime(),s=Math.max(0,16-(n-e)),o=window.setTimeout(function(){t(n+s)},s);return e=n+s,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),$(document).ready(function(){animer(),$(window).width()>1024&&setTimeout(function(){menuOuvertDefault()},1e3),$("html").hasClass("lt-ie9")&&ordreBlocSmall(),isSafari(),hoverMenu(),categBlocCopies(),blocPenche(),lienSitemap(),lienInterlocuteur(),initSitemapMobile(),liensSitemapMobile(),initVideo(),svgFallback(),clicLireLaSuite(),btnInterlocuteur(),autresVideos(),btnCategoriesArticles(),$("body").hasClass("accueil")&&hoverBlocInnovation(),$("body").hasClass("has-video")&&(btnVideoClick(),btnRetourVideoClick(),btnPlusVideos())}),$(document).scroll(function(){$("body").hasClass("has-video")&&$(window).width()>=1250&&(jsPlumb.repaint($(".bloc-btn-video"),{left:$(".bloc-btn-video").offset().left,top:$(".bloc-btn-video").offset().top}),$("body").hasClass("accueil")||jsPlumb.repaint($("#bloc-actus"))),$("body").hasClass("actus")||$("body").hasClass("blog")||$("body").hasClass("category"),($("body").hasClass("blog")||$("body").hasClass("category"))&&loader()}),$(window).resize(function(){if(initSitemapMobile(),$("body").hasClass("has-bloc-small")&&jsPlumb.repaint($(".bloc-small")),($("body").hasClass("actus")||$("body").hasClass("blog")||$("body").hasClass("category")||$("body").hasClass("rh"))&&jsPlumb.repaint($(".wrapper-blocs .bloc-full")),$("body").hasClass("contact")&&($(window).width()>=979?(jsPlumb.detachAllConnections($("#bloc-adresse")),jsPlumb.detachAllConnections($("#pin-map")),jsPlumb.setContainer($("#container-bg-map")),jsPlumb.connect({source:$("#bloc-adresse"),target:$("#pin-map"),anchors:[[.5,0,0,0],[1,.5,1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})):(jsPlumb.detachAllConnections($("#bloc-adresse")),jsPlumb.detachAllConnections($("#pin-map")))),!$("html").hasClass("isSafari")&&$("body").hasClass("has-video"))if($(window).width()>=1250)if(jsPlumb.detachAllConnections($(".bloc-btn-video")),$("body").hasClass("accueil")){var e=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#menu-wrapper"),target:$(".bloc-btn-video"),anchors:[[.97,.5,1,0],[0,.5,-1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Flowchart",{stub:400,cornerRadius:40,gap:40}]})}else{var e=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#bloc-actus"),target:$(".bloc-btn-video"),anchors:[[.97,.35,1,0],[0,.5,-.5,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})}else jsPlumb.detachAllConnections($(".bloc-btn-video"));$(window).width()>1024?$("html").hasClass("lt-ie9")?TweenMax.set($(".wrapper-blocs"),{marginTop:"-50px"}):TweenMax.set($(".wrapper-blocs"),{marginTop:"-90px"}):TweenMax.set($(".wrapper-blocs"),{marginTop:"0px"})});var anchors=[[[1,.6,.5,.8],[.1,.8,0,.5]],[[1,.3,0,-.8],[0,.9,.2,-.7]],[[.51,1,0,1],[.7,0,0,1]],[[0,.2,0,.5],[.5,0,0,-1.5]],[[1,.6,0,1],[0,.9,0,1]]];jsPlumb.ready(function(){if(isSafari(),$("body").hasClass("has-bloc-small")){var e=$(".bloc-small").length;$(".bloc-small").each(function(t){if(e-1>t){var a=jsPlumb.getInstance();jsPlumb.setContainer($("#content")),jsPlumb.connect({source:$(this),target:$(this).nextAll(".bloc-small").eq(0),anchors:anchors[t],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]})}});var t=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#bloc-actus"),target:$(".bloc-small").first(),anchors:[[.2,1,-1,0],[.4,0,0,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]})}if(!$("html").hasClass("isSafari")&&$("body").hasClass("has-video")&&$(window).width()>=1250)if($("body").hasClass("accueil")){var a=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#menu-wrapper"),target:$(".bloc-btn-video"),anchors:[[.97,.5,1,0],[0,.5,-1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Flowchart",{stub:400,cornerRadius:40,gap:40}]})}else{var a=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#bloc-actus"),target:$(".bloc-btn-video"),anchors:[[.97,.35,1,0],[0,.5,-.5,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})}$("body").hasClass("contact")&&$(window).width()>=979&&(jsPlumb.setContainer($("#container-bg-map")),jsPlumb.connect({source:$("#bloc-adresse"),target:$("#pin-map"),anchors:[[.5,0,0,0],[1,.5,1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:200}]})),refreshLink()});