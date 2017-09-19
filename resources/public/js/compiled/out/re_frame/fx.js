// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__8997 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__8998 = null;
var count__8999 = (0);
var i__9000 = (0);
while(true){
if((i__9000 < count__8999)){
var vec__9001 = cljs.core._nth.call(null,chunk__8998,i__9000);
var effect_k = cljs.core.nth.call(null,vec__9001,(0),null);
var value = cljs.core.nth.call(null,vec__9001,(1),null);
var temp__4655__auto___9007 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___9007)){
var effect_fn_9008 = temp__4655__auto___9007;
effect_fn_9008.call(null,value);
} else {
}

var G__9009 = seq__8997;
var G__9010 = chunk__8998;
var G__9011 = count__8999;
var G__9012 = (i__9000 + (1));
seq__8997 = G__9009;
chunk__8998 = G__9010;
count__8999 = G__9011;
i__9000 = G__9012;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__8997);
if(temp__4657__auto__){
var seq__8997__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8997__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__8997__$1);
var G__9013 = cljs.core.chunk_rest.call(null,seq__8997__$1);
var G__9014 = c__7228__auto__;
var G__9015 = cljs.core.count.call(null,c__7228__auto__);
var G__9016 = (0);
seq__8997 = G__9013;
chunk__8998 = G__9014;
count__8999 = G__9015;
i__9000 = G__9016;
continue;
} else {
var vec__9004 = cljs.core.first.call(null,seq__8997__$1);
var effect_k = cljs.core.nth.call(null,vec__9004,(0),null);
var value = cljs.core.nth.call(null,vec__9004,(1),null);
var temp__4655__auto___9017 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___9017)){
var effect_fn_9018 = temp__4655__auto___9017;
effect_fn_9018.call(null,value);
} else {
}

var G__9019 = cljs.core.next.call(null,seq__8997__$1);
var G__9020 = null;
var G__9021 = (0);
var G__9022 = (0);
seq__8997 = G__9019;
chunk__8998 = G__9020;
count__8999 = G__9021;
i__9000 = G__9022;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__9023 = cljs.core.seq.call(null,value);
var chunk__9024 = null;
var count__9025 = (0);
var i__9026 = (0);
while(true){
if((i__9026 < count__9025)){
var map__9027 = cljs.core._nth.call(null,chunk__9024,i__9026);
var map__9027__$1 = ((((!((map__9027 == null)))?((((map__9027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9027):map__9027);
var effect = map__9027__$1;
var ms = cljs.core.get.call(null,map__9027__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9027__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9023,chunk__9024,count__9025,i__9026,map__9027,map__9027__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9023,chunk__9024,count__9025,i__9026,map__9027,map__9027__$1,effect,ms,dispatch))
,ms);
}

var G__9031 = seq__9023;
var G__9032 = chunk__9024;
var G__9033 = count__9025;
var G__9034 = (i__9026 + (1));
seq__9023 = G__9031;
chunk__9024 = G__9032;
count__9025 = G__9033;
i__9026 = G__9034;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9023);
if(temp__4657__auto__){
var seq__9023__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9023__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9023__$1);
var G__9035 = cljs.core.chunk_rest.call(null,seq__9023__$1);
var G__9036 = c__7228__auto__;
var G__9037 = cljs.core.count.call(null,c__7228__auto__);
var G__9038 = (0);
seq__9023 = G__9035;
chunk__9024 = G__9036;
count__9025 = G__9037;
i__9026 = G__9038;
continue;
} else {
var map__9029 = cljs.core.first.call(null,seq__9023__$1);
var map__9029__$1 = ((((!((map__9029 == null)))?((((map__9029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9029):map__9029);
var effect = map__9029__$1;
var ms = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9029__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9023,chunk__9024,count__9025,i__9026,map__9029,map__9029__$1,effect,ms,dispatch,seq__9023__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9023,chunk__9024,count__9025,i__9026,map__9029,map__9029__$1,effect,ms,dispatch,seq__9023__$1,temp__4657__auto__))
,ms);
}

var G__9039 = cljs.core.next.call(null,seq__9023__$1);
var G__9040 = null;
var G__9041 = (0);
var G__9042 = (0);
seq__9023 = G__9039;
chunk__9024 = G__9040;
count__9025 = G__9041;
i__9026 = G__9042;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__9043 = cljs.core.seq.call(null,value);
var chunk__9044 = null;
var count__9045 = (0);
var i__9046 = (0);
while(true){
if((i__9046 < count__9045)){
var event = cljs.core._nth.call(null,chunk__9044,i__9046);
re_frame.router.dispatch.call(null,event);

var G__9047 = seq__9043;
var G__9048 = chunk__9044;
var G__9049 = count__9045;
var G__9050 = (i__9046 + (1));
seq__9043 = G__9047;
chunk__9044 = G__9048;
count__9045 = G__9049;
i__9046 = G__9050;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9043);
if(temp__4657__auto__){
var seq__9043__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9043__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9043__$1);
var G__9051 = cljs.core.chunk_rest.call(null,seq__9043__$1);
var G__9052 = c__7228__auto__;
var G__9053 = cljs.core.count.call(null,c__7228__auto__);
var G__9054 = (0);
seq__9043 = G__9051;
chunk__9044 = G__9052;
count__9045 = G__9053;
i__9046 = G__9054;
continue;
} else {
var event = cljs.core.first.call(null,seq__9043__$1);
re_frame.router.dispatch.call(null,event);

var G__9055 = cljs.core.next.call(null,seq__9043__$1);
var G__9056 = null;
var G__9057 = (0);
var G__9058 = (0);
seq__9043 = G__9055;
chunk__9044 = G__9056;
count__9045 = G__9057;
i__9046 = G__9058;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__9059 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__9060 = null;
var count__9061 = (0);
var i__9062 = (0);
while(true){
if((i__9062 < count__9061)){
var event = cljs.core._nth.call(null,chunk__9060,i__9062);
clear_event.call(null,event);

var G__9063 = seq__9059;
var G__9064 = chunk__9060;
var G__9065 = count__9061;
var G__9066 = (i__9062 + (1));
seq__9059 = G__9063;
chunk__9060 = G__9064;
count__9061 = G__9065;
i__9062 = G__9066;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9059);
if(temp__4657__auto__){
var seq__9059__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9059__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9059__$1);
var G__9067 = cljs.core.chunk_rest.call(null,seq__9059__$1);
var G__9068 = c__7228__auto__;
var G__9069 = cljs.core.count.call(null,c__7228__auto__);
var G__9070 = (0);
seq__9059 = G__9067;
chunk__9060 = G__9068;
count__9061 = G__9069;
i__9062 = G__9070;
continue;
} else {
var event = cljs.core.first.call(null,seq__9059__$1);
clear_event.call(null,event);

var G__9071 = cljs.core.next.call(null,seq__9059__$1);
var G__9072 = null;
var G__9073 = (0);
var G__9074 = (0);
seq__9059 = G__9071;
chunk__9060 = G__9072;
count__9061 = G__9073;
i__9062 = G__9074;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1505229166002