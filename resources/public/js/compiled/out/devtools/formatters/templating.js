// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x42551_42552 = value;
x42551_42552.devtools$protocols$IGroup$ = true;


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
var x42556_42557 = value;
x42556_42557.devtools$protocols$ITemplate$ = true;


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
var x42561_42562 = value;
x42561_42562.devtools$protocols$ISurrogate$ = true;


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
var and__25084__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25084__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25084__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__26178__auto__ = [];
var len__26171__auto___42570 = arguments.length;
var i__26172__auto___42571 = (0);
while(true){
if((i__26172__auto___42571 < len__26171__auto___42570)){
args__26178__auto__.push((arguments[i__26172__auto___42571]));

var G__42572 = (i__26172__auto___42571 + (1));
i__26172__auto___42571 = G__42572;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__42566_42573 = cljs.core.seq.call(null,items);
var chunk__42567_42574 = null;
var count__42568_42575 = (0);
var i__42569_42576 = (0);
while(true){
if((i__42569_42576 < count__42568_42575)){
var item_42577 = cljs.core._nth.call(null,chunk__42567_42574,i__42569_42576);
if(cljs.core.some_QMARK_.call(null,item_42577)){
if(cljs.core.coll_QMARK_.call(null,item_42577)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_42577)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_42577));
}
} else {
}

var G__42578 = seq__42566_42573;
var G__42579 = chunk__42567_42574;
var G__42580 = count__42568_42575;
var G__42581 = (i__42569_42576 + (1));
seq__42566_42573 = G__42578;
chunk__42567_42574 = G__42579;
count__42568_42575 = G__42580;
i__42569_42576 = G__42581;
continue;
} else {
var temp__4657__auto___42582 = cljs.core.seq.call(null,seq__42566_42573);
if(temp__4657__auto___42582){
var seq__42566_42583__$1 = temp__4657__auto___42582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42566_42583__$1)){
var c__25907__auto___42584 = cljs.core.chunk_first.call(null,seq__42566_42583__$1);
var G__42585 = cljs.core.chunk_rest.call(null,seq__42566_42583__$1);
var G__42586 = c__25907__auto___42584;
var G__42587 = cljs.core.count.call(null,c__25907__auto___42584);
var G__42588 = (0);
seq__42566_42573 = G__42585;
chunk__42567_42574 = G__42586;
count__42568_42575 = G__42587;
i__42569_42576 = G__42588;
continue;
} else {
var item_42589 = cljs.core.first.call(null,seq__42566_42583__$1);
if(cljs.core.some_QMARK_.call(null,item_42589)){
if(cljs.core.coll_QMARK_.call(null,item_42589)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_42589)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_42589));
}
} else {
}

var G__42590 = cljs.core.next.call(null,seq__42566_42583__$1);
var G__42591 = null;
var G__42592 = (0);
var G__42593 = (0);
seq__42566_42573 = G__42590;
chunk__42567_42574 = G__42591;
count__42568_42575 = G__42592;
i__42569_42576 = G__42593;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq42565){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42565));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__26178__auto__ = [];
var len__26171__auto___42601 = arguments.length;
var i__26172__auto___42602 = (0);
while(true){
if((i__26172__auto___42602 < len__26171__auto___42601)){
args__26178__auto__.push((arguments[i__26172__auto___42602]));

var G__42603 = (i__26172__auto___42602 + (1));
i__26172__auto___42602 = G__42603;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((2) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26179__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__42597_42604 = cljs.core.seq.call(null,children);
var chunk__42598_42605 = null;
var count__42599_42606 = (0);
var i__42600_42607 = (0);
while(true){
if((i__42600_42607 < count__42599_42606)){
var child_42608 = cljs.core._nth.call(null,chunk__42598_42605,i__42600_42607);
if(cljs.core.some_QMARK_.call(null,child_42608)){
if(cljs.core.coll_QMARK_.call(null,child_42608)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_42608))));
} else {
var temp__4655__auto___42609 = devtools.formatters.helpers.pref.call(null,child_42608);
if(cljs.core.truth_(temp__4655__auto___42609)){
var child_value_42610 = temp__4655__auto___42609;
template.push(child_value_42610);
} else {
}
}
} else {
}

var G__42611 = seq__42597_42604;
var G__42612 = chunk__42598_42605;
var G__42613 = count__42599_42606;
var G__42614 = (i__42600_42607 + (1));
seq__42597_42604 = G__42611;
chunk__42598_42605 = G__42612;
count__42599_42606 = G__42613;
i__42600_42607 = G__42614;
continue;
} else {
var temp__4657__auto___42615 = cljs.core.seq.call(null,seq__42597_42604);
if(temp__4657__auto___42615){
var seq__42597_42616__$1 = temp__4657__auto___42615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42597_42616__$1)){
var c__25907__auto___42617 = cljs.core.chunk_first.call(null,seq__42597_42616__$1);
var G__42618 = cljs.core.chunk_rest.call(null,seq__42597_42616__$1);
var G__42619 = c__25907__auto___42617;
var G__42620 = cljs.core.count.call(null,c__25907__auto___42617);
var G__42621 = (0);
seq__42597_42604 = G__42618;
chunk__42598_42605 = G__42619;
count__42599_42606 = G__42620;
i__42600_42607 = G__42621;
continue;
} else {
var child_42622 = cljs.core.first.call(null,seq__42597_42616__$1);
if(cljs.core.some_QMARK_.call(null,child_42622)){
if(cljs.core.coll_QMARK_.call(null,child_42622)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_42622))));
} else {
var temp__4655__auto___42623 = devtools.formatters.helpers.pref.call(null,child_42622);
if(cljs.core.truth_(temp__4655__auto___42623)){
var child_value_42624 = temp__4655__auto___42623;
template.push(child_value_42624);
} else {
}
}
} else {
}

var G__42625 = cljs.core.next.call(null,seq__42597_42616__$1);
var G__42626 = null;
var G__42627 = (0);
var G__42628 = (0);
seq__42597_42604 = G__42625;
chunk__42598_42605 = G__42626;
count__42599_42606 = G__42627;
i__42600_42607 = G__42628;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq42594){
var G__42595 = cljs.core.first.call(null,seq42594);
var seq42594__$1 = cljs.core.next.call(null,seq42594);
var G__42596 = cljs.core.first.call(null,seq42594__$1);
var seq42594__$2 = cljs.core.next.call(null,seq42594__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__42595,G__42596,seq42594__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__26178__auto__ = [];
var len__26171__auto___42631 = arguments.length;
var i__26172__auto___42632 = (0);
while(true){
if((i__26172__auto___42632 < len__26171__auto___42631)){
args__26178__auto__.push((arguments[i__26172__auto___42632]));

var G__42633 = (i__26172__auto___42632 + (1));
i__26172__auto___42632 = G__42633;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((1) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26179__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq42629){
var G__42630 = cljs.core.first.call(null,seq42629);
var seq42629__$1 = cljs.core.next.call(null,seq42629);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42630,seq42629__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__26178__auto__ = [];
var len__26171__auto___42636 = arguments.length;
var i__26172__auto___42637 = (0);
while(true){
if((i__26172__auto___42637 < len__26171__auto___42636)){
args__26178__auto__.push((arguments[i__26172__auto___42637]));

var G__42638 = (i__26172__auto___42637 + (1));
i__26172__auto___42637 = G__42638;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((1) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26179__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq42634){
var G__42635 = cljs.core.first.call(null,seq42634);
var seq42634__$1 = cljs.core.next.call(null,seq42634);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42635,seq42634__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args42639 = [];
var len__26171__auto___42644 = arguments.length;
var i__26172__auto___42645 = (0);
while(true){
if((i__26172__auto___42645 < len__26171__auto___42644)){
args42639.push((arguments[i__26172__auto___42645]));

var G__42646 = (i__26172__auto___42645 + (1));
i__26172__auto___42645 = G__42646;
continue;
} else {
}
break;
}

var G__42641 = args42639.length;
switch (G__42641) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42639.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj42643 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25096__auto__ = start_index;
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return (0);
}
})()};
return obj42643;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["target"]);
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["header"]);
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["body"]);
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return (surrogate["startIndex"]);
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__26178__auto__ = [];
var len__26171__auto___42654 = arguments.length;
var i__26172__auto___42655 = (0);
while(true){
if((i__26172__auto___42655 < len__26171__auto___42654)){
args__26178__auto__.push((arguments[i__26172__auto___42655]));

var G__42656 = (i__26172__auto___42655 + (1));
i__26172__auto___42655 = G__42656;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((1) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26179__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42650){
var vec__42651 = p__42650;
var state_override_fn = cljs.core.nth.call(null,vec__42651,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq42648){
var G__42649 = cljs.core.first.call(null,seq42648);
var seq42648__$1 = cljs.core.next.call(null,seq42648);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__42649,seq42648__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_42658 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_42658;
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
return cljs.core.map.call(null,devtools.util.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.util.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__42660 = name;
switch (G__42660) {
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
var vec__42665 = tag;
var html_tag = cljs.core.nth.call(null,vec__42665,(0),null);
var style = cljs.core.nth.call(null,vec__42665,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_42669 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42669;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_42672 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_42673 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_42673;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_42672;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.util.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.util.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__42674 = initial_value;
var G__42675 = value.call(null);
initial_value = G__42674;
value = G__42675;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__42676 = initial_value;
var G__42677 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__42676;
value = G__42677;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__42678 = initial_value;
var G__42679 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__42678;
value = G__42679;
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

//# sourceMappingURL=templating.js.map?rel=1504172215609