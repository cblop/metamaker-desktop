// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.parser');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljsjs.papaparse');
Papa.SCRIPT_PATH = "js/papaparse.min.js";
metamaker_desktop.parser.line_no = cljs.core.atom.call(null,(0));
metamaker_desktop.parser.chart_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Value"], null)], null)], null)], null));
metamaker_desktop.parser.csv_rows = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
metamaker_desktop.parser.stepfn = (function metamaker_desktop$parser$stepfn(p__48092){
var map__48099 = p__48092;
var map__48099__$1 = ((((!((map__48099 == null)))?((((map__48099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48099):map__48099);
var f = cljs.core.get.call(null,map__48099__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var d = cljs.core.get.call(null,map__48099__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var cs = cljs.core.get.call(null,map__48099__$1,new cljs.core.Keyword(null,"cs","cs",-1757555990));
var all_cs = cljs.core.get.call(null,map__48099__$1,new cljs.core.Keyword(null,"all-cs","all-cs",205144922));
return ((function (map__48099,map__48099__$1,f,d,cs,all_cs){
return (function (results,parser){
var clj_results = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,results,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
var row_str = ((!(cljs.core._EQ_.call(null,"",cljs.core.apply.call(null,cljs.core.str,clj_results))))?[cljs.core.str(f),cljs.core.str("\t"),cljs.core.str(d),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__25876__auto__ = ((function (clj_results,map__48099,map__48099__$1,f,d,cs,all_cs){
return (function metamaker_desktop$parser$stepfn_$_iter__48101(s__48102){
return (new cljs.core.LazySeq(null,((function (clj_results,map__48099,map__48099__$1,f,d,cs,all_cs){
return (function (){
var s__48102__$1 = s__48102;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48102__$1);
if(temp__4657__auto__){
var s__48102__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48102__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__48102__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__48104 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__48103 = (0);
while(true){
if((i__48103 < size__25875__auto__)){
var k = cljs.core._nth.call(null,c__25874__auto__,i__48103);
cljs.core.chunk_append.call(null,b__48104,(function (){var v = cljs.core.get.call(null,cs,k);
if(cljs.core.truth_(v)){
return [cljs.core.str("\t"),cljs.core.str(cljs.core.nth.call(null,clj_results,parseInt(v)))].join('');
} else {
return "\t";
}
})());

var G__48105 = (i__48103 + (1));
i__48103 = G__48105;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48104),metamaker_desktop$parser$stepfn_$_iter__48101.call(null,cljs.core.chunk_rest.call(null,s__48102__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48104),null);
}
} else {
var k = cljs.core.first.call(null,s__48102__$2);
return cljs.core.cons.call(null,(function (){var v = cljs.core.get.call(null,cs,k);
if(cljs.core.truth_(v)){
return [cljs.core.str("\t"),cljs.core.str(cljs.core.nth.call(null,clj_results,parseInt(v)))].join('');
} else {
return "\t";
}
})(),metamaker_desktop$parser$stepfn_$_iter__48101.call(null,cljs.core.rest.call(null,s__48102__$2)));
}
} else {
return null;
}
break;
}
});})(clj_results,map__48099,map__48099__$1,f,d,cs,all_cs))
,null,null));
});})(clj_results,map__48099,map__48099__$1,f,d,cs,all_cs))
;
return iter__25876__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,all_cs)));
})()))].join(''):"");
var srate = parseInt(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srate","srate",-506238591)], null))));
if(cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.deref.call(null,metamaker_desktop.parser.line_no),srate))){
if(!((cljs.core._EQ_.call(null,row_str,"")) || ((cljs.core.deref.call(null,metamaker_desktop.parser.line_no) === (0))))){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.csv_rows,cljs.core.conj.call(null,cljs.core.deref.call(null,metamaker_desktop.parser.csv_rows),row_str));
} else {
}
} else {
}

return cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.line_no,(cljs.core.deref.call(null,metamaker_desktop.parser.line_no) + (1)));
});
;})(map__48099,map__48099__$1,f,d,cs,all_cs))
});
metamaker_desktop.parser.complete = (function metamaker_desktop$parser$complete(results,parser){
var clj_results = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,results,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
cljs.core.println.call(null,[cljs.core.str("Table data:"),cljs.core.str(cljs.core.js__GT_clj.call(null,results,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true))].join(''));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-rows","set-rows",-1811730869),clj_results], null));
});
metamaker_desktop.parser.parse_sample = (function metamaker_desktop$parser$parse_sample(fname,size){
return Papa.parse(fname,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"download","download",-300081668),false,new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true,new cljs.core.Keyword(null,"complete","complete",-500388775),metamaker_desktop.parser.complete,new cljs.core.Keyword(null,"preview","preview",451279890),size], null)));
});
metamaker_desktop.parser.parse_remote_sample = (function metamaker_desktop$parser$parse_remote_sample(fname,size){
return Papa.parse(fname,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"download","download",-300081668),true,new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true,new cljs.core.Keyword(null,"complete","complete",-500388775),metamaker_desktop.parser.complete,new cljs.core.Keyword(null,"preview","preview",451279890),size], null)));
});
metamaker_desktop.parser.parse_local = (function metamaker_desktop$parser$parse_local(fobj,fname,dataset,cols,all_cols,last_QMARK_){
return Papa.parse(fobj,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"download","download",-300081668),false,new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true,new cljs.core.Keyword(null,"step","step",1288888124),metamaker_desktop.parser.stepfn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"f","f",-1597136552),fname,new cljs.core.Keyword(null,"d","d",1972142424),dataset,new cljs.core.Keyword(null,"cs","cs",-1757555990),cols,new cljs.core.Keyword(null,"all-cs","all-cs",205144922),all_cols], null)),new cljs.core.Keyword(null,"complete","complete",-500388775),(function (){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.line_no,(0));

if(cljs.core.truth_(last_QMARK_)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"download-csv","download-csv",-1487316289),cljs.core.deref.call(null,metamaker_desktop.parser.csv_rows)], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"header","header",119441134),false], null)));
});
metamaker_desktop.parser.parse_locals = (function metamaker_desktop$parser$parse_locals(data,all_cols){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.csv_rows,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("dm4t:file\tdm4t:dataset"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__25876__auto__ = (function metamaker_desktop$parser$parse_locals_$_iter__48114(s__48115){
return (new cljs.core.LazySeq(null,(function (){
var s__48115__$1 = s__48115;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__48115__$1);
if(temp__4657__auto__){
var s__48115__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48115__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__48115__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__48117 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__48116 = (0);
while(true){
if((i__48116 < size__25875__auto__)){
var k = cljs.core._nth.call(null,c__25874__auto__,i__48116);
cljs.core.chunk_append.call(null,b__48117,[cljs.core.str("\t"),cljs.core.str(cljs.core.get.call(null,all_cols,k))].join(''));

var G__48122 = (i__48116 + (1));
i__48116 = G__48122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48117),metamaker_desktop$parser$parse_locals_$_iter__48114.call(null,cljs.core.chunk_rest.call(null,s__48115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48117),null);
}
} else {
var k = cljs.core.first.call(null,s__48115__$2);
return cljs.core.cons.call(null,[cljs.core.str("\t"),cljs.core.str(cljs.core.get.call(null,all_cols,k))].join(''),metamaker_desktop$parser$parse_locals_$_iter__48114.call(null,cljs.core.rest.call(null,s__48115__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25876__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,all_cols)));
})()))].join('')], null));

var seq__48118_48123 = cljs.core.seq.call(null,data);
var chunk__48119_48124 = null;
var count__48120_48125 = (0);
var i__48121_48126 = (0);
while(true){
if((i__48121_48126 < count__48120_48125)){
var d_48127 = cljs.core._nth.call(null,chunk__48119_48124,i__48121_48126);
cljs.core.apply.call(null,metamaker_desktop.parser.parse_local,d_48127);

var G__48128 = seq__48118_48123;
var G__48129 = chunk__48119_48124;
var G__48130 = count__48120_48125;
var G__48131 = (i__48121_48126 + (1));
seq__48118_48123 = G__48128;
chunk__48119_48124 = G__48129;
count__48120_48125 = G__48130;
i__48121_48126 = G__48131;
continue;
} else {
var temp__4657__auto___48132 = cljs.core.seq.call(null,seq__48118_48123);
if(temp__4657__auto___48132){
var seq__48118_48133__$1 = temp__4657__auto___48132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48118_48133__$1)){
var c__25907__auto___48134 = cljs.core.chunk_first.call(null,seq__48118_48133__$1);
var G__48135 = cljs.core.chunk_rest.call(null,seq__48118_48133__$1);
var G__48136 = c__25907__auto___48134;
var G__48137 = cljs.core.count.call(null,c__25907__auto___48134);
var G__48138 = (0);
seq__48118_48123 = G__48135;
chunk__48119_48124 = G__48136;
count__48120_48125 = G__48137;
i__48121_48126 = G__48138;
continue;
} else {
var d_48139 = cljs.core.first.call(null,seq__48118_48133__$1);
cljs.core.apply.call(null,metamaker_desktop.parser.parse_local,d_48139);

var G__48140 = cljs.core.next.call(null,seq__48118_48133__$1);
var G__48141 = null;
var G__48142 = (0);
var G__48143 = (0);
seq__48118_48123 = G__48140;
chunk__48119_48124 = G__48141;
count__48120_48125 = G__48142;
i__48121_48126 = G__48143;
continue;
}
} else {
}
}
break;
}

return true;
});

//# sourceMappingURL=parser.js.map?rel=1504704017948