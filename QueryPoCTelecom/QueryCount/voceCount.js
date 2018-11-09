db.[nomeDB].aggregate([
{$match :{"numLinea":"3354323423", "data":{$gte: "20180101", $lte: "20181231"}}},
{ $unwind: "$cdrList" },
{$match: {"cdrList.macroFamiglia" : "VOCE", "cdrList.dataChiamata": { $gte: "20180101000000", $lt: "20181231999999"}}},
{$count: "risultatiTrovati"}
]).pretty()