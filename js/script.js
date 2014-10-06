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
	requestAnimFrame(function(){
		jsPlumb.repaintEverything();
		animer();
	});
}

function initMenu(){
	TweenMax.from($("#menu-wrapper ul"), 0.3, {scale: 0.8, rotation: -30, delay: 0.5, ease:Cubic.easeInOut});
	TweenMax.from($("#menu-wrapper #circle-dashed"), 0.3, {scale: 0.8, rotation: -30, delay: 0.5, ease:Cubic.easeInOut});
	TweenMax.from($("#bloc-actus"), 0.3, {"margin-top": "-30px", delay: 0.5, ease:Cubic.easeInOut});
}

$(document).ready(function(){
	animer();
	initMenu();
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
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed"), 0.05, {scale: 1.2, ease:Cubic.easeInOut});
		tlCircleDashed.to($("#menu-wrapper #circle-dashed"), 0.3, {scale: 0.3, ease:Cubic.easeInOut});
		
		tlMenuWrapper.to($("#menu-wrapper"), 0.2, {width:"430px", height:"430px", "margin-top":"-110px", ease:Cubic.easeInOut});
		
		tlMenuWrapper.set($("#menu-wrapper ul li"), {width:"98px", height:"98px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a"), {"border-width":"10px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"), {display:"inline-block", ease:Cubic.easeInOut, onComplete: cerclesAnim});
		tlCircleDashed.set($("#menu-wrapper #circle-dashed"), {width:"312px", height:"312px", "margin-top": "-156px", "margin-left": "-156px", ease:Cubic.easeInOut});
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed"), 0.2, {scale: 1, delay: 0.3, ease:Cubic.easeInOut});
		
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
		
		tlMenuWrapper.to($("#menu-wrapper ul li"), 0.3, {left: "40%", top: "40%", ease:Cubic.easeInOut});
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed"), 0.3, {scale: 0.3, ease:Cubic.easeInOut});
		
		tlMenuWrapper.to($("#menu-wrapper"), 0.5, {width:"250px", height:"250px", "margin-top":"-90px", ease:Cubic.easeInOut});
		
		tlMenuWrapper.set($("#menu-wrapper ul li"), {width:"20px", height:"20px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a"), {"border-width":"0px", ease:Cubic.easeInOut});
		tlMenuWrapper.set($("#menu-wrapper ul li a .txt-circle"), {display:"none", ease:Cubic.easeInOut, onComplete: cerclesAnimRetour});
		tlCircleDashed.set($("#menu-wrapper #circle-dashed"), {width:"224px", height:"224px", "margin-top": "-112px", "margin-left": "-112px", ease:Cubic.easeInOut});
		
		tlCircleDashed.to($("#menu-wrapper #circle-dashed"), 0.3, {scale: 1, delay: 0.7, ease:Cubic.easeInOut});
		
		function cerclesAnimRetour(){
			tlCircles.to($("#menu-wrapper ul li.circle-vehicules"), 0.4, {top: "135px", left: "225px", ease:Cubic.easeInOut});
			tlCircles.to($("#menu-wrapper ul li.circle-formation"), 0.4, {top: "186px", left: "201px", delay:0.05, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-offre-conseil"), 0.4, {top: "219px", left: "153px", delay:0.1, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-informatique"), 0.4, {top: "219px", left: "76px", delay:0.15, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-service-client"), 0.4, {top: "186px", left: "28px", delay:0.2, ease:Cubic.easeInOut},0);
			tlCircles.to($("#menu-wrapper ul li.circle-juridique"), 0.4, {top: "135px", left: "5px", delay:0.25, ease:Cubic.easeInOut},0);
		}
	});
});

$( window ).resize(function() {

});

//[x, y, dx, dy]
//x and yare coordinates in the interval [0,1] specifying the position of the anchor
//dx and dy,which specify the orientation of the curve incident to the anchor
var anchors = [ [[1, 0.6, 0.5, 0.8], [0.1, 0.8, 0, 0.5]],      [[1, 0.3, 0, -0.8], [0, 0.9, 0.2, -0.7]],      [[0.51, 1, 0, 1], [0.7, 0, 0, 1]],     [[0, 0.2, 0, 0.5], [0.5, 0, 0, -1.5]],     [[1, 0.6, 0, 1], [0, 0.9, 0, 1]]];

jsPlumb.ready(function() {
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
		/*var instanceAccueil1 = jsPlumb.getInstance();
		instanceAccueil1.connect({
			source: $("#bloc-actus"),
			target: $(".bloc-1"),
			anchors: [[0.2, 1, 0.5, 0.8], [0.3, 0, 0, 0.5]],
			endpoint:"Blank",
			paintStyle:{
			lineWidth:2,
			strokeStyle:'#cacaca',
			dashstyle:" 0 1"
			},
			connector:[ "Bezier", { curviness: 50 }]
		});*/
		
	}
});