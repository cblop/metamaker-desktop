goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('metamaker_desktop.cljs');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__52907__delegate = function (x){
if(cljs.core.truth_(metamaker_desktop.cljs.mount_root)){
return cljs.core.apply.call(null,metamaker_desktop.cljs.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metamaker-desktop.cljs/mount-root' is missing");
}
};
var G__52907 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__52908__i = 0, G__52908__a = new Array(arguments.length -  0);
while (G__52908__i < G__52908__a.length) {G__52908__a[G__52908__i] = arguments[G__52908__i + 0]; ++G__52908__i;}
  x = new cljs.core.IndexedSeq(G__52908__a,0);
} 
return G__52907__delegate.call(this,x);};
G__52907.cljs$lang$maxFixedArity = 0;
G__52907.cljs$lang$applyTo = (function (arglist__52909){
var x = cljs.core.seq(arglist__52909);
return G__52907__delegate(x);
});
G__52907.cljs$core$IFn$_invoke$arity$variadic = G__52907__delegate;
return G__52907;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));