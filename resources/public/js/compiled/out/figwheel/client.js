// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args47227 = [];
var len__26171__auto___47230 = arguments.length;
var i__26172__auto___47231 = (0);
while(true){
if((i__26172__auto___47231 < len__26171__auto___47230)){
args47227.push((arguments[i__26172__auto___47231]));

var G__47232 = (i__26172__auto___47231 + (1));
i__26172__auto___47231 = G__47232;
continue;
} else {
}
break;
}

var G__47229 = args47227.length;
switch (G__47229) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args47227.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26178__auto__ = [];
var len__26171__auto___47235 = arguments.length;
var i__26172__auto___47236 = (0);
while(true){
if((i__26172__auto___47236 < len__26171__auto___47235)){
args__26178__auto__.push((arguments[i__26172__auto___47236]));

var G__47237 = (i__26172__auto___47236 + (1));
i__26172__auto___47236 = G__47237;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47234){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47234));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26178__auto__ = [];
var len__26171__auto___47239 = arguments.length;
var i__26172__auto___47240 = (0);
while(true){
if((i__26172__auto___47240 < len__26171__auto___47239)){
args__26178__auto__.push((arguments[i__26172__auto___47240]));

var G__47241 = (i__26172__auto___47240 + (1));
i__26172__auto___47240 = G__47241;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47238){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47238));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__47242 = cljs.core._EQ_;
var expr__47243 = (function (){var or__25096__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e47246){if((e47246 instanceof Error)){
var e = e47246;
return false;
} else {
throw e47246;

}
}})();
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__47242.call(null,"true",expr__47243))){
return true;
} else {
if(cljs.core.truth_(pred__47242.call(null,"false",expr__47243))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__47243)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e47248){if((e47248 instanceof Error)){
var e = e47248;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e47248;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47249){
var map__47252 = p__47249;
var map__47252__$1 = ((((!((map__47252 == null)))?((((map__47252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47252):map__47252);
var message = cljs.core.get.call(null,map__47252__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47252__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25096__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25084__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25084__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25084__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__28276__auto___47414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___47414,ch){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___47414,ch){
return (function (state_47383){
var state_val_47384 = (state_47383[(1)]);
if((state_val_47384 === (7))){
var inst_47379 = (state_47383[(2)]);
var state_47383__$1 = state_47383;
var statearr_47385_47415 = state_47383__$1;
(statearr_47385_47415[(2)] = inst_47379);

(statearr_47385_47415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (1))){
var state_47383__$1 = state_47383;
var statearr_47386_47416 = state_47383__$1;
(statearr_47386_47416[(2)] = null);

(statearr_47386_47416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (4))){
var inst_47336 = (state_47383[(7)]);
var inst_47336__$1 = (state_47383[(2)]);
var state_47383__$1 = (function (){var statearr_47387 = state_47383;
(statearr_47387[(7)] = inst_47336__$1);

return statearr_47387;
})();
if(cljs.core.truth_(inst_47336__$1)){
var statearr_47388_47417 = state_47383__$1;
(statearr_47388_47417[(1)] = (5));

} else {
var statearr_47389_47418 = state_47383__$1;
(statearr_47389_47418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (15))){
var inst_47343 = (state_47383[(8)]);
var inst_47358 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47343);
var inst_47359 = cljs.core.first.call(null,inst_47358);
var inst_47360 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47359);
var inst_47361 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_47360)].join('');
var inst_47362 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47361);
var state_47383__$1 = state_47383;
var statearr_47390_47419 = state_47383__$1;
(statearr_47390_47419[(2)] = inst_47362);

(statearr_47390_47419[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (13))){
var inst_47367 = (state_47383[(2)]);
var state_47383__$1 = state_47383;
var statearr_47391_47420 = state_47383__$1;
(statearr_47391_47420[(2)] = inst_47367);

(statearr_47391_47420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (6))){
var state_47383__$1 = state_47383;
var statearr_47392_47421 = state_47383__$1;
(statearr_47392_47421[(2)] = null);

(statearr_47392_47421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (17))){
var inst_47365 = (state_47383[(2)]);
var state_47383__$1 = state_47383;
var statearr_47393_47422 = state_47383__$1;
(statearr_47393_47422[(2)] = inst_47365);

(statearr_47393_47422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (3))){
var inst_47381 = (state_47383[(2)]);
var state_47383__$1 = state_47383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47383__$1,inst_47381);
} else {
if((state_val_47384 === (12))){
var inst_47342 = (state_47383[(9)]);
var inst_47356 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47342,opts);
var state_47383__$1 = state_47383;
if(cljs.core.truth_(inst_47356)){
var statearr_47394_47423 = state_47383__$1;
(statearr_47394_47423[(1)] = (15));

} else {
var statearr_47395_47424 = state_47383__$1;
(statearr_47395_47424[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (2))){
var state_47383__$1 = state_47383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47383__$1,(4),ch);
} else {
if((state_val_47384 === (11))){
var inst_47343 = (state_47383[(8)]);
var inst_47348 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47349 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47343);
var inst_47350 = cljs.core.async.timeout.call(null,(1000));
var inst_47351 = [inst_47349,inst_47350];
var inst_47352 = (new cljs.core.PersistentVector(null,2,(5),inst_47348,inst_47351,null));
var state_47383__$1 = state_47383;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47383__$1,(14),inst_47352);
} else {
if((state_val_47384 === (9))){
var inst_47343 = (state_47383[(8)]);
var inst_47369 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47370 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47343);
var inst_47371 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47370);
var inst_47372 = [cljs.core.str("Not loading: "),cljs.core.str(inst_47371)].join('');
var inst_47373 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47372);
var state_47383__$1 = (function (){var statearr_47396 = state_47383;
(statearr_47396[(10)] = inst_47369);

return statearr_47396;
})();
var statearr_47397_47425 = state_47383__$1;
(statearr_47397_47425[(2)] = inst_47373);

(statearr_47397_47425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (5))){
var inst_47336 = (state_47383[(7)]);
var inst_47338 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47339 = (new cljs.core.PersistentArrayMap(null,2,inst_47338,null));
var inst_47340 = (new cljs.core.PersistentHashSet(null,inst_47339,null));
var inst_47341 = figwheel.client.focus_msgs.call(null,inst_47340,inst_47336);
var inst_47342 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47341);
var inst_47343 = cljs.core.first.call(null,inst_47341);
var inst_47344 = figwheel.client.autoload_QMARK_.call(null);
var state_47383__$1 = (function (){var statearr_47398 = state_47383;
(statearr_47398[(9)] = inst_47342);

(statearr_47398[(8)] = inst_47343);

return statearr_47398;
})();
if(cljs.core.truth_(inst_47344)){
var statearr_47399_47426 = state_47383__$1;
(statearr_47399_47426[(1)] = (8));

} else {
var statearr_47400_47427 = state_47383__$1;
(statearr_47400_47427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (14))){
var inst_47354 = (state_47383[(2)]);
var state_47383__$1 = state_47383;
var statearr_47401_47428 = state_47383__$1;
(statearr_47401_47428[(2)] = inst_47354);

(statearr_47401_47428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (16))){
var state_47383__$1 = state_47383;
var statearr_47402_47429 = state_47383__$1;
(statearr_47402_47429[(2)] = null);

(statearr_47402_47429[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (10))){
var inst_47375 = (state_47383[(2)]);
var state_47383__$1 = (function (){var statearr_47403 = state_47383;
(statearr_47403[(11)] = inst_47375);

return statearr_47403;
})();
var statearr_47404_47430 = state_47383__$1;
(statearr_47404_47430[(2)] = null);

(statearr_47404_47430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47384 === (8))){
var inst_47342 = (state_47383[(9)]);
var inst_47346 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47342,opts);
var state_47383__$1 = state_47383;
if(cljs.core.truth_(inst_47346)){
var statearr_47405_47431 = state_47383__$1;
(statearr_47405_47431[(1)] = (11));

} else {
var statearr_47406_47432 = state_47383__$1;
(statearr_47406_47432[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28276__auto___47414,ch))
;
return ((function (switch__28211__auto__,c__28276__auto___47414,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28212__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28212__auto____0 = (function (){
var statearr_47410 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47410[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28212__auto__);

(statearr_47410[(1)] = (1));

return statearr_47410;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28212__auto____1 = (function (state_47383){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_47383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e47411){if((e47411 instanceof Object)){
var ex__28215__auto__ = e47411;
var statearr_47412_47433 = state_47383;
(statearr_47412_47433[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47383);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47434 = state_47383;
state_47383 = G__47434;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28212__auto__ = function(state_47383){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28212__auto____1.call(this,state_47383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28212__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28212__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___47414,ch))
})();
var state__28278__auto__ = (function (){var statearr_47413 = f__28277__auto__.call(null);
(statearr_47413[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___47414);

return statearr_47413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___47414,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47435_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47435_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_47438 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47438){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e47437){if((e47437 instanceof Error)){
var e = e47437;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47438], null));
} else {
var e = e47437;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_47438))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47439){
var map__47448 = p__47439;
var map__47448__$1 = ((((!((map__47448 == null)))?((((map__47448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47448):map__47448);
var opts = map__47448__$1;
var build_id = cljs.core.get.call(null,map__47448__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47448,map__47448__$1,opts,build_id){
return (function (p__47450){
var vec__47451 = p__47450;
var seq__47452 = cljs.core.seq.call(null,vec__47451);
var first__47453 = cljs.core.first.call(null,seq__47452);
var seq__47452__$1 = cljs.core.next.call(null,seq__47452);
var map__47454 = first__47453;
var map__47454__$1 = ((((!((map__47454 == null)))?((((map__47454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47454):map__47454);
var msg = map__47454__$1;
var msg_name = cljs.core.get.call(null,map__47454__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47452__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47451,seq__47452,first__47453,seq__47452__$1,map__47454,map__47454__$1,msg,msg_name,_,map__47448,map__47448__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47451,seq__47452,first__47453,seq__47452__$1,map__47454,map__47454__$1,msg,msg_name,_,map__47448,map__47448__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47448,map__47448__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47462){
var vec__47463 = p__47462;
var seq__47464 = cljs.core.seq.call(null,vec__47463);
var first__47465 = cljs.core.first.call(null,seq__47464);
var seq__47464__$1 = cljs.core.next.call(null,seq__47464);
var map__47466 = first__47465;
var map__47466__$1 = ((((!((map__47466 == null)))?((((map__47466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47466):map__47466);
var msg = map__47466__$1;
var msg_name = cljs.core.get.call(null,map__47466__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47464__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47468){
var map__47480 = p__47468;
var map__47480__$1 = ((((!((map__47480 == null)))?((((map__47480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47480):map__47480);
var on_compile_warning = cljs.core.get.call(null,map__47480__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47480__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47480,map__47480__$1,on_compile_warning,on_compile_fail){
return (function (p__47482){
var vec__47483 = p__47482;
var seq__47484 = cljs.core.seq.call(null,vec__47483);
var first__47485 = cljs.core.first.call(null,seq__47484);
var seq__47484__$1 = cljs.core.next.call(null,seq__47484);
var map__47486 = first__47485;
var map__47486__$1 = ((((!((map__47486 == null)))?((((map__47486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47486):map__47486);
var msg = map__47486__$1;
var msg_name = cljs.core.get.call(null,map__47486__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47484__$1;
var pred__47488 = cljs.core._EQ_;
var expr__47489 = msg_name;
if(cljs.core.truth_(pred__47488.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47489))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47488.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47489))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47480,map__47480__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__,msg_hist,msg_names,msg){
return (function (state_47717){
var state_val_47718 = (state_47717[(1)]);
if((state_val_47718 === (7))){
var inst_47637 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47637)){
var statearr_47719_47769 = state_47717__$1;
(statearr_47719_47769[(1)] = (8));

} else {
var statearr_47720_47770 = state_47717__$1;
(statearr_47720_47770[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (20))){
var inst_47711 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47721_47771 = state_47717__$1;
(statearr_47721_47771[(2)] = inst_47711);

(statearr_47721_47771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (27))){
var inst_47707 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47722_47772 = state_47717__$1;
(statearr_47722_47772[(2)] = inst_47707);

(statearr_47722_47772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (1))){
var inst_47630 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47630)){
var statearr_47723_47773 = state_47717__$1;
(statearr_47723_47773[(1)] = (2));

} else {
var statearr_47724_47774 = state_47717__$1;
(statearr_47724_47774[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (24))){
var inst_47709 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47725_47775 = state_47717__$1;
(statearr_47725_47775[(2)] = inst_47709);

(statearr_47725_47775[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (4))){
var inst_47715 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47717__$1,inst_47715);
} else {
if((state_val_47718 === (15))){
var inst_47713 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47726_47776 = state_47717__$1;
(statearr_47726_47776[(2)] = inst_47713);

(statearr_47726_47776[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (21))){
var inst_47666 = (state_47717[(2)]);
var inst_47667 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47668 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47667);
var state_47717__$1 = (function (){var statearr_47727 = state_47717;
(statearr_47727[(7)] = inst_47666);

return statearr_47727;
})();
var statearr_47728_47777 = state_47717__$1;
(statearr_47728_47777[(2)] = inst_47668);

(statearr_47728_47777[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (31))){
var inst_47696 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47696)){
var statearr_47729_47778 = state_47717__$1;
(statearr_47729_47778[(1)] = (34));

} else {
var statearr_47730_47779 = state_47717__$1;
(statearr_47730_47779[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (32))){
var inst_47705 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47731_47780 = state_47717__$1;
(statearr_47731_47780[(2)] = inst_47705);

(statearr_47731_47780[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (33))){
var inst_47692 = (state_47717[(2)]);
var inst_47693 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47694 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47693);
var state_47717__$1 = (function (){var statearr_47732 = state_47717;
(statearr_47732[(8)] = inst_47692);

return statearr_47732;
})();
var statearr_47733_47781 = state_47717__$1;
(statearr_47733_47781[(2)] = inst_47694);

(statearr_47733_47781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (13))){
var inst_47651 = figwheel.client.heads_up.clear.call(null);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(16),inst_47651);
} else {
if((state_val_47718 === (22))){
var inst_47672 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47673 = figwheel.client.heads_up.append_warning_message.call(null,inst_47672);
var state_47717__$1 = state_47717;
var statearr_47734_47782 = state_47717__$1;
(statearr_47734_47782[(2)] = inst_47673);

(statearr_47734_47782[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (36))){
var inst_47703 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47735_47783 = state_47717__$1;
(statearr_47735_47783[(2)] = inst_47703);

(statearr_47735_47783[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (29))){
var inst_47683 = (state_47717[(2)]);
var inst_47684 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47685 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47684);
var state_47717__$1 = (function (){var statearr_47736 = state_47717;
(statearr_47736[(9)] = inst_47683);

return statearr_47736;
})();
var statearr_47737_47784 = state_47717__$1;
(statearr_47737_47784[(2)] = inst_47685);

(statearr_47737_47784[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (6))){
var inst_47632 = (state_47717[(10)]);
var state_47717__$1 = state_47717;
var statearr_47738_47785 = state_47717__$1;
(statearr_47738_47785[(2)] = inst_47632);

(statearr_47738_47785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (28))){
var inst_47679 = (state_47717[(2)]);
var inst_47680 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47681 = figwheel.client.heads_up.display_warning.call(null,inst_47680);
var state_47717__$1 = (function (){var statearr_47739 = state_47717;
(statearr_47739[(11)] = inst_47679);

return statearr_47739;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(29),inst_47681);
} else {
if((state_val_47718 === (25))){
var inst_47677 = figwheel.client.heads_up.clear.call(null);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(28),inst_47677);
} else {
if((state_val_47718 === (34))){
var inst_47698 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(37),inst_47698);
} else {
if((state_val_47718 === (17))){
var inst_47657 = (state_47717[(2)]);
var inst_47658 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47659 = figwheel.client.auto_jump_to_error.call(null,opts,inst_47658);
var state_47717__$1 = (function (){var statearr_47740 = state_47717;
(statearr_47740[(12)] = inst_47657);

return statearr_47740;
})();
var statearr_47741_47786 = state_47717__$1;
(statearr_47741_47786[(2)] = inst_47659);

(statearr_47741_47786[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (3))){
var inst_47649 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47649)){
var statearr_47742_47787 = state_47717__$1;
(statearr_47742_47787[(1)] = (13));

} else {
var statearr_47743_47788 = state_47717__$1;
(statearr_47743_47788[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (12))){
var inst_47645 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47744_47789 = state_47717__$1;
(statearr_47744_47789[(2)] = inst_47645);

(statearr_47744_47789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (2))){
var inst_47632 = (state_47717[(10)]);
var inst_47632__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_47717__$1 = (function (){var statearr_47745 = state_47717;
(statearr_47745[(10)] = inst_47632__$1);

return statearr_47745;
})();
if(cljs.core.truth_(inst_47632__$1)){
var statearr_47746_47790 = state_47717__$1;
(statearr_47746_47790[(1)] = (5));

} else {
var statearr_47747_47791 = state_47717__$1;
(statearr_47747_47791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (23))){
var inst_47675 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47675)){
var statearr_47748_47792 = state_47717__$1;
(statearr_47748_47792[(1)] = (25));

} else {
var statearr_47749_47793 = state_47717__$1;
(statearr_47749_47793[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (35))){
var state_47717__$1 = state_47717;
var statearr_47750_47794 = state_47717__$1;
(statearr_47750_47794[(2)] = null);

(statearr_47750_47794[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (19))){
var inst_47670 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47670)){
var statearr_47751_47795 = state_47717__$1;
(statearr_47751_47795[(1)] = (22));

} else {
var statearr_47752_47796 = state_47717__$1;
(statearr_47752_47796[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (11))){
var inst_47641 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47753_47797 = state_47717__$1;
(statearr_47753_47797[(2)] = inst_47641);

(statearr_47753_47797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (9))){
var inst_47643 = figwheel.client.heads_up.clear.call(null);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(12),inst_47643);
} else {
if((state_val_47718 === (5))){
var inst_47634 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_47717__$1 = state_47717;
var statearr_47754_47798 = state_47717__$1;
(statearr_47754_47798[(2)] = inst_47634);

(statearr_47754_47798[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (14))){
var inst_47661 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47661)){
var statearr_47755_47799 = state_47717__$1;
(statearr_47755_47799[(1)] = (18));

} else {
var statearr_47756_47800 = state_47717__$1;
(statearr_47756_47800[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (26))){
var inst_47687 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_47717__$1 = state_47717;
if(cljs.core.truth_(inst_47687)){
var statearr_47757_47801 = state_47717__$1;
(statearr_47757_47801[(1)] = (30));

} else {
var statearr_47758_47802 = state_47717__$1;
(statearr_47758_47802[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (16))){
var inst_47653 = (state_47717[(2)]);
var inst_47654 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47655 = figwheel.client.heads_up.display_exception.call(null,inst_47654);
var state_47717__$1 = (function (){var statearr_47759 = state_47717;
(statearr_47759[(13)] = inst_47653);

return statearr_47759;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(17),inst_47655);
} else {
if((state_val_47718 === (30))){
var inst_47689 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47690 = figwheel.client.heads_up.display_warning.call(null,inst_47689);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(33),inst_47690);
} else {
if((state_val_47718 === (10))){
var inst_47647 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47760_47803 = state_47717__$1;
(statearr_47760_47803[(2)] = inst_47647);

(statearr_47760_47803[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (18))){
var inst_47663 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_47664 = figwheel.client.heads_up.display_exception.call(null,inst_47663);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(21),inst_47664);
} else {
if((state_val_47718 === (37))){
var inst_47700 = (state_47717[(2)]);
var state_47717__$1 = state_47717;
var statearr_47761_47804 = state_47717__$1;
(statearr_47761_47804[(2)] = inst_47700);

(statearr_47761_47804[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47718 === (8))){
var inst_47639 = figwheel.client.heads_up.flash_loaded.call(null);
var state_47717__$1 = state_47717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47717__$1,(11),inst_47639);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28276__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28211__auto__,c__28276__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto____0 = (function (){
var statearr_47765 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47765[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto__);

(statearr_47765[(1)] = (1));

return statearr_47765;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto____1 = (function (state_47717){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_47717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e47766){if((e47766 instanceof Object)){
var ex__28215__auto__ = e47766;
var statearr_47767_47805 = state_47717;
(statearr_47767_47805[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47766;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47806 = state_47717;
state_47717 = G__47806;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto__ = function(state_47717){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto____1.call(this,state_47717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__,msg_hist,msg_names,msg))
})();
var state__28278__auto__ = (function (){var statearr_47768 = f__28277__auto__.call(null);
(statearr_47768[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_47768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__,msg_hist,msg_names,msg))
);

return c__28276__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28276__auto___47869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___47869,ch){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___47869,ch){
return (function (state_47852){
var state_val_47853 = (state_47852[(1)]);
if((state_val_47853 === (1))){
var state_47852__$1 = state_47852;
var statearr_47854_47870 = state_47852__$1;
(statearr_47854_47870[(2)] = null);

(statearr_47854_47870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47853 === (2))){
var state_47852__$1 = state_47852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47852__$1,(4),ch);
} else {
if((state_val_47853 === (3))){
var inst_47850 = (state_47852[(2)]);
var state_47852__$1 = state_47852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47852__$1,inst_47850);
} else {
if((state_val_47853 === (4))){
var inst_47840 = (state_47852[(7)]);
var inst_47840__$1 = (state_47852[(2)]);
var state_47852__$1 = (function (){var statearr_47855 = state_47852;
(statearr_47855[(7)] = inst_47840__$1);

return statearr_47855;
})();
if(cljs.core.truth_(inst_47840__$1)){
var statearr_47856_47871 = state_47852__$1;
(statearr_47856_47871[(1)] = (5));

} else {
var statearr_47857_47872 = state_47852__$1;
(statearr_47857_47872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47853 === (5))){
var inst_47840 = (state_47852[(7)]);
var inst_47842 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_47840);
var state_47852__$1 = state_47852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47852__$1,(8),inst_47842);
} else {
if((state_val_47853 === (6))){
var state_47852__$1 = state_47852;
var statearr_47858_47873 = state_47852__$1;
(statearr_47858_47873[(2)] = null);

(statearr_47858_47873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47853 === (7))){
var inst_47848 = (state_47852[(2)]);
var state_47852__$1 = state_47852;
var statearr_47859_47874 = state_47852__$1;
(statearr_47859_47874[(2)] = inst_47848);

(statearr_47859_47874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47853 === (8))){
var inst_47844 = (state_47852[(2)]);
var state_47852__$1 = (function (){var statearr_47860 = state_47852;
(statearr_47860[(8)] = inst_47844);

return statearr_47860;
})();
var statearr_47861_47875 = state_47852__$1;
(statearr_47861_47875[(2)] = null);

(statearr_47861_47875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__28276__auto___47869,ch))
;
return ((function (switch__28211__auto__,c__28276__auto___47869,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28212__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28212__auto____0 = (function (){
var statearr_47865 = [null,null,null,null,null,null,null,null,null];
(statearr_47865[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28212__auto__);

(statearr_47865[(1)] = (1));

return statearr_47865;
});
var figwheel$client$heads_up_plugin_$_state_machine__28212__auto____1 = (function (state_47852){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_47852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e47866){if((e47866 instanceof Object)){
var ex__28215__auto__ = e47866;
var statearr_47867_47876 = state_47852;
(statearr_47867_47876[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47877 = state_47852;
state_47852 = G__47877;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28212__auto__ = function(state_47852){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28212__auto____1.call(this,state_47852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28212__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28212__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___47869,ch))
})();
var state__28278__auto__ = (function (){var statearr_47868 = f__28277__auto__.call(null);
(statearr_47868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___47869);

return statearr_47868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___47869,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__){
return (function (state_47898){
var state_val_47899 = (state_47898[(1)]);
if((state_val_47899 === (1))){
var inst_47893 = cljs.core.async.timeout.call(null,(3000));
var state_47898__$1 = state_47898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47898__$1,(2),inst_47893);
} else {
if((state_val_47899 === (2))){
var inst_47895 = (state_47898[(2)]);
var inst_47896 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_47898__$1 = (function (){var statearr_47900 = state_47898;
(statearr_47900[(7)] = inst_47895);

return statearr_47900;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47898__$1,inst_47896);
} else {
return null;
}
}
});})(c__28276__auto__))
;
return ((function (switch__28211__auto__,c__28276__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28212__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28212__auto____0 = (function (){
var statearr_47904 = [null,null,null,null,null,null,null,null];
(statearr_47904[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28212__auto__);

(statearr_47904[(1)] = (1));

return statearr_47904;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28212__auto____1 = (function (state_47898){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_47898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e47905){if((e47905 instanceof Object)){
var ex__28215__auto__ = e47905;
var statearr_47906_47908 = state_47898;
(statearr_47906_47908[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47909 = state_47898;
state_47898 = G__47909;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28212__auto__ = function(state_47898){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28212__auto____1.call(this,state_47898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28212__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28212__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__))
})();
var state__28278__auto__ = (function (){var statearr_47907 = f__28277__auto__.call(null);
(statearr_47907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_47907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__))
);

return c__28276__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__,figwheel_version,temp__4657__auto__){
return (function (state_47932){
var state_val_47933 = (state_47932[(1)]);
if((state_val_47933 === (1))){
var inst_47926 = cljs.core.async.timeout.call(null,(2000));
var state_47932__$1 = state_47932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47932__$1,(2),inst_47926);
} else {
if((state_val_47933 === (2))){
var inst_47928 = (state_47932[(2)]);
var inst_47929 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_47930 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_47929);
var state_47932__$1 = (function (){var statearr_47934 = state_47932;
(statearr_47934[(7)] = inst_47928);

return statearr_47934;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47932__$1,inst_47930);
} else {
return null;
}
}
});})(c__28276__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28211__auto__,c__28276__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto____0 = (function (){
var statearr_47938 = [null,null,null,null,null,null,null,null];
(statearr_47938[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto__);

(statearr_47938[(1)] = (1));

return statearr_47938;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto____1 = (function (state_47932){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_47932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e47939){if((e47939 instanceof Object)){
var ex__28215__auto__ = e47939;
var statearr_47940_47942 = state_47932;
(statearr_47940_47942[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47943 = state_47932;
state_47932 = G__47943;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto__ = function(state_47932){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto____1.call(this,state_47932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28278__auto__ = (function (){var statearr_47941 = f__28277__auto__.call(null);
(statearr_47941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_47941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__,figwheel_version,temp__4657__auto__))
);

return c__28276__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__47944){
var map__47948 = p__47944;
var map__47948__$1 = ((((!((map__47948 == null)))?((((map__47948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47948):map__47948);
var file = cljs.core.get.call(null,map__47948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__47948__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__47948__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__47950 = "";
var G__47950__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__47950),cljs.core.str("file "),cljs.core.str(file)].join(''):G__47950);
var G__47950__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__47950__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__47950__$1);
if(cljs.core.truth_((function (){var and__25084__auto__ = line;
if(cljs.core.truth_(and__25084__auto__)){
return column;
} else {
return and__25084__auto__;
}
})())){
return [cljs.core.str(G__47950__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__47950__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__47951){
var map__47958 = p__47951;
var map__47958__$1 = ((((!((map__47958 == null)))?((((map__47958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47958):map__47958);
var ed = map__47958__$1;
var formatted_exception = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__47958__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__47960_47964 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__47961_47965 = null;
var count__47962_47966 = (0);
var i__47963_47967 = (0);
while(true){
if((i__47963_47967 < count__47962_47966)){
var msg_47968 = cljs.core._nth.call(null,chunk__47961_47965,i__47963_47967);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47968);

var G__47969 = seq__47960_47964;
var G__47970 = chunk__47961_47965;
var G__47971 = count__47962_47966;
var G__47972 = (i__47963_47967 + (1));
seq__47960_47964 = G__47969;
chunk__47961_47965 = G__47970;
count__47962_47966 = G__47971;
i__47963_47967 = G__47972;
continue;
} else {
var temp__4657__auto___47973 = cljs.core.seq.call(null,seq__47960_47964);
if(temp__4657__auto___47973){
var seq__47960_47974__$1 = temp__4657__auto___47973;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47960_47974__$1)){
var c__25907__auto___47975 = cljs.core.chunk_first.call(null,seq__47960_47974__$1);
var G__47976 = cljs.core.chunk_rest.call(null,seq__47960_47974__$1);
var G__47977 = c__25907__auto___47975;
var G__47978 = cljs.core.count.call(null,c__25907__auto___47975);
var G__47979 = (0);
seq__47960_47964 = G__47976;
chunk__47961_47965 = G__47977;
count__47962_47966 = G__47978;
i__47963_47967 = G__47979;
continue;
} else {
var msg_47980 = cljs.core.first.call(null,seq__47960_47974__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_47980);

var G__47981 = cljs.core.next.call(null,seq__47960_47974__$1);
var G__47982 = null;
var G__47983 = (0);
var G__47984 = (0);
seq__47960_47964 = G__47981;
chunk__47961_47965 = G__47982;
count__47962_47966 = G__47983;
i__47963_47967 = G__47984;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__47985){
var map__47988 = p__47985;
var map__47988__$1 = ((((!((map__47988 == null)))?((((map__47988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47988):map__47988);
var w = map__47988__$1;
var message = cljs.core.get.call(null,map__47988__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25084__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25084__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25084__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__48000 = cljs.core.seq.call(null,plugins);
var chunk__48001 = null;
var count__48002 = (0);
var i__48003 = (0);
while(true){
if((i__48003 < count__48002)){
var vec__48004 = cljs.core._nth.call(null,chunk__48001,i__48003);
var k = cljs.core.nth.call(null,vec__48004,(0),null);
var plugin = cljs.core.nth.call(null,vec__48004,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48010 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48000,chunk__48001,count__48002,i__48003,pl_48010,vec__48004,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48010.call(null,msg_hist);
});})(seq__48000,chunk__48001,count__48002,i__48003,pl_48010,vec__48004,k,plugin))
);
} else {
}

var G__48011 = seq__48000;
var G__48012 = chunk__48001;
var G__48013 = count__48002;
var G__48014 = (i__48003 + (1));
seq__48000 = G__48011;
chunk__48001 = G__48012;
count__48002 = G__48013;
i__48003 = G__48014;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48000);
if(temp__4657__auto__){
var seq__48000__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48000__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__48000__$1);
var G__48015 = cljs.core.chunk_rest.call(null,seq__48000__$1);
var G__48016 = c__25907__auto__;
var G__48017 = cljs.core.count.call(null,c__25907__auto__);
var G__48018 = (0);
seq__48000 = G__48015;
chunk__48001 = G__48016;
count__48002 = G__48017;
i__48003 = G__48018;
continue;
} else {
var vec__48007 = cljs.core.first.call(null,seq__48000__$1);
var k = cljs.core.nth.call(null,vec__48007,(0),null);
var plugin = cljs.core.nth.call(null,vec__48007,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48019 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48000,chunk__48001,count__48002,i__48003,pl_48019,vec__48007,k,plugin,seq__48000__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48019.call(null,msg_hist);
});})(seq__48000,chunk__48001,count__48002,i__48003,pl_48019,vec__48007,k,plugin,seq__48000__$1,temp__4657__auto__))
);
} else {
}

var G__48020 = cljs.core.next.call(null,seq__48000__$1);
var G__48021 = null;
var G__48022 = (0);
var G__48023 = (0);
seq__48000 = G__48020;
chunk__48001 = G__48021;
count__48002 = G__48022;
i__48003 = G__48023;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args48024 = [];
var len__26171__auto___48031 = arguments.length;
var i__26172__auto___48032 = (0);
while(true){
if((i__26172__auto___48032 < len__26171__auto___48031)){
args48024.push((arguments[i__26172__auto___48032]));

var G__48033 = (i__26172__auto___48032 + (1));
i__26172__auto___48032 = G__48033;
continue;
} else {
}
break;
}

var G__48026 = args48024.length;
switch (G__48026) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48024.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__48027_48035 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48028_48036 = null;
var count__48029_48037 = (0);
var i__48030_48038 = (0);
while(true){
if((i__48030_48038 < count__48029_48037)){
var msg_48039 = cljs.core._nth.call(null,chunk__48028_48036,i__48030_48038);
figwheel.client.socket.handle_incoming_message.call(null,msg_48039);

var G__48040 = seq__48027_48035;
var G__48041 = chunk__48028_48036;
var G__48042 = count__48029_48037;
var G__48043 = (i__48030_48038 + (1));
seq__48027_48035 = G__48040;
chunk__48028_48036 = G__48041;
count__48029_48037 = G__48042;
i__48030_48038 = G__48043;
continue;
} else {
var temp__4657__auto___48044 = cljs.core.seq.call(null,seq__48027_48035);
if(temp__4657__auto___48044){
var seq__48027_48045__$1 = temp__4657__auto___48044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48027_48045__$1)){
var c__25907__auto___48046 = cljs.core.chunk_first.call(null,seq__48027_48045__$1);
var G__48047 = cljs.core.chunk_rest.call(null,seq__48027_48045__$1);
var G__48048 = c__25907__auto___48046;
var G__48049 = cljs.core.count.call(null,c__25907__auto___48046);
var G__48050 = (0);
seq__48027_48035 = G__48047;
chunk__48028_48036 = G__48048;
count__48029_48037 = G__48049;
i__48030_48038 = G__48050;
continue;
} else {
var msg_48051 = cljs.core.first.call(null,seq__48027_48045__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48051);

var G__48052 = cljs.core.next.call(null,seq__48027_48045__$1);
var G__48053 = null;
var G__48054 = (0);
var G__48055 = (0);
seq__48027_48035 = G__48052;
chunk__48028_48036 = G__48053;
count__48029_48037 = G__48054;
i__48030_48038 = G__48055;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26178__auto__ = [];
var len__26171__auto___48060 = arguments.length;
var i__26172__auto___48061 = (0);
while(true){
if((i__26172__auto___48061 < len__26171__auto___48060)){
args__26178__auto__.push((arguments[i__26172__auto___48061]));

var G__48062 = (i__26172__auto___48061 + (1));
i__26172__auto___48061 = G__48062;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48057){
var map__48058 = p__48057;
var map__48058__$1 = ((((!((map__48058 == null)))?((((map__48058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48058):map__48058);
var opts = map__48058__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48056){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48056));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48064){if((e48064 instanceof Error)){
var e = e48064;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48064;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__48068){
var map__48069 = p__48068;
var map__48069__$1 = ((((!((map__48069 == null)))?((((map__48069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48069):map__48069);
var msg_name = cljs.core.get.call(null,map__48069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1503909847919