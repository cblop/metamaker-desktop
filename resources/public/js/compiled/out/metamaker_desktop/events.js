// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('metamaker_desktop.meta');
goog.require('metamaker_desktop.subs');
goog.require('metamaker_desktop.db');
goog.require('metamaker_desktop.types');
goog.require('metamaker_desktop.parser');
goog.require('re_com.dropdown');
goog.require('re_frame.core');
metamaker_desktop.events.HOST = "http://localhost:7777";
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return metamaker_desktop.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype","ftype",1067426552),(function (db,p__38292){
var vec__38293 = p__38292;
var _ = cljs.core.nth.call(null,vec__38293,(0),null);
var type = cljs.core.nth.call(null,vec__38293,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype","ftype",1067426552),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),(function (db,p__38296){
var vec__38297 = p__38296;
var _ = cljs.core.nth.call(null,vec__38297,(0),null);
var type = cljs.core.nth.call(null,vec__38297,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fname-change","fname-change",-2050391303),(function (db,p__38300){
var vec__38301 = p__38300;
var _ = cljs.core.nth.call(null,vec__38301,(0),null);
var fname = cljs.core.nth.call(null,vec__38301,(1),null);
metamaker_desktop.parser.parse_remote_sample.call(null,fname,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),fname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dname-change","dname-change",-1804709417),(function (db,p__38304){
var vec__38305 = p__38304;
var _ = cljs.core.nth.call(null,vec__38305,(0),null);
var dname = cljs.core.nth.call(null,vec__38305,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725),dname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),(function (db,p__38308){
var vec__38309 = p__38308;
var _ = cljs.core.nth.call(null,vec__38309,(0),null);
var fname = cljs.core.nth.call(null,vec__38309,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
metamaker_desktop.parser.parse_sample.call(null,url,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("http://localhost:3030/ds/"),cljs.core.str(url.name)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"upload-local","upload-local",1454845890),(function (db,p__38312){
var vec__38313 = p__38312;
var _ = cljs.core.nth.call(null,vec__38313,(0),null);
var fname = cljs.core.nth.call(null,vec__38313,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
metamaker_desktop.parser.parse_sample.call(null,url,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("http://localhost:3030/ds/"),cljs.core.str(url.name)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-dataset","add-dataset",-292693162),(function (db,p__38316){
var vec__38317 = p__38316;
var _ = cljs.core.nth.call(null,vec__38317,(0),null);
var dset = cljs.core.nth.call(null,vec__38317,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372),dset);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-sparql","toggle-sparql",1904719484),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-sparql","show-sparql",970456377),cljs.core.not.call(null,new cljs.core.Keyword(null,"show-sparql","show-sparql",970456377).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch","fetch",-1081994244),(function (db,p__38320){
var vec__38321 = p__38320;
var _ = cljs.core.nth.call(null,vec__38321,(0),null);
var fname = cljs.core.nth.call(null,vec__38321,(1),null);
metamaker_desktop.parser.parse_sample.call(null,fname,(10));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-types","set-types",-1195325353),(function (db,p__38324){
var vec__38325 = p__38324;
var _ = cljs.core.nth.call(null,vec__38325,(0),null);
var rows = cljs.core.nth.call(null,vec__38325,(1),null);
var types = cljs.core.map.call(null,metamaker_desktop.types.detect_type,cljs.core.first.call(null,rows));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),types);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-description","update-description",1448758130),(function (db,p__38328){
var vec__38329 = p__38328;
var _ = cljs.core.nth.call(null,vec__38329,(0),null);
var description = cljs.core.nth.call(null,vec__38329,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"description","description",-1428560544),description);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-type","update-type",-137057043),(function (db,p__38333){
var vec__38334 = p__38333;
var _ = cljs.core.nth.call(null,vec__38334,(0),null);
var type = cljs.core.nth.call(null,vec__38334,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var new_type = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tab,vec__38334,_,type){
return (function (p1__38332_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38332_SHARP_),type);
});})(tab,vec__38334,_,type))
,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),cljs.core.assoc.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"row-types","row-types",-301702756).cljs$core$IFn$_invoke$arity$1(db)),tab,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new_type)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-selected-type","set-selected-type",1542768903),(function (db,p__38337){
var vec__38338 = p__38337;
var _ = cljs.core.nth.call(null,vec__38338,(0),null);
var type = cljs.core.nth.call(null,vec__38338,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-type","selected-type",97396872),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),(function (db,p__38341){
var vec__38342 = p__38341;
var _ = cljs.core.nth.call(null,vec__38342,(0),null);
var rows = cljs.core.nth.call(null,vec__38342,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.first.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-meta","add-meta",20238360),(function (db,_){
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.conj.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-file-meta","add-file-meta",320031083),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.conj.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-a","set-cat-a",1941039827),(function (db,p__38345){
var vec__38346 = p__38345;
var _ = cljs.core.nth.call(null,vec__38346,(0),null);
var cat_id = cljs.core.nth.call(null,vec__38346,(1),null);
var row_id = cljs.core.nth.call(null,vec__38346,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-b","set-cat-b",1237813548),(function (db,p__38349){
var vec__38350 = p__38349;
var _ = cljs.core.nth.call(null,vec__38350,(0),null);
var cat_b = cljs.core.nth.call(null,vec__38350,(1),null);
var cat_a = cljs.core.nth.call(null,vec__38350,(2),null);
var row_id = cljs.core.nth.call(null,vec__38350,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),cat_a], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_bs),cat_b));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-c","set-cat-c",1657502319),(function (db,p__38353){
var vec__38354 = p__38353;
var _ = cljs.core.nth.call(null,vec__38354,(0),null);
var cat_c = cljs.core.nth.call(null,vec__38354,(1),null);
var cat_b = cljs.core.nth.call(null,vec__38354,(2),null);
var row_id = cljs.core.nth.call(null,vec__38354,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_cs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),cat_b], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_cs),cat_c));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-a","set-file-cat-a",-1198416506),(function (db,p__38357){
var vec__38358 = p__38357;
var _ = cljs.core.nth.call(null,vec__38358,(0),null);
var cat_id = cljs.core.nth.call(null,vec__38358,(1),null);
var row_id = cljs.core.nth.call(null,vec__38358,(2),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-b","set-file-cat-b",-749138455),(function (db,p__38361){
var vec__38362 = p__38361;
var _ = cljs.core.nth.call(null,vec__38362,(0),null);
var cat_id = cljs.core.nth.call(null,vec__38362,(1),null);
var cat_a = cljs.core.nth.call(null,vec__38362,(2),null);
var row_id = cljs.core.nth.call(null,vec__38362,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-c","set-file-cat-c",814811210),(function (db,p__38365){
var vec__38366 = p__38365;
var _ = cljs.core.nth.call(null,vec__38366,(0),null);
var cat_id = cljs.core.nth.call(null,vec__38366,(1),null);
var cat_b = cljs.core.nth.call(null,vec__38366,(2),null);
var row_id = cljs.core.nth.call(null,vec__38366,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-metadata","set-metadata",1293757705),(function (db,p__38369){
var vec__38370 = p__38369;
var _ = cljs.core.nth.call(null,vec__38370,(0),null);
var meta_id = cljs.core.nth.call(null,vec__38370,(1),null);
var cat = cljs.core.nth.call(null,vec__38370,(2),null);
var row_id = cljs.core.nth.call(null,vec__38370,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-metadata","set-file-metadata",-1632351526),(function (db,p__38373){
var vec__38374 = p__38373;
var _ = cljs.core.nth.call(null,vec__38374,(0),null);
var meta_id = cljs.core.nth.call(null,vec__38374,(1),null);
var cat = cljs.core.nth.call(null,vec__38374,(2),null);
var row_id = cljs.core.nth.call(null,vec__38374,(3),null);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
metamaker_desktop.events.drop_nth = (function metamaker_desktop$events$drop_nth(coll,n){
return cljs.core.map.call(null,(function (p1__38377_SHARP_){
if(cljs.core._EQ_.call(null,false,p1__38377_SHARP_)){
return null;
} else {
return p1__38377_SHARP_;
}
}),cljs.core.keep_indexed.call(null,(function (p1__38378_SHARP_,p2__38379_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__38378_SHARP_,n)){
if((p2__38379_SHARP_ == null)){
return false;
} else {
return p2__38379_SHARP_;
}
} else {
return null;
}
}),coll));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),(function (db,p__38380){
var vec__38381 = p__38380;
var _ = cljs.core.nth.call(null,vec__38381,(0),null);
var row_id = cljs.core.nth.call(null,vec__38381,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-file-row","delete-file-row",-2041013449),(function (db,p__38384){
var vec__38385 = p__38384;
var _ = cljs.core.nth.call(null,vec__38385,(0),null);
var row_id = cljs.core.nth.call(null,vec__38385,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-label","set-label",646867621),(function (db,p__38388){
var vec__38389 = p__38388;
var _ = cljs.core.nth.call(null,vec__38389,(0),null);
var label_data = cljs.core.nth.call(null,vec__38389,(1),null);
var row_id = cljs.core.nth.call(null,vec__38389,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-label","set-file-label",671965795),(function (db,p__38392){
var vec__38393 = p__38392;
var _ = cljs.core.nth.call(null,vec__38393,(0),null);
var label_data = cljs.core.nth.call(null,vec__38393,(1),null);
var row_id = cljs.core.nth.call(null,vec__38393,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-tab","change-tab",-2145197522),(function (db,p__38396){
var vec__38397 = p__38396;
var _ = cljs.core.nth.call(null,vec__38397,(0),null);
var tab = cljs.core.nth.call(null,vec__38397,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),tab);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"srate-change","srate-change",-1919140064),(function (db,p__38400){
var vec__38401 = p__38400;
var _ = cljs.core.nth.call(null,vec__38401,(0),null);
var val = cljs.core.nth.call(null,vec__38401,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),(function (db,p__38404){
var vec__38405 = p__38404;
var _ = cljs.core.nth.call(null,vec__38405,(0),null);
var rows = cljs.core.nth.call(null,vec__38405,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"metas","metas",-187243671),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cljs.core.first.call(null,rows)),cljs.core.PersistentVector.EMPTY)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-chart-data","reset-chart-data",-1279678973),(function (db,p__38408){
var vec__38409 = p__38408;
var _ = cljs.core.nth.call(null,vec__38409,(0),null);
var data = cljs.core.nth.call(null,vec__38409,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.PersistentVector.EMPTY], null)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-chart-data","set-chart-data",-1309213466),(function (db,p__38412){
var vec__38413 = p__38412;
var _ = cljs.core.nth.call(null,vec__38413,(0),null);
var data = cljs.core.nth.call(null,vec__38413,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-chart-data","add-chart-data",1222194486),(function (db,p__38416){
var vec__38417 = p__38416;
var _ = cljs.core.nth.call(null,vec__38417,(0),null);
var data = cljs.core.nth.call(null,vec__38417,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"labels","labels",-626734591)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"datasets","datasets",1896364419),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$2(cljs.core.first.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-rows","set-rows",-1811730869),(function (db,p__38420){
var vec__38421 = p__38420;
var _ = cljs.core.nth.call(null,vec__38421,(0),null);
var rows = cljs.core.nth.call(null,vec__38421,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-types","set-types",-1195325353),cljs.core.rest.call(null,rows)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.rest.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),(function (db,p__38424){
var vec__38425 = p__38424;
var _ = cljs.core.nth.call(null,vec__38425,(0),null);
var response = cljs.core.nth.call(null,vec__38425,(1),null);
cljs.core.println.call(null,response);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__38428){
var vec__38429 = p__38428;
var _ = cljs.core.nth.call(null,vec__38429,(0),null);
var response = cljs.core.nth.call(null,vec__38429,(1),null);
cljs.core.println.call(null,response);

return db;
}));
metamaker_desktop.events.download = (function metamaker_desktop$events$download(fname,text){
var element = document.createElement("a");
element.setAttribute("href",[cljs.core.str("data:text/plain;charset=utf-8,"),cljs.core.str(encodeURIComponent(text))].join(''));

element.setAttribute("download",fname);

element.style.display = "none";

document.body.appendChild(element);

element.click();

return document.body.removeChild(element);
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"download-turtle","download-turtle",-218138836),(function (db,_){
var hmap_38432 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
metamaker_desktop.events.download.call(null,[cljs.core.str(new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str(".ttl")].join(''),metamaker_desktop.meta.make_triples.call(null,hmap_38432));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"download-csv","download-csv",-1487316289),(function (db,p__38433){
var vec__38434 = p__38433;
var _ = cljs.core.nth.call(null,vec__38434,(0),null);
var data = cljs.core.nth.call(null,vec__38434,(1),null);
metamaker_desktop.events.download.call(null,"out.csv",cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",data)));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metadata","create-metadata",-737314720),(function (db,_){
var metas = cljs.core.map.call(null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db));
var hmap = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),db], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
cljs.core.println.call(null,metamaker_desktop.meta.make_triples.call(null,hmap));

ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/add/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gname","gname",1734069265),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap),new cljs.core.Keyword(null,"file","file",-1269645878),metamaker_desktop.meta.make_triples.call(null,hmap)], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (metas,hmap){
return (function (p1__38437_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__38437_SHARP_], null));
});})(metas,hmap))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (metas,hmap){
return (function (p1__38438_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__38438_SHARP_], null));
});})(metas,hmap))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql","update-sparql",-180981025),(function (db,p__38439){
var vec__38440 = p__38439;
var _ = cljs.core.nth.call(null,vec__38440,(0),null);
var query = cljs.core.nth.call(null,vec__38440,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql","sparql",1388494024),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql-b","update-sparql-b",1129568004),(function (db,p__38443){
var vec__38444 = p__38443;
var _ = cljs.core.nth.call(null,vec__38444,(0),null);
var query = cljs.core.nth.call(null,vec__38444,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-dataset","set-dataset",-649615350),(function (db,p__38447){
var vec__38448 = p__38447;
var _ = cljs.core.nth.call(null,vec__38448,(0),null);
var ids = cljs.core.nth.call(null,vec__38448,(1),null);
var i = parseInt(cljs.core.first.call(null,ids));
cljs.core.println.call(null,i);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),i)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-srate","update-srate",-1652749956),(function (db,p__38451){
var vec__38452 = p__38451;
var _ = cljs.core.nth.call(null,vec__38452,(0),null);
var rate = cljs.core.nth.call(null,vec__38452,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),rate);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-triple","add-triple",-625145023),(function (db,_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),cljs.core.conj.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-a","change-cat-a",1674669587),(function (db,p__38455){
var vec__38456 = p__38455;
var _ = cljs.core.nth.call(null,vec__38456,(0),null);
var i = cljs.core.nth.call(null,vec__38456,(1),null);
var new$ = cljs.core.nth.call(null,vec__38456,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),i], null),new$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),i], null),cljs.core.vec.call(null,re_com.dropdown.filter_choices_by_keyword.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),new$))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-b","change-cat-b",2124561258),(function (db,p__38459){
var vec__38460 = p__38459;
var _ = cljs.core.nth.call(null,vec__38460,(0),null);
var i = cljs.core.nth.call(null,vec__38460,(1),null);
var new$ = cljs.core.nth.call(null,vec__38460,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),new$);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-q-row","delete-q-row",-1585082354),(function (db,p__38463){
var vec__38464 = p__38463;
var _ = cljs.core.nth.call(null,vec__38464,(0),null);
var row_id = cljs.core.nth.call(null,vec__38464,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),row_id)));
}));
metamaker_desktop.events.existing_index = (function metamaker_desktop$events$existing_index(col,e){
return cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map_indexed.call(null,(function (i,x){
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(e)))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(x)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(e))))){
return i;
} else {
return null;
}
}),col)));
});
metamaker_desktop.events.merge_bindings = (function metamaker_desktop$events$merge_bindings(bindings){
var bs = bindings;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,bs)){
return acc;
} else {
var match = metamaker_desktop.events.existing_index.call(null,acc,cljs.core.first.call(null,bs));
var p = cljs.core.println.call(null,match);
var G__38467 = cljs.core.rest.call(null,bs);
var G__38468 = (cljs.core.truth_(match)?cljs.core.assoc.call(null,acc,match,cljs.core.merge.call(null,cljs.core.nth.call(null,acc,match),cljs.core.first.call(null,bs))):cljs.core.conj.call(null,acc,cljs.core.first.call(null,bs)));
bs = G__38467;
acc = G__38468;
continue;
}
break;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),(function (db,p__38474){
var vec__38475 = p__38474;
var _ = cljs.core.nth.call(null,vec__38475,(0),null);
var response = cljs.core.nth.call(null,vec__38475,(1),null);
var json = cljs.core.get.call(null,response,"out");
var p = cljs.core.println.call(null,response);
var j = cljs.core.js__GT_clj.call(null,JSON.parse(json),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var results = metamaker_desktop.events.merge_bindings.call(null,cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null)));
var p__$1 = cljs.core.println.call(null,results);
var fs = cljs.core.map.call(null,((function (json,p,j,results,p__$1,vec__38475,_,response){
return (function (p1__38469_SHARP_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(p1__38469_SHARP_));
});})(json,p,j,results,p__$1,vec__38475,_,response))
,results);
var ds = cljs.core.map.call(null,((function (json,p,j,results,p__$1,fs,vec__38475,_,response){
return (function (p1__38470_SHARP_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(p1__38470_SHARP_));
});})(json,p,j,results,p__$1,fs,vec__38475,_,response))
,results);
var cols = cljs.core.map.call(null,((function (json,p,j,results,p__$1,fs,ds,vec__38475,_,response){
return (function (p1__38471_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__38471_SHARP_,new cljs.core.Keyword(null,"f","f",-1597136552)),new cljs.core.Keyword(null,"d","d",1972142424));
});})(json,p,j,results,p__$1,fs,ds,vec__38475,_,response))
,results);
var col_map = cljs.core.map.call(null,((function (json,p,j,results,p__$1,fs,ds,cols,vec__38475,_,response){
return (function (xs){
return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__25876__auto__ = ((function (json,p,j,results,p__$1,fs,ds,cols,vec__38475,_,response){
return (function metamaker_desktop$events$iter__38478(s__38479){
return (new cljs.core.LazySeq(null,((function (json,p,j,results,p__$1,fs,ds,cols,vec__38475,_,response){
return (function (){
var s__38479__$1 = s__38479;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38479__$1);
if(temp__4657__auto__){
var s__38479__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38479__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38479__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38481 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38480 = (0);
while(true){
if((i__38480 < size__25875__auto__)){
var y = cljs.core._nth.call(null,c__25874__auto__,i__38480);
cljs.core.chunk_append.call(null,b__38481,cljs.core.PersistentHashMap.fromArrays([y],[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,xs,y))]));

var G__38490 = (i__38480 + (1));
i__38480 = G__38490;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38481),metamaker_desktop$events$iter__38478.call(null,cljs.core.chunk_rest.call(null,s__38479__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38481),null);
}
} else {
var y = cljs.core.first.call(null,s__38479__$2);
return cljs.core.cons.call(null,cljs.core.PersistentHashMap.fromArrays([y],[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,xs,y))]),metamaker_desktop$events$iter__38478.call(null,cljs.core.rest.call(null,s__38479__$2)));
}
} else {
return null;
}
break;
}
});})(json,p,j,results,p__$1,fs,ds,cols,vec__38475,_,response))
,null,null));
});})(json,p,j,results,p__$1,fs,ds,cols,vec__38475,_,response))
;
return iter__25876__auto__.call(null,cljs.core.keys.call(null,xs));
})());
});})(json,p,j,results,p__$1,fs,ds,cols,vec__38475,_,response))
,cols);
var all_cats = new cljs.core.Keyword(null,"all-cats","all-cats",627450712).cljs$core$IFn$_invoke$arity$1(db);
var lcats = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map_indexed.call(null,((function (json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,vec__38475,_,response){
return (function (p1__38472_SHARP_,p2__38473_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.call(null,[cljs.core.str("c"),cljs.core.str(p1__38472_SHARP_)].join(''))],[p2__38473_SHARP_]);
});})(json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,vec__38475,_,response))
,all_cats));
var locals = ((cljs.core.seq.call(null,ds))?(function (){var iter__25876__auto__ = ((function (json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__38475,_,response){
return (function metamaker_desktop$events$iter__38482(s__38483){
return (new cljs.core.LazySeq(null,((function (json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__38475,_,response){
return (function (){
var s__38483__$1 = s__38483;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38483__$1);
if(temp__4657__auto__){
var s__38483__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38483__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38483__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38485 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38484 = (0);
while(true){
if((i__38484 < size__25875__auto__)){
var d = cljs.core._nth.call(null,c__25874__auto__,i__38484);
cljs.core.chunk_append.call(null,b__38485,cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById(d).files)));

var G__38491 = (i__38484 + (1));
i__38484 = G__38491;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38485),metamaker_desktop$events$iter__38482.call(null,cljs.core.chunk_rest.call(null,s__38483__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38485),null);
}
} else {
var d = cljs.core.first.call(null,s__38483__$2);
return cljs.core.cons.call(null,cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById(d).files)),metamaker_desktop$events$iter__38482.call(null,cljs.core.rest.call(null,s__38483__$2)));
}
} else {
return null;
}
break;
}
});})(json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__38475,_,response))
,null,null));
});})(json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__38475,_,response))
;
return iter__25876__auto__.call(null,ds);
})():null);
var ldata = cljs.core.map.call(null,cljs.core.vector,locals,fs,ds,col_map,cljs.core.repeat.call(null,lcats));
cljs.core.println.call(null,lcats);

cljs.core.println.call(null,locals);

var seq__38486_38492 = cljs.core.seq.call(null,ldata);
var chunk__38487_38493 = null;
var count__38488_38494 = (0);
var i__38489_38495 = (0);
while(true){
if((i__38489_38495 < count__38488_38494)){
var l_38496 = cljs.core._nth.call(null,chunk__38487_38493,i__38489_38495);
cljs.core.apply.call(null,metamaker_desktop.parser.parse_local,l_38496);

var G__38497 = seq__38486_38492;
var G__38498 = chunk__38487_38493;
var G__38499 = count__38488_38494;
var G__38500 = (i__38489_38495 + (1));
seq__38486_38492 = G__38497;
chunk__38487_38493 = G__38498;
count__38488_38494 = G__38499;
i__38489_38495 = G__38500;
continue;
} else {
var temp__4657__auto___38501 = cljs.core.seq.call(null,seq__38486_38492);
if(temp__4657__auto___38501){
var seq__38486_38502__$1 = temp__4657__auto___38501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38486_38502__$1)){
var c__25907__auto___38503 = cljs.core.chunk_first.call(null,seq__38486_38502__$1);
var G__38504 = cljs.core.chunk_rest.call(null,seq__38486_38502__$1);
var G__38505 = c__25907__auto___38503;
var G__38506 = cljs.core.count.call(null,c__25907__auto___38503);
var G__38507 = (0);
seq__38486_38492 = G__38504;
chunk__38487_38493 = G__38505;
count__38488_38494 = G__38506;
i__38489_38495 = G__38507;
continue;
} else {
var l_38508 = cljs.core.first.call(null,seq__38486_38502__$1);
cljs.core.apply.call(null,metamaker_desktop.parser.parse_local,l_38508);

var G__38509 = cljs.core.next.call(null,seq__38486_38502__$1);
var G__38510 = null;
var G__38511 = (0);
var G__38512 = (0);
seq__38486_38492 = G__38509;
chunk__38487_38493 = G__38510;
count__38488_38494 = G__38511;
i__38489_38495 = G__38512;
continue;
}
} else {
}
}
break;
}

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),(function (db,p__38513){
var vec__38514 = p__38513;
var _ = cljs.core.nth.call(null,vec__38514,(0),null);
var response = cljs.core.nth.call(null,vec__38514,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"response","response",-1068424192),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (db,p__38517){
var vec__38518 = p__38517;
var _ = cljs.core.nth.call(null,vec__38518,(0),null);
var response = cljs.core.nth.call(null,vec__38518,(1),null);
cljs.core.println.call(null,[cljs.core.str("SERVER ERROR: "),cljs.core.str(response)].join(''));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql","send-sparql",875376133),(function (db,_){
var cat_as = new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db);
var filtered = new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db);
var all_cats = cljs.core.map.call(null,((function (cat_as,cat_bs,filtered){
return (function (p1__38521_SHARP_){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),p1__38521_SHARP_));
});})(cat_as,cat_bs,filtered))
,cat_bs);
var query = metamaker_desktop.subs.make_query.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db)),all_cats);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),query], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (cat_as,cat_bs,filtered,all_cats,query){
return (function (p1__38522_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),p1__38522_SHARP_], null));
});})(cat_as,cat_bs,filtered,all_cats,query))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (cat_as,cat_bs,filtered,all_cats,query){
return (function (p1__38523_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__38523_SHARP_], null));
});})(cat_as,cat_bs,filtered,all_cats,query))
], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"all-cats","all-cats",627450712),all_cats);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql-b","send-sparql-b",-430155904),(function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__38524_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),p1__38524_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__38525_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__38525_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql-update","send-sparql-update",698036425),(function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/update/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__38526_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),p1__38526_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__38527_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__38527_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"error-modal","error-modal",214887023),(function (db,p__38528){
var vec__38529 = p__38528;
var _ = cljs.core.nth.call(null,vec__38529,(0),null);
var message = cljs.core.nth.call(null,vec__38529,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),message);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dismiss-error","dismiss-error",178830759),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"error-msg","error-msg",-1409360623),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-locals-modal","toggle-locals-modal",-377311697),(function (db,_){
var visible_QMARK_ = new cljs.core.Keyword(null,"show-locals-modal","show-locals-modal",-1804990107).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-locals-modal","show-locals-modal",-1804990107),(cljs.core.truth_(visible_QMARK_)?false:true));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-datasets","delete-datasets",1377868985),(function (db,_){
var selected = new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372).cljs$core$IFn$_invoke$arity$1(db);
var dsets = cljs.core.map.call(null,((function (selected){
return (function (p1__38532_SHARP_){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),parseInt(p1__38532_SHARP_));
});})(selected))
,selected);
var labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),dsets);
cljs.core.println.call(null,labels);

var seq__38535_38539 = cljs.core.seq.call(null,labels);
var chunk__38536_38540 = null;
var count__38537_38541 = (0);
var i__38538_38542 = (0);
while(true){
if((i__38538_38542 < count__38537_38541)){
var l_38543 = cljs.core._nth.call(null,chunk__38536_38540,i__38538_38542);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/delete/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gname","gname",1734069265),l_38543], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38543,selected,dsets,labels){
return (function (p1__38533_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__38533_SHARP_], null));
});})(seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38543,selected,dsets,labels))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38543,selected,dsets,labels){
return (function (p1__38534_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__38534_SHARP_], null));
});})(seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38543,selected,dsets,labels))
], null));

var G__38544 = seq__38535_38539;
var G__38545 = chunk__38536_38540;
var G__38546 = count__38537_38541;
var G__38547 = (i__38538_38542 + (1));
seq__38535_38539 = G__38544;
chunk__38536_38540 = G__38545;
count__38537_38541 = G__38546;
i__38538_38542 = G__38547;
continue;
} else {
var temp__4657__auto___38548 = cljs.core.seq.call(null,seq__38535_38539);
if(temp__4657__auto___38548){
var seq__38535_38549__$1 = temp__4657__auto___38548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38535_38549__$1)){
var c__25907__auto___38550 = cljs.core.chunk_first.call(null,seq__38535_38549__$1);
var G__38551 = cljs.core.chunk_rest.call(null,seq__38535_38549__$1);
var G__38552 = c__25907__auto___38550;
var G__38553 = cljs.core.count.call(null,c__25907__auto___38550);
var G__38554 = (0);
seq__38535_38539 = G__38551;
chunk__38536_38540 = G__38552;
count__38537_38541 = G__38553;
i__38538_38542 = G__38554;
continue;
} else {
var l_38555 = cljs.core.first.call(null,seq__38535_38549__$1);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/delete/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gname","gname",1734069265),l_38555], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38555,seq__38535_38549__$1,temp__4657__auto___38548,selected,dsets,labels){
return (function (p1__38533_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__38533_SHARP_], null));
});})(seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38555,seq__38535_38549__$1,temp__4657__auto___38548,selected,dsets,labels))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38555,seq__38535_38549__$1,temp__4657__auto___38548,selected,dsets,labels){
return (function (p1__38534_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__38534_SHARP_], null));
});})(seq__38535_38539,chunk__38536_38540,count__38537_38541,i__38538_38542,l_38555,seq__38535_38549__$1,temp__4657__auto___38548,selected,dsets,labels))
], null));

var G__38556 = cljs.core.next.call(null,seq__38535_38549__$1);
var G__38557 = null;
var G__38558 = (0);
var G__38559 = (0);
seq__38535_38539 = G__38556;
chunk__38536_38540 = G__38557;
count__38537_38541 = G__38558;
i__38538_38542 = G__38559;
continue;
}
} else {
}
}
break;
}

setTimeout(((function (selected,dsets,labels){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740)], null));
});})(selected,dsets,labels))
,(2000));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372),cljs.core.PersistentHashSet.EMPTY);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metadata","create-metadata",-737314720),(function (db,_){
var metas = cljs.core.map.call(null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db));
var hmap = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
cljs.core.println.call(null,metamaker_desktop.meta.make_triples.call(null,hmap));

ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/add/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gname","gname",1734069265),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap),new cljs.core.Keyword(null,"file","file",-1269645878),metamaker_desktop.meta.make_triples.call(null,hmap)], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (metas,hmap){
return (function (p1__38560_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__38560_SHARP_], null));
});})(metas,hmap))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (metas,hmap){
return (function (p1__38561_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__38561_SHARP_], null));
});})(metas,hmap))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740),(function (db,_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-sparql-b","update-sparql-b",1129568004),[cljs.core.str("PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n"),cljs.core.str("PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"),cljs.core.str("PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n"),cljs.core.str("SELECT ?label ?url WHERE { GRAPH ?g {?url rdf:type csv:CsvDocument .\n"),cljs.core.str("                          ?url rdfs:label ?label}}")].join('')], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-sparql-b","send-sparql-b",-430155904)], null));

var urls = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-urls","data-urls",1907911823)], null));
if(cljs.core.not.call(null,cljs.core.seq.call(null,cljs.core.deref.call(null,urls)))){
setTimeout(((function (urls){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740)], null));
});})(urls))
,(2000));

return db;
} else {
setTimeout(((function (urls){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740)], null));
});})(urls))
,(6000));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.map_indexed.call(null,((function (urls){
return (function (p1__38562_SHARP_,p2__38563_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"url","url",276297046)],[[cljs.core.str(p1__38562_SHARP_)].join(''),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p2__38563_SHARP_),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p2__38563_SHARP_)]);
});})(urls))
,cljs.core.deref.call(null,urls)));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tab-changed","tab-changed",-2075573081),(function (db,p__38564){
var vec__38565 = p__38564;
var _ = cljs.core.nth.call(null,vec__38565,(0),null);
var tab_id = cljs.core.nth.call(null,vec__38565,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),tab_id);
}));

//# sourceMappingURL=events.js.map?rel=1504702197606