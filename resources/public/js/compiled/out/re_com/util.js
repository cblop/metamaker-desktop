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
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7197__auto__ = (function re_com$util$fmap_$_iter__10268(s__10269){
return (new cljs.core.LazySeq(null,(function (){
var s__10269__$1 = s__10269;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10269__$1);
if(temp__4657__auto__){
var s__10269__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10269__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__10269__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__10271 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__10270 = (0);
while(true){
if((i__10270 < size__7196__auto__)){
var vec__10278 = cljs.core._nth.call(null,c__7195__auto__,i__10270);
var k = cljs.core.nth.call(null,vec__10278,(0),null);
var val = cljs.core.nth.call(null,vec__10278,(1),null);
cljs.core.chunk_append.call(null,b__10271,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null));

var G__10284 = (i__10270 + (1));
i__10270 = G__10284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10271),re_com$util$fmap_$_iter__10268.call(null,cljs.core.chunk_rest.call(null,s__10269__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10271),null);
}
} else {
var vec__10281 = cljs.core.first.call(null,s__10269__$2);
var k = cljs.core.nth.call(null,vec__10281,(0),null);
var val = cljs.core.nth.call(null,vec__10281,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,val)], null),re_com$util$fmap_$_iter__10268.call(null,cljs.core.rest.call(null,s__10269__$2)));
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
var len__7492__auto___10286 = arguments.length;
var i__7493__auto___10287 = (0);
while(true){
if((i__7493__auto___10287 < len__7492__auto___10286)){
args__7499__auto__.push((arguments[i__7493__auto___10287]));

var G__10288 = (i__7493__auto___10287 + (1));
i__7493__auto___10287 = G__10288;
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

re_com.util.deep_merge.cljs$lang$applyTo = (function (seq10285){
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10285));
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
var len__7492__auto___10293 = arguments.length;
var i__7493__auto___10294 = (0);
while(true){
if((i__7493__auto___10294 < len__7492__auto___10293)){
args__7499__auto__.push((arguments[i__7493__auto___10294]));

var G__10295 = (i__7493__auto___10294 + (1));
i__7493__auto___10294 = G__10295;
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

re_com.util.px.cljs$lang$applyTo = (function (seq10291){
var G__10292 = cljs.core.first.call(null,seq10291);
var seq10291__$1 = cljs.core.next.call(null,seq10291);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic(G__10292,seq10291__$1);
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
var len__7492__auto___10302 = arguments.length;
var i__7493__auto___10303 = (0);
while(true){
if((i__7493__auto___10303 < len__7492__auto___10302)){
args__7499__auto__.push((arguments[i__7493__auto___10303]));

var G__10304 = (i__7493__auto___10303 + (1));
i__7493__auto___10303 = G__10304;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10299){
var map__10300 = p__10299;
var map__10300__$1 = ((((!((map__10300 == null)))?((((map__10300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10300):map__10300);
var id_fn = cljs.core.get.call(null,map__10300__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = ((function (map__10300,map__10300__$1,id_fn){
return (function (index,item){
if(cljs.core._EQ_.call(null,id_fn.call(null,item),id)){
return index;
} else {
return null;
}
});})(map__10300,map__10300__$1,id_fn))
;
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,index_fn,v));
});

re_com.util.position_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.position_for_id.cljs$lang$applyTo = (function (seq10296){
var G__10297 = cljs.core.first.call(null,seq10296);
var seq10296__$1 = cljs.core.next.call(null,seq10296);
var G__10298 = cljs.core.first.call(null,seq10296__$1);
var seq10296__$2 = cljs.core.next.call(null,seq10296__$1);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic(G__10297,G__10298,seq10296__$2);
});

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10312 = arguments.length;
var i__7493__auto___10313 = (0);
while(true){
if((i__7493__auto___10313 < len__7492__auto___10312)){
args__7499__auto__.push((arguments[i__7493__auto___10313]));

var G__10314 = (i__7493__auto___10313 + (1));
i__7493__auto___10313 = G__10314;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10309){
var map__10310 = p__10309;
var map__10310__$1 = ((((!((map__10310 == null)))?((((map__10310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10310):map__10310);
var id_fn = cljs.core.get.call(null,map__10310__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__10310,map__10310__$1,id_fn){
return (function (p1__10305_SHARP_){
return cljs.core._EQ_.call(null,id_fn.call(null,p1__10305_SHARP_),id);
});})(map__10310,map__10310__$1,id_fn))
,v));
});

re_com.util.item_for_id.cljs$lang$maxFixedArity = (2);

re_com.util.item_for_id.cljs$lang$applyTo = (function (seq10306){
var G__10307 = cljs.core.first.call(null,seq10306);
var seq10306__$1 = cljs.core.next.call(null,seq10306);
var G__10308 = cljs.core.first.call(null,seq10306__$1);
var seq10306__$2 = cljs.core.next.call(null,seq10306__$1);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic(G__10307,G__10308,seq10306__$2);
});

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__7499__auto__ = [];
var len__7492__auto___10322 = arguments.length;
var i__7493__auto___10323 = (0);
while(true){
if((i__7493__auto___10323 < len__7492__auto___10322)){
args__7499__auto__.push((arguments[i__7493__auto___10323]));

var G__10324 = (i__7493__auto___10323 + (1));
i__7493__auto___10323 = G__10324;
continue;
} else {
}
break;
}

var argseq__7500__auto__ = ((((2) < args__7499__auto__.length))?(new cljs.core.IndexedSeq(args__7499__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7500__auto__);
});

re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__10319){
var map__10320 = p__10319;
var map__10320__$1 = ((((!((map__10320 == null)))?((((map__10320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10320):map__10320);
var id_fn = cljs.core.get.call(null,map__10320__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv.call(null,((function (map__10320,map__10320__$1,id_fn){
return (function (p1__10315_SHARP_){
return cljs.core.not_EQ_.call(null,id_fn.call(null,p1__10315_SHARP_),id);
});})(map__10320,map__10320__$1,id_fn))
,v);
});

re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2);

re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq10316){
var G__10317 = cljs.core.first.call(null,seq10316);
var seq10316__$1 = cljs.core.next.call(null,seq10316);
var G__10318 = cljs.core.first.call(null,seq10316__$1);
var seq10316__$2 = cljs.core.next.call(null,seq10316__$1);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic(G__10317,G__10318,seq10316__$2);
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
var G__10325 = current_node.parentNode;
var G__10326 = (sum_scroll_left + current_node.scrollLeft);
var G__10327 = (sum_scroll_top + current_node.scrollTop);
current_node = G__10325;
sum_scroll_left = G__10326;
sum_scroll_top = G__10327;
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

//# sourceMappingURL=util.js.map?rel=1502809963263