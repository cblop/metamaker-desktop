// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6417__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_8929 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8929){
return (function (){
var _STAR_always_update_STAR_8930 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8930;
}});})(_STAR_always_update_STAR_8929))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8929;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args8931 = [];
var len__7492__auto___8934 = arguments.length;
var i__7493__auto___8935 = (0);
while(true){
if((i__7493__auto___8935 < len__7492__auto___8934)){
args8931.push((arguments[i__7493__auto___8935]));

var G__8936 = (i__7493__auto___8935 + (1));
i__7493__auto___8935 = G__8936;
continue;
} else {
}
break;
}

var G__8933 = args8931.length;
switch (G__8933) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8931.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__8942_8946 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8943_8947 = null;
var count__8944_8948 = (0);
var i__8945_8949 = (0);
while(true){
if((i__8945_8949 < count__8944_8948)){
var v_8950 = cljs.core._nth.call(null,chunk__8943_8947,i__8945_8949);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8950);

var G__8951 = seq__8942_8946;
var G__8952 = chunk__8943_8947;
var G__8953 = count__8944_8948;
var G__8954 = (i__8945_8949 + (1));
seq__8942_8946 = G__8951;
chunk__8943_8947 = G__8952;
count__8944_8948 = G__8953;
i__8945_8949 = G__8954;
continue;
} else {
var temp__4657__auto___8955 = cljs.core.seq.call(null,seq__8942_8946);
if(temp__4657__auto___8955){
var seq__8942_8956__$1 = temp__4657__auto___8955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8942_8956__$1)){
var c__7228__auto___8957 = cljs.core.chunk_first.call(null,seq__8942_8956__$1);
var G__8958 = cljs.core.chunk_rest.call(null,seq__8942_8956__$1);
var G__8959 = c__7228__auto___8957;
var G__8960 = cljs.core.count.call(null,c__7228__auto___8957);
var G__8961 = (0);
seq__8942_8946 = G__8958;
chunk__8943_8947 = G__8959;
count__8944_8948 = G__8960;
i__8945_8949 = G__8961;
continue;
} else {
var v_8962 = cljs.core.first.call(null,seq__8942_8956__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8962);

var G__8963 = cljs.core.next.call(null,seq__8942_8956__$1);
var G__8964 = null;
var G__8965 = (0);
var G__8966 = (0);
seq__8942_8946 = G__8963;
chunk__8943_8947 = G__8964;
count__8944_8948 = G__8965;
i__8945_8949 = G__8966;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1502809960994