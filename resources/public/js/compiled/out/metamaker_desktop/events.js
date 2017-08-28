// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('metamaker_desktop.meta');
goog.require('metamaker_desktop.db');
goog.require('metamaker_desktop.types');
goog.require('metamaker_desktop.parser');
goog.require('re_com.dropdown');
goog.require('re_frame.core');
metamaker_desktop.events.HOST = "http://localhost:7777";
metamaker_desktop.events.query_template = "PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n  PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>\n\n  SELECT ?f ?i \n  WHERE {?f csv:hasColumn ?c .\n                ?c csv:mapsTo ssn:hasValue .\n                ?c csv:hasIndex ?i .}";
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return metamaker_desktop.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype","ftype",1067426552),(function (db,p__36683){
var vec__36684 = p__36683;
var _ = cljs.core.nth.call(null,vec__36684,(0),null);
var type = cljs.core.nth.call(null,vec__36684,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype","ftype",1067426552),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),(function (db,p__36687){
var vec__36688 = p__36687;
var _ = cljs.core.nth.call(null,vec__36688,(0),null);
var type = cljs.core.nth.call(null,vec__36688,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fname-change","fname-change",-2050391303),(function (db,p__36691){
var vec__36692 = p__36691;
var _ = cljs.core.nth.call(null,vec__36692,(0),null);
var fname = cljs.core.nth.call(null,vec__36692,(1),null);
metamaker_desktop.parser.parse_remote_sample.call(null,fname,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),fname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dname-change","dname-change",-1804709417),(function (db,p__36695){
var vec__36696 = p__36695;
var _ = cljs.core.nth.call(null,vec__36696,(0),null);
var dname = cljs.core.nth.call(null,vec__36696,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725),dname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),(function (db,p__36699){
var vec__36700 = p__36699;
var _ = cljs.core.nth.call(null,vec__36700,(0),null);
var fname = cljs.core.nth.call(null,vec__36700,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
metamaker_desktop.parser.parse_sample.call(null,url,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("http://localhost:3030/ds/"),cljs.core.str(url.name)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"stream-local","stream-local",784320646),(function (db,p__36703){
var vec__36704 = p__36703;
var _ = cljs.core.nth.call(null,vec__36704,(0),null);
var fname = cljs.core.nth.call(null,vec__36704,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
return metamaker_desktop.parser.parse_local.call(null,url);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-dataset","add-dataset",-292693162),(function (db,p__36707){
var vec__36708 = p__36707;
var _ = cljs.core.nth.call(null,vec__36708,(0),null);
var dset = cljs.core.nth.call(null,vec__36708,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372),dset);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch","fetch",-1081994244),(function (db,p__36711){
var vec__36712 = p__36711;
var _ = cljs.core.nth.call(null,vec__36712,(0),null);
var fname = cljs.core.nth.call(null,vec__36712,(1),null);
metamaker_desktop.parser.parse_sample.call(null,fname,(10));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-types","set-types",-1195325353),(function (db,p__36715){
var vec__36716 = p__36715;
var _ = cljs.core.nth.call(null,vec__36716,(0),null);
var rows = cljs.core.nth.call(null,vec__36716,(1),null);
var types = cljs.core.map.call(null,metamaker_desktop.types.detect_type,cljs.core.first.call(null,rows));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),types);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-description","update-description",1448758130),(function (db,p__36719){
var vec__36720 = p__36719;
var _ = cljs.core.nth.call(null,vec__36720,(0),null);
var description = cljs.core.nth.call(null,vec__36720,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"description","description",-1428560544),description);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-type","update-type",-137057043),(function (db,p__36724){
var vec__36725 = p__36724;
var _ = cljs.core.nth.call(null,vec__36725,(0),null);
var type = cljs.core.nth.call(null,vec__36725,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var new_type = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tab,vec__36725,_,type){
return (function (p1__36723_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36723_SHARP_),type);
});})(tab,vec__36725,_,type))
,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),cljs.core.assoc.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"row-types","row-types",-301702756).cljs$core$IFn$_invoke$arity$1(db)),tab,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new_type)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-selected-type","set-selected-type",1542768903),(function (db,p__36728){
var vec__36729 = p__36728;
var _ = cljs.core.nth.call(null,vec__36729,(0),null);
var type = cljs.core.nth.call(null,vec__36729,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-type","selected-type",97396872),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),(function (db,p__36732){
var vec__36733 = p__36732;
var _ = cljs.core.nth.call(null,vec__36733,(0),null);
var rows = cljs.core.nth.call(null,vec__36733,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.first.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-meta","add-meta",20238360),(function (db,_){
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.conj.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-file-meta","add-file-meta",320031083),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.conj.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-a","set-cat-a",1941039827),(function (db,p__36736){
var vec__36737 = p__36736;
var _ = cljs.core.nth.call(null,vec__36737,(0),null);
var cat_id = cljs.core.nth.call(null,vec__36737,(1),null);
var row_id = cljs.core.nth.call(null,vec__36737,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-b","set-cat-b",1237813548),(function (db,p__36740){
var vec__36741 = p__36740;
var _ = cljs.core.nth.call(null,vec__36741,(0),null);
var cat_b = cljs.core.nth.call(null,vec__36741,(1),null);
var cat_a = cljs.core.nth.call(null,vec__36741,(2),null);
var row_id = cljs.core.nth.call(null,vec__36741,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),cat_a], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_bs),cat_b));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-c","set-cat-c",1657502319),(function (db,p__36744){
var vec__36745 = p__36744;
var _ = cljs.core.nth.call(null,vec__36745,(0),null);
var cat_c = cljs.core.nth.call(null,vec__36745,(1),null);
var cat_b = cljs.core.nth.call(null,vec__36745,(2),null);
var row_id = cljs.core.nth.call(null,vec__36745,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_cs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),cat_b], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_cs),cat_c));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-a","set-file-cat-a",-1198416506),(function (db,p__36748){
var vec__36749 = p__36748;
var _ = cljs.core.nth.call(null,vec__36749,(0),null);
var cat_id = cljs.core.nth.call(null,vec__36749,(1),null);
var row_id = cljs.core.nth.call(null,vec__36749,(2),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-b","set-file-cat-b",-749138455),(function (db,p__36752){
var vec__36753 = p__36752;
var _ = cljs.core.nth.call(null,vec__36753,(0),null);
var cat_id = cljs.core.nth.call(null,vec__36753,(1),null);
var cat_a = cljs.core.nth.call(null,vec__36753,(2),null);
var row_id = cljs.core.nth.call(null,vec__36753,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-c","set-file-cat-c",814811210),(function (db,p__36756){
var vec__36757 = p__36756;
var _ = cljs.core.nth.call(null,vec__36757,(0),null);
var cat_id = cljs.core.nth.call(null,vec__36757,(1),null);
var cat_b = cljs.core.nth.call(null,vec__36757,(2),null);
var row_id = cljs.core.nth.call(null,vec__36757,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-metadata","set-metadata",1293757705),(function (db,p__36760){
var vec__36761 = p__36760;
var _ = cljs.core.nth.call(null,vec__36761,(0),null);
var meta_id = cljs.core.nth.call(null,vec__36761,(1),null);
var cat = cljs.core.nth.call(null,vec__36761,(2),null);
var row_id = cljs.core.nth.call(null,vec__36761,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-metadata","set-file-metadata",-1632351526),(function (db,p__36764){
var vec__36765 = p__36764;
var _ = cljs.core.nth.call(null,vec__36765,(0),null);
var meta_id = cljs.core.nth.call(null,vec__36765,(1),null);
var cat = cljs.core.nth.call(null,vec__36765,(2),null);
var row_id = cljs.core.nth.call(null,vec__36765,(3),null);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
metamaker_desktop.events.drop_nth = (function metamaker_desktop$events$drop_nth(coll,n){
return cljs.core.map.call(null,(function (p1__36768_SHARP_){
if(cljs.core._EQ_.call(null,false,p1__36768_SHARP_)){
return null;
} else {
return p1__36768_SHARP_;
}
}),cljs.core.keep_indexed.call(null,(function (p1__36769_SHARP_,p2__36770_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__36769_SHARP_,n)){
if((p2__36770_SHARP_ == null)){
return false;
} else {
return p2__36770_SHARP_;
}
} else {
return null;
}
}),coll));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),(function (db,p__36771){
var vec__36772 = p__36771;
var _ = cljs.core.nth.call(null,vec__36772,(0),null);
var row_id = cljs.core.nth.call(null,vec__36772,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-file-row","delete-file-row",-2041013449),(function (db,p__36775){
var vec__36776 = p__36775;
var _ = cljs.core.nth.call(null,vec__36776,(0),null);
var row_id = cljs.core.nth.call(null,vec__36776,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-label","set-label",646867621),(function (db,p__36779){
var vec__36780 = p__36779;
var _ = cljs.core.nth.call(null,vec__36780,(0),null);
var label_data = cljs.core.nth.call(null,vec__36780,(1),null);
var row_id = cljs.core.nth.call(null,vec__36780,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-label","set-file-label",671965795),(function (db,p__36783){
var vec__36784 = p__36783;
var _ = cljs.core.nth.call(null,vec__36784,(0),null);
var label_data = cljs.core.nth.call(null,vec__36784,(1),null);
var row_id = cljs.core.nth.call(null,vec__36784,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-tab","change-tab",-2145197522),(function (db,p__36787){
var vec__36788 = p__36787;
var _ = cljs.core.nth.call(null,vec__36788,(0),null);
var tab = cljs.core.nth.call(null,vec__36788,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),tab);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"srate-change","srate-change",-1919140064),(function (db,p__36791){
var vec__36792 = p__36791;
var _ = cljs.core.nth.call(null,vec__36792,(0),null);
var val = cljs.core.nth.call(null,vec__36792,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),(function (db,p__36795){
var vec__36796 = p__36795;
var _ = cljs.core.nth.call(null,vec__36796,(0),null);
var rows = cljs.core.nth.call(null,vec__36796,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"metas","metas",-187243671),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cljs.core.first.call(null,rows)),cljs.core.PersistentVector.EMPTY)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-chart-data","reset-chart-data",-1279678973),(function (db,p__36799){
var vec__36800 = p__36799;
var _ = cljs.core.nth.call(null,vec__36800,(0),null);
var data = cljs.core.nth.call(null,vec__36800,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.PersistentVector.EMPTY], null)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-chart-data","set-chart-data",-1309213466),(function (db,p__36803){
var vec__36804 = p__36803;
var _ = cljs.core.nth.call(null,vec__36804,(0),null);
var data = cljs.core.nth.call(null,vec__36804,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-chart-data","add-chart-data",1222194486),(function (db,p__36807){
var vec__36808 = p__36807;
var _ = cljs.core.nth.call(null,vec__36808,(0),null);
var data = cljs.core.nth.call(null,vec__36808,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"labels","labels",-626734591)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"datasets","datasets",1896364419),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$2(cljs.core.first.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-rows","set-rows",-1811730869),(function (db,p__36811){
var vec__36812 = p__36811;
var _ = cljs.core.nth.call(null,vec__36812,(0),null);
var rows = cljs.core.nth.call(null,vec__36812,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-types","set-types",-1195325353),cljs.core.rest.call(null,rows)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.rest.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),(function (db,p__36815){
var vec__36816 = p__36815;
var _ = cljs.core.nth.call(null,vec__36816,(0),null);
var response = cljs.core.nth.call(null,vec__36816,(1),null);
cljs.core.println.call(null,response);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__36819){
var vec__36820 = p__36819;
var _ = cljs.core.nth.call(null,vec__36820,(0),null);
var response = cljs.core.nth.call(null,vec__36820,(1),null);
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
var hmap_36823 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
metamaker_desktop.events.download.call(null,[cljs.core.str(new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str(".ttl")].join(''),metamaker_desktop.meta.make_triples.call(null,hmap_36823));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metadata","create-metadata",-737314720),(function (db,_){
var metas = cljs.core.map.call(null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db));
var hmap = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
cljs.core.println.call(null,metamaker_desktop.meta.make_triples.call(null,hmap));

ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/add/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gname","gname",1734069265),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap),new cljs.core.Keyword(null,"file","file",-1269645878),metamaker_desktop.meta.make_triples.call(null,hmap)], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (metas,hmap){
return (function (p1__36824_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__36824_SHARP_], null));
});})(metas,hmap))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (metas,hmap){
return (function (p1__36825_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__36825_SHARP_], null));
});})(metas,hmap))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql","update-sparql",-180981025),(function (db,p__36826){
var vec__36827 = p__36826;
var _ = cljs.core.nth.call(null,vec__36827,(0),null);
var query = cljs.core.nth.call(null,vec__36827,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql","sparql",1388494024),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql-b","update-sparql-b",1129568004),(function (db,p__36830){
var vec__36831 = p__36830;
var _ = cljs.core.nth.call(null,vec__36831,(0),null);
var query = cljs.core.nth.call(null,vec__36831,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-dataset","set-dataset",-649615350),(function (db,p__36834){
var vec__36835 = p__36834;
var _ = cljs.core.nth.call(null,vec__36835,(0),null);
var ids = cljs.core.nth.call(null,vec__36835,(1),null);
var i = parseInt(cljs.core.first.call(null,ids));
cljs.core.println.call(null,i);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),i)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-srate","update-srate",-1652749956),(function (db,p__36838){
var vec__36839 = p__36838;
var _ = cljs.core.nth.call(null,vec__36839,(0),null);
var rate = cljs.core.nth.call(null,vec__36839,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),rate);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-triple","add-triple",-625145023),(function (db,_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),cljs.core.conj.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-a","change-cat-a",1674669587),(function (db,p__36842){
var vec__36843 = p__36842;
var _ = cljs.core.nth.call(null,vec__36843,(0),null);
var i = cljs.core.nth.call(null,vec__36843,(1),null);
var new$ = cljs.core.nth.call(null,vec__36843,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),i], null),new$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),i], null),cljs.core.vec.call(null,re_com.dropdown.filter_choices_by_keyword.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),new$))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-b","change-cat-b",2124561258),(function (db,p__36846){
var vec__36847 = p__36846;
var _ = cljs.core.nth.call(null,vec__36847,(0),null);
var i = cljs.core.nth.call(null,vec__36847,(1),null);
var new$ = cljs.core.nth.call(null,vec__36847,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),new$);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-q-row","delete-q-row",-1585082354),(function (db,p__36850){
var vec__36851 = p__36850;
var _ = cljs.core.nth.call(null,vec__36851,(0),null);
var row_id = cljs.core.nth.call(null,vec__36851,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),(function (db,p__36854){
var vec__36855 = p__36854;
var _ = cljs.core.nth.call(null,vec__36855,(0),null);
var response = cljs.core.nth.call(null,vec__36855,(1),null);
var json = cljs.core.get.call(null,response,"out");
var p = cljs.core.println.call(null,response);
var j = cljs.core.js__GT_clj.call(null,JSON.parse(json),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var f = cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192),(0),new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"value","value",305978217)], null));
var x = cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192),(0),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"value","value",305978217)], null));
var y = cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192),(1),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"value","value",305978217)], null));
var local = (cljs.core.truth_(document.getElementById("file"))?cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files)):null);
cljs.core.println.call(null,f);

if(cljs.core.truth_(local)){
cljs.core.println.call(null,"local","remote");
} else {
}

if(cljs.core.truth_(local)){
metamaker_desktop.parser.parse_local.call(null,local);
} else {
metamaker_desktop.parser.parse_stream.call(null,f);
}

return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"response","response",-1068424192),response),new cljs.core.Keyword(null,"x","x",2099068185),x),new cljs.core.Keyword(null,"y","y",-1757859776),y);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),(function (db,p__36858){
var vec__36859 = p__36858;
var _ = cljs.core.nth.call(null,vec__36859,(0),null);
var response = cljs.core.nth.call(null,vec__36859,(1),null);
cljs.core.println.call(null,response);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"response","response",-1068424192),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (db,p__36862){
var vec__36863 = p__36862;
var _ = cljs.core.nth.call(null,vec__36863,(0),null);
var response = cljs.core.nth.call(null,vec__36863,(1),null);
cljs.core.println.call(null,[cljs.core.str("SERVER ERROR: "),cljs.core.str(response)].join(''));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql","send-sparql",875376133),(function (){var query = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sparql","sparql",1388494024)], null));
return ((function (query){
return (function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),cljs.core.deref.call(null,query)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (query){
return (function (p1__36866_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),p1__36866_SHARP_], null));
});})(query))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (query){
return (function (p1__36867_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__36867_SHARP_], null));
});})(query))
], null));

return db;
});
;})(query))
})());
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql-b","send-sparql-b",-430155904),(function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__36868_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),p1__36868_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__36869_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__36869_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql-update","send-sparql-update",698036425),(function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/update/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__36870_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),p1__36870_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__36871_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__36871_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-datasets","delete-datasets",1377868985),(function (db,_){
var selected = new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372).cljs$core$IFn$_invoke$arity$1(db);
var dsets = cljs.core.map.call(null,((function (selected){
return (function (p1__36872_SHARP_){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),parseInt(p1__36872_SHARP_));
});})(selected))
,selected);
var labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),dsets);
cljs.core.println.call(null,labels);

var seq__36875_36879 = cljs.core.seq.call(null,labels);
var chunk__36876_36880 = null;
var count__36877_36881 = (0);
var i__36878_36882 = (0);
while(true){
if((i__36878_36882 < count__36877_36881)){
var l_36883 = cljs.core._nth.call(null,chunk__36876_36880,i__36878_36882);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/delete/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gname","gname",1734069265),l_36883], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36883,selected,dsets,labels){
return (function (p1__36873_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__36873_SHARP_], null));
});})(seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36883,selected,dsets,labels))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36883,selected,dsets,labels){
return (function (p1__36874_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__36874_SHARP_], null));
});})(seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36883,selected,dsets,labels))
], null));

var G__36884 = seq__36875_36879;
var G__36885 = chunk__36876_36880;
var G__36886 = count__36877_36881;
var G__36887 = (i__36878_36882 + (1));
seq__36875_36879 = G__36884;
chunk__36876_36880 = G__36885;
count__36877_36881 = G__36886;
i__36878_36882 = G__36887;
continue;
} else {
var temp__4657__auto___36888 = cljs.core.seq.call(null,seq__36875_36879);
if(temp__4657__auto___36888){
var seq__36875_36889__$1 = temp__4657__auto___36888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36875_36889__$1)){
var c__25907__auto___36890 = cljs.core.chunk_first.call(null,seq__36875_36889__$1);
var G__36891 = cljs.core.chunk_rest.call(null,seq__36875_36889__$1);
var G__36892 = c__25907__auto___36890;
var G__36893 = cljs.core.count.call(null,c__25907__auto___36890);
var G__36894 = (0);
seq__36875_36879 = G__36891;
chunk__36876_36880 = G__36892;
count__36877_36881 = G__36893;
i__36878_36882 = G__36894;
continue;
} else {
var l_36895 = cljs.core.first.call(null,seq__36875_36889__$1);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/delete/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gname","gname",1734069265),l_36895], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36895,seq__36875_36889__$1,temp__4657__auto___36888,selected,dsets,labels){
return (function (p1__36873_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__36873_SHARP_], null));
});})(seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36895,seq__36875_36889__$1,temp__4657__auto___36888,selected,dsets,labels))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36895,seq__36875_36889__$1,temp__4657__auto___36888,selected,dsets,labels){
return (function (p1__36874_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__36874_SHARP_], null));
});})(seq__36875_36879,chunk__36876_36880,count__36877_36881,i__36878_36882,l_36895,seq__36875_36889__$1,temp__4657__auto___36888,selected,dsets,labels))
], null));

var G__36896 = cljs.core.next.call(null,seq__36875_36889__$1);
var G__36897 = null;
var G__36898 = (0);
var G__36899 = (0);
seq__36875_36879 = G__36896;
chunk__36876_36880 = G__36897;
count__36877_36881 = G__36898;
i__36878_36882 = G__36899;
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
return (function (p1__36900_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__36900_SHARP_], null));
});})(metas,hmap))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (metas,hmap){
return (function (p1__36901_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__36901_SHARP_], null));
});})(metas,hmap))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740),(function (db,_){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-sparql-b","update-sparql-b",1129568004),[cljs.core.str("PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n"),cljs.core.str("PREFIX rdf:<http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n"),cljs.core.str("PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>\n"),cljs.core.str("SELECT ?label ?url WHERE { GRAPH ?g {?url rdf:type csv:CsvDocument .\n"),cljs.core.str("                          ?url rdfs:label ?label}}")].join('')], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-sparql-b","send-sparql-b",-430155904)], null));

var urls = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-urls","data-urls",1907911823)], null));
cljs.core.println.call(null,[cljs.core.str("URLS:"),cljs.core.str(cljs.core.deref.call(null,urls))].join(''));

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
return (function (p1__36902_SHARP_,p2__36903_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[[cljs.core.str(p1__36902_SHARP_)].join(''),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p2__36903_SHARP_)]);
});})(urls))
,cljs.core.deref.call(null,urls)));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tab-changed","tab-changed",-2075573081),(function (db,p__36904){
var vec__36905 = p__36904;
var _ = cljs.core.nth.call(null,vec__36905,(0),null);
var tab_id = cljs.core.nth.call(null,vec__36905,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),tab_id);
}));

//# sourceMappingURL=events.js.map?rel=1503928314990