// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"graphs","graphs",-1584479112),(function (db){
return cljs.core.map.call(null,(function (p1__11700_SHARP_){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),p1__11700_SHARP_));
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
return (function (p1__11701_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__11701_SHARP_),type);
});})(type))
,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db)));
if(cljs.core.truth_(match)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(match);
} else {
return null;
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),(function (db,p__11703){
var vec__11704 = p__11703;
var _ = cljs.core.nth.call(null,vec__11704,(0),null);
var id = cljs.core.nth.call(null,vec__11704,(1),null);
var cats = cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db))));
var catmap = cljs.core.map.call(null,((function (cats,vec__11704,_,id){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(cats,vec__11704,_,id))
,cats,cljs.core.range.call(null,cljs.core.count.call(null,cats)));
var label_for_id = ((function (cats,catmap,vec__11704,_,id){
return (function (id__$1){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (cats,catmap,vec__11704,_,id){
return (function (p1__11702_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11702_SHARP_),id__$1);
});})(cats,catmap,vec__11704,_,id))
,catmap)));
});})(cats,catmap,vec__11704,_,id))
;
return label_for_id.call(null,id);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),(function (db,p__11708){
var vec__11709 = p__11708;
var _ = cljs.core.nth.call(null,vec__11709,(0),null);
var meta_label = cljs.core.nth.call(null,vec__11709,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__11709,_,meta_label){
return (function (p1__11707_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__11707_SHARP_),meta_label);
});})(vec__11709,_,meta_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.first.call(null,matches);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),(function (db,p__11713){
var vec__11714 = p__11713;
var _ = cljs.core.nth.call(null,vec__11714,(0),null);
var cat_label = cljs.core.nth.call(null,vec__11714,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__11714,_,cat_label){
return (function (p1__11712_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637).cljs$core$IFn$_invoke$arity$1(p1__11712_SHARP_),cat_label);
});})(vec__11714,_,cat_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
return cljs.core.map.call(null,((function (matches,vec__11714,_,cat_label){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(matches,vec__11714,_,cat_label))
,cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),matches))),cljs.core.range.call(null,cljs.core.count.call(null,matches)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),(function (db,p__11718){
var vec__11719 = p__11718;
var _ = cljs.core.nth.call(null,vec__11719,(0),null);
var cat_label = cljs.core.nth.call(null,vec__11719,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__11719,_,cat_label){
return (function (p1__11717_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(p1__11717_SHARP_),cat_label);
});})(vec__11719,_,cat_label))
,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(db));
if(cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),matches)))){
return cljs.core.map.call(null,((function (matches,vec__11719,_,cat_label){
return (function (x,i){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[i,x]);
});})(matches,vec__11719,_,cat_label))
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-b","selected-cat-b",-1359388313),(function (db,p__11723){
var vec__11724 = p__11723;
var _ = cljs.core.nth.call(null,vec__11724,(0),null);
var metas = cljs.core.nth.call(null,vec__11724,(1),null);
var i = cljs.core.nth.call(null,vec__11724,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null));
var m = new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__11724,_,metas,i){
return (function (p1__11722_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__11722_SHARP_));
});})(metam,m,vec__11724,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-file-cat-b","selected-file-cat-b",1378222179),(function (db,p__11728){
var vec__11729 = p__11728;
var _ = cljs.core.nth.call(null,vec__11729,(0),null);
var metas = cljs.core.nth.call(null,vec__11729,(1),null);
var i = cljs.core.nth.call(null,vec__11729,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594)], null));
var m = new cljs.core.Keyword(null,"cat-b","cat-b",205205348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i)));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__11729,_,metas,i){
return (function (p1__11727_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__11727_SHARP_));
});})(metam,m,vec__11729,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-c","selected-cat-c",-2068898831),(function (db,p__11733){
var vec__11734 = p__11733;
var _ = cljs.core.nth.call(null,vec__11734,(0),null);
var metas = cljs.core.nth.call(null,vec__11734,(1),null);
var i = cljs.core.nth.call(null,vec__11734,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null));
var m = new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__11734,_,metas,i){
return (function (p1__11732_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__11732_SHARP_));
});})(metam,m,vec__11734,_,metas,i))
,metas)));
return match;
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-file-cat-c","selected-file-cat-c",-621949955),(function (db,p__11738){
var vec__11739 = p__11738;
var _ = cljs.core.nth.call(null,vec__11739,(0),null);
var metas = cljs.core.nth.call(null,vec__11739,(1),null);
var i = cljs.core.nth.call(null,vec__11739,(2),null);
var metam = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-file-meta","get-file-meta",-302811594)], null));
var m = new cljs.core.Keyword(null,"cat-c","cat-c",240975795).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metam),i)));
var match = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (metam,m,vec__11739,_,metas,i){
return (function (p1__11737_SHARP_){
return cljs.core._EQ_.call(null,m,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p1__11737_SHARP_));
});})(metam,m,vec__11739,_,metas,i))
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
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),(function (db,p__11743){
var vec__11744 = p__11743;
var _ = cljs.core.nth.call(null,vec__11744,(0),null);
var meta = cljs.core.nth.call(null,vec__11744,(1),null);
var matches = cljs.core.filter.call(null,((function (vec__11744,_,meta){
return (function (p1__11742_SHARP_){
return metamaker_desktop.subs.match_meta.call(null,meta,p1__11742_SHARP_);
});})(vec__11744,_,meta))
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
return [cljs.core.str("PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n"),cljs.core.str("PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>\n"),cljs.core.str("PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\n"),cljs.core.str("PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>\n"),cljs.core.str("PREFIX seas: <https://w3id.org/seas#>\n"),cljs.core.str("PREFIX dm4t: <http://www.cs.bath.ac.uk/dm4t#>\n"),cljs.core.str("PREFIX dcterms: <http://purl.org/dc/terms/>\n"),cljs.core.str("PREFIX : <http://www.cs.bath.ac.uk/dm4t#>\n"),cljs.core.str("SELECT *\n"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = (function metamaker_desktop$subs$make_query_$_iter__11755(s__11756){
return (new cljs.core.LazySeq(null,(function (){
var s__11756__$1 = s__11756;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11756__$1);
if(temp__4657__auto__){
var s__11756__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11756__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11756__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11758 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11757 = (0);
while(true){
if((i__11757 < size__7196__auto__)){
var d = cljs.core._nth.call(null,c__7195__auto__,i__11757);
cljs.core.chunk_append.call(null,b__11758,[cljs.core.str("FROM <http://localhost:3030/ds/data/"),cljs.core.str(d),cljs.core.str(">\n")].join(''));

var G__11763 = (i__11757 + (1));
i__11757 = G__11763;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11758),metamaker_desktop$subs$make_query_$_iter__11755.call(null,cljs.core.chunk_rest.call(null,s__11756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11758),null);
}
} else {
var d = cljs.core.first.call(null,s__11756__$2);
return cljs.core.cons.call(null,[cljs.core.str("FROM <http://localhost:3030/ds/data/"),cljs.core.str(d),cljs.core.str(">\n")].join(''),metamaker_desktop$subs$make_query_$_iter__11755.call(null,cljs.core.rest.call(null,s__11756__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7197__auto__.call(null,dsets);
})())),cljs.core.str("WHERE {{"),cljs.core.str("SELECT ?d ?f ?c0\n"),cljs.core.str("WHERE {"),cljs.core.str("?f csv:hasColumn ?t0 .\n"),cljs.core.str("?t0 csv:mapsTo "),cljs.core.str(cljs.core.first.call(null,columns)),cljs.core.str(" .\n"),cljs.core.str("?t0 csv:hasIndex ?c0 .\n"),cljs.core.str("?f rdfs:label ?d .}} "),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = (function metamaker_desktop$subs$make_query_$_iter__11759(s__11760){
return (new cljs.core.LazySeq(null,(function (){
var s__11760__$1 = s__11760;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11760__$1);
if(temp__4657__auto__){
var s__11760__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11760__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11760__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11762 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11761 = (0);
while(true){
if((i__11761 < size__7196__auto__)){
var i = cljs.core._nth.call(null,c__7195__auto__,i__11761);
cljs.core.chunk_append.call(null,b__11762,[cljs.core.str("UNION {\n"),cljs.core.str("SELECT ?f ?d"),cljs.core.str([cljs.core.str(" ?c"),cljs.core.str(i)].join('')),cljs.core.str(" "),cljs.core.str("WHERE {\n"),cljs.core.str([cljs.core.str("?f csv:hasColumn ?t"),cljs.core.str(i),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:mapsTo "),cljs.core.str(cljs.core.nth.call(null,columns,i)),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:hasIndex ?c"),cljs.core.str(i),cljs.core.str(" .\n")].join('')),cljs.core.str("?f rdfs:label ?d .}}")].join(''));

var G__11764 = (i__11761 + (1));
i__11761 = G__11764;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11762),metamaker_desktop$subs$make_query_$_iter__11759.call(null,cljs.core.chunk_rest.call(null,s__11760__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11762),null);
}
} else {
var i = cljs.core.first.call(null,s__11760__$2);
return cljs.core.cons.call(null,[cljs.core.str("UNION {\n"),cljs.core.str("SELECT ?f ?d"),cljs.core.str([cljs.core.str(" ?c"),cljs.core.str(i)].join('')),cljs.core.str(" "),cljs.core.str("WHERE {\n"),cljs.core.str([cljs.core.str("?f csv:hasColumn ?t"),cljs.core.str(i),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:mapsTo "),cljs.core.str(cljs.core.nth.call(null,columns,i)),cljs.core.str(" .\n"),cljs.core.str("?t"),cljs.core.str(i),cljs.core.str(" csv:hasIndex ?c"),cljs.core.str(i),cljs.core.str(" .\n")].join('')),cljs.core.str("?f rdfs:label ?d .}}")].join(''),metamaker_desktop$subs$make_query_$_iter__11759.call(null,cljs.core.rest.call(null,s__11760__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7197__auto__.call(null,cljs.core.range.call(null,(1),cljs.core.count.call(null,columns)));
})())),cljs.core.str("}")].join('');
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"sparql","sparql",1388494024),(function (db){
var cat_as = new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db);
var filtered = new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db);
var all_cats = cljs.core.map.call(null,((function (cat_as,cat_bs,filtered){
return (function (p1__11765_SHARP_){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),p1__11765_SHARP_));
});})(cat_as,cat_bs,filtered))
,cat_bs);
return metamaker_desktop.subs.make_query.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db)),all_cats);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cats","selected-cats",-1104866136),(function (db){
return new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-a","selected-cat-a",1579200799),(function (db,p__11766){
var vec__11767 = p__11766;
var _ = cljs.core.nth.call(null,vec__11767,(0),null);
var i = cljs.core.nth.call(null,vec__11767,(1),null);
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
return (function (p1__11770_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"url","url",276297046)],[cljs.core.get_in.call(null,p1__11770_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"value","value",305978217)], null)),cljs.core.get_in.call(null,p1__11770_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"value","value",305978217)], null))]);
});})(resp,results))
,results)));
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),(function (db,p__11771){
var vec__11772 = p__11771;
var _ = cljs.core.nth.call(null,vec__11772,(0),null);
var i = cljs.core.nth.call(null,vec__11772,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172),(function (db){
return new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-qa","selected-cat-qa",813901657),(function (db,p__11775){
var vec__11776 = p__11775;
var _ = cljs.core.nth.call(null,vec__11776,(0),null);
var i = cljs.core.nth.call(null,vec__11776,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"selected-cat-qb","selected-cat-qb",760801536),(function (db,p__11779){
var vec__11780 = p__11779;
var _ = cljs.core.nth.call(null,vec__11780,(0),null);
var i = cljs.core.nth.call(null,vec__11780,(1),null);
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db),i);
}));

//# sourceMappingURL=subs.js.map?rel=1505229171425