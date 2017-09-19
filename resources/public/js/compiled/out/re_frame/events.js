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
var make_chain = (function (p1__8853_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__8853_SHARP_));
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

var temp__4657__auto___8854 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___8854)){
var not_i_8855 = temp__4657__auto___8854;
if(cljs.core.fn_QMARK_.call(null,not_i_8855)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_8855);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_8855);
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
var _STAR_handling_STAR_8870 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_8871 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__8828__auto___8884 = re_frame.interop.now.call(null);
var duration__8829__auto___8885 = (end__8828__auto___8884 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__8872_8886 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__8873_8887 = null;
var count__8874_8888 = (0);
var i__8875_8889 = (0);
while(true){
if((i__8875_8889 < count__8874_8888)){
var vec__8876_8890 = cljs.core._nth.call(null,chunk__8873_8887,i__8875_8889);
var k__8830__auto___8891 = cljs.core.nth.call(null,vec__8876_8890,(0),null);
var cb__8831__auto___8892 = cljs.core.nth.call(null,vec__8876_8890,(1),null);
try{cb__8831__auto___8892.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__8829__auto___8885,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e8879){if((e8879 instanceof java.lang.Exception)){
var e__8832__auto___8893 = e8879;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__8830__auto___8891,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__8832__auto___8893);
} else {
throw e8879;

}
}
var G__8894 = seq__8872_8886;
var G__8895 = chunk__8873_8887;
var G__8896 = count__8874_8888;
var G__8897 = (i__8875_8889 + (1));
seq__8872_8886 = G__8894;
chunk__8873_8887 = G__8895;
count__8874_8888 = G__8896;
i__8875_8889 = G__8897;
continue;
} else {
var temp__4657__auto___8898 = cljs.core.seq.call(null,seq__8872_8886);
if(temp__4657__auto___8898){
var seq__8872_8899__$1 = temp__4657__auto___8898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8872_8899__$1)){
var c__7228__auto___8900 = cljs.core.chunk_first.call(null,seq__8872_8899__$1);
var G__8901 = cljs.core.chunk_rest.call(null,seq__8872_8899__$1);
var G__8902 = c__7228__auto___8900;
var G__8903 = cljs.core.count.call(null,c__7228__auto___8900);
var G__8904 = (0);
seq__8872_8886 = G__8901;
chunk__8873_8887 = G__8902;
count__8874_8888 = G__8903;
i__8875_8889 = G__8904;
continue;
} else {
var vec__8880_8905 = cljs.core.first.call(null,seq__8872_8899__$1);
var k__8830__auto___8906 = cljs.core.nth.call(null,vec__8880_8905,(0),null);
var cb__8831__auto___8907 = cljs.core.nth.call(null,vec__8880_8905,(1),null);
try{cb__8831__auto___8907.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__8829__auto___8885,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e8883){if((e8883 instanceof java.lang.Exception)){
var e__8832__auto___8908 = e8883;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__8830__auto___8906,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__8832__auto___8908);
} else {
throw e8883;

}
}
var G__8909 = cljs.core.next.call(null,seq__8872_8899__$1);
var G__8910 = null;
var G__8911 = (0);
var G__8912 = (0);
seq__8872_8886 = G__8909;
chunk__8873_8887 = G__8910;
count__8874_8888 = G__8911;
i__8875_8889 = G__8912;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_8871;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_8870;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1505229165809