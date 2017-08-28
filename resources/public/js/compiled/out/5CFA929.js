goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('metamaker_desktop.cljs');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__56326__delegate = function (x){
if(cljs.core.truth_(metamaker_desktop.cljs.mount_root)){
return cljs.core.apply.call(null,metamaker_desktop.cljs.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'metamaker-desktop.cljs/mount-root' is missing");
}
};
var G__56326 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__56327__i = 0, G__56327__a = new Array(arguments.length -  0);
while (G__56327__i < G__56327__a.length) {G__56327__a[G__56327__i] = arguments[G__56327__i + 0]; ++G__56327__i;}
  x = new cljs.core.IndexedSeq(G__56327__a,0);
} 
return G__56326__delegate.call(this,x);};
G__56326.cljs$lang$maxFixedArity = 0;
G__56326.cljs$lang$applyTo = (function (arglist__56328){
var x = cljs.core.seq(arglist__56328);
return G__56326__delegate(x);
});
G__56326.cljs$core$IFn$_invoke$arity$variadic = G__56326__delegate;
return G__56326;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
