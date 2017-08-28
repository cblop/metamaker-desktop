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
var seq__9679 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9680 = null;
var count__9681 = (0);
var i__9682 = (0);
while(true){
if((i__9682 < count__9681)){
var vec__9683 = cljs.core._nth.call(null,chunk__9680,i__9682);
var effect_k = cljs.core.nth.call(null,vec__9683,(0),null);
var value = cljs.core.nth.call(null,vec__9683,(1),null);
var temp__4655__auto___9689 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___9689)){
var effect_fn_9690 = temp__4655__auto___9689;
effect_fn_9690.call(null,value);
} else {
}

var G__9691 = seq__9679;
var G__9692 = chunk__9680;
var G__9693 = count__9681;
var G__9694 = (i__9682 + (1));
seq__9679 = G__9691;
chunk__9680 = G__9692;
count__9681 = G__9693;
i__9682 = G__9694;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9679);
if(temp__4657__auto__){
var seq__9679__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9679__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9679__$1);
var G__9695 = cljs.core.chunk_rest.call(null,seq__9679__$1);
var G__9696 = c__7228__auto__;
var G__9697 = cljs.core.count.call(null,c__7228__auto__);
var G__9698 = (0);
seq__9679 = G__9695;
chunk__9680 = G__9696;
count__9681 = G__9697;
i__9682 = G__9698;
continue;
} else {
var vec__9686 = cljs.core.first.call(null,seq__9679__$1);
var effect_k = cljs.core.nth.call(null,vec__9686,(0),null);
var value = cljs.core.nth.call(null,vec__9686,(1),null);
var temp__4655__auto___9699 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___9699)){
var effect_fn_9700 = temp__4655__auto___9699;
effect_fn_9700.call(null,value);
} else {
}

var G__9701 = cljs.core.next.call(null,seq__9679__$1);
var G__9702 = null;
var G__9703 = (0);
var G__9704 = (0);
seq__9679 = G__9701;
chunk__9680 = G__9702;
count__9681 = G__9703;
i__9682 = G__9704;
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
var seq__9705 = cljs.core.seq.call(null,value);
var chunk__9706 = null;
var count__9707 = (0);
var i__9708 = (0);
while(true){
if((i__9708 < count__9707)){
var map__9709 = cljs.core._nth.call(null,chunk__9706,i__9708);
var map__9709__$1 = ((((!((map__9709 == null)))?((((map__9709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9709):map__9709);
var effect = map__9709__$1;
var ms = cljs.core.get.call(null,map__9709__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9709__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9705,chunk__9706,count__9707,i__9708,map__9709,map__9709__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9705,chunk__9706,count__9707,i__9708,map__9709,map__9709__$1,effect,ms,dispatch))
,ms);
}

var G__9713 = seq__9705;
var G__9714 = chunk__9706;
var G__9715 = count__9707;
var G__9716 = (i__9708 + (1));
seq__9705 = G__9713;
chunk__9706 = G__9714;
count__9707 = G__9715;
i__9708 = G__9716;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9705);
if(temp__4657__auto__){
var seq__9705__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9705__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9705__$1);
var G__9717 = cljs.core.chunk_rest.call(null,seq__9705__$1);
var G__9718 = c__7228__auto__;
var G__9719 = cljs.core.count.call(null,c__7228__auto__);
var G__9720 = (0);
seq__9705 = G__9717;
chunk__9706 = G__9718;
count__9707 = G__9719;
i__9708 = G__9720;
continue;
} else {
var map__9711 = cljs.core.first.call(null,seq__9705__$1);
var map__9711__$1 = ((((!((map__9711 == null)))?((((map__9711.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9711.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9711):map__9711);
var effect = map__9711__$1;
var ms = cljs.core.get.call(null,map__9711__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9711__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9705,chunk__9706,count__9707,i__9708,map__9711,map__9711__$1,effect,ms,dispatch,seq__9705__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9705,chunk__9706,count__9707,i__9708,map__9711,map__9711__$1,effect,ms,dispatch,seq__9705__$1,temp__4657__auto__))
,ms);
}

var G__9721 = cljs.core.next.call(null,seq__9705__$1);
var G__9722 = null;
var G__9723 = (0);
var G__9724 = (0);
seq__9705 = G__9721;
chunk__9706 = G__9722;
count__9707 = G__9723;
i__9708 = G__9724;
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

var seq__9725 = cljs.core.seq.call(null,value);
var chunk__9726 = null;
var count__9727 = (0);
var i__9728 = (0);
while(true){
if((i__9728 < count__9727)){
var event = cljs.core._nth.call(null,chunk__9726,i__9728);
re_frame.router.dispatch.call(null,event);

var G__9729 = seq__9725;
var G__9730 = chunk__9726;
var G__9731 = count__9727;
var G__9732 = (i__9728 + (1));
seq__9725 = G__9729;
chunk__9726 = G__9730;
count__9727 = G__9731;
i__9728 = G__9732;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9725);
if(temp__4657__auto__){
var seq__9725__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9725__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9725__$1);
var G__9733 = cljs.core.chunk_rest.call(null,seq__9725__$1);
var G__9734 = c__7228__auto__;
var G__9735 = cljs.core.count.call(null,c__7228__auto__);
var G__9736 = (0);
seq__9725 = G__9733;
chunk__9726 = G__9734;
count__9727 = G__9735;
i__9728 = G__9736;
continue;
} else {
var event = cljs.core.first.call(null,seq__9725__$1);
re_frame.router.dispatch.call(null,event);

var G__9737 = cljs.core.next.call(null,seq__9725__$1);
var G__9738 = null;
var G__9739 = (0);
var G__9740 = (0);
seq__9725 = G__9737;
chunk__9726 = G__9738;
count__9727 = G__9739;
i__9728 = G__9740;
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
var seq__9741 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__9742 = null;
var count__9743 = (0);
var i__9744 = (0);
while(true){
if((i__9744 < count__9743)){
var event = cljs.core._nth.call(null,chunk__9742,i__9744);
clear_event.call(null,event);

var G__9745 = seq__9741;
var G__9746 = chunk__9742;
var G__9747 = count__9743;
var G__9748 = (i__9744 + (1));
seq__9741 = G__9745;
chunk__9742 = G__9746;
count__9743 = G__9747;
i__9744 = G__9748;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9741);
if(temp__4657__auto__){
var seq__9741__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9741__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9741__$1);
var G__9749 = cljs.core.chunk_rest.call(null,seq__9741__$1);
var G__9750 = c__7228__auto__;
var G__9751 = cljs.core.count.call(null,c__7228__auto__);
var G__9752 = (0);
seq__9741 = G__9749;
chunk__9742 = G__9750;
count__9743 = G__9751;
i__9744 = G__9752;
continue;
} else {
var event = cljs.core.first.call(null,seq__9741__$1);
clear_event.call(null,event);

var G__9753 = cljs.core.next.call(null,seq__9741__$1);
var G__9754 = null;
var G__9755 = (0);
var G__9756 = (0);
seq__9741 = G__9753;
chunk__9742 = G__9754;
count__9743 = G__9755;
i__9744 = G__9756;
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

//# sourceMappingURL=fx.js.map?rel=1502809962248