goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('metamaker_desktop.cljs');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__58979__delegate = function (x){
if(cljs.core.truth_(metamaker_desktop.cljs.mount_root)){
return cljs.core.apply.call(null,metamaker_desktop.cljs.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metamaker-desktop.cljs/mount-root' is missing");
}
};
var G__58979 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__58980__i = 0, G__58980__a = new Array(arguments.length -  0);
while (G__58980__i < G__58980__a.length) {G__58980__a[G__58980__i] = arguments[G__58980__i + 0]; ++G__58980__i;}
  x = new cljs.core.IndexedSeq(G__58980__a,0);
} 
return G__58979__delegate.call(this,x);};
G__58979.cljs$lang$maxFixedArity = 0;
G__58979.cljs$lang$applyTo = (function (arglist__58981){
var x = cljs.core.seq(arglist__58981);
return G__58979__delegate(x);
});
G__58979.cljs$core$IFn$_invoke$arity$variadic = G__58979__delegate;
return G__58979;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));