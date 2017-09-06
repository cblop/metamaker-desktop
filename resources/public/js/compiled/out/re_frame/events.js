// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__27287_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__27287_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___27288 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___27288)){
var not_i_27289 = temp__4657__auto___27288;
if(cljs.core.fn_QMARK_.call(null,not_i_27289)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_27289);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_27289);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_27304 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_27305 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27262__auto___27318 = re_frame.interop.now.call(null);
var duration__27263__auto___27319 = (end__27262__auto___27318 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__27306_27320 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__27307_27321 = null;
var count__27308_27322 = (0);
var i__27309_27323 = (0);
while(true){
if((i__27309_27323 < count__27308_27322)){
var vec__27310_27324 = cljs.core._nth.call(null,chunk__27307_27321,i__27309_27323);
var k__27264__auto___27325 = cljs.core.nth.call(null,vec__27310_27324,(0),null);
var cb__27265__auto___27326 = cljs.core.nth.call(null,vec__27310_27324,(1),null);
try{cb__27265__auto___27326.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27263__auto___27319,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27313){if((e27313 instanceof java.lang.Exception)){
var e__27266__auto___27327 = e27313;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27264__auto___27325,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27266__auto___27327);
} else {
throw e27313;

}
}
var G__27328 = seq__27306_27320;
var G__27329 = chunk__27307_27321;
var G__27330 = count__27308_27322;
var G__27331 = (i__27309_27323 + (1));
seq__27306_27320 = G__27328;
chunk__27307_27321 = G__27329;
count__27308_27322 = G__27330;
i__27309_27323 = G__27331;
continue;
} else {
var temp__4657__auto___27332 = cljs.core.seq.call(null,seq__27306_27320);
if(temp__4657__auto___27332){
var seq__27306_27333__$1 = temp__4657__auto___27332;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27306_27333__$1)){
var c__25907__auto___27334 = cljs.core.chunk_first.call(null,seq__27306_27333__$1);
var G__27335 = cljs.core.chunk_rest.call(null,seq__27306_27333__$1);
var G__27336 = c__25907__auto___27334;
var G__27337 = cljs.core.count.call(null,c__25907__auto___27334);
var G__27338 = (0);
seq__27306_27320 = G__27335;
chunk__27307_27321 = G__27336;
count__27308_27322 = G__27337;
i__27309_27323 = G__27338;
continue;
} else {
var vec__27314_27339 = cljs.core.first.call(null,seq__27306_27333__$1);
var k__27264__auto___27340 = cljs.core.nth.call(null,vec__27314_27339,(0),null);
var cb__27265__auto___27341 = cljs.core.nth.call(null,vec__27314_27339,(1),null);
try{cb__27265__auto___27341.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27263__auto___27319,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e27317){if((e27317 instanceof java.lang.Exception)){
var e__27266__auto___27342 = e27317;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__27264__auto___27340,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__27266__auto___27342);
} else {
throw e27317;

}
}
var G__27343 = cljs.core.next.call(null,seq__27306_27333__$1);
var G__27344 = null;
var G__27345 = (0);
var G__27346 = (0);
seq__27306_27320 = G__27343;
chunk__27307_27321 = G__27344;
count__27308_27322 = G__27345;
i__27309_27323 = G__27346;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_27305;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_27304;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1504172195304