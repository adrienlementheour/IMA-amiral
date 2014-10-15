//////////////////////////////////////////////////
//////////////// REQUESTANIMFRAME ////////////////
//////////////////////////////////////////////////
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
	myScroll = $(document).scrollTop();
	var heightContent = $("#content").height();
	//if ($(window).height()>=$("#content").height()+$("#visu-content").position().top){
		//TweenMax.set($("#visu-content"), {"top": myScroll+"px"});
	//}
	//console.log("myScroll = "+myScroll);
	//console.log((($("#content").height()+$("#visu-content").position().top)-$(window).height()));
	if (myScroll<=(($("#content").height()+$("#visu-content").position().top)-$(window).height())){
		TweenMax.set($("#visu-content"), {"top": myScroll+"px"});
	}
	
	requestAnimFrame(function(){
		//jsPlumb.setSuspendDrawing(false, true);
		//jsPlumb.repaintEverything();
		//jsPlumb.repaint($(".has-js-plumb"));
		animer();
	});
}

function initMenu(){
	TweenMax.from($("#menu-wrapper ul"), 0.3, {scale: 0.8, rotation: -30, delay: 0.5, ease:Cubic.easeInOut});
	TweenMax.from($("#menu-wrapper #circle-dashed-container"), 0.3, {scale: 0.8, rotation: -30, delay: 0.5, ease:Cubic.easeInOut});
	TweenMax.from($("#zone-actus"), 0.3, {"margin-top": "-30px", delay: 0.5, ease:Cubic.easeInOut});
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
		TweenMax.set($("#menu-wrapper"), {css:{className:'+=active'}});
		
		tlMenuWrapper.remove();
		tlCircleDashed.remove();
		tlCircles.remove();
		tlMenuWrapper = new TimelineMax();
		tlCircleDashed = new TimelineMax();
		tlCircles = new TimelineMax();
		
		tlMenuWrapper.to($("#menu-wrapper ul"), 0.05, {scale:1.2, ease:Cubic.easeInOut});
		tlMenuWrapper.to($("#menu-wrapper ul"), 0.05, {scale:1 , ease:Cubic.easeInOut});
		tlMenuWrapper.to($("#menu-wrapper ul li"), 0.1, {left: "35%", top: "35%", ease:Cubic.easeInOut});
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.05, {scale: 1.2, ease:Cubic.easeInOut});
		tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.3, {scale: 0.3, ease:Cubic.easeInOut});
		
		tlMenuWrapper.to($("#menu-wrapper"), 0.2, {width:"430px", height:"430px", "margin-top":"-110px", ease:Cubic.easeInOut});
		
		tlMenuWrapper.set($("#menu-wrapper ul li"), {width:"98px", height:"98px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a"), {"border-width":"10px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"), {display:"inline-block", ease:Cubic.easeInOut, onComplete: cerclesAnim});
		tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"), {width:"312px", height:"312px", "margin-top": "-156px", "margin-left": "-156px", ease:Cubic.easeInOut});
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.2, {scale: 1, delay: 0.3, ease:Cubic.easeInOut});
		
		function cerclesAnim(){
			tlCircles.to($("#menu-wrapper ul li.circle-vehicules"), 0.3, {top: "85px", left: "295px", ease:Cubic.easeInOut});
			tlCircles.to($("#menu-wrapper ul li.circle-formation"), 0.3, {top: "216px", left: "326px", delay:0.05, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-offre-conseil"), 0.3, {top: "321px", left: "238px", delay:0.1, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-informatique"), 0.3, {top: "321px", left: "90px", delay:0.15, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-service-client"), 0.3, {top: "216px", left: "6px", delay:0.2, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-juridique"), 0.3, {top: "85px", left: "37px", delay:0.25, ease:Cubic.easeInOut},0);
		}

	}, function(){
		// au mouse leave
		TweenMax.set($("#menu-wrapper"), {css:{className:'-=active'}});
		
		tlMenuWrapper.remove();
		tlCircleDashed.remove();
		tlCircles.remove();
		tlMenuWrapper = new TimelineMax();
		tlCircleDashed = new TimelineMax();
		tlCircles = new TimelineMax();
		tlMenuWrapper.set($("#menu-wrapper ul"), {scale:1 , ease:Cubic.easeInOut});
		tlMenuWrapper.to($("#menu-wrapper ul li"), 0.3, {left: "40%", top: "40%", ease:Cubic.easeInOut});
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.3, {scale: 0.3, ease:Cubic.easeInOut});
		
		tlMenuWrapper.to($("#menu-wrapper"), 0.5, {width:"250px", height:"250px", "margin-top":"-90px", ease:Cubic.easeInOut});
		
		tlMenuWrapper.set($("#menu-wrapper ul li"), {width:"20px", height:"20px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a"), {"border-width":"0px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"), {display:"none", ease:Cubic.easeInOut, onComplete: cerclesAnimRetour});
		tlCircleDashed.set($("#menu-wrapper #circle-dashed-container"), {width:"224px", height:"224px", "margin-top": "-112px", "margin-left": "-112px", ease:Cubic.easeInOut});
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed-container"), 0.3, {scale: 1, delay: 0.7, ease:Cubic.easeInOut});
		
		function cerclesAnimRetour(){
			tlCircles.to($("#menu-wrapper ul li.circle-vehicules"), 0.4, {top: "135px", left: "225px", ease:Cubic.easeInOut});
			tlCircles.to($("#menu-wrapper ul li.circle-formation"), 0.4, {top: "186px", left: "201px", delay:0.05, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-offre-conseil"), 0.4, {top: "219px", left: "153px", delay:0.1, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-informatique"), 0.4, {top: "219px", left: "76px", delay:0.15, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-service-client"), 0.4, {top: "186px", left: "28px", delay:0.2, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-juridique"), 0.4, {top: "135px", left: "5px", delay:0.25, ease:Cubic.easeInOut},0);
		}
	});
}

// Clic sur le bouton video
function btnVideoClick(){
	$("a.btn-video").click(function(){
		$("body").addClass("video-ouverte");
		// décaler le wrapper content
		TweenMax.to($("#wrapper-content"), 0.5, {"x":"-100%", ease:Cubic.easeInOut});
		// centrer la div fond visu
		tlBlocVisuContent = new TimelineMax();
		tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"), 0.5, {"right":"50%", "margin-right": "-21.5%", ease:Cubic.easeInOut});
		tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"), 0.2, {opacity: 0, ease:Cubic.easeInOut});
		tlBlocVisuContent.to($("#fond-couleur-bloc-visu"), 0.2, {opacity: 0, display: "none", ease:Cubic.easeInOut, onComplete: completeFondCouleur});
		return false;
	});
}

function completeFondCouleur(){
	TweenMax.set($("#bloc-visu"), {display: "none"});
	TweenMax.set($("#container-bloc-visu-content"), {display: "none"});
	
	var tlBlocAutresVides = new TimelineMax();
	tlBlocAutresVides.to($("#bloc-autres-videos"), 0.4, {marginRight: "0", ease:Cubic.easeInOut});
	tlBlocAutresVides.to($("#bloc-autres-videos"), 0.4, {marginRight: "-196px", delay: 0.5, ease:Cubic.easeInOut});
	
	tlBlocAutresVides.to($("#bloc-retour-video"), 0.2, {marginLeft: "0px", ease:Cubic.easeInOut});
}

// Clic sur le retour imatech
function btnRetourVideoClick(){
	$("a#retour-video").click(function(){
		$("body").removeClass("video-ouverte");
		stopVideos();
		TweenMax.set($("#bloc-visu"), {display: "block"});
		TweenMax.set($("#container-bloc-visu-content"), {display: "block"});
		TweenMax.to($("#bloc-retour-video"), 0.2, {marginLeft:"-200px", ease:Cubic.easeInOut});
		TweenMax.to($("#bloc-autres-videos"), 0.2, {marginRight: "-250px", "x": "0px", ease:Cubic.easeInOut});
		tlBlocVisuContentRetour = new TimelineMax();
		tlBlocVisuContentRetour.to($("#fond-couleur-bloc-visu"), 0.2, {opacity: 1, display: "block", ease:Cubic.easeInOut});
		tlBlocVisuContentRetour.to($("#bloc-fond-visu .bloc-visu-content"), 0.2, {opacity: 1, ease:Cubic.easeInOut, onComplete: completeFondCouleurRetour});
		return false;
	});
}

function completeFondCouleurRetour(){
	TweenMax.to($("#bloc-fond-visu .bloc-visu-content"), 0.5, {"right":"0", "margin-right": "0%", ease:Cubic.easeInOut});
	TweenMax.to($("#wrapper-content"), 0.5, {"x":"0%", ease:Cubic.easeInOut});
}

function btnPlusVideos(){
	$("a#plus-autres-videos").hover(function(){
		// au mouse enter
		if(!$("#bloc-autres-videos").hasClass("open")){
			TweenMax.to($("#bloc-autres-videos"), 0.2, {x: "-20px", ease:Cubic.easeInOut});
		}
		TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {scale: "1.1", ease:Cubic.easeInOut});
	}, function(){
		// au mouse leave
		TweenMax.to($("#bloc-autres-videos"), 0.2, {x: "0px", ease:Cubic.easeInOut});
		TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {scale: "1", ease:Cubic.easeInOut});
	});
	$("a#plus-autres-videos").click(function(){
		if(!$("#bloc-autres-videos").hasClass("open")){
			TweenMax.set($("#bloc-autres-videos"), {x: "0"});
			TweenMax.to($("#bloc-autres-videos"), 0.2, {marginRight: "0px", ease:Cubic.easeInOut});
			TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {rotation: 45, ease:Cubic.easeInOut});
		}else{
			TweenMax.to($("#bloc-autres-videos"), 0.2, {marginRight: "-196px", ease:Cubic.easeInOut});
			TweenMax.to($("a#plus-autres-videos .icon-plus"), 0.2, {rotation: 0, ease:Cubic.easeInOut});
		}
		$("#bloc-autres-videos").toggleClass("open");
		
		return false;
	});
}

////////////////////////////////////////////////////////////////////////////////
////////////////////// Fonction pour stopper les videos ////////////////////////
////////////////////////////////////////////////////////////////////////////////
function stopVideos(){
	$(".video-accueil iframe").each(function(index) {
	  $(this).attr('src', $(this).attr('src'));
	});
}

////////////////////// Fonction gérer la taille des raccords ribbons ////////////////////////
function categBlocCopies(){
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
			var blocParent = $(this).parent();
			var widthRibbon = $(".ribbon .ribbon-content", blocParent).width();
			var heightRibbon = $(".ribbon .ribbon-content", blocParent).height();
			TweenMax.set($(".ribbon-content",this), {width: widthRibbon+"px", height: heightRibbon+"px"});
			TweenMax.set($(this), {display: "block"});
		});
	}, 500);
}


$(document).ready(function(){
	animer();
	initMenu();
	hoverMenu();
	categBlocCopies();
	if($("body").hasClass("accueil")){
		btnVideoClick();
		btnRetourVideoClick();
		btnPlusVideos();
	}
});

//$(window).load(function(){
	//categBlocCopies();
//});

$(document).scroll(function() {
	
});

$( window ).resize(function() {

});

//[x, y, dx, dy]
//x and yare coordinates in the interval [0,1] specifying the position of the anchor
//dx and dy,which specify the orientation of the curve incident to the anchor
var anchors = [ [[1, 0.6, 0.5, 0.8], [0.1, 0.8, 0, 0.5]],      [[1, 0.3, 0, -0.8], [0, 0.9, 0.2, -0.7]],      [[0.51, 1, 0, 1], [0.7, 0, 0, 1]],     [[0, 0.2, 0, 0.5], [0.5, 0, 0, -1.5]],     [[1, 0.6, 0, 1], [0, 0.9, 0, 1]]];

jsPlumb.ready(function() {
	jsPlumb.setContainer($("#wrapper-content"));
	var nbBlocSmall = $(".bloc-small").length;
	$(".bloc-small").each(function(index){
		if (index<(nbBlocSmall-1)) {
			var instance= jsPlumb.getInstance();
			//instance.connect({
			jsPlumb.connect({
				source: $(".bloc-"+(index+1)),
				target: $(".bloc-"+(index+2)),
	
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
	
	if($("body").hasClass("accueil")){
		// Relier le bloc actu avec le premier bloc small (RSE)
		jsPlumb.connect({
			source: $("#bloc-actus"),
			target: $(".bloc-1"),
			anchors: [[0.2, 1, -1, 0], [0.4, 0, 0, 0]],
			endpoint:"Blank",
			paintStyle:{
			lineWidth:2,
			strokeStyle:'#cacaca',
			dashstyle:" 0 1"
			},
			connector:[ "Bezier", { curviness: 50 }]
		});
		
		// Relier le menu avec le lien video
		jsPlumb.connect({
			source: $("#menu-wrapper"),
			target: $(".bloc-btn-video"),
			anchors: [[1.2, 0.5, 1, 0], [0, 0.5, -1, 0]],
			endpoint:"Blank",
			paintStyle:{
			lineWidth:2,
			strokeStyle:'#cacaca',
			dashstyle:" 0 1"
			},
			connector:[ "Flowchart", {stub:400, cornerRadius: 40, gap: 40}]
		});
	}
	
	repeindre();
});

function repeindre(){
	jsPlumb.repaint($(".has-js-plumb"));
	window.setTimeout(function() { repeindre() }, 10)
}