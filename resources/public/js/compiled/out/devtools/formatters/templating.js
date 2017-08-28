// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x14571_14572 = value;
x14571_14572.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x14576_14577 = value;
x14576_14577.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x14581_14582 = value;
x14581_14582.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__6405__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__6405__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__6405__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14590 = arguments.length;
var i__7493__auto___14591 = (0);
while(true){
if((i__7493__auto___14591 < len__7492__auto___14590)){
args__7499__auto__.push((arguments[i__7493__auto___14591]));

var G__14592 = (i__7493__auto___14591 + (1));
i__7493__auto___14591 = G__14592;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__14586_14593 = cljs.core.seq.call(null,items);
var chunk__14587_14594 = null;
var count__14588_14595 = (0);
var i__14589_14596 = (0);
while(true){
if((i__14589_14596 < count__14588_14595)){
var item_14597 = cljs.core._nth.call(null,chunk__14587_14594,i__14589_14596);
if(cljs.core.some_QMARK_.call(null,item_14597)){
if(cljs.core.coll_QMARK_.call(null,item_14597)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14597)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14597));
}
} else {
}

var G__14598 = seq__14586_14593;
var G__14599 = chunk__14587_14594;
var G__14600 = count__14588_14595;
var G__14601 = (i__14589_14596 + (1));
seq__14586_14593 = G__14598;
chunk__14587_14594 = G__14599;
count__14588_14595 = G__14600;
i__14589_14596 = G__14601;
continue;
} else {
var temp__4657__auto___14602 = cljs.core.seq.call(null,seq__14586_14593);
if(temp__4657__auto___14602){
var seq__14586_14603__$1 = temp__4657__auto___14602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14586_14603__$1)){
var c__7228__auto___14604 = cljs.core.chunk_first.call(null,seq__14586_14603__$1);
var G__14605 = cljs.core.chunk_rest.call(null,seq__14586_14603__$1);
var G__14606 = c__7228__auto___14604;
var G__14607 = cljs.core.count.call(null,c__7228__auto___14604);
var G__14608 = (0);
seq__14586_14593 = G__14605;
chunk__14587_14594 = G__14606;
count__14588_14595 = G__14607;
i__14589_14596 = G__14608;
continue;
} else {
var item_14609 = cljs.core.first.call(null,seq__14586_14603__$1);
if(cljs.core.some_QMARK_.call(null,item_14609)){
if(cljs.core.coll_QMARK_.call(null,item_14609)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14609)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14609));
}
} else {
}

var G__14610 = cljs.core.next.call(null,seq__14586_14603__$1);
var G__14611 = null;
var G__14612 = (0);
var G__14613 = (0);
seq__14586_14593 = G__14610;
chunk__14587_14594 = G__14611;
count__14588_14595 = G__14612;
i__14589_14596 = G__14613;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq14585){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14585));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14621 = arguments.length;
var i__7493__auto___14622 = (0);
while(true){
if((i__7493__auto___14622 < len__7492__auto___14621)){
args__7499__auto__.push((arguments[i__7493__auto___14622]));

var G__14623 = (i__7493__auto___14622 + (1));
i__7493__auto___14622 = G__14623;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__14617_14624 = cljs.core.seq.call(null,children);
var chunk__14618_14625 = null;
var count__14619_14626 = (0);
var i__14620_14627 = (0);
while(true){
if((i__14620_14627 < count__14619_14626)){
var child_14628 = cljs.core._nth.call(null,chunk__14618_14625,i__14620_14627);
if(cljs.core.some_QMARK_.call(null,child_14628)){
if(cljs.core.coll_QMARK_.call(null,child_14628)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14628))));
} else {
var temp__4655__auto___14629 = devtools.formatters.helpers.pref.call(null,child_14628);
if(cljs.core.truth_(temp__4655__auto___14629)){
var child_value_14630 = temp__4655__auto___14629;
template.push(child_value_14630);
} else {
}
}
} else {
}

var G__14631 = seq__14617_14624;
var G__14632 = chunk__14618_14625;
var G__14633 = count__14619_14626;
var G__14634 = (i__14620_14627 + (1));
seq__14617_14624 = G__14631;
chunk__14618_14625 = G__14632;
count__14619_14626 = G__14633;
i__14620_14627 = G__14634;
continue;
} else {
var temp__4657__auto___14635 = cljs.core.seq.call(null,seq__14617_14624);
if(temp__4657__auto___14635){
var seq__14617_14636__$1 = temp__4657__auto___14635;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14617_14636__$1)){
var c__7228__auto___14637 = cljs.core.chunk_first.call(null,seq__14617_14636__$1);
var G__14638 = cljs.core.chunk_rest.call(null,seq__14617_14636__$1);
var G__14639 = c__7228__auto___14637;
var G__14640 = cljs.core.count.call(null,c__7228__auto___14637);
var G__14641 = (0);
seq__14617_14624 = G__14638;
chunk__14618_14625 = G__14639;
count__14619_14626 = G__14640;
i__14620_14627 = G__14641;
continue;
} else {
var child_14642 = cljs.core.first.call(null,seq__14617_14636__$1);
if(cljs.core.some_QMARK_.call(null,child_14642)){
if(cljs.core.coll_QMARK_.call(null,child_14642)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14642))));
} else {
var temp__4655__auto___14643 = devtools.formatters.helpers.pref.call(null,child_14642);
if(cljs.core.truth_(temp__4655__auto___14643)){
var child_value_14644 = temp__4655__auto___14643;
template.push(child_value_14644);
} else {
}
}
} else {
}

var G__14645 = cljs.core.next.call(null,seq__14617_14636__$1);
var G__14646 = null;
var G__14647 = (0);
var G__14648 = (0);
seq__14617_14624 = G__14645;
chunk__14618_14625 = G__14646;
count__14619_14626 = G__14647;
i__14620_14627 = G__14648;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq14614){
var G__14615 = cljs.core.first.call(null,seq14614);
var seq14614__$1 = cljs.core.next.call(null,seq14614);
var G__14616 = cljs.core.first.call(null,seq14614__$1);
var seq14614__$2 = cljs.core.next.call(null,seq14614__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__14615,G__14616,seq14614__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14651 = arguments.length;
var i__7493__auto___14652 = (0);
while(true){
if((i__7493__auto___14652 < len__7492__auto___14651)){
args__7499__auto__.push((arguments[i__7493__auto___14652]));

var G__14653 = (i__7493__auto___14652 + (1));
i__7493__auto___14652 = G__14653;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq14649){
var G__14650 = cljs.core.first.call(null,seq14649);
var seq14649__$1 = cljs.core.next.call(null,seq14649);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14650,seq14649__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14656 = arguments.length;
var i__7493__auto___14657 = (0);
while(true){
if((i__7493__auto___14657 < len__7492__auto___14656)){
args__7499__auto__.push((arguments[i__7493__auto___14657]));

var G__14658 = (i__7493__auto___14657 + (1));
i__7493__auto___14657 = G__14658;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq14654){
var G__14655 = cljs.core.first.call(null,seq14654);
var seq14654__$1 = cljs.core.next.call(null,seq14654);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14655,seq14654__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args14659 = [];
var len__7492__auto___14664 = arguments.length;
var i__7493__auto___14665 = (0);
while(true){
if((i__7493__auto___14665 < len__7492__auto___14664)){
args14659.push((arguments[i__7493__auto___14665]));

var G__14666 = (i__7493__auto___14665 + (1));
i__7493__auto___14665 = G__14666;
continue;
} else {
}
break;
}

var G__14661 = args14659.length;
switch (G__14661) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14659.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj14663 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6417__auto__ = start_index;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (0);
}
})()};
return obj14663;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__7499__auto__ = [];
var len__7492__auto___14674 = arguments.length;
var i__7493__auto___14675 = (0);
while(true){
if((i__7493__auto___14675 < len__7492__auto___14674)){
args__7499__auto__.push((arguments[i__7493__auto___14675]));

var G__14676 = (i__7493__auto___14675 + (1));
i__7493__auto___14675 = G__14676;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__14670){
var vec__14671 = p__14670;
var state_override_fn = cljs.core.nth.call(null,vec__14671,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq14668){
var G__14669 = cljs.core.first.call(null,seq14668);
var seq14668__$1 = cljs.core.next.call(null,seq14668);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__14669,seq14668__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__7403__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14680_14683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14681_14684 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14680_14683,_STAR_print_fn_STAR_14681_14684,sb__7403__auto__){
return (function (x__7404__auto__){
return sb__7403__auto__.append(x__7404__auto__);
});})(_STAR_print_newline_STAR_14680_14683,_STAR_print_fn_STAR_14681_14684,sb__7403__auto__))
;

try{var _STAR_print_level_STAR_14682_14685 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14682_14685;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14681_14684;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14680_14683;
}
return [cljs.core.str(sb__7403__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_14687 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14687;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__14689 = name;
switch (G__14689) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__14694 = tag;
var html_tag = cljs.core.nth.call(null,vec__14694,(0),null);
var style = cljs.core.nth.call(null,vec__14694,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_14698 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14698;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_14701 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_14702 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14702;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_14701;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__14703 = initial_value;
var G__14704 = value.call(null);
initial_value = G__14703;
value = G__14704;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__14705 = initial_value;
var G__14706 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__14705;
value = G__14706;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__14707 = initial_value;
var G__14708 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__14707;
value = G__14708;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1502809978678