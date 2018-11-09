//SECOND QUERY#################################

var numLinea= "3354323423"; // stringa identificativa del chiamante es. "354323423"
var dateStart= "20180101"; // data in formato stringa yyyyMMdd
var dateStop= "20181231"; // data in formato stringa yyyyMMdd
var cdrsType= "DATI"; //tipo di cdrs da cercare es. "VOCE", SMS/MMS, DATI
var tsStart= "20180101000000"; //formato stringa timestamp da cui cercare il cdrs es. "20181101150000"
var tsStop= "20181231999999"; //formato stringa timestamp da cui cercare il cdrs es. "20181101150000"


match0= {
	$match: {
		"numLinea" : numLinea, 
		"data":{$gte: dateStart, $lte: dateStop}
		}
	}
	
match1Dati= {
	$match: {
		"cdrList.macroFamiglia" : "DATI", 
		"cdrList.dataChiamata": { $gte: tsStart, $lt: tsStop}
		}
	}

match1Voce= {
	$match: {
		"cdrList.macroFamiglia" : "VOCE", 
		"cdrList.dataChiamata": { $gte: tsStart, $lt: tsStop}
		}
	}

match1Sms= {
	$match: {
		"cdrList.macroFamiglia" : "SMS/MMS", 
		"cdrList.dataChiamata": { $gte: tsStart, $lt: tsStop}
		}
	}	
	
	
unwind= {
	$unwind: "$cdrList"
	}
	
sort= { 
	$sort: { "cdrList.dataChiamata": 1 } 
	}

sortDisc= { 
	$sort: { "cdrList.dataChiamata": -1 } 
	}	


count=  {
	$count: "risultatiTrovati"
	}
	
group= {
	$group : {                                       
     _id : { numLinea: "$numLinea", data : "$data"},     
     totaleConOfferta: { $sum: "$cdrList.costo" },
     //totaleFatturati: { $sum: "$cdrList.dataFatturazione" }
         }
	}

	

//db.bucketProva.aggregate([match0, match1Dati, sort]).pretty()
