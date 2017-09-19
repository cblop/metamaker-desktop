// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__9629_9633 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__9630_9634 = null;
var count__9631_9635 = (0);
var i__9632_9636 = (0);
while(true){
if((i__9632_9636 < count__9631_9635)){
var k_9637 = cljs.core._nth.call(null,chunk__9630_9634,i__9632_9636);
var v_9638 = (b[k_9637]);
(a[k_9637] = v_9638);

var G__9639 = seq__9629_9633;
var G__9640 = chunk__9630_9634;
var G__9641 = count__9631_9635;
var G__9642 = (i__9632_9636 + (1));
seq__9629_9633 = G__9639;
chunk__9630_9634 = G__9640;
count__9631_9635 = G__9641;
i__9632_9636 = G__9642;
continue;
} else {
var temp__4657__auto___9643 = cljs.core.seq.call(null,seq__9629_9633);
if(temp__4657__auto___9643){
var seq__9629_9644__$1 = temp__4657__auto___9643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9629_9644__$1)){
var c__7228__auto___9645 = cljs.core.chunk_first.call(null,seq__9629_9644__$1);
var G__9646 = cljs.core.chunk_rest.call(null,seq__9629_9644__$1);
var G__9647 = c__7228__auto___9645;
var G__9648 = cljs.core.count.call(null,c__7228__auto___9645);
var G__9649 = (0);
seq__9629_9633 = G__9646;
chunk__9630_9634 = G__9647;
count__9631_9635 = G__9648;
i__9632_9636 = G__9649;
continue;
} else {
var k_9650 = cljs.core.first.call(null,seq__9629_9644__$1);
var v_9651 = (b[k_9650]);
(a[k_9650] = v_9651);

var G__9652 = cljs.core.next.call(null,seq__9629_9644__$1);
var G__9653 = null;
var G__9654 = (0);
var G__9655 = (0);
seq__9629_9633 = G__9652;
chunk__9630_9634 = G__9653;
count__9631_9635 = G__9654;
i__9632_9636 = G__9655;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args9656 = [];
var len__7492__auto___9659 = arguments.length;
var i__7493__auto___9660 = (0);
while(true){
if((i__7493__auto___9660 < len__7492__auto___9659)){
args9656.push((arguments[i__7493__auto___9660]));

var G__9661 = (i__7493__auto___9660 + (1));
i__7493__auto___9660 = G__9661;
continue;
} else {
}
break;
}

var G__9658 = args9656.length;
switch (G__9658) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9656.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__9663 = (i + (2));
var G__9664 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__9663;
ret = G__9664;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9665_9669 = cljs.core.seq.call(null,v);
var chunk__9666_9670 = null;
var count__9667_9671 = (0);
var i__9668_9672 = (0);
while(true){
if((i__9668_9672 < count__9667_9671)){
var x_9673 = cljs.core._nth.call(null,chunk__9666_9670,i__9668_9672);
ret.push(x_9673);

var G__9674 = seq__9665_9669;
var G__9675 = chunk__9666_9670;
var G__9676 = count__9667_9671;
var G__9677 = (i__9668_9672 + (1));
seq__9665_9669 = G__9674;
chunk__9666_9670 = G__9675;
count__9667_9671 = G__9676;
i__9668_9672 = G__9677;
continue;
} else {
var temp__4657__auto___9678 = cljs.core.seq.call(null,seq__9665_9669);
if(temp__4657__auto___9678){
var seq__9665_9679__$1 = temp__4657__auto___9678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9665_9679__$1)){
var c__7228__auto___9680 = cljs.core.chunk_first.call(null,seq__9665_9679__$1);
var G__9681 = cljs.core.chunk_rest.call(null,seq__9665_9679__$1);
var G__9682 = c__7228__auto___9680;
var G__9683 = cljs.core.count.call(null,c__7228__auto___9680);
var G__9684 = (0);
seq__9665_9669 = G__9681;
chunk__9666_9670 = G__9682;
count__9667_9671 = G__9683;
i__9668_9672 = G__9684;
continue;
} else {
var x_9685 = cljs.core.first.call(null,seq__9665_9679__$1);
ret.push(x_9685);

var G__9686 = cljs.core.next.call(null,seq__9665_9679__$1);
var G__9687 = null;
var G__9688 = (0);
var G__9689 = (0);
seq__9665_9669 = G__9686;
chunk__9666_9670 = G__9687;
count__9667_9671 = G__9688;
i__9668_9672 = G__9689;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9690_9694 = cljs.core.seq.call(null,v);
var chunk__9691_9695 = null;
var count__9692_9696 = (0);
var i__9693_9697 = (0);
while(true){
if((i__9693_9697 < count__9692_9696)){
var x_9698 = cljs.core._nth.call(null,chunk__9691_9695,i__9693_9697);
ret.push(x_9698);

var G__9699 = seq__9690_9694;
var G__9700 = chunk__9691_9695;
var G__9701 = count__9692_9696;
var G__9702 = (i__9693_9697 + (1));
seq__9690_9694 = G__9699;
chunk__9691_9695 = G__9700;
count__9692_9696 = G__9701;
i__9693_9697 = G__9702;
continue;
} else {
var temp__4657__auto___9703 = cljs.core.seq.call(null,seq__9690_9694);
if(temp__4657__auto___9703){
var seq__9690_9704__$1 = temp__4657__auto___9703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9690_9704__$1)){
var c__7228__auto___9705 = cljs.core.chunk_first.call(null,seq__9690_9704__$1);
var G__9706 = cljs.core.chunk_rest.call(null,seq__9690_9704__$1);
var G__9707 = c__7228__auto___9705;
var G__9708 = cljs.core.count.call(null,c__7228__auto___9705);
var G__9709 = (0);
seq__9690_9694 = G__9706;
chunk__9691_9695 = G__9707;
count__9692_9696 = G__9708;
i__9693_9697 = G__9709;
continue;
} else {
var x_9710 = cljs.core.first.call(null,seq__9690_9704__$1);
ret.push(x_9710);

var G__9711 = cljs.core.next.call(null,seq__9690_9704__$1);
var G__9712 = null;
var G__9713 = (0);
var G__9714 = (0);
seq__9690_9694 = G__9711;
chunk__9691_9695 = G__9712;
count__9692_9696 = G__9713;
i__9693_9697 = G__9714;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__9715_9719 = cljs.core.seq.call(null,v);
var chunk__9716_9720 = null;
var count__9717_9721 = (0);
var i__9718_9722 = (0);
while(true){
if((i__9718_9722 < count__9717_9721)){
var x_9723 = cljs.core._nth.call(null,chunk__9716_9720,i__9718_9722);
ret.push(x_9723);

var G__9724 = seq__9715_9719;
var G__9725 = chunk__9716_9720;
var G__9726 = count__9717_9721;
var G__9727 = (i__9718_9722 + (1));
seq__9715_9719 = G__9724;
chunk__9716_9720 = G__9725;
count__9717_9721 = G__9726;
i__9718_9722 = G__9727;
continue;
} else {
var temp__4657__auto___9728 = cljs.core.seq.call(null,seq__9715_9719);
if(temp__4657__auto___9728){
var seq__9715_9729__$1 = temp__4657__auto___9728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9715_9729__$1)){
var c__7228__auto___9730 = cljs.core.chunk_first.call(null,seq__9715_9729__$1);
var G__9731 = cljs.core.chunk_rest.call(null,seq__9715_9729__$1);
var G__9732 = c__7228__auto___9730;
var G__9733 = cljs.core.count.call(null,c__7228__auto___9730);
var G__9734 = (0);
seq__9715_9719 = G__9731;
chunk__9716_9720 = G__9732;
count__9717_9721 = G__9733;
i__9718_9722 = G__9734;
continue;
} else {
var x_9735 = cljs.core.first.call(null,seq__9715_9729__$1);
ret.push(x_9735);

var G__9736 = cljs.core.next.call(null,seq__9715_9729__$1);
var G__9737 = null;
var G__9738 = (0);
var G__9739 = (0);
seq__9715_9719 = G__9736;
chunk__9716_9720 = G__9737;
count__9717_9721 = G__9738;
i__9718_9722 = G__9739;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args9740 = [];
var len__7492__auto___9755 = arguments.length;
var i__7493__auto___9756 = (0);
while(true){
if((i__7493__auto___9756 < len__7492__auto___9755)){
args9740.push((arguments[i__7493__auto___9756]));

var G__9757 = (i__7493__auto___9756 + (1));
i__7493__auto___9756 = G__9757;
continue;
} else {
}
break;
}

var G__9742 = args9740.length;
switch (G__9742) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9740.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__9743 = obj;
G__9743.push(kfn.call(null,k),vfn.call(null,v));

return G__9743;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x9744 = cljs.core.clone.call(null,handlers);
x9744.forEach = ((function (x9744,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__9745 = cljs.core.seq.call(null,coll);
var chunk__9746 = null;
var count__9747 = (0);
var i__9748 = (0);
while(true){
if((i__9748 < count__9747)){
var vec__9749 = cljs.core._nth.call(null,chunk__9746,i__9748);
var k = cljs.core.nth.call(null,vec__9749,(0),null);
var v = cljs.core.nth.call(null,vec__9749,(1),null);
f.call(null,v,k);

var G__9759 = seq__9745;
var G__9760 = chunk__9746;
var G__9761 = count__9747;
var G__9762 = (i__9748 + (1));
seq__9745 = G__9759;
chunk__9746 = G__9760;
count__9747 = G__9761;
i__9748 = G__9762;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__9745);
if(temp__4657__auto__){
var seq__9745__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9745__$1)){
var c__7228__auto__ = cljs.core.chunk_first.call(null,seq__9745__$1);
var G__9763 = cljs.core.chunk_rest.call(null,seq__9745__$1);
var G__9764 = c__7228__auto__;
var G__9765 = cljs.core.count.call(null,c__7228__auto__);
var G__9766 = (0);
seq__9745 = G__9763;
chunk__9746 = G__9764;
count__9747 = G__9765;
i__9748 = G__9766;
continue;
} else {
var vec__9752 = cljs.core.first.call(null,seq__9745__$1);
var k = cljs.core.nth.call(null,vec__9752,(0),null);
var v = cljs.core.nth.call(null,vec__9752,(1),null);
f.call(null,v,k);

var G__9767 = cljs.core.next.call(null,seq__9745__$1);
var G__9768 = null;
var G__9769 = (0);
var G__9770 = (0);
seq__9745 = G__9767;
chunk__9746 = G__9768;
count__9747 = G__9769;
i__9748 = G__9770;
continue;
}
} else {
return null;
}
}
break;
}
});})(x9744,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x9744;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args9771 = [];
var len__7492__auto___9777 = arguments.length;
var i__7493__auto___9778 = (0);
while(true){
if((i__7493__auto___9778 < len__7492__auto___9777)){
args9771.push((arguments[i__7493__auto___9778]));

var G__9779 = (i__7493__auto___9778 + (1));
i__7493__auto___9778 = G__9779;
continue;
} else {
}
break;
}

var G__9773 = args9771.length;
switch (G__9773) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9771.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit9774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit9774 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta9775){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta9775 = meta9775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit9774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9776,meta9775__$1){
var self__ = this;
var _9776__$1 = this;
return (new cognitect.transit.t_cognitect$transit9774(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta9775__$1));
});

cognitect.transit.t_cognitect$transit9774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9776){
var self__ = this;
var _9776__$1 = this;
return self__.meta9775;
});

cognitect.transit.t_cognitect$transit9774.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9774.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit9774.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9774.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit9774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta9775","meta9775",1686069315,null)], null);
});

cognitect.transit.t_cognitect$transit9774.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit9774.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit9774";

cognitect.transit.t_cognitect$transit9774.cljs$lang$ctorPrWriter = (function (this__7023__auto__,writer__7024__auto__,opt__7025__auto__){
return cljs.core._write.call(null,writer__7024__auto__,"cognitect.transit/t_cognitect$transit9774");
});

cognitect.transit.__GT_t_cognitect$transit9774 = (function cognitect$transit$__GT_t_cognitect$transit9774(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9775){
return (new cognitect.transit.t_cognitect$transit9774(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta9775));
});

}

return (new cognitect.transit.t_cognitect$transit9774(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__6417__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1505229166786