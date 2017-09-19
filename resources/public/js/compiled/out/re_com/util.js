// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_com.util');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7197__auto__ = (function re_com$util$fmap_$_iter__10270(s__10271){
return (new cljs.core.LazySeq(null,(function (){
var s__10271__$1 = s__10271;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10271__$1);
if(temp__4657__auto__){
var s__10271__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10271__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__10271__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__10273 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__10272 = (0);
while(true){
if((i__10272 < size__7196__auto__)){
var vec__10280 = cljs.core._nth.call(null,c__7195__auto__,i__10272);
var k = cljs.core.nth.call(null,vec__10280,(0),null);
var val = cljs.core.nth.call(null,vec__10280,(1),null);
cljs.core.chunk_append.call(null,b__10273,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__10286 = (i__10272 + (1));
i__10272 = G__10286;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),re_com$util$fmap_$_iter__10270.call(null,cljs.core.chunk_rest.call(null,s__10271__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10273),null);
}
} else {
var vec__10283 = cljs.core.first.call(null,s__10271__$2);
var k = cljs.core.nth.call(null,vec__10283,(0),null);
var val = cljs.core.nth.call(null,vec__10283,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__10270.call(null,cljs.core.rest.call(null,s__10271__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7197__auto__.call(null,m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10288 = arguments.length;
var i__7493__auto___10289 = (0);
while(true){
if((i__7493__auto___10289 < len__7492__auto___10288)){
args__7499__auto__.push((arguments[i__7493__auto___10289]));

var G__10290 = (i__7493__auto___10289 + (1));
i__7493__auto___10289 = G__10290;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((0) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__7500__auto__);
});

re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,vals)){
return cljs.core.apply.call(null,cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last.call(null,vals);
}
});

re_com.util.deep_merge.cljs$lang$maxFixedArity = (0);

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq10287){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10287));
});

re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if(((!((val_or_atom == null)))?((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (val_or_atom.cljs$core$IDeref$))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,val_or_atom))){
return cljs.core.deref.call(null,val_or_atom);
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count.call(null,s) < len)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.take_last.call(null,len,cljs.core.concat.call(null,cljs.core.repeat.call(null,len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero.call(null,[cljs.core.str(num)].join(''),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10295 = arguments.length;
var i__7493__auto___10296 = (0);
while(true){
if((i__7493__auto___10296 < len__7492__auto___10295)){
args__7499__auto__.push((arguments[i__7493__auto___10296]));

var G__10297 = (i__7493__auto___10296 + (1));
i__7493__auto___10296 = G__10297;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((1) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7500__auto__);
});

re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return [cljs.core.str((cljs.core.truth_(negative)?(- val):val)),cljs.core.str("px")].join('');
});

re_com.util.px.cljs$lang$maxFixedArity = (1);

re_com.util.px.cljs$lang$applyTo = (function (seq10293){
var G__10294 = cljs.core.first.call(null,seq10293);
var seq10293__$1 = cljs.core.next.call(null,seq10293);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__10294,seq10293__$1);
});

/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,v,(0),n),cljs.core.subvec.call(null,v,(n + (1)),cljs.core.count.call(null,v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.subvec.call(null,vect,(0),index),item,cljs.core.subvec.call(null,vect,index));
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10304 = arguments.length;
var i__7493__auto___10305 = (0);
while(true){
if((i__7493__auto___10305 < len__7492__auto___10304)){
args__7499__auto__.push((arguments[i__7493__auto___10305]));

var G__10306 = (i__7493__auto___10305 + (1));
i__7493__auto___10305 = G__10306;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10301){
var map__10302 = p__10301;
var map__10302__$1 = ((((!((map__10302 == null)))?((((map__10302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10302):map__10302);
var id_fn = cljs.core.get.call(null,map__10302__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__10302,map__10302__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__10302,map__10302__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq10298){
var G__10299 = cljs.core.first.call(null,seq10298);
var seq10298__$1 = cljs.core.next.call(null,seq10298);
var G__10300 = cljs.core.first.call(null,seq10298__$1);
var seq10298__$2 = cljs.core.next.call(null,seq10298__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__10299,G__10300,seq10298__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10314 = arguments.length;
var i__7493__auto___10315 = (0);
while(true){
if((i__7493__auto___10315 < len__7492__auto___10314)){
args__7499__auto__.push((arguments[i__7493__auto___10315]));

var G__10316 = (i__7493__auto___10315 + (1));
i__7493__auto___10315 = G__10316;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10311){
var map__10312 = p__10311;
var map__10312__$1 = ((((!((map__10312 == null)))?((((map__10312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10312):map__10312);
var id_fn = cljs.core.get.call(null,map__10312__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__10312,map__10312__$1,id_fn){
return (function (p1__10307_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__10307_SHARP_),id);
});})(map__10312,map__10312__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq10308){
var G__10309 = cljs.core.first.call(null,seq10308);
var seq10308__$1 = cljs.core.next.call(null,seq10308);
var G__10310 = cljs.core.first.call(null,seq10308__$1);
var seq10308__$2 = cljs.core.next.call(null,seq10308__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__10309,G__10310,seq10308__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10324 = arguments.length;
var i__7493__auto___10325 = (0);
while(true){
if((i__7493__auto___10325 < len__7492__auto___10324)){
args__7499__auto__.push((arguments[i__7493__auto___10325]));

var G__10326 = (i__7493__auto___10325 + (1));
i__7493__auto___10325 = G__10326;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10321){
var map__10322 = p__10321;
var map__10322__$1 = ((((!((map__10322 == null)))?((((map__10322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10322):map__10322);
var id_fn = cljs.core.get.call(null,map__10322__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__10322,map__10322__$1,id_fn){
return (function (p1__10317_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__10317_SHARP_),id);
});})(map__10322,map__10322__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq10318){
var G__10319 = cljs.core.first.call(null,seq10318);
var seq10318__$1 = cljs.core.next.call(null,seq10318);
var G__10320 = cljs.core.first.call(null,seq10318__$1);
var seq10318__$2 = cljs.core.next.call(null,seq10318__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__10319,G__10320,seq10318__$2);
});

/**
 * (for [[index item first? last?] (enumerate coll)] ...)  
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count.call(null,coll) - (1));
var f = ((function (c){
return (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.call(null,(0),index),cljs.core._EQ_.call(null,c,index)], null);
});})(c))
;
return cljs.core.map_indexed.call(null,f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.call(null,current_node.tagName,"BODY")){
var G__10327 = current_node.parentNode;
var G__10328 = (sum_scroll_left + current_node.scrollLeft);
var G__10329 = (sum_scroll_top + current_node.scrollTop);
current_node = G__10327;
sum_scroll_left = G__10328;
sum_scroll_top = G__10329;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Answer a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date.getYear(),local_date.getMonth(),local_date.getDate(),(0),(0),(0),(0)));
});

//# sourceMappingURL=util.js.map?rel=1505229167554