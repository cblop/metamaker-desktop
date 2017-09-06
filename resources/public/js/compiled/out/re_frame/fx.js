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
var seq__27431 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__27432 = null;
var count__27433 = (0);
var i__27434 = (0);
while(true){
if((i__27434 < count__27433)){
var vec__27435 = cljs.core._nth.call(null,chunk__27432,i__27434);
var effect_k = cljs.core.nth.call(null,vec__27435,(0),null);
var value = cljs.core.nth.call(null,vec__27435,(1),null);
var temp__4655__auto___27441 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27441)){
var effect_fn_27442 = temp__4655__auto___27441;
effect_fn_27442.call(null,value);
} else {
}

var G__27443 = seq__27431;
var G__27444 = chunk__27432;
var G__27445 = count__27433;
var G__27446 = (i__27434 + (1));
seq__27431 = G__27443;
chunk__27432 = G__27444;
count__27433 = G__27445;
i__27434 = G__27446;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27431);
if(temp__4657__auto__){
var seq__27431__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27431__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__27431__$1);
var G__27447 = cljs.core.chunk_rest.call(null,seq__27431__$1);
var G__27448 = c__25907__auto__;
var G__27449 = cljs.core.count.call(null,c__25907__auto__);
var G__27450 = (0);
seq__27431 = G__27447;
chunk__27432 = G__27448;
count__27433 = G__27449;
i__27434 = G__27450;
continue;
} else {
var vec__27438 = cljs.core.first.call(null,seq__27431__$1);
var effect_k = cljs.core.nth.call(null,vec__27438,(0),null);
var value = cljs.core.nth.call(null,vec__27438,(1),null);
var temp__4655__auto___27451 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___27451)){
var effect_fn_27452 = temp__4655__auto___27451;
effect_fn_27452.call(null,value);
} else {
}

var G__27453 = cljs.core.next.call(null,seq__27431__$1);
var G__27454 = null;
var G__27455 = (0);
var G__27456 = (0);
seq__27431 = G__27453;
chunk__27432 = G__27454;
count__27433 = G__27455;
i__27434 = G__27456;
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
var seq__27457 = cljs.core.seq.call(null,value);
var chunk__27458 = null;
var count__27459 = (0);
var i__27460 = (0);
while(true){
if((i__27460 < count__27459)){
var map__27461 = cljs.core._nth.call(null,chunk__27458,i__27460);
var map__27461__$1 = ((((!((map__27461 == null)))?((((map__27461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27461):map__27461);
var effect = map__27461__$1;
var ms = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27461__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27457,chunk__27458,count__27459,i__27460,map__27461,map__27461__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27457,chunk__27458,count__27459,i__27460,map__27461,map__27461__$1,effect,ms,dispatch))
,ms);
}

var G__27465 = seq__27457;
var G__27466 = chunk__27458;
var G__27467 = count__27459;
var G__27468 = (i__27460 + (1));
seq__27457 = G__27465;
chunk__27458 = G__27466;
count__27459 = G__27467;
i__27460 = G__27468;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27457);
if(temp__4657__auto__){
var seq__27457__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27457__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__27457__$1);
var G__27469 = cljs.core.chunk_rest.call(null,seq__27457__$1);
var G__27470 = c__25907__auto__;
var G__27471 = cljs.core.count.call(null,c__25907__auto__);
var G__27472 = (0);
seq__27457 = G__27469;
chunk__27458 = G__27470;
count__27459 = G__27471;
i__27460 = G__27472;
continue;
} else {
var map__27463 = cljs.core.first.call(null,seq__27457__$1);
var map__27463__$1 = ((((!((map__27463 == null)))?((((map__27463.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27463.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27463):map__27463);
var effect = map__27463__$1;
var ms = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__27463__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__27457,chunk__27458,count__27459,i__27460,map__27463,map__27463__$1,effect,ms,dispatch,seq__27457__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__27457,chunk__27458,count__27459,i__27460,map__27463,map__27463__$1,effect,ms,dispatch,seq__27457__$1,temp__4657__auto__))
,ms);
}

var G__27473 = cljs.core.next.call(null,seq__27457__$1);
var G__27474 = null;
var G__27475 = (0);
var G__27476 = (0);
seq__27457 = G__27473;
chunk__27458 = G__27474;
count__27459 = G__27475;
i__27460 = G__27476;
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

var seq__27477 = cljs.core.seq.call(null,value);
var chunk__27478 = null;
var count__27479 = (0);
var i__27480 = (0);
while(true){
if((i__27480 < count__27479)){
var event = cljs.core._nth.call(null,chunk__27478,i__27480);
re_frame.router.dispatch.call(null,event);

var G__27481 = seq__27477;
var G__27482 = chunk__27478;
var G__27483 = count__27479;
var G__27484 = (i__27480 + (1));
seq__27477 = G__27481;
chunk__27478 = G__27482;
count__27479 = G__27483;
i__27480 = G__27484;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27477);
if(temp__4657__auto__){
var seq__27477__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27477__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__27477__$1);
var G__27485 = cljs.core.chunk_rest.call(null,seq__27477__$1);
var G__27486 = c__25907__auto__;
var G__27487 = cljs.core.count.call(null,c__25907__auto__);
var G__27488 = (0);
seq__27477 = G__27485;
chunk__27478 = G__27486;
count__27479 = G__27487;
i__27480 = G__27488;
continue;
} else {
var event = cljs.core.first.call(null,seq__27477__$1);
re_frame.router.dispatch.call(null,event);

var G__27489 = cljs.core.next.call(null,seq__27477__$1);
var G__27490 = null;
var G__27491 = (0);
var G__27492 = (0);
seq__27477 = G__27489;
chunk__27478 = G__27490;
count__27479 = G__27491;
i__27480 = G__27492;
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
var seq__27493 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__27494 = null;
var count__27495 = (0);
var i__27496 = (0);
while(true){
if((i__27496 < count__27495)){
var event = cljs.core._nth.call(null,chunk__27494,i__27496);
clear_event.call(null,event);

var G__27497 = seq__27493;
var G__27498 = chunk__27494;
var G__27499 = count__27495;
var G__27500 = (i__27496 + (1));
seq__27493 = G__27497;
chunk__27494 = G__27498;
count__27495 = G__27499;
i__27496 = G__27500;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27493);
if(temp__4657__auto__){
var seq__27493__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27493__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__27493__$1);
var G__27501 = cljs.core.chunk_rest.call(null,seq__27493__$1);
var G__27502 = c__25907__auto__;
var G__27503 = cljs.core.count.call(null,c__25907__auto__);
var G__27504 = (0);
seq__27493 = G__27501;
chunk__27494 = G__27502;
count__27495 = G__27503;
i__27496 = G__27504;
continue;
} else {
var event = cljs.core.first.call(null,seq__27493__$1);
clear_event.call(null,event);

var G__27505 = cljs.core.next.call(null,seq__27493__$1);
var G__27506 = null;
var G__27507 = (0);
var G__27508 = (0);
seq__27493 = G__27505;
chunk__27494 = G__27506;
count__27495 = G__27507;
i__27496 = G__27508;
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

//# sourceMappingURL=fx.js.map?rel=1504172195509