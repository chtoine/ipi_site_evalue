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




	function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            alert('Connection type: ' + states[networkState]);
    }

	document.addEventListener("offline", onOffline, false);

    function onOffline() {
        alert("pour bénéficier de toutes les fonctionalité de l'application vous devez etre connecter a internet");
    }

    document.addEventListener("online", onOnline, false);

    function onOnline() {
        checkConnection();
        var Leuuid = device.uuid;
        var Laversion = device.version;
        var plateforme = device.platform;
        alert ('UUID: ' + Leuuid);
        alert('version: ' + Laversion);
        alert('plateforme: ' + plateforme);
    }

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
       window.addEventListener("batterycritical", onBatteryCritical, false);
       window.addEventListener("batterylow", onBatteryLow, false);
       window.addEventListener("batterystatus", onBatteryStatus, false);

       if (cordova.platformId == 'android') {
           StatusBar.backgroundColorByHexString("#FFD700");
       }
    }




    function onBatteryStatus(status) {
        alert('staut batterie: '+status.level);
    }
    function onBatteryLow(status) {
        alert('staut batterie: '+status.level);
    }
    function onBatteryCritical(status) {
        alert('staut batterie: '+ status.level);
    }

   /* function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }*/





});