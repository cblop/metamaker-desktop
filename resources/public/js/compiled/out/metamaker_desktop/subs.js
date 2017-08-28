// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"dname","dname",-245817722),(function (db){
return new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (db){
return db;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419),(function (db){
return new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),(function (db){
return new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),(function (db){
return new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-type","selected-type",97396872),(function (db){
var type = cljs.core.nth.call(null,new cljs.core.Keyword(null,"row-types","row-types",-301702756).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db));
var match = cljs.core.first.call(null,cljs.core.filter.call(null,((function (type){
return (function (p1__51063_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__51063_SHARP_),type);
});})(type))
,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db)));
if(cljs.core.truth_(match)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),(function (db,p__51065){
var vec__51066 = p__51065;
var _ = cljs.core.nth.call(null,vec__51066,(0),null);
var id = cljs.core.nth.call(null,vec__51066,(1),null);
var cats = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db))));
var catmap = cljs.core.map.call(null,((function (cats,vec__51066,_,id){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(cats,vec__51066,_,id))
,cats,cljs.core.range.call(null,cljs.core.count.call(null,cats)));
var label_for_id = ((function (cats,catmap,vec__51066,_,id){
return (function (id__$1){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (cats,catmap,vec__51066,_,id){
return (function (p1__51064_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51064_SHARP_),id__$1);
});})(cats,catmap,vec__51066,_,id))
,catmap)));
});})(cats,catmap,vec__51066,_,id))
;
return label_for_id.call(null,id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),(function (db,p__51070){
var vec__51071 = p__51070;
var _ = cljs.core.nth.call(null,vec__51071,(0),null);
var meta_label = cljs.core.nth.call(null,vec__51071,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__51071,_,meta_label){
return (function (p1__51069_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__51069_SHARP_),meta_label);
});})(vec__51071,_,meta_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.first.call(null,matches);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),(function (db,p__51075){
var vec__51076 = p__51075;
var _ = cljs.core.nth.call(null,vec__51076,(0),null);
var cat_label = cljs.core.nth.call(null,vec__51076,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__51076,_,cat_label){
return (function (p1__51074_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(p1__51074_SHARP_),cat_label);
});})(vec__51076,_,cat_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.map.call(null,((function (matches,vec__51076,_,cat_label){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(matches,vec__51076,_,cat_label))
,cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),matches))),cljs.core.range.call(null,cljs.core.count.call(null,matches)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),(function (db,p__51080){
var vec__51081 = p__51080;
var _ = cljs.core.nth.call(null,vec__51081,(0),null);
var cat_label = cljs.core.nth.call(null,vec__51081,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__51081,_,cat_label){
return (function (p1__51079_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(p1__51079_SHARP_),cat_label);
});})(vec__51081,_,cat_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),matches)))){
return cljs.core.map.call(null,((function (matches,vec__51081,_,cat_label){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(matches,vec__51081,_,cat_label))
,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),matches),cljs.core.range.call(null,cljs.core.count.call(null,matches)));
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163),(function (db){
var row = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),row);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594),(function (db){
return new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-b","selected-cat-b",-1359388313),(function (db,p__51085){
var vec__51086 = p__51085;
var _ = cljs.core.nth.call(null,vec__51086,(0),null);
var metas = cljs.core.nth.call(null,vec__51086,(1),null);
var i = cljs.core.nth.call(null,vec__51086,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null));
var m = new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__51086,_,metas,i){
return (function (p1__51084_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__51084_SHARP_));
});})(metam,m,vec__51086,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-file-cat-b","selected-file-cat-b",1378222179),(function (db,p__51090){
var vec__51091 = p__51090;
var _ = cljs.core.nth.call(null,vec__51091,(0),null);
var metas = cljs.core.nth.call(null,vec__51091,(1),null);
var i = cljs.core.nth.call(null,vec__51091,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594)], null));
var m = new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i)));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__51091,_,metas,i){
return (function (p1__51089_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__51089_SHARP_));
});})(metam,m,vec__51091,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-c","selected-cat-c",-2068898831),(function (db,p__51095){
var vec__51096 = p__51095;
var _ = cljs.core.nth.call(null,vec__51096,(0),null);
var metas = cljs.core.nth.call(null,vec__51096,(1),null);
var i = cljs.core.nth.call(null,vec__51096,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null));
var m = new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__51096,_,metas,i){
return (function (p1__51094_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__51094_SHARP_));
});})(metam,m,vec__51096,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-file-cat-c","selected-file-cat-c",-621949955),(function (db,p__51100){
var vec__51101 = p__51100;
var _ = cljs.core.nth.call(null,vec__51101,(0),null);
var metas = cljs.core.nth.call(null,vec__51101,(1),null);
var i = cljs.core.nth.call(null,vec__51101,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594)], null));
var m = new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i)));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__51101,_,metas,i){
return (function (p1__51099_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__51099_SHARP_));
});})(metam,m,vec__51101,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"row-tabs","row-tabs",1912262317),(function (db){
var heads = new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(heads)){
return cljs.core.map.call(null,((function (heads){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(heads))
,heads,cljs.core.range.call(null,cljs.core.count.call(null,heads)));
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data-types","data-types",-2140125264),(function (db){
return new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db);
}));
metamaker_desktop.subs.match_meta = (function metamaker_desktop$subs$match_meta(a,b){
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(b)));
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),(function (db,p__51105){
var vec__51106 = p__51105;
var _ = cljs.core.nth.call(null,vec__51106,(0),null);
var meta = cljs.core.nth.call(null,vec__51106,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__51106,_,meta){
return (function (p1__51104_SHARP_){
return metamaker_desktop.subs.match_meta.call(null,meta,p1__51104_SHARP_);
});})(vec__51106,_,meta))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,matches));
return p;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"types","types",590030639),(function (db){
return new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372),(function (db){
return new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub_raw.call(null,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"description","description",-1428560544),(function (db){
return new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"fname","fname",1500291491),(function (db){
return new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"srate","srate",-506238591),(function (db){
return new cljs.core.Keyword(null,"srate","srate",-506238591).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"x","x",2099068185),(function (db){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),(function (db){
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"sparql","sparql",1388494024),(function (db){
new cljs.core.Keyword(null,"sparql","sparql",1388494024).cljs$core$IFn$_invoke$arity$1(db);

var cat_as = new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db);
var filtered = new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db);
if(!(((cljs.core.second.call(null,cat_bs) == null)) && ((cljs.core.first.call(null,cat_bs) == null)))){
return [cljs.core.str("PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n"),cljs.core.str("PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>\n"),cljs.core.str("PREFIX seas:<https://w3id.org/seas#>\n"),cljs.core.str("PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\n"),cljs.core.str("PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n"),cljs.core.str("SELECT *\n"),cljs.core.str("WHERE {{"),cljs.core.str("SELECT ?f ?x WHERE {\n"),cljs.core.str("                    ?f rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"dataset","dataset",1159262238).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str("\" .\n"),cljs.core.str("                    ?f csv:hasColumn ?c .\n"),cljs.core.str("                    ?c csv:mapsTo "),cljs.core.str(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),cljs.core.first.call(null,cat_bs)))),cljs.core.str(" .\n"),cljs.core.str("                    ?c csv:hasIndex ?x .}\n"),cljs.core.str("} UNION {\n"),cljs.core.str("  SELECT ?y WHERE {\n"),cljs.core.str("                    ?f rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"dataset","dataset",1159262238).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str("\" .\n"),cljs.core.str("                   ?f csv:hasColumn ?cy .\n"),cljs.core.str("                   ?cy csv:mapsTo "),cljs.core.str(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),cljs.core.second.call(null,cat_bs)))),cljs.core.str(" .\n"),cljs.core.str("                   ?cy csv:hasIndex ?y .}}}\n")].join('');
} else {
return "";
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cats","selected-cats",-1104866136),(function (db){
return new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-a","selected-cat-a",1579200799),(function (db,p__51109){
var vec__51110 = p__51109;
var _ = cljs.core.nth.call(null,vec__51110,(0),null);
var i = cljs.core.nth.call(null,vec__51110,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-as","cat-as",-764873094),(function (db){
return new cljs.core.Keyword(null,"cat-as","cat-as",-764873094).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),(function (db){
return new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data-urls","data-urls",1907911823),(function (db){
var resp = cljs.core.js__GT_clj.call(null,JSON.parse(cljs.core.get.call(null,new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(db),"out")),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var results = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.set.call(null,cljs.core.map.call(null,((function (resp,results){
return (function (p1__51113_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"url","url",276297046)],[cljs.core.get_in.call(null,p1__51113_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"value","value",305978217)], null)),cljs.core.get_in.call(null,p1__51113_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"value","value",305978217)], null))]);
});})(resp,results))
,results)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),(function (db,p__51114){
var vec__51115 = p__51114;
var _ = cljs.core.nth.call(null,vec__51115,(0),null);
var i = cljs.core.nth.call(null,vec__51115,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172),(function (db){
return new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-qa","selected-cat-qa",813901657),(function (db,p__51118){
var vec__51119 = p__51118;
var _ = cljs.core.nth.call(null,vec__51119,(0),null);
var i = cljs.core.nth.call(null,vec__51119,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-qb","selected-cat-qb",760801536),(function (db,p__51122){
var vec__51123 = p__51122;
var _ = cljs.core.nth.call(null,vec__51123,(0),null);
var i = cljs.core.nth.call(null,vec__51123,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db),i);
}));

//# sourceMappingURL=subs.js.map?rel=1503912410838