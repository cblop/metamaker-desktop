// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.parser');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljsjs.papaparse');
Papa.SCRIPT_PATH = "js/papaparse.min.js";
metamaker_desktop.parser.line_no = cljs.core.atom.call(null,(0));
metamaker_desktop.parser.chart_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Value"], null)], null)], null)], null));
metamaker_desktop.parser.csv_rows = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
metamaker_desktop.parser.stepfn = (function metamaker_desktop$parser$stepfn(p__38267){
var map__38274 = p__38267;
var map__38274__$1 = ((((!((map__38274 == null)))?((((map__38274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38274):map__38274);
var f = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var d = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var cs = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"cs","cs",-1757555990));
var all_cs = cljs.core.get.call(null,map__38274__$1,new cljs.core.Keyword(null,"all-cs","all-cs",205144922));
return ((function (map__38274,map__38274__$1,f,d,cs,all_cs){
return (function (results,parser){
var clj_results = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,results,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
var row_str = ((!(cljs.core._EQ_.call(null,"",cljs.core.apply.call(null,cljs.core.str,clj_results))))?[cljs.core.str(f),cljs.core.str("\t"),cljs.core.str(d),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__25876__auto__ = ((function (clj_results,map__38274,map__38274__$1,f,d,cs,all_cs){
return (function metamaker_desktop$parser$stepfn_$_iter__38276(s__38277){
return (new cljs.core.LazySeq(null,((function (clj_results,map__38274,map__38274__$1,f,d,cs,all_cs){
return (function (){
var s__38277__$1 = s__38277;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38277__$1);
if(temp__4657__auto__){
var s__38277__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38277__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38277__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38279 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38278 = (0);
while(true){
if((i__38278 < size__25875__auto__)){
var k = cljs.core._nth.call(null,c__25874__auto__,i__38278);
cljs.core.chunk_append.call(null,b__38279,(function (){var v = cljs.core.get.call(null,cs,k);
if(cljs.core.truth_(v)){
return [cljs.core.str("\t"),cljs.core.str(cljs.core.nth.call(null,clj_results,parseInt(v)))].join('');
} else {
return "\t";
}
})());

var G__38280 = (i__38278 + (1));
i__38278 = G__38280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38279),metamaker_desktop$parser$stepfn_$_iter__38276.call(null,cljs.core.chunk_rest.call(null,s__38277__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38279),null);
}
} else {
var k = cljs.core.first.call(null,s__38277__$2);
return cljs.core.cons.call(null,(function (){var v = cljs.core.get.call(null,cs,k);
if(cljs.core.truth_(v)){
return [cljs.core.str("\t"),cljs.core.str(cljs.core.nth.call(null,clj_results,parseInt(v)))].join('');
} else {
return "\t";
}
})(),metamaker_desktop$parser$stepfn_$_iter__38276.call(null,cljs.core.rest.call(null,s__38277__$2)));
}
} else {
return null;
}
break;
}
});})(clj_results,map__38274,map__38274__$1,f,d,cs,all_cs))
,null,null));
});})(clj_results,map__38274,map__38274__$1,f,d,cs,all_cs))
;
return iter__25876__auto__.call(null,cljs.core.sort.call(null,cljs.core.keys.call(null,all_cs)));
})()))].join(''):"");
var srate = parseInt(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srate","srate",-506238591)], null))));
if(!((cljs.core._EQ_.call(null,row_str,"")) || ((cljs.core.deref.call(null,metamaker_desktop.parser.line_no) === (0))))){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.csv_rows,cljs.core.conj.call(null,cljs.core.deref.call(null,metamaker_desktop.parser.csv_rows),row_str));
} else {
}

return cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.line_no,(cljs.core.deref.call(null,metamaker_desktop.parser.line_no) + (1)));
});
;})(map__38274,map__38274__$1,f,d,cs,all_cs))
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
metamaker_desktop.parser.parse_local = (function metamaker_desktop$parser$parse_local(fobj,fname,dataset,cols,all_cols){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.csv_rows,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("dm4t:file\tdm4t:dataset"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__25876__auto__ = (function metamaker_desktop$parser$parse_local_$_iter__38285(s__38286){
return (new cljs.core.LazySeq(null,(function (){
var s__38286__$1 = s__38286;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__38286__$1);
if(temp__4657__auto__){
var s__38286__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38286__$2)){
var c__25874__auto__ = cljs.core.chunk_first.call(null,s__38286__$2);
var size__25875__auto__ = cljs.core.count.call(null,c__25874__auto__);
var b__38288 = cljs.core.chunk_buffer.call(null,size__25875__auto__);
if((function (){var i__38287 = (0);
while(true){
if((i__38287 < size__25875__auto__)){
var k = cljs.core._nth.call(null,c__25874__auto__,i__38287);
cljs.core.chunk_append.call(null,b__38288,[cljs.core.str("\t"),cljs.core.str(cljs.core.get.call(null,all_cols,k))].join(''));

var G__38289 = (i__38287 + (1));
i__38287 = G__38289;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38288),metamaker_desktop$parser$parse_local_$_iter__38285.call(null,cljs.core.chunk_rest.call(null,s__38286__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38288),null);
}
} else {
var k = cljs.core.first.call(null,s__38286__$2);
return cljs.core.cons.call(null,[cljs.core.str("\t"),cljs.core.str(cljs.core.get.call(null,all_cols,k))].join(''),metamaker_desktop$parser$parse_local_$_iter__38285.call(null,cljs.core.rest.call(null,s__38286__$2)));
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

return Papa.parse(fobj,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"download","download",-300081668),false,new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true,new cljs.core.Keyword(null,"step","step",1288888124),metamaker_desktop.parser.stepfn.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"f","f",-1597136552),fname,new cljs.core.Keyword(null,"d","d",1972142424),dataset,new cljs.core.Keyword(null,"cs","cs",-1757555990),cols,new cljs.core.Keyword(null,"all-cs","all-cs",205144922),all_cols], null)),new cljs.core.Keyword(null,"complete","complete",-500388775),(function (){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.line_no,(0));

cljs.core.println.call(null,cljs.core.deref.call(null,metamaker_desktop.parser.csv_rows));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"download-csv","download-csv",-1487316289),cljs.core.deref.call(null,metamaker_desktop.parser.csv_rows)], null));
}),new cljs.core.Keyword(null,"header","header",119441134),false], null)));
});

//# sourceMappingURL=parser.js.map?rel=1504702197201