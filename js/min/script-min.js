function animer(){requestAnimFrame(function(){jsPlumb.setSuspendDrawing(!1),(TweenMax.isTweening($("#wrapper-content"))||TweenMax.isTweening($("#container-menu-wrapper"))||TweenMax.isTweening($("#menu-wrapper"))||TweenMax.isTweening($("#menu-wrapper ul"))||TweenMax.isTweening($("#menu-wrapper ul li"))||TweenMax.isTweening($("#menu-wrapper ul li a .txt-circle"))||TweenMax.isTweening($("#circle-dashed-container")))&&(jsPlumb.repaint($(".bloc-1")),jsPlumb.repaint($("#bloc-actus")),jsPlumb.repaint($("#menu-wrapper")),jsPlumb.repaint($(".bloc-btn-video"),{left:$(".bloc-btn-video").offset().left,top:$(".bloc-btn-video").offset().top})),animer()})}function menuOuvertDefault(){$(window).width()>1024&&(ouvertureMenu(),setTimeout(function(){fermetureMenu()},2e3))}function initMenu(){TweenMax.from($("#menu-wrapper ul"),.3,{scale:.8,rotation:-30,delay:.5,ease:Cubic.easeInOut}),TweenMax.from($("#menu-wrapper #circle-dashed-container"),.3,{scale:.8,rotation:-30,delay:.5,ease:Cubic.easeInOut}),TweenMax.from($("#zone-actus"),.3,{marginTop:"-30px",delay:.5,ease:Cubic.easeInOut,onComplete:menuOuvertDefault})}function ouvertureMenu(){function e(){tlCircles.to($("#menu-wrapper ul li.circle-vehicules"),.3,{top:"94px",left:"300px",ease:Cubic.easeInOut}),tlCircles.to($("#menu-wrapper ul li.circle-formation"),.3,{top:"235px",left:"310px",delay:.05,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li.circle-offre-conseil"),.3,{top:"321px",left:"166px",delay:.1,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li.circle-service-client"),.3,{top:"235px",left:"20px",delay:.2,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li.circle-juridique"),.3,{top:"94px",left:"32px",delay:.25,ease:Cubic.easeInOut},0)}TweenMax.set($("#menu-wrapper"),{css:{className:"+=active"}}),tlMenuWrapper.remove(),tlCircleDashed.remove(),tlCircles.remove(),tlWrapperBlocs.remove(),tlMenuWrapper=new TimelineMax,tlCircleDashed=new TimelineMax,tlCircles=new TimelineMax,tlWrapperBlocs=new TimelineMax,TweenMax.to($("#label-menu"),.05,{opacity:0,display:"none",ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul"),.05,{scale:1.2,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul"),.05,{scale:1,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul li"),.1,{left:"40%",top:"40%",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.05,{scale:1.2,ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#container-menu-wrapper"),.2,{marginTop:"-110px",ease:Cubic.easeInOut}),$("html").hasClass("lt-ie9")?tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"20px",ease:Cubic.easeInOut,delay:.2}):tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-10px",ease:Cubic.easeInOut,delay:.2}),tlMenuWrapper.set($("#menu-wrapper ul li"),{width:"98px",height:"98px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"),{display:"inline-block",ease:Cubic.easeInOut,onComplete:e}),tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"),{width:"312px",height:"312px",marginTop:"-156px",marginLeft:"-156px",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.2,{scale:1,delay:.3,ease:Cubic.easeInOut})}function fermetureMenu(){function e(){tlCircles.to($("#menu-wrapper ul li.circle-vehicules"),.4,{top:"221px",left:"312px",ease:Cubic.easeInOut}),tlCircles.to($("#menu-wrapper ul li.circle-formation"),.4,{top:"281px",left:"277px",delay:.05,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li.circle-offre-conseil"),.4,{top:"312px",left:"205px",delay:.1,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li.circle-service-client"),.4,{top:"281px",left:"130px",delay:.2,ease:Cubic.easeInOut},0),tlCircles.to($("#menu-wrapper ul li.circle-juridique"),.4,{top:"221px",left:"98px",delay:.25,ease:Cubic.easeInOut},0),tlCircles.to($("#label-menu"),.15,{opacity:1,display:"block",ease:Cubic.easeInOut})}TweenMax.set($("#menu-wrapper"),{css:{className:"-=active"}}),tlMenuWrapper.remove(),tlCircleDashed.remove(),tlCircles.remove(),tlWrapperBlocs.remove(),tlMenuWrapper=new TimelineMax,tlCircleDashed=new TimelineMax,tlCircles=new TimelineMax,tlWrapperBlocs=new TimelineMax,tlMenuWrapper.set($("#menu-wrapper ul"),{scale:1,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#menu-wrapper ul li"),.3,{left:"40%",top:"40%",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),tlMenuWrapper.to($("#container-menu-wrapper"),.5,{marginTop:"-180px",ease:Cubic.easeInOut}),$("html").hasClass("lt-ie9")?tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-50px",ease:Cubic.easeInOut,delay:.3}):tlWrapperBlocs.to($(".wrapper-blocs"),.2,{marginTop:"-90px",ease:Cubic.easeInOut,delay:.3}),tlMenuWrapper.set($("#menu-wrapper ul li"),{width:"20px",height:"20px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a"),{borderWidth:"0px",ease:Cubic.easeInOut}),tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"),{display:"none",ease:Cubic.easeInOut,onComplete:e}),tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"),{width:"224px",height:"224px",marginTop:"-112px",marginLeft:"-112px",ease:Cubic.easeInOut}),tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:1,delay:.7,ease:Cubic.easeInOut})}function hoverMenu(){var e;e=new TimelineMax;var t;t=new TimelineMax;var n;n=new TimelineMax,$("#menu-wrapper").hover(function(){ouvertureMenu()},function(){fermetureMenu()})}function btnVideoClick(){$("a.btn-video").click(function(){return $("body").addClass("video-ouverte"),TweenMax.set($("footer"),{display:"none"}),TweenMax.to($("#wrapper-content"),.5,{x:"-100%",ease:Cubic.easeInOut,onComplete:completeWrapperContent}),TweenMax.to($("#bloc-menu-responsive"),.5,{x:"-100%",ease:Cubic.easeInOut}),tlBlocVisuContent=new TimelineMax,tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.5,{right:"50%",marginRight:"-21.5%",ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.2,{opacity:0,ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#fond-couleur-bloc-visu"),.2,{opacity:0,display:"none",ease:Cubic.easeInOut,onComplete:completeFondCouleur}),!1})}function completeWrapperContent(){TweenMax.set($("#wrapper-content"),{display:"none"})}function completeFondCouleur(){TweenMax.set($("#bloc-visu"),{display:"none"}),TweenMax.set($("#container-bloc-visu-content"),{display:"none"});var e=new TimelineMax;e.to($("#bloc-autres-videos"),.4,{marginRight:"0",ease:Cubic.easeInOut}),e.to($("#bloc-autres-videos"),.4,{marginRight:"-196px",delay:1.2,ease:Cubic.easeInOut}),e.to($("#bloc-retour-video"),.2,{marginLeft:"0px",ease:Cubic.easeInOut})}function btnRetourVideoClick(){$("a#retour-video").click(function(){return $("body").removeClass("video-ouverte"),stopVideos(),TweenMax.set($("#wrapper-content"),{display:"block"}),TweenMax.set($("#bloc-visu"),{display:"block"}),TweenMax.set($("#container-bloc-visu-content"),{display:"block"}),TweenMax.to($("#bloc-menu-responsive"),.2,{x:"0%",delay:1,ease:Cubic.easeInOut,onComplete:blocMenuResponsiveRetour}),TweenMax.to($("#bloc-retour-video"),.2,{marginLeft:"-200px",ease:Cubic.easeInOut}),TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"-250px",x:"0px",ease:Cubic.easeInOut}),tlBlocVisuContentRetour=new TimelineMax,tlBlocVisuContentRetour.to($("#fond-couleur-bloc-visu"),.2,{opacity:1,display:"block",ease:Cubic.easeInOut}),tlBlocVisuContentRetour.to($("#bloc-fond-visu .bloc-visu-content"),.2,{opacity:1,ease:Cubic.easeInOut,onComplete:completeFondCouleurRetour}),!1})}function blocMenuResponsiveRetour(){TweenMax.set($("footer"),{display:"block"})}function completeFondCouleurRetour(){TweenMax.to($("#bloc-fond-visu .bloc-visu-content"),.5,{right:"0",marginRight:"0%",ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-content"),.5,{x:"0%",ease:Cubic.easeInOut})}function btnPlusVideos(){$("a#plus-autres-videos").hover(function(){TweenMax.isTweening($("#bloc-autres-videos"))||isMobile.any||$("#bloc-autres-videos").hasClass("open")||TweenMax.to($("#bloc-autres-videos"),.2,{x:"-20px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{scale:"1.1",ease:Cubic.easeInOut})},function(){TweenMax.to($("#bloc-autres-videos"),.2,{x:"0px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{scale:"1",ease:Cubic.easeInOut})}),$("a#plus-autres-videos").click(function(){return $("#bloc-autres-videos").hasClass("open")?(TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"-196px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{rotation:0,ease:Cubic.easeInOut})):(TweenMax.set($("#bloc-autres-videos"),{x:"0"}),TweenMax.to($("#bloc-autres-videos"),.2,{marginRight:"0px",ease:Cubic.easeInOut}),TweenMax.to($("a#plus-autres-videos .icon-plus"),.2,{rotation:45,ease:Cubic.easeInOut})),$("#bloc-autres-videos").toggleClass("open"),!1})}function stopVideos(){$(".video-js")[0].player.pause()}function categBlocCopies(){$("html").hasClass("lt-ie9")||setTimeout(function(){$(".categ-bloc-copie").each(function(e){var t=$(this).parent(),n=$(".categ-bloc .txt-categ-bloc",t).width(),a=$(".categ-bloc .txt-categ-bloc",t).height();TweenMax.set($(".txt-categ-bloc-copie",this),{width:n+"px",height:a+"px"}),TweenMax.set($(this),{display:"block"})}),$(".detail-bloc-copie").each(function(e){var t=$(this).parent(),n=$(".detail-bloc .txt-detail-bloc",t).width(),a=$(".detail-bloc .txt-detail-bloc",t).height();TweenMax.set($(".txt-detail-bloc-copie",this),{width:n+"px",height:a+"px"}),TweenMax.set($(this),{display:"block"})}),$(".ribbon-copie").each(function(e){if($(window).width()>767){var t=$(this).parent(),n=$(".ribbon .ribbon-content",t).width(),a=$(".ribbon .ribbon-content",t).height();TweenMax.set($(".ribbon-content",this),{width:n+"px",height:a+"px"}),TweenMax.set($(this),{display:"block"})}})},500)}function blocPenche(){$("html").hasClass("lt-ie9")||$(".bloc-penche").each(function(e){var t=$(this).height();t>300?TweenMax.set($(this),{rotation:0}):t>200?TweenMax.set($(this),{rotation:-3,x:0,y:0,z:0}):TweenMax.set($(this),{rotation:-4,x:0,y:0,z:0})})}function hoverBlocInnovation(){$("html").hasClass("lt-ie9")||$(".bloc-small.bloc-3").hover(function(){TweenMax.fromTo($("#container-pop"),.5,{scale:"0"},{scale:"1",ease:Cubic.easeInOut}),TweenMax.fromTo($("#container-pop2"),.4,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.1}),TweenMax.fromTo($("#container-pop3"),.7,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.2}),TweenMax.fromTo($("#container-pop4"),.5,{scale:"0"},{scale:"1",ease:Cubic.easeInOut,delay:.1})},function(){})}function lienSitemap(){TweenMax.set($("#sitemap-modal"),{y:50}),$("a#lien-sitemap").click(function(){return openModal(),!1}),$("#overlay").click(function(){return closeModal(),!1}),$("#lien-close-modal").click(function(){return closeModal(),!1}),$("a#menu-responsive").click(function(){return openModal(),!1})}function openModal(){TweenMax.to($("#overlay"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut}),TweenMax.to($("#sitemap-modal"),.4,{y:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-sitemap-modal"),.4,{display:"block",opacity:1,ease:Cubic.easeInOut})}function closeModal(){TweenMax.to($("#overlay"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#wrapper-sitemap-modal"),.4,{display:"none",opacity:0,ease:Cubic.easeInOut}),TweenMax.to($("#sitemap-modal"),.4,{y:50,ease:Cubic.easeInOut})}function liensSitemapMobile(){$("a.circle-sitemap").click(function(){if($(window).width()<=767){$(this).toggleClass("open");var e=$(this).parent();return $("ul.liste-liens-sitemap",e).slideToggle(),!1}})}function initSitemapMobile(){$("a.circle-sitemap.open").removeClass("open"),$(window).width()<=767?TweenMax.set($("ul.liste-liens-sitemap"),{display:"none"}):TweenMax.set($("ul.liste-liens-sitemap"),{display:"block"})}function initVideo(){}function svgFallback(){Modernizr.svg||$("object").each(function(e){var t=$(this).attr("data-fallback"),n=$(this).attr("id");$(this).after("<img src='"+t+"' alt='' id='"+n+"' />"),$(this).remove()})}function repeindre(){window.setTimeout(function(){repeindre()},10)}var tlMenuWrapper;tlMenuWrapper=new TimelineMax;var tlCircleDashed;tlCircleDashed=new TimelineMax;var tlCircles;tlCircles=new TimelineMax;var tlWrapperBlocs;tlWrapperBlocs=new TimelineMax,window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),$(document).ready(function(){animer(),$(window).width()>1024&&initMenu(),hoverMenu(),categBlocCopies(),blocPenche(),lienSitemap(),initSitemapMobile(),liensSitemapMobile(),initVideo(),svgFallback(),$("body").hasClass("accueil")&&(btnVideoClick(),btnRetourVideoClick(),btnPlusVideos(),hoverBlocInnovation())}),$(document).scroll(function(){$("body").hasClass("has-video")&&jsPlumb.repaint($(".bloc-btn-video"),{left:$(".bloc-btn-video").offset().left,top:$(".bloc-btn-video").offset().top})}),$(window).resize(function(){jsPlumb.setSuspendDrawing(!1,!0),initSitemapMobile(),$(window).width()>=1250?(jsPlumb.detachAllConnections($(".bloc-btn-video")),jsPlumb.connect({source:$("#menu-wrapper"),target:$(".bloc-btn-video"),anchors:[[1.2,.5,1,0],[0,.5,-1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Flowchart",{stub:400,cornerRadius:40,gap:40}]})):jsPlumb.detachAllConnections($(".bloc-btn-video")),$(window).width()>1024?$("html").hasClass("lt-ie9")?TweenMax.set($(".wrapper-blocs"),{marginTop:"-50px"}):TweenMax.set($(".wrapper-blocs"),{marginTop:"-90px"}):TweenMax.set($(".wrapper-blocs"),{marginTop:"0px"})});var anchors=[[[1,.6,.5,.8],[.1,.8,0,.5]],[[1,.3,0,-.8],[0,.9,.2,-.7]],[[.51,1,0,1],[.7,0,0,1]],[[0,.2,0,.5],[.5,0,0,-1.5]],[[1,.6,0,1],[0,.9,0,1]]];jsPlumb.ready(function(){var e=$(".bloc-small").length;$(".bloc-small").each(function(t){if(e-1>t){var n=jsPlumb.getInstance();n.setContainer($("#zone-blocs-accueil")),n.connect({source:$(".bloc-"+(t+1)),target:$(".bloc-"+(t+2)),anchors:anchors[t],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]})}});var t=jsPlumb.getInstance();if(jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#bloc-actus"),target:$(".bloc-1"),anchors:[[.2,1,-1,0],[.4,0,0,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]}),$("body").hasClass("has-video")&&$(window).width()>=1250){var n=jsPlumb.getInstance();jsPlumb.setContainer($("#wrapper-content")),jsPlumb.connect({source:$("#menu-wrapper"),target:$(".bloc-btn-video"),anchors:[[.97,.5,1,0],[0,.5,-1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Flowchart",{stub:400,cornerRadius:40,gap:40}]})}repeindre()});