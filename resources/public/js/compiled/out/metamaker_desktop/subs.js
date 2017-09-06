// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"graphs","graphs",-1584479112),(function (db){
return cljs.core.map.call(null,(function (p1__105022_SHARP_){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),p1__105022_SHARP_));
}),new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372).cljs$core$IFn$_invoke$arity$1(db));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"name","name",1843675177),(function (db){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),(function (db){
return new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"show-sparql","show-sparql",970456377),(function (db){
return new cljs.core.Keyword(null,"show-sparql","show-sparql",970456377).cljs$core$IFn$_invoke$arity$1(db);
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
return (function (p1__105023_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__105023_SHARP_),type);
});})(type))
,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db)));
if(cljs.core.truth_(match)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),(function (db,p__105025){
var vec__105026 = p__105025;
var _ = cljs.core.nth.call(null,vec__105026,(0),null);
var id = cljs.core.nth.call(null,vec__105026,(1),null);
var cats = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db))));
var catmap = cljs.core.map.call(null,((function (cats,vec__105026,_,id){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(cats,vec__105026,_,id))
,cats,cljs.core.range.call(null,cljs.core.count.call(null,cats)));
var label_for_id = ((function (cats,catmap,vec__105026,_,id){
return (function (id__$1){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (cats,catmap,vec__105026,_,id){
return (function (p1__105024_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__105024_SHARP_),id__$1);
});})(cats,catmap,vec__105026,_,id))
,catmap)));
});})(cats,catmap,vec__105026,_,id))
;
return label_for_id.call(null,id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),(function (db,p__105030){
var vec__105031 = p__105030;
var _ = cljs.core.nth.call(null,vec__105031,(0),null);
var meta_label = cljs.core.nth.call(null,vec__105031,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__105031,_,meta_label){
return (function (p1__105029_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__105029_SHARP_),meta_label);
});})(vec__105031,_,meta_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.first.call(null,matches);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),(function (db,p__105035){
var vec__105036 = p__105035;
var _ = cljs.core.nth.call(null,vec__105036,(0),null);
var cat_label = cljs.core.nth.call(null,vec__105036,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__105036,_,cat_label){
return (function (p1__105034_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(p1__105034_SHARP_),cat_label);
});})(vec__105036,_,cat_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.map.call(null,((function (matches,vec__105036,_,cat_label){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(matches,vec__105036,_,cat_label))
,cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),matches))),cljs.core.range.call(null,cljs.core.count.call(null,matches)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),(function (db,p__105040){
var vec__105041 = p__105040;
var _ = cljs.core.nth.call(null,vec__105041,(0),null);
var cat_label = cljs.core.nth.call(null,vec__105041,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__105041,_,cat_label){
return (function (p1__105039_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(p1__105039_SHARP_),cat_label);
});})(vec__105041,_,cat_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),matches)))){
return cljs.core.map.call(null,((function (matches,vec__105041,_,cat_label){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(matches,vec__105041,_,cat_label))
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-b","selected-cat-b",-1359388313),(function (db,p__105045){
var vec__105046 = p__105045;
var _ = cljs.core.nth.call(null,vec__105046,(0),null);
var metas = cljs.core.nth.call(null,vec__105046,(1),null);
var i = cljs.core.nth.call(null,vec__105046,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null));
var m = new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__105046,_,metas,i){
return (function (p1__105044_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__105044_SHARP_));
});})(metam,m,vec__105046,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-file-cat-b","selected-file-cat-b",1378222179),(function (db,p__105050){
var vec__105051 = p__105050;
var _ = cljs.core.nth.call(null,vec__105051,(0),null);
var metas = cljs.core.nth.call(null,vec__105051,(1),null);
var i = cljs.core.nth.call(null,vec__105051,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594)], null));
var m = new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i)));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__105051,_,metas,i){
return (function (p1__105049_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__105049_SHARP_));
});})(metam,m,vec__105051,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-c","selected-cat-c",-2068898831),(function (db,p__105055){
var vec__105056 = p__105055;
var _ = cljs.core.nth.call(null,vec__105056,(0),null);
var metas = cljs.core.nth.call(null,vec__105056,(1),null);
var i = cljs.core.nth.call(null,vec__105056,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null));
var m = new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__105056,_,metas,i){
return (function (p1__105054_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__105054_SHARP_));
});})(metam,m,vec__105056,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-file-cat-c","selected-file-cat-c",-621949955),(function (db,p__105060){
var vec__105061 = p__105060;
var _ = cljs.core.nth.call(null,vec__105061,(0),null);
var metas = cljs.core.nth.call(null,vec__105061,(1),null);
var i = cljs.core.nth.call(null,vec__105061,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594)], null));
var m = new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i)));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__105061,_,metas,i){
return (function (p1__105059_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__105059_SHARP_));
});})(metam,m,vec__105061,_,metas,i))
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),(function (db,p__105065){
var vec__105066 = p__105065;
var _ = cljs.core.nth.call(null,vec__105066,(0),null);
var meta = cljs.core.nth.call(null,vec__105066,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__105066,_,meta){
return (function (p1__105064_SHARP_){
return metamaker_desktop.subs.match_meta.call(null,meta,p1__105064_SHARP_);
});})(vec__105066,_,meta))
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
metamaker_desktop.subs.make_query = (function metamaker_desktop$subs$make_query(dsets,columns){
return [cljs.core.str("PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n"),cljs.core.str("PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>\n"),cljs.core.str("PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\n"),cljs.core.str("PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n"),cljs.core.str("PREFIX seas: <https://w3id.org/seas#>\n"),cljs.core.str("PREFIX dm4t: <http://www.cs.bath.ac.uk/dm4t#>\n"),cljs.core.str("PREFIX dcterms: <http://purl.org/dc/terms/>\n"),cljs.core.str("PREFIX : <http://www.cs.bath.ac.uk/dm4t#>\n"),cljs.core.str("SELECT *\n"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__47063__auto__ = (function metamaker_desktop$subs$make_query_$_iter__105077(s__105078){
return (new cljs.core.LazySeq(null,(function (){
var s__105078__$1 = s__105078;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__105078__$1);
if(temp__4657__auto__){
var s__105078__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__105078__$2)){
var c__47061__auto__ = cljs.core.chunk_first.call(null,s__105078__$2);
var size__47062__auto__ = cljs.core.count.call(null,c__47061__auto__);
var b__105080 = cljs.core.chunk_buffer.call(null,size__47062__auto__);
if((function (){var i__105079 = (0);
while(true){
if((i__105079 < size__47062__auto__)){
var d = cljs.core._nth.call(null,c__47061__auto__,i__105079);
cljs.core.chunk_append.call(null,b__105080,[cljs.core.str("FROM <http://localhost:3030/ds/data/"),cljs.core.str(d),cljs.core.str(">\n")].join(''));

var G__105085 = (i__105079 + (1));
i__105079 = G__105085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105080),metamaker_desktop$subs$make_query_$_iter__105077.call(null,cljs.core.chunk_rest.call(null,s__105078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105080),null);
}
} else {
var d = cljs.core.first.call(null,s__105078__$2);
return cljs.core.cons.call(null,[cljs.core.str("FROM <http://localhost:3030/ds/data/"),cljs.core.str(d),cljs.core.str(">\n")].join(''),metamaker_desktop$subs$make_query_$_iter__105077.call(null,cljs.core.rest.call(null,s__105078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__47063__auto__.call(null,dsets);
})())),cljs.core.str("WHERE {{"),cljs.core.str("SELECT ?d ?f ?c0\n"),cljs.core.str("WHERE {"),cljs.core.str("?f csv:hasColumn ?t0 .\n"),cljs.core.str("?t0 csv:mapsTo "),cljs.core.str(cljs.core.first.call(null,columns)),cljs.core.str(" .\n"),cljs.core.str("?t0 csv:hasIndex ?c0 .\n"),cljs.core.str("?f rdfs:label ?d .}} "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__47063__auto__ = (function metamaker_desktop$subs$make_query_$_iter__105081(s__105082){
return (new cljs.core.LazySeq(null,(function (){
var s__105082__$1 = s__105082;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__105082__$1);
if(temp__4657__auto__){
var s__105082__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__105082__$2)){
var c__47061__auto__ = cljs.core.chunk_first.call(null,s__105082__$2);
var size__47062__auto__ = cljs.core.count.call(null,c__47061__auto__);
var b__105084 = cljs.core.chunk_buffer.call(null,size__47062__auto__);
if((function (){var i__105083 = (0);
while(true){
if((i__105083 < size__47062__auto__)){
var i = cljs.core._nth.call(null,c__47061__auto__,i__105083);
cljs.core.chunk_append.call(null,b__105084,[cljs.core.str("UNION {\n"),cljs.core.str("SELECT ?f ?d"),cljs.core.str([cljs.core.str(" ?c"),cljs.core.str(i)].join('')),cljs.core.str(" "),cljs.core.str("WHERE {\n"),cljs.core.str([cljs.core.str("?f csv:hasColumn ?t"),cljs.core.str(i),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:mapsTo "),cljs.core.str(cljs.core.nth.call(null,columns,i)),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:hasIndex ?c"),cljs.core.str(i),cljs.core.str(" .\n")].join('')),cljs.core.str("?f rdfs:label ?d .}}")].join(''));

var G__105086 = (i__105083 + (1));
i__105083 = G__105086;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105084),metamaker_desktop$subs$make_query_$_iter__105081.call(null,cljs.core.chunk_rest.call(null,s__105082__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__105084),null);
}
} else {
var i = cljs.core.first.call(null,s__105082__$2);
return cljs.core.cons.call(null,[cljs.core.str("UNION {\n"),cljs.core.str("SELECT ?f ?d"),cljs.core.str([cljs.core.str(" ?c"),cljs.core.str(i)].join('')),cljs.core.str(" "),cljs.core.str("WHERE {\n"),cljs.core.str([cljs.core.str("?f csv:hasColumn ?t"),cljs.core.str(i),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:mapsTo "),cljs.core.str(cljs.core.nth.call(null,columns,i)),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:hasIndex ?c"),cljs.core.str(i),cljs.core.str(" .\n")].join('')),cljs.core.str("?f rdfs:label ?d .}}")].join(''),metamaker_desktop$subs$make_query_$_iter__105081.call(null,cljs.core.rest.call(null,s__105082__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__47063__auto__.call(null,cljs.core.range.call(null,(1),cljs.core.count.call(null,columns)));
})())),cljs.core.str("}")].join('');
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"sparql","sparql",1388494024),(function (db){
var cat_as = new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db);
var filtered = new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db);
var all_cats = cljs.core.map.call(null,((function (cat_as,cat_bs,filtered){
return (function (p1__105087_SHARP_){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),p1__105087_SHARP_));
});})(cat_as,cat_bs,filtered))
,cat_bs);
return metamaker_desktop.subs.make_query.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db)),all_cats);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cats","selected-cats",-1104866136),(function (db){
return new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-a","selected-cat-a",1579200799),(function (db,p__105088){
var vec__105089 = p__105088;
var _ = cljs.core.nth.call(null,vec__105089,(0),null);
var i = cljs.core.nth.call(null,vec__105089,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-as","cat-as",-764873094),(function (db){
return new cljs.core.Keyword(null,"cat-as","cat-as",-764873094).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"show-locals-modal","show-locals-modal",-1804990107),(function (db){
return new cljs.core.Keyword(null,"show-locals-modal","show-locals-modal",-1804990107).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),(function (db){
return new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"data-urls","data-urls",1907911823),(function (db){
var resp = cljs.core.js__GT_clj.call(null,JSON.parse(cljs.core.get.call(null,new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(db),"out")),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var results = cljs.core.get_in.call(null,resp,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null));
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.set.call(null,cljs.core.map.call(null,((function (resp,results){
return (function (p1__105092_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"url","url",276297046)],[cljs.core.get_in.call(null,p1__105092_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"value","value",305978217)], null)),cljs.core.get_in.call(null,p1__105092_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"value","value",305978217)], null))]);
});})(resp,results))
,results)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),(function (db,p__105093){
var vec__105094 = p__105093;
var _ = cljs.core.nth.call(null,vec__105094,(0),null);
var i = cljs.core.nth.call(null,vec__105094,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172),(function (db){
return new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-qa","selected-cat-qa",813901657),(function (db,p__105097){
var vec__105098 = p__105097;
var _ = cljs.core.nth.call(null,vec__105098,(0),null);
var i = cljs.core.nth.call(null,vec__105098,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-qb","selected-cat-qb",760801536),(function (db,p__105101){
var vec__105102 = p__105101;
var _ = cljs.core.nth.call(null,vec__105102,(0),null);
var i = cljs.core.nth.call(null,vec__105102,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db),i);
}));

//# sourceMappingURL=subs.js.map?rel=1504699484945