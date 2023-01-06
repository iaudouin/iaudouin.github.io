//Kaltura config and modal video functions
const partner_id = '1919511';
const uiconf_id = '35265851';
const embedIframeJs = 'https://cdnapisec.kaltura.com/p/'+partner_id+'/sp/'+partner_id+'00/embedIframeJs/uiconf_id/'+uiconf_id+'/partner_id/'+partner_id;

function loadmyvid(myid) {
	var myModal = new bootstrap.Modal(document.getElementById('vidmodal'));
	//console.log("button clicked");
	myModal.show();
	var playerId = "kaltura_player";
	  				kWidget.embed({
				"targetId": playerId,
				"wid": "_"+partner_id,
				"uiconf_id": uiconf_id,
				"flashvars": {
				"mediaProxy.preferedFlavorBR" : "1400",
				"autoPlay":false
				},
				"entry_id": myid,
         readyCallback: function( playerId ){
			  var kdp = document.getElementById( playerId );
			  var x ="#"+myid;
			  kdp.kBind("secondQuartile", function(){$(x).addClass('videobtnwrap_clicked');});
			kdp.kBind("playerPlayEnd", function(){myModal.hide();});
			kdp.kBind('mediaReady', function () {
				kdp.sendNotification("doPlay");
			})
        }
		});
	}
	
	//Script stops video from playing when modal is closed
    $("#vidmodal").on('hidden.bs.modal', function (e) {kWidget.destroy('kaltura_player');});

//------
	
