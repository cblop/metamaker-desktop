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
var args38350 = [];
var len__26171__auto___38353 = arguments.length;
var i__26172__auto___38354 = (0);
while(true){
if((i__26172__auto___38354 < len__26171__auto___38353)){
args38350.push((arguments[i__26172__auto___38354]));

var G__38355 = (i__26172__auto___38354 + (1));
i__26172__auto___38354 = G__38355;
continue;
} else {
}
break;
}

var G__38352 = args38350.length;
switch (G__38352) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38350.length)].join('')));

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
var len__26171__auto___38358 = arguments.length;
var i__26172__auto___38359 = (0);
while(true){
if((i__26172__auto___38359 < len__26171__auto___38358)){
args__26178__auto__.push((arguments[i__26172__auto___38359]));

var G__38360 = (i__26172__auto___38359 + (1));
i__26172__auto___38359 = G__38360;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38357){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38357));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26178__auto__ = [];
var len__26171__auto___38362 = arguments.length;
var i__26172__auto___38363 = (0);
while(true){
if((i__26172__auto___38363 < len__26171__auto___38362)){
args__26178__auto__.push((arguments[i__26172__auto___38363]));

var G__38364 = (i__26172__auto___38363 + (1));
i__26172__auto___38363 = G__38364;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38361){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38361));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__38365 = cljs.core._EQ_;
var expr__38366 = (function (){var or__25096__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e38369){if((e38369 instanceof Error)){
var e = e38369;
return false;
} else {
throw e38369;

}
}})();
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__38365.call(null,"true",expr__38366))){
return true;
} else {
if(cljs.core.truth_(pred__38365.call(null,"false",expr__38366))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__38366)].join('')));
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
}catch (e38371){if((e38371 instanceof Error)){
var e = e38371;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e38371;

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38372){
var map__38375 = p__38372;
var map__38375__$1 = ((((!((map__38375 == null)))?((((map__38375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38375):map__38375);
var message = cljs.core.get.call(null,map__38375__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38375__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__30990__auto___38537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___38537,ch){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___38537,ch){
return (function (state_38506){
var state_val_38507 = (state_38506[(1)]);
if((state_val_38507 === (7))){
var inst_38502 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38508_38538 = state_38506__$1;
(statearr_38508_38538[(2)] = inst_38502);

(statearr_38508_38538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (1))){
var state_38506__$1 = state_38506;
var statearr_38509_38539 = state_38506__$1;
(statearr_38509_38539[(2)] = null);

(statearr_38509_38539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (4))){
var inst_38459 = (state_38506[(7)]);
var inst_38459__$1 = (state_38506[(2)]);
var state_38506__$1 = (function (){var statearr_38510 = state_38506;
(statearr_38510[(7)] = inst_38459__$1);

return statearr_38510;
})();
if(cljs.core.truth_(inst_38459__$1)){
var statearr_38511_38540 = state_38506__$1;
(statearr_38511_38540[(1)] = (5));

} else {
var statearr_38512_38541 = state_38506__$1;
(statearr_38512_38541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (15))){
var inst_38466 = (state_38506[(8)]);
var inst_38481 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38466);
var inst_38482 = cljs.core.first.call(null,inst_38481);
var inst_38483 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38482);
var inst_38484 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_38483)].join('');
var inst_38485 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38484);
var state_38506__$1 = state_38506;
var statearr_38513_38542 = state_38506__$1;
(statearr_38513_38542[(2)] = inst_38485);

(statearr_38513_38542[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (13))){
var inst_38490 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38514_38543 = state_38506__$1;
(statearr_38514_38543[(2)] = inst_38490);

(statearr_38514_38543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (6))){
var state_38506__$1 = state_38506;
var statearr_38515_38544 = state_38506__$1;
(statearr_38515_38544[(2)] = null);

(statearr_38515_38544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (17))){
var inst_38488 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38516_38545 = state_38506__$1;
(statearr_38516_38545[(2)] = inst_38488);

(statearr_38516_38545[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (3))){
var inst_38504 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38506__$1,inst_38504);
} else {
if((state_val_38507 === (12))){
var inst_38465 = (state_38506[(9)]);
var inst_38479 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38465,opts);
var state_38506__$1 = state_38506;
if(cljs.core.truth_(inst_38479)){
var statearr_38517_38546 = state_38506__$1;
(statearr_38517_38546[(1)] = (15));

} else {
var statearr_38518_38547 = state_38506__$1;
(statearr_38518_38547[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (2))){
var state_38506__$1 = state_38506;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38506__$1,(4),ch);
} else {
if((state_val_38507 === (11))){
var inst_38466 = (state_38506[(8)]);
var inst_38471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38472 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38466);
var inst_38473 = cljs.core.async.timeout.call(null,(1000));
var inst_38474 = [inst_38472,inst_38473];
var inst_38475 = (new cljs.core.PersistentVector(null,2,(5),inst_38471,inst_38474,null));
var state_38506__$1 = state_38506;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38506__$1,(14),inst_38475);
} else {
if((state_val_38507 === (9))){
var inst_38466 = (state_38506[(8)]);
var inst_38492 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38493 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38466);
var inst_38494 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38493);
var inst_38495 = [cljs.core.str("Not loading: "),cljs.core.str(inst_38494)].join('');
var inst_38496 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38495);
var state_38506__$1 = (function (){var statearr_38519 = state_38506;
(statearr_38519[(10)] = inst_38492);

return statearr_38519;
})();
var statearr_38520_38548 = state_38506__$1;
(statearr_38520_38548[(2)] = inst_38496);

(statearr_38520_38548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (5))){
var inst_38459 = (state_38506[(7)]);
var inst_38461 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38462 = (new cljs.core.PersistentArrayMap(null,2,inst_38461,null));
var inst_38463 = (new cljs.core.PersistentHashSet(null,inst_38462,null));
var inst_38464 = figwheel.client.focus_msgs.call(null,inst_38463,inst_38459);
var inst_38465 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38464);
var inst_38466 = cljs.core.first.call(null,inst_38464);
var inst_38467 = figwheel.client.autoload_QMARK_.call(null);
var state_38506__$1 = (function (){var statearr_38521 = state_38506;
(statearr_38521[(9)] = inst_38465);

(statearr_38521[(8)] = inst_38466);

return statearr_38521;
})();
if(cljs.core.truth_(inst_38467)){
var statearr_38522_38549 = state_38506__$1;
(statearr_38522_38549[(1)] = (8));

} else {
var statearr_38523_38550 = state_38506__$1;
(statearr_38523_38550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (14))){
var inst_38477 = (state_38506[(2)]);
var state_38506__$1 = state_38506;
var statearr_38524_38551 = state_38506__$1;
(statearr_38524_38551[(2)] = inst_38477);

(statearr_38524_38551[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (16))){
var state_38506__$1 = state_38506;
var statearr_38525_38552 = state_38506__$1;
(statearr_38525_38552[(2)] = null);

(statearr_38525_38552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (10))){
var inst_38498 = (state_38506[(2)]);
var state_38506__$1 = (function (){var statearr_38526 = state_38506;
(statearr_38526[(11)] = inst_38498);

return statearr_38526;
})();
var statearr_38527_38553 = state_38506__$1;
(statearr_38527_38553[(2)] = null);

(statearr_38527_38553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38507 === (8))){
var inst_38465 = (state_38506[(9)]);
var inst_38469 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38465,opts);
var state_38506__$1 = state_38506;
if(cljs.core.truth_(inst_38469)){
var statearr_38528_38554 = state_38506__$1;
(statearr_38528_38554[(1)] = (11));

} else {
var statearr_38529_38555 = state_38506__$1;
(statearr_38529_38555[(1)] = (12));

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
});})(c__30990__auto___38537,ch))
;
return ((function (switch__30878__auto__,c__30990__auto___38537,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30879__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30879__auto____0 = (function (){
var statearr_38533 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38533[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30879__auto__);

(statearr_38533[(1)] = (1));

return statearr_38533;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30879__auto____1 = (function (state_38506){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_38506);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e38534){if((e38534 instanceof Object)){
var ex__30882__auto__ = e38534;
var statearr_38535_38556 = state_38506;
(statearr_38535_38556[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38506);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38557 = state_38506;
state_38506 = G__38557;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30879__auto__ = function(state_38506){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30879__auto____1.call(this,state_38506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30879__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30879__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___38537,ch))
})();
var state__30992__auto__ = (function (){var statearr_38536 = f__30991__auto__.call(null);
(statearr_38536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___38537);

return statearr_38536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___38537,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38558_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38558_SHARP_));
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
var base_path_38561 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38561){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38560){if((e38560 instanceof Error)){
var e = e38560;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38561], null));
} else {
var e = e38560;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38561))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38562){
var map__38571 = p__38562;
var map__38571__$1 = ((((!((map__38571 == null)))?((((map__38571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38571):map__38571);
var opts = map__38571__$1;
var build_id = cljs.core.get.call(null,map__38571__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38571,map__38571__$1,opts,build_id){
return (function (p__38573){
var vec__38574 = p__38573;
var seq__38575 = cljs.core.seq.call(null,vec__38574);
var first__38576 = cljs.core.first.call(null,seq__38575);
var seq__38575__$1 = cljs.core.next.call(null,seq__38575);
var map__38577 = first__38576;
var map__38577__$1 = ((((!((map__38577 == null)))?((((map__38577.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38577.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38577):map__38577);
var msg = map__38577__$1;
var msg_name = cljs.core.get.call(null,map__38577__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38575__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38574,seq__38575,first__38576,seq__38575__$1,map__38577,map__38577__$1,msg,msg_name,_,map__38571,map__38571__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38574,seq__38575,first__38576,seq__38575__$1,map__38577,map__38577__$1,msg,msg_name,_,map__38571,map__38571__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38571,map__38571__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38585){
var vec__38586 = p__38585;
var seq__38587 = cljs.core.seq.call(null,vec__38586);
var first__38588 = cljs.core.first.call(null,seq__38587);
var seq__38587__$1 = cljs.core.next.call(null,seq__38587);
var map__38589 = first__38588;
var map__38589__$1 = ((((!((map__38589 == null)))?((((map__38589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38589):map__38589);
var msg = map__38589__$1;
var msg_name = cljs.core.get.call(null,map__38589__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38587__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38591){
var map__38603 = p__38591;
var map__38603__$1 = ((((!((map__38603 == null)))?((((map__38603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38603):map__38603);
var on_compile_warning = cljs.core.get.call(null,map__38603__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38603__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38603,map__38603__$1,on_compile_warning,on_compile_fail){
return (function (p__38605){
var vec__38606 = p__38605;
var seq__38607 = cljs.core.seq.call(null,vec__38606);
var first__38608 = cljs.core.first.call(null,seq__38607);
var seq__38607__$1 = cljs.core.next.call(null,seq__38607);
var map__38609 = first__38608;
var map__38609__$1 = ((((!((map__38609 == null)))?((((map__38609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38609):map__38609);
var msg = map__38609__$1;
var msg_name = cljs.core.get.call(null,map__38609__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38607__$1;
var pred__38611 = cljs.core._EQ_;
var expr__38612 = msg_name;
if(cljs.core.truth_(pred__38611.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38612))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38611.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38612))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38603,map__38603__$1,on_compile_warning,on_compile_fail))
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
var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__,msg_hist,msg_names,msg){
return (function (state_38840){
var state_val_38841 = (state_38840[(1)]);
if((state_val_38841 === (7))){
var inst_38760 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38760)){
var statearr_38842_38892 = state_38840__$1;
(statearr_38842_38892[(1)] = (8));

} else {
var statearr_38843_38893 = state_38840__$1;
(statearr_38843_38893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (20))){
var inst_38834 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38844_38894 = state_38840__$1;
(statearr_38844_38894[(2)] = inst_38834);

(statearr_38844_38894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (27))){
var inst_38830 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38845_38895 = state_38840__$1;
(statearr_38845_38895[(2)] = inst_38830);

(statearr_38845_38895[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (1))){
var inst_38753 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38753)){
var statearr_38846_38896 = state_38840__$1;
(statearr_38846_38896[(1)] = (2));

} else {
var statearr_38847_38897 = state_38840__$1;
(statearr_38847_38897[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (24))){
var inst_38832 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38848_38898 = state_38840__$1;
(statearr_38848_38898[(2)] = inst_38832);

(statearr_38848_38898[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (4))){
var inst_38838 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38840__$1,inst_38838);
} else {
if((state_val_38841 === (15))){
var inst_38836 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38849_38899 = state_38840__$1;
(statearr_38849_38899[(2)] = inst_38836);

(statearr_38849_38899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (21))){
var inst_38789 = (state_38840[(2)]);
var inst_38790 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38791 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38790);
var state_38840__$1 = (function (){var statearr_38850 = state_38840;
(statearr_38850[(7)] = inst_38789);

return statearr_38850;
})();
var statearr_38851_38900 = state_38840__$1;
(statearr_38851_38900[(2)] = inst_38791);

(statearr_38851_38900[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (31))){
var inst_38819 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38819)){
var statearr_38852_38901 = state_38840__$1;
(statearr_38852_38901[(1)] = (34));

} else {
var statearr_38853_38902 = state_38840__$1;
(statearr_38853_38902[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (32))){
var inst_38828 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38854_38903 = state_38840__$1;
(statearr_38854_38903[(2)] = inst_38828);

(statearr_38854_38903[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (33))){
var inst_38815 = (state_38840[(2)]);
var inst_38816 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38817 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38816);
var state_38840__$1 = (function (){var statearr_38855 = state_38840;
(statearr_38855[(8)] = inst_38815);

return statearr_38855;
})();
var statearr_38856_38904 = state_38840__$1;
(statearr_38856_38904[(2)] = inst_38817);

(statearr_38856_38904[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (13))){
var inst_38774 = figwheel.client.heads_up.clear.call(null);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(16),inst_38774);
} else {
if((state_val_38841 === (22))){
var inst_38795 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38796 = figwheel.client.heads_up.append_warning_message.call(null,inst_38795);
var state_38840__$1 = state_38840;
var statearr_38857_38905 = state_38840__$1;
(statearr_38857_38905[(2)] = inst_38796);

(statearr_38857_38905[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (36))){
var inst_38826 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38858_38906 = state_38840__$1;
(statearr_38858_38906[(2)] = inst_38826);

(statearr_38858_38906[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (29))){
var inst_38806 = (state_38840[(2)]);
var inst_38807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38808 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38807);
var state_38840__$1 = (function (){var statearr_38859 = state_38840;
(statearr_38859[(9)] = inst_38806);

return statearr_38859;
})();
var statearr_38860_38907 = state_38840__$1;
(statearr_38860_38907[(2)] = inst_38808);

(statearr_38860_38907[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (6))){
var inst_38755 = (state_38840[(10)]);
var state_38840__$1 = state_38840;
var statearr_38861_38908 = state_38840__$1;
(statearr_38861_38908[(2)] = inst_38755);

(statearr_38861_38908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (28))){
var inst_38802 = (state_38840[(2)]);
var inst_38803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38804 = figwheel.client.heads_up.display_warning.call(null,inst_38803);
var state_38840__$1 = (function (){var statearr_38862 = state_38840;
(statearr_38862[(11)] = inst_38802);

return statearr_38862;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(29),inst_38804);
} else {
if((state_val_38841 === (25))){
var inst_38800 = figwheel.client.heads_up.clear.call(null);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(28),inst_38800);
} else {
if((state_val_38841 === (34))){
var inst_38821 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(37),inst_38821);
} else {
if((state_val_38841 === (17))){
var inst_38780 = (state_38840[(2)]);
var inst_38781 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38782 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38781);
var state_38840__$1 = (function (){var statearr_38863 = state_38840;
(statearr_38863[(12)] = inst_38780);

return statearr_38863;
})();
var statearr_38864_38909 = state_38840__$1;
(statearr_38864_38909[(2)] = inst_38782);

(statearr_38864_38909[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (3))){
var inst_38772 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38772)){
var statearr_38865_38910 = state_38840__$1;
(statearr_38865_38910[(1)] = (13));

} else {
var statearr_38866_38911 = state_38840__$1;
(statearr_38866_38911[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (12))){
var inst_38768 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38867_38912 = state_38840__$1;
(statearr_38867_38912[(2)] = inst_38768);

(statearr_38867_38912[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (2))){
var inst_38755 = (state_38840[(10)]);
var inst_38755__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38840__$1 = (function (){var statearr_38868 = state_38840;
(statearr_38868[(10)] = inst_38755__$1);

return statearr_38868;
})();
if(cljs.core.truth_(inst_38755__$1)){
var statearr_38869_38913 = state_38840__$1;
(statearr_38869_38913[(1)] = (5));

} else {
var statearr_38870_38914 = state_38840__$1;
(statearr_38870_38914[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (23))){
var inst_38798 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38798)){
var statearr_38871_38915 = state_38840__$1;
(statearr_38871_38915[(1)] = (25));

} else {
var statearr_38872_38916 = state_38840__$1;
(statearr_38872_38916[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (35))){
var state_38840__$1 = state_38840;
var statearr_38873_38917 = state_38840__$1;
(statearr_38873_38917[(2)] = null);

(statearr_38873_38917[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (19))){
var inst_38793 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38793)){
var statearr_38874_38918 = state_38840__$1;
(statearr_38874_38918[(1)] = (22));

} else {
var statearr_38875_38919 = state_38840__$1;
(statearr_38875_38919[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (11))){
var inst_38764 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38876_38920 = state_38840__$1;
(statearr_38876_38920[(2)] = inst_38764);

(statearr_38876_38920[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (9))){
var inst_38766 = figwheel.client.heads_up.clear.call(null);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(12),inst_38766);
} else {
if((state_val_38841 === (5))){
var inst_38757 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38840__$1 = state_38840;
var statearr_38877_38921 = state_38840__$1;
(statearr_38877_38921[(2)] = inst_38757);

(statearr_38877_38921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (14))){
var inst_38784 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38784)){
var statearr_38878_38922 = state_38840__$1;
(statearr_38878_38922[(1)] = (18));

} else {
var statearr_38879_38923 = state_38840__$1;
(statearr_38879_38923[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (26))){
var inst_38810 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38840__$1 = state_38840;
if(cljs.core.truth_(inst_38810)){
var statearr_38880_38924 = state_38840__$1;
(statearr_38880_38924[(1)] = (30));

} else {
var statearr_38881_38925 = state_38840__$1;
(statearr_38881_38925[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (16))){
var inst_38776 = (state_38840[(2)]);
var inst_38777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38778 = figwheel.client.heads_up.display_exception.call(null,inst_38777);
var state_38840__$1 = (function (){var statearr_38882 = state_38840;
(statearr_38882[(13)] = inst_38776);

return statearr_38882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(17),inst_38778);
} else {
if((state_val_38841 === (30))){
var inst_38812 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38813 = figwheel.client.heads_up.display_warning.call(null,inst_38812);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(33),inst_38813);
} else {
if((state_val_38841 === (10))){
var inst_38770 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38883_38926 = state_38840__$1;
(statearr_38883_38926[(2)] = inst_38770);

(statearr_38883_38926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (18))){
var inst_38786 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38787 = figwheel.client.heads_up.display_exception.call(null,inst_38786);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(21),inst_38787);
} else {
if((state_val_38841 === (37))){
var inst_38823 = (state_38840[(2)]);
var state_38840__$1 = state_38840;
var statearr_38884_38927 = state_38840__$1;
(statearr_38884_38927[(2)] = inst_38823);

(statearr_38884_38927[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38841 === (8))){
var inst_38762 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38840__$1 = state_38840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38840__$1,(11),inst_38762);
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
});})(c__30990__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30878__auto__,c__30990__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto____0 = (function (){
var statearr_38888 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38888[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto__);

(statearr_38888[(1)] = (1));

return statearr_38888;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto____1 = (function (state_38840){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_38840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e38889){if((e38889 instanceof Object)){
var ex__30882__auto__ = e38889;
var statearr_38890_38928 = state_38840;
(statearr_38890_38928[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38929 = state_38840;
state_38840 = G__38929;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto__ = function(state_38840){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto____1.call(this,state_38840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__,msg_hist,msg_names,msg))
})();
var state__30992__auto__ = (function (){var statearr_38891 = f__30991__auto__.call(null);
(statearr_38891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_38891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__,msg_hist,msg_names,msg))
);

return c__30990__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30990__auto___38992 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___38992,ch){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___38992,ch){
return (function (state_38975){
var state_val_38976 = (state_38975[(1)]);
if((state_val_38976 === (1))){
var state_38975__$1 = state_38975;
var statearr_38977_38993 = state_38975__$1;
(statearr_38977_38993[(2)] = null);

(statearr_38977_38993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (2))){
var state_38975__$1 = state_38975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38975__$1,(4),ch);
} else {
if((state_val_38976 === (3))){
var inst_38973 = (state_38975[(2)]);
var state_38975__$1 = state_38975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38975__$1,inst_38973);
} else {
if((state_val_38976 === (4))){
var inst_38963 = (state_38975[(7)]);
var inst_38963__$1 = (state_38975[(2)]);
var state_38975__$1 = (function (){var statearr_38978 = state_38975;
(statearr_38978[(7)] = inst_38963__$1);

return statearr_38978;
})();
if(cljs.core.truth_(inst_38963__$1)){
var statearr_38979_38994 = state_38975__$1;
(statearr_38979_38994[(1)] = (5));

} else {
var statearr_38980_38995 = state_38975__$1;
(statearr_38980_38995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (5))){
var inst_38963 = (state_38975[(7)]);
var inst_38965 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38963);
var state_38975__$1 = state_38975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38975__$1,(8),inst_38965);
} else {
if((state_val_38976 === (6))){
var state_38975__$1 = state_38975;
var statearr_38981_38996 = state_38975__$1;
(statearr_38981_38996[(2)] = null);

(statearr_38981_38996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (7))){
var inst_38971 = (state_38975[(2)]);
var state_38975__$1 = state_38975;
var statearr_38982_38997 = state_38975__$1;
(statearr_38982_38997[(2)] = inst_38971);

(statearr_38982_38997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (8))){
var inst_38967 = (state_38975[(2)]);
var state_38975__$1 = (function (){var statearr_38983 = state_38975;
(statearr_38983[(8)] = inst_38967);

return statearr_38983;
})();
var statearr_38984_38998 = state_38975__$1;
(statearr_38984_38998[(2)] = null);

(statearr_38984_38998[(1)] = (2));


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
});})(c__30990__auto___38992,ch))
;
return ((function (switch__30878__auto__,c__30990__auto___38992,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30879__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30879__auto____0 = (function (){
var statearr_38988 = [null,null,null,null,null,null,null,null,null];
(statearr_38988[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30879__auto__);

(statearr_38988[(1)] = (1));

return statearr_38988;
});
var figwheel$client$heads_up_plugin_$_state_machine__30879__auto____1 = (function (state_38975){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_38975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e38989){if((e38989 instanceof Object)){
var ex__30882__auto__ = e38989;
var statearr_38990_38999 = state_38975;
(statearr_38990_38999[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39000 = state_38975;
state_38975 = G__39000;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30879__auto__ = function(state_38975){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30879__auto____1.call(this,state_38975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30879__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30879__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___38992,ch))
})();
var state__30992__auto__ = (function (){var statearr_38991 = f__30991__auto__.call(null);
(statearr_38991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___38992);

return statearr_38991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___38992,ch))
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
var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__){
return (function (state_39021){
var state_val_39022 = (state_39021[(1)]);
if((state_val_39022 === (1))){
var inst_39016 = cljs.core.async.timeout.call(null,(3000));
var state_39021__$1 = state_39021;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39021__$1,(2),inst_39016);
} else {
if((state_val_39022 === (2))){
var inst_39018 = (state_39021[(2)]);
var inst_39019 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39021__$1 = (function (){var statearr_39023 = state_39021;
(statearr_39023[(7)] = inst_39018);

return statearr_39023;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39021__$1,inst_39019);
} else {
return null;
}
}
});})(c__30990__auto__))
;
return ((function (switch__30878__auto__,c__30990__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30879__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30879__auto____0 = (function (){
var statearr_39027 = [null,null,null,null,null,null,null,null];
(statearr_39027[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30879__auto__);

(statearr_39027[(1)] = (1));

return statearr_39027;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30879__auto____1 = (function (state_39021){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_39021);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e39028){if((e39028 instanceof Object)){
var ex__30882__auto__ = e39028;
var statearr_39029_39031 = state_39021;
(statearr_39029_39031[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39021);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39032 = state_39021;
state_39021 = G__39032;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30879__auto__ = function(state_39021){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30879__auto____1.call(this,state_39021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30879__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30879__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__))
})();
var state__30992__auto__ = (function (){var statearr_39030 = f__30991__auto__.call(null);
(statearr_39030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_39030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__))
);

return c__30990__auto__;
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
var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39055){
var state_val_39056 = (state_39055[(1)]);
if((state_val_39056 === (1))){
var inst_39049 = cljs.core.async.timeout.call(null,(2000));
var state_39055__$1 = state_39055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39055__$1,(2),inst_39049);
} else {
if((state_val_39056 === (2))){
var inst_39051 = (state_39055[(2)]);
var inst_39052 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_39053 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39052);
var state_39055__$1 = (function (){var statearr_39057 = state_39055;
(statearr_39057[(7)] = inst_39051);

return statearr_39057;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39055__$1,inst_39053);
} else {
return null;
}
}
});})(c__30990__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30878__auto__,c__30990__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto____0 = (function (){
var statearr_39061 = [null,null,null,null,null,null,null,null];
(statearr_39061[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto__);

(statearr_39061[(1)] = (1));

return statearr_39061;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto____1 = (function (state_39055){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_39055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e39062){if((e39062 instanceof Object)){
var ex__30882__auto__ = e39062;
var statearr_39063_39065 = state_39055;
(statearr_39063_39065[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39066 = state_39055;
state_39055 = G__39066;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto__ = function(state_39055){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto____1.call(this,state_39055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30992__auto__ = (function (){var statearr_39064 = f__30991__auto__.call(null);
(statearr_39064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_39064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__,figwheel_version,temp__4657__auto__))
);

return c__30990__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39067){
var map__39071 = p__39067;
var map__39071__$1 = ((((!((map__39071 == null)))?((((map__39071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39071):map__39071);
var file = cljs.core.get.call(null,map__39071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39071__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39071__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39073 = "";
var G__39073__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__39073),cljs.core.str("file "),cljs.core.str(file)].join(''):G__39073);
var G__39073__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__39073__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__39073__$1);
if(cljs.core.truth_((function (){var and__25084__auto__ = line;
if(cljs.core.truth_(and__25084__auto__)){
return column;
} else {
return and__25084__auto__;
}
})())){
return [cljs.core.str(G__39073__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__39073__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39074){
var map__39081 = p__39074;
var map__39081__$1 = ((((!((map__39081 == null)))?((((map__39081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39081):map__39081);
var ed = map__39081__$1;
var formatted_exception = cljs.core.get.call(null,map__39081__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39081__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39081__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39083_39087 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39084_39088 = null;
var count__39085_39089 = (0);
var i__39086_39090 = (0);
while(true){
if((i__39086_39090 < count__39085_39089)){
var msg_39091 = cljs.core._nth.call(null,chunk__39084_39088,i__39086_39090);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39091);

var G__39092 = seq__39083_39087;
var G__39093 = chunk__39084_39088;
var G__39094 = count__39085_39089;
var G__39095 = (i__39086_39090 + (1));
seq__39083_39087 = G__39092;
chunk__39084_39088 = G__39093;
count__39085_39089 = G__39094;
i__39086_39090 = G__39095;
continue;
} else {
var temp__4657__auto___39096 = cljs.core.seq.call(null,seq__39083_39087);
if(temp__4657__auto___39096){
var seq__39083_39097__$1 = temp__4657__auto___39096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39083_39097__$1)){
var c__25907__auto___39098 = cljs.core.chunk_first.call(null,seq__39083_39097__$1);
var G__39099 = cljs.core.chunk_rest.call(null,seq__39083_39097__$1);
var G__39100 = c__25907__auto___39098;
var G__39101 = cljs.core.count.call(null,c__25907__auto___39098);
var G__39102 = (0);
seq__39083_39087 = G__39099;
chunk__39084_39088 = G__39100;
count__39085_39089 = G__39101;
i__39086_39090 = G__39102;
continue;
} else {
var msg_39103 = cljs.core.first.call(null,seq__39083_39097__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39103);

var G__39104 = cljs.core.next.call(null,seq__39083_39097__$1);
var G__39105 = null;
var G__39106 = (0);
var G__39107 = (0);
seq__39083_39087 = G__39104;
chunk__39084_39088 = G__39105;
count__39085_39089 = G__39106;
i__39086_39090 = G__39107;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39108){
var map__39111 = p__39108;
var map__39111__$1 = ((((!((map__39111 == null)))?((((map__39111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39111):map__39111);
var w = map__39111__$1;
var message = cljs.core.get.call(null,map__39111__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39123 = cljs.core.seq.call(null,plugins);
var chunk__39124 = null;
var count__39125 = (0);
var i__39126 = (0);
while(true){
if((i__39126 < count__39125)){
var vec__39127 = cljs.core._nth.call(null,chunk__39124,i__39126);
var k = cljs.core.nth.call(null,vec__39127,(0),null);
var plugin = cljs.core.nth.call(null,vec__39127,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39133 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39123,chunk__39124,count__39125,i__39126,pl_39133,vec__39127,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39133.call(null,msg_hist);
});})(seq__39123,chunk__39124,count__39125,i__39126,pl_39133,vec__39127,k,plugin))
);
} else {
}

var G__39134 = seq__39123;
var G__39135 = chunk__39124;
var G__39136 = count__39125;
var G__39137 = (i__39126 + (1));
seq__39123 = G__39134;
chunk__39124 = G__39135;
count__39125 = G__39136;
i__39126 = G__39137;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39123);
if(temp__4657__auto__){
var seq__39123__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39123__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__39123__$1);
var G__39138 = cljs.core.chunk_rest.call(null,seq__39123__$1);
var G__39139 = c__25907__auto__;
var G__39140 = cljs.core.count.call(null,c__25907__auto__);
var G__39141 = (0);
seq__39123 = G__39138;
chunk__39124 = G__39139;
count__39125 = G__39140;
i__39126 = G__39141;
continue;
} else {
var vec__39130 = cljs.core.first.call(null,seq__39123__$1);
var k = cljs.core.nth.call(null,vec__39130,(0),null);
var plugin = cljs.core.nth.call(null,vec__39130,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39142 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39123,chunk__39124,count__39125,i__39126,pl_39142,vec__39130,k,plugin,seq__39123__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39142.call(null,msg_hist);
});})(seq__39123,chunk__39124,count__39125,i__39126,pl_39142,vec__39130,k,plugin,seq__39123__$1,temp__4657__auto__))
);
} else {
}

var G__39143 = cljs.core.next.call(null,seq__39123__$1);
var G__39144 = null;
var G__39145 = (0);
var G__39146 = (0);
seq__39123 = G__39143;
chunk__39124 = G__39144;
count__39125 = G__39145;
i__39126 = G__39146;
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
var args39147 = [];
var len__26171__auto___39154 = arguments.length;
var i__26172__auto___39155 = (0);
while(true){
if((i__26172__auto___39155 < len__26171__auto___39154)){
args39147.push((arguments[i__26172__auto___39155]));

var G__39156 = (i__26172__auto___39155 + (1));
i__26172__auto___39155 = G__39156;
continue;
} else {
}
break;
}

var G__39149 = args39147.length;
switch (G__39149) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39147.length)].join('')));

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

var seq__39150_39158 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39151_39159 = null;
var count__39152_39160 = (0);
var i__39153_39161 = (0);
while(true){
if((i__39153_39161 < count__39152_39160)){
var msg_39162 = cljs.core._nth.call(null,chunk__39151_39159,i__39153_39161);
figwheel.client.socket.handle_incoming_message.call(null,msg_39162);

var G__39163 = seq__39150_39158;
var G__39164 = chunk__39151_39159;
var G__39165 = count__39152_39160;
var G__39166 = (i__39153_39161 + (1));
seq__39150_39158 = G__39163;
chunk__39151_39159 = G__39164;
count__39152_39160 = G__39165;
i__39153_39161 = G__39166;
continue;
} else {
var temp__4657__auto___39167 = cljs.core.seq.call(null,seq__39150_39158);
if(temp__4657__auto___39167){
var seq__39150_39168__$1 = temp__4657__auto___39167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39150_39168__$1)){
var c__25907__auto___39169 = cljs.core.chunk_first.call(null,seq__39150_39168__$1);
var G__39170 = cljs.core.chunk_rest.call(null,seq__39150_39168__$1);
var G__39171 = c__25907__auto___39169;
var G__39172 = cljs.core.count.call(null,c__25907__auto___39169);
var G__39173 = (0);
seq__39150_39158 = G__39170;
chunk__39151_39159 = G__39171;
count__39152_39160 = G__39172;
i__39153_39161 = G__39173;
continue;
} else {
var msg_39174 = cljs.core.first.call(null,seq__39150_39168__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39174);

var G__39175 = cljs.core.next.call(null,seq__39150_39168__$1);
var G__39176 = null;
var G__39177 = (0);
var G__39178 = (0);
seq__39150_39158 = G__39175;
chunk__39151_39159 = G__39176;
count__39152_39160 = G__39177;
i__39153_39161 = G__39178;
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
var len__26171__auto___39183 = arguments.length;
var i__26172__auto___39184 = (0);
while(true){
if((i__26172__auto___39184 < len__26171__auto___39183)){
args__26178__auto__.push((arguments[i__26172__auto___39184]));

var G__39185 = (i__26172__auto___39184 + (1));
i__26172__auto___39184 = G__39185;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((0) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26179__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39180){
var map__39181 = p__39180;
var map__39181__$1 = ((((!((map__39181 == null)))?((((map__39181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39181):map__39181);
var opts = map__39181__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39179){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39179));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39187){if((e39187 instanceof Error)){
var e = e39187;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39187;

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
return (function (p__39191){
var map__39192 = p__39191;
var map__39192__$1 = ((((!((map__39192 == null)))?((((map__39192.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39192.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39192):map__39192);
var msg_name = cljs.core.get.call(null,map__39192__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1504172209735