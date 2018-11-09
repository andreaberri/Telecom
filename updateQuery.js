// questa funziona
db.cartelliniTris.update(
	{
		numLinea: "3354323423",
		data: "20180101",
		count: { $lt: 50 }
	},
	{
		$push: {
			cdrList: {
			"tipoChiamata" : "23",
			"macroFamiglia" : "SMS/MMS",
			"dataChiamata" : "20181101131111", // last 3 numbers were 000
			"codiceOfferta" : "     ",
			"apn" : null,
			"numChiamatoCifrato" : "9EF96E1AEEA3C3E0FC366AC3D5D3F5B1",
			"cin" : null,
			"durataChiamata" : 0,
			"numChiamato" : "3351114***",
			"dataFatturazione" : "20181101131010",
			"centrale" : "MB01",
			"costo" : 0.605,
			"profiloTariffario" : "224",
			"tipoCartaServizi2" : "00",
			"tipoComunicazione" : null,
			"tipoTicket" : null,
			"volumeDati" : 2048,
			"classeServizio" : null,
			"identificativoSIM" : null
		 }
		},
	$inc: { count: 1 }
	},
	{
		upsert: true
		// if the bucket exists update it otherwise create a new one
	}
)
