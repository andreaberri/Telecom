//SECOND QUERY#################################

var numLinea= "354323423"; // stringa identificativa del chiamante es. "354323423"
var dateStart= "20180101"; // data in formato stringa yyyyMMdd
var dateStop= "20181231"; // data in formato stringa yyyyMMdd
var cdrsType= "SMS"; //tipo di cdrs da cercare es. "APN"
var tsStart= "20180101000000",; //formato stringa timestamp da cui cercare il cdrs es. "20181101150000"
var tsStop= "20181231999999",; //formato stringa timestamp da cui cercare il cdrs es. "20181101150000"


match0= {
	$match: {
		"numLinea" : numLinea, 
		"data":{$gte: dateStart, $lte: dateStop}
		}
	}
	
unwind= {
	$unwind: "$cdrList"
	}
	
match1= {
	$match: {
		"cdrList.macroFamiglia" : cdrsType, 
		"cdrList.dataChiamata": { $gte: tsStart, $lt: tsStop}
		}
	}
	
sort= { 
	$sort: { "cdrList.dataChiamata": 1 } 
	}


	
db.bucketProva.aggregate([match0, unwind, match1, sort]).pretty()
