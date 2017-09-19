// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.db');
goog.require('cljs.core');
metamaker_desktop.db.default_db = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"datatypes","datatypes",-199835968),new cljs.core.Keyword(null,"srate","srate",-506238591),new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.Keyword(null,"fname","fname",1500291491),new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172),new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372),new cljs.core.Keyword(null,"show-locals-modal","show-locals-modal",-1804990107),new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"metas","metas",-187243671),new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725),new cljs.core.Keyword(null,"data-urls","data-urls",1907911823),new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.Keyword(null,"show-sparql","show-sparql",970456377),new cljs.core.Keyword(null,"cat-as","cat-as",-764873094),new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),new cljs.core.Keyword(null,"dataset","dataset",1159262238)],["",new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Start time",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Time",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"ssn:startTime"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"End time",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Time",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"ssn:endTime"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Timestamp",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Time",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"xsd:dateTimeStamp"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Device",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Location",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"seas:device"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Sensor",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Location",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"seas:sensor"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Room",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Location",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"seas:room"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"House",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Location",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"seas:house"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Appliance",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Location",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"p","p",151049309),"seas:appliance"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Value",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Value",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"ssn:hasValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Maximum Value",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Value",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:maxValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Minimum Value",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Value",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:minValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Mean Value",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Value",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:meanValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Power (Watts)",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Type",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:powerReading"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Humidity (relative)",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Type",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"rdf:a",new cljs.core.Keyword(null,"o","o",-1350007228),"seas:humidityReading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Gas",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Type",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:gasReading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"CO2",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Type",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:co2Reading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Light",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Type",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:lightReading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-b","cat-b",205205348),"Motion (PIR)",new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),"Type",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"p","p",151049309),"seas:motionReading"], null)], null),"1",cljs.core.PersistentVector.EMPTY,"",new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"time",new cljs.core.Keyword(null,"label","label",1718410804),"Start Time",new cljs.core.Keyword(null,"p","p",151049309),"ssn:startTime"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"time",new cljs.core.Keyword(null,"label","label",1718410804),"End Time",new cljs.core.Keyword(null,"p","p",151049309),"ssn:endTime"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"time",new cljs.core.Keyword(null,"label","label",1718410804),"Timestamp",new cljs.core.Keyword(null,"p","p",151049309),"xsd:dateTimeStamp"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(3),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"location",new cljs.core.Keyword(null,"label","label",1718410804),"Device",new cljs.core.Keyword(null,"p","p",151049309),"seas:device"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(4),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"location",new cljs.core.Keyword(null,"label","label",1718410804),"Sensor",new cljs.core.Keyword(null,"p","p",151049309),"seas:sensor"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(5),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"location",new cljs.core.Keyword(null,"label","label",1718410804),"Room",new cljs.core.Keyword(null,"p","p",151049309),"seas:room"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(6),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"location",new cljs.core.Keyword(null,"label","label",1718410804),"House",new cljs.core.Keyword(null,"p","p",151049309),"seas:house"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(7),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"location",new cljs.core.Keyword(null,"label","label",1718410804),"Appliance",new cljs.core.Keyword(null,"p","p",151049309),"seas:appliance"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(8),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"value",new cljs.core.Keyword(null,"label","label",1718410804),"Value",new cljs.core.Keyword(null,"p","p",151049309),"ssn:hasValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(9),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"value",new cljs.core.Keyword(null,"label","label",1718410804),"Maximum Value",new cljs.core.Keyword(null,"p","p",151049309),"seas:maxValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(10),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"value",new cljs.core.Keyword(null,"label","label",1718410804),"Minimum Value",new cljs.core.Keyword(null,"p","p",151049309),"seas:minValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(11),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"value",new cljs.core.Keyword(null,"label","label",1718410804),"Mean Value",new cljs.core.Keyword(null,"p","p",151049309),"seas:meanValue"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(12),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"type",new cljs.core.Keyword(null,"label","label",1718410804),"Power (Watts)",new cljs.core.Keyword(null,"p","p",151049309),"seas:powerReading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(13),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"type",new cljs.core.Keyword(null,"label","label",1718410804),"Humidity (relative)",new cljs.core.Keyword(null,"p","p",151049309),"seas:humidityReading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(14),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"type",new cljs.core.Keyword(null,"label","label",1718410804),"Gas",new cljs.core.Keyword(null,"p","p",151049309),"seas:gasReading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(15),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"type",new cljs.core.Keyword(null,"label","label",1718410804),"CO2",new cljs.core.Keyword(null,"p","p",151049309),"seas:co2Reading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(16),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"type",new cljs.core.Keyword(null,"label","label",1718410804),"Light",new cljs.core.Keyword(null,"p","p",151049309),"seas:lightReading"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),(17),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),"type",new cljs.core.Keyword(null,"label","label",1718410804),"Motion (PIR)",new cljs.core.Keyword(null,"p","p",151049309),"seas:motionReading"], null)], null),cljs.core.set.call(null,cljs.core.PersistentVector.EMPTY),false,"PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\nPREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>\nPREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\n\nSELECT *\nWHERE {{\n  SELECT ?f ?i WHERE {\n       ?f csv:hasColumn ?c .\n       ?c csv:mapsTo ssn:hasValue .\n       ?c csv:hasIndex ?i .}\n} UNION {\n  SELECT ?ti WHERE {\n       ?f csv:hasColumn ?t .\n       ?t csv:mapsTo xsd:dateTimeStamp .\n       ?t csv:hasIndex ?ti .}}}","MetaMaker",cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Values"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),"",cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tab1","tab1",457878244),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"label","label",1718410804),"String"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"label","label",1718410804),"Number"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"label","label",1718410804),"Date"], null)], null),(0),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),cljs.core.PersistentVector.EMPTY,false,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"time",new cljs.core.Keyword(null,"label","label",1718410804),"Time"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"type",new cljs.core.Keyword(null,"label","label",1718410804),"Reading Type"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"location",new cljs.core.Keyword(null,"label","label",1718410804),"Location"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"value",new cljs.core.Keyword(null,"label","label",1718410804),"Value"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),""]);

//# sourceMappingURL=db.js.map?rel=1505229171462