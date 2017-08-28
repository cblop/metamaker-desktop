// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.parser');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljsjs.papaparse');
Papa.SCRIPT_PATH = "js/papaparse.min.js";
metamaker_desktop.parser.line_no = cljs.core.atom.call(null,(0));
metamaker_desktop.parser.chart_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Value"], null)], null)], null)], null));
cljs.core.mod.call(null,(5),(1));
metamaker_desktop.parser.stepfn = (function metamaker_desktop$parser$stepfn(results,parser){
var clj_results = cljs.core.first.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.call(null,results,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)));
var x_index = parseInt(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185)], null))));
var y_index = parseInt(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"y","y",-1757859776)], null))));
var srate = parseInt(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"srate","srate",-506238591)], null))));
if(((cljs.core.count.call(null,clj_results) >= y_index)) && ((cljs.core.deref.call(null,metamaker_desktop.parser.line_no) > (0))) && (cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,cljs.core.deref.call(null,metamaker_desktop.parser.line_no),srate)))){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.chart_data,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,metamaker_desktop.parser.chart_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"labels","labels",-626734591)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"labels","labels",-626734591).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.parser.chart_data))),cljs.core.nth.call(null,clj_results,x_index))));

cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.chart_data,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,metamaker_desktop.parser.chart_data),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"datasets","datasets",1896364419),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.conj.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.parser.chart_data))))),parseInt(cljs.core.nth.call(null,clj_results,y_index)))));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-chart-data","set-chart-data",-1309213466),cljs.core.deref.call(null,metamaker_desktop.parser.chart_data)], null));
} else {
}

return cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.line_no,(cljs.core.deref.call(null,metamaker_desktop.parser.line_no) + (1)));
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
metamaker_desktop.parser.parse_local = (function metamaker_desktop$parser$parse_local(fname){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.chart_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Value"], null)], null)], null)], null));

return Papa.parse(fname,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"download","download",-300081668),false,new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true,new cljs.core.Keyword(null,"step","step",1288888124),metamaker_desktop.parser.stepfn,new cljs.core.Keyword(null,"header","header",119441134),false], null)));
});
metamaker_desktop.parser.parse_stream = (function metamaker_desktop$parser$parse_stream(fname){
cljs.core.reset_BANG_.call(null,metamaker_desktop.parser.chart_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"line",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"labels","labels",-626734591),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"datasets","datasets",1896364419),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"label","label",1718410804),"Value"], null)], null)], null)], null));

return Papa.parse(fname,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"download","download",-300081668),true,new cljs.core.Keyword(null,"dynamicTyping","dynamicTyping",1380929723),true,new cljs.core.Keyword(null,"step","step",1288888124),metamaker_desktop.parser.stepfn,new cljs.core.Keyword(null,"header","header",119441134),false], null)));
});

//# sourceMappingURL=parser.js.map?rel=1502809969782