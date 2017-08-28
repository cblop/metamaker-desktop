goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('metamaker_desktop.cljs');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__56530__delegate = function (x){
if(cljs.core.truth_(metamaker_desktop.cljs.mount_root)){
return cljs.core.apply.call(null,metamaker_desktop.cljs.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metamaker-desktop.cljs/mount-root' is missing");
}
};
var G__56530 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__56531__i = 0, G__56531__a = new Array(arguments.length -  0);
while (G__56531__i < G__56531__a.length) {G__56531__a[G__56531__i] = arguments[G__56531__i + 0]; ++G__56531__i;}
  x = new cljs.core.IndexedSeq(G__56531__a,0);
} 
return G__56530__delegate.call(this,x);};
G__56530.cljs$lang$maxFixedArity = 0;
G__56530.cljs$lang$applyTo = (function (arglist__56532){
var x = cljs.core.seq(arglist__56532);
return G__56530__delegate(x);
});
G__56530.cljs$core$IFn$_invoke$arity$variadic = G__56530__delegate;
return G__56530;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
