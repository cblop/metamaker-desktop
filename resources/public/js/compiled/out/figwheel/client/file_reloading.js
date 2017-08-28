// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25096__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25096__auto__){
return or__25096__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25096__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44587_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44587_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__44592 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44593 = null;
var count__44594 = (0);
var i__44595 = (0);
while(true){
if((i__44595 < count__44594)){
var n = cljs.core._nth.call(null,chunk__44593,i__44595);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44596 = seq__44592;
var G__44597 = chunk__44593;
var G__44598 = count__44594;
var G__44599 = (i__44595 + (1));
seq__44592 = G__44596;
chunk__44593 = G__44597;
count__44594 = G__44598;
i__44595 = G__44599;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44592);
if(temp__4657__auto__){
var seq__44592__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44592__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__44592__$1);
var G__44600 = cljs.core.chunk_rest.call(null,seq__44592__$1);
var G__44601 = c__25907__auto__;
var G__44602 = cljs.core.count.call(null,c__25907__auto__);
var G__44603 = (0);
seq__44592 = G__44600;
chunk__44593 = G__44601;
count__44594 = G__44602;
i__44595 = G__44603;
continue;
} else {
var n = cljs.core.first.call(null,seq__44592__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44604 = cljs.core.next.call(null,seq__44592__$1);
var G__44605 = null;
var G__44606 = (0);
var G__44607 = (0);
seq__44592 = G__44604;
chunk__44593 = G__44605;
count__44594 = G__44606;
i__44595 = G__44607;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__44658_44669 = cljs.core.seq.call(null,deps);
var chunk__44659_44670 = null;
var count__44660_44671 = (0);
var i__44661_44672 = (0);
while(true){
if((i__44661_44672 < count__44660_44671)){
var dep_44673 = cljs.core._nth.call(null,chunk__44659_44670,i__44661_44672);
topo_sort_helper_STAR_.call(null,dep_44673,(depth + (1)),state);

var G__44674 = seq__44658_44669;
var G__44675 = chunk__44659_44670;
var G__44676 = count__44660_44671;
var G__44677 = (i__44661_44672 + (1));
seq__44658_44669 = G__44674;
chunk__44659_44670 = G__44675;
count__44660_44671 = G__44676;
i__44661_44672 = G__44677;
continue;
} else {
var temp__4657__auto___44678 = cljs.core.seq.call(null,seq__44658_44669);
if(temp__4657__auto___44678){
var seq__44658_44679__$1 = temp__4657__auto___44678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44658_44679__$1)){
var c__25907__auto___44680 = cljs.core.chunk_first.call(null,seq__44658_44679__$1);
var G__44681 = cljs.core.chunk_rest.call(null,seq__44658_44679__$1);
var G__44682 = c__25907__auto___44680;
var G__44683 = cljs.core.count.call(null,c__25907__auto___44680);
var G__44684 = (0);
seq__44658_44669 = G__44681;
chunk__44659_44670 = G__44682;
count__44660_44671 = G__44683;
i__44661_44672 = G__44684;
continue;
} else {
var dep_44685 = cljs.core.first.call(null,seq__44658_44679__$1);
topo_sort_helper_STAR_.call(null,dep_44685,(depth + (1)),state);

var G__44686 = cljs.core.next.call(null,seq__44658_44679__$1);
var G__44687 = null;
var G__44688 = (0);
var G__44689 = (0);
seq__44658_44669 = G__44686;
chunk__44659_44670 = G__44687;
count__44660_44671 = G__44688;
i__44661_44672 = G__44689;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44662){
var vec__44666 = p__44662;
var seq__44667 = cljs.core.seq.call(null,vec__44666);
var first__44668 = cljs.core.first.call(null,seq__44667);
var seq__44667__$1 = cljs.core.next.call(null,seq__44667);
var x = first__44668;
var xs = seq__44667__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44666,seq__44667,first__44668,seq__44667__$1,x,xs,get_deps__$1){
return (function (p1__44608_SHARP_){
return clojure.set.difference.call(null,p1__44608_SHARP_,x);
});})(vec__44666,seq__44667,first__44668,seq__44667__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__44702 = cljs.core.seq.call(null,provides);
var chunk__44703 = null;
var count__44704 = (0);
var i__44705 = (0);
while(true){
if((i__44705 < count__44704)){
var prov = cljs.core._nth.call(null,chunk__44703,i__44705);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44706_44714 = cljs.core.seq.call(null,requires);
var chunk__44707_44715 = null;
var count__44708_44716 = (0);
var i__44709_44717 = (0);
while(true){
if((i__44709_44717 < count__44708_44716)){
var req_44718 = cljs.core._nth.call(null,chunk__44707_44715,i__44709_44717);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44718,prov);

var G__44719 = seq__44706_44714;
var G__44720 = chunk__44707_44715;
var G__44721 = count__44708_44716;
var G__44722 = (i__44709_44717 + (1));
seq__44706_44714 = G__44719;
chunk__44707_44715 = G__44720;
count__44708_44716 = G__44721;
i__44709_44717 = G__44722;
continue;
} else {
var temp__4657__auto___44723 = cljs.core.seq.call(null,seq__44706_44714);
if(temp__4657__auto___44723){
var seq__44706_44724__$1 = temp__4657__auto___44723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44706_44724__$1)){
var c__25907__auto___44725 = cljs.core.chunk_first.call(null,seq__44706_44724__$1);
var G__44726 = cljs.core.chunk_rest.call(null,seq__44706_44724__$1);
var G__44727 = c__25907__auto___44725;
var G__44728 = cljs.core.count.call(null,c__25907__auto___44725);
var G__44729 = (0);
seq__44706_44714 = G__44726;
chunk__44707_44715 = G__44727;
count__44708_44716 = G__44728;
i__44709_44717 = G__44729;
continue;
} else {
var req_44730 = cljs.core.first.call(null,seq__44706_44724__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44730,prov);

var G__44731 = cljs.core.next.call(null,seq__44706_44724__$1);
var G__44732 = null;
var G__44733 = (0);
var G__44734 = (0);
seq__44706_44714 = G__44731;
chunk__44707_44715 = G__44732;
count__44708_44716 = G__44733;
i__44709_44717 = G__44734;
continue;
}
} else {
}
}
break;
}

var G__44735 = seq__44702;
var G__44736 = chunk__44703;
var G__44737 = count__44704;
var G__44738 = (i__44705 + (1));
seq__44702 = G__44735;
chunk__44703 = G__44736;
count__44704 = G__44737;
i__44705 = G__44738;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44702);
if(temp__4657__auto__){
var seq__44702__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44702__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__44702__$1);
var G__44739 = cljs.core.chunk_rest.call(null,seq__44702__$1);
var G__44740 = c__25907__auto__;
var G__44741 = cljs.core.count.call(null,c__25907__auto__);
var G__44742 = (0);
seq__44702 = G__44739;
chunk__44703 = G__44740;
count__44704 = G__44741;
i__44705 = G__44742;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44702__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44710_44743 = cljs.core.seq.call(null,requires);
var chunk__44711_44744 = null;
var count__44712_44745 = (0);
var i__44713_44746 = (0);
while(true){
if((i__44713_44746 < count__44712_44745)){
var req_44747 = cljs.core._nth.call(null,chunk__44711_44744,i__44713_44746);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44747,prov);

var G__44748 = seq__44710_44743;
var G__44749 = chunk__44711_44744;
var G__44750 = count__44712_44745;
var G__44751 = (i__44713_44746 + (1));
seq__44710_44743 = G__44748;
chunk__44711_44744 = G__44749;
count__44712_44745 = G__44750;
i__44713_44746 = G__44751;
continue;
} else {
var temp__4657__auto___44752__$1 = cljs.core.seq.call(null,seq__44710_44743);
if(temp__4657__auto___44752__$1){
var seq__44710_44753__$1 = temp__4657__auto___44752__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44710_44753__$1)){
var c__25907__auto___44754 = cljs.core.chunk_first.call(null,seq__44710_44753__$1);
var G__44755 = cljs.core.chunk_rest.call(null,seq__44710_44753__$1);
var G__44756 = c__25907__auto___44754;
var G__44757 = cljs.core.count.call(null,c__25907__auto___44754);
var G__44758 = (0);
seq__44710_44743 = G__44755;
chunk__44711_44744 = G__44756;
count__44712_44745 = G__44757;
i__44713_44746 = G__44758;
continue;
} else {
var req_44759 = cljs.core.first.call(null,seq__44710_44753__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44759,prov);

var G__44760 = cljs.core.next.call(null,seq__44710_44753__$1);
var G__44761 = null;
var G__44762 = (0);
var G__44763 = (0);
seq__44710_44743 = G__44760;
chunk__44711_44744 = G__44761;
count__44712_44745 = G__44762;
i__44713_44746 = G__44763;
continue;
}
} else {
}
}
break;
}

var G__44764 = cljs.core.next.call(null,seq__44702__$1);
var G__44765 = null;
var G__44766 = (0);
var G__44767 = (0);
seq__44702 = G__44764;
chunk__44703 = G__44765;
count__44704 = G__44766;
i__44705 = G__44767;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__44772_44776 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44773_44777 = null;
var count__44774_44778 = (0);
var i__44775_44779 = (0);
while(true){
if((i__44775_44779 < count__44774_44778)){
var ns_44780 = cljs.core._nth.call(null,chunk__44773_44777,i__44775_44779);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44780);

var G__44781 = seq__44772_44776;
var G__44782 = chunk__44773_44777;
var G__44783 = count__44774_44778;
var G__44784 = (i__44775_44779 + (1));
seq__44772_44776 = G__44781;
chunk__44773_44777 = G__44782;
count__44774_44778 = G__44783;
i__44775_44779 = G__44784;
continue;
} else {
var temp__4657__auto___44785 = cljs.core.seq.call(null,seq__44772_44776);
if(temp__4657__auto___44785){
var seq__44772_44786__$1 = temp__4657__auto___44785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44772_44786__$1)){
var c__25907__auto___44787 = cljs.core.chunk_first.call(null,seq__44772_44786__$1);
var G__44788 = cljs.core.chunk_rest.call(null,seq__44772_44786__$1);
var G__44789 = c__25907__auto___44787;
var G__44790 = cljs.core.count.call(null,c__25907__auto___44787);
var G__44791 = (0);
seq__44772_44776 = G__44788;
chunk__44773_44777 = G__44789;
count__44774_44778 = G__44790;
i__44775_44779 = G__44791;
continue;
} else {
var ns_44792 = cljs.core.first.call(null,seq__44772_44786__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44792);

var G__44793 = cljs.core.next.call(null,seq__44772_44786__$1);
var G__44794 = null;
var G__44795 = (0);
var G__44796 = (0);
seq__44772_44776 = G__44793;
chunk__44773_44777 = G__44794;
count__44774_44778 = G__44795;
i__44775_44779 = G__44796;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25096__auto__ = goog.require__;
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__44797__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44797 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44798__i = 0, G__44798__a = new Array(arguments.length -  0);
while (G__44798__i < G__44798__a.length) {G__44798__a[G__44798__i] = arguments[G__44798__i + 0]; ++G__44798__i;}
  args = new cljs.core.IndexedSeq(G__44798__a,0);
} 
return G__44797__delegate.call(this,args);};
G__44797.cljs$lang$maxFixedArity = 0;
G__44797.cljs$lang$applyTo = (function (arglist__44799){
var args = cljs.core.seq(arglist__44799);
return G__44797__delegate(args);
});
G__44797.cljs$core$IFn$_invoke$arity$variadic = G__44797__delegate;
return G__44797;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44801 = cljs.core._EQ_;
var expr__44802 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44801.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44802))){
var path_parts = ((function (pred__44801,expr__44802){
return (function (p1__44800_SHARP_){
return clojure.string.split.call(null,p1__44800_SHARP_,/[\/\\]/);
});})(pred__44801,expr__44802))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__44801,expr__44802){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44804){if((e44804 instanceof Error)){
var e = e44804;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44804;

}
}})());
});
;})(path_parts,sep,root,pred__44801,expr__44802))
} else {
if(cljs.core.truth_(pred__44801.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44802))){
return ((function (pred__44801,expr__44802){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__44801,expr__44802){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__44801,expr__44802))
);

return deferred.addErrback(((function (deferred,pred__44801,expr__44802){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__44801,expr__44802))
);
});
;})(pred__44801,expr__44802))
} else {
return ((function (pred__44801,expr__44802){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44801,expr__44802))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44805,callback){
var map__44808 = p__44805;
var map__44808__$1 = ((((!((map__44808 == null)))?((((map__44808.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44808.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44808):map__44808);
var file_msg = map__44808__$1;
var request_url = cljs.core.get.call(null,map__44808__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44808,map__44808__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44808,map__44808__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__){
return (function (state_44832){
var state_val_44833 = (state_44832[(1)]);
if((state_val_44833 === (7))){
var inst_44828 = (state_44832[(2)]);
var state_44832__$1 = state_44832;
var statearr_44834_44854 = state_44832__$1;
(statearr_44834_44854[(2)] = inst_44828);

(statearr_44834_44854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44833 === (1))){
var state_44832__$1 = state_44832;
var statearr_44835_44855 = state_44832__$1;
(statearr_44835_44855[(2)] = null);

(statearr_44835_44855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44833 === (4))){
var inst_44812 = (state_44832[(7)]);
var inst_44812__$1 = (state_44832[(2)]);
var state_44832__$1 = (function (){var statearr_44836 = state_44832;
(statearr_44836[(7)] = inst_44812__$1);

return statearr_44836;
})();
if(cljs.core.truth_(inst_44812__$1)){
var statearr_44837_44856 = state_44832__$1;
(statearr_44837_44856[(1)] = (5));

} else {
var statearr_44838_44857 = state_44832__$1;
(statearr_44838_44857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44833 === (6))){
var state_44832__$1 = state_44832;
var statearr_44839_44858 = state_44832__$1;
(statearr_44839_44858[(2)] = null);

(statearr_44839_44858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44833 === (3))){
var inst_44830 = (state_44832[(2)]);
var state_44832__$1 = state_44832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44832__$1,inst_44830);
} else {
if((state_val_44833 === (2))){
var state_44832__$1 = state_44832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44832__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44833 === (11))){
var inst_44824 = (state_44832[(2)]);
var state_44832__$1 = (function (){var statearr_44840 = state_44832;
(statearr_44840[(8)] = inst_44824);

return statearr_44840;
})();
var statearr_44841_44859 = state_44832__$1;
(statearr_44841_44859[(2)] = null);

(statearr_44841_44859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44833 === (9))){
var inst_44818 = (state_44832[(9)]);
var inst_44816 = (state_44832[(10)]);
var inst_44820 = inst_44818.call(null,inst_44816);
var state_44832__$1 = state_44832;
var statearr_44842_44860 = state_44832__$1;
(statearr_44842_44860[(2)] = inst_44820);

(statearr_44842_44860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44833 === (5))){
var inst_44812 = (state_44832[(7)]);
var inst_44814 = figwheel.client.file_reloading.blocking_load.call(null,inst_44812);
var state_44832__$1 = state_44832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44832__$1,(8),inst_44814);
} else {
if((state_val_44833 === (10))){
var inst_44816 = (state_44832[(10)]);
var inst_44822 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44816);
var state_44832__$1 = state_44832;
var statearr_44843_44861 = state_44832__$1;
(statearr_44843_44861[(2)] = inst_44822);

(statearr_44843_44861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44833 === (8))){
var inst_44818 = (state_44832[(9)]);
var inst_44812 = (state_44832[(7)]);
var inst_44816 = (state_44832[(2)]);
var inst_44817 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44818__$1 = cljs.core.get.call(null,inst_44817,inst_44812);
var state_44832__$1 = (function (){var statearr_44844 = state_44832;
(statearr_44844[(9)] = inst_44818__$1);

(statearr_44844[(10)] = inst_44816);

return statearr_44844;
})();
if(cljs.core.truth_(inst_44818__$1)){
var statearr_44845_44862 = state_44832__$1;
(statearr_44845_44862[(1)] = (9));

} else {
var statearr_44846_44863 = state_44832__$1;
(statearr_44846_44863[(1)] = (10));

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
});})(c__28276__auto__))
;
return ((function (switch__28211__auto__,c__28276__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28212__auto__ = null;
var figwheel$client$file_reloading$state_machine__28212__auto____0 = (function (){
var statearr_44850 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44850[(0)] = figwheel$client$file_reloading$state_machine__28212__auto__);

(statearr_44850[(1)] = (1));

return statearr_44850;
});
var figwheel$client$file_reloading$state_machine__28212__auto____1 = (function (state_44832){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_44832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e44851){if((e44851 instanceof Object)){
var ex__28215__auto__ = e44851;
var statearr_44852_44864 = state_44832;
(statearr_44852_44864[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44865 = state_44832;
state_44832 = G__44865;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28212__auto__ = function(state_44832){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28212__auto____1.call(this,state_44832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28212__auto____0;
figwheel$client$file_reloading$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28212__auto____1;
return figwheel$client$file_reloading$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__))
})();
var state__28278__auto__ = (function (){var statearr_44853 = f__28277__auto__.call(null);
(statearr_44853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_44853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__))
);

return c__28276__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44866,callback){
var map__44869 = p__44866;
var map__44869__$1 = ((((!((map__44869 == null)))?((((map__44869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44869):map__44869);
var file_msg = map__44869__$1;
var namespace = cljs.core.get.call(null,map__44869__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44869,map__44869__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44869,map__44869__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44871){
var map__44874 = p__44871;
var map__44874__$1 = ((((!((map__44874 == null)))?((((map__44874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44874):map__44874);
var file_msg = map__44874__$1;
var namespace = cljs.core.get.call(null,map__44874__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25084__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25084__auto__){
var or__25096__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
var or__25096__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25096__auto____$1)){
return or__25096__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25084__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44876,callback){
var map__44879 = p__44876;
var map__44879__$1 = ((((!((map__44879 == null)))?((((map__44879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44879):map__44879);
var file_msg = map__44879__$1;
var request_url = cljs.core.get.call(null,map__44879__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28276__auto___44983 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___44983,out){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___44983,out){
return (function (state_44965){
var state_val_44966 = (state_44965[(1)]);
if((state_val_44966 === (1))){
var inst_44939 = cljs.core.seq.call(null,files);
var inst_44940 = cljs.core.first.call(null,inst_44939);
var inst_44941 = cljs.core.next.call(null,inst_44939);
var inst_44942 = files;
var state_44965__$1 = (function (){var statearr_44967 = state_44965;
(statearr_44967[(7)] = inst_44940);

(statearr_44967[(8)] = inst_44942);

(statearr_44967[(9)] = inst_44941);

return statearr_44967;
})();
var statearr_44968_44984 = state_44965__$1;
(statearr_44968_44984[(2)] = null);

(statearr_44968_44984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (2))){
var inst_44942 = (state_44965[(8)]);
var inst_44948 = (state_44965[(10)]);
var inst_44947 = cljs.core.seq.call(null,inst_44942);
var inst_44948__$1 = cljs.core.first.call(null,inst_44947);
var inst_44949 = cljs.core.next.call(null,inst_44947);
var inst_44950 = (inst_44948__$1 == null);
var inst_44951 = cljs.core.not.call(null,inst_44950);
var state_44965__$1 = (function (){var statearr_44969 = state_44965;
(statearr_44969[(11)] = inst_44949);

(statearr_44969[(10)] = inst_44948__$1);

return statearr_44969;
})();
if(inst_44951){
var statearr_44970_44985 = state_44965__$1;
(statearr_44970_44985[(1)] = (4));

} else {
var statearr_44971_44986 = state_44965__$1;
(statearr_44971_44986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (3))){
var inst_44963 = (state_44965[(2)]);
var state_44965__$1 = state_44965;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44965__$1,inst_44963);
} else {
if((state_val_44966 === (4))){
var inst_44948 = (state_44965[(10)]);
var inst_44953 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44948);
var state_44965__$1 = state_44965;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44965__$1,(7),inst_44953);
} else {
if((state_val_44966 === (5))){
var inst_44959 = cljs.core.async.close_BANG_.call(null,out);
var state_44965__$1 = state_44965;
var statearr_44972_44987 = state_44965__$1;
(statearr_44972_44987[(2)] = inst_44959);

(statearr_44972_44987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (6))){
var inst_44961 = (state_44965[(2)]);
var state_44965__$1 = state_44965;
var statearr_44973_44988 = state_44965__$1;
(statearr_44973_44988[(2)] = inst_44961);

(statearr_44973_44988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44966 === (7))){
var inst_44949 = (state_44965[(11)]);
var inst_44955 = (state_44965[(2)]);
var inst_44956 = cljs.core.async.put_BANG_.call(null,out,inst_44955);
var inst_44942 = inst_44949;
var state_44965__$1 = (function (){var statearr_44974 = state_44965;
(statearr_44974[(12)] = inst_44956);

(statearr_44974[(8)] = inst_44942);

return statearr_44974;
})();
var statearr_44975_44989 = state_44965__$1;
(statearr_44975_44989[(2)] = null);

(statearr_44975_44989[(1)] = (2));


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
});})(c__28276__auto___44983,out))
;
return ((function (switch__28211__auto__,c__28276__auto___44983,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto____0 = (function (){
var statearr_44979 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44979[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto__);

(statearr_44979[(1)] = (1));

return statearr_44979;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto____1 = (function (state_44965){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_44965);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e44980){if((e44980 instanceof Object)){
var ex__28215__auto__ = e44980;
var statearr_44981_44990 = state_44965;
(statearr_44981_44990[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44991 = state_44965;
state_44965 = G__44991;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto__ = function(state_44965){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto____1.call(this,state_44965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___44983,out))
})();
var state__28278__auto__ = (function (){var statearr_44982 = f__28277__auto__.call(null);
(statearr_44982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___44983);

return statearr_44982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___44983,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44992,opts){
var map__44996 = p__44992;
var map__44996__$1 = ((((!((map__44996 == null)))?((((map__44996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44996):map__44996);
var eval_body__$1 = cljs.core.get.call(null,map__44996__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44996__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25084__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25084__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25084__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44998){var e = e44998;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__44999_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44999_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45008){
var vec__45009 = p__45008;
var k = cljs.core.nth.call(null,vec__45009,(0),null);
var v = cljs.core.nth.call(null,vec__45009,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45012){
var vec__45013 = p__45012;
var k = cljs.core.nth.call(null,vec__45013,(0),null);
var v = cljs.core.nth.call(null,vec__45013,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45019,p__45020){
var map__45267 = p__45019;
var map__45267__$1 = ((((!((map__45267 == null)))?((((map__45267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45267):map__45267);
var opts = map__45267__$1;
var before_jsload = cljs.core.get.call(null,map__45267__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45267__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45267__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45268 = p__45020;
var map__45268__$1 = ((((!((map__45268 == null)))?((((map__45268.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45268.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45268):map__45268);
var msg = map__45268__$1;
var files = cljs.core.get.call(null,map__45268__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45268__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45268__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45421){
var state_val_45422 = (state_45421[(1)]);
if((state_val_45422 === (7))){
var inst_45282 = (state_45421[(7)]);
var inst_45283 = (state_45421[(8)]);
var inst_45285 = (state_45421[(9)]);
var inst_45284 = (state_45421[(10)]);
var inst_45290 = cljs.core._nth.call(null,inst_45283,inst_45285);
var inst_45291 = figwheel.client.file_reloading.eval_body.call(null,inst_45290,opts);
var inst_45292 = (inst_45285 + (1));
var tmp45423 = inst_45282;
var tmp45424 = inst_45283;
var tmp45425 = inst_45284;
var inst_45282__$1 = tmp45423;
var inst_45283__$1 = tmp45424;
var inst_45284__$1 = tmp45425;
var inst_45285__$1 = inst_45292;
var state_45421__$1 = (function (){var statearr_45426 = state_45421;
(statearr_45426[(7)] = inst_45282__$1);

(statearr_45426[(8)] = inst_45283__$1);

(statearr_45426[(9)] = inst_45285__$1);

(statearr_45426[(10)] = inst_45284__$1);

(statearr_45426[(11)] = inst_45291);

return statearr_45426;
})();
var statearr_45427_45513 = state_45421__$1;
(statearr_45427_45513[(2)] = null);

(statearr_45427_45513[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (20))){
var inst_45325 = (state_45421[(12)]);
var inst_45333 = figwheel.client.file_reloading.sort_files.call(null,inst_45325);
var state_45421__$1 = state_45421;
var statearr_45428_45514 = state_45421__$1;
(statearr_45428_45514[(2)] = inst_45333);

(statearr_45428_45514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (27))){
var state_45421__$1 = state_45421;
var statearr_45429_45515 = state_45421__$1;
(statearr_45429_45515[(2)] = null);

(statearr_45429_45515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (1))){
var inst_45274 = (state_45421[(13)]);
var inst_45271 = before_jsload.call(null,files);
var inst_45272 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45273 = (function (){return ((function (inst_45274,inst_45271,inst_45272,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45016_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45016_SHARP_);
});
;})(inst_45274,inst_45271,inst_45272,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45274__$1 = cljs.core.filter.call(null,inst_45273,files);
var inst_45275 = cljs.core.not_empty.call(null,inst_45274__$1);
var state_45421__$1 = (function (){var statearr_45430 = state_45421;
(statearr_45430[(14)] = inst_45271);

(statearr_45430[(13)] = inst_45274__$1);

(statearr_45430[(15)] = inst_45272);

return statearr_45430;
})();
if(cljs.core.truth_(inst_45275)){
var statearr_45431_45516 = state_45421__$1;
(statearr_45431_45516[(1)] = (2));

} else {
var statearr_45432_45517 = state_45421__$1;
(statearr_45432_45517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (24))){
var state_45421__$1 = state_45421;
var statearr_45433_45518 = state_45421__$1;
(statearr_45433_45518[(2)] = null);

(statearr_45433_45518[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (39))){
var inst_45375 = (state_45421[(16)]);
var state_45421__$1 = state_45421;
var statearr_45434_45519 = state_45421__$1;
(statearr_45434_45519[(2)] = inst_45375);

(statearr_45434_45519[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (46))){
var inst_45416 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
var statearr_45435_45520 = state_45421__$1;
(statearr_45435_45520[(2)] = inst_45416);

(statearr_45435_45520[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (4))){
var inst_45319 = (state_45421[(2)]);
var inst_45320 = cljs.core.List.EMPTY;
var inst_45321 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_45320);
var inst_45322 = (function (){return ((function (inst_45319,inst_45320,inst_45321,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45017_SHARP_){
var and__25084__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45017_SHARP_);
if(cljs.core.truth_(and__25084__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45017_SHARP_));
} else {
return and__25084__auto__;
}
});
;})(inst_45319,inst_45320,inst_45321,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45323 = cljs.core.filter.call(null,inst_45322,files);
var inst_45324 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_45325 = cljs.core.concat.call(null,inst_45323,inst_45324);
var state_45421__$1 = (function (){var statearr_45436 = state_45421;
(statearr_45436[(17)] = inst_45321);

(statearr_45436[(12)] = inst_45325);

(statearr_45436[(18)] = inst_45319);

return statearr_45436;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45437_45521 = state_45421__$1;
(statearr_45437_45521[(1)] = (16));

} else {
var statearr_45438_45522 = state_45421__$1;
(statearr_45438_45522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (15))){
var inst_45309 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
var statearr_45439_45523 = state_45421__$1;
(statearr_45439_45523[(2)] = inst_45309);

(statearr_45439_45523[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (21))){
var inst_45335 = (state_45421[(19)]);
var inst_45335__$1 = (state_45421[(2)]);
var inst_45336 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_45335__$1);
var state_45421__$1 = (function (){var statearr_45440 = state_45421;
(statearr_45440[(19)] = inst_45335__$1);

return statearr_45440;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45421__$1,(22),inst_45336);
} else {
if((state_val_45422 === (31))){
var inst_45419 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45421__$1,inst_45419);
} else {
if((state_val_45422 === (32))){
var inst_45375 = (state_45421[(16)]);
var inst_45380 = inst_45375.cljs$lang$protocol_mask$partition0$;
var inst_45381 = (inst_45380 & (64));
var inst_45382 = inst_45375.cljs$core$ISeq$;
var inst_45383 = (inst_45381) || (inst_45382);
var state_45421__$1 = state_45421;
if(cljs.core.truth_(inst_45383)){
var statearr_45441_45524 = state_45421__$1;
(statearr_45441_45524[(1)] = (35));

} else {
var statearr_45442_45525 = state_45421__$1;
(statearr_45442_45525[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (40))){
var inst_45396 = (state_45421[(20)]);
var inst_45395 = (state_45421[(2)]);
var inst_45396__$1 = cljs.core.get.call(null,inst_45395,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45397 = cljs.core.get.call(null,inst_45395,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45398 = cljs.core.not_empty.call(null,inst_45396__$1);
var state_45421__$1 = (function (){var statearr_45443 = state_45421;
(statearr_45443[(21)] = inst_45397);

(statearr_45443[(20)] = inst_45396__$1);

return statearr_45443;
})();
if(cljs.core.truth_(inst_45398)){
var statearr_45444_45526 = state_45421__$1;
(statearr_45444_45526[(1)] = (41));

} else {
var statearr_45445_45527 = state_45421__$1;
(statearr_45445_45527[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (33))){
var state_45421__$1 = state_45421;
var statearr_45446_45528 = state_45421__$1;
(statearr_45446_45528[(2)] = false);

(statearr_45446_45528[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (13))){
var inst_45295 = (state_45421[(22)]);
var inst_45299 = cljs.core.chunk_first.call(null,inst_45295);
var inst_45300 = cljs.core.chunk_rest.call(null,inst_45295);
var inst_45301 = cljs.core.count.call(null,inst_45299);
var inst_45282 = inst_45300;
var inst_45283 = inst_45299;
var inst_45284 = inst_45301;
var inst_45285 = (0);
var state_45421__$1 = (function (){var statearr_45447 = state_45421;
(statearr_45447[(7)] = inst_45282);

(statearr_45447[(8)] = inst_45283);

(statearr_45447[(9)] = inst_45285);

(statearr_45447[(10)] = inst_45284);

return statearr_45447;
})();
var statearr_45448_45529 = state_45421__$1;
(statearr_45448_45529[(2)] = null);

(statearr_45448_45529[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (22))){
var inst_45339 = (state_45421[(23)]);
var inst_45338 = (state_45421[(24)]);
var inst_45335 = (state_45421[(19)]);
var inst_45343 = (state_45421[(25)]);
var inst_45338__$1 = (state_45421[(2)]);
var inst_45339__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45338__$1);
var inst_45340 = (function (){var all_files = inst_45335;
var res_SINGLEQUOTE_ = inst_45338__$1;
var res = inst_45339__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_45339,inst_45338,inst_45335,inst_45343,inst_45338__$1,inst_45339__$1,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45018_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45018_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_45339,inst_45338,inst_45335,inst_45343,inst_45338__$1,inst_45339__$1,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45341 = cljs.core.filter.call(null,inst_45340,inst_45338__$1);
var inst_45342 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_45343__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_45342);
var inst_45344 = cljs.core.not_empty.call(null,inst_45343__$1);
var state_45421__$1 = (function (){var statearr_45449 = state_45421;
(statearr_45449[(23)] = inst_45339__$1);

(statearr_45449[(24)] = inst_45338__$1);

(statearr_45449[(26)] = inst_45341);

(statearr_45449[(25)] = inst_45343__$1);

return statearr_45449;
})();
if(cljs.core.truth_(inst_45344)){
var statearr_45450_45530 = state_45421__$1;
(statearr_45450_45530[(1)] = (23));

} else {
var statearr_45451_45531 = state_45421__$1;
(statearr_45451_45531[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (36))){
var state_45421__$1 = state_45421;
var statearr_45452_45532 = state_45421__$1;
(statearr_45452_45532[(2)] = false);

(statearr_45452_45532[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (41))){
var inst_45396 = (state_45421[(20)]);
var inst_45400 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45401 = cljs.core.map.call(null,inst_45400,inst_45396);
var inst_45402 = cljs.core.pr_str.call(null,inst_45401);
var inst_45403 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_45402)].join('');
var inst_45404 = figwheel.client.utils.log.call(null,inst_45403);
var state_45421__$1 = state_45421;
var statearr_45453_45533 = state_45421__$1;
(statearr_45453_45533[(2)] = inst_45404);

(statearr_45453_45533[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (43))){
var inst_45397 = (state_45421[(21)]);
var inst_45407 = (state_45421[(2)]);
var inst_45408 = cljs.core.not_empty.call(null,inst_45397);
var state_45421__$1 = (function (){var statearr_45454 = state_45421;
(statearr_45454[(27)] = inst_45407);

return statearr_45454;
})();
if(cljs.core.truth_(inst_45408)){
var statearr_45455_45534 = state_45421__$1;
(statearr_45455_45534[(1)] = (44));

} else {
var statearr_45456_45535 = state_45421__$1;
(statearr_45456_45535[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (29))){
var inst_45339 = (state_45421[(23)]);
var inst_45338 = (state_45421[(24)]);
var inst_45375 = (state_45421[(16)]);
var inst_45335 = (state_45421[(19)]);
var inst_45341 = (state_45421[(26)]);
var inst_45343 = (state_45421[(25)]);
var inst_45371 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_45374 = (function (){var all_files = inst_45335;
var res_SINGLEQUOTE_ = inst_45338;
var res = inst_45339;
var files_not_loaded = inst_45341;
var dependencies_that_loaded = inst_45343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45375,inst_45335,inst_45341,inst_45343,inst_45371,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45373){
var map__45457 = p__45373;
var map__45457__$1 = ((((!((map__45457 == null)))?((((map__45457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45457):map__45457);
var namespace = cljs.core.get.call(null,map__45457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45375,inst_45335,inst_45341,inst_45343,inst_45371,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45375__$1 = cljs.core.group_by.call(null,inst_45374,inst_45341);
var inst_45377 = (inst_45375__$1 == null);
var inst_45378 = cljs.core.not.call(null,inst_45377);
var state_45421__$1 = (function (){var statearr_45459 = state_45421;
(statearr_45459[(16)] = inst_45375__$1);

(statearr_45459[(28)] = inst_45371);

return statearr_45459;
})();
if(inst_45378){
var statearr_45460_45536 = state_45421__$1;
(statearr_45460_45536[(1)] = (32));

} else {
var statearr_45461_45537 = state_45421__$1;
(statearr_45461_45537[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (44))){
var inst_45397 = (state_45421[(21)]);
var inst_45410 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45397);
var inst_45411 = cljs.core.pr_str.call(null,inst_45410);
var inst_45412 = [cljs.core.str("not required: "),cljs.core.str(inst_45411)].join('');
var inst_45413 = figwheel.client.utils.log.call(null,inst_45412);
var state_45421__$1 = state_45421;
var statearr_45462_45538 = state_45421__$1;
(statearr_45462_45538[(2)] = inst_45413);

(statearr_45462_45538[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (6))){
var inst_45316 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
var statearr_45463_45539 = state_45421__$1;
(statearr_45463_45539[(2)] = inst_45316);

(statearr_45463_45539[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (28))){
var inst_45341 = (state_45421[(26)]);
var inst_45368 = (state_45421[(2)]);
var inst_45369 = cljs.core.not_empty.call(null,inst_45341);
var state_45421__$1 = (function (){var statearr_45464 = state_45421;
(statearr_45464[(29)] = inst_45368);

return statearr_45464;
})();
if(cljs.core.truth_(inst_45369)){
var statearr_45465_45540 = state_45421__$1;
(statearr_45465_45540[(1)] = (29));

} else {
var statearr_45466_45541 = state_45421__$1;
(statearr_45466_45541[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (25))){
var inst_45339 = (state_45421[(23)]);
var inst_45355 = (state_45421[(2)]);
var inst_45356 = cljs.core.not_empty.call(null,inst_45339);
var state_45421__$1 = (function (){var statearr_45467 = state_45421;
(statearr_45467[(30)] = inst_45355);

return statearr_45467;
})();
if(cljs.core.truth_(inst_45356)){
var statearr_45468_45542 = state_45421__$1;
(statearr_45468_45542[(1)] = (26));

} else {
var statearr_45469_45543 = state_45421__$1;
(statearr_45469_45543[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (34))){
var inst_45390 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
if(cljs.core.truth_(inst_45390)){
var statearr_45470_45544 = state_45421__$1;
(statearr_45470_45544[(1)] = (38));

} else {
var statearr_45471_45545 = state_45421__$1;
(statearr_45471_45545[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (17))){
var state_45421__$1 = state_45421;
var statearr_45472_45546 = state_45421__$1;
(statearr_45472_45546[(2)] = recompile_dependents);

(statearr_45472_45546[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (3))){
var state_45421__$1 = state_45421;
var statearr_45473_45547 = state_45421__$1;
(statearr_45473_45547[(2)] = null);

(statearr_45473_45547[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (12))){
var inst_45312 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
var statearr_45474_45548 = state_45421__$1;
(statearr_45474_45548[(2)] = inst_45312);

(statearr_45474_45548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (2))){
var inst_45274 = (state_45421[(13)]);
var inst_45281 = cljs.core.seq.call(null,inst_45274);
var inst_45282 = inst_45281;
var inst_45283 = null;
var inst_45284 = (0);
var inst_45285 = (0);
var state_45421__$1 = (function (){var statearr_45475 = state_45421;
(statearr_45475[(7)] = inst_45282);

(statearr_45475[(8)] = inst_45283);

(statearr_45475[(9)] = inst_45285);

(statearr_45475[(10)] = inst_45284);

return statearr_45475;
})();
var statearr_45476_45549 = state_45421__$1;
(statearr_45476_45549[(2)] = null);

(statearr_45476_45549[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (23))){
var inst_45339 = (state_45421[(23)]);
var inst_45338 = (state_45421[(24)]);
var inst_45335 = (state_45421[(19)]);
var inst_45341 = (state_45421[(26)]);
var inst_45343 = (state_45421[(25)]);
var inst_45346 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_45348 = (function (){var all_files = inst_45335;
var res_SINGLEQUOTE_ = inst_45338;
var res = inst_45339;
var files_not_loaded = inst_45341;
var dependencies_that_loaded = inst_45343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45335,inst_45341,inst_45343,inst_45346,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45347){
var map__45477 = p__45347;
var map__45477__$1 = ((((!((map__45477 == null)))?((((map__45477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45477):map__45477);
var request_url = cljs.core.get.call(null,map__45477__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45335,inst_45341,inst_45343,inst_45346,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45349 = cljs.core.reverse.call(null,inst_45343);
var inst_45350 = cljs.core.map.call(null,inst_45348,inst_45349);
var inst_45351 = cljs.core.pr_str.call(null,inst_45350);
var inst_45352 = figwheel.client.utils.log.call(null,inst_45351);
var state_45421__$1 = (function (){var statearr_45479 = state_45421;
(statearr_45479[(31)] = inst_45346);

return statearr_45479;
})();
var statearr_45480_45550 = state_45421__$1;
(statearr_45480_45550[(2)] = inst_45352);

(statearr_45480_45550[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (35))){
var state_45421__$1 = state_45421;
var statearr_45481_45551 = state_45421__$1;
(statearr_45481_45551[(2)] = true);

(statearr_45481_45551[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (19))){
var inst_45325 = (state_45421[(12)]);
var inst_45331 = figwheel.client.file_reloading.expand_files.call(null,inst_45325);
var state_45421__$1 = state_45421;
var statearr_45482_45552 = state_45421__$1;
(statearr_45482_45552[(2)] = inst_45331);

(statearr_45482_45552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (11))){
var state_45421__$1 = state_45421;
var statearr_45483_45553 = state_45421__$1;
(statearr_45483_45553[(2)] = null);

(statearr_45483_45553[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (9))){
var inst_45314 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
var statearr_45484_45554 = state_45421__$1;
(statearr_45484_45554[(2)] = inst_45314);

(statearr_45484_45554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (5))){
var inst_45285 = (state_45421[(9)]);
var inst_45284 = (state_45421[(10)]);
var inst_45287 = (inst_45285 < inst_45284);
var inst_45288 = inst_45287;
var state_45421__$1 = state_45421;
if(cljs.core.truth_(inst_45288)){
var statearr_45485_45555 = state_45421__$1;
(statearr_45485_45555[(1)] = (7));

} else {
var statearr_45486_45556 = state_45421__$1;
(statearr_45486_45556[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (14))){
var inst_45295 = (state_45421[(22)]);
var inst_45304 = cljs.core.first.call(null,inst_45295);
var inst_45305 = figwheel.client.file_reloading.eval_body.call(null,inst_45304,opts);
var inst_45306 = cljs.core.next.call(null,inst_45295);
var inst_45282 = inst_45306;
var inst_45283 = null;
var inst_45284 = (0);
var inst_45285 = (0);
var state_45421__$1 = (function (){var statearr_45487 = state_45421;
(statearr_45487[(7)] = inst_45282);

(statearr_45487[(8)] = inst_45283);

(statearr_45487[(9)] = inst_45285);

(statearr_45487[(10)] = inst_45284);

(statearr_45487[(32)] = inst_45305);

return statearr_45487;
})();
var statearr_45488_45557 = state_45421__$1;
(statearr_45488_45557[(2)] = null);

(statearr_45488_45557[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (45))){
var state_45421__$1 = state_45421;
var statearr_45489_45558 = state_45421__$1;
(statearr_45489_45558[(2)] = null);

(statearr_45489_45558[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (26))){
var inst_45339 = (state_45421[(23)]);
var inst_45338 = (state_45421[(24)]);
var inst_45335 = (state_45421[(19)]);
var inst_45341 = (state_45421[(26)]);
var inst_45343 = (state_45421[(25)]);
var inst_45358 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_45360 = (function (){var all_files = inst_45335;
var res_SINGLEQUOTE_ = inst_45338;
var res = inst_45339;
var files_not_loaded = inst_45341;
var dependencies_that_loaded = inst_45343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45335,inst_45341,inst_45343,inst_45358,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__45359){
var map__45490 = p__45359;
var map__45490__$1 = ((((!((map__45490 == null)))?((((map__45490.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45490.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45490):map__45490);
var namespace = cljs.core.get.call(null,map__45490__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45490__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45335,inst_45341,inst_45343,inst_45358,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45361 = cljs.core.map.call(null,inst_45360,inst_45339);
var inst_45362 = cljs.core.pr_str.call(null,inst_45361);
var inst_45363 = figwheel.client.utils.log.call(null,inst_45362);
var inst_45364 = (function (){var all_files = inst_45335;
var res_SINGLEQUOTE_ = inst_45338;
var res = inst_45339;
var files_not_loaded = inst_45341;
var dependencies_that_loaded = inst_45343;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45335,inst_45341,inst_45343,inst_45358,inst_45360,inst_45361,inst_45362,inst_45363,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_45339,inst_45338,inst_45335,inst_45341,inst_45343,inst_45358,inst_45360,inst_45361,inst_45362,inst_45363,state_val_45422,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45365 = setTimeout(inst_45364,(10));
var state_45421__$1 = (function (){var statearr_45492 = state_45421;
(statearr_45492[(33)] = inst_45363);

(statearr_45492[(34)] = inst_45358);

return statearr_45492;
})();
var statearr_45493_45559 = state_45421__$1;
(statearr_45493_45559[(2)] = inst_45365);

(statearr_45493_45559[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (16))){
var state_45421__$1 = state_45421;
var statearr_45494_45560 = state_45421__$1;
(statearr_45494_45560[(2)] = reload_dependents);

(statearr_45494_45560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (38))){
var inst_45375 = (state_45421[(16)]);
var inst_45392 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45375);
var state_45421__$1 = state_45421;
var statearr_45495_45561 = state_45421__$1;
(statearr_45495_45561[(2)] = inst_45392);

(statearr_45495_45561[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (30))){
var state_45421__$1 = state_45421;
var statearr_45496_45562 = state_45421__$1;
(statearr_45496_45562[(2)] = null);

(statearr_45496_45562[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (10))){
var inst_45295 = (state_45421[(22)]);
var inst_45297 = cljs.core.chunked_seq_QMARK_.call(null,inst_45295);
var state_45421__$1 = state_45421;
if(inst_45297){
var statearr_45497_45563 = state_45421__$1;
(statearr_45497_45563[(1)] = (13));

} else {
var statearr_45498_45564 = state_45421__$1;
(statearr_45498_45564[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (18))){
var inst_45329 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
if(cljs.core.truth_(inst_45329)){
var statearr_45499_45565 = state_45421__$1;
(statearr_45499_45565[(1)] = (19));

} else {
var statearr_45500_45566 = state_45421__$1;
(statearr_45500_45566[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (42))){
var state_45421__$1 = state_45421;
var statearr_45501_45567 = state_45421__$1;
(statearr_45501_45567[(2)] = null);

(statearr_45501_45567[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (37))){
var inst_45387 = (state_45421[(2)]);
var state_45421__$1 = state_45421;
var statearr_45502_45568 = state_45421__$1;
(statearr_45502_45568[(2)] = inst_45387);

(statearr_45502_45568[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45422 === (8))){
var inst_45295 = (state_45421[(22)]);
var inst_45282 = (state_45421[(7)]);
var inst_45295__$1 = cljs.core.seq.call(null,inst_45282);
var state_45421__$1 = (function (){var statearr_45503 = state_45421;
(statearr_45503[(22)] = inst_45295__$1);

return statearr_45503;
})();
if(inst_45295__$1){
var statearr_45504_45569 = state_45421__$1;
(statearr_45504_45569[(1)] = (10));

} else {
var statearr_45505_45570 = state_45421__$1;
(statearr_45505_45570[(1)] = (11));

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
});})(c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28211__auto__,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto____0 = (function (){
var statearr_45509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45509[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto__);

(statearr_45509[(1)] = (1));

return statearr_45509;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto____1 = (function (state_45421){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_45421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e45510){if((e45510 instanceof Object)){
var ex__28215__auto__ = e45510;
var statearr_45511_45571 = state_45421;
(statearr_45511_45571[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45572 = state_45421;
state_45421 = G__45572;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto__ = function(state_45421){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto____1.call(this,state_45421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28278__auto__ = (function (){var statearr_45512 = f__28277__auto__.call(null);
(statearr_45512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_45512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__,map__45267,map__45267__$1,opts,before_jsload,on_jsload,reload_dependents,map__45268,map__45268__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28276__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45575,link){
var map__45578 = p__45575;
var map__45578__$1 = ((((!((map__45578 == null)))?((((map__45578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45578):map__45578);
var file = cljs.core.get.call(null,map__45578__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__45578,map__45578__$1,file){
return (function (p1__45573_SHARP_,p2__45574_SHARP_){
if(cljs.core._EQ_.call(null,p1__45573_SHARP_,p2__45574_SHARP_)){
return p1__45573_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__45578,map__45578__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45584){
var map__45585 = p__45584;
var map__45585__$1 = ((((!((map__45585 == null)))?((((map__45585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45585):map__45585);
var match_length = cljs.core.get.call(null,map__45585__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45585__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45580_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45580_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args45587 = [];
var len__26171__auto___45590 = arguments.length;
var i__26172__auto___45591 = (0);
while(true){
if((i__26172__auto___45591 < len__26171__auto___45590)){
args45587.push((arguments[i__26172__auto___45591]));

var G__45592 = (i__26172__auto___45591 + (1));
i__26172__auto___45591 = G__45592;
continue;
} else {
}
break;
}

var G__45589 = args45587.length;
switch (G__45589) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45587.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45594_SHARP_,p2__45595_SHARP_){
return cljs.core.assoc.call(null,p1__45594_SHARP_,cljs.core.get.call(null,p2__45595_SHARP_,key),p2__45595_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45596){
var map__45599 = p__45596;
var map__45599__$1 = ((((!((map__45599 == null)))?((((map__45599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45599):map__45599);
var f_data = map__45599__$1;
var file = cljs.core.get.call(null,map__45599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45601,p__45602){
var map__45611 = p__45601;
var map__45611__$1 = ((((!((map__45611 == null)))?((((map__45611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45611):map__45611);
var opts = map__45611__$1;
var on_cssload = cljs.core.get.call(null,map__45611__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__45612 = p__45602;
var map__45612__$1 = ((((!((map__45612 == null)))?((((map__45612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45612):map__45612);
var files_msg = map__45612__$1;
var files = cljs.core.get.call(null,map__45612__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45615_45619 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__45616_45620 = null;
var count__45617_45621 = (0);
var i__45618_45622 = (0);
while(true){
if((i__45618_45622 < count__45617_45621)){
var f_45623 = cljs.core._nth.call(null,chunk__45616_45620,i__45618_45622);
figwheel.client.file_reloading.reload_css_file.call(null,f_45623);

var G__45624 = seq__45615_45619;
var G__45625 = chunk__45616_45620;
var G__45626 = count__45617_45621;
var G__45627 = (i__45618_45622 + (1));
seq__45615_45619 = G__45624;
chunk__45616_45620 = G__45625;
count__45617_45621 = G__45626;
i__45618_45622 = G__45627;
continue;
} else {
var temp__4657__auto___45628 = cljs.core.seq.call(null,seq__45615_45619);
if(temp__4657__auto___45628){
var seq__45615_45629__$1 = temp__4657__auto___45628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45615_45629__$1)){
var c__25907__auto___45630 = cljs.core.chunk_first.call(null,seq__45615_45629__$1);
var G__45631 = cljs.core.chunk_rest.call(null,seq__45615_45629__$1);
var G__45632 = c__25907__auto___45630;
var G__45633 = cljs.core.count.call(null,c__25907__auto___45630);
var G__45634 = (0);
seq__45615_45619 = G__45631;
chunk__45616_45620 = G__45632;
count__45617_45621 = G__45633;
i__45618_45622 = G__45634;
continue;
} else {
var f_45635 = cljs.core.first.call(null,seq__45615_45629__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45635);

var G__45636 = cljs.core.next.call(null,seq__45615_45629__$1);
var G__45637 = null;
var G__45638 = (0);
var G__45639 = (0);
seq__45615_45619 = G__45636;
chunk__45616_45620 = G__45637;
count__45617_45621 = G__45638;
i__45618_45622 = G__45639;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__45611,map__45611__$1,opts,on_cssload,map__45612,map__45612__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__45611,map__45611__$1,opts,on_cssload,map__45612,map__45612__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1503909842840