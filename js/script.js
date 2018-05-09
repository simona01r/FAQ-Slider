// Accordian
var action = "click";
var speed = "500";

$(document).ready(function() {
	$("li.q").on(action, function(){
		$(this).next() // elem urm al listei (actual este intrebare, urm este raspunsul)
			.slideToggle(speed) // urcam  coboram raspuns la click
				.siblings("li.a") // sele toate rasp (m putin cel activ)
					.slideUp(); // si le urcam in sus (acundem)
	var img = $(this).children("img"); // imagine a intrebarii curente

	$("img").not(img).removeClass("rotate");
	img.toggleClass("rotate");
	});
});