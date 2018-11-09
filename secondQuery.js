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
	
match1= {
	$match: {
		"cdrList.macroFamiglia" : cdrsType, 
		"cdrList.dataChiamata": { $gte: tsStart, $lt: tsStop}
		}
	}
	
sort= { 
	$sort: { "cdrList.dataChiamata": 1 } 
	}

count=  {
	$count: "progIdTypeInCdrs"
	}
	
group= {
	$group : {                                       
     _id : { numLinea: "$numLinea", data : "$data"},     
     totalField1: { $sum: "$cdrList.f1" },
     totalField3: { $sum: "$cdrList.f3" }
         }
	}

	

//db.bucketProva.aggregate([match0, match1, sort]).pretty() esempio di uso
