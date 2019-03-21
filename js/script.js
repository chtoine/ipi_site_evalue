$(document).ready(function(){
	var menu=false //boolean pour 


	$("#prenom").click(function(){
		$("#prenom").css("background-color", "#F5F5F5");
	});
	$("#prenom").blur(function(){
		$("#prenom").css("background-color", "white");
	});

	$("#nom").click(function(){
		$("#nom").css("background-color", "#F5F5F5");
	});
	$("#nom").blur(function(){
		$("#nom").css("background-color", "white");
	});

	$("#date_de_naissance").click(function(){
		$("#date_de_naissance").css("background-color", "#F5F5F5");
	});
	$("#date_de_naissance").blur(function(){
		$("#date_de_naissance").css("background-color", "white");
	});

	$("#ville").click(function(){
		$("#ville").css("background-color", "#F5F5F5");
	});
	$("#ville").blur(function(){
		$("#ville").css("background-color", "white");
	});

	$("#mail").click(function(){
		$("#mail").css("background-color", "#F5F5F5");
	});
	$("#mail").blur(function(){
		$("#mail").css("background-color", "white");
	});

	$("#message").click(function(){
		$("#message").css("background-color", "#F5F5F5");
	});
	$("#message").blur(function(){
		$("#message").css("background-color", "white");
	});

	//permet d'agrandire le texte area
	$("#message").click(function(){
		$("#message").css("height", "7rem");
	});
	$("#message").blur(function(){
		$("#message").css("height", "5rem");
	});


	//pour afficher le menu pour téléphone
	$("#menu_tel").click(function(){
		if(menu==false){
			//$("").css("opacity", "0.5");
			$("#nav").show();
			menu=true;
		}else{
			//$("").css("opacity", "1");
			$("#nav").hide();
			menu=false;
		}
	});

	//pour le défilement
	$("#nav").click(function(e)){
		e.preventDefault();
		$("body").animate({
			scrollTop: $('#' +$(this).data('scroll')).offset().top
		}, 1000);
	}



});