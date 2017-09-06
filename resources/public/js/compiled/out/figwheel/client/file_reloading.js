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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33845_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33845_SHARP_));
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
var seq__33850 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33851 = null;
var count__33852 = (0);
var i__33853 = (0);
while(true){
if((i__33853 < count__33852)){
var n = cljs.core._nth.call(null,chunk__33851,i__33853);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33854 = seq__33850;
var G__33855 = chunk__33851;
var G__33856 = count__33852;
var G__33857 = (i__33853 + (1));
seq__33850 = G__33854;
chunk__33851 = G__33855;
count__33852 = G__33856;
i__33853 = G__33857;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33850);
if(temp__4657__auto__){
var seq__33850__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33850__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__33850__$1);
var G__33858 = cljs.core.chunk_rest.call(null,seq__33850__$1);
var G__33859 = c__25907__auto__;
var G__33860 = cljs.core.count.call(null,c__25907__auto__);
var G__33861 = (0);
seq__33850 = G__33858;
chunk__33851 = G__33859;
count__33852 = G__33860;
i__33853 = G__33861;
continue;
} else {
var n = cljs.core.first.call(null,seq__33850__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33862 = cljs.core.next.call(null,seq__33850__$1);
var G__33863 = null;
var G__33864 = (0);
var G__33865 = (0);
seq__33850 = G__33862;
chunk__33851 = G__33863;
count__33852 = G__33864;
i__33853 = G__33865;
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

var seq__33916_33927 = cljs.core.seq.call(null,deps);
var chunk__33917_33928 = null;
var count__33918_33929 = (0);
var i__33919_33930 = (0);
while(true){
if((i__33919_33930 < count__33918_33929)){
var dep_33931 = cljs.core._nth.call(null,chunk__33917_33928,i__33919_33930);
topo_sort_helper_STAR_.call(null,dep_33931,(depth + (1)),state);

var G__33932 = seq__33916_33927;
var G__33933 = chunk__33917_33928;
var G__33934 = count__33918_33929;
var G__33935 = (i__33919_33930 + (1));
seq__33916_33927 = G__33932;
chunk__33917_33928 = G__33933;
count__33918_33929 = G__33934;
i__33919_33930 = G__33935;
continue;
} else {
var temp__4657__auto___33936 = cljs.core.seq.call(null,seq__33916_33927);
if(temp__4657__auto___33936){
var seq__33916_33937__$1 = temp__4657__auto___33936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33916_33937__$1)){
var c__25907__auto___33938 = cljs.core.chunk_first.call(null,seq__33916_33937__$1);
var G__33939 = cljs.core.chunk_rest.call(null,seq__33916_33937__$1);
var G__33940 = c__25907__auto___33938;
var G__33941 = cljs.core.count.call(null,c__25907__auto___33938);
var G__33942 = (0);
seq__33916_33927 = G__33939;
chunk__33917_33928 = G__33940;
count__33918_33929 = G__33941;
i__33919_33930 = G__33942;
continue;
} else {
var dep_33943 = cljs.core.first.call(null,seq__33916_33937__$1);
topo_sort_helper_STAR_.call(null,dep_33943,(depth + (1)),state);

var G__33944 = cljs.core.next.call(null,seq__33916_33937__$1);
var G__33945 = null;
var G__33946 = (0);
var G__33947 = (0);
seq__33916_33927 = G__33944;
chunk__33917_33928 = G__33945;
count__33918_33929 = G__33946;
i__33919_33930 = G__33947;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33920){
var vec__33924 = p__33920;
var seq__33925 = cljs.core.seq.call(null,vec__33924);
var first__33926 = cljs.core.first.call(null,seq__33925);
var seq__33925__$1 = cljs.core.next.call(null,seq__33925);
var x = first__33926;
var xs = seq__33925__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33924,seq__33925,first__33926,seq__33925__$1,x,xs,get_deps__$1){
return (function (p1__33866_SHARP_){
return clojure.set.difference.call(null,p1__33866_SHARP_,x);
});})(vec__33924,seq__33925,first__33926,seq__33925__$1,x,xs,get_deps__$1))
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
var seq__33960 = cljs.core.seq.call(null,provides);
var chunk__33961 = null;
var count__33962 = (0);
var i__33963 = (0);
while(true){
if((i__33963 < count__33962)){
var prov = cljs.core._nth.call(null,chunk__33961,i__33963);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33964_33972 = cljs.core.seq.call(null,requires);
var chunk__33965_33973 = null;
var count__33966_33974 = (0);
var i__33967_33975 = (0);
while(true){
if((i__33967_33975 < count__33966_33974)){
var req_33976 = cljs.core._nth.call(null,chunk__33965_33973,i__33967_33975);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33976,prov);

var G__33977 = seq__33964_33972;
var G__33978 = chunk__33965_33973;
var G__33979 = count__33966_33974;
var G__33980 = (i__33967_33975 + (1));
seq__33964_33972 = G__33977;
chunk__33965_33973 = G__33978;
count__33966_33974 = G__33979;
i__33967_33975 = G__33980;
continue;
} else {
var temp__4657__auto___33981 = cljs.core.seq.call(null,seq__33964_33972);
if(temp__4657__auto___33981){
var seq__33964_33982__$1 = temp__4657__auto___33981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33964_33982__$1)){
var c__25907__auto___33983 = cljs.core.chunk_first.call(null,seq__33964_33982__$1);
var G__33984 = cljs.core.chunk_rest.call(null,seq__33964_33982__$1);
var G__33985 = c__25907__auto___33983;
var G__33986 = cljs.core.count.call(null,c__25907__auto___33983);
var G__33987 = (0);
seq__33964_33972 = G__33984;
chunk__33965_33973 = G__33985;
count__33966_33974 = G__33986;
i__33967_33975 = G__33987;
continue;
} else {
var req_33988 = cljs.core.first.call(null,seq__33964_33982__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33988,prov);

var G__33989 = cljs.core.next.call(null,seq__33964_33982__$1);
var G__33990 = null;
var G__33991 = (0);
var G__33992 = (0);
seq__33964_33972 = G__33989;
chunk__33965_33973 = G__33990;
count__33966_33974 = G__33991;
i__33967_33975 = G__33992;
continue;
}
} else {
}
}
break;
}

var G__33993 = seq__33960;
var G__33994 = chunk__33961;
var G__33995 = count__33962;
var G__33996 = (i__33963 + (1));
seq__33960 = G__33993;
chunk__33961 = G__33994;
count__33962 = G__33995;
i__33963 = G__33996;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33960);
if(temp__4657__auto__){
var seq__33960__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33960__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__33960__$1);
var G__33997 = cljs.core.chunk_rest.call(null,seq__33960__$1);
var G__33998 = c__25907__auto__;
var G__33999 = cljs.core.count.call(null,c__25907__auto__);
var G__34000 = (0);
seq__33960 = G__33997;
chunk__33961 = G__33998;
count__33962 = G__33999;
i__33963 = G__34000;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33960__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33968_34001 = cljs.core.seq.call(null,requires);
var chunk__33969_34002 = null;
var count__33970_34003 = (0);
var i__33971_34004 = (0);
while(true){
if((i__33971_34004 < count__33970_34003)){
var req_34005 = cljs.core._nth.call(null,chunk__33969_34002,i__33971_34004);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34005,prov);

var G__34006 = seq__33968_34001;
var G__34007 = chunk__33969_34002;
var G__34008 = count__33970_34003;
var G__34009 = (i__33971_34004 + (1));
seq__33968_34001 = G__34006;
chunk__33969_34002 = G__34007;
count__33970_34003 = G__34008;
i__33971_34004 = G__34009;
continue;
} else {
var temp__4657__auto___34010__$1 = cljs.core.seq.call(null,seq__33968_34001);
if(temp__4657__auto___34010__$1){
var seq__33968_34011__$1 = temp__4657__auto___34010__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33968_34011__$1)){
var c__25907__auto___34012 = cljs.core.chunk_first.call(null,seq__33968_34011__$1);
var G__34013 = cljs.core.chunk_rest.call(null,seq__33968_34011__$1);
var G__34014 = c__25907__auto___34012;
var G__34015 = cljs.core.count.call(null,c__25907__auto___34012);
var G__34016 = (0);
seq__33968_34001 = G__34013;
chunk__33969_34002 = G__34014;
count__33970_34003 = G__34015;
i__33971_34004 = G__34016;
continue;
} else {
var req_34017 = cljs.core.first.call(null,seq__33968_34011__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34017,prov);

var G__34018 = cljs.core.next.call(null,seq__33968_34011__$1);
var G__34019 = null;
var G__34020 = (0);
var G__34021 = (0);
seq__33968_34001 = G__34018;
chunk__33969_34002 = G__34019;
count__33970_34003 = G__34020;
i__33971_34004 = G__34021;
continue;
}
} else {
}
}
break;
}

var G__34022 = cljs.core.next.call(null,seq__33960__$1);
var G__34023 = null;
var G__34024 = (0);
var G__34025 = (0);
seq__33960 = G__34022;
chunk__33961 = G__34023;
count__33962 = G__34024;
i__33963 = G__34025;
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
var seq__34030_34034 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34031_34035 = null;
var count__34032_34036 = (0);
var i__34033_34037 = (0);
while(true){
if((i__34033_34037 < count__34032_34036)){
var ns_34038 = cljs.core._nth.call(null,chunk__34031_34035,i__34033_34037);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34038);

var G__34039 = seq__34030_34034;
var G__34040 = chunk__34031_34035;
var G__34041 = count__34032_34036;
var G__34042 = (i__34033_34037 + (1));
seq__34030_34034 = G__34039;
chunk__34031_34035 = G__34040;
count__34032_34036 = G__34041;
i__34033_34037 = G__34042;
continue;
} else {
var temp__4657__auto___34043 = cljs.core.seq.call(null,seq__34030_34034);
if(temp__4657__auto___34043){
var seq__34030_34044__$1 = temp__4657__auto___34043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34030_34044__$1)){
var c__25907__auto___34045 = cljs.core.chunk_first.call(null,seq__34030_34044__$1);
var G__34046 = cljs.core.chunk_rest.call(null,seq__34030_34044__$1);
var G__34047 = c__25907__auto___34045;
var G__34048 = cljs.core.count.call(null,c__25907__auto___34045);
var G__34049 = (0);
seq__34030_34034 = G__34046;
chunk__34031_34035 = G__34047;
count__34032_34036 = G__34048;
i__34033_34037 = G__34049;
continue;
} else {
var ns_34050 = cljs.core.first.call(null,seq__34030_34044__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34050);

var G__34051 = cljs.core.next.call(null,seq__34030_34044__$1);
var G__34052 = null;
var G__34053 = (0);
var G__34054 = (0);
seq__34030_34034 = G__34051;
chunk__34031_34035 = G__34052;
count__34032_34036 = G__34053;
i__34033_34037 = G__34054;
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
var G__34055__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34055 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34056__i = 0, G__34056__a = new Array(arguments.length -  0);
while (G__34056__i < G__34056__a.length) {G__34056__a[G__34056__i] = arguments[G__34056__i + 0]; ++G__34056__i;}
  args = new cljs.core.IndexedSeq(G__34056__a,0);
} 
return G__34055__delegate.call(this,args);};
G__34055.cljs$lang$maxFixedArity = 0;
G__34055.cljs$lang$applyTo = (function (arglist__34057){
var args = cljs.core.seq(arglist__34057);
return G__34055__delegate(args);
});
G__34055.cljs$core$IFn$_invoke$arity$variadic = G__34055__delegate;
return G__34055;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34059 = cljs.core._EQ_;
var expr__34060 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34059.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34060))){
var path_parts = ((function (pred__34059,expr__34060){
return (function (p1__34058_SHARP_){
return clojure.string.split.call(null,p1__34058_SHARP_,/[\/\\]/);
});})(pred__34059,expr__34060))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__34059,expr__34060){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34062){if((e34062 instanceof Error)){
var e = e34062;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34062;

}
}})());
});
;})(path_parts,sep,root,pred__34059,expr__34060))
} else {
if(cljs.core.truth_(pred__34059.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34060))){
return ((function (pred__34059,expr__34060){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34059,expr__34060){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34059,expr__34060))
);

return deferred.addErrback(((function (deferred,pred__34059,expr__34060){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34059,expr__34060))
);
});
;})(pred__34059,expr__34060))
} else {
return ((function (pred__34059,expr__34060){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34059,expr__34060))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34063,callback){
var map__34066 = p__34063;
var map__34066__$1 = ((((!((map__34066 == null)))?((((map__34066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34066):map__34066);
var file_msg = map__34066__$1;
var request_url = cljs.core.get.call(null,map__34066__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34066,map__34066__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34066,map__34066__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__){
return (function (state_34090){
var state_val_34091 = (state_34090[(1)]);
if((state_val_34091 === (7))){
var inst_34086 = (state_34090[(2)]);
var state_34090__$1 = state_34090;
var statearr_34092_34112 = state_34090__$1;
(statearr_34092_34112[(2)] = inst_34086);

(statearr_34092_34112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (1))){
var state_34090__$1 = state_34090;
var statearr_34093_34113 = state_34090__$1;
(statearr_34093_34113[(2)] = null);

(statearr_34093_34113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (4))){
var inst_34070 = (state_34090[(7)]);
var inst_34070__$1 = (state_34090[(2)]);
var state_34090__$1 = (function (){var statearr_34094 = state_34090;
(statearr_34094[(7)] = inst_34070__$1);

return statearr_34094;
})();
if(cljs.core.truth_(inst_34070__$1)){
var statearr_34095_34114 = state_34090__$1;
(statearr_34095_34114[(1)] = (5));

} else {
var statearr_34096_34115 = state_34090__$1;
(statearr_34096_34115[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (6))){
var state_34090__$1 = state_34090;
var statearr_34097_34116 = state_34090__$1;
(statearr_34097_34116[(2)] = null);

(statearr_34097_34116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (3))){
var inst_34088 = (state_34090[(2)]);
var state_34090__$1 = state_34090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34090__$1,inst_34088);
} else {
if((state_val_34091 === (2))){
var state_34090__$1 = state_34090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34090__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34091 === (11))){
var inst_34082 = (state_34090[(2)]);
var state_34090__$1 = (function (){var statearr_34098 = state_34090;
(statearr_34098[(8)] = inst_34082);

return statearr_34098;
})();
var statearr_34099_34117 = state_34090__$1;
(statearr_34099_34117[(2)] = null);

(statearr_34099_34117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (9))){
var inst_34076 = (state_34090[(9)]);
var inst_34074 = (state_34090[(10)]);
var inst_34078 = inst_34076.call(null,inst_34074);
var state_34090__$1 = state_34090;
var statearr_34100_34118 = state_34090__$1;
(statearr_34100_34118[(2)] = inst_34078);

(statearr_34100_34118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (5))){
var inst_34070 = (state_34090[(7)]);
var inst_34072 = figwheel.client.file_reloading.blocking_load.call(null,inst_34070);
var state_34090__$1 = state_34090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34090__$1,(8),inst_34072);
} else {
if((state_val_34091 === (10))){
var inst_34074 = (state_34090[(10)]);
var inst_34080 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34074);
var state_34090__$1 = state_34090;
var statearr_34101_34119 = state_34090__$1;
(statearr_34101_34119[(2)] = inst_34080);

(statearr_34101_34119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34091 === (8))){
var inst_34076 = (state_34090[(9)]);
var inst_34070 = (state_34090[(7)]);
var inst_34074 = (state_34090[(2)]);
var inst_34075 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34076__$1 = cljs.core.get.call(null,inst_34075,inst_34070);
var state_34090__$1 = (function (){var statearr_34102 = state_34090;
(statearr_34102[(9)] = inst_34076__$1);

(statearr_34102[(10)] = inst_34074);

return statearr_34102;
})();
if(cljs.core.truth_(inst_34076__$1)){
var statearr_34103_34120 = state_34090__$1;
(statearr_34103_34120[(1)] = (9));

} else {
var statearr_34104_34121 = state_34090__$1;
(statearr_34104_34121[(1)] = (10));

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
});})(c__30990__auto__))
;
return ((function (switch__30878__auto__,c__30990__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30879__auto__ = null;
var figwheel$client$file_reloading$state_machine__30879__auto____0 = (function (){
var statearr_34108 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34108[(0)] = figwheel$client$file_reloading$state_machine__30879__auto__);

(statearr_34108[(1)] = (1));

return statearr_34108;
});
var figwheel$client$file_reloading$state_machine__30879__auto____1 = (function (state_34090){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_34090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e34109){if((e34109 instanceof Object)){
var ex__30882__auto__ = e34109;
var statearr_34110_34122 = state_34090;
(statearr_34110_34122[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34123 = state_34090;
state_34090 = G__34123;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30879__auto__ = function(state_34090){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30879__auto____1.call(this,state_34090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30879__auto____0;
figwheel$client$file_reloading$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30879__auto____1;
return figwheel$client$file_reloading$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__))
})();
var state__30992__auto__ = (function (){var statearr_34111 = f__30991__auto__.call(null);
(statearr_34111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_34111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__))
);

return c__30990__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34124,callback){
var map__34127 = p__34124;
var map__34127__$1 = ((((!((map__34127 == null)))?((((map__34127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34127):map__34127);
var file_msg = map__34127__$1;
var namespace = cljs.core.get.call(null,map__34127__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34127,map__34127__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34127,map__34127__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34129){
var map__34132 = p__34129;
var map__34132__$1 = ((((!((map__34132 == null)))?((((map__34132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34132):map__34132);
var file_msg = map__34132__$1;
var namespace = cljs.core.get.call(null,map__34132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34134,callback){
var map__34137 = p__34134;
var map__34137__$1 = ((((!((map__34137 == null)))?((((map__34137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34137):map__34137);
var file_msg = map__34137__$1;
var request_url = cljs.core.get.call(null,map__34137__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30990__auto___34241 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___34241,out){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___34241,out){
return (function (state_34223){
var state_val_34224 = (state_34223[(1)]);
if((state_val_34224 === (1))){
var inst_34197 = cljs.core.seq.call(null,files);
var inst_34198 = cljs.core.first.call(null,inst_34197);
var inst_34199 = cljs.core.next.call(null,inst_34197);
var inst_34200 = files;
var state_34223__$1 = (function (){var statearr_34225 = state_34223;
(statearr_34225[(7)] = inst_34199);

(statearr_34225[(8)] = inst_34198);

(statearr_34225[(9)] = inst_34200);

return statearr_34225;
})();
var statearr_34226_34242 = state_34223__$1;
(statearr_34226_34242[(2)] = null);

(statearr_34226_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (2))){
var inst_34200 = (state_34223[(9)]);
var inst_34206 = (state_34223[(10)]);
var inst_34205 = cljs.core.seq.call(null,inst_34200);
var inst_34206__$1 = cljs.core.first.call(null,inst_34205);
var inst_34207 = cljs.core.next.call(null,inst_34205);
var inst_34208 = (inst_34206__$1 == null);
var inst_34209 = cljs.core.not.call(null,inst_34208);
var state_34223__$1 = (function (){var statearr_34227 = state_34223;
(statearr_34227[(11)] = inst_34207);

(statearr_34227[(10)] = inst_34206__$1);

return statearr_34227;
})();
if(inst_34209){
var statearr_34228_34243 = state_34223__$1;
(statearr_34228_34243[(1)] = (4));

} else {
var statearr_34229_34244 = state_34223__$1;
(statearr_34229_34244[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (3))){
var inst_34221 = (state_34223[(2)]);
var state_34223__$1 = state_34223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34223__$1,inst_34221);
} else {
if((state_val_34224 === (4))){
var inst_34206 = (state_34223[(10)]);
var inst_34211 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34206);
var state_34223__$1 = state_34223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34223__$1,(7),inst_34211);
} else {
if((state_val_34224 === (5))){
var inst_34217 = cljs.core.async.close_BANG_.call(null,out);
var state_34223__$1 = state_34223;
var statearr_34230_34245 = state_34223__$1;
(statearr_34230_34245[(2)] = inst_34217);

(statearr_34230_34245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (6))){
var inst_34219 = (state_34223[(2)]);
var state_34223__$1 = state_34223;
var statearr_34231_34246 = state_34223__$1;
(statearr_34231_34246[(2)] = inst_34219);

(statearr_34231_34246[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (7))){
var inst_34207 = (state_34223[(11)]);
var inst_34213 = (state_34223[(2)]);
var inst_34214 = cljs.core.async.put_BANG_.call(null,out,inst_34213);
var inst_34200 = inst_34207;
var state_34223__$1 = (function (){var statearr_34232 = state_34223;
(statearr_34232[(9)] = inst_34200);

(statearr_34232[(12)] = inst_34214);

return statearr_34232;
})();
var statearr_34233_34247 = state_34223__$1;
(statearr_34233_34247[(2)] = null);

(statearr_34233_34247[(1)] = (2));


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
});})(c__30990__auto___34241,out))
;
return ((function (switch__30878__auto__,c__30990__auto___34241,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto____0 = (function (){
var statearr_34237 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34237[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto__);

(statearr_34237[(1)] = (1));

return statearr_34237;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto____1 = (function (state_34223){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_34223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e34238){if((e34238 instanceof Object)){
var ex__30882__auto__ = e34238;
var statearr_34239_34248 = state_34223;
(statearr_34239_34248[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34238;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34249 = state_34223;
state_34223 = G__34249;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto__ = function(state_34223){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto____1.call(this,state_34223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___34241,out))
})();
var state__30992__auto__ = (function (){var statearr_34240 = f__30991__auto__.call(null);
(statearr_34240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___34241);

return statearr_34240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___34241,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34250,opts){
var map__34254 = p__34250;
var map__34254__$1 = ((((!((map__34254 == null)))?((((map__34254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34254):map__34254);
var eval_body__$1 = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34254__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34256){var e = e34256;
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
return (function (p1__34257_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34257_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34266){
var vec__34267 = p__34266;
var k = cljs.core.nth.call(null,vec__34267,(0),null);
var v = cljs.core.nth.call(null,vec__34267,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34270){
var vec__34271 = p__34270;
var k = cljs.core.nth.call(null,vec__34271,(0),null);
var v = cljs.core.nth.call(null,vec__34271,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34277,p__34278){
var map__34525 = p__34277;
var map__34525__$1 = ((((!((map__34525 == null)))?((((map__34525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34525):map__34525);
var opts = map__34525__$1;
var before_jsload = cljs.core.get.call(null,map__34525__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34525__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34525__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34526 = p__34278;
var map__34526__$1 = ((((!((map__34526 == null)))?((((map__34526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34526):map__34526);
var msg = map__34526__$1;
var files = cljs.core.get.call(null,map__34526__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34526__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34526__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34679){
var state_val_34680 = (state_34679[(1)]);
if((state_val_34680 === (7))){
var inst_34542 = (state_34679[(7)]);
var inst_34540 = (state_34679[(8)]);
var inst_34543 = (state_34679[(9)]);
var inst_34541 = (state_34679[(10)]);
var inst_34548 = cljs.core._nth.call(null,inst_34541,inst_34543);
var inst_34549 = figwheel.client.file_reloading.eval_body.call(null,inst_34548,opts);
var inst_34550 = (inst_34543 + (1));
var tmp34681 = inst_34542;
var tmp34682 = inst_34540;
var tmp34683 = inst_34541;
var inst_34540__$1 = tmp34682;
var inst_34541__$1 = tmp34683;
var inst_34542__$1 = tmp34681;
var inst_34543__$1 = inst_34550;
var state_34679__$1 = (function (){var statearr_34684 = state_34679;
(statearr_34684[(7)] = inst_34542__$1);

(statearr_34684[(8)] = inst_34540__$1);

(statearr_34684[(9)] = inst_34543__$1);

(statearr_34684[(10)] = inst_34541__$1);

(statearr_34684[(11)] = inst_34549);

return statearr_34684;
})();
var statearr_34685_34771 = state_34679__$1;
(statearr_34685_34771[(2)] = null);

(statearr_34685_34771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (20))){
var inst_34583 = (state_34679[(12)]);
var inst_34591 = figwheel.client.file_reloading.sort_files.call(null,inst_34583);
var state_34679__$1 = state_34679;
var statearr_34686_34772 = state_34679__$1;
(statearr_34686_34772[(2)] = inst_34591);

(statearr_34686_34772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (27))){
var state_34679__$1 = state_34679;
var statearr_34687_34773 = state_34679__$1;
(statearr_34687_34773[(2)] = null);

(statearr_34687_34773[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (1))){
var inst_34532 = (state_34679[(13)]);
var inst_34529 = before_jsload.call(null,files);
var inst_34530 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34531 = (function (){return ((function (inst_34532,inst_34529,inst_34530,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34274_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34274_SHARP_);
});
;})(inst_34532,inst_34529,inst_34530,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34532__$1 = cljs.core.filter.call(null,inst_34531,files);
var inst_34533 = cljs.core.not_empty.call(null,inst_34532__$1);
var state_34679__$1 = (function (){var statearr_34688 = state_34679;
(statearr_34688[(14)] = inst_34529);

(statearr_34688[(13)] = inst_34532__$1);

(statearr_34688[(15)] = inst_34530);

return statearr_34688;
})();
if(cljs.core.truth_(inst_34533)){
var statearr_34689_34774 = state_34679__$1;
(statearr_34689_34774[(1)] = (2));

} else {
var statearr_34690_34775 = state_34679__$1;
(statearr_34690_34775[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (24))){
var state_34679__$1 = state_34679;
var statearr_34691_34776 = state_34679__$1;
(statearr_34691_34776[(2)] = null);

(statearr_34691_34776[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (39))){
var inst_34633 = (state_34679[(16)]);
var state_34679__$1 = state_34679;
var statearr_34692_34777 = state_34679__$1;
(statearr_34692_34777[(2)] = inst_34633);

(statearr_34692_34777[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (46))){
var inst_34674 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34693_34778 = state_34679__$1;
(statearr_34693_34778[(2)] = inst_34674);

(statearr_34693_34778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (4))){
var inst_34577 = (state_34679[(2)]);
var inst_34578 = cljs.core.List.EMPTY;
var inst_34579 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34578);
var inst_34580 = (function (){return ((function (inst_34577,inst_34578,inst_34579,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34275_SHARP_){
var and__25084__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34275_SHARP_);
if(cljs.core.truth_(and__25084__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34275_SHARP_));
} else {
return and__25084__auto__;
}
});
;})(inst_34577,inst_34578,inst_34579,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34581 = cljs.core.filter.call(null,inst_34580,files);
var inst_34582 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34583 = cljs.core.concat.call(null,inst_34581,inst_34582);
var state_34679__$1 = (function (){var statearr_34694 = state_34679;
(statearr_34694[(17)] = inst_34579);

(statearr_34694[(18)] = inst_34577);

(statearr_34694[(12)] = inst_34583);

return statearr_34694;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34695_34779 = state_34679__$1;
(statearr_34695_34779[(1)] = (16));

} else {
var statearr_34696_34780 = state_34679__$1;
(statearr_34696_34780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (15))){
var inst_34567 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34697_34781 = state_34679__$1;
(statearr_34697_34781[(2)] = inst_34567);

(statearr_34697_34781[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (21))){
var inst_34593 = (state_34679[(19)]);
var inst_34593__$1 = (state_34679[(2)]);
var inst_34594 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34593__$1);
var state_34679__$1 = (function (){var statearr_34698 = state_34679;
(statearr_34698[(19)] = inst_34593__$1);

return statearr_34698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34679__$1,(22),inst_34594);
} else {
if((state_val_34680 === (31))){
var inst_34677 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34679__$1,inst_34677);
} else {
if((state_val_34680 === (32))){
var inst_34633 = (state_34679[(16)]);
var inst_34638 = inst_34633.cljs$lang$protocol_mask$partition0$;
var inst_34639 = (inst_34638 & (64));
var inst_34640 = inst_34633.cljs$core$ISeq$;
var inst_34641 = (inst_34639) || (inst_34640);
var state_34679__$1 = state_34679;
if(cljs.core.truth_(inst_34641)){
var statearr_34699_34782 = state_34679__$1;
(statearr_34699_34782[(1)] = (35));

} else {
var statearr_34700_34783 = state_34679__$1;
(statearr_34700_34783[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (40))){
var inst_34654 = (state_34679[(20)]);
var inst_34653 = (state_34679[(2)]);
var inst_34654__$1 = cljs.core.get.call(null,inst_34653,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34655 = cljs.core.get.call(null,inst_34653,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34656 = cljs.core.not_empty.call(null,inst_34654__$1);
var state_34679__$1 = (function (){var statearr_34701 = state_34679;
(statearr_34701[(21)] = inst_34655);

(statearr_34701[(20)] = inst_34654__$1);

return statearr_34701;
})();
if(cljs.core.truth_(inst_34656)){
var statearr_34702_34784 = state_34679__$1;
(statearr_34702_34784[(1)] = (41));

} else {
var statearr_34703_34785 = state_34679__$1;
(statearr_34703_34785[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (33))){
var state_34679__$1 = state_34679;
var statearr_34704_34786 = state_34679__$1;
(statearr_34704_34786[(2)] = false);

(statearr_34704_34786[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (13))){
var inst_34553 = (state_34679[(22)]);
var inst_34557 = cljs.core.chunk_first.call(null,inst_34553);
var inst_34558 = cljs.core.chunk_rest.call(null,inst_34553);
var inst_34559 = cljs.core.count.call(null,inst_34557);
var inst_34540 = inst_34558;
var inst_34541 = inst_34557;
var inst_34542 = inst_34559;
var inst_34543 = (0);
var state_34679__$1 = (function (){var statearr_34705 = state_34679;
(statearr_34705[(7)] = inst_34542);

(statearr_34705[(8)] = inst_34540);

(statearr_34705[(9)] = inst_34543);

(statearr_34705[(10)] = inst_34541);

return statearr_34705;
})();
var statearr_34706_34787 = state_34679__$1;
(statearr_34706_34787[(2)] = null);

(statearr_34706_34787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (22))){
var inst_34601 = (state_34679[(23)]);
var inst_34596 = (state_34679[(24)]);
var inst_34593 = (state_34679[(19)]);
var inst_34597 = (state_34679[(25)]);
var inst_34596__$1 = (state_34679[(2)]);
var inst_34597__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34596__$1);
var inst_34598 = (function (){var all_files = inst_34593;
var res_SINGLEQUOTE_ = inst_34596__$1;
var res = inst_34597__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34601,inst_34596,inst_34593,inst_34597,inst_34596__$1,inst_34597__$1,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34276_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34276_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34601,inst_34596,inst_34593,inst_34597,inst_34596__$1,inst_34597__$1,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34599 = cljs.core.filter.call(null,inst_34598,inst_34596__$1);
var inst_34600 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34601__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34600);
var inst_34602 = cljs.core.not_empty.call(null,inst_34601__$1);
var state_34679__$1 = (function (){var statearr_34707 = state_34679;
(statearr_34707[(23)] = inst_34601__$1);

(statearr_34707[(26)] = inst_34599);

(statearr_34707[(24)] = inst_34596__$1);

(statearr_34707[(25)] = inst_34597__$1);

return statearr_34707;
})();
if(cljs.core.truth_(inst_34602)){
var statearr_34708_34788 = state_34679__$1;
(statearr_34708_34788[(1)] = (23));

} else {
var statearr_34709_34789 = state_34679__$1;
(statearr_34709_34789[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (36))){
var state_34679__$1 = state_34679;
var statearr_34710_34790 = state_34679__$1;
(statearr_34710_34790[(2)] = false);

(statearr_34710_34790[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (41))){
var inst_34654 = (state_34679[(20)]);
var inst_34658 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34659 = cljs.core.map.call(null,inst_34658,inst_34654);
var inst_34660 = cljs.core.pr_str.call(null,inst_34659);
var inst_34661 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34660)].join('');
var inst_34662 = figwheel.client.utils.log.call(null,inst_34661);
var state_34679__$1 = state_34679;
var statearr_34711_34791 = state_34679__$1;
(statearr_34711_34791[(2)] = inst_34662);

(statearr_34711_34791[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (43))){
var inst_34655 = (state_34679[(21)]);
var inst_34665 = (state_34679[(2)]);
var inst_34666 = cljs.core.not_empty.call(null,inst_34655);
var state_34679__$1 = (function (){var statearr_34712 = state_34679;
(statearr_34712[(27)] = inst_34665);

return statearr_34712;
})();
if(cljs.core.truth_(inst_34666)){
var statearr_34713_34792 = state_34679__$1;
(statearr_34713_34792[(1)] = (44));

} else {
var statearr_34714_34793 = state_34679__$1;
(statearr_34714_34793[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (29))){
var inst_34601 = (state_34679[(23)]);
var inst_34599 = (state_34679[(26)]);
var inst_34633 = (state_34679[(16)]);
var inst_34596 = (state_34679[(24)]);
var inst_34593 = (state_34679[(19)]);
var inst_34597 = (state_34679[(25)]);
var inst_34629 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34632 = (function (){var all_files = inst_34593;
var res_SINGLEQUOTE_ = inst_34596;
var res = inst_34597;
var files_not_loaded = inst_34599;
var dependencies_that_loaded = inst_34601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34633,inst_34596,inst_34593,inst_34597,inst_34629,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34631){
var map__34715 = p__34631;
var map__34715__$1 = ((((!((map__34715 == null)))?((((map__34715.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34715.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34715):map__34715);
var namespace = cljs.core.get.call(null,map__34715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34633,inst_34596,inst_34593,inst_34597,inst_34629,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34633__$1 = cljs.core.group_by.call(null,inst_34632,inst_34599);
var inst_34635 = (inst_34633__$1 == null);
var inst_34636 = cljs.core.not.call(null,inst_34635);
var state_34679__$1 = (function (){var statearr_34717 = state_34679;
(statearr_34717[(16)] = inst_34633__$1);

(statearr_34717[(28)] = inst_34629);

return statearr_34717;
})();
if(inst_34636){
var statearr_34718_34794 = state_34679__$1;
(statearr_34718_34794[(1)] = (32));

} else {
var statearr_34719_34795 = state_34679__$1;
(statearr_34719_34795[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (44))){
var inst_34655 = (state_34679[(21)]);
var inst_34668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34655);
var inst_34669 = cljs.core.pr_str.call(null,inst_34668);
var inst_34670 = [cljs.core.str("not required: "),cljs.core.str(inst_34669)].join('');
var inst_34671 = figwheel.client.utils.log.call(null,inst_34670);
var state_34679__$1 = state_34679;
var statearr_34720_34796 = state_34679__$1;
(statearr_34720_34796[(2)] = inst_34671);

(statearr_34720_34796[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (6))){
var inst_34574 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34721_34797 = state_34679__$1;
(statearr_34721_34797[(2)] = inst_34574);

(statearr_34721_34797[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (28))){
var inst_34599 = (state_34679[(26)]);
var inst_34626 = (state_34679[(2)]);
var inst_34627 = cljs.core.not_empty.call(null,inst_34599);
var state_34679__$1 = (function (){var statearr_34722 = state_34679;
(statearr_34722[(29)] = inst_34626);

return statearr_34722;
})();
if(cljs.core.truth_(inst_34627)){
var statearr_34723_34798 = state_34679__$1;
(statearr_34723_34798[(1)] = (29));

} else {
var statearr_34724_34799 = state_34679__$1;
(statearr_34724_34799[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (25))){
var inst_34597 = (state_34679[(25)]);
var inst_34613 = (state_34679[(2)]);
var inst_34614 = cljs.core.not_empty.call(null,inst_34597);
var state_34679__$1 = (function (){var statearr_34725 = state_34679;
(statearr_34725[(30)] = inst_34613);

return statearr_34725;
})();
if(cljs.core.truth_(inst_34614)){
var statearr_34726_34800 = state_34679__$1;
(statearr_34726_34800[(1)] = (26));

} else {
var statearr_34727_34801 = state_34679__$1;
(statearr_34727_34801[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (34))){
var inst_34648 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
if(cljs.core.truth_(inst_34648)){
var statearr_34728_34802 = state_34679__$1;
(statearr_34728_34802[(1)] = (38));

} else {
var statearr_34729_34803 = state_34679__$1;
(statearr_34729_34803[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (17))){
var state_34679__$1 = state_34679;
var statearr_34730_34804 = state_34679__$1;
(statearr_34730_34804[(2)] = recompile_dependents);

(statearr_34730_34804[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (3))){
var state_34679__$1 = state_34679;
var statearr_34731_34805 = state_34679__$1;
(statearr_34731_34805[(2)] = null);

(statearr_34731_34805[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (12))){
var inst_34570 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34732_34806 = state_34679__$1;
(statearr_34732_34806[(2)] = inst_34570);

(statearr_34732_34806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (2))){
var inst_34532 = (state_34679[(13)]);
var inst_34539 = cljs.core.seq.call(null,inst_34532);
var inst_34540 = inst_34539;
var inst_34541 = null;
var inst_34542 = (0);
var inst_34543 = (0);
var state_34679__$1 = (function (){var statearr_34733 = state_34679;
(statearr_34733[(7)] = inst_34542);

(statearr_34733[(8)] = inst_34540);

(statearr_34733[(9)] = inst_34543);

(statearr_34733[(10)] = inst_34541);

return statearr_34733;
})();
var statearr_34734_34807 = state_34679__$1;
(statearr_34734_34807[(2)] = null);

(statearr_34734_34807[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (23))){
var inst_34601 = (state_34679[(23)]);
var inst_34599 = (state_34679[(26)]);
var inst_34596 = (state_34679[(24)]);
var inst_34593 = (state_34679[(19)]);
var inst_34597 = (state_34679[(25)]);
var inst_34604 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34606 = (function (){var all_files = inst_34593;
var res_SINGLEQUOTE_ = inst_34596;
var res = inst_34597;
var files_not_loaded = inst_34599;
var dependencies_that_loaded = inst_34601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34596,inst_34593,inst_34597,inst_34604,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34605){
var map__34735 = p__34605;
var map__34735__$1 = ((((!((map__34735 == null)))?((((map__34735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34735):map__34735);
var request_url = cljs.core.get.call(null,map__34735__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34596,inst_34593,inst_34597,inst_34604,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34607 = cljs.core.reverse.call(null,inst_34601);
var inst_34608 = cljs.core.map.call(null,inst_34606,inst_34607);
var inst_34609 = cljs.core.pr_str.call(null,inst_34608);
var inst_34610 = figwheel.client.utils.log.call(null,inst_34609);
var state_34679__$1 = (function (){var statearr_34737 = state_34679;
(statearr_34737[(31)] = inst_34604);

return statearr_34737;
})();
var statearr_34738_34808 = state_34679__$1;
(statearr_34738_34808[(2)] = inst_34610);

(statearr_34738_34808[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (35))){
var state_34679__$1 = state_34679;
var statearr_34739_34809 = state_34679__$1;
(statearr_34739_34809[(2)] = true);

(statearr_34739_34809[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (19))){
var inst_34583 = (state_34679[(12)]);
var inst_34589 = figwheel.client.file_reloading.expand_files.call(null,inst_34583);
var state_34679__$1 = state_34679;
var statearr_34740_34810 = state_34679__$1;
(statearr_34740_34810[(2)] = inst_34589);

(statearr_34740_34810[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (11))){
var state_34679__$1 = state_34679;
var statearr_34741_34811 = state_34679__$1;
(statearr_34741_34811[(2)] = null);

(statearr_34741_34811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (9))){
var inst_34572 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34742_34812 = state_34679__$1;
(statearr_34742_34812[(2)] = inst_34572);

(statearr_34742_34812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (5))){
var inst_34542 = (state_34679[(7)]);
var inst_34543 = (state_34679[(9)]);
var inst_34545 = (inst_34543 < inst_34542);
var inst_34546 = inst_34545;
var state_34679__$1 = state_34679;
if(cljs.core.truth_(inst_34546)){
var statearr_34743_34813 = state_34679__$1;
(statearr_34743_34813[(1)] = (7));

} else {
var statearr_34744_34814 = state_34679__$1;
(statearr_34744_34814[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (14))){
var inst_34553 = (state_34679[(22)]);
var inst_34562 = cljs.core.first.call(null,inst_34553);
var inst_34563 = figwheel.client.file_reloading.eval_body.call(null,inst_34562,opts);
var inst_34564 = cljs.core.next.call(null,inst_34553);
var inst_34540 = inst_34564;
var inst_34541 = null;
var inst_34542 = (0);
var inst_34543 = (0);
var state_34679__$1 = (function (){var statearr_34745 = state_34679;
(statearr_34745[(7)] = inst_34542);

(statearr_34745[(8)] = inst_34540);

(statearr_34745[(9)] = inst_34543);

(statearr_34745[(10)] = inst_34541);

(statearr_34745[(32)] = inst_34563);

return statearr_34745;
})();
var statearr_34746_34815 = state_34679__$1;
(statearr_34746_34815[(2)] = null);

(statearr_34746_34815[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (45))){
var state_34679__$1 = state_34679;
var statearr_34747_34816 = state_34679__$1;
(statearr_34747_34816[(2)] = null);

(statearr_34747_34816[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (26))){
var inst_34601 = (state_34679[(23)]);
var inst_34599 = (state_34679[(26)]);
var inst_34596 = (state_34679[(24)]);
var inst_34593 = (state_34679[(19)]);
var inst_34597 = (state_34679[(25)]);
var inst_34616 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34618 = (function (){var all_files = inst_34593;
var res_SINGLEQUOTE_ = inst_34596;
var res = inst_34597;
var files_not_loaded = inst_34599;
var dependencies_that_loaded = inst_34601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34596,inst_34593,inst_34597,inst_34616,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34617){
var map__34748 = p__34617;
var map__34748__$1 = ((((!((map__34748 == null)))?((((map__34748.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34748.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34748):map__34748);
var namespace = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34596,inst_34593,inst_34597,inst_34616,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34619 = cljs.core.map.call(null,inst_34618,inst_34597);
var inst_34620 = cljs.core.pr_str.call(null,inst_34619);
var inst_34621 = figwheel.client.utils.log.call(null,inst_34620);
var inst_34622 = (function (){var all_files = inst_34593;
var res_SINGLEQUOTE_ = inst_34596;
var res = inst_34597;
var files_not_loaded = inst_34599;
var dependencies_that_loaded = inst_34601;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34596,inst_34593,inst_34597,inst_34616,inst_34618,inst_34619,inst_34620,inst_34621,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34601,inst_34599,inst_34596,inst_34593,inst_34597,inst_34616,inst_34618,inst_34619,inst_34620,inst_34621,state_val_34680,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34623 = setTimeout(inst_34622,(10));
var state_34679__$1 = (function (){var statearr_34750 = state_34679;
(statearr_34750[(33)] = inst_34621);

(statearr_34750[(34)] = inst_34616);

return statearr_34750;
})();
var statearr_34751_34817 = state_34679__$1;
(statearr_34751_34817[(2)] = inst_34623);

(statearr_34751_34817[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (16))){
var state_34679__$1 = state_34679;
var statearr_34752_34818 = state_34679__$1;
(statearr_34752_34818[(2)] = reload_dependents);

(statearr_34752_34818[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (38))){
var inst_34633 = (state_34679[(16)]);
var inst_34650 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34633);
var state_34679__$1 = state_34679;
var statearr_34753_34819 = state_34679__$1;
(statearr_34753_34819[(2)] = inst_34650);

(statearr_34753_34819[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (30))){
var state_34679__$1 = state_34679;
var statearr_34754_34820 = state_34679__$1;
(statearr_34754_34820[(2)] = null);

(statearr_34754_34820[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (10))){
var inst_34553 = (state_34679[(22)]);
var inst_34555 = cljs.core.chunked_seq_QMARK_.call(null,inst_34553);
var state_34679__$1 = state_34679;
if(inst_34555){
var statearr_34755_34821 = state_34679__$1;
(statearr_34755_34821[(1)] = (13));

} else {
var statearr_34756_34822 = state_34679__$1;
(statearr_34756_34822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (18))){
var inst_34587 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
if(cljs.core.truth_(inst_34587)){
var statearr_34757_34823 = state_34679__$1;
(statearr_34757_34823[(1)] = (19));

} else {
var statearr_34758_34824 = state_34679__$1;
(statearr_34758_34824[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (42))){
var state_34679__$1 = state_34679;
var statearr_34759_34825 = state_34679__$1;
(statearr_34759_34825[(2)] = null);

(statearr_34759_34825[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (37))){
var inst_34645 = (state_34679[(2)]);
var state_34679__$1 = state_34679;
var statearr_34760_34826 = state_34679__$1;
(statearr_34760_34826[(2)] = inst_34645);

(statearr_34760_34826[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34680 === (8))){
var inst_34540 = (state_34679[(8)]);
var inst_34553 = (state_34679[(22)]);
var inst_34553__$1 = cljs.core.seq.call(null,inst_34540);
var state_34679__$1 = (function (){var statearr_34761 = state_34679;
(statearr_34761[(22)] = inst_34553__$1);

return statearr_34761;
})();
if(inst_34553__$1){
var statearr_34762_34827 = state_34679__$1;
(statearr_34762_34827[(1)] = (10));

} else {
var statearr_34763_34828 = state_34679__$1;
(statearr_34763_34828[(1)] = (11));

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
});})(c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30878__auto__,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto____0 = (function (){
var statearr_34767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34767[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto__);

(statearr_34767[(1)] = (1));

return statearr_34767;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto____1 = (function (state_34679){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_34679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e34768){if((e34768 instanceof Object)){
var ex__30882__auto__ = e34768;
var statearr_34769_34829 = state_34679;
(statearr_34769_34829[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34830 = state_34679;
state_34679 = G__34830;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto__ = function(state_34679){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto____1.call(this,state_34679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30992__auto__ = (function (){var statearr_34770 = f__30991__auto__.call(null);
(statearr_34770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_34770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__,map__34525,map__34525__$1,opts,before_jsload,on_jsload,reload_dependents,map__34526,map__34526__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30990__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34833,link){
var map__34836 = p__34833;
var map__34836__$1 = ((((!((map__34836 == null)))?((((map__34836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34836):map__34836);
var file = cljs.core.get.call(null,map__34836__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34836,map__34836__$1,file){
return (function (p1__34831_SHARP_,p2__34832_SHARP_){
if(cljs.core._EQ_.call(null,p1__34831_SHARP_,p2__34832_SHARP_)){
return p1__34831_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34836,map__34836__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34842){
var map__34843 = p__34842;
var map__34843__$1 = ((((!((map__34843 == null)))?((((map__34843.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34843.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34843):map__34843);
var match_length = cljs.core.get.call(null,map__34843__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34843__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34838_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34838_SHARP_);
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
var args34845 = [];
var len__26171__auto___34848 = arguments.length;
var i__26172__auto___34849 = (0);
while(true){
if((i__26172__auto___34849 < len__26171__auto___34848)){
args34845.push((arguments[i__26172__auto___34849]));

var G__34850 = (i__26172__auto___34849 + (1));
i__26172__auto___34849 = G__34850;
continue;
} else {
}
break;
}

var G__34847 = args34845.length;
switch (G__34847) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34845.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34852_SHARP_,p2__34853_SHARP_){
return cljs.core.assoc.call(null,p1__34852_SHARP_,cljs.core.get.call(null,p2__34853_SHARP_,key),p2__34853_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__34854){
var map__34857 = p__34854;
var map__34857__$1 = ((((!((map__34857 == null)))?((((map__34857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34857):map__34857);
var f_data = map__34857__$1;
var file = cljs.core.get.call(null,map__34857__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34859,p__34860){
var map__34869 = p__34859;
var map__34869__$1 = ((((!((map__34869 == null)))?((((map__34869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34869):map__34869);
var opts = map__34869__$1;
var on_cssload = cljs.core.get.call(null,map__34869__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34870 = p__34860;
var map__34870__$1 = ((((!((map__34870 == null)))?((((map__34870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34870):map__34870);
var files_msg = map__34870__$1;
var files = cljs.core.get.call(null,map__34870__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__34873_34877 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__34874_34878 = null;
var count__34875_34879 = (0);
var i__34876_34880 = (0);
while(true){
if((i__34876_34880 < count__34875_34879)){
var f_34881 = cljs.core._nth.call(null,chunk__34874_34878,i__34876_34880);
figwheel.client.file_reloading.reload_css_file.call(null,f_34881);

var G__34882 = seq__34873_34877;
var G__34883 = chunk__34874_34878;
var G__34884 = count__34875_34879;
var G__34885 = (i__34876_34880 + (1));
seq__34873_34877 = G__34882;
chunk__34874_34878 = G__34883;
count__34875_34879 = G__34884;
i__34876_34880 = G__34885;
continue;
} else {
var temp__4657__auto___34886 = cljs.core.seq.call(null,seq__34873_34877);
if(temp__4657__auto___34886){
var seq__34873_34887__$1 = temp__4657__auto___34886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34873_34887__$1)){
var c__25907__auto___34888 = cljs.core.chunk_first.call(null,seq__34873_34887__$1);
var G__34889 = cljs.core.chunk_rest.call(null,seq__34873_34887__$1);
var G__34890 = c__25907__auto___34888;
var G__34891 = cljs.core.count.call(null,c__25907__auto___34888);
var G__34892 = (0);
seq__34873_34877 = G__34889;
chunk__34874_34878 = G__34890;
count__34875_34879 = G__34891;
i__34876_34880 = G__34892;
continue;
} else {
var f_34893 = cljs.core.first.call(null,seq__34873_34887__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_34893);

var G__34894 = cljs.core.next.call(null,seq__34873_34887__$1);
var G__34895 = null;
var G__34896 = (0);
var G__34897 = (0);
seq__34873_34877 = G__34894;
chunk__34874_34878 = G__34895;
count__34875_34879 = G__34896;
i__34876_34880 = G__34897;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__34869,map__34869__$1,opts,on_cssload,map__34870,map__34870__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__34869,map__34869__$1,opts,on_cssload,map__34870,map__34870__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1504172203853