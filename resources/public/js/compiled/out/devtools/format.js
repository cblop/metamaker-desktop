// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._header[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._header["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._has_body[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__7080__auto__ = (((value == null))?null:value);
var m__7081__auto__ = (devtools.format._body[goog.typeOf(x__7080__auto__)]);
if(!((m__7081__auto__ == null))){
return m__7081__auto__.call(null,value);
} else {
var m__7081__auto____$1 = (devtools.format._body["_"]);
if(!((m__7081__auto____$1 == null))){
return m__7081__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o12180 = temp__4655__auto__;
var temp__4655__auto____$1 = (o12180["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o12181 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o12181["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o12182 = temp__4655__auto____$2;
return (o12182["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o12183 = temp__4655__auto__;
var temp__4655__auto____$1 = (o12183["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o12184 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o12184["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o12185 = temp__4655__auto____$2;
return (o12185["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o12186 = temp__4655__auto__;
var temp__4655__auto____$1 = (o12186["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o12187 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o12187["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o12188 = temp__4655__auto____$2;
return (o12188["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o12189 = temp__4655__auto__;
var temp__4655__auto____$1 = (o12189["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o12190 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o12190["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o12191 = temp__4655__auto____$2;
return (o12191["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o12192 = temp__4655__auto__;
var temp__4655__auto____$1 = (o12192["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o12193 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o12193["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o12194 = temp__4655__auto____$2;
return (o12194["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o12195 = temp__4655__auto__;
var temp__4655__auto____$1 = (o12195["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o12196 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o12196["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o12197 = temp__4655__auto____$2;
return (o12197["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o12198 = temp__4655__auto__;
var temp__4655__auto____$1 = (o12198["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o12199 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o12199["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o12200 = temp__4655__auto____$2;
return (o12200["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12202 = arguments.length;
var i__7493__auto___12203 = (0);
while(true){
if((i__7493__auto___12203 < len__7492__auto___12202)){
args__7499__auto__.push((arguments[i__7493__auto___12203]));

var G__12204 = (i__7493__auto___12203 + (1));
i__7493__auto___12203 = G__12204;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq12201){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12201));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12206 = arguments.length;
var i__7493__auto___12207 = (0);
while(true){
if((i__7493__auto___12207 < len__7492__auto___12206)){
args__7499__auto__.push((arguments[i__7493__auto___12207]));

var G__12208 = (i__7493__auto___12207 + (1));
i__7493__auto___12207 = G__12208;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq12205){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12205));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12210 = arguments.length;
var i__7493__auto___12211 = (0);
while(true){
if((i__7493__auto___12211 < len__7492__auto___12210)){
args__7499__auto__.push((arguments[i__7493__auto___12211]));

var G__12212 = (i__7493__auto___12211 + (1));
i__7493__auto___12211 = G__12212;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq12209){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12209));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12214 = arguments.length;
var i__7493__auto___12215 = (0);
while(true){
if((i__7493__auto___12215 < len__7492__auto___12214)){
args__7499__auto__.push((arguments[i__7493__auto___12215]));

var G__12216 = (i__7493__auto___12215 + (1));
i__7493__auto___12215 = G__12216;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq12213){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12213));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12218 = arguments.length;
var i__7493__auto___12219 = (0);
while(true){
if((i__7493__auto___12219 < len__7492__auto___12218)){
args__7499__auto__.push((arguments[i__7493__auto___12219]));

var G__12220 = (i__7493__auto___12219 + (1));
i__7493__auto___12219 = G__12220;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq12217){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12217));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12222 = arguments.length;
var i__7493__auto___12223 = (0);
while(true){
if((i__7493__auto___12223 < len__7492__auto___12222)){
args__7499__auto__.push((arguments[i__7493__auto___12223]));

var G__12224 = (i__7493__auto___12223 + (1));
i__7493__auto___12223 = G__12224;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq12221){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12221));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12226 = arguments.length;
var i__7493__auto___12227 = (0);
while(true){
if((i__7493__auto___12227 < len__7492__auto___12226)){
args__7499__auto__.push((arguments[i__7493__auto___12227]));

var G__12228 = (i__7493__auto___12227 + (1));
i__7493__auto___12227 = G__12228;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq12225){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12225));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12236 = arguments.length;
var i__7493__auto___12237 = (0);
while(true){
if((i__7493__auto___12237 < len__7492__auto___12236)){
args__7499__auto__.push((arguments[i__7493__auto___12237]));

var G__12238 = (i__7493__auto___12237 + (1));
i__7493__auto___12237 = G__12238;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__12232){
var vec__12233 = p__12232;
var state_override = cljs.core.nth.call(null,vec__12233,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__12233,state_override){
return (function (p1__12229_SHARP_){
return cljs.core.merge.call(null,p1__12229_SHARP_,state_override);
});})(vec__12233,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq12230){
var G__12231 = cljs.core.first.call(null,seq12230);
var seq12230__$1 = cljs.core.next.call(null,seq12230);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__12231,seq12230__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12240 = arguments.length;
var i__7493__auto___12241 = (0);
while(true){
if((i__7493__auto___12241 < len__7492__auto___12240)){
args__7499__auto__.push((arguments[i__7493__auto___12241]));

var G__12242 = (i__7493__auto___12241 + (1));
i__7493__auto___12241 = G__12242;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq12239){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12239));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___12245 = arguments.length;
var i__7493__auto___12246 = (0);
while(true){
if((i__7493__auto___12246 < len__7492__auto___12245)){
args__7499__auto__.push((arguments[i__7493__auto___12246]));

var G__12247 = (i__7493__auto___12246 + (1));
i__7493__auto___12246 = G__12247;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq12243){
var G__12244 = cljs.core.first.call(null,seq12243);
var seq12243__$1 = cljs.core.next.call(null,seq12243);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__12244,seq12243__$1);
});


//# sourceMappingURL=format.js.map?rel=1505229172258