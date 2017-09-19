// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.events');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('metamaker_desktop.meta');
goog.require('metamaker_desktop.query');
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
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype","ftype",1067426552),(function (db,p__11789){
var vec__11790 = p__11789;
var _ = cljs.core.nth.call(null,vec__11790,(0),null);
var type = cljs.core.nth.call(null,vec__11790,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype","ftype",1067426552),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),(function (db,p__11793){
var vec__11794 = p__11793;
var _ = cljs.core.nth.call(null,vec__11794,(0),null);
var type = cljs.core.nth.call(null,vec__11794,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"ftype2","ftype2",-1770414285),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fname-change","fname-change",-2050391303),(function (db,p__11797){
var vec__11798 = p__11797;
var _ = cljs.core.nth.call(null,vec__11798,(0),null);
var fname = cljs.core.nth.call(null,vec__11798,(1),null);
metamaker_desktop.parser.parse_remote_sample.call(null,fname,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),fname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dname-change","dname-change",-1804709417),(function (db,p__11801){
var vec__11802 = p__11801;
var _ = cljs.core.nth.call(null,vec__11802,(0),null);
var dname = cljs.core.nth.call(null,vec__11802,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725),dname);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),(function (db,p__11805){
var vec__11806 = p__11805;
var _ = cljs.core.nth.call(null,vec__11806,(0),null);
var fname = cljs.core.nth.call(null,vec__11806,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
metamaker_desktop.parser.parse_sample.call(null,url,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("http://localhost:3030/ds/"),cljs.core.str(url.name)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"upload-local","upload-local",1454845890),(function (db,p__11809){
var vec__11810 = p__11809;
var _ = cljs.core.nth.call(null,vec__11810,(0),null);
var fname = cljs.core.nth.call(null,vec__11810,(1),null);
var url = cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById("file").files));
metamaker_desktop.parser.parse_sample.call(null,url,(10));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("http://localhost:3030/ds/"),cljs.core.str(url.name)].join(''));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-dataset","add-dataset",-292693162),(function (db,p__11813){
var vec__11814 = p__11813;
var _ = cljs.core.nth.call(null,vec__11814,(0),null);
var dset = cljs.core.nth.call(null,vec__11814,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372),dset);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"toggle-sparql","toggle-sparql",1904719484),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-sparql","show-sparql",970456377),cljs.core.not.call(null,new cljs.core.Keyword(null,"show-sparql","show-sparql",970456377).cljs$core$IFn$_invoke$arity$1(db)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"fetch","fetch",-1081994244),(function (db,p__11817){
var vec__11818 = p__11817;
var _ = cljs.core.nth.call(null,vec__11818,(0),null);
var fname = cljs.core.nth.call(null,vec__11818,(1),null);
metamaker_desktop.parser.parse_sample.call(null,fname,(10));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-types","set-types",-1195325353),(function (db,p__11821){
var vec__11822 = p__11821;
var _ = cljs.core.nth.call(null,vec__11822,(0),null);
var rows = cljs.core.nth.call(null,vec__11822,(1),null);
var types = cljs.core.map.call(null,metamaker_desktop.types.detect_type,cljs.core.first.call(null,rows));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),types);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-description","update-description",1448758130),(function (db,p__11825){
var vec__11826 = p__11825;
var _ = cljs.core.nth.call(null,vec__11826,(0),null);
var description = cljs.core.nth.call(null,vec__11826,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"description","description",-1428560544),description);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-type","update-type",-137057043),(function (db,p__11830){
var vec__11831 = p__11830;
var _ = cljs.core.nth.call(null,vec__11831,(0),null);
var type = cljs.core.nth.call(null,vec__11831,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var new_type = cljs.core.first.call(null,cljs.core.filter.call(null,((function (tab,vec__11831,_,type){
return (function (p1__11829_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11829_SHARP_),type);
});})(tab,vec__11831,_,type))
,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(db)));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"row-types","row-types",-301702756),cljs.core.assoc.call(null,cljs.core.vec.call(null,new cljs.core.Keyword(null,"row-types","row-types",-301702756).cljs$core$IFn$_invoke$arity$1(db)),tab,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(new_type)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-selected-type","set-selected-type",1542768903),(function (db,p__11834){
var vec__11835 = p__11834;
var _ = cljs.core.nth.call(null,vec__11835,(0),null);
var type = cljs.core.nth.call(null,vec__11835,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-type","selected-type",97396872),type);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),(function (db,p__11838){
var vec__11839 = p__11838;
var _ = cljs.core.nth.call(null,vec__11839,(0),null);
var rows = cljs.core.nth.call(null,vec__11839,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.first.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-meta","add-meta",20238360),(function (db,_){
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.conj.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-file-meta","add-file-meta",320031083),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.conj.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cat-a","cat-a",1478285637),null,new cljs.core.Keyword(null,"cat-b","cat-b",205205348),null,new cljs.core.Keyword(null,"cat-c","cat-c",240975795),null,new cljs.core.Keyword(null,"label","label",1718410804),null], null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-a","set-cat-a",1941039827),(function (db,p__11842){
var vec__11843 = p__11842;
var _ = cljs.core.nth.call(null,vec__11843,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11843,(1),null);
var row_id = cljs.core.nth.call(null,vec__11843,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-b","set-cat-b",1237813548),(function (db,p__11846){
var vec__11847 = p__11846;
var _ = cljs.core.nth.call(null,vec__11847,(0),null);
var cat_b = cljs.core.nth.call(null,vec__11847,(1),null);
var cat_a = cljs.core.nth.call(null,vec__11847,(2),null);
var row_id = cljs.core.nth.call(null,vec__11847,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-b-for-cat-a","cat-b-for-cat-a",-2059940898),cat_a], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_bs),cat_b));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-cat-c","set-cat-c",1657502319),(function (db,p__11850){
var vec__11851 = p__11850;
var _ = cljs.core.nth.call(null,vec__11851,(0),null);
var cat_c = cljs.core.nth.call(null,vec__11851,(1),null);
var cat_b = cljs.core.nth.call(null,vec__11851,(2),null);
var row_id = cljs.core.nth.call(null,vec__11851,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var cat_cs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-c-for-cat-b","cat-c-for-cat-b",-1797495085),cat_b], null));
var cat_label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,cat_cs),cat_c));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cat_label);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-a","set-file-cat-a",-1198416506),(function (db,p__11854){
var vec__11855 = p__11854;
var _ = cljs.core.nth.call(null,vec__11855,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11855,(1),null);
var row_id = cljs.core.nth.call(null,vec__11855,(2),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-a","cat-a",1478285637)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-b","set-file-cat-b",-749138455),(function (db,p__11858){
var vec__11859 = p__11858;
var _ = cljs.core.nth.call(null,vec__11859,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11859,(1),null);
var cat_a = cljs.core.nth.call(null,vec__11859,(2),null);
var row_id = cljs.core.nth.call(null,vec__11859,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-b","cat-b",205205348)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-cat-c","set-file-cat-c",814811210),(function (db,p__11862){
var vec__11863 = p__11862;
var _ = cljs.core.nth.call(null,vec__11863,(0),null);
var cat_id = cljs.core.nth.call(null,vec__11863,(1),null);
var cat_b = cljs.core.nth.call(null,vec__11863,(2),null);
var row_id = cljs.core.nth.call(null,vec__11863,(3),null);
var cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),cat_id], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"cat-c","cat-c",240975795)], null),cljs.core.deref.call(null,cat_label));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-metadata","set-metadata",1293757705),(function (db,p__11866){
var vec__11867 = p__11866;
var _ = cljs.core.nth.call(null,vec__11867,(0),null);
var meta_id = cljs.core.nth.call(null,vec__11867,(1),null);
var cat = cljs.core.nth.call(null,vec__11867,(2),null);
var row_id = cljs.core.nth.call(null,vec__11867,(3),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-metadata","set-file-metadata",-1632351526),(function (db,p__11870){
var vec__11871 = p__11870;
var _ = cljs.core.nth.call(null,vec__11871,(0),null);
var meta_id = cljs.core.nth.call(null,vec__11871,(1),null);
var cat = cljs.core.nth.call(null,vec__11871,(2),null);
var row_id = cljs.core.nth.call(null,vec__11871,(3),null);
var metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),cat], null));
var label = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.core.deref.call(null,metas),meta_id));
var meta_data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-for-label","meta-for-label",183886875),label], null));
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null),cljs.core.deref.call(null,meta_data));
}));
metamaker_desktop.events.drop_nth = (function metamaker_desktop$events$drop_nth(coll,n){
return cljs.core.map.call(null,(function (p1__11874_SHARP_){
if(cljs.core._EQ_.call(null,false,p1__11874_SHARP_)){
return null;
} else {
return p1__11874_SHARP_;
}
}),cljs.core.keep_indexed.call(null,(function (p1__11875_SHARP_,p2__11876_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__11875_SHARP_,n)){
if((p2__11876_SHARP_ == null)){
return false;
} else {
return p2__11876_SHARP_;
}
} else {
return null;
}
}),coll));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-row","delete-row",1865937349),(function (db,p__11877){
var vec__11878 = p__11877;
var _ = cljs.core.nth.call(null,vec__11878,(0),null);
var row_id = cljs.core.nth.call(null,vec__11878,(1),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab], null),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,cljs.core.nth.call(null,new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db),tab),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-file-row","delete-file-row",-2041013449),(function (db,p__11881){
var vec__11882 = p__11881;
var _ = cljs.core.nth.call(null,vec__11882,(0),null);
var row_id = cljs.core.nth.call(null,vec__11882,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),cljs.core.vec.call(null,metamaker_desktop.events.drop_nth.call(null,new cljs.core.Keyword(null,"file-metas","file-metas",1463096308).cljs$core$IFn$_invoke$arity$1(db),row_id)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-label","set-label",646867621),(function (db,p__11885){
var vec__11886 = p__11885;
var _ = cljs.core.nth.call(null,vec__11886,(0),null);
var label_data = cljs.core.nth.call(null,vec__11886,(1),null);
var row_id = cljs.core.nth.call(null,vec__11886,(2),null);
var tab = new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas","metas",-187243671),tab,row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-file-label","set-file-label",671965795),(function (db,p__11889){
var vec__11890 = p__11889;
var _ = cljs.core.nth.call(null,vec__11890,(0),null);
var label_data = cljs.core.nth.call(null,vec__11890,(1),null);
var row_id = cljs.core.nth.call(null,vec__11890,(2),null);
return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),row_id,new cljs.core.Keyword(null,"label","label",1718410804)], null),label_data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-tab","change-tab",-2145197522),(function (db,p__11893){
var vec__11894 = p__11893;
var _ = cljs.core.nth.call(null,vec__11894,(0),null);
var tab = cljs.core.nth.call(null,vec__11894,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156),tab);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"srate-change","srate-change",-1919140064),(function (db,p__11897){
var vec__11898 = p__11897;
var _ = cljs.core.nth.call(null,vec__11898,(0),null);
var val = cljs.core.nth.call(null,vec__11898,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),(function (db,p__11901){
var vec__11902 = p__11901;
var _ = cljs.core.nth.call(null,vec__11902,(0),null);
var rows = cljs.core.nth.call(null,vec__11902,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"metas","metas",-187243671),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,cljs.core.first.call(null,rows)),cljs.core.PersistentVector.EMPTY)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"reset-chart-data","reset-chart-data",-1279678973),(function (db,p__11905){
var vec__11906 = p__11905;
var _ = cljs.core.nth.call(null,vec__11906,(0),null);
var data = cljs.core.nth.call(null,vec__11906,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),cljs.core.PersistentVector.EMPTY], null)], null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-chart-data","set-chart-data",-1309213466),(function (db,p__11909){
var vec__11910 = p__11909;
var _ = cljs.core.nth.call(null,vec__11910,(0),null);
var data = cljs.core.nth.call(null,vec__11910,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),data);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-chart-data","add-chart-data",1222194486),(function (db,p__11913){
var vec__11914 = p__11913;
var _ = cljs.core.nth.call(null,vec__11914,(0),null);
var data = cljs.core.nth.call(null,vec__11914,(1),null);
cljs.core.println.call(null,new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db));

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"labels","labels",-626734591)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"datasets","datasets",1896364419),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$2(cljs.core.first.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(db)))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-rows","set-rows",-1811730869),(function (db,p__11917){
var vec__11918 = p__11917;
var _ = cljs.core.nth.call(null,vec__11918,(0),null);
var rows = cljs.core.nth.call(null,vec__11918,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-headers","set-headers",-1886552694),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create-metas","create-metas",-449193514),rows], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-types","set-types",-1195325353),cljs.core.rest.call(null,rows)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.rest.call(null,rows));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),(function (db,p__11921){
var vec__11922 = p__11921;
var _ = cljs.core.nth.call(null,vec__11922,(0),null);
var response = cljs.core.nth.call(null,vec__11922,(1),null);
cljs.core.println.call(null,response);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),(function (db,p__11925){
var vec__11926 = p__11925;
var _ = cljs.core.nth.call(null,vec__11926,(0),null);
var response = cljs.core.nth.call(null,vec__11926,(1),null);
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
var hmap_11929 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
metamaker_desktop.events.download.call(null,[cljs.core.str(new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db)),cljs.core.str(".ttl")].join(''),metamaker_desktop.meta.make_triples.call(null,hmap_11929));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"download-csv","download-csv",-1487316289),(function (db,p__11930){
var vec__11931 = p__11930;
var _ = cljs.core.nth.call(null,vec__11931,(0),null);
var data = cljs.core.nth.call(null,vec__11931,(1),null);
cljs.core.println.call(null,data);

metamaker_desktop.events.download.call(null,"out.tsv",cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,"\n",data)));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"create-metadata","create-metadata",-737314720),(function (db,_){
var metas = cljs.core.map.call(null,new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db));
var hmap = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"dataset-name","dataset-name",1000135725).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-metas","file-metas",1463096308),db], null),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(db)], null);
cljs.core.println.call(null,metamaker_desktop.meta.make_triples.call(null,hmap));

ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/add/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gname","gname",1734069265),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap),new cljs.core.Keyword(null,"file","file",-1269645878),metamaker_desktop.meta.make_triples.call(null,hmap)], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (metas,hmap){
return (function (p1__11934_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__11934_SHARP_], null));
});})(metas,hmap))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (metas,hmap){
return (function (p1__11935_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__11935_SHARP_], null));
});})(metas,hmap))
], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql","update-sparql",-180981025),(function (db,p__11936){
var vec__11937 = p__11936;
var _ = cljs.core.nth.call(null,vec__11937,(0),null);
var query = cljs.core.nth.call(null,vec__11937,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql","sparql",1388494024),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-sparql-b","update-sparql-b",1129568004),(function (db,p__11940){
var vec__11941 = p__11940;
var _ = cljs.core.nth.call(null,vec__11941,(0),null);
var query = cljs.core.nth.call(null,vec__11941,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711),query);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-dataset","set-dataset",-649615350),(function (db,p__11944){
var vec__11945 = p__11944;
var _ = cljs.core.nth.call(null,vec__11945,(0),null);
var ids = cljs.core.nth.call(null,vec__11945,(1),null);
var i = parseInt(cljs.core.first.call(null,ids));
cljs.core.println.call(null,i);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dataset","dataset",1159262238),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),i)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"update-srate","update-srate",-1652749956),(function (db,p__11948){
var vec__11949 = p__11948;
var _ = cljs.core.nth.call(null,vec__11949,(0),null);
var rate = cljs.core.nth.call(null,vec__11949,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"srate","srate",-506238591),rate);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-triple","add-triple",-625145023),(function (db,_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),cljs.core.conj.call(null,new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db),null)),new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),cljs.core.conj.call(null,new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db),cljs.core.PersistentVector.EMPTY));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-a","change-cat-a",1674669587),(function (db,p__11952){
var vec__11953 = p__11952;
var _ = cljs.core.nth.call(null,vec__11953,(0),null);
var i = cljs.core.nth.call(null,vec__11953,(1),null);
var new$ = cljs.core.nth.call(null,vec__11953,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413),i], null),new$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),i], null),cljs.core.vec.call(null,re_com.dropdown.filter_choices_by_keyword.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"cat-id","cat-id",963362371),new$))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-cat-b","change-cat-b",2124561258),(function (db,p__11956){
var vec__11957 = p__11956;
var _ = cljs.core.nth.call(null,vec__11957,(0),null);
var i = cljs.core.nth.call(null,vec__11957,(1),null);
var new$ = cljs.core.nth.call(null,vec__11957,(2),null);
cljs.core.println.call(null,new$);

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829),i], null),new$);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"delete-q-row","delete-q-row",-1585082354),(function (db,p__11960){
var vec__11961 = p__11960;
var _ = cljs.core.nth.call(null,vec__11961,(0),null);
var row_id = cljs.core.nth.call(null,vec__11961,(1),null);
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
var G__11964 = cljs.core.rest.call(null,bs);
var G__11965 = (cljs.core.truth_(match)?cljs.core.assoc.call(null,acc,match,cljs.core.merge.call(null,cljs.core.nth.call(null,acc,match),cljs.core.first.call(null,bs))):cljs.core.conj.call(null,acc,cljs.core.first.call(null,bs)));
bs = G__11964;
acc = G__11965;
continue;
}
break;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),(function (db,p__11971){
var vec__11972 = p__11971;
var _ = cljs.core.nth.call(null,vec__11972,(0),null);
var response = cljs.core.nth.call(null,vec__11972,(1),null);
var json = cljs.core.get.call(null,response,"out");
var p = cljs.core.println.call(null,response);
var j = cljs.core.js__GT_clj.call(null,JSON.parse(json),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var results = metamaker_desktop.events.merge_bindings.call(null,cljs.core.get_in.call(null,j,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null)));
var p__$1 = cljs.core.println.call(null,results);
var fs = cljs.core.map.call(null,((function (json,p,j,results,p__$1,vec__11972,_,response){
return (function (p1__11966_SHARP_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(p1__11966_SHARP_));
});})(json,p,j,results,p__$1,vec__11972,_,response))
,results);
var ds = cljs.core.map.call(null,((function (json,p,j,results,p__$1,fs,vec__11972,_,response){
return (function (p1__11967_SHARP_){
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(p1__11967_SHARP_));
});})(json,p,j,results,p__$1,fs,vec__11972,_,response))
,results);
var cols = cljs.core.map.call(null,((function (json,p,j,results,p__$1,fs,ds,vec__11972,_,response){
return (function (p1__11968_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__11968_SHARP_,new cljs.core.Keyword(null,"f","f",-1597136552)),new cljs.core.Keyword(null,"d","d",1972142424));
});})(json,p,j,results,p__$1,fs,ds,vec__11972,_,response))
,results);
var col_map = cljs.core.map.call(null,((function (json,p,j,results,p__$1,fs,ds,cols,vec__11972,_,response){
return (function (xs){
return cljs.core.apply.call(null,cljs.core.merge,(function (){var iter__7197__auto__ = ((function (json,p,j,results,p__$1,fs,ds,cols,vec__11972,_,response){
return (function metamaker_desktop$events$iter__11975(s__11976){
return (new cljs.core.LazySeq(null,((function (json,p,j,results,p__$1,fs,ds,cols,vec__11972,_,response){
return (function (){
var s__11976__$1 = s__11976;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11976__$1);
if(temp__4657__auto__){
var s__11976__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11976__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11976__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11978 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11977 = (0);
while(true){
if((i__11977 < size__7196__auto__)){
var y = cljs.core._nth.call(null,c__7195__auto__,i__11977);
cljs.core.chunk_append.call(null,b__11978,cljs.core.PersistentHashMap.fromArrays([y],[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,xs,y))]));

var G__11983 = (i__11977 + (1));
i__11977 = G__11983;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11978),metamaker_desktop$events$iter__11975.call(null,cljs.core.chunk_rest.call(null,s__11976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11978),null);
}
} else {
var y = cljs.core.first.call(null,s__11976__$2);
return cljs.core.cons.call(null,cljs.core.PersistentHashMap.fromArrays([y],[new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,xs,y))]),metamaker_desktop$events$iter__11975.call(null,cljs.core.rest.call(null,s__11976__$2)));
}
} else {
return null;
}
break;
}
});})(json,p,j,results,p__$1,fs,ds,cols,vec__11972,_,response))
,null,null));
});})(json,p,j,results,p__$1,fs,ds,cols,vec__11972,_,response))
;
return iter__7197__auto__.call(null,cljs.core.keys.call(null,xs));
})());
});})(json,p,j,results,p__$1,fs,ds,cols,vec__11972,_,response))
,cols);
var all_cats = new cljs.core.Keyword(null,"all-cats","all-cats",627450712).cljs$core$IFn$_invoke$arity$1(db);
var lcats = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map_indexed.call(null,((function (json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,vec__11972,_,response){
return (function (p1__11969_SHARP_,p2__11970_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.call(null,[cljs.core.str("c"),cljs.core.str(p1__11969_SHARP_)].join(''))],[p2__11970_SHARP_]);
});})(json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,vec__11972,_,response))
,all_cats));
var locals = ((cljs.core.seq.call(null,ds))?(function (){var iter__7197__auto__ = ((function (json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__11972,_,response){
return (function metamaker_desktop$events$iter__11979(s__11980){
return (new cljs.core.LazySeq(null,((function (json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__11972,_,response){
return (function (){
var s__11980__$1 = s__11980;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11980__$1);
if(temp__4657__auto__){
var s__11980__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11980__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11980__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11982 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11981 = (0);
while(true){
if((i__11981 < size__7196__auto__)){
var d = cljs.core._nth.call(null,c__7195__auto__,i__11981);
cljs.core.chunk_append.call(null,b__11982,cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById(d).files)));

var G__11984 = (i__11981 + (1));
i__11981 = G__11984;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11982),metamaker_desktop$events$iter__11979.call(null,cljs.core.chunk_rest.call(null,s__11980__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11982),null);
}
} else {
var d = cljs.core.first.call(null,s__11980__$2);
return cljs.core.cons.call(null,cljs.core.first.call(null,cljs.core.array_seq.call(null,document.getElementById(d).files)),metamaker_desktop$events$iter__11979.call(null,cljs.core.rest.call(null,s__11980__$2)));
}
} else {
return null;
}
break;
}
});})(json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__11972,_,response))
,null,null));
});})(json,p,j,results,p__$1,fs,ds,cols,col_map,all_cats,lcats,vec__11972,_,response))
;
return iter__7197__auto__.call(null,ds);
})():null);
var ldata = cljs.core.map.call(null,cljs.core.vector,locals,fs,ds,col_map,cljs.core.repeat.call(null,lcats));
metamaker_desktop.parser.parse_locals.call(null,ldata,lcats);

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),(function (db,p__11985){
var vec__11986 = p__11985;
var _ = cljs.core.nth.call(null,vec__11986,(0),null);
var response = cljs.core.nth.call(null,vec__11986,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"response","response",-1068424192),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (db,p__11989){
var vec__11990 = p__11989;
var _ = cljs.core.nth.call(null,vec__11990,(0),null);
var response = cljs.core.nth.call(null,vec__11990,(1),null);
cljs.core.println.call(null,[cljs.core.str("SERVER ERROR: "),cljs.core.str(response)].join(''));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql","send-sparql",875376133),(function (db,_){
var cat_as = new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(db);
var cat_bs = new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(db);
var filtered = new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364).cljs$core$IFn$_invoke$arity$1(db);
var all_cats = cljs.core.map.call(null,((function (cat_as,cat_bs,filtered){
return (function (p1__11993_SHARP_){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(db),p1__11993_SHARP_));
});})(cat_as,cat_bs,filtered))
,cat_bs);
var selected = cljs.core.filter.call(null,((function (cat_as,cat_bs,filtered,all_cats){
return (function (p1__11994_SHARP_){
var and__6405__auto__ = metamaker_desktop.query.in_QMARK_.call(null,new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11994_SHARP_));
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core.re_find.call(null,/http:\/\/localhost/,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__11994_SHARP_));
} else {
return and__6405__auto__;
}
});})(cat_as,cat_bs,filtered,all_cats))
,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db));
var query = metamaker_desktop.subs.make_query.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),selected),all_cats);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),query], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),((function (cat_as,cat_bs,filtered,all_cats,selected,query){
return (function (p1__11995_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler","query-response-handler",1265421798),p1__11995_SHARP_], null));
});})(cat_as,cat_bs,filtered,all_cats,selected,query))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),((function (cat_as,cat_bs,filtered,all_cats,selected,query){
return (function (p1__11996_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__11996_SHARP_], null));
});})(cat_as,cat_bs,filtered,all_cats,selected,query))
], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"all-cats","all-cats",627450712),all_cats);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql-b","send-sparql-b",-430155904),(function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/query/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11997_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),p1__11997_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__11998_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__11998_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"send-sparql-update","send-sparql-update",698036425),(function (db,_){
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/update/")].join(''),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.Keyword(null,"sparql-b","sparql-b",1792798711).cljs$core$IFn$_invoke$arity$1(db)], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header,Content-Range,range",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__11999_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-response-handler-b","query-response-handler-b",1136492009),p1__11999_SHARP_], null));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__12000_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),p1__12000_SHARP_], null));
})], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"error-modal","error-modal",214887023),(function (db,p__12001){
var vec__12002 = p__12001;
var _ = cljs.core.nth.call(null,vec__12002,(0),null);
var message = cljs.core.nth.call(null,vec__12002,(1),null);
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
return (function (p1__12005_SHARP_){
return cljs.core.nth.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(db),parseInt(p1__12005_SHARP_));
});})(selected))
,selected);
var labels = cljs.core.map.call(null,new cljs.core.Keyword(null,"label","label",1718410804),dsets);
cljs.core.println.call(null,labels);

var seq__12008_12012 = cljs.core.seq.call(null,labels);
var chunk__12009_12013 = null;
var count__12010_12014 = (0);
var i__12011_12015 = (0);
while(true){
if((i__12011_12015 < count__12010_12014)){
var l_12016 = cljs.core._nth.call(null,chunk__12009_12013,i__12011_12015);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/delete/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gname","gname",1734069265),l_12016], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12016,selected,dsets,labels){
return (function (p1__12006_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__12006_SHARP_], null));
});})(seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12016,selected,dsets,labels))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12016,selected,dsets,labels){
return (function (p1__12007_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__12007_SHARP_], null));
});})(seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12016,selected,dsets,labels))
], null));

var G__12017 = seq__12008_12012;
var G__12018 = chunk__12009_12013;
var G__12019 = count__12010_12014;
var G__12020 = (i__12011_12015 + (1));
seq__12008_12012 = G__12017;
chunk__12009_12013 = G__12018;
count__12010_12014 = G__12019;
i__12011_12015 = G__12020;
continue;
} else {
var temp__4657__auto___12021 = cljs.core.seq.call(null,seq__12008_12012);
if(temp__4657__auto___12021){
var seq__12008_12022__$1 = temp__4657__auto___12021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12008_12022__$1)){
var c__7228__auto___12023 = cljs.core.chunk_first.call(null,seq__12008_12022__$1);
var G__12024 = cljs.core.chunk_rest.call(null,seq__12008_12022__$1);
var G__12025 = c__7228__auto___12023;
var G__12026 = cljs.core.count.call(null,c__7228__auto___12023);
var G__12027 = (0);
seq__12008_12012 = G__12024;
chunk__12009_12013 = G__12025;
count__12010_12014 = G__12026;
i__12011_12015 = G__12027;
continue;
} else {
var l_12028 = cljs.core.first.call(null,seq__12008_12022__$1);
ajax.core.POST.call(null,[cljs.core.str(metamaker_desktop.events.HOST),cljs.core.str("/delete/")].join(''),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gname","gname",1734069265),l_12028], null),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json",new cljs.core.Keyword(null,"access-control-allow-origin","access-control-allow-origin",1777760506),"*",new cljs.core.Keyword(null,"access-control-allow-methods","access-control-allow-methods",1779858167),"GET, POST",new cljs.core.Keyword(null,"access-control-allow-headers","access-control-allow-headers",260618047),"X-Custom-Header"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"handler","handler",-195596612),((function (seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12028,seq__12008_12022__$1,temp__4657__auto___12021,selected,dsets,labels){
return (function (p1__12006_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__12006_SHARP_], null));
});})(seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12028,seq__12008_12022__$1,temp__4657__auto___12021,selected,dsets,labels))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12028,seq__12008_12022__$1,temp__4657__auto___12021,selected,dsets,labels){
return (function (p1__12007_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__12007_SHARP_], null));
});})(seq__12008_12012,chunk__12009_12013,count__12010_12014,i__12011_12015,l_12028,seq__12008_12022__$1,temp__4657__auto___12021,selected,dsets,labels))
], null));

var G__12029 = cljs.core.next.call(null,seq__12008_12022__$1);
var G__12030 = null;
var G__12031 = (0);
var G__12032 = (0);
seq__12008_12012 = G__12029;
chunk__12009_12013 = G__12030;
count__12010_12014 = G__12031;
i__12011_12015 = G__12032;
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
return (function (p1__12033_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-turtle-handler","load-turtle-handler",-467608418),p1__12033_SHARP_], null));
});})(metas,hmap))
,new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),((function (metas,hmap){
return (function (p1__12034_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bad-response","bad-response",1911422950),p1__12034_SHARP_], null));
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
return (function (p1__12035_SHARP_,p2__12036_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"url","url",276297046)],[[cljs.core.str(p1__12035_SHARP_)].join(''),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(p2__12036_SHARP_),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p2__12036_SHARP_)]);
});})(urls))
,cljs.core.deref.call(null,urls)));
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"tab-changed","tab-changed",-2075573081),(function (db,p__12037){
var vec__12038 = p__12037;
var _ = cljs.core.nth.call(null,vec__12038,(0),null);
var tab_id = cljs.core.nth.call(null,vec__12038,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-datasets","get-datasets",-1267158740)], null));

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),tab_id);
}));

//# sourceMappingURL=events.js.map?rel=1505229171741