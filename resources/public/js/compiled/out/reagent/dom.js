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
var _STAR_always_update_STAR_8247 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_8247){
return (function (){
var _STAR_always_update_STAR_8248 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8248;
}});})(_STAR_always_update_STAR_8247))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_8247;
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
var args8249 = [];
var len__7492__auto___8252 = arguments.length;
var i__7493__auto___8253 = (0);
while(true){
if((i__7493__auto___8253 < len__7492__auto___8252)){
args8249.push((arguments[i__7493__auto___8253]));

var G__8254 = (i__7493__auto___8253 + (1));
i__7493__auto___8253 = G__8254;
continue;
} else {
}
break;
}

var G__8251 = args8249.length;
switch (G__8251) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8249.length)].join('')));

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

var seq__8260_8264 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__8261_8265 = null;
var count__8262_8266 = (0);
var i__8263_8267 = (0);
while(true){
if((i__8263_8267 < count__8262_8266)){
var v_8268 = cljs.core._nth.call(null,chunk__8261_8265,i__8263_8267);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8268);

var G__8269 = seq__8260_8264;
var G__8270 = chunk__8261_8265;
var G__8271 = count__8262_8266;
var G__8272 = (i__8263_8267 + (1));
seq__8260_8264 = G__8269;
chunk__8261_8265 = G__8270;
count__8262_8266 = G__8271;
i__8263_8267 = G__8272;
continue;
} else {
var temp__4657__auto___8273 = cljs.core.seq.call(null,seq__8260_8264);
if(temp__4657__auto___8273){
var seq__8260_8274__$1 = temp__4657__auto___8273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8260_8274__$1)){
var c__7228__auto___8275 = cljs.core.chunk_first.call(null,seq__8260_8274__$1);
var G__8276 = cljs.core.chunk_rest.call(null,seq__8260_8274__$1);
var G__8277 = c__7228__auto___8275;
var G__8278 = cljs.core.count.call(null,c__7228__auto___8275);
var G__8279 = (0);
seq__8260_8264 = G__8276;
chunk__8261_8265 = G__8277;
count__8262_8266 = G__8278;
i__8263_8267 = G__8279;
continue;
} else {
var v_8280 = cljs.core.first.call(null,seq__8260_8274__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_8280);

var G__8281 = cljs.core.next.call(null,seq__8260_8274__$1);
var G__8282 = null;
var G__8283 = (0);
var G__8284 = (0);
seq__8260_8264 = G__8281;
chunk__8261_8265 = G__8282;
count__8262_8266 = G__8283;
i__8263_8267 = G__8284;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1505229165310