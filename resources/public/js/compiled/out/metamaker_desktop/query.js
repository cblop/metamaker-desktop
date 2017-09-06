// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.query');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('metamaker_desktop.parser');
goog.require('cljsjs.chartjs');
goog.require('reagent.core');
/**
 * true if coll contains elm
 */
metamaker_desktop.query.in_QMARK_ = (function metamaker_desktop$query$in_QMARK_(coll,elm){
return cljs.core.some.call(null,(function (p1__38570_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__38570_SHARP_);
}),coll);
});
metamaker_desktop.query.HOST = "http://localhost:3030/ds/data/";
metamaker_desktop.query.generate_query = (function metamaker_desktop$query$generate_query(columns){
var graphs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"graphs","graphs",-1584479112)], null));
return cljs.core.apply.call(null,cljs.core.str,"PREFIX csv:<http://www.ntnu.no/ub/data/csv#>\n","PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>\n","PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>\n","SELECT *",cljs.core.apply.call(null,cljs.core.str,(function (){var iter__25876__auto__ = ((function (graphs){
return (function metamaker_desktop$query$generate_query_$_iter__38579(s__38580){
return (new cljs.core.LazySeq(null,((function (graphs){
return (function (){
var s__38580__$1 = s__38580;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38580__$1);
if(temp__4657__auto__){
var s__38580__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38580__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38580__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38582 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38581 = (0);
while(true){
if((i__38581 < size__25875__auto__)){
var g = cljs.core._nth.call(null,c__25874__auto__,i__38581);
cljs.core.chunk_append.call(null,b__38582,[cljs.core.str("FROM <"),cljs.core.str(metamaker_desktop.query.HOST),cljs.core.str(g),cljs.core.str(">\n")].join(''));

var G__38587 = (i__38581 + (1));
i__38581 = G__38587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38582),metamaker_desktop$query$generate_query_$_iter__38579.call(null,cljs.core.chunk_rest.call(null,s__38580__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38582),null);
}
} else {
var g = cljs.core.first.call(null,s__38580__$2);
return cljs.core.cons.call(null,[cljs.core.str("FROM <"),cljs.core.str(metamaker_desktop.query.HOST),cljs.core.str(g),cljs.core.str(">\n")].join(''),metamaker_desktop$query$generate_query_$_iter__38579.call(null,cljs.core.rest.call(null,s__38580__$2)));
}
} else {
return null;
}
break;
}
});})(graphs))
,null,null));
});})(graphs))
;
return iter__25876__auto__.call(null,cljs.core.deref.call(null,graphs));
})()),"WHERE {{\n",cljs.core.apply.call(null,cljs.core.str,(function (){var iter__25876__auto__ = ((function (graphs){
return (function metamaker_desktop$query$generate_query_$_iter__38583(s__38584){
return (new cljs.core.LazySeq(null,((function (graphs){
return (function (){
var s__38584__$1 = s__38584;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38584__$1);
if(temp__4657__auto__){
var s__38584__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38584__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38584__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38586 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38585 = (0);
while(true){
if((i__38585 < size__25875__auto__)){
var c = cljs.core._nth.call(null,c__25874__auto__,i__38585);
cljs.core.chunk_append.call(null,b__38586,cljs.core.apply.call(null,cljs.core.str,"SELECT ?"));

var G__38588 = (i__38585 + (1));
i__38585 = G__38588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38586),metamaker_desktop$query$generate_query_$_iter__38583.call(null,cljs.core.chunk_rest.call(null,s__38584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38586),null);
}
} else {
var c = cljs.core.first.call(null,s__38584__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,cljs.core.str,"SELECT ?"),metamaker_desktop$query$generate_query_$_iter__38583.call(null,cljs.core.rest.call(null,s__38584__$2)));
}
} else {
return null;
}
break;
}
});})(graphs))
,null,null));
});})(graphs))
;
return iter__25876__auto__.call(null,columns);
})()),"}}");
});
metamaker_desktop.query.locals_modal = (function metamaker_desktop$query$locals_modal(){
var show_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-locals-modal","show-locals-modal",-1804990107)], null));
var datasets = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null));
var sets = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372)], null));
var locals = cljs.core.filter.call(null,((function (show_QMARK_,datasets,sets){
return (function (p1__38589_SHARP_){
var and__25084__auto__ = metamaker_desktop.query.in_QMARK_.call(null,cljs.core.deref.call(null,sets),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38589_SHARP_));
if(cljs.core.truth_(and__25084__auto__)){
return cljs.core.re_find.call(null,/http:\/\/localhost/,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__38589_SHARP_));
} else {
return and__25084__auto__;
}
});})(show_QMARK_,datasets,sets))
,cljs.core.deref.call(null,datasets));
if(cljs.core.truth_(cljs.core.deref.call(null,show_QMARK_))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Please select the local files for the following:"], null),(cljs.core.truth_(locals)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__25876__auto__ = ((function (show_QMARK_,datasets,sets,locals){
return (function metamaker_desktop$query$locals_modal_$_iter__38594(s__38595){
return (new cljs.core.LazySeq(null,((function (show_QMARK_,datasets,sets,locals){
return (function (){
var s__38595__$1 = s__38595;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38595__$1);
if(temp__4657__auto__){
var s__38595__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38595__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38595__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38597 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38596 = (0);
while(true){
if((i__38596 < size__25875__auto__)){
var l = cljs.core._nth.call(null,c__25874__auto__,i__38596);
cljs.core.chunk_append.call(null,b__38597,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(l)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__38596,l,c__25874__auto__,size__25875__auto__,b__38597,s__38595__$2,temp__4657__auto__,show_QMARK_,datasets,sets,locals){
return (function (){
return cljs.core.List.EMPTY;
});})(i__38596,l,c__25874__auto__,size__25875__auto__,b__38597,s__38595__$2,temp__4657__auto__,show_QMARK_,datasets,sets,locals))
], null)], null)], null)], null));

var G__38598 = (i__38596 + (1));
i__38596 = G__38598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38597),metamaker_desktop$query$locals_modal_$_iter__38594.call(null,cljs.core.chunk_rest.call(null,s__38595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38597),null);
}
} else {
var l = cljs.core.first.call(null,s__38595__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(l)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (l,s__38595__$2,temp__4657__auto__,show_QMARK_,datasets,sets,locals){
return (function (){
return cljs.core.List.EMPTY;
});})(l,s__38595__$2,temp__4657__auto__,show_QMARK_,datasets,sets,locals))
], null)], null)], null)], null),metamaker_desktop$query$locals_modal_$_iter__38594.call(null,cljs.core.rest.call(null,s__38595__$2)));
}
} else {
return null;
}
break;
}
});})(show_QMARK_,datasets,sets,locals))
,null,null));
});})(show_QMARK_,datasets,sets,locals))
;
return iter__25876__auto__.call(null,locals);
})()], null)], null):null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"OK",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-primary",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_QMARK_,datasets,sets,locals){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-sparql","send-sparql",875376133)], null));
});})(show_QMARK_,datasets,sets,locals))
], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Cancel",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-default",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_QMARK_,datasets,sets,locals){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-locals-modal","toggle-locals-modal",-377311697)], null));
});})(show_QMARK_,datasets,sets,locals))
], null)], null)], null)], null)], null)], null);
} else {
return null;
}
});
metamaker_desktop.query.title = (function metamaker_desktop$query$title(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),"MetaMaker",new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null);
});
});
metamaker_desktop.query.localfile_b = (function metamaker_desktop$query$localfile_b(){
var fname = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fname","fname",1500291491)], null));
return ((function (fname){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"id","id",-1388402092),"file",new cljs.core.Keyword(null,"name","name",1843675177),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (fname){
return (function (p1__38599_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"upload-file","upload-file",1968287526),p1__38599_SHARP_], null));
});})(fname))
], null)], null);
});
;})(fname))
});
metamaker_desktop.query.dataset_drop = (function metamaker_desktop$query$dataset_drop(){
var datasets = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null));
var selected = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Datasets:"], null),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.selection_list,new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"100px",new cljs.core.Keyword(null,"choices","choices",1385611597),datasets,new cljs.core.Keyword(null,"multi-select?","multi-select?",973156151),true,new cljs.core.Keyword(null,"model","model",331153215),selected,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (datasets,selected){
return (function (p1__38600_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-dataset","add-dataset",-292693162),p1__38600_SHARP_], null));
});})(datasets,selected))
], null),((!(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,selected))))?new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Delete Datasets",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-danger",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"130px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (datasets,selected){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-datasets","delete-datasets",1377868985)], null));
});})(datasets,selected))
], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"130px"], null))], null)], null)], null)], null);
});
metamaker_desktop.query.sparql_text = (function metamaker_desktop$query$sparql_text(){
var sparql = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sparql","sparql",1388494024)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_textarea,new cljs.core.Keyword(null,"model","model",331153215),sparql,new cljs.core.Keyword(null,"width","width",-384071477),"60%",new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (sparql){
return (function (p1__38601_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-sparql","update-sparql",-180981025),p1__38601_SHARP_], null));
});})(sparql))
], null)], null)], null);
});
metamaker_desktop.query.send_query = (function metamaker_desktop$query$send_query(){
var show_QMARK_ = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-locals-modal","show-locals-modal",-1804990107)], null));
var datasets = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasets","datasets",1896364419)], null));
var sets = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372)], null));
var locals = cljs.core.filter.call(null,((function (show_QMARK_,datasets,sets){
return (function (p1__38602_SHARP_){
var and__25084__auto__ = metamaker_desktop.query.in_QMARK_.call(null,cljs.core.deref.call(null,sets),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38602_SHARP_));
if(cljs.core.truth_(and__25084__auto__)){
return cljs.core.re_find.call(null,/http:\/\/localhost/,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(p1__38602_SHARP_));
} else {
return and__25084__auto__;
}
});})(show_QMARK_,datasets,sets))
,cljs.core.deref.call(null,datasets));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Send Query",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (show_QMARK_,datasets,sets,locals){
return (function (){
if(cljs.core.seq.call(null,cljs.core.deref.call(null,sets))){
if(cljs.core.seq.call(null,locals)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-locals-modal","toggle-locals-modal",-377311697)], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-sparql","send-sparql",875376133)], null));
}
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-modal","error-modal",214887023),"Please select one or more dataset(s) to query"], null));
}
});})(show_QMARK_,datasets,sets,locals))
], null)], null)], null);
});
metamaker_desktop.query.cat_a_drop = (function metamaker_desktop$query$cat_a_drop(i){
var selected_cat_a = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-qa","selected-cat-qa",813901657),i], null));
var cat_as = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-as","cat-as",-764873094)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),selected_cat_a,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_cat_a,cat_as){
return (function (p1__38603_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cat-a","change-cat-a",1674669587),i,p1__38603_SHARP_], null));
});})(selected_cat_a,cat_as))
,new cljs.core.Keyword(null,"choices","choices",1385611597),cat_as,new cljs.core.Keyword(null,"width","width",-384071477),"150px"], null)], null)], null);
});
metamaker_desktop.query.cat_b_drop = (function metamaker_desktop$query$cat_b_drop(i){
var selected_cat_b = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cat-qb","selected-cat-qb",760801536),i], null));
var filtered_cats = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filtered-cats","filtered-cats",-965713364),i], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.single_dropdown,new cljs.core.Keyword(null,"model","model",331153215),selected_cat_b,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (selected_cat_b,filtered_cats){
return (function (p1__38604_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-cat-b","change-cat-b",2124561258),i,p1__38604_SHARP_], null));
});})(selected_cat_b,filtered_cats))
,new cljs.core.Keyword(null,"choices","choices",1385611597),filtered_cats,new cljs.core.Keyword(null,"width","width",-384071477),"150px"], null)], null)], null);
});
metamaker_desktop.query.text_filter = (function metamaker_desktop$query$text_filter(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),"",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.List.EMPTY;
})], null);
});
metamaker_desktop.query.sample_rate = (function metamaker_desktop$query$sample_rate(){
var srate = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srate","srate",-506238591)], null));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Sample every "], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.input_text,new cljs.core.Keyword(null,"model","model",331153215),srate,new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (srate){
return (function (p1__38605_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srate-change","srate-change",-1919140064),p1__38605_SHARP_], null));
});})(srate))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804)," readings."], null)], null)], null);
});
metamaker_desktop.query.cat_select = (function metamaker_desktop$query$cat_select(){
var trips = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-cats","selected-cats",-1104866136)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var iter__25876__auto__ = ((function (trips){
return (function metamaker_desktop$query$cat_select_$_iter__38610(s__38611){
return (new cljs.core.LazySeq(null,((function (trips){
return (function (){
var s__38611__$1 = s__38611;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38611__$1);
if(temp__4657__auto__){
var s__38611__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38611__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38611__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38613 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38612 = (0);
while(true){
if((i__38612 < size__25875__auto__)){
var i = cljs.core._nth.call(null,c__25874__auto__,i__38612);
cljs.core.chunk_append.call(null,b__38613,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Category"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metamaker_desktop.query.cat_a_drop,i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Subcategory"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metamaker_desktop.query.cat_b_drop,i], null),(((i > (0)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-danger",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38612,i,c__25874__auto__,size__25875__auto__,b__38613,s__38611__$2,temp__4657__auto__,trips){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-q-row","delete-q-row",-1585082354),i], null));
});})(i__38612,i,c__25874__auto__,size__25875__auto__,b__38613,s__38611__$2,temp__4657__auto__,trips))
], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"100px"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null)], null)], null));

var G__38614 = (i__38612 + (1));
i__38612 = G__38614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38613),metamaker_desktop$query$cat_select_$_iter__38610.call(null,cljs.core.chunk_rest.call(null,s__38611__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38613),null);
}
} else {
var i = cljs.core.first.call(null,s__38611__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Category"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metamaker_desktop.query.cat_a_drop,i], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.label,new cljs.core.Keyword(null,"label","label",1718410804),"Subcategory"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metamaker_desktop.query.cat_b_drop,i], null),(((i > (0)))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Delete",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-danger",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i,s__38611__$2,temp__4657__auto__,trips){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delete-q-row","delete-q-row",-1585082354),i], null));
});})(i,s__38611__$2,temp__4657__auto__,trips))
], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"100px"], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.gap,new cljs.core.Keyword(null,"size","size",1098693007),"20px"], null)], null)], null),metamaker_desktop$query$cat_select_$_iter__38610.call(null,cljs.core.rest.call(null,s__38611__$2)));
}
} else {
return null;
}
break;
}
});})(trips))
,null,null));
});})(trips))
;
return iter__25876__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,trips))));
})()], null)], null);
});
metamaker_desktop.query.chart_inner = (function metamaker_desktop$query$chart_inner(){
var chart = cljs.core.atom.call(null,null);
var update = ((function (chart){
return (function (comp){
cljs.core.deref.call(null,chart).data.labels = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,comp)));

cljs.core.deref.call(null,chart).data.datasets = cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(reagent.core.props.call(null,comp)));

cljs.core.println.call(null,cljs.core.deref.call(null,chart).data);

cljs.core.println.call(null,reagent.core.props.call(null,comp));

return cljs.core.deref.call(null,chart).update();
});})(chart))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (chart,update){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"chart",new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(400)], null)], null);
});})(chart,update))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (chart,update){
return (function (comp){
var context_38615 = document.getElementById("chart").getContext("2d");
var data_38616 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"bar",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Values"], null)], null)], null)], null);
var obj_38617 = (new Chart(context_38615,cljs.core.clj__GT_js.call(null,data_38616)));
cljs.core.reset_BANG_.call(null,chart,obj_38617);

return update.call(null,comp);
});})(chart,update))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),update,new cljs.core.Keyword(null,"display-name","display-name",694513143),"chart-inner"], null));
});
metamaker_desktop.query.add_triple = (function metamaker_desktop$query$add_triple(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.md_circle_icon_button,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus",new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),true,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-triple","add-triple",-625145023)], null));
})], null)], null)], null);
});
metamaker_desktop.query.get_readings = (function metamaker_desktop$query$get_readings(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),"Get Readings",new cljs.core.Keyword(null,"class","class",-2030961996),"btn-success",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.List.EMPTY;
})], null)], null)], null);
});

//# sourceMappingURL=query.js.map?rel=1504702197838