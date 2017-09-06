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
var x__25759__auto__ = (((value == null))?null:value);
var m__25760__auto__ = (devtools.format._header[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,value);
} else {
var m__25760__auto____$1 = (devtools.format._header["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,value);
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
var x__25759__auto__ = (((value == null))?null:value);
var m__25760__auto__ = (devtools.format._has_body[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,value);
} else {
var m__25760__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,value);
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
var x__25759__auto__ = (((value == null))?null:value);
var m__25760__auto__ = (devtools.format._body[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,value);
} else {
var m__25760__auto____$1 = (devtools.format._body["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,value);
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
var o39750 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39750["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39751 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39751["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39752 = temp__4655__auto____$2;
return (o39752["make_template"]);
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
var o39753 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39753["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39754 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39754["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39755 = temp__4655__auto____$2;
return (o39755["make_group"]);
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
var o39756 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39756["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39757 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39757["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39758 = temp__4655__auto____$2;
return (o39758["make_reference"]);
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
var o39759 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39759["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39760 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39760["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39761 = temp__4655__auto____$2;
return (o39761["make_surrogate"]);
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
var o39762 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39762["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39763 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39763["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39764 = temp__4655__auto____$2;
return (o39764["render_markup"]);
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
var o39765 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39765["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39766 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39766["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39767 = temp__4655__auto____$2;
return (o39767["_LT_header_GT_"]);
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
var o39768 = temp__4655__auto__;
var temp__4655__auto____$1 = (o39768["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o39769 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o39769["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o39770 = temp__4655__auto____$2;
return (o39770["_LT_standard_body_GT_"]);
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
var args__26178__auto__ = [];
var len__26171__auto___39772 = arguments.length;
var i__26172__auto___39773 = (0);
while(true){
if((i__26172__auto___39773 < len__26171__auto___39772)){
args__26178__auto__.push((arguments[i__26172__auto___39773]));

var G__39774 = (i__26172__auto___39773 + (1));
i__26172__auto___39773 = G__39774;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq39771){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39771));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39776 = arguments.length;
var i__26172__auto___39777 = (0);
while(true){
if((i__26172__auto___39777 < len__26171__auto___39776)){
args__26178__auto__.push((arguments[i__26172__auto___39777]));

var G__39778 = (i__26172__auto___39777 + (1));
i__26172__auto___39777 = G__39778;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq39775){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39775));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39780 = arguments.length;
var i__26172__auto___39781 = (0);
while(true){
if((i__26172__auto___39781 < len__26171__auto___39780)){
args__26178__auto__.push((arguments[i__26172__auto___39781]));

var G__39782 = (i__26172__auto___39781 + (1));
i__26172__auto___39781 = G__39782;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq39779){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39779));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39784 = arguments.length;
var i__26172__auto___39785 = (0);
while(true){
if((i__26172__auto___39785 < len__26171__auto___39784)){
args__26178__auto__.push((arguments[i__26172__auto___39785]));

var G__39786 = (i__26172__auto___39785 + (1));
i__26172__auto___39785 = G__39786;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq39783){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39783));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39788 = arguments.length;
var i__26172__auto___39789 = (0);
while(true){
if((i__26172__auto___39789 < len__26171__auto___39788)){
args__26178__auto__.push((arguments[i__26172__auto___39789]));

var G__39790 = (i__26172__auto___39789 + (1));
i__26172__auto___39789 = G__39790;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq39787){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39787));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39792 = arguments.length;
var i__26172__auto___39793 = (0);
while(true){
if((i__26172__auto___39793 < len__26171__auto___39792)){
args__26178__auto__.push((arguments[i__26172__auto___39793]));

var G__39794 = (i__26172__auto___39793 + (1));
i__26172__auto___39793 = G__39794;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq39791){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39791));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39796 = arguments.length;
var i__26172__auto___39797 = (0);
while(true){
if((i__26172__auto___39797 < len__26171__auto___39796)){
args__26178__auto__.push((arguments[i__26172__auto___39797]));

var G__39798 = (i__26172__auto___39797 + (1));
i__26172__auto___39797 = G__39798;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq39795){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39795));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39806 = arguments.length;
var i__26172__auto___39807 = (0);
while(true){
if((i__26172__auto___39807 < len__26171__auto___39806)){
args__26178__auto__.push((arguments[i__26172__auto___39807]));

var G__39808 = (i__26172__auto___39807 + (1));
i__26172__auto___39807 = G__39808;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((1) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26179__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39802){
var vec__39803 = p__39802;
var state_override = cljs.core.nth.call(null,vec__39803,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__39803,state_override){
return (function (p1__39799_SHARP_){
return cljs.core.merge.call(null,p1__39799_SHARP_,state_override);
});})(vec__39803,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq39800){
var G__39801 = cljs.core.first.call(null,seq39800);
var seq39800__$1 = cljs.core.next.call(null,seq39800);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__39801,seq39800__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39810 = arguments.length;
var i__26172__auto___39811 = (0);
while(true){
if((i__26172__auto___39811 < len__26171__auto___39810)){
args__26178__auto__.push((arguments[i__26172__auto___39811]));

var G__39812 = (i__26172__auto___39811 + (1));
i__26172__auto___39811 = G__39812;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq39809){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39809));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__26178__auto__ = [];
var len__26171__auto___39815 = arguments.length;
var i__26172__auto___39816 = (0);
while(true){
if((i__26172__auto___39816 < len__26171__auto___39815)){
args__26178__auto__.push((arguments[i__26172__auto___39816]));

var G__39817 = (i__26172__auto___39816 + (1));
i__26172__auto___39816 = G__39817;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((1) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26179__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq39813){
var G__39814 = cljs.core.first.call(null,seq39813);
var seq39813__$1 = cljs.core.next.call(null,seq39813);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__39814,seq39813__$1);
});


//# sourceMappingURL=format.js.map?rel=1504172211028