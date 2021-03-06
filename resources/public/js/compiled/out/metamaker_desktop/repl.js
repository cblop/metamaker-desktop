// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.repl');
goog.require('cljs.core');
goog.require('re_frame.core');
metamaker_desktop.repl.db = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db","db",993250759)], null));
metamaker_desktop.repl.data = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206)], null));
new cljs.core.Keyword(null,"chart-data","chart-data",-1181877206).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"cat-qa","cat-qa",89152413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
cljs.core.map.call(null,(function (p1__9567_SHARP_){
return new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,new cljs.core.Keyword(null,"cat-bs","cat-bs",-1717422172).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db)),p1__9567_SHARP_));
}),new cljs.core.Keyword(null,"cat-qb","cat-qb",1998287829).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db)));
new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"all-cats","all-cats",627450712).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
/**
 * true if coll contains elm
 */
metamaker_desktop.repl.in_QMARK_ = (function metamaker_desktop$repl$in_QMARK_(coll,elm){
return cljs.core.some.call(null,(function (p1__9568_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__9568_SHARP_);
}),coll);
});
metamaker_desktop.repl.in_QMARK_.call(null,new cljs.core.Keyword(null,"selected-sets","selected-sets",989842372).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db)),"0");
cljs.core.deref.call(null,metamaker_desktop.repl.data);
cljs.core.deref.call(null,metamaker_desktop.repl.db);
metamaker_desktop.repl.urls = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-urls","data-urls",1907911823)], null));
cljs.core.deref.call(null,metamaker_desktop.repl.urls);
new cljs.core.Keyword(null,"datasets","datasets",1896364419).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
cljs.core.re_find.call(null,/http:\/\/localhost/,"http://mist.com");
cljs.core.re_find.call(null,/http:\/\/localhost/,"http://localhost:3030/test.csv");
cljs.core.keys.call(null,cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"data-urls","data-urls",1907911823).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
cljs.core.vec.call(null,cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__9569_SHARP_){
return cljs.core.get.call(null,p1__9569_SHARP_,new cljs.core.Keyword(null,"parent","parent",-878878779));
}),new cljs.core.Keyword(null,"data-types","data-types",-2140125264).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db)))));
cljs.core.map.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db)));
cljs.core.first.call(null,new cljs.core.Keyword(null,"datatypes","datatypes",-199835968).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db)));
metamaker_desktop.repl.metas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metas-for-cat","metas-for-cat",-1093682482),"time"], null));
metamaker_desktop.repl.gmetas = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-meta","get-meta",-1135394163)], null));
metamaker_desktop.repl.cat_label = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cat-label","cat-label",1694734600),(0)], null));
cljs.core.deref.call(null,metamaker_desktop.repl.gmetas);
cljs.core.deref.call(null,metamaker_desktop.repl.cat_label);
cljs.core.deref.call(null,metamaker_desktop.repl.metas);
metamaker_desktop.repl.rows = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680)], null));
metamaker_desktop.repl.types = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datatypes","datatypes",-199835968)], null));
cljs.core._EQ_.call(null,cljs.core.type.call(null,"hello"),String);
cljs.core.first.call(null,new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db)));
new cljs.core.Keyword(null,"row-types","row-types",-301702756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"metas","metas",-187243671).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,metamaker_desktop.repl.db));
cljs.core.first.call(null,metamaker_desktop.repl.rows);
metamaker_desktop.repl.stepfn = (function metamaker_desktop$repl$stepfn(results,parser){
return cljs.core.println.call(null,[cljs.core.str("Row data:"),cljs.core.str(cljs.core.first.call(null,results.data))].join(''));
});
Papa.parse("http://mist.cs.bath.ac.uk/refit-cleaned/CLEAN_House1.csv",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"download","download",-300081668),true,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),metamaker_desktop.repl.stepfn,new cljs.core.Keyword(null,"header","header",119441134),true,new cljs.core.Keyword(null,"preview","preview",451279890),(100)], null)));
Papa.parse("/home/_mthom/DM4T/refit-clean/CLEAN_House1.csv",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"download","download",-300081668),true,new cljs.core.Keyword(null,"chunk","chunk",-1191159620),metamaker_desktop.repl.stepfn,new cljs.core.Keyword(null,"dynamic-typing","dynamic-typing",788095199),true,new cljs.core.Keyword(null,"header","header",119441134),true,new cljs.core.Keyword(null,"worker","worker",938239996),true], null)));

//# sourceMappingURL=repl.js.map?rel=1505229166494