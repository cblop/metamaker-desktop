// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__8512__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8512 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8513__i = 0, G__8513__a = new Array(arguments.length -  0);
while (G__8513__i < G__8513__a.length) {G__8513__a[G__8513__i] = arguments[G__8513__i + 0]; ++G__8513__i;}
  args = new cljs.core.IndexedSeq(G__8513__a,0);
} 
return G__8512__delegate.call(this,args);};
G__8512.cljs$lang$maxFixedArity = 0;
G__8512.cljs$lang$applyTo = (function (arglist__8514){
var args = cljs.core.seq(arglist__8514);
return G__8512__delegate(args);
});
G__8512.cljs$core$IFn$_invoke$arity$variadic = G__8512__delegate;
return G__8512;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__8515__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__8515 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8516__i = 0, G__8516__a = new Array(arguments.length -  0);
while (G__8516__i < G__8516__a.length) {G__8516__a[G__8516__i] = arguments[G__8516__i + 0]; ++G__8516__i;}
  args = new cljs.core.IndexedSeq(G__8516__a,0);
} 
return G__8515__delegate.call(this,args);};
G__8515.cljs$lang$maxFixedArity = 0;
G__8515.cljs$lang$applyTo = (function (arglist__8517){
var args = cljs.core.seq(arglist__8517);
return G__8515__delegate(args);
});
G__8515.cljs$core$IFn$_invoke$arity$variadic = G__8515__delegate;
return G__8515;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1502809959247