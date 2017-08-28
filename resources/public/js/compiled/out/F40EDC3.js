goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('metamaker_desktop.cljs');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__49927__delegate = function (x){
if(cljs.core.truth_(metamaker_desktop.cljs.mount_root)){
return cljs.core.apply.call(null,metamaker_desktop.cljs.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metamaker-desktop.cljs/mount-root' is missing");
}
};
var G__49927 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__49928__i = 0, G__49928__a = new Array(arguments.length -  0);
while (G__49928__i < G__49928__a.length) {G__49928__a[G__49928__i] = arguments[G__49928__i + 0]; ++G__49928__i;}
  x = new cljs.core.IndexedSeq(G__49928__a,0);
} 
return G__49927__delegate.call(this,x);};
G__49927.cljs$lang$maxFixedArity = 0;
G__49927.cljs$lang$applyTo = (function (arglist__49929){
var x = cljs.core.seq(arglist__49929);
return G__49927__delegate(x);
});
G__49927.cljs$core$IFn$_invoke$arity$variadic = G__49927__delegate;
return G__49927;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
