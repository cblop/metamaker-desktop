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
var x15071_15072 = value;
x15071_15072.devtools$protocols$IGroup$ = true;


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
var x15076_15077 = value;
x15076_15077.devtools$protocols$ITemplate$ = true;


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
var x15081_15082 = value;
x15081_15082.devtools$protocols$ISurrogate$ = true;


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
var len__7492__auto___15090 = arguments.length;
var i__7493__auto___15091 = (0);
while(true){
if((i__7493__auto___15091 < len__7492__auto___15090)){
args__7499__auto__.push((arguments[i__7493__auto___15091]));

var G__15092 = (i__7493__auto___15091 + (1));
i__7493__auto___15091 = G__15092;
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
var seq__15086_15093 = cljs.core.seq.call(null,items);
var chunk__15087_15094 = null;
var count__15088_15095 = (0);
var i__15089_15096 = (0);
while(true){
if((i__15089_15096 < count__15088_15095)){
var item_15097 = cljs.core._nth.call(null,chunk__15087_15094,i__15089_15096);
if(cljs.core.some_QMARK_.call(null,item_15097)){
if(cljs.core.coll_QMARK_.call(null,item_15097)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_15097)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_15097));
}
} else {
}

var G__15098 = seq__15086_15093;
var G__15099 = chunk__15087_15094;
var G__15100 = count__15088_15095;
var G__15101 = (i__15089_15096 + (1));
seq__15086_15093 = G__15098;
chunk__15087_15094 = G__15099;
count__15088_15095 = G__15100;
i__15089_15096 = G__15101;
continue;
} else {
var temp__4657__auto___15102 = cljs.core.seq.call(null,seq__15086_15093);
if(temp__4657__auto___15102){
var seq__15086_15103__$1 = temp__4657__auto___15102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15086_15103__$1)){
var c__7228__auto___15104 = cljs.core.chunk_first.call(null,seq__15086_15103__$1);
var G__15105 = cljs.core.chunk_rest.call(null,seq__15086_15103__$1);
var G__15106 = c__7228__auto___15104;
var G__15107 = cljs.core.count.call(null,c__7228__auto___15104);
var G__15108 = (0);
seq__15086_15093 = G__15105;
chunk__15087_15094 = G__15106;
count__15088_15095 = G__15107;
i__15089_15096 = G__15108;
continue;
} else {
var item_15109 = cljs.core.first.call(null,seq__15086_15103__$1);
if(cljs.core.some_QMARK_.call(null,item_15109)){
if(cljs.core.coll_QMARK_.call(null,item_15109)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_15109)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_15109));
}
} else {
}

var G__15110 = cljs.core.next.call(null,seq__15086_15103__$1);
var G__15111 = null;
var G__15112 = (0);
var G__15113 = (0);
seq__15086_15093 = G__15110;
chunk__15087_15094 = G__15111;
count__15088_15095 = G__15112;
i__15089_15096 = G__15113;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq15085){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15085));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15121 = arguments.length;
var i__7493__auto___15122 = (0);
while(true){
if((i__7493__auto___15122 < len__7492__auto___15121)){
args__7499__auto__.push((arguments[i__7493__auto___15122]));

var G__15123 = (i__7493__auto___15122 + (1));
i__7493__auto___15122 = G__15123;
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
var seq__15117_15124 = cljs.core.seq.call(null,children);
var chunk__15118_15125 = null;
var count__15119_15126 = (0);
var i__15120_15127 = (0);
while(true){
if((i__15120_15127 < count__15119_15126)){
var child_15128 = cljs.core._nth.call(null,chunk__15118_15125,i__15120_15127);
if(cljs.core.some_QMARK_.call(null,child_15128)){
if(cljs.core.coll_QMARK_.call(null,child_15128)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_15128))));
} else {
var temp__4655__auto___15129 = devtools.formatters.helpers.pref.call(null,child_15128);
if(cljs.core.truth_(temp__4655__auto___15129)){
var child_value_15130 = temp__4655__auto___15129;
template.push(child_value_15130);
} else {
}
}
} else {
}

var G__15131 = seq__15117_15124;
var G__15132 = chunk__15118_15125;
var G__15133 = count__15119_15126;
var G__15134 = (i__15120_15127 + (1));
seq__15117_15124 = G__15131;
chunk__15118_15125 = G__15132;
count__15119_15126 = G__15133;
i__15120_15127 = G__15134;
continue;
} else {
var temp__4657__auto___15135 = cljs.core.seq.call(null,seq__15117_15124);
if(temp__4657__auto___15135){
var seq__15117_15136__$1 = temp__4657__auto___15135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15117_15136__$1)){
var c__7228__auto___15137 = cljs.core.chunk_first.call(null,seq__15117_15136__$1);
var G__15138 = cljs.core.chunk_rest.call(null,seq__15117_15136__$1);
var G__15139 = c__7228__auto___15137;
var G__15140 = cljs.core.count.call(null,c__7228__auto___15137);
var G__15141 = (0);
seq__15117_15124 = G__15138;
chunk__15118_15125 = G__15139;
count__15119_15126 = G__15140;
i__15120_15127 = G__15141;
continue;
} else {
var child_15142 = cljs.core.first.call(null,seq__15117_15136__$1);
if(cljs.core.some_QMARK_.call(null,child_15142)){
if(cljs.core.coll_QMARK_.call(null,child_15142)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_15142))));
} else {
var temp__4655__auto___15143 = devtools.formatters.helpers.pref.call(null,child_15142);
if(cljs.core.truth_(temp__4655__auto___15143)){
var child_value_15144 = temp__4655__auto___15143;
template.push(child_value_15144);
} else {
}
}
} else {
}

var G__15145 = cljs.core.next.call(null,seq__15117_15136__$1);
var G__15146 = null;
var G__15147 = (0);
var G__15148 = (0);
seq__15117_15124 = G__15145;
chunk__15118_15125 = G__15146;
count__15119_15126 = G__15147;
i__15120_15127 = G__15148;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq15114){
var G__15115 = cljs.core.first.call(null,seq15114);
var seq15114__$1 = cljs.core.next.call(null,seq15114);
var G__15116 = cljs.core.first.call(null,seq15114__$1);
var seq15114__$2 = cljs.core.next.call(null,seq15114__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__15115,G__15116,seq15114__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15151 = arguments.length;
var i__7493__auto___15152 = (0);
while(true){
if((i__7493__auto___15152 < len__7492__auto___15151)){
args__7499__auto__.push((arguments[i__7493__auto___15152]));

var G__15153 = (i__7493__auto___15152 + (1));
i__7493__auto___15152 = G__15153;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,(template["concat"]).apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq15149){
var G__15150 = cljs.core.first.call(null,seq15149);
var seq15149__$1 = cljs.core.next.call(null,seq15149);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15150,seq15149__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__7499__auto__ = [];
var len__7492__auto___15156 = arguments.length;
var i__7493__auto___15157 = (0);
while(true){
if((i__7493__auto___15157 < len__7492__auto___15156)){
args__7499__auto__.push((arguments[i__7493__auto___15157]));

var G__15158 = (i__7493__auto___15157 + (1));
i__7493__auto___15157 = G__15158;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq15154){
var G__15155 = cljs.core.first.call(null,seq15154);
var seq15154__$1 = cljs.core.next.call(null,seq15154);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15155,seq15154__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args15159 = [];
var len__7492__auto___15164 = arguments.length;
var i__7493__auto___15165 = (0);
while(true){
if((i__7493__auto___15165 < len__7492__auto___15164)){
args15159.push((arguments[i__7493__auto___15165]));

var G__15166 = (i__7493__auto___15165 + (1));
i__7493__auto___15165 = G__15166;
continue;
} else {
}
break;
}

var G__15161 = args15159.length;
switch (G__15161) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15159.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj15163 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__6417__auto__ = start_index;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (0);
}
})()};
return obj15163;
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
var args__7499__auto__ = [];
var len__7492__auto___15174 = arguments.length;
var i__7493__auto___15175 = (0);
while(true){
if((i__7493__auto___15175 < len__7492__auto___15174)){
args__7499__auto__.push((arguments[i__7493__auto___15175]));

var G__15176 = (i__7493__auto___15175 + (1));
i__7493__auto___15175 = G__15176;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__15170){
var vec__15171 = p__15170;
var state_override_fn = cljs.core.nth.call(null,vec__15171,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq15168){
var G__15169 = cljs.core.first.call(null,seq15168);
var seq15168__$1 = cljs.core.next.call(null,seq15168);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__15169,seq15168__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_15178 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15178;
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
var G__15180 = name;
switch (G__15180) {
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
var vec__15185 = tag;
var html_tag = cljs.core.nth.call(null,vec__15185,(0),null);
var style = cljs.core.nth.call(null,vec__15185,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_15189 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_15189;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_15192 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_15193 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_15193;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_15192;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.util.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.util.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__15194 = initial_value;
var G__15195 = value.call(null);
initial_value = G__15194;
value = G__15195;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__15196 = initial_value;
var G__15197 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__15196;
value = G__15197;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__15198 = initial_value;
var G__15199 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__15198;
value = G__15199;
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

//# sourceMappingURL=templating.js.map?rel=1505229176341