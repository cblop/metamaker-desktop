// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36197){
var map__36222 = p__36197;
var map__36222__$1 = ((((!((map__36222 == null)))?((((map__36222.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36222.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36222):map__36222);
var m = map__36222__$1;
var n = cljs.core.get.call(null,map__36222__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36222__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36224_36246 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36225_36247 = null;
var count__36226_36248 = (0);
var i__36227_36249 = (0);
while(true){
if((i__36227_36249 < count__36226_36248)){
var f_36250 = cljs.core._nth.call(null,chunk__36225_36247,i__36227_36249);
cljs.core.println.call(null,"  ",f_36250);

var G__36251 = seq__36224_36246;
var G__36252 = chunk__36225_36247;
var G__36253 = count__36226_36248;
var G__36254 = (i__36227_36249 + (1));
seq__36224_36246 = G__36251;
chunk__36225_36247 = G__36252;
count__36226_36248 = G__36253;
i__36227_36249 = G__36254;
continue;
} else {
var temp__4657__auto___36255 = cljs.core.seq.call(null,seq__36224_36246);
if(temp__4657__auto___36255){
var seq__36224_36256__$1 = temp__4657__auto___36255;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36224_36256__$1)){
var c__25907__auto___36257 = cljs.core.chunk_first.call(null,seq__36224_36256__$1);
var G__36258 = cljs.core.chunk_rest.call(null,seq__36224_36256__$1);
var G__36259 = c__25907__auto___36257;
var G__36260 = cljs.core.count.call(null,c__25907__auto___36257);
var G__36261 = (0);
seq__36224_36246 = G__36258;
chunk__36225_36247 = G__36259;
count__36226_36248 = G__36260;
i__36227_36249 = G__36261;
continue;
} else {
var f_36262 = cljs.core.first.call(null,seq__36224_36256__$1);
cljs.core.println.call(null,"  ",f_36262);

var G__36263 = cljs.core.next.call(null,seq__36224_36256__$1);
var G__36264 = null;
var G__36265 = (0);
var G__36266 = (0);
seq__36224_36246 = G__36263;
chunk__36225_36247 = G__36264;
count__36226_36248 = G__36265;
i__36227_36249 = G__36266;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36267 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25096__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36267);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36267)))?cljs.core.second.call(null,arglists_36267):arglists_36267));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36228_36268 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36229_36269 = null;
var count__36230_36270 = (0);
var i__36231_36271 = (0);
while(true){
if((i__36231_36271 < count__36230_36270)){
var vec__36232_36272 = cljs.core._nth.call(null,chunk__36229_36269,i__36231_36271);
var name_36273 = cljs.core.nth.call(null,vec__36232_36272,(0),null);
var map__36235_36274 = cljs.core.nth.call(null,vec__36232_36272,(1),null);
var map__36235_36275__$1 = ((((!((map__36235_36274 == null)))?((((map__36235_36274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36235_36274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36235_36274):map__36235_36274);
var doc_36276 = cljs.core.get.call(null,map__36235_36275__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36277 = cljs.core.get.call(null,map__36235_36275__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36273);

cljs.core.println.call(null," ",arglists_36277);

if(cljs.core.truth_(doc_36276)){
cljs.core.println.call(null," ",doc_36276);
} else {
}

var G__36278 = seq__36228_36268;
var G__36279 = chunk__36229_36269;
var G__36280 = count__36230_36270;
var G__36281 = (i__36231_36271 + (1));
seq__36228_36268 = G__36278;
chunk__36229_36269 = G__36279;
count__36230_36270 = G__36280;
i__36231_36271 = G__36281;
continue;
} else {
var temp__4657__auto___36282 = cljs.core.seq.call(null,seq__36228_36268);
if(temp__4657__auto___36282){
var seq__36228_36283__$1 = temp__4657__auto___36282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36228_36283__$1)){
var c__25907__auto___36284 = cljs.core.chunk_first.call(null,seq__36228_36283__$1);
var G__36285 = cljs.core.chunk_rest.call(null,seq__36228_36283__$1);
var G__36286 = c__25907__auto___36284;
var G__36287 = cljs.core.count.call(null,c__25907__auto___36284);
var G__36288 = (0);
seq__36228_36268 = G__36285;
chunk__36229_36269 = G__36286;
count__36230_36270 = G__36287;
i__36231_36271 = G__36288;
continue;
} else {
var vec__36237_36289 = cljs.core.first.call(null,seq__36228_36283__$1);
var name_36290 = cljs.core.nth.call(null,vec__36237_36289,(0),null);
var map__36240_36291 = cljs.core.nth.call(null,vec__36237_36289,(1),null);
var map__36240_36292__$1 = ((((!((map__36240_36291 == null)))?((((map__36240_36291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36240_36291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36240_36291):map__36240_36291);
var doc_36293 = cljs.core.get.call(null,map__36240_36292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36294 = cljs.core.get.call(null,map__36240_36292__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36290);

cljs.core.println.call(null," ",arglists_36294);

if(cljs.core.truth_(doc_36293)){
cljs.core.println.call(null," ",doc_36293);
} else {
}

var G__36295 = cljs.core.next.call(null,seq__36228_36283__$1);
var G__36296 = null;
var G__36297 = (0);
var G__36298 = (0);
seq__36228_36268 = G__36295;
chunk__36229_36269 = G__36296;
count__36230_36270 = G__36297;
i__36231_36271 = G__36298;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36242 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36243 = null;
var count__36244 = (0);
var i__36245 = (0);
while(true){
if((i__36245 < count__36244)){
var role = cljs.core._nth.call(null,chunk__36243,i__36245);
var temp__4657__auto___36299__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36299__$1)){
var spec_36300 = temp__4657__auto___36299__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36300));
} else {
}

var G__36301 = seq__36242;
var G__36302 = chunk__36243;
var G__36303 = count__36244;
var G__36304 = (i__36245 + (1));
seq__36242 = G__36301;
chunk__36243 = G__36302;
count__36244 = G__36303;
i__36245 = G__36304;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36242);
if(temp__4657__auto____$1){
var seq__36242__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36242__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__36242__$1);
var G__36305 = cljs.core.chunk_rest.call(null,seq__36242__$1);
var G__36306 = c__25907__auto__;
var G__36307 = cljs.core.count.call(null,c__25907__auto__);
var G__36308 = (0);
seq__36242 = G__36305;
chunk__36243 = G__36306;
count__36244 = G__36307;
i__36245 = G__36308;
continue;
} else {
var role = cljs.core.first.call(null,seq__36242__$1);
var temp__4657__auto___36309__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36309__$2)){
var spec_36310 = temp__4657__auto___36309__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36310));
} else {
}

var G__36311 = cljs.core.next.call(null,seq__36242__$1);
var G__36312 = null;
var G__36313 = (0);
var G__36314 = (0);
seq__36242 = G__36311;
chunk__36243 = G__36312;
count__36244 = G__36313;
i__36245 = G__36314;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1504172205934