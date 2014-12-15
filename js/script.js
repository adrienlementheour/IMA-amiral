var tlMenuWrapper;
tlMenuWrapper = new TimelineMax();
var tlCircleDashed;
tlCircleDashed = new TimelineMax();
var tlCircles;
tlCircles = new TimelineMax();
var tlWrapperBlocs;
tlWrapperBlocs = new TimelineMax();

var player = 0;



//////////////////////////////////////////////////
//////////////// REQUESTANIMFRAME ////////////////
//////////////////////////////////////////////////

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];
  for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }
  if(!window.requestAnimationFrame)
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      },
      timeToCall);
      lastTime = currTime + timeToCall;
      return id;
  };
  if(!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
  };
}());

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(callback){
            window.setTimeout(callback, 1000/60);
          };
})();


function animer(){
	requestAnimFrame(function(){
		var scrollTop = $(window).scrollTop();
		$("#div-test").css("top", $("body").scrollTop()+20);

		jsPlumb.setSuspendDrawing(false);
		if($("body").hasClass("has-bloc-small")){
			//jsPlumb.repaint($(".bloc-small"));
			$(".bloc-small").each(function(index){
				jsPlumb.repaint($(this), { left:Math.round($(this).offset().left), top:Math.round($(this).offset().top)});
			});
			jsPlumb.repaint($("#bloc-actus"));
		}

		if($("body").hasClass("has-video")){
			if ($(window).width()>=1250) {
				if(!$("body").hasClass("accueil")){
					if (!$("html").hasClass("isSafari")) {
						// si ce n'est pas safari
						jsPlumb.repaint($(".bloc-btn-video"), { left:Math.round($(".bloc-btn-video").offset().left), top:Math.round($(".bloc-btn-video").offset().top)});
					}
				}
			}
		}
		
		if((TweenMax.isTweening($("#wrapper-content")))||(TweenMax.isTweening($("#container-menu-wrapper")))||(TweenMax.isTweening($("#menu-wrapper")))||(TweenMax.isTweening($("#menu-wrapper ul")))||(TweenMax.isTweening($("#menu-wrapper ul li")))||(TweenMax.isTweening($("#menu-wrapper ul li a .txt-circle")))||(TweenMax.isTweening($("#circle-dashed-container")))){
			if(($("body").hasClass("has-video"))&&($("body").hasClass("accueil"))){
				if (!$("html").hasClass("isSafari")) {
					jsPlumb.repaint($("#menu-wrapper"));
					jsPlumb.repaint($(".bloc-btn-video"), { left:$(".bloc-btn-video").offset().left, top:($(".bloc-btn-video").offset().top)});
				}
			}
			if($("body").hasClass("contact")){
				if ($(window).width()>=979) {
					jsPlumb.repaint($("#bloc-adresse"), { left:Math.round($("#bloc-adresse").offset().left), top:Math.round($("#bloc-adresse").offset().top)});
				}
			}
			if($("body").hasClass("actus") || $("body").hasClass("blog") || $("body").hasClass("category") || ($("body").hasClass("rh"))){
				jsPlumb.repaint($(".wrapper-blocs .bloc-full"));
			}
		}

		if($("body").hasClass("rh-detail")){
			if((scrollTop>$("#bloc-actus").offset().top) && (scrollTop<($("#bloc-actus").offset().top+$("#bloc-actus").height()-50))){
				TweenMax.set($("a.btn-postuler"), {position: "fixed", "right": "inherit", "left": ($("#bloc-actus").offset().left+$("#bloc-actus").width()-25)+"px"});
			}else{
				TweenMax.set($("a.btn-postuler"), {position: "absolute", "right": "-23px", "left": "inherit"});
			}
		}
		animer();
	});
}

////////////////////////////////////////////////////////////////////////////////
//////////// Fonction pour ouvrir le menu à l'ouvreture de la page /////////////
////////////////////////////////////////////////////////////////////////////////
function menuOuvertDefault(){
	if($(window).width()>1024){
		if($.cookie('cookieMenu') == null) {
			$.cookie('cookieMenu', 'open');
			ouvertureMenu();
			setTimeout(function(){
				fermetureMenu();
			},2000);
		}
	}
}

function ouvertureMenu(){
	TweenMax.set($("#menu-wrapper"), {css:{className:'+=active'}});
	
	tlMenuWrapper.remove();
	tlCircleDashed.remove();
	tlCircles.remove();
	tlWrapperBlocs.remove();
	tlMenuWrapper = new TimelineMax();
	tlCircleDashed = new TimelineMax();
	tlCircles = new TimelineMax();
	tlWrapperBlocs = new TimelineMax();
	
	
	TweenMax.to($("#label-menu"), 0.05, {opacity: 0, display: "none", ease:Cubic.easeInOut});
	
	tlMenuWrapper.to($("#menu-wrapper ul"), 0.05, {scale:1.2, ease:Cubic.easeInOut});
	tlMenuWrapper.to($("#menu-wrapper ul"), 0.05, {scale:1 , ease:Cubic.easeInOut});
	tlMenuWrapper.to($("#menu-wrapper ul li"), 0.1, {left: "40%", top: "40%", ease:Cubic.easeInOut});
	
	tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.05, {scale: 1.2, ease:Cubic.easeInOut});
	tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.3, {scale: 0.3, ease:Cubic.easeInOut});
	
	tlMenuWrapper.to($("#container-menu-wrapper"), 0.2, {marginTop:"-110px", ease:Cubic.easeInOut});
	if (!$("html").hasClass("lt-ie9")) {
		tlWrapperBlocs.to($(".wrapper-blocs"), 0.2, {marginTop:"-10px", ease:Cubic.easeInOut, delay: 0.2});
	}else{
		tlWrapperBlocs.to($(".wrapper-blocs"), 0.2, {marginTop:"20px", ease:Cubic.easeInOut, delay: 0.2});
	}
	
	tlMenuWrapper.set($("#menu-wrapper ul li"), {width:"98px", height:"98px", ease:Cubic.easeInOut});
	//tlMenuWrapper.set($("#menu-wrapper ul li a"), {borderWidth:"10px", ease:Cubic.easeInOut});
	tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"), {display:"inline-block", ease:Cubic.easeInOut, onComplete: cerclesAnim});
	tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"), {width:"312px", height:"312px", marginTop: "-156px", marginLeft: "-156px", ease:Cubic.easeInOut});
	
	tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.2, {scale: 1, delay: 0.3, ease:Cubic.easeInOut});
	
	function cerclesAnim(){
		tlCircles.to($("#menu-wrapper ul li").eq(0), 0.3, {top: "94px", left: "300px", ease:Cubic.easeInOut});
		tlCircles.to($("#menu-wrapper ul li").eq(1), 0.3, {top: "235px", left: "310px", delay:0.05, ease:Cubic.easeInOut},0);
		tlCircles.to($("#menu-wrapper ul li").eq(2), 0.3, {top: "321px", left: "166px", delay:0.1, ease:Cubic.easeInOut},0);
		tlCircles.to($("#menu-wrapper ul li").eq(3), 0.3, {top: "235px", left: "20px", delay:0.2, ease:Cubic.easeInOut},0);
		tlCircles.to($("#menu-wrapper ul li").eq(4), 0.3, {top: "94px", left: "32px", delay:0.25, ease:Cubic.easeInOut},0);
	}
}

function fermetureMenu(){
	TweenMax.set($("#menu-wrapper"), {css:{className:'-=active'}});
	
	tlMenuWrapper.remove();
	tlCircleDashed.remove();
	tlCircles.remove();
	tlWrapperBlocs.remove();
	tlMenuWrapper = new TimelineMax();
	tlCircleDashed = new TimelineMax();
	tlCircles = new TimelineMax();
	tlWrapperBlocs = new TimelineMax();
	tlMenuWrapper.set($("#menu-wrapper ul"), {scale:1 , ease:Cubic.easeInOut});
	tlMenuWrapper.to($("#menu-wrapper ul li"), 0.3, {left: "40%", top: "40%", ease:Cubic.easeInOut});
	
	tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.3, {scale: 0.3, ease:Cubic.easeInOut});
	
	tlMenuWrapper.to($("#container-menu-wrapper"), 0.5, {marginTop:"-180px", ease:Cubic.easeInOut});
	if (!$("html").hasClass("lt-ie9")) {
		tlWrapperBlocs.to($(".wrapper-blocs"), 0.2, {marginTop:"-90px", ease:Cubic.easeInOut, delay: 0.3});
	}else{
		tlWrapperBlocs.to($(".wrapper-blocs"), 0.2, {marginTop:"-50px", ease:Cubic.easeInOut, delay: 0.3});
	}
	
	tlMenuWrapper.set($("#menu-wrapper ul li"), {width:"20px", height:"20px", ease:Cubic.easeInOut});
	tlMenuWrapper.set($("#menu-wrapper ul li a"), {borderWidth:"0px", ease:Cubic.easeInOut});
	tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"), {display:"none", ease:Cubic.easeInOut, onComplete: cerclesAnimRetour});
	tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"), {width:"224px", height:"224px", marginTop: "-112px", marginLeft: "-112px", ease:Cubic.easeInOut});
	
	tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.3, {scale: 1, delay: 0.7, ease:Cubic.easeInOut});
	
	function cerclesAnimRetour(){
		tlCircles.to($("#menu-wrapper ul li").eq(0), 0.4, {top: "221px", left: "312px", ease:Cubic.easeInOut});
		tlCircles.to($("#menu-wrapper ul li").eq(1), 0.4, {top: "281px", left: "277px", delay:0.05, ease:Cubic.easeInOut},0);
		tlCircles.to($("#menu-wrapper ul li").eq(2), 0.4, {top: "312px", left: "205px", delay:0.1, ease:Cubic.easeInOut},0);
		tlCircles.to($("#menu-wrapper ul li").eq(3), 0.4, {top: "281px", left: "130px", delay:0.2, ease:Cubic.easeInOut},0);
		tlCircles.to($("#menu-wrapper ul li").eq(4), 0.4, {top: "221px", left: "98px", delay:0.25, ease:Cubic.easeInOut},0);
		tlCircles.to($("#label-menu"), 0.15, {opacity: 1, display: "block", ease:Cubic.easeInOut});
	}
}

function hoverMenu(){
	var tlMenuWrapper;
	tlMenuWrapper = new TimelineMax();
	var tlCircleDashed;
	tlCircleDashed = new TimelineMax();
	var tlCircles;
	tlCircles = new TimelineMax();
	$("#menu-wrapper").hover(function(){
		// au mouse enter
		ouvertureMenu();
	}, function(){
		// au mouse leave
		fermetureMenu();
	});
}

// Clic sur le bouton video
function btnVideoClick(){
	$("a.btn-video").click(function(){
		$(window).scrollTop(0);
		$("body").addClass("video-ouverte");
		// décaler le wrapper content
		TweenMax.set($("footer"), {display: "none"});
		TweenMax.to($("#wrapper-content"), 0.5, {"x":"-100%", ease:Cubic.easeInOut, onComplete: completeWrapperContent});
		TweenMax.to($("#bloc-menu-responsive"), 0.5, {"x":"-100%", ease:Cubic.easeInOut});
		// centrer la div fond visu
		tlBlocVisuContent = new TimelineMax();
		tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"), 0.5, {right:"50%", marginRight: "-21.5%", ease:Cubic.easeInOut});
		tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"), 0.2, {opacity: 0, ease:Cubic.easeInOut});
		tlBlocVisuContent.to($("#fond-couleur-bloc-visu"), 0.2, {opacity: 0, display: "none", ease:Cubic.easeInOut, onComplete: completeFondCouleur});
		return false;
	});
}

function completeWrapperContent(){
	//TweenMax.set($("#wrapper-content"), {display: "none"});
}

function completeFondCouleur(){
	TweenMax.set($("#bloc-visu"), {display: "none"});
	TweenMax.set($("#container-bloc-visu-content"), {display: "none"});
	
	var tlBlocAutresVides = new TimelineMax({onComplete: addClassBlocAutresVideos});
	tlBlocAutresVides.to($("#bloc-autres-videos"), 0.4, {marginRight: "0", ease:Cubic.easeInOut});
	tlBlocAutresVides.to($("#bloc-autres-videos"), 0.4, {marginRight: "-196px", delay: 1.2, ease:Cubic.easeInOut});
	
	tlBlocAutresVides.to($("#bloc-retour-video"), 0.2, {marginLeft: "0px", ease:Cubic.easeInOut});
}
function addClassBlocAutresVideos(){
	$("#bloc-autres-videos").addClass("canTween");
}

// Clic sur le retour imatech
function btnRetourVideoClick(){
	$("a#retour-video").click(function(){
		$("body").removeClass("video-ouverte");
		$("#bloc-autres-videos").removeClass("canTween");
		stopVideos();
		TweenMax.set($("#wrapper-content"), {display: "block"});
		TweenMax.set($("#bloc-visu"), {display: "block"});
		TweenMax.set($("#container-bloc-visu-content"), {display: "block"});
		
		TweenMax.to($("#bloc-menu-responsive"), 0.2, {x:"0%", delay:1, ease:Cubic.easeInOut, onComplete: blocMenuResponsiveRetour});
		
		TweenMax.to($("#bloc-retour-video"), 0.2, {marginLeft:"-200px", ease:Cubic.easeInOut});
		TweenMax.to($("#bloc-autres-videos"), 0.2, {marginRight: "-250px", x: "0px", ease:Cubic.easeInOut});
		tlBlocVisuContentRetour = new TimelineMax();
		tlBlocVisuContentRetour.to($("#fond-couleur-bloc-visu"), 0.2, {opacity: 1, display: "block", ease:Cubic.easeInOut});
		tlBlocVisuContentRetour.to($("#bloc-fond-visu .bloc-visu-content"), 0.2, {opacity: 1, ease:Cubic.easeInOut, onComplete: completeFondCouleurRetour});
		return false;
	});
}
function blocMenuResponsiveRetour(){
	TweenMax.set($("footer"), {display: "block"});
}
function completeFondCouleurRetour(){
	TweenMax.to($("#bloc-fond-visu .bloc-visu-content"), 0.5, {right:"0", marginRight: "0%", ease:Cubic.easeInOut});
	TweenMax.to($("#wrapper-content"), 0.5, {x:"0%", ease:Cubic.easeInOut});
}

function btnPlusVideos(){
	$("a#plus-autres-videos").hover(function(){
		// au mouse enter
		if(($("#bloc-autres-videos").hasClass("canTween")) && (!isMobile.any) && (!$("#bloc-autres-videos").hasClass("open"))){
			TweenMax.to($("#bloc-autres-videos"), 0.2, {x: "-20px", ease:Cubic.easeInOut});
			TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {scale: "1.1", ease:Cubic.easeInOut});
		}
	}, function(){
		// au mouse leave
		TweenMax.to($("#bloc-autres-videos"), 0.2, {x: "0px", ease:Cubic.easeInOut});
		TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {scale: "1", ease:Cubic.easeInOut});
	});
	$("a#plus-autres-videos").click(function(){
		if((!$("#bloc-autres-videos").hasClass("open"))){
			if(($("#bloc-autres-videos").hasClass("canTween"))){
				TweenMax.set($("#bloc-autres-videos"), {x: "0"});
				TweenMax.to($("#bloc-autres-videos"), 0.2, {marginRight: "0px", ease:Cubic.easeInOut});
				TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {rotation: 45, ease:Cubic.easeInOut});
				$("#bloc-autres-videos").toggleClass("open");
			}
		}else{
			if(($("#bloc-autres-videos").hasClass("canTween"))){
				TweenMax.to($("#bloc-autres-videos"), 0.2, {marginRight: "-196px", ease:Cubic.easeInOut});
				TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {rotation: 0, ease:Cubic.easeInOut});
				$("#bloc-autres-videos").toggleClass("open");
			}
		}
		
		
		return false;
	});
}

////////////////////////////////////////////////////////////////////////////////
////////////////////// Fonction pour stopper les videos ////////////////////////
////////////////////////////////////////////////////////////////////////////////
function stopVideos(){
	if($(".video-js").length){
		$(".video-js")[0].player.pause();
	}
}

////////////////////// Fonction pour gérer la taille des raccords ribbons ////////////////////////
function categBlocCopies(){
	if (!$("html").hasClass("lt-ie9")) {
		setTimeout(function() {
			$(".categ-bloc-copie").each(function(index){
				var blocParent = $(this).parent();
				var widthCategBloc = $(".categ-bloc .txt-categ-bloc", blocParent).width();
				var heightCategBloc = $(".categ-bloc .txt-categ-bloc", blocParent).height();
				TweenMax.set($(".txt-categ-bloc-copie",this), {width: widthCategBloc+"px", height: heightCategBloc+"px"});
				TweenMax.set($(this), {display: "block"});
			});
			
			$(".detail-bloc-copie").each(function(index){
				var blocParent = $(this).parent();
				var widthDetailBloc = $(".detail-bloc .txt-detail-bloc", blocParent).width();
				var heightDetailBloc = $(".detail-bloc .txt-detail-bloc", blocParent).height();
				TweenMax.set($(".txt-detail-bloc-copie",this), {width: widthDetailBloc+"px", height: heightDetailBloc+"px"});
				TweenMax.set($(this), {display: "block"});
			});
			
			$(".ribbon-copie").each(function(index){
				if ($(window).width()>767) {
					var blocParent = $(this).parent();
					var widthRibbon = $(".ribbon .ribbon-content", blocParent).width();
					var heightRibbon = $(".ribbon .ribbon-content", blocParent).height();
					TweenMax.set($(".ribbon-content",this), {width: widthRibbon+"px", height: heightRibbon+"px"});
					TweenMax.set($(this), {display: "block"});
				}
			});
		}, 500);
	}
}

////////////////////// Fonction pour pencher les bloc content en fonction de leur hauteur ////////////////////////
function blocPenche(){
	if (!$("html").hasClass("lt-ie9") && !$("body").hasClass("actus") && !$("body").hasClass("blog") && !$("body").hasClass("category") && !$("body").hasClass("rh")) {
		$(".bloc-penche").each(function(index){
			var heightBlocPenche = $(this).height();
			if(heightBlocPenche>300){
				TweenMax.set($(this), {rotation: 0});
			}else if (heightBlocPenche>200){
				TweenMax.set($(this), {rotation: -3, x:0, y:0, z:0});
			}else{
				TweenMax.set($(this), {rotation: -4, x:0, y:0, z:0});
			}
		});
	}
}

////////////////////// Fonction pour animer les svg du bloc Innovation ////////////////////////
function hoverBlocInnovation(){
	if (!$("html").hasClass("lt-ie9")) {
		$("#container-pop").parent('.bloc-small').hover(function(){
			// au mouse enter
			TweenMax.fromTo($("#container-pop"), 0.5, {scale: "0"}, {scale: "1", ease:Cubic.easeInOut});
			TweenMax.fromTo($("#container-pop2"), 0.4, {scale: "0"}, {scale: "1", ease:Cubic.easeInOut, delay: 0.1});
			TweenMax.fromTo($("#container-pop3"), 0.7, {scale: "0"}, {scale: "1", ease:Cubic.easeInOut, delay: 0.2});
			TweenMax.fromTo($("#container-pop4"), 0.5, {scale: "0"}, {scale: "1", ease:Cubic.easeInOut, delay: 0.1});
		}, function(){
			// au mouse leave
		});
	}
}

////////////////////// Fonction pour gérer l'apparition du plan du site ////////////////////////
function lienSitemap(){
	TweenMax.set($("#sitemap-modal"), {y: 50});
	$("a#lien-sitemap").click(function(){
		openModal();
		return false;	
	});
	
	$("#overlay").click(function(){
		closeModal();
		return false;	
	});
	
	$("#lien-close-modal").click(function(){
		closeModal();
		return false;	
	});
	
	$("a#menu-responsive").click(function(){
		openModal();
		return false;	
	});
}

function openModal(){
	TweenMax.to($("#overlay"), 0.4, {display: "block", opacity: 1, ease:Cubic.easeInOut});
	TweenMax.to($("#sitemap-modal"), 0.4, {y: 0, ease:Cubic.easeInOut});
	TweenMax.to($("#wrapper-sitemap-modal"), 0.4, {display: "block", opacity: 1, ease:Cubic.easeInOut});
}

function closeModal(){
	TweenMax.to($("#overlay"), 0.4, {display: "none", opacity: 0, ease:Cubic.easeInOut});
	TweenMax.to($("#wrapper-sitemap-modal"), 0.4, {display: "none", opacity: 0, ease:Cubic.easeInOut});
	TweenMax.to($("#sitemap-modal"), 0.4, {y: 50, ease:Cubic.easeInOut});
}

////////////////////// Fonction pour gérer l'apparition de l'interlocuteur ////////////////////////
function lienInterlocuteur(){
	TweenMax.set($("#interlocuteur-modal"), {y: 50});
	$("a.btn-interlocuteur").click(function(){
		openInterlocuteurModal();
		return false;	
	});
	
	$("#overlay-interlocuteur").click(function(){
		closeInterlocuteurModal();
		return false;	
	});
	
	$("#lien-close-interlocuteur-modal").click(function(){
		closeInterlocuteurModal();
		return false;	
	});	
}

function openInterlocuteurModal(){
	TweenMax.to($("#overlay-interlocuteur"), 0.4, {display: "block", opacity: 1, ease:Cubic.easeInOut});
	TweenMax.to($("#interlocuteur-modal"), 0.4, {y: 0, ease:Cubic.easeInOut});
	TweenMax.to($("#wrapper-interlocuteur-modal"), 0.4, {display: "block", opacity: 1, ease:Cubic.easeInOut});
}

function closeInterlocuteurModal(){
	TweenMax.to($("#overlay-interlocuteur"), 0.4, {display: "none", opacity: 0, ease:Cubic.easeInOut});
	TweenMax.to($("#wrapper-interlocuteur-modal"), 0.4, {display: "none", opacity: 0, ease:Cubic.easeInOut});
	TweenMax.to($("#interlocuteur-modal"), 0.4, {y: 50, ease:Cubic.easeInOut});
}

////////////////////// Fonction pour déplier / replier les titres du menu / sitemap ////////////////////////
function liensSitemapMobile(){
	$("a.circle-sitemap").click(function(){
		if ($(window).width()<=767){
			$(this).toggleClass("open");
			var parentCircleSitemap = $(this).parent();
			$("ul.liste-liens-sitemap", parentCircleSitemap).slideToggle();
			return false;
		}
	});
}

function initSitemapMobile(){
	$("a.circle-sitemap.open").removeClass("open");
	if ($(window).width()<=767){
		TweenMax.set($("ul.liste-liens-sitemap"), {display: "none"});
	}else{
		TweenMax.set($("ul.liste-liens-sitemap"), {display: "block"});
	}
}

function initVideo(){
	if($("#id-video-js").length){
		player = videojs("id-video-js", {"techOrder": ["youtube"], "ytcontrols": false});
	}
}

////////////////////// Fonction pour remplacer les svg par des img ////////////////////////
function svgFallback(){
	if (!Modernizr.svg) {
		$("object").each(function(index) {
			var fallback = $(this).attr('data-fallback');
			var idObject = $(this).attr('id');
			$(this).after("<img src='"+fallback+"' alt='' id='"+idObject+"' />");
			$(this).remove();
		});
	}
}

////////////////////// Fonction pour deployer / retracter le contenu au clic du bouton "Lire la suite" ////////////////////////
function clicLireLaSuite(){
	$("#zone-actus a.btn-bloc").click(function(){
		if(!$(this).hasClass("btn-actu")){
			if(!$(this).hasClass("open")){
				$(this).addClass("open");
				TweenMax.to($(this).closest(".bloc-penche"), 0.3, {rotation: 0});
			}else{
				$(this).removeClass("open");
			}
			$(".suite-bloc").slideToggle(300, function(){
				var heightBlocPenche = $(this).closest(".bloc-penche").height();
				if(heightBlocPenche>300){
					TweenMax.to($(this).closest(".bloc-penche"), 0.2, {rotation: 0});
				}else if (heightBlocPenche>200){
					TweenMax.to($(this).closest(".bloc-penche"), 0.2, {rotation: -3, x:0, y:0, z:0});
				}else{
					TweenMax.to($(this).closest(".bloc-penche"), 0.2, {rotation: -4, x:0, y:0, z:0});
				}
			});
			return false;
		}
	});
}

////////////////////// Fonction pour remplacer les nth-child par des classes (ie8 fixing) ////////////////////////
function ordreBlocSmall(){
	$(".bloc-small").each(function(index){
		$(this).addClass("pos-"+(index+1));
	});
}

function btnInterlocuteur(){
	$(".btn-interlocuteur").click(function(){ return false; });
}

////////////////////// Fonction pour changer de video / calameo / image ////////////////////////
function autresVideos(){
	$("ul#autres-videos li a").click(function(){
		$(window).scrollTop(0);
		$("ul#autres-videos li.active").removeClass("active");
		$(this).parent().addClass("active");
		if($(this).parent().hasClass("has-video")){
			var dataUrlVideo = $(this).parent().data("url-video");
			var dataPosterName = $(this).parent().data("poster-name");
			$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><video id='id-video-js' class='video-js vjs-default-skin' controls preload='auto' width='100%' height='100%' poster='"+dataPosterName+"' src='"+dataUrlVideo+"'></video></div>");
			if(player != 0){
				player.dispose();
			}
			initVideo();
		}else if($(this).parent().hasClass("has-calameo")){
			var dataIdCalameo = $(this).parent().data("id-calameo");
			$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><iframe class='calameo-iframe' src='//v.calameo.com/?bkcode="+dataIdCalameo+"&view=book' width='300' height='194' frameborder='0' scrolling='no' allowtransparency allowfullscreen style='margin:0 auto;'></iframe></div>");
		}else if ($(this).parent().hasClass("has-image")){
			var dataImageName = $(this).parent().data("image-name");
			$("#wrapper-embed").replaceWith("<div id='wrapper-embed'><div class='wrapper-img'><img src='"+dataImageName+"'></div></div>");
		};
		return false;
	});
}

////////////////////// Fonction pour ajouter une classe isSafari si on est sur le navigateur Safari ////////////////////////
function isSafari(){
	if(navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1){
		$("html").addClass("isSafari");
	}
}

////////////////////// Fonction pour deployer / retracter le menu des catégories ////////////////////////
function btnCategoriesArticles(){
	TweenMax.set($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"), {rotation: 90});
	$("a#btn-categories-articles").click(function(){
		if(!$("#categories-articles").hasClass("open")){
			if($(window).width()>1024){
				TweenMax.set($("#categories-articles"), {display:"block"});
				TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"), 0.15, {rotation: 0, ease:Cubic.easeInOut});
			}else{
				$("#categories-articles").slideToggle({duration: 300, step: function(){
					if( $("body").hasClass("actus") || $("body").hasClass("blog") || $("body").hasClass("category")){
						jsPlumb.repaint($(".wrapper-blocs .bloc-full"));
					}
				}});
				TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"), 0.15, {rotation: -90, ease:Cubic.easeInOut});
			}
			$("#categories-articles").addClass("open");
		}else{
			if($(window).width()>1024){
				TweenMax.set($("#categories-articles"), {display:"none"});
			}else{
				$("#categories-articles").slideToggle({duration: 300, step: function(){
					if( $("body").hasClass("actus") || $("body").hasClass("blog") || $("body").hasClass("category") ){
						jsPlumb.repaint($(".wrapper-blocs .bloc-full"));
					}
				}});
			}
			TweenMax.to($("a#btn-categories-articles .txt-btn-categories-articles .icon-arrow-right"), 0.15, {rotation: 90, ease:Cubic.easeInOut});
			$("#categories-articles").removeClass("open");
		}
		return false;
	});
}

////////////////////// Fonction pour ajouter les lignes pointillées dans les pages de liste ////////////////////////
function refreshLink(){
	if( $("body").hasClass("actus") || $("body").hasClass("blog") || $("body").hasClass("category") || $("body").hasClass("rh")){
		var nbBlocActu = $(".wrapper-blocs .bloc-full").length;
		$(".wrapper-blocs .bloc-full").each(function(index){
			if (index<(nbBlocActu-1)) {
				jsPlumb.setContainer($("#wrapper-content"));
				jsPlumb.connect({
					source: $(this),
					target: $(this).nextAll(".wrapper-blocs .bloc-full").eq(0),
					anchors: [[0.5, 0.9, 0, 0], [0.5, 0.1, 0, 0]],
					endpoint:"Blank",
					paintStyle:{
					lineWidth:2,
					strokeStyle:'#cacaca',
					dashstyle:" 0 1"
					},
					connector:[ "Bezier", { curviness: 50 }]
				});
			}
		});
	}
}

function loader(){
	TweenMax.to($('#infscr-loading').find('img'), 0.5, { rotation:360, repeat:-1, ease:Quad.easeInOut } );
	setTimeout(loader, 500);
}

$(document).ready(function(){
	animer();
	if ($(window).width()>1024){
		setTimeout(function() {
		      menuOuvertDefault();
		}, 1000);
	}
	if ($("html").hasClass("lt-ie9")){
		ordreBlocSmall();
	}
	isSafari();
	hoverMenu();
	categBlocCopies();
	blocPenche();
	lienSitemap();
	lienInterlocuteur();
	initSitemapMobile();
	liensSitemapMobile();
	initVideo();
	svgFallback();
	clicLireLaSuite();
	btnInterlocuteur();
	autresVideos();
	btnCategoriesArticles();
	if($("body").hasClass("accueil")){
		hoverBlocInnovation();
	}
	if($("body").hasClass("has-video")){
		btnVideoClick();
		btnRetourVideoClick();
		btnPlusVideos();
	}

	if( $("body").hasClass("blog") || $("body").hasClass("category")){
		loader();	
	}
});

$(document).scroll(function() {
	if($("body").hasClass("has-video")){
		//bloc-btn-video
		if ($(window).width()>=1250) {
			jsPlumb.repaint($(".bloc-btn-video"), { left:$(".bloc-btn-video").offset().left, top:($(".bloc-btn-video").offset().top)});
			if(!$("body").hasClass("accueil")){
				jsPlumb.repaint($("#bloc-actus"));
			}
		}
	}
	if($("body").hasClass("actus") || $("body").hasClass("blog") || $("body").hasClass("category")){
		/*TweenMax.set($(".bloc-full.article"),  {css:{marginTop: "80px"}});
		jsPlumb.repaint($(".wrapper-blocs .bloc-full"));
		clearTimeout( $.data( this, "scrollCheck" ) );
		$.data( this, "scrollCheck", setTimeout(function() {
			TweenMax.set($(".bloc-full.article"), {css:{marginTop: "60px"}});
			jsPlumb.repaint($(".wrapper-blocs .bloc-full"));
		}, 250) );
		setTimeout(function() {
		      jsPlumb.repaint($(".wrapper-blocs .bloc-full"));
		}, 500);*/
	}
});

$( window ).resize(function() {
	//jsPlumb.setSuspendDrawing(false, true);
	initSitemapMobile();
	if($("body").hasClass("has-bloc-small")){
		jsPlumb.repaint($(".bloc-small"));
	}
	if($("body").hasClass("actus") || $("body").hasClass("blog") || $("body").hasClass("category") || ($("body").hasClass("rh"))){
		jsPlumb.repaint($(".wrapper-blocs .bloc-full"));
	}
	if($("body").hasClass("contact")){
		if ($(window).width()>=979) {
			// Relier le contact avec le pin
			jsPlumb.detachAllConnections($("#bloc-adresse"));
			jsPlumb.detachAllConnections($("#pin-map"));
			jsPlumb.setContainer($("#container-bg-map"));
			jsPlumb.connect({
				source: $("#bloc-adresse"),
				target: $("#pin-map"),
				//[x, y, dx, dy]
				anchors: [[0.5, 0, 0, 0], [1, 0.5, 1, 0]],
				endpoint:"Blank",
				paintStyle:{
				lineWidth:2,
				strokeStyle:'#cacaca',
				dashstyle:" 0 1"
				},
				connector:[ "Bezier", { curviness: 200 }]
			});
		}else{
			jsPlumb.detachAllConnections($("#bloc-adresse"));
			jsPlumb.detachAllConnections($("#pin-map"));
		}
	}
	if (!$("html").hasClass("isSafari")) {
		if($("body").hasClass("has-video")){
			if ($(window).width()>=1250) {
				jsPlumb.detachAllConnections($(".bloc-btn-video"));
				if($("body").hasClass("accueil")){
					// Relier le menu avec le lien video
					var jsPlumbVisu = jsPlumb.getInstance();
					jsPlumb.setContainer($("#wrapper-content"));
					jsPlumb.connect({
						source: $("#menu-wrapper"),
						target: $(".bloc-btn-video"),
						anchors: [[0.97, 0.5, 1, 0], [0, 0.5, -1, 0]],
						endpoint:"Blank",
						paintStyle:{
						lineWidth:2,
						strokeStyle:'#cacaca',
						dashstyle:" 0 1"
						},
						connector:[ "Flowchart", {stub:400, cornerRadius: 40, gap: 40}]
					});
				}else{
					// Relier le menu avec le lien video
					var jsPlumbVisu = jsPlumb.getInstance();
					jsPlumb.setContainer($("#wrapper-content"));
					jsPlumb.connect({
						source: $("#bloc-actus"),
						target: $(".bloc-btn-video"),
						//[x, y, dx, dy]
						anchors: [[0.97, 0.35, 1, 0], [0, 0.5, -0.5, 0]],
						endpoint:"Blank",
						paintStyle:{
						lineWidth:2,
						strokeStyle:'#cacaca',
						dashstyle:" 0 1"
						},
						connector:[ "Bezier", { curviness: 200 }]
					});
				}
			}else {
				jsPlumb.detachAllConnections($(".bloc-btn-video"));
			}
		}
	}
	if($(window).width()>1024){
		if (!$("html").hasClass("lt-ie9")) {
			TweenMax.set($(".wrapper-blocs"), {marginTop:"-90px"});
		}else{
			TweenMax.set($(".wrapper-blocs"), {marginTop:"-50px"});
		}
	}else{
		TweenMax.set($(".wrapper-blocs"), {marginTop:"0px"});
	}
});

//[x, y, dx, dy]
//x and yare coordinates in the interval [0,1] specifying the position of the anchor
//dx and dy,which specify the orientation of the curve incident to the anchor
var anchors = [ [[1, 0.6, 0.5, 0.8], [0.1, 0.8, 0, 0.5]],      [[1, 0.3, 0, -0.8], [0, 0.7, 0.2, -0.7]],      [[0.51, 1, 0, 1], [0.7, 0, 0, 1]],     [[0, 0.2, 0, 0.5], [0.5, 0, 0, -1.5]],     [[1, 0.6, 0, 1], [0, 0.9, 0, 1]]];

jsPlumb.ready(function() {
	isSafari();
	if($("body").hasClass("has-bloc-small")){
		var nbBlocSmall = $(".bloc-small").length;
		$(".bloc-small").each(function(index){
			if (index<(nbBlocSmall-1)) {
				var instance= jsPlumb.getInstance();
				jsPlumb.setContainer($("#content"));
				jsPlumb.connect({
					source: $(this),
					target: $(this).nextAll(".bloc-small").eq(0),
					anchors: anchors[index],
					endpoint:"Blank",
					paintStyle:{
					lineWidth:2,
					strokeStyle:'#cacaca',
					dashstyle:" 0 1"
					},
					connector:[ "Bezier", { curviness: 50 }]
				});
			}
		});
		// Relier le bloc actu avec le premier bloc small (RSE)
		var jsPlumbFirstBloc = jsPlumb.getInstance();
		jsPlumb.setContainer($("#wrapper-content"));
		jsPlumb.connect({
			source: $("#bloc-actus"),
			target: $(".bloc-small").first(),
			anchors: [[0.2, 1, -1, 0], [0.4, 0, 0, 0]],
			endpoint:"Blank",
			paintStyle:{
			lineWidth:2,
			strokeStyle:'#cacaca',
			dashstyle:" 0 1"
			},
			connector:[ "Bezier", { curviness: 50 }]
		});
	}
	if (!$("html").hasClass("isSafari")) {
		if($("body").hasClass("has-video")){
			if ($(window).width()>=1250) {
				if($("body").hasClass("accueil")){
					// Relier le menu avec le lien video
					var jsPlumbVisu = jsPlumb.getInstance();
					jsPlumb.setContainer($("#wrapper-content"));
					jsPlumb.connect({
						source: $("#menu-wrapper"),
						target: $(".bloc-btn-video"),
						anchors: [[0.97, 0.5, 1, 0], [0, 0.5, -1, 0]],
						endpoint:"Blank",
						paintStyle:{
						lineWidth:2,
						strokeStyle:'#cacaca',
						dashstyle:" 0 1"
						},
						connector:[ "Flowchart", {stub:400, cornerRadius: 40, gap: 40}]
					});
				}else{
					// Relier le menu avec le lien video
					var jsPlumbVisu = jsPlumb.getInstance();
					jsPlumb.setContainer($("#wrapper-content"));
					jsPlumb.connect({
						source: $("#bloc-actus"),
						target: $(".bloc-btn-video"),
						//[x, y, dx, dy]
						anchors: [[0.97, 0.35, 1, 0], [0, 0.5, -0.5, 0]],
						endpoint:"Blank",
						paintStyle:{
						lineWidth:2,
						strokeStyle:'#cacaca',
						dashstyle:" 0 1"
						},
						connector:[ "Bezier", { curviness: 200 }]
					});
				}
			}
		}
	}
	if($("body").hasClass("contact")){
		if ($(window).width()>=979) {
			// Relier le contact avec le pin
			jsPlumb.setContainer($("#container-bg-map"));
			jsPlumb.connect({
				source: $("#bloc-adresse"),
				target: $("#pin-map"),
				//[x, y, dx, dy]
				anchors: [[0.5, 0, 0, 0], [1, 0.5, 1, 0]],
				endpoint:"Blank",
				paintStyle:{
				lineWidth:2,
				strokeStyle:'#cacaca',
				dashstyle:" 0 1"
				},
				connector:[ "Bezier", { curviness: 200 }]
			});
		}
	}

	refreshLink();
});