function animer(){myScroll=$(document).scrollTop();var e=$("#content").height();console.log("myScroll = "+myScroll),console.log($("#content").height()+$("#visu-content").position().top-$(window).height()),myScroll<=$("#content").height()+$("#visu-content").position().top-$(window).height()&&TweenMax.set($("#visu-content"),{top:myScroll+"px"}),requestAnimFrame(function(){jsPlumb.repaintEverything(),animer()})}function initMenu(){TweenMax.from($("#menu-wrapper ul"),.3,{scale:.8,rotation:-30,delay:.5,ease:Cubic.easeInOut}),TweenMax.from($("#menu-wrapper #circle-dashed-container"),.3,{scale:.8,rotation:-30,delay:.5,ease:Cubic.easeInOut}),TweenMax.from($("#zone-actus"),.3,{"margin-top":"-30px",delay:.5,ease:Cubic.easeInOut})}function hoverMenu(){var e;e=new TimelineMax;var n;n=new TimelineMax;var t;t=new TimelineMax,$("#menu-wrapper").hover(function(){function a(){t.to($("#menu-wrapper ul li.circle-vehicules"),.3,{top:"85px",left:"295px",ease:Cubic.easeInOut}),t.to($("#menu-wrapper ul li.circle-formation"),.3,{top:"216px",left:"326px",delay:.05,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-offre-conseil"),.3,{top:"321px",left:"238px",delay:.1,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-informatique"),.3,{top:"321px",left:"90px",delay:.15,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-service-client"),.3,{top:"216px",left:"6px",delay:.2,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-juridique"),.3,{top:"85px",left:"37px",delay:.25,ease:Cubic.easeInOut},0)}TweenMax.set($("#menu-wrapper"),{css:{className:"+=active"}}),e.remove(),n.remove(),t.remove(),e=new TimelineMax,n=new TimelineMax,t=new TimelineMax,e.to($("#menu-wrapper ul"),.05,{scale:1.2,ease:Cubic.easeInOut}),e.to($("#menu-wrapper ul"),.05,{scale:1,ease:Cubic.easeInOut}),e.to($("#menu-wrapper ul li"),.1,{left:"35%",top:"35%",ease:Cubic.easeInOut}),n.to($("#menu-wrapper #circle-dashed-container"),.05,{scale:1.2,ease:Cubic.easeInOut}),n.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),e.to($("#menu-wrapper"),.2,{width:"430px",height:"430px","margin-top":"-110px",ease:Cubic.easeInOut}),e.set($("#menu-wrapper ul li"),{width:"98px",height:"98px",ease:Cubic.easeInOut}),e.set($("#menu-wrapper ul li a"),{"border-width":"10px",ease:Cubic.easeInOut}),e.set($("#menu-wrapper ul li a .txt-circle"),{display:"inline-block",ease:Cubic.easeInOut,onComplete:a}),n.set($("#menu-wrapper #circle-dashed-container"),{width:"312px",height:"312px","margin-top":"-156px","margin-left":"-156px",ease:Cubic.easeInOut}),n.to($("#menu-wrapper #circle-dashed-container"),.2,{scale:1,delay:.3,ease:Cubic.easeInOut})},function(){function a(){t.to($("#menu-wrapper ul li.circle-vehicules"),.4,{top:"135px",left:"225px",ease:Cubic.easeInOut}),t.to($("#menu-wrapper ul li.circle-formation"),.4,{top:"186px",left:"201px",delay:.05,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-offre-conseil"),.4,{top:"219px",left:"153px",delay:.1,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-informatique"),.4,{top:"219px",left:"76px",delay:.15,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-service-client"),.4,{top:"186px",left:"28px",delay:.2,ease:Cubic.easeInOut},0),t.to($("#menu-wrapper ul li.circle-juridique"),.4,{top:"135px",left:"5px",delay:.25,ease:Cubic.easeInOut},0)}TweenMax.set($("#menu-wrapper"),{css:{className:"-=active"}}),e.remove(),n.remove(),t.remove(),e=new TimelineMax,n=new TimelineMax,t=new TimelineMax,e.set($("#menu-wrapper ul"),{scale:1,ease:Cubic.easeInOut}),e.to($("#menu-wrapper ul li"),.3,{left:"40%",top:"40%",ease:Cubic.easeInOut}),n.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:.3,ease:Cubic.easeInOut}),e.to($("#menu-wrapper"),.5,{width:"250px",height:"250px","margin-top":"-90px",ease:Cubic.easeInOut}),e.set($("#menu-wrapper ul li"),{width:"20px",height:"20px",ease:Cubic.easeInOut}),e.set($("#menu-wrapper ul li a"),{"border-width":"0px",ease:Cubic.easeInOut}),e.set($("#menu-wrapper ul li a .txt-circle"),{display:"none",ease:Cubic.easeInOut,onComplete:a}),n.set($("#menu-wrapper #circle-dashed-container"),{width:"224px",height:"224px","margin-top":"-112px","margin-left":"-112px",ease:Cubic.easeInOut}),n.to($("#menu-wrapper #circle-dashed-container"),.3,{scale:1,delay:.7,ease:Cubic.easeInOut})})}function btnVideoClick(){$("a.btn-video").click(function(){return TweenMax.to($("#wrapper-content"),.5,{x:"-100%",ease:Cubic.easeInOut}),tlBlocVisuContent=new TimelineMax,tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.5,{right:"50%","margin-right":"-21.5%",ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#bloc-fond-visu .bloc-visu-content"),.2,{opacity:0,ease:Cubic.easeInOut}),tlBlocVisuContent.to($("#fond-couleur-bloc-visu"),.2,{opacity:0,display:"none",ease:Cubic.easeInOut,onComplete:completeFondCouleur}),!1})}function completeFondCouleur(){TweenMax.set($("#bloc-visu"),{display:"none"}),TweenMax.set($("#container-bloc-visu-content"),{display:"none"})}window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),$(document).ready(function(){animer(),initMenu(),hoverMenu()}),$(document).scroll(function(){}),$(window).resize(function(){});var anchors=[[[1,.6,.5,.8],[.1,.8,0,.5]],[[1,.3,0,-.8],[0,.9,.2,-.7]],[[.51,1,0,1],[.7,0,0,1]],[[0,.2,0,.5],[.5,0,0,-1.5]],[[1,.6,0,1],[0,.9,0,1]]];jsPlumb.ready(function(){jsPlumb.setContainer($("#wrapper-content"));var e=$(".bloc-small").length;$(".bloc-small").each(function(n){if(e-1>n){var t=jsPlumb.getInstance();jsPlumb.connect({source:$(".bloc-"+(n+1)),target:$(".bloc-"+(n+2)),anchors:anchors[n],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]})}}),$("body").hasClass("accueil")&&(btnVideoClick(),jsPlumb.connect({source:$("#bloc-actus"),target:$(".bloc-1"),anchors:[[.2,1,-1,0],[.4,0,0,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Bezier",{curviness:50}]}),jsPlumb.connect({source:$("#menu-wrapper"),target:$(".bloc-btn-video"),anchors:[[1.2,.5,1,0],[0,.5,-1,0]],endpoint:"Blank",paintStyle:{lineWidth:2,strokeStyle:"#cacaca",dashstyle:" 0 1"},connector:["Flowchart",{stub:400,cornerRadius:40,gap:40}]}))});