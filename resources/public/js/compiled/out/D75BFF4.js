goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('metamaker_desktop.cljs');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__55220__delegate = function (x){
if(cljs.core.truth_(metamaker_desktop.cljs.mount_root)){
return cljs.core.apply.call(null,metamaker_desktop.cljs.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metamaker-desktop.cljs/mount-root' is missing");
}
};
var G__55220 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__55221__i = 0, G__55221__a = new Array(arguments.length -  0);
while (G__55221__i < G__55221__a.length) {G__55221__a[G__55221__i] = arguments[G__55221__i + 0]; ++G__55221__i;}
  x = new cljs.core.IndexedSeq(G__55221__a,0);
} 
return G__55220__delegate.call(this,x);};
G__55220.cljs$lang$maxFixedArity = 0;
G__55220.cljs$lang$applyTo = (function (arglist__55222){
var x = cljs.core.seq(arglist__55222);
return G__55220__delegate(x);
});
G__55220.cljs$core$IFn$_invoke$arity$variadic = G__55220__delegate;
return G__55220;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
