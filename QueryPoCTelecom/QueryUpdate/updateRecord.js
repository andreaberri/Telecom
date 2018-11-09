db.[nomeDB].update(
  {
    "numLinea":"3354323423",		// Find the document for a given number and date
    "data" : "20181101",
    count: { $lt: 50 }
  },
  {
    $push: { 
	
	"cdrList" :  
        {
            "tipoChiamata" : "1",
            "macroFamiglia" : "DATI",
            "dataChiamata" : "20181101151111",
            "codiceOfferta" : "     ",
            "apn" : null,
            "numChiamatoCifrato" : "C324F26D75F559F1",
            "cin" : "6822875",
            "durataChiamata" : 60,
            "numChiamato" : "49***",
            "dataFatturazione" : "20181101150010",
            "centrale" : "MB01",
            "costo" : 0,
            "profiloTariffario" : "224",
            "tipoCartaServizi2" : "00",
            "tipoComunicazione" : "0",
            "tipoTicket" : "0",
            "volumeDati" : 0,
            "classeServizio" : null,
            "identificativoSIM" : null
        }
	},
    $inc: { count: 1 }		                 // Increase the bucket size by 1
  },
  { 
	upsert: true 	// if the bucket exists update it otherwise create a new one
  }
)






{
    "_id" : ObjectId("5be3299c6bde0d61e1c73372"),
    "numLinea" : "3354323423",
    "data" : "20181101",
    "count" : 6,
    "cdrList" : [ 
        {
            "tipoChiamata" : "1",
            "macroFamiglia" : "VOCE",
            "dataChiamata" : "20181101150000",
            "codiceOfferta" : "     ",
            "apn" : null,
            "numChiamatoCifrato" : "C324F26D75F559F1",
            "cin" : "6822875",
            "durataChiamata" : 60,
            "numChiamato" : "49***",
            "dataFatturazione" : "20181101150010",
            "centrale" : "MB01",
            "costo" : 0,
            "profiloTariffario" : "224",
            "tipoCartaServizi2" : "00",
            "tipoComunicazione" : "0",
            "tipoTicket" : "0",
            "volumeDati" : 0,
            "classeServizio" : null,
            "identificativoSIM" : null
        }
    ]
}