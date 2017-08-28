// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args41809 = [];
var len__26171__auto___41815 = arguments.length;
var i__26172__auto___41816 = (0);
while(true){
if((i__26172__auto___41816 < len__26171__auto___41815)){
args41809.push((arguments[i__26172__auto___41816]));

var G__41817 = (i__26172__auto___41816 + (1));
i__26172__auto___41816 = G__41817;
continue;
} else {
}
break;
}

var G__41811 = args41809.length;
switch (G__41811) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41809.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41812 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41812 = (function (f,blockable,meta41813){
this.f = f;
this.blockable = blockable;
this.meta41813 = meta41813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41814,meta41813__$1){
var self__ = this;
var _41814__$1 = this;
return (new cljs.core.async.t_cljs$core$async41812(self__.f,self__.blockable,meta41813__$1));
});

cljs.core.async.t_cljs$core$async41812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41814){
var self__ = this;
var _41814__$1 = this;
return self__.meta41813;
});

cljs.core.async.t_cljs$core$async41812.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41812.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41812.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41812.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41812.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41813","meta41813",2076123865,null)], null);
});

cljs.core.async.t_cljs$core$async41812.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41812.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41812";

cljs.core.async.t_cljs$core$async41812.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async41812");
});

cljs.core.async.__GT_t_cljs$core$async41812 = (function cljs$core$async$__GT_t_cljs$core$async41812(f__$1,blockable__$1,meta41813){
return (new cljs.core.async.t_cljs$core$async41812(f__$1,blockable__$1,meta41813));
});

}

return (new cljs.core.async.t_cljs$core$async41812(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args41821 = [];
var len__26171__auto___41824 = arguments.length;
var i__26172__auto___41825 = (0);
while(true){
if((i__26172__auto___41825 < len__26171__auto___41824)){
args41821.push((arguments[i__26172__auto___41825]));

var G__41826 = (i__26172__auto___41825 + (1));
i__26172__auto___41825 = G__41826;
continue;
} else {
}
break;
}

var G__41823 = args41821.length;
switch (G__41823) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41821.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args41828 = [];
var len__26171__auto___41831 = arguments.length;
var i__26172__auto___41832 = (0);
while(true){
if((i__26172__auto___41832 < len__26171__auto___41831)){
args41828.push((arguments[i__26172__auto___41832]));

var G__41833 = (i__26172__auto___41832 + (1));
i__26172__auto___41832 = G__41833;
continue;
} else {
}
break;
}

var G__41830 = args41828.length;
switch (G__41830) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41828.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args41835 = [];
var len__26171__auto___41838 = arguments.length;
var i__26172__auto___41839 = (0);
while(true){
if((i__26172__auto___41839 < len__26171__auto___41838)){
args41835.push((arguments[i__26172__auto___41839]));

var G__41840 = (i__26172__auto___41839 + (1));
i__26172__auto___41839 = G__41840;
continue;
} else {
}
break;
}

var G__41837 = args41835.length;
switch (G__41837) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41835.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41842 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41842);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41842,ret){
return (function (){
return fn1.call(null,val_41842);
});})(val_41842,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args41843 = [];
var len__26171__auto___41846 = arguments.length;
var i__26172__auto___41847 = (0);
while(true){
if((i__26172__auto___41847 < len__26171__auto___41846)){
args41843.push((arguments[i__26172__auto___41847]));

var G__41848 = (i__26172__auto___41847 + (1));
i__26172__auto___41847 = G__41848;
continue;
} else {
}
break;
}

var G__41845 = args41843.length;
switch (G__41845) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41843.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26011__auto___41850 = n;
var x_41851 = (0);
while(true){
if((x_41851 < n__26011__auto___41850)){
(a[x_41851] = (0));

var G__41852 = (x_41851 + (1));
x_41851 = G__41852;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__41853 = (i + (1));
i = G__41853;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41857 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41857 = (function (alt_flag,flag,meta41858){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta41858 = meta41858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41859,meta41858__$1){
var self__ = this;
var _41859__$1 = this;
return (new cljs.core.async.t_cljs$core$async41857(self__.alt_flag,self__.flag,meta41858__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41859){
var self__ = this;
var _41859__$1 = this;
return self__.meta41858;
});})(flag))
;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41857.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41858","meta41858",1342833674,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41857.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41857";

cljs.core.async.t_cljs$core$async41857.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async41857");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41857 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41857(alt_flag__$1,flag__$1,meta41858){
return (new cljs.core.async.t_cljs$core$async41857(alt_flag__$1,flag__$1,meta41858));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41857(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41863 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41863 = (function (alt_handler,flag,cb,meta41864){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta41864 = meta41864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41865,meta41864__$1){
var self__ = this;
var _41865__$1 = this;
return (new cljs.core.async.t_cljs$core$async41863(self__.alt_handler,self__.flag,self__.cb,meta41864__$1));
});

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41865){
var self__ = this;
var _41865__$1 = this;
return self__.meta41864;
});

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41864","meta41864",-294670320,null)], null);
});

cljs.core.async.t_cljs$core$async41863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41863";

cljs.core.async.t_cljs$core$async41863.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async41863");
});

cljs.core.async.__GT_t_cljs$core$async41863 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41863(alt_handler__$1,flag__$1,cb__$1,meta41864){
return (new cljs.core.async.t_cljs$core$async41863(alt_handler__$1,flag__$1,cb__$1,meta41864));
});

}

return (new cljs.core.async.t_cljs$core$async41863(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41866_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41866_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41867_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41867_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25096__auto__ = wport;
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41868 = (i + (1));
i = G__41868;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25096__auto__ = ret;
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25084__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25084__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25084__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26178__auto__ = [];
var len__26171__auto___41874 = arguments.length;
var i__26172__auto___41875 = (0);
while(true){
if((i__26172__auto___41875 < len__26171__auto___41874)){
args__26178__auto__.push((arguments[i__26172__auto___41875]));

var G__41876 = (i__26172__auto___41875 + (1));
i__26172__auto___41875 = G__41876;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((1) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26179__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41871){
var map__41872 = p__41871;
var map__41872__$1 = ((((!((map__41872 == null)))?((((map__41872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41872):map__41872);
var opts = map__41872__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41869){
var G__41870 = cljs.core.first.call(null,seq41869);
var seq41869__$1 = cljs.core.next.call(null,seq41869);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41870,seq41869__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args41877 = [];
var len__26171__auto___41927 = arguments.length;
var i__26172__auto___41928 = (0);
while(true){
if((i__26172__auto___41928 < len__26171__auto___41927)){
args41877.push((arguments[i__26172__auto___41928]));

var G__41929 = (i__26172__auto___41928 + (1));
i__26172__auto___41928 = G__41929;
continue;
} else {
}
break;
}

var G__41879 = args41877.length;
switch (G__41879) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41877.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28276__auto___41931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___41931){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___41931){
return (function (state_41903){
var state_val_41904 = (state_41903[(1)]);
if((state_val_41904 === (7))){
var inst_41899 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41905_41932 = state_41903__$1;
(statearr_41905_41932[(2)] = inst_41899);

(statearr_41905_41932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (1))){
var state_41903__$1 = state_41903;
var statearr_41906_41933 = state_41903__$1;
(statearr_41906_41933[(2)] = null);

(statearr_41906_41933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (4))){
var inst_41882 = (state_41903[(7)]);
var inst_41882__$1 = (state_41903[(2)]);
var inst_41883 = (inst_41882__$1 == null);
var state_41903__$1 = (function (){var statearr_41907 = state_41903;
(statearr_41907[(7)] = inst_41882__$1);

return statearr_41907;
})();
if(cljs.core.truth_(inst_41883)){
var statearr_41908_41934 = state_41903__$1;
(statearr_41908_41934[(1)] = (5));

} else {
var statearr_41909_41935 = state_41903__$1;
(statearr_41909_41935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (13))){
var state_41903__$1 = state_41903;
var statearr_41910_41936 = state_41903__$1;
(statearr_41910_41936[(2)] = null);

(statearr_41910_41936[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (6))){
var inst_41882 = (state_41903[(7)]);
var state_41903__$1 = state_41903;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41903__$1,(11),to,inst_41882);
} else {
if((state_val_41904 === (3))){
var inst_41901 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41903__$1,inst_41901);
} else {
if((state_val_41904 === (12))){
var state_41903__$1 = state_41903;
var statearr_41911_41937 = state_41903__$1;
(statearr_41911_41937[(2)] = null);

(statearr_41911_41937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (2))){
var state_41903__$1 = state_41903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41903__$1,(4),from);
} else {
if((state_val_41904 === (11))){
var inst_41892 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
if(cljs.core.truth_(inst_41892)){
var statearr_41912_41938 = state_41903__$1;
(statearr_41912_41938[(1)] = (12));

} else {
var statearr_41913_41939 = state_41903__$1;
(statearr_41913_41939[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (9))){
var state_41903__$1 = state_41903;
var statearr_41914_41940 = state_41903__$1;
(statearr_41914_41940[(2)] = null);

(statearr_41914_41940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (5))){
var state_41903__$1 = state_41903;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41915_41941 = state_41903__$1;
(statearr_41915_41941[(1)] = (8));

} else {
var statearr_41916_41942 = state_41903__$1;
(statearr_41916_41942[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (14))){
var inst_41897 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41917_41943 = state_41903__$1;
(statearr_41917_41943[(2)] = inst_41897);

(statearr_41917_41943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (10))){
var inst_41889 = (state_41903[(2)]);
var state_41903__$1 = state_41903;
var statearr_41918_41944 = state_41903__$1;
(statearr_41918_41944[(2)] = inst_41889);

(statearr_41918_41944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41904 === (8))){
var inst_41886 = cljs.core.async.close_BANG_.call(null,to);
var state_41903__$1 = state_41903;
var statearr_41919_41945 = state_41903__$1;
(statearr_41919_41945[(2)] = inst_41886);

(statearr_41919_41945[(1)] = (10));


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
});})(c__28276__auto___41931))
;
return ((function (switch__28211__auto__,c__28276__auto___41931){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_41923 = [null,null,null,null,null,null,null,null];
(statearr_41923[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_41923[(1)] = (1));

return statearr_41923;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_41903){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_41903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e41924){if((e41924 instanceof Object)){
var ex__28215__auto__ = e41924;
var statearr_41925_41946 = state_41903;
(statearr_41925_41946[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41947 = state_41903;
state_41903 = G__41947;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_41903){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_41903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___41931))
})();
var state__28278__auto__ = (function (){var statearr_41926 = f__28277__auto__.call(null);
(statearr_41926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___41931);

return statearr_41926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___41931))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__42135){
var vec__42136 = p__42135;
var v = cljs.core.nth.call(null,vec__42136,(0),null);
var p = cljs.core.nth.call(null,vec__42136,(1),null);
var job = vec__42136;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__28276__auto___42322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___42322,res,vec__42136,v,p,job,jobs,results){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___42322,res,vec__42136,v,p,job,jobs,results){
return (function (state_42143){
var state_val_42144 = (state_42143[(1)]);
if((state_val_42144 === (1))){
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42143__$1,(2),res,v);
} else {
if((state_val_42144 === (2))){
var inst_42140 = (state_42143[(2)]);
var inst_42141 = cljs.core.async.close_BANG_.call(null,res);
var state_42143__$1 = (function (){var statearr_42145 = state_42143;
(statearr_42145[(7)] = inst_42140);

return statearr_42145;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42143__$1,inst_42141);
} else {
return null;
}
}
});})(c__28276__auto___42322,res,vec__42136,v,p,job,jobs,results))
;
return ((function (switch__28211__auto__,c__28276__auto___42322,res,vec__42136,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0 = (function (){
var statearr_42149 = [null,null,null,null,null,null,null,null];
(statearr_42149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__);

(statearr_42149[(1)] = (1));

return statearr_42149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1 = (function (state_42143){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42150){if((e42150 instanceof Object)){
var ex__28215__auto__ = e42150;
var statearr_42151_42323 = state_42143;
(statearr_42151_42323[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42324 = state_42143;
state_42143 = G__42324;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = function(state_42143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1.call(this,state_42143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___42322,res,vec__42136,v,p,job,jobs,results))
})();
var state__28278__auto__ = (function (){var statearr_42152 = f__28277__auto__.call(null);
(statearr_42152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___42322);

return statearr_42152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___42322,res,vec__42136,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__42153){
var vec__42154 = p__42153;
var v = cljs.core.nth.call(null,vec__42154,(0),null);
var p = cljs.core.nth.call(null,vec__42154,(1),null);
var job = vec__42154;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26011__auto___42325 = n;
var __42326 = (0);
while(true){
if((__42326 < n__26011__auto___42325)){
var G__42157_42327 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__42157_42327) {
case "compute":
var c__28276__auto___42329 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42326,c__28276__auto___42329,G__42157_42327,n__26011__auto___42325,jobs,results,process,async){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (__42326,c__28276__auto___42329,G__42157_42327,n__26011__auto___42325,jobs,results,process,async){
return (function (state_42170){
var state_val_42171 = (state_42170[(1)]);
if((state_val_42171 === (1))){
var state_42170__$1 = state_42170;
var statearr_42172_42330 = state_42170__$1;
(statearr_42172_42330[(2)] = null);

(statearr_42172_42330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (2))){
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42170__$1,(4),jobs);
} else {
if((state_val_42171 === (3))){
var inst_42168 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42170__$1,inst_42168);
} else {
if((state_val_42171 === (4))){
var inst_42160 = (state_42170[(2)]);
var inst_42161 = process.call(null,inst_42160);
var state_42170__$1 = state_42170;
if(cljs.core.truth_(inst_42161)){
var statearr_42173_42331 = state_42170__$1;
(statearr_42173_42331[(1)] = (5));

} else {
var statearr_42174_42332 = state_42170__$1;
(statearr_42174_42332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (5))){
var state_42170__$1 = state_42170;
var statearr_42175_42333 = state_42170__$1;
(statearr_42175_42333[(2)] = null);

(statearr_42175_42333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (6))){
var state_42170__$1 = state_42170;
var statearr_42176_42334 = state_42170__$1;
(statearr_42176_42334[(2)] = null);

(statearr_42176_42334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (7))){
var inst_42166 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
var statearr_42177_42335 = state_42170__$1;
(statearr_42177_42335[(2)] = inst_42166);

(statearr_42177_42335[(1)] = (3));


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
});})(__42326,c__28276__auto___42329,G__42157_42327,n__26011__auto___42325,jobs,results,process,async))
;
return ((function (__42326,switch__28211__auto__,c__28276__auto___42329,G__42157_42327,n__26011__auto___42325,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0 = (function (){
var statearr_42181 = [null,null,null,null,null,null,null];
(statearr_42181[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__);

(statearr_42181[(1)] = (1));

return statearr_42181;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1 = (function (state_42170){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42182){if((e42182 instanceof Object)){
var ex__28215__auto__ = e42182;
var statearr_42183_42336 = state_42170;
(statearr_42183_42336[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42337 = state_42170;
state_42170 = G__42337;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = function(state_42170){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1.call(this,state_42170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__;
})()
;})(__42326,switch__28211__auto__,c__28276__auto___42329,G__42157_42327,n__26011__auto___42325,jobs,results,process,async))
})();
var state__28278__auto__ = (function (){var statearr_42184 = f__28277__auto__.call(null);
(statearr_42184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___42329);

return statearr_42184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(__42326,c__28276__auto___42329,G__42157_42327,n__26011__auto___42325,jobs,results,process,async))
);


break;
case "async":
var c__28276__auto___42338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42326,c__28276__auto___42338,G__42157_42327,n__26011__auto___42325,jobs,results,process,async){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (__42326,c__28276__auto___42338,G__42157_42327,n__26011__auto___42325,jobs,results,process,async){
return (function (state_42197){
var state_val_42198 = (state_42197[(1)]);
if((state_val_42198 === (1))){
var state_42197__$1 = state_42197;
var statearr_42199_42339 = state_42197__$1;
(statearr_42199_42339[(2)] = null);

(statearr_42199_42339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42198 === (2))){
var state_42197__$1 = state_42197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42197__$1,(4),jobs);
} else {
if((state_val_42198 === (3))){
var inst_42195 = (state_42197[(2)]);
var state_42197__$1 = state_42197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42197__$1,inst_42195);
} else {
if((state_val_42198 === (4))){
var inst_42187 = (state_42197[(2)]);
var inst_42188 = async.call(null,inst_42187);
var state_42197__$1 = state_42197;
if(cljs.core.truth_(inst_42188)){
var statearr_42200_42340 = state_42197__$1;
(statearr_42200_42340[(1)] = (5));

} else {
var statearr_42201_42341 = state_42197__$1;
(statearr_42201_42341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42198 === (5))){
var state_42197__$1 = state_42197;
var statearr_42202_42342 = state_42197__$1;
(statearr_42202_42342[(2)] = null);

(statearr_42202_42342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42198 === (6))){
var state_42197__$1 = state_42197;
var statearr_42203_42343 = state_42197__$1;
(statearr_42203_42343[(2)] = null);

(statearr_42203_42343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42198 === (7))){
var inst_42193 = (state_42197[(2)]);
var state_42197__$1 = state_42197;
var statearr_42204_42344 = state_42197__$1;
(statearr_42204_42344[(2)] = inst_42193);

(statearr_42204_42344[(1)] = (3));


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
});})(__42326,c__28276__auto___42338,G__42157_42327,n__26011__auto___42325,jobs,results,process,async))
;
return ((function (__42326,switch__28211__auto__,c__28276__auto___42338,G__42157_42327,n__26011__auto___42325,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0 = (function (){
var statearr_42208 = [null,null,null,null,null,null,null];
(statearr_42208[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__);

(statearr_42208[(1)] = (1));

return statearr_42208;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1 = (function (state_42197){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42209){if((e42209 instanceof Object)){
var ex__28215__auto__ = e42209;
var statearr_42210_42345 = state_42197;
(statearr_42210_42345[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42346 = state_42197;
state_42197 = G__42346;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = function(state_42197){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1.call(this,state_42197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__;
})()
;})(__42326,switch__28211__auto__,c__28276__auto___42338,G__42157_42327,n__26011__auto___42325,jobs,results,process,async))
})();
var state__28278__auto__ = (function (){var statearr_42211 = f__28277__auto__.call(null);
(statearr_42211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___42338);

return statearr_42211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(__42326,c__28276__auto___42338,G__42157_42327,n__26011__auto___42325,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__42347 = (__42326 + (1));
__42326 = G__42347;
continue;
} else {
}
break;
}

var c__28276__auto___42348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___42348,jobs,results,process,async){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___42348,jobs,results,process,async){
return (function (state_42233){
var state_val_42234 = (state_42233[(1)]);
if((state_val_42234 === (1))){
var state_42233__$1 = state_42233;
var statearr_42235_42349 = state_42233__$1;
(statearr_42235_42349[(2)] = null);

(statearr_42235_42349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (2))){
var state_42233__$1 = state_42233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42233__$1,(4),from);
} else {
if((state_val_42234 === (3))){
var inst_42231 = (state_42233[(2)]);
var state_42233__$1 = state_42233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42233__$1,inst_42231);
} else {
if((state_val_42234 === (4))){
var inst_42214 = (state_42233[(7)]);
var inst_42214__$1 = (state_42233[(2)]);
var inst_42215 = (inst_42214__$1 == null);
var state_42233__$1 = (function (){var statearr_42236 = state_42233;
(statearr_42236[(7)] = inst_42214__$1);

return statearr_42236;
})();
if(cljs.core.truth_(inst_42215)){
var statearr_42237_42350 = state_42233__$1;
(statearr_42237_42350[(1)] = (5));

} else {
var statearr_42238_42351 = state_42233__$1;
(statearr_42238_42351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (5))){
var inst_42217 = cljs.core.async.close_BANG_.call(null,jobs);
var state_42233__$1 = state_42233;
var statearr_42239_42352 = state_42233__$1;
(statearr_42239_42352[(2)] = inst_42217);

(statearr_42239_42352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (6))){
var inst_42214 = (state_42233[(7)]);
var inst_42219 = (state_42233[(8)]);
var inst_42219__$1 = cljs.core.async.chan.call(null,(1));
var inst_42220 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42221 = [inst_42214,inst_42219__$1];
var inst_42222 = (new cljs.core.PersistentVector(null,2,(5),inst_42220,inst_42221,null));
var state_42233__$1 = (function (){var statearr_42240 = state_42233;
(statearr_42240[(8)] = inst_42219__$1);

return statearr_42240;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42233__$1,(8),jobs,inst_42222);
} else {
if((state_val_42234 === (7))){
var inst_42229 = (state_42233[(2)]);
var state_42233__$1 = state_42233;
var statearr_42241_42353 = state_42233__$1;
(statearr_42241_42353[(2)] = inst_42229);

(statearr_42241_42353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42234 === (8))){
var inst_42219 = (state_42233[(8)]);
var inst_42224 = (state_42233[(2)]);
var state_42233__$1 = (function (){var statearr_42242 = state_42233;
(statearr_42242[(9)] = inst_42224);

return statearr_42242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42233__$1,(9),results,inst_42219);
} else {
if((state_val_42234 === (9))){
var inst_42226 = (state_42233[(2)]);
var state_42233__$1 = (function (){var statearr_42243 = state_42233;
(statearr_42243[(10)] = inst_42226);

return statearr_42243;
})();
var statearr_42244_42354 = state_42233__$1;
(statearr_42244_42354[(2)] = null);

(statearr_42244_42354[(1)] = (2));


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
});})(c__28276__auto___42348,jobs,results,process,async))
;
return ((function (switch__28211__auto__,c__28276__auto___42348,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0 = (function (){
var statearr_42248 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42248[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__);

(statearr_42248[(1)] = (1));

return statearr_42248;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1 = (function (state_42233){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42249){if((e42249 instanceof Object)){
var ex__28215__auto__ = e42249;
var statearr_42250_42355 = state_42233;
(statearr_42250_42355[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42356 = state_42233;
state_42233 = G__42356;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = function(state_42233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1.call(this,state_42233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___42348,jobs,results,process,async))
})();
var state__28278__auto__ = (function (){var statearr_42251 = f__28277__auto__.call(null);
(statearr_42251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___42348);

return statearr_42251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___42348,jobs,results,process,async))
);


var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__,jobs,results,process,async){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__,jobs,results,process,async){
return (function (state_42289){
var state_val_42290 = (state_42289[(1)]);
if((state_val_42290 === (7))){
var inst_42285 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42291_42357 = state_42289__$1;
(statearr_42291_42357[(2)] = inst_42285);

(statearr_42291_42357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (20))){
var state_42289__$1 = state_42289;
var statearr_42292_42358 = state_42289__$1;
(statearr_42292_42358[(2)] = null);

(statearr_42292_42358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (1))){
var state_42289__$1 = state_42289;
var statearr_42293_42359 = state_42289__$1;
(statearr_42293_42359[(2)] = null);

(statearr_42293_42359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (4))){
var inst_42254 = (state_42289[(7)]);
var inst_42254__$1 = (state_42289[(2)]);
var inst_42255 = (inst_42254__$1 == null);
var state_42289__$1 = (function (){var statearr_42294 = state_42289;
(statearr_42294[(7)] = inst_42254__$1);

return statearr_42294;
})();
if(cljs.core.truth_(inst_42255)){
var statearr_42295_42360 = state_42289__$1;
(statearr_42295_42360[(1)] = (5));

} else {
var statearr_42296_42361 = state_42289__$1;
(statearr_42296_42361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (15))){
var inst_42267 = (state_42289[(8)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42289__$1,(18),to,inst_42267);
} else {
if((state_val_42290 === (21))){
var inst_42280 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42297_42362 = state_42289__$1;
(statearr_42297_42362[(2)] = inst_42280);

(statearr_42297_42362[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (13))){
var inst_42282 = (state_42289[(2)]);
var state_42289__$1 = (function (){var statearr_42298 = state_42289;
(statearr_42298[(9)] = inst_42282);

return statearr_42298;
})();
var statearr_42299_42363 = state_42289__$1;
(statearr_42299_42363[(2)] = null);

(statearr_42299_42363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (6))){
var inst_42254 = (state_42289[(7)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42289__$1,(11),inst_42254);
} else {
if((state_val_42290 === (17))){
var inst_42275 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
if(cljs.core.truth_(inst_42275)){
var statearr_42300_42364 = state_42289__$1;
(statearr_42300_42364[(1)] = (19));

} else {
var statearr_42301_42365 = state_42289__$1;
(statearr_42301_42365[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (3))){
var inst_42287 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42289__$1,inst_42287);
} else {
if((state_val_42290 === (12))){
var inst_42264 = (state_42289[(10)]);
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42289__$1,(14),inst_42264);
} else {
if((state_val_42290 === (2))){
var state_42289__$1 = state_42289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42289__$1,(4),results);
} else {
if((state_val_42290 === (19))){
var state_42289__$1 = state_42289;
var statearr_42302_42366 = state_42289__$1;
(statearr_42302_42366[(2)] = null);

(statearr_42302_42366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (11))){
var inst_42264 = (state_42289[(2)]);
var state_42289__$1 = (function (){var statearr_42303 = state_42289;
(statearr_42303[(10)] = inst_42264);

return statearr_42303;
})();
var statearr_42304_42367 = state_42289__$1;
(statearr_42304_42367[(2)] = null);

(statearr_42304_42367[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (9))){
var state_42289__$1 = state_42289;
var statearr_42305_42368 = state_42289__$1;
(statearr_42305_42368[(2)] = null);

(statearr_42305_42368[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (5))){
var state_42289__$1 = state_42289;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42306_42369 = state_42289__$1;
(statearr_42306_42369[(1)] = (8));

} else {
var statearr_42307_42370 = state_42289__$1;
(statearr_42307_42370[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (14))){
var inst_42269 = (state_42289[(11)]);
var inst_42267 = (state_42289[(8)]);
var inst_42267__$1 = (state_42289[(2)]);
var inst_42268 = (inst_42267__$1 == null);
var inst_42269__$1 = cljs.core.not.call(null,inst_42268);
var state_42289__$1 = (function (){var statearr_42308 = state_42289;
(statearr_42308[(11)] = inst_42269__$1);

(statearr_42308[(8)] = inst_42267__$1);

return statearr_42308;
})();
if(inst_42269__$1){
var statearr_42309_42371 = state_42289__$1;
(statearr_42309_42371[(1)] = (15));

} else {
var statearr_42310_42372 = state_42289__$1;
(statearr_42310_42372[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (16))){
var inst_42269 = (state_42289[(11)]);
var state_42289__$1 = state_42289;
var statearr_42311_42373 = state_42289__$1;
(statearr_42311_42373[(2)] = inst_42269);

(statearr_42311_42373[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (10))){
var inst_42261 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42312_42374 = state_42289__$1;
(statearr_42312_42374[(2)] = inst_42261);

(statearr_42312_42374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (18))){
var inst_42272 = (state_42289[(2)]);
var state_42289__$1 = state_42289;
var statearr_42313_42375 = state_42289__$1;
(statearr_42313_42375[(2)] = inst_42272);

(statearr_42313_42375[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42290 === (8))){
var inst_42258 = cljs.core.async.close_BANG_.call(null,to);
var state_42289__$1 = state_42289;
var statearr_42314_42376 = state_42289__$1;
(statearr_42314_42376[(2)] = inst_42258);

(statearr_42314_42376[(1)] = (10));


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
});})(c__28276__auto__,jobs,results,process,async))
;
return ((function (switch__28211__auto__,c__28276__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0 = (function (){
var statearr_42318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__);

(statearr_42318[(1)] = (1));

return statearr_42318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1 = (function (state_42289){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42319){if((e42319 instanceof Object)){
var ex__28215__auto__ = e42319;
var statearr_42320_42377 = state_42289;
(statearr_42320_42377[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42378 = state_42289;
state_42289 = G__42378;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__ = function(state_42289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1.call(this,state_42289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28212__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__,jobs,results,process,async))
})();
var state__28278__auto__ = (function (){var statearr_42321 = f__28277__auto__.call(null);
(statearr_42321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_42321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__,jobs,results,process,async))
);

return c__28276__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args42379 = [];
var len__26171__auto___42382 = arguments.length;
var i__26172__auto___42383 = (0);
while(true){
if((i__26172__auto___42383 < len__26171__auto___42382)){
args42379.push((arguments[i__26172__auto___42383]));

var G__42384 = (i__26172__auto___42383 + (1));
i__26172__auto___42383 = G__42384;
continue;
} else {
}
break;
}

var G__42381 = args42379.length;
switch (G__42381) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42379.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args42386 = [];
var len__26171__auto___42389 = arguments.length;
var i__26172__auto___42390 = (0);
while(true){
if((i__26172__auto___42390 < len__26171__auto___42389)){
args42386.push((arguments[i__26172__auto___42390]));

var G__42391 = (i__26172__auto___42390 + (1));
i__26172__auto___42390 = G__42391;
continue;
} else {
}
break;
}

var G__42388 = args42386.length;
switch (G__42388) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42386.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args42393 = [];
var len__26171__auto___42446 = arguments.length;
var i__26172__auto___42447 = (0);
while(true){
if((i__26172__auto___42447 < len__26171__auto___42446)){
args42393.push((arguments[i__26172__auto___42447]));

var G__42448 = (i__26172__auto___42447 + (1));
i__26172__auto___42447 = G__42448;
continue;
} else {
}
break;
}

var G__42395 = args42393.length;
switch (G__42395) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42393.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__28276__auto___42450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___42450,tc,fc){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___42450,tc,fc){
return (function (state_42421){
var state_val_42422 = (state_42421[(1)]);
if((state_val_42422 === (7))){
var inst_42417 = (state_42421[(2)]);
var state_42421__$1 = state_42421;
var statearr_42423_42451 = state_42421__$1;
(statearr_42423_42451[(2)] = inst_42417);

(statearr_42423_42451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (1))){
var state_42421__$1 = state_42421;
var statearr_42424_42452 = state_42421__$1;
(statearr_42424_42452[(2)] = null);

(statearr_42424_42452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (4))){
var inst_42398 = (state_42421[(7)]);
var inst_42398__$1 = (state_42421[(2)]);
var inst_42399 = (inst_42398__$1 == null);
var state_42421__$1 = (function (){var statearr_42425 = state_42421;
(statearr_42425[(7)] = inst_42398__$1);

return statearr_42425;
})();
if(cljs.core.truth_(inst_42399)){
var statearr_42426_42453 = state_42421__$1;
(statearr_42426_42453[(1)] = (5));

} else {
var statearr_42427_42454 = state_42421__$1;
(statearr_42427_42454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (13))){
var state_42421__$1 = state_42421;
var statearr_42428_42455 = state_42421__$1;
(statearr_42428_42455[(2)] = null);

(statearr_42428_42455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (6))){
var inst_42398 = (state_42421[(7)]);
var inst_42404 = p.call(null,inst_42398);
var state_42421__$1 = state_42421;
if(cljs.core.truth_(inst_42404)){
var statearr_42429_42456 = state_42421__$1;
(statearr_42429_42456[(1)] = (9));

} else {
var statearr_42430_42457 = state_42421__$1;
(statearr_42430_42457[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (3))){
var inst_42419 = (state_42421[(2)]);
var state_42421__$1 = state_42421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42421__$1,inst_42419);
} else {
if((state_val_42422 === (12))){
var state_42421__$1 = state_42421;
var statearr_42431_42458 = state_42421__$1;
(statearr_42431_42458[(2)] = null);

(statearr_42431_42458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (2))){
var state_42421__$1 = state_42421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42421__$1,(4),ch);
} else {
if((state_val_42422 === (11))){
var inst_42398 = (state_42421[(7)]);
var inst_42408 = (state_42421[(2)]);
var state_42421__$1 = state_42421;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42421__$1,(8),inst_42408,inst_42398);
} else {
if((state_val_42422 === (9))){
var state_42421__$1 = state_42421;
var statearr_42432_42459 = state_42421__$1;
(statearr_42432_42459[(2)] = tc);

(statearr_42432_42459[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (5))){
var inst_42401 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42402 = cljs.core.async.close_BANG_.call(null,fc);
var state_42421__$1 = (function (){var statearr_42433 = state_42421;
(statearr_42433[(8)] = inst_42401);

return statearr_42433;
})();
var statearr_42434_42460 = state_42421__$1;
(statearr_42434_42460[(2)] = inst_42402);

(statearr_42434_42460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (14))){
var inst_42415 = (state_42421[(2)]);
var state_42421__$1 = state_42421;
var statearr_42435_42461 = state_42421__$1;
(statearr_42435_42461[(2)] = inst_42415);

(statearr_42435_42461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (10))){
var state_42421__$1 = state_42421;
var statearr_42436_42462 = state_42421__$1;
(statearr_42436_42462[(2)] = fc);

(statearr_42436_42462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42422 === (8))){
var inst_42410 = (state_42421[(2)]);
var state_42421__$1 = state_42421;
if(cljs.core.truth_(inst_42410)){
var statearr_42437_42463 = state_42421__$1;
(statearr_42437_42463[(1)] = (12));

} else {
var statearr_42438_42464 = state_42421__$1;
(statearr_42438_42464[(1)] = (13));

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
});})(c__28276__auto___42450,tc,fc))
;
return ((function (switch__28211__auto__,c__28276__auto___42450,tc,fc){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_42442 = [null,null,null,null,null,null,null,null,null];
(statearr_42442[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_42442[(1)] = (1));

return statearr_42442;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_42421){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42443){if((e42443 instanceof Object)){
var ex__28215__auto__ = e42443;
var statearr_42444_42465 = state_42421;
(statearr_42444_42465[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42466 = state_42421;
state_42421 = G__42466;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_42421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_42421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___42450,tc,fc))
})();
var state__28278__auto__ = (function (){var statearr_42445 = f__28277__auto__.call(null);
(statearr_42445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___42450);

return statearr_42445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___42450,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__){
return (function (state_42530){
var state_val_42531 = (state_42530[(1)]);
if((state_val_42531 === (7))){
var inst_42526 = (state_42530[(2)]);
var state_42530__$1 = state_42530;
var statearr_42532_42553 = state_42530__$1;
(statearr_42532_42553[(2)] = inst_42526);

(statearr_42532_42553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (1))){
var inst_42510 = init;
var state_42530__$1 = (function (){var statearr_42533 = state_42530;
(statearr_42533[(7)] = inst_42510);

return statearr_42533;
})();
var statearr_42534_42554 = state_42530__$1;
(statearr_42534_42554[(2)] = null);

(statearr_42534_42554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (4))){
var inst_42513 = (state_42530[(8)]);
var inst_42513__$1 = (state_42530[(2)]);
var inst_42514 = (inst_42513__$1 == null);
var state_42530__$1 = (function (){var statearr_42535 = state_42530;
(statearr_42535[(8)] = inst_42513__$1);

return statearr_42535;
})();
if(cljs.core.truth_(inst_42514)){
var statearr_42536_42555 = state_42530__$1;
(statearr_42536_42555[(1)] = (5));

} else {
var statearr_42537_42556 = state_42530__$1;
(statearr_42537_42556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (6))){
var inst_42510 = (state_42530[(7)]);
var inst_42517 = (state_42530[(9)]);
var inst_42513 = (state_42530[(8)]);
var inst_42517__$1 = f.call(null,inst_42510,inst_42513);
var inst_42518 = cljs.core.reduced_QMARK_.call(null,inst_42517__$1);
var state_42530__$1 = (function (){var statearr_42538 = state_42530;
(statearr_42538[(9)] = inst_42517__$1);

return statearr_42538;
})();
if(inst_42518){
var statearr_42539_42557 = state_42530__$1;
(statearr_42539_42557[(1)] = (8));

} else {
var statearr_42540_42558 = state_42530__$1;
(statearr_42540_42558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (3))){
var inst_42528 = (state_42530[(2)]);
var state_42530__$1 = state_42530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42530__$1,inst_42528);
} else {
if((state_val_42531 === (2))){
var state_42530__$1 = state_42530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42530__$1,(4),ch);
} else {
if((state_val_42531 === (9))){
var inst_42517 = (state_42530[(9)]);
var inst_42510 = inst_42517;
var state_42530__$1 = (function (){var statearr_42541 = state_42530;
(statearr_42541[(7)] = inst_42510);

return statearr_42541;
})();
var statearr_42542_42559 = state_42530__$1;
(statearr_42542_42559[(2)] = null);

(statearr_42542_42559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (5))){
var inst_42510 = (state_42530[(7)]);
var state_42530__$1 = state_42530;
var statearr_42543_42560 = state_42530__$1;
(statearr_42543_42560[(2)] = inst_42510);

(statearr_42543_42560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (10))){
var inst_42524 = (state_42530[(2)]);
var state_42530__$1 = state_42530;
var statearr_42544_42561 = state_42530__$1;
(statearr_42544_42561[(2)] = inst_42524);

(statearr_42544_42561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42531 === (8))){
var inst_42517 = (state_42530[(9)]);
var inst_42520 = cljs.core.deref.call(null,inst_42517);
var state_42530__$1 = state_42530;
var statearr_42545_42562 = state_42530__$1;
(statearr_42545_42562[(2)] = inst_42520);

(statearr_42545_42562[(1)] = (10));


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
});})(c__28276__auto__))
;
return ((function (switch__28211__auto__,c__28276__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__28212__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28212__auto____0 = (function (){
var statearr_42549 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42549[(0)] = cljs$core$async$reduce_$_state_machine__28212__auto__);

(statearr_42549[(1)] = (1));

return statearr_42549;
});
var cljs$core$async$reduce_$_state_machine__28212__auto____1 = (function (state_42530){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42550){if((e42550 instanceof Object)){
var ex__28215__auto__ = e42550;
var statearr_42551_42563 = state_42530;
(statearr_42551_42563[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42564 = state_42530;
state_42530 = G__42564;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28212__auto__ = function(state_42530){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28212__auto____1.call(this,state_42530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28212__auto____0;
cljs$core$async$reduce_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28212__auto____1;
return cljs$core$async$reduce_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__))
})();
var state__28278__auto__ = (function (){var statearr_42552 = f__28277__auto__.call(null);
(statearr_42552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_42552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__))
);

return c__28276__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args42565 = [];
var len__26171__auto___42617 = arguments.length;
var i__26172__auto___42618 = (0);
while(true){
if((i__26172__auto___42618 < len__26171__auto___42617)){
args42565.push((arguments[i__26172__auto___42618]));

var G__42619 = (i__26172__auto___42618 + (1));
i__26172__auto___42618 = G__42619;
continue;
} else {
}
break;
}

var G__42567 = args42565.length;
switch (G__42567) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42565.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__){
return (function (state_42592){
var state_val_42593 = (state_42592[(1)]);
if((state_val_42593 === (7))){
var inst_42574 = (state_42592[(2)]);
var state_42592__$1 = state_42592;
var statearr_42594_42621 = state_42592__$1;
(statearr_42594_42621[(2)] = inst_42574);

(statearr_42594_42621[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (1))){
var inst_42568 = cljs.core.seq.call(null,coll);
var inst_42569 = inst_42568;
var state_42592__$1 = (function (){var statearr_42595 = state_42592;
(statearr_42595[(7)] = inst_42569);

return statearr_42595;
})();
var statearr_42596_42622 = state_42592__$1;
(statearr_42596_42622[(2)] = null);

(statearr_42596_42622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (4))){
var inst_42569 = (state_42592[(7)]);
var inst_42572 = cljs.core.first.call(null,inst_42569);
var state_42592__$1 = state_42592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42592__$1,(7),ch,inst_42572);
} else {
if((state_val_42593 === (13))){
var inst_42586 = (state_42592[(2)]);
var state_42592__$1 = state_42592;
var statearr_42597_42623 = state_42592__$1;
(statearr_42597_42623[(2)] = inst_42586);

(statearr_42597_42623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (6))){
var inst_42577 = (state_42592[(2)]);
var state_42592__$1 = state_42592;
if(cljs.core.truth_(inst_42577)){
var statearr_42598_42624 = state_42592__$1;
(statearr_42598_42624[(1)] = (8));

} else {
var statearr_42599_42625 = state_42592__$1;
(statearr_42599_42625[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (3))){
var inst_42590 = (state_42592[(2)]);
var state_42592__$1 = state_42592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42592__$1,inst_42590);
} else {
if((state_val_42593 === (12))){
var state_42592__$1 = state_42592;
var statearr_42600_42626 = state_42592__$1;
(statearr_42600_42626[(2)] = null);

(statearr_42600_42626[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (2))){
var inst_42569 = (state_42592[(7)]);
var state_42592__$1 = state_42592;
if(cljs.core.truth_(inst_42569)){
var statearr_42601_42627 = state_42592__$1;
(statearr_42601_42627[(1)] = (4));

} else {
var statearr_42602_42628 = state_42592__$1;
(statearr_42602_42628[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (11))){
var inst_42583 = cljs.core.async.close_BANG_.call(null,ch);
var state_42592__$1 = state_42592;
var statearr_42603_42629 = state_42592__$1;
(statearr_42603_42629[(2)] = inst_42583);

(statearr_42603_42629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (9))){
var state_42592__$1 = state_42592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42604_42630 = state_42592__$1;
(statearr_42604_42630[(1)] = (11));

} else {
var statearr_42605_42631 = state_42592__$1;
(statearr_42605_42631[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (5))){
var inst_42569 = (state_42592[(7)]);
var state_42592__$1 = state_42592;
var statearr_42606_42632 = state_42592__$1;
(statearr_42606_42632[(2)] = inst_42569);

(statearr_42606_42632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (10))){
var inst_42588 = (state_42592[(2)]);
var state_42592__$1 = state_42592;
var statearr_42607_42633 = state_42592__$1;
(statearr_42607_42633[(2)] = inst_42588);

(statearr_42607_42633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42593 === (8))){
var inst_42569 = (state_42592[(7)]);
var inst_42579 = cljs.core.next.call(null,inst_42569);
var inst_42569__$1 = inst_42579;
var state_42592__$1 = (function (){var statearr_42608 = state_42592;
(statearr_42608[(7)] = inst_42569__$1);

return statearr_42608;
})();
var statearr_42609_42634 = state_42592__$1;
(statearr_42609_42634[(2)] = null);

(statearr_42609_42634[(1)] = (2));


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
});})(c__28276__auto__))
;
return ((function (switch__28211__auto__,c__28276__auto__){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_42613 = [null,null,null,null,null,null,null,null];
(statearr_42613[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_42613[(1)] = (1));

return statearr_42613;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_42592){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e42614){if((e42614 instanceof Object)){
var ex__28215__auto__ = e42614;
var statearr_42615_42635 = state_42592;
(statearr_42615_42635[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42636 = state_42592;
state_42592 = G__42636;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_42592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_42592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__))
})();
var state__28278__auto__ = (function (){var statearr_42616 = f__28277__auto__.call(null);
(statearr_42616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_42616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__))
);

return c__28276__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25759__auto__ = (((_ == null))?null:_);
var m__25760__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,_);
} else {
var m__25760__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25760__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m,ch);
} else {
var m__25760__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m);
} else {
var m__25760__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42862 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42862 = (function (mult,ch,cs,meta42863){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta42863 = meta42863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42864,meta42863__$1){
var self__ = this;
var _42864__$1 = this;
return (new cljs.core.async.t_cljs$core$async42862(self__.mult,self__.ch,self__.cs,meta42863__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42864){
var self__ = this;
var _42864__$1 = this;
return self__.meta42863;
});})(cs))
;

cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42862.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42862.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42863","meta42863",-55792505,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42862.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42862.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42862";

cljs.core.async.t_cljs$core$async42862.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async42862");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42862 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42862(mult__$1,ch__$1,cs__$1,meta42863){
return (new cljs.core.async.t_cljs$core$async42862(mult__$1,ch__$1,cs__$1,meta42863));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42862(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__28276__auto___43087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___43087,cs,m,dchan,dctr,done){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___43087,cs,m,dchan,dctr,done){
return (function (state_42999){
var state_val_43000 = (state_42999[(1)]);
if((state_val_43000 === (7))){
var inst_42995 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43001_43088 = state_42999__$1;
(statearr_43001_43088[(2)] = inst_42995);

(statearr_43001_43088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (20))){
var inst_42898 = (state_42999[(7)]);
var inst_42910 = cljs.core.first.call(null,inst_42898);
var inst_42911 = cljs.core.nth.call(null,inst_42910,(0),null);
var inst_42912 = cljs.core.nth.call(null,inst_42910,(1),null);
var state_42999__$1 = (function (){var statearr_43002 = state_42999;
(statearr_43002[(8)] = inst_42911);

return statearr_43002;
})();
if(cljs.core.truth_(inst_42912)){
var statearr_43003_43089 = state_42999__$1;
(statearr_43003_43089[(1)] = (22));

} else {
var statearr_43004_43090 = state_42999__$1;
(statearr_43004_43090[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (27))){
var inst_42947 = (state_42999[(9)]);
var inst_42942 = (state_42999[(10)]);
var inst_42940 = (state_42999[(11)]);
var inst_42867 = (state_42999[(12)]);
var inst_42947__$1 = cljs.core._nth.call(null,inst_42940,inst_42942);
var inst_42948 = cljs.core.async.put_BANG_.call(null,inst_42947__$1,inst_42867,done);
var state_42999__$1 = (function (){var statearr_43005 = state_42999;
(statearr_43005[(9)] = inst_42947__$1);

return statearr_43005;
})();
if(cljs.core.truth_(inst_42948)){
var statearr_43006_43091 = state_42999__$1;
(statearr_43006_43091[(1)] = (30));

} else {
var statearr_43007_43092 = state_42999__$1;
(statearr_43007_43092[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (1))){
var state_42999__$1 = state_42999;
var statearr_43008_43093 = state_42999__$1;
(statearr_43008_43093[(2)] = null);

(statearr_43008_43093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (24))){
var inst_42898 = (state_42999[(7)]);
var inst_42917 = (state_42999[(2)]);
var inst_42918 = cljs.core.next.call(null,inst_42898);
var inst_42876 = inst_42918;
var inst_42877 = null;
var inst_42878 = (0);
var inst_42879 = (0);
var state_42999__$1 = (function (){var statearr_43009 = state_42999;
(statearr_43009[(13)] = inst_42878);

(statearr_43009[(14)] = inst_42879);

(statearr_43009[(15)] = inst_42917);

(statearr_43009[(16)] = inst_42877);

(statearr_43009[(17)] = inst_42876);

return statearr_43009;
})();
var statearr_43010_43094 = state_42999__$1;
(statearr_43010_43094[(2)] = null);

(statearr_43010_43094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (39))){
var state_42999__$1 = state_42999;
var statearr_43014_43095 = state_42999__$1;
(statearr_43014_43095[(2)] = null);

(statearr_43014_43095[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (4))){
var inst_42867 = (state_42999[(12)]);
var inst_42867__$1 = (state_42999[(2)]);
var inst_42868 = (inst_42867__$1 == null);
var state_42999__$1 = (function (){var statearr_43015 = state_42999;
(statearr_43015[(12)] = inst_42867__$1);

return statearr_43015;
})();
if(cljs.core.truth_(inst_42868)){
var statearr_43016_43096 = state_42999__$1;
(statearr_43016_43096[(1)] = (5));

} else {
var statearr_43017_43097 = state_42999__$1;
(statearr_43017_43097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (15))){
var inst_42878 = (state_42999[(13)]);
var inst_42879 = (state_42999[(14)]);
var inst_42877 = (state_42999[(16)]);
var inst_42876 = (state_42999[(17)]);
var inst_42894 = (state_42999[(2)]);
var inst_42895 = (inst_42879 + (1));
var tmp43011 = inst_42878;
var tmp43012 = inst_42877;
var tmp43013 = inst_42876;
var inst_42876__$1 = tmp43013;
var inst_42877__$1 = tmp43012;
var inst_42878__$1 = tmp43011;
var inst_42879__$1 = inst_42895;
var state_42999__$1 = (function (){var statearr_43018 = state_42999;
(statearr_43018[(13)] = inst_42878__$1);

(statearr_43018[(14)] = inst_42879__$1);

(statearr_43018[(18)] = inst_42894);

(statearr_43018[(16)] = inst_42877__$1);

(statearr_43018[(17)] = inst_42876__$1);

return statearr_43018;
})();
var statearr_43019_43098 = state_42999__$1;
(statearr_43019_43098[(2)] = null);

(statearr_43019_43098[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (21))){
var inst_42921 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43023_43099 = state_42999__$1;
(statearr_43023_43099[(2)] = inst_42921);

(statearr_43023_43099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (31))){
var inst_42947 = (state_42999[(9)]);
var inst_42951 = done.call(null,null);
var inst_42952 = cljs.core.async.untap_STAR_.call(null,m,inst_42947);
var state_42999__$1 = (function (){var statearr_43024 = state_42999;
(statearr_43024[(19)] = inst_42951);

return statearr_43024;
})();
var statearr_43025_43100 = state_42999__$1;
(statearr_43025_43100[(2)] = inst_42952);

(statearr_43025_43100[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (32))){
var inst_42942 = (state_42999[(10)]);
var inst_42939 = (state_42999[(20)]);
var inst_42941 = (state_42999[(21)]);
var inst_42940 = (state_42999[(11)]);
var inst_42954 = (state_42999[(2)]);
var inst_42955 = (inst_42942 + (1));
var tmp43020 = inst_42939;
var tmp43021 = inst_42941;
var tmp43022 = inst_42940;
var inst_42939__$1 = tmp43020;
var inst_42940__$1 = tmp43022;
var inst_42941__$1 = tmp43021;
var inst_42942__$1 = inst_42955;
var state_42999__$1 = (function (){var statearr_43026 = state_42999;
(statearr_43026[(10)] = inst_42942__$1);

(statearr_43026[(22)] = inst_42954);

(statearr_43026[(20)] = inst_42939__$1);

(statearr_43026[(21)] = inst_42941__$1);

(statearr_43026[(11)] = inst_42940__$1);

return statearr_43026;
})();
var statearr_43027_43101 = state_42999__$1;
(statearr_43027_43101[(2)] = null);

(statearr_43027_43101[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (40))){
var inst_42967 = (state_42999[(23)]);
var inst_42971 = done.call(null,null);
var inst_42972 = cljs.core.async.untap_STAR_.call(null,m,inst_42967);
var state_42999__$1 = (function (){var statearr_43028 = state_42999;
(statearr_43028[(24)] = inst_42971);

return statearr_43028;
})();
var statearr_43029_43102 = state_42999__$1;
(statearr_43029_43102[(2)] = inst_42972);

(statearr_43029_43102[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (33))){
var inst_42958 = (state_42999[(25)]);
var inst_42960 = cljs.core.chunked_seq_QMARK_.call(null,inst_42958);
var state_42999__$1 = state_42999;
if(inst_42960){
var statearr_43030_43103 = state_42999__$1;
(statearr_43030_43103[(1)] = (36));

} else {
var statearr_43031_43104 = state_42999__$1;
(statearr_43031_43104[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (13))){
var inst_42888 = (state_42999[(26)]);
var inst_42891 = cljs.core.async.close_BANG_.call(null,inst_42888);
var state_42999__$1 = state_42999;
var statearr_43032_43105 = state_42999__$1;
(statearr_43032_43105[(2)] = inst_42891);

(statearr_43032_43105[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (22))){
var inst_42911 = (state_42999[(8)]);
var inst_42914 = cljs.core.async.close_BANG_.call(null,inst_42911);
var state_42999__$1 = state_42999;
var statearr_43033_43106 = state_42999__$1;
(statearr_43033_43106[(2)] = inst_42914);

(statearr_43033_43106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (36))){
var inst_42958 = (state_42999[(25)]);
var inst_42962 = cljs.core.chunk_first.call(null,inst_42958);
var inst_42963 = cljs.core.chunk_rest.call(null,inst_42958);
var inst_42964 = cljs.core.count.call(null,inst_42962);
var inst_42939 = inst_42963;
var inst_42940 = inst_42962;
var inst_42941 = inst_42964;
var inst_42942 = (0);
var state_42999__$1 = (function (){var statearr_43034 = state_42999;
(statearr_43034[(10)] = inst_42942);

(statearr_43034[(20)] = inst_42939);

(statearr_43034[(21)] = inst_42941);

(statearr_43034[(11)] = inst_42940);

return statearr_43034;
})();
var statearr_43035_43107 = state_42999__$1;
(statearr_43035_43107[(2)] = null);

(statearr_43035_43107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (41))){
var inst_42958 = (state_42999[(25)]);
var inst_42974 = (state_42999[(2)]);
var inst_42975 = cljs.core.next.call(null,inst_42958);
var inst_42939 = inst_42975;
var inst_42940 = null;
var inst_42941 = (0);
var inst_42942 = (0);
var state_42999__$1 = (function (){var statearr_43036 = state_42999;
(statearr_43036[(27)] = inst_42974);

(statearr_43036[(10)] = inst_42942);

(statearr_43036[(20)] = inst_42939);

(statearr_43036[(21)] = inst_42941);

(statearr_43036[(11)] = inst_42940);

return statearr_43036;
})();
var statearr_43037_43108 = state_42999__$1;
(statearr_43037_43108[(2)] = null);

(statearr_43037_43108[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (43))){
var state_42999__$1 = state_42999;
var statearr_43038_43109 = state_42999__$1;
(statearr_43038_43109[(2)] = null);

(statearr_43038_43109[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (29))){
var inst_42983 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43039_43110 = state_42999__$1;
(statearr_43039_43110[(2)] = inst_42983);

(statearr_43039_43110[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (44))){
var inst_42992 = (state_42999[(2)]);
var state_42999__$1 = (function (){var statearr_43040 = state_42999;
(statearr_43040[(28)] = inst_42992);

return statearr_43040;
})();
var statearr_43041_43111 = state_42999__$1;
(statearr_43041_43111[(2)] = null);

(statearr_43041_43111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (6))){
var inst_42931 = (state_42999[(29)]);
var inst_42930 = cljs.core.deref.call(null,cs);
var inst_42931__$1 = cljs.core.keys.call(null,inst_42930);
var inst_42932 = cljs.core.count.call(null,inst_42931__$1);
var inst_42933 = cljs.core.reset_BANG_.call(null,dctr,inst_42932);
var inst_42938 = cljs.core.seq.call(null,inst_42931__$1);
var inst_42939 = inst_42938;
var inst_42940 = null;
var inst_42941 = (0);
var inst_42942 = (0);
var state_42999__$1 = (function (){var statearr_43042 = state_42999;
(statearr_43042[(29)] = inst_42931__$1);

(statearr_43042[(10)] = inst_42942);

(statearr_43042[(30)] = inst_42933);

(statearr_43042[(20)] = inst_42939);

(statearr_43042[(21)] = inst_42941);

(statearr_43042[(11)] = inst_42940);

return statearr_43042;
})();
var statearr_43043_43112 = state_42999__$1;
(statearr_43043_43112[(2)] = null);

(statearr_43043_43112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (28))){
var inst_42958 = (state_42999[(25)]);
var inst_42939 = (state_42999[(20)]);
var inst_42958__$1 = cljs.core.seq.call(null,inst_42939);
var state_42999__$1 = (function (){var statearr_43044 = state_42999;
(statearr_43044[(25)] = inst_42958__$1);

return statearr_43044;
})();
if(inst_42958__$1){
var statearr_43045_43113 = state_42999__$1;
(statearr_43045_43113[(1)] = (33));

} else {
var statearr_43046_43114 = state_42999__$1;
(statearr_43046_43114[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (25))){
var inst_42942 = (state_42999[(10)]);
var inst_42941 = (state_42999[(21)]);
var inst_42944 = (inst_42942 < inst_42941);
var inst_42945 = inst_42944;
var state_42999__$1 = state_42999;
if(cljs.core.truth_(inst_42945)){
var statearr_43047_43115 = state_42999__$1;
(statearr_43047_43115[(1)] = (27));

} else {
var statearr_43048_43116 = state_42999__$1;
(statearr_43048_43116[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (34))){
var state_42999__$1 = state_42999;
var statearr_43049_43117 = state_42999__$1;
(statearr_43049_43117[(2)] = null);

(statearr_43049_43117[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (17))){
var state_42999__$1 = state_42999;
var statearr_43050_43118 = state_42999__$1;
(statearr_43050_43118[(2)] = null);

(statearr_43050_43118[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (3))){
var inst_42997 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42999__$1,inst_42997);
} else {
if((state_val_43000 === (12))){
var inst_42926 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43051_43119 = state_42999__$1;
(statearr_43051_43119[(2)] = inst_42926);

(statearr_43051_43119[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (2))){
var state_42999__$1 = state_42999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42999__$1,(4),ch);
} else {
if((state_val_43000 === (23))){
var state_42999__$1 = state_42999;
var statearr_43052_43120 = state_42999__$1;
(statearr_43052_43120[(2)] = null);

(statearr_43052_43120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (35))){
var inst_42981 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43053_43121 = state_42999__$1;
(statearr_43053_43121[(2)] = inst_42981);

(statearr_43053_43121[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (19))){
var inst_42898 = (state_42999[(7)]);
var inst_42902 = cljs.core.chunk_first.call(null,inst_42898);
var inst_42903 = cljs.core.chunk_rest.call(null,inst_42898);
var inst_42904 = cljs.core.count.call(null,inst_42902);
var inst_42876 = inst_42903;
var inst_42877 = inst_42902;
var inst_42878 = inst_42904;
var inst_42879 = (0);
var state_42999__$1 = (function (){var statearr_43054 = state_42999;
(statearr_43054[(13)] = inst_42878);

(statearr_43054[(14)] = inst_42879);

(statearr_43054[(16)] = inst_42877);

(statearr_43054[(17)] = inst_42876);

return statearr_43054;
})();
var statearr_43055_43122 = state_42999__$1;
(statearr_43055_43122[(2)] = null);

(statearr_43055_43122[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (11))){
var inst_42898 = (state_42999[(7)]);
var inst_42876 = (state_42999[(17)]);
var inst_42898__$1 = cljs.core.seq.call(null,inst_42876);
var state_42999__$1 = (function (){var statearr_43056 = state_42999;
(statearr_43056[(7)] = inst_42898__$1);

return statearr_43056;
})();
if(inst_42898__$1){
var statearr_43057_43123 = state_42999__$1;
(statearr_43057_43123[(1)] = (16));

} else {
var statearr_43058_43124 = state_42999__$1;
(statearr_43058_43124[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (9))){
var inst_42928 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43059_43125 = state_42999__$1;
(statearr_43059_43125[(2)] = inst_42928);

(statearr_43059_43125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (5))){
var inst_42874 = cljs.core.deref.call(null,cs);
var inst_42875 = cljs.core.seq.call(null,inst_42874);
var inst_42876 = inst_42875;
var inst_42877 = null;
var inst_42878 = (0);
var inst_42879 = (0);
var state_42999__$1 = (function (){var statearr_43060 = state_42999;
(statearr_43060[(13)] = inst_42878);

(statearr_43060[(14)] = inst_42879);

(statearr_43060[(16)] = inst_42877);

(statearr_43060[(17)] = inst_42876);

return statearr_43060;
})();
var statearr_43061_43126 = state_42999__$1;
(statearr_43061_43126[(2)] = null);

(statearr_43061_43126[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (14))){
var state_42999__$1 = state_42999;
var statearr_43062_43127 = state_42999__$1;
(statearr_43062_43127[(2)] = null);

(statearr_43062_43127[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (45))){
var inst_42989 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43063_43128 = state_42999__$1;
(statearr_43063_43128[(2)] = inst_42989);

(statearr_43063_43128[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (26))){
var inst_42931 = (state_42999[(29)]);
var inst_42985 = (state_42999[(2)]);
var inst_42986 = cljs.core.seq.call(null,inst_42931);
var state_42999__$1 = (function (){var statearr_43064 = state_42999;
(statearr_43064[(31)] = inst_42985);

return statearr_43064;
})();
if(inst_42986){
var statearr_43065_43129 = state_42999__$1;
(statearr_43065_43129[(1)] = (42));

} else {
var statearr_43066_43130 = state_42999__$1;
(statearr_43066_43130[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (16))){
var inst_42898 = (state_42999[(7)]);
var inst_42900 = cljs.core.chunked_seq_QMARK_.call(null,inst_42898);
var state_42999__$1 = state_42999;
if(inst_42900){
var statearr_43067_43131 = state_42999__$1;
(statearr_43067_43131[(1)] = (19));

} else {
var statearr_43068_43132 = state_42999__$1;
(statearr_43068_43132[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (38))){
var inst_42978 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43069_43133 = state_42999__$1;
(statearr_43069_43133[(2)] = inst_42978);

(statearr_43069_43133[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (30))){
var state_42999__$1 = state_42999;
var statearr_43070_43134 = state_42999__$1;
(statearr_43070_43134[(2)] = null);

(statearr_43070_43134[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (10))){
var inst_42879 = (state_42999[(14)]);
var inst_42877 = (state_42999[(16)]);
var inst_42887 = cljs.core._nth.call(null,inst_42877,inst_42879);
var inst_42888 = cljs.core.nth.call(null,inst_42887,(0),null);
var inst_42889 = cljs.core.nth.call(null,inst_42887,(1),null);
var state_42999__$1 = (function (){var statearr_43071 = state_42999;
(statearr_43071[(26)] = inst_42888);

return statearr_43071;
})();
if(cljs.core.truth_(inst_42889)){
var statearr_43072_43135 = state_42999__$1;
(statearr_43072_43135[(1)] = (13));

} else {
var statearr_43073_43136 = state_42999__$1;
(statearr_43073_43136[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (18))){
var inst_42924 = (state_42999[(2)]);
var state_42999__$1 = state_42999;
var statearr_43074_43137 = state_42999__$1;
(statearr_43074_43137[(2)] = inst_42924);

(statearr_43074_43137[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (42))){
var state_42999__$1 = state_42999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42999__$1,(45),dchan);
} else {
if((state_val_43000 === (37))){
var inst_42958 = (state_42999[(25)]);
var inst_42967 = (state_42999[(23)]);
var inst_42867 = (state_42999[(12)]);
var inst_42967__$1 = cljs.core.first.call(null,inst_42958);
var inst_42968 = cljs.core.async.put_BANG_.call(null,inst_42967__$1,inst_42867,done);
var state_42999__$1 = (function (){var statearr_43075 = state_42999;
(statearr_43075[(23)] = inst_42967__$1);

return statearr_43075;
})();
if(cljs.core.truth_(inst_42968)){
var statearr_43076_43138 = state_42999__$1;
(statearr_43076_43138[(1)] = (39));

} else {
var statearr_43077_43139 = state_42999__$1;
(statearr_43077_43139[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43000 === (8))){
var inst_42878 = (state_42999[(13)]);
var inst_42879 = (state_42999[(14)]);
var inst_42881 = (inst_42879 < inst_42878);
var inst_42882 = inst_42881;
var state_42999__$1 = state_42999;
if(cljs.core.truth_(inst_42882)){
var statearr_43078_43140 = state_42999__$1;
(statearr_43078_43140[(1)] = (10));

} else {
var statearr_43079_43141 = state_42999__$1;
(statearr_43079_43141[(1)] = (11));

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
});})(c__28276__auto___43087,cs,m,dchan,dctr,done))
;
return ((function (switch__28211__auto__,c__28276__auto___43087,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__28212__auto__ = null;
var cljs$core$async$mult_$_state_machine__28212__auto____0 = (function (){
var statearr_43083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43083[(0)] = cljs$core$async$mult_$_state_machine__28212__auto__);

(statearr_43083[(1)] = (1));

return statearr_43083;
});
var cljs$core$async$mult_$_state_machine__28212__auto____1 = (function (state_42999){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_42999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e43084){if((e43084 instanceof Object)){
var ex__28215__auto__ = e43084;
var statearr_43085_43142 = state_42999;
(statearr_43085_43142[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43143 = state_42999;
state_42999 = G__43143;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28212__auto__ = function(state_42999){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28212__auto____1.call(this,state_42999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28212__auto____0;
cljs$core$async$mult_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28212__auto____1;
return cljs$core$async$mult_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___43087,cs,m,dchan,dctr,done))
})();
var state__28278__auto__ = (function (){var statearr_43086 = f__28277__auto__.call(null);
(statearr_43086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___43087);

return statearr_43086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___43087,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args43144 = [];
var len__26171__auto___43147 = arguments.length;
var i__26172__auto___43148 = (0);
while(true){
if((i__26172__auto___43148 < len__26171__auto___43147)){
args43144.push((arguments[i__26172__auto___43148]));

var G__43149 = (i__26172__auto___43148 + (1));
i__26172__auto___43148 = G__43149;
continue;
} else {
}
break;
}

var G__43146 = args43144.length;
switch (G__43146) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43144.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m,ch);
} else {
var m__25760__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m,ch);
} else {
var m__25760__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m);
} else {
var m__25760__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m,state_map);
} else {
var m__25760__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25759__auto__ = (((m == null))?null:m);
var m__25760__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,m,mode);
} else {
var m__25760__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26178__auto__ = [];
var len__26171__auto___43161 = arguments.length;
var i__26172__auto___43162 = (0);
while(true){
if((i__26172__auto___43162 < len__26171__auto___43161)){
args__26178__auto__.push((arguments[i__26172__auto___43162]));

var G__43163 = (i__26172__auto___43162 + (1));
i__26172__auto___43162 = G__43163;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((3) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26179__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43155){
var map__43156 = p__43155;
var map__43156__$1 = ((((!((map__43156 == null)))?((((map__43156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43156):map__43156);
var opts = map__43156__$1;
var statearr_43158_43164 = state;
(statearr_43158_43164[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__43156,map__43156__$1,opts){
return (function (val){
var statearr_43159_43165 = state;
(statearr_43159_43165[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__43156,map__43156__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_43160_43166 = state;
(statearr_43160_43166[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43151){
var G__43152 = cljs.core.first.call(null,seq43151);
var seq43151__$1 = cljs.core.next.call(null,seq43151);
var G__43153 = cljs.core.first.call(null,seq43151__$1);
var seq43151__$2 = cljs.core.next.call(null,seq43151__$1);
var G__43154 = cljs.core.first.call(null,seq43151__$2);
var seq43151__$3 = cljs.core.next.call(null,seq43151__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43152,G__43153,G__43154,seq43151__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async43332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43332 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43333){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43333 = meta43333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43334,meta43333__$1){
var self__ = this;
var _43334__$1 = this;
return (new cljs.core.async.t_cljs$core$async43332(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43333__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43334){
var self__ = this;
var _43334__$1 = this;
return self__.meta43333;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43333","meta43333",-684387546,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async43332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43332";

cljs.core.async.t_cljs$core$async43332.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async43332");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async43332 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async43332(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43333){
return (new cljs.core.async.t_cljs$core$async43332(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43333));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async43332(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28276__auto___43497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___43497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___43497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43434){
var state_val_43435 = (state_43434[(1)]);
if((state_val_43435 === (7))){
var inst_43350 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
var statearr_43436_43498 = state_43434__$1;
(statearr_43436_43498[(2)] = inst_43350);

(statearr_43436_43498[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (20))){
var inst_43362 = (state_43434[(7)]);
var state_43434__$1 = state_43434;
var statearr_43437_43499 = state_43434__$1;
(statearr_43437_43499[(2)] = inst_43362);

(statearr_43437_43499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (27))){
var state_43434__$1 = state_43434;
var statearr_43438_43500 = state_43434__$1;
(statearr_43438_43500[(2)] = null);

(statearr_43438_43500[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (1))){
var inst_43338 = (state_43434[(8)]);
var inst_43338__$1 = calc_state.call(null);
var inst_43340 = (inst_43338__$1 == null);
var inst_43341 = cljs.core.not.call(null,inst_43340);
var state_43434__$1 = (function (){var statearr_43439 = state_43434;
(statearr_43439[(8)] = inst_43338__$1);

return statearr_43439;
})();
if(inst_43341){
var statearr_43440_43501 = state_43434__$1;
(statearr_43440_43501[(1)] = (2));

} else {
var statearr_43441_43502 = state_43434__$1;
(statearr_43441_43502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (24))){
var inst_43408 = (state_43434[(9)]);
var inst_43394 = (state_43434[(10)]);
var inst_43385 = (state_43434[(11)]);
var inst_43408__$1 = inst_43385.call(null,inst_43394);
var state_43434__$1 = (function (){var statearr_43442 = state_43434;
(statearr_43442[(9)] = inst_43408__$1);

return statearr_43442;
})();
if(cljs.core.truth_(inst_43408__$1)){
var statearr_43443_43503 = state_43434__$1;
(statearr_43443_43503[(1)] = (29));

} else {
var statearr_43444_43504 = state_43434__$1;
(statearr_43444_43504[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (4))){
var inst_43353 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
if(cljs.core.truth_(inst_43353)){
var statearr_43445_43505 = state_43434__$1;
(statearr_43445_43505[(1)] = (8));

} else {
var statearr_43446_43506 = state_43434__$1;
(statearr_43446_43506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (15))){
var inst_43379 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
if(cljs.core.truth_(inst_43379)){
var statearr_43447_43507 = state_43434__$1;
(statearr_43447_43507[(1)] = (19));

} else {
var statearr_43448_43508 = state_43434__$1;
(statearr_43448_43508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (21))){
var inst_43384 = (state_43434[(12)]);
var inst_43384__$1 = (state_43434[(2)]);
var inst_43385 = cljs.core.get.call(null,inst_43384__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43386 = cljs.core.get.call(null,inst_43384__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43387 = cljs.core.get.call(null,inst_43384__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43434__$1 = (function (){var statearr_43449 = state_43434;
(statearr_43449[(12)] = inst_43384__$1);

(statearr_43449[(11)] = inst_43385);

(statearr_43449[(13)] = inst_43386);

return statearr_43449;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43434__$1,(22),inst_43387);
} else {
if((state_val_43435 === (31))){
var inst_43416 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
if(cljs.core.truth_(inst_43416)){
var statearr_43450_43509 = state_43434__$1;
(statearr_43450_43509[(1)] = (32));

} else {
var statearr_43451_43510 = state_43434__$1;
(statearr_43451_43510[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (32))){
var inst_43393 = (state_43434[(14)]);
var state_43434__$1 = state_43434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43434__$1,(35),out,inst_43393);
} else {
if((state_val_43435 === (33))){
var inst_43384 = (state_43434[(12)]);
var inst_43362 = inst_43384;
var state_43434__$1 = (function (){var statearr_43452 = state_43434;
(statearr_43452[(7)] = inst_43362);

return statearr_43452;
})();
var statearr_43453_43511 = state_43434__$1;
(statearr_43453_43511[(2)] = null);

(statearr_43453_43511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (13))){
var inst_43362 = (state_43434[(7)]);
var inst_43369 = inst_43362.cljs$lang$protocol_mask$partition0$;
var inst_43370 = (inst_43369 & (64));
var inst_43371 = inst_43362.cljs$core$ISeq$;
var inst_43372 = (inst_43370) || (inst_43371);
var state_43434__$1 = state_43434;
if(cljs.core.truth_(inst_43372)){
var statearr_43454_43512 = state_43434__$1;
(statearr_43454_43512[(1)] = (16));

} else {
var statearr_43455_43513 = state_43434__$1;
(statearr_43455_43513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (22))){
var inst_43393 = (state_43434[(14)]);
var inst_43394 = (state_43434[(10)]);
var inst_43392 = (state_43434[(2)]);
var inst_43393__$1 = cljs.core.nth.call(null,inst_43392,(0),null);
var inst_43394__$1 = cljs.core.nth.call(null,inst_43392,(1),null);
var inst_43395 = (inst_43393__$1 == null);
var inst_43396 = cljs.core._EQ_.call(null,inst_43394__$1,change);
var inst_43397 = (inst_43395) || (inst_43396);
var state_43434__$1 = (function (){var statearr_43456 = state_43434;
(statearr_43456[(14)] = inst_43393__$1);

(statearr_43456[(10)] = inst_43394__$1);

return statearr_43456;
})();
if(cljs.core.truth_(inst_43397)){
var statearr_43457_43514 = state_43434__$1;
(statearr_43457_43514[(1)] = (23));

} else {
var statearr_43458_43515 = state_43434__$1;
(statearr_43458_43515[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (36))){
var inst_43384 = (state_43434[(12)]);
var inst_43362 = inst_43384;
var state_43434__$1 = (function (){var statearr_43459 = state_43434;
(statearr_43459[(7)] = inst_43362);

return statearr_43459;
})();
var statearr_43460_43516 = state_43434__$1;
(statearr_43460_43516[(2)] = null);

(statearr_43460_43516[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (29))){
var inst_43408 = (state_43434[(9)]);
var state_43434__$1 = state_43434;
var statearr_43461_43517 = state_43434__$1;
(statearr_43461_43517[(2)] = inst_43408);

(statearr_43461_43517[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (6))){
var state_43434__$1 = state_43434;
var statearr_43462_43518 = state_43434__$1;
(statearr_43462_43518[(2)] = false);

(statearr_43462_43518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (28))){
var inst_43404 = (state_43434[(2)]);
var inst_43405 = calc_state.call(null);
var inst_43362 = inst_43405;
var state_43434__$1 = (function (){var statearr_43463 = state_43434;
(statearr_43463[(15)] = inst_43404);

(statearr_43463[(7)] = inst_43362);

return statearr_43463;
})();
var statearr_43464_43519 = state_43434__$1;
(statearr_43464_43519[(2)] = null);

(statearr_43464_43519[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (25))){
var inst_43430 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
var statearr_43465_43520 = state_43434__$1;
(statearr_43465_43520[(2)] = inst_43430);

(statearr_43465_43520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (34))){
var inst_43428 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
var statearr_43466_43521 = state_43434__$1;
(statearr_43466_43521[(2)] = inst_43428);

(statearr_43466_43521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (17))){
var state_43434__$1 = state_43434;
var statearr_43467_43522 = state_43434__$1;
(statearr_43467_43522[(2)] = false);

(statearr_43467_43522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (3))){
var state_43434__$1 = state_43434;
var statearr_43468_43523 = state_43434__$1;
(statearr_43468_43523[(2)] = false);

(statearr_43468_43523[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (12))){
var inst_43432 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43434__$1,inst_43432);
} else {
if((state_val_43435 === (2))){
var inst_43338 = (state_43434[(8)]);
var inst_43343 = inst_43338.cljs$lang$protocol_mask$partition0$;
var inst_43344 = (inst_43343 & (64));
var inst_43345 = inst_43338.cljs$core$ISeq$;
var inst_43346 = (inst_43344) || (inst_43345);
var state_43434__$1 = state_43434;
if(cljs.core.truth_(inst_43346)){
var statearr_43469_43524 = state_43434__$1;
(statearr_43469_43524[(1)] = (5));

} else {
var statearr_43470_43525 = state_43434__$1;
(statearr_43470_43525[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (23))){
var inst_43393 = (state_43434[(14)]);
var inst_43399 = (inst_43393 == null);
var state_43434__$1 = state_43434;
if(cljs.core.truth_(inst_43399)){
var statearr_43471_43526 = state_43434__$1;
(statearr_43471_43526[(1)] = (26));

} else {
var statearr_43472_43527 = state_43434__$1;
(statearr_43472_43527[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (35))){
var inst_43419 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
if(cljs.core.truth_(inst_43419)){
var statearr_43473_43528 = state_43434__$1;
(statearr_43473_43528[(1)] = (36));

} else {
var statearr_43474_43529 = state_43434__$1;
(statearr_43474_43529[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (19))){
var inst_43362 = (state_43434[(7)]);
var inst_43381 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43362);
var state_43434__$1 = state_43434;
var statearr_43475_43530 = state_43434__$1;
(statearr_43475_43530[(2)] = inst_43381);

(statearr_43475_43530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (11))){
var inst_43362 = (state_43434[(7)]);
var inst_43366 = (inst_43362 == null);
var inst_43367 = cljs.core.not.call(null,inst_43366);
var state_43434__$1 = state_43434;
if(inst_43367){
var statearr_43476_43531 = state_43434__$1;
(statearr_43476_43531[(1)] = (13));

} else {
var statearr_43477_43532 = state_43434__$1;
(statearr_43477_43532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (9))){
var inst_43338 = (state_43434[(8)]);
var state_43434__$1 = state_43434;
var statearr_43478_43533 = state_43434__$1;
(statearr_43478_43533[(2)] = inst_43338);

(statearr_43478_43533[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (5))){
var state_43434__$1 = state_43434;
var statearr_43479_43534 = state_43434__$1;
(statearr_43479_43534[(2)] = true);

(statearr_43479_43534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (14))){
var state_43434__$1 = state_43434;
var statearr_43480_43535 = state_43434__$1;
(statearr_43480_43535[(2)] = false);

(statearr_43480_43535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (26))){
var inst_43394 = (state_43434[(10)]);
var inst_43401 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43394);
var state_43434__$1 = state_43434;
var statearr_43481_43536 = state_43434__$1;
(statearr_43481_43536[(2)] = inst_43401);

(statearr_43481_43536[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (16))){
var state_43434__$1 = state_43434;
var statearr_43482_43537 = state_43434__$1;
(statearr_43482_43537[(2)] = true);

(statearr_43482_43537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (38))){
var inst_43424 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
var statearr_43483_43538 = state_43434__$1;
(statearr_43483_43538[(2)] = inst_43424);

(statearr_43483_43538[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (30))){
var inst_43394 = (state_43434[(10)]);
var inst_43385 = (state_43434[(11)]);
var inst_43386 = (state_43434[(13)]);
var inst_43411 = cljs.core.empty_QMARK_.call(null,inst_43385);
var inst_43412 = inst_43386.call(null,inst_43394);
var inst_43413 = cljs.core.not.call(null,inst_43412);
var inst_43414 = (inst_43411) && (inst_43413);
var state_43434__$1 = state_43434;
var statearr_43484_43539 = state_43434__$1;
(statearr_43484_43539[(2)] = inst_43414);

(statearr_43484_43539[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (10))){
var inst_43338 = (state_43434[(8)]);
var inst_43358 = (state_43434[(2)]);
var inst_43359 = cljs.core.get.call(null,inst_43358,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43360 = cljs.core.get.call(null,inst_43358,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43361 = cljs.core.get.call(null,inst_43358,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43362 = inst_43338;
var state_43434__$1 = (function (){var statearr_43485 = state_43434;
(statearr_43485[(16)] = inst_43361);

(statearr_43485[(7)] = inst_43362);

(statearr_43485[(17)] = inst_43359);

(statearr_43485[(18)] = inst_43360);

return statearr_43485;
})();
var statearr_43486_43540 = state_43434__$1;
(statearr_43486_43540[(2)] = null);

(statearr_43486_43540[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (18))){
var inst_43376 = (state_43434[(2)]);
var state_43434__$1 = state_43434;
var statearr_43487_43541 = state_43434__$1;
(statearr_43487_43541[(2)] = inst_43376);

(statearr_43487_43541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (37))){
var state_43434__$1 = state_43434;
var statearr_43488_43542 = state_43434__$1;
(statearr_43488_43542[(2)] = null);

(statearr_43488_43542[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43435 === (8))){
var inst_43338 = (state_43434[(8)]);
var inst_43355 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43338);
var state_43434__$1 = state_43434;
var statearr_43489_43543 = state_43434__$1;
(statearr_43489_43543[(2)] = inst_43355);

(statearr_43489_43543[(1)] = (10));


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
});})(c__28276__auto___43497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__28211__auto__,c__28276__auto___43497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__28212__auto__ = null;
var cljs$core$async$mix_$_state_machine__28212__auto____0 = (function (){
var statearr_43493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43493[(0)] = cljs$core$async$mix_$_state_machine__28212__auto__);

(statearr_43493[(1)] = (1));

return statearr_43493;
});
var cljs$core$async$mix_$_state_machine__28212__auto____1 = (function (state_43434){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_43434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e43494){if((e43494 instanceof Object)){
var ex__28215__auto__ = e43494;
var statearr_43495_43544 = state_43434;
(statearr_43495_43544[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43545 = state_43434;
state_43434 = G__43545;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28212__auto__ = function(state_43434){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28212__auto____1.call(this,state_43434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28212__auto____0;
cljs$core$async$mix_$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28212__auto____1;
return cljs$core$async$mix_$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___43497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__28278__auto__ = (function (){var statearr_43496 = f__28277__auto__.call(null);
(statearr_43496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___43497);

return statearr_43496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___43497,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25759__auto__ = (((p == null))?null:p);
var m__25760__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25760__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25759__auto__ = (((p == null))?null:p);
var m__25760__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,p,v,ch);
} else {
var m__25760__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args43546 = [];
var len__26171__auto___43549 = arguments.length;
var i__26172__auto___43550 = (0);
while(true){
if((i__26172__auto___43550 < len__26171__auto___43549)){
args43546.push((arguments[i__26172__auto___43550]));

var G__43551 = (i__26172__auto___43550 + (1));
i__26172__auto___43550 = G__43551;
continue;
} else {
}
break;
}

var G__43548 = args43546.length;
switch (G__43548) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43546.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25759__auto__ = (((p == null))?null:p);
var m__25760__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,p);
} else {
var m__25760__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25759__auto__ = (((p == null))?null:p);
var m__25760__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25759__auto__)]);
if(!((m__25760__auto__ == null))){
return m__25760__auto__.call(null,p,v);
} else {
var m__25760__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25760__auto____$1 == null))){
return m__25760__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args43554 = [];
var len__26171__auto___43679 = arguments.length;
var i__26172__auto___43680 = (0);
while(true){
if((i__26172__auto___43680 < len__26171__auto___43679)){
args43554.push((arguments[i__26172__auto___43680]));

var G__43681 = (i__26172__auto___43680 + (1));
i__26172__auto___43680 = G__43681;
continue;
} else {
}
break;
}

var G__43556 = args43554.length;
switch (G__43556) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43554.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25096__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25096__auto__,mults){
return (function (p1__43553_SHARP_){
if(cljs.core.truth_(p1__43553_SHARP_.call(null,topic))){
return p1__43553_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43553_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25096__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43557 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43557 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43558){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43558 = meta43558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43559,meta43558__$1){
var self__ = this;
var _43559__$1 = this;
return (new cljs.core.async.t_cljs$core$async43557(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43558__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43559){
var self__ = this;
var _43559__$1 = this;
return self__.meta43558;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43558","meta43558",-1869949943,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43557.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43557";

cljs.core.async.t_cljs$core$async43557.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async43557");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43557 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43558){
return (new cljs.core.async.t_cljs$core$async43557(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43558));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43557(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28276__auto___43683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___43683,mults,ensure_mult,p){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___43683,mults,ensure_mult,p){
return (function (state_43631){
var state_val_43632 = (state_43631[(1)]);
if((state_val_43632 === (7))){
var inst_43627 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
var statearr_43633_43684 = state_43631__$1;
(statearr_43633_43684[(2)] = inst_43627);

(statearr_43633_43684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (20))){
var state_43631__$1 = state_43631;
var statearr_43634_43685 = state_43631__$1;
(statearr_43634_43685[(2)] = null);

(statearr_43634_43685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (1))){
var state_43631__$1 = state_43631;
var statearr_43635_43686 = state_43631__$1;
(statearr_43635_43686[(2)] = null);

(statearr_43635_43686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (24))){
var inst_43610 = (state_43631[(7)]);
var inst_43619 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43610);
var state_43631__$1 = state_43631;
var statearr_43636_43687 = state_43631__$1;
(statearr_43636_43687[(2)] = inst_43619);

(statearr_43636_43687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (4))){
var inst_43562 = (state_43631[(8)]);
var inst_43562__$1 = (state_43631[(2)]);
var inst_43563 = (inst_43562__$1 == null);
var state_43631__$1 = (function (){var statearr_43637 = state_43631;
(statearr_43637[(8)] = inst_43562__$1);

return statearr_43637;
})();
if(cljs.core.truth_(inst_43563)){
var statearr_43638_43688 = state_43631__$1;
(statearr_43638_43688[(1)] = (5));

} else {
var statearr_43639_43689 = state_43631__$1;
(statearr_43639_43689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (15))){
var inst_43604 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
var statearr_43640_43690 = state_43631__$1;
(statearr_43640_43690[(2)] = inst_43604);

(statearr_43640_43690[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (21))){
var inst_43624 = (state_43631[(2)]);
var state_43631__$1 = (function (){var statearr_43641 = state_43631;
(statearr_43641[(9)] = inst_43624);

return statearr_43641;
})();
var statearr_43642_43691 = state_43631__$1;
(statearr_43642_43691[(2)] = null);

(statearr_43642_43691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (13))){
var inst_43586 = (state_43631[(10)]);
var inst_43588 = cljs.core.chunked_seq_QMARK_.call(null,inst_43586);
var state_43631__$1 = state_43631;
if(inst_43588){
var statearr_43643_43692 = state_43631__$1;
(statearr_43643_43692[(1)] = (16));

} else {
var statearr_43644_43693 = state_43631__$1;
(statearr_43644_43693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (22))){
var inst_43616 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
if(cljs.core.truth_(inst_43616)){
var statearr_43645_43694 = state_43631__$1;
(statearr_43645_43694[(1)] = (23));

} else {
var statearr_43646_43695 = state_43631__$1;
(statearr_43646_43695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (6))){
var inst_43612 = (state_43631[(11)]);
var inst_43610 = (state_43631[(7)]);
var inst_43562 = (state_43631[(8)]);
var inst_43610__$1 = topic_fn.call(null,inst_43562);
var inst_43611 = cljs.core.deref.call(null,mults);
var inst_43612__$1 = cljs.core.get.call(null,inst_43611,inst_43610__$1);
var state_43631__$1 = (function (){var statearr_43647 = state_43631;
(statearr_43647[(11)] = inst_43612__$1);

(statearr_43647[(7)] = inst_43610__$1);

return statearr_43647;
})();
if(cljs.core.truth_(inst_43612__$1)){
var statearr_43648_43696 = state_43631__$1;
(statearr_43648_43696[(1)] = (19));

} else {
var statearr_43649_43697 = state_43631__$1;
(statearr_43649_43697[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (25))){
var inst_43621 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
var statearr_43650_43698 = state_43631__$1;
(statearr_43650_43698[(2)] = inst_43621);

(statearr_43650_43698[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (17))){
var inst_43586 = (state_43631[(10)]);
var inst_43595 = cljs.core.first.call(null,inst_43586);
var inst_43596 = cljs.core.async.muxch_STAR_.call(null,inst_43595);
var inst_43597 = cljs.core.async.close_BANG_.call(null,inst_43596);
var inst_43598 = cljs.core.next.call(null,inst_43586);
var inst_43572 = inst_43598;
var inst_43573 = null;
var inst_43574 = (0);
var inst_43575 = (0);
var state_43631__$1 = (function (){var statearr_43651 = state_43631;
(statearr_43651[(12)] = inst_43572);

(statearr_43651[(13)] = inst_43573);

(statearr_43651[(14)] = inst_43597);

(statearr_43651[(15)] = inst_43575);

(statearr_43651[(16)] = inst_43574);

return statearr_43651;
})();
var statearr_43652_43699 = state_43631__$1;
(statearr_43652_43699[(2)] = null);

(statearr_43652_43699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (3))){
var inst_43629 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43631__$1,inst_43629);
} else {
if((state_val_43632 === (12))){
var inst_43606 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
var statearr_43653_43700 = state_43631__$1;
(statearr_43653_43700[(2)] = inst_43606);

(statearr_43653_43700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (2))){
var state_43631__$1 = state_43631;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43631__$1,(4),ch);
} else {
if((state_val_43632 === (23))){
var state_43631__$1 = state_43631;
var statearr_43654_43701 = state_43631__$1;
(statearr_43654_43701[(2)] = null);

(statearr_43654_43701[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (19))){
var inst_43612 = (state_43631[(11)]);
var inst_43562 = (state_43631[(8)]);
var inst_43614 = cljs.core.async.muxch_STAR_.call(null,inst_43612);
var state_43631__$1 = state_43631;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43631__$1,(22),inst_43614,inst_43562);
} else {
if((state_val_43632 === (11))){
var inst_43572 = (state_43631[(12)]);
var inst_43586 = (state_43631[(10)]);
var inst_43586__$1 = cljs.core.seq.call(null,inst_43572);
var state_43631__$1 = (function (){var statearr_43655 = state_43631;
(statearr_43655[(10)] = inst_43586__$1);

return statearr_43655;
})();
if(inst_43586__$1){
var statearr_43656_43702 = state_43631__$1;
(statearr_43656_43702[(1)] = (13));

} else {
var statearr_43657_43703 = state_43631__$1;
(statearr_43657_43703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (9))){
var inst_43608 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
var statearr_43658_43704 = state_43631__$1;
(statearr_43658_43704[(2)] = inst_43608);

(statearr_43658_43704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (5))){
var inst_43569 = cljs.core.deref.call(null,mults);
var inst_43570 = cljs.core.vals.call(null,inst_43569);
var inst_43571 = cljs.core.seq.call(null,inst_43570);
var inst_43572 = inst_43571;
var inst_43573 = null;
var inst_43574 = (0);
var inst_43575 = (0);
var state_43631__$1 = (function (){var statearr_43659 = state_43631;
(statearr_43659[(12)] = inst_43572);

(statearr_43659[(13)] = inst_43573);

(statearr_43659[(15)] = inst_43575);

(statearr_43659[(16)] = inst_43574);

return statearr_43659;
})();
var statearr_43660_43705 = state_43631__$1;
(statearr_43660_43705[(2)] = null);

(statearr_43660_43705[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (14))){
var state_43631__$1 = state_43631;
var statearr_43664_43706 = state_43631__$1;
(statearr_43664_43706[(2)] = null);

(statearr_43664_43706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (16))){
var inst_43586 = (state_43631[(10)]);
var inst_43590 = cljs.core.chunk_first.call(null,inst_43586);
var inst_43591 = cljs.core.chunk_rest.call(null,inst_43586);
var inst_43592 = cljs.core.count.call(null,inst_43590);
var inst_43572 = inst_43591;
var inst_43573 = inst_43590;
var inst_43574 = inst_43592;
var inst_43575 = (0);
var state_43631__$1 = (function (){var statearr_43665 = state_43631;
(statearr_43665[(12)] = inst_43572);

(statearr_43665[(13)] = inst_43573);

(statearr_43665[(15)] = inst_43575);

(statearr_43665[(16)] = inst_43574);

return statearr_43665;
})();
var statearr_43666_43707 = state_43631__$1;
(statearr_43666_43707[(2)] = null);

(statearr_43666_43707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (10))){
var inst_43572 = (state_43631[(12)]);
var inst_43573 = (state_43631[(13)]);
var inst_43575 = (state_43631[(15)]);
var inst_43574 = (state_43631[(16)]);
var inst_43580 = cljs.core._nth.call(null,inst_43573,inst_43575);
var inst_43581 = cljs.core.async.muxch_STAR_.call(null,inst_43580);
var inst_43582 = cljs.core.async.close_BANG_.call(null,inst_43581);
var inst_43583 = (inst_43575 + (1));
var tmp43661 = inst_43572;
var tmp43662 = inst_43573;
var tmp43663 = inst_43574;
var inst_43572__$1 = tmp43661;
var inst_43573__$1 = tmp43662;
var inst_43574__$1 = tmp43663;
var inst_43575__$1 = inst_43583;
var state_43631__$1 = (function (){var statearr_43667 = state_43631;
(statearr_43667[(12)] = inst_43572__$1);

(statearr_43667[(13)] = inst_43573__$1);

(statearr_43667[(15)] = inst_43575__$1);

(statearr_43667[(16)] = inst_43574__$1);

(statearr_43667[(17)] = inst_43582);

return statearr_43667;
})();
var statearr_43668_43708 = state_43631__$1;
(statearr_43668_43708[(2)] = null);

(statearr_43668_43708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (18))){
var inst_43601 = (state_43631[(2)]);
var state_43631__$1 = state_43631;
var statearr_43669_43709 = state_43631__$1;
(statearr_43669_43709[(2)] = inst_43601);

(statearr_43669_43709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43632 === (8))){
var inst_43575 = (state_43631[(15)]);
var inst_43574 = (state_43631[(16)]);
var inst_43577 = (inst_43575 < inst_43574);
var inst_43578 = inst_43577;
var state_43631__$1 = state_43631;
if(cljs.core.truth_(inst_43578)){
var statearr_43670_43710 = state_43631__$1;
(statearr_43670_43710[(1)] = (10));

} else {
var statearr_43671_43711 = state_43631__$1;
(statearr_43671_43711[(1)] = (11));

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
});})(c__28276__auto___43683,mults,ensure_mult,p))
;
return ((function (switch__28211__auto__,c__28276__auto___43683,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_43675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43675[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_43675[(1)] = (1));

return statearr_43675;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_43631){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_43631);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e43676){if((e43676 instanceof Object)){
var ex__28215__auto__ = e43676;
var statearr_43677_43712 = state_43631;
(statearr_43677_43712[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43631);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43713 = state_43631;
state_43631 = G__43713;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_43631){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_43631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___43683,mults,ensure_mult,p))
})();
var state__28278__auto__ = (function (){var statearr_43678 = f__28277__auto__.call(null);
(statearr_43678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___43683);

return statearr_43678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___43683,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args43714 = [];
var len__26171__auto___43717 = arguments.length;
var i__26172__auto___43718 = (0);
while(true){
if((i__26172__auto___43718 < len__26171__auto___43717)){
args43714.push((arguments[i__26172__auto___43718]));

var G__43719 = (i__26172__auto___43718 + (1));
i__26172__auto___43718 = G__43719;
continue;
} else {
}
break;
}

var G__43716 = args43714.length;
switch (G__43716) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43714.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args43721 = [];
var len__26171__auto___43724 = arguments.length;
var i__26172__auto___43725 = (0);
while(true){
if((i__26172__auto___43725 < len__26171__auto___43724)){
args43721.push((arguments[i__26172__auto___43725]));

var G__43726 = (i__26172__auto___43725 + (1));
i__26172__auto___43725 = G__43726;
continue;
} else {
}
break;
}

var G__43723 = args43721.length;
switch (G__43723) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43721.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args43728 = [];
var len__26171__auto___43799 = arguments.length;
var i__26172__auto___43800 = (0);
while(true){
if((i__26172__auto___43800 < len__26171__auto___43799)){
args43728.push((arguments[i__26172__auto___43800]));

var G__43801 = (i__26172__auto___43800 + (1));
i__26172__auto___43800 = G__43801;
continue;
} else {
}
break;
}

var G__43730 = args43728.length;
switch (G__43730) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43728.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__28276__auto___43803 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___43803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___43803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43769){
var state_val_43770 = (state_43769[(1)]);
if((state_val_43770 === (7))){
var state_43769__$1 = state_43769;
var statearr_43771_43804 = state_43769__$1;
(statearr_43771_43804[(2)] = null);

(statearr_43771_43804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (1))){
var state_43769__$1 = state_43769;
var statearr_43772_43805 = state_43769__$1;
(statearr_43772_43805[(2)] = null);

(statearr_43772_43805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (4))){
var inst_43733 = (state_43769[(7)]);
var inst_43735 = (inst_43733 < cnt);
var state_43769__$1 = state_43769;
if(cljs.core.truth_(inst_43735)){
var statearr_43773_43806 = state_43769__$1;
(statearr_43773_43806[(1)] = (6));

} else {
var statearr_43774_43807 = state_43769__$1;
(statearr_43774_43807[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (15))){
var inst_43765 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43775_43808 = state_43769__$1;
(statearr_43775_43808[(2)] = inst_43765);

(statearr_43775_43808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (13))){
var inst_43758 = cljs.core.async.close_BANG_.call(null,out);
var state_43769__$1 = state_43769;
var statearr_43776_43809 = state_43769__$1;
(statearr_43776_43809[(2)] = inst_43758);

(statearr_43776_43809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (6))){
var state_43769__$1 = state_43769;
var statearr_43777_43810 = state_43769__$1;
(statearr_43777_43810[(2)] = null);

(statearr_43777_43810[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (3))){
var inst_43767 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43769__$1,inst_43767);
} else {
if((state_val_43770 === (12))){
var inst_43755 = (state_43769[(8)]);
var inst_43755__$1 = (state_43769[(2)]);
var inst_43756 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43755__$1);
var state_43769__$1 = (function (){var statearr_43778 = state_43769;
(statearr_43778[(8)] = inst_43755__$1);

return statearr_43778;
})();
if(cljs.core.truth_(inst_43756)){
var statearr_43779_43811 = state_43769__$1;
(statearr_43779_43811[(1)] = (13));

} else {
var statearr_43780_43812 = state_43769__$1;
(statearr_43780_43812[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (2))){
var inst_43732 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43733 = (0);
var state_43769__$1 = (function (){var statearr_43781 = state_43769;
(statearr_43781[(9)] = inst_43732);

(statearr_43781[(7)] = inst_43733);

return statearr_43781;
})();
var statearr_43782_43813 = state_43769__$1;
(statearr_43782_43813[(2)] = null);

(statearr_43782_43813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (11))){
var inst_43733 = (state_43769[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43769,(10),Object,null,(9));
var inst_43742 = chs__$1.call(null,inst_43733);
var inst_43743 = done.call(null,inst_43733);
var inst_43744 = cljs.core.async.take_BANG_.call(null,inst_43742,inst_43743);
var state_43769__$1 = state_43769;
var statearr_43783_43814 = state_43769__$1;
(statearr_43783_43814[(2)] = inst_43744);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43769__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (9))){
var inst_43733 = (state_43769[(7)]);
var inst_43746 = (state_43769[(2)]);
var inst_43747 = (inst_43733 + (1));
var inst_43733__$1 = inst_43747;
var state_43769__$1 = (function (){var statearr_43784 = state_43769;
(statearr_43784[(10)] = inst_43746);

(statearr_43784[(7)] = inst_43733__$1);

return statearr_43784;
})();
var statearr_43785_43815 = state_43769__$1;
(statearr_43785_43815[(2)] = null);

(statearr_43785_43815[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (5))){
var inst_43753 = (state_43769[(2)]);
var state_43769__$1 = (function (){var statearr_43786 = state_43769;
(statearr_43786[(11)] = inst_43753);

return statearr_43786;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43769__$1,(12),dchan);
} else {
if((state_val_43770 === (14))){
var inst_43755 = (state_43769[(8)]);
var inst_43760 = cljs.core.apply.call(null,f,inst_43755);
var state_43769__$1 = state_43769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43769__$1,(16),out,inst_43760);
} else {
if((state_val_43770 === (16))){
var inst_43762 = (state_43769[(2)]);
var state_43769__$1 = (function (){var statearr_43787 = state_43769;
(statearr_43787[(12)] = inst_43762);

return statearr_43787;
})();
var statearr_43788_43816 = state_43769__$1;
(statearr_43788_43816[(2)] = null);

(statearr_43788_43816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (10))){
var inst_43737 = (state_43769[(2)]);
var inst_43738 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43769__$1 = (function (){var statearr_43789 = state_43769;
(statearr_43789[(13)] = inst_43737);

return statearr_43789;
})();
var statearr_43790_43817 = state_43769__$1;
(statearr_43790_43817[(2)] = inst_43738);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43769__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43770 === (8))){
var inst_43751 = (state_43769[(2)]);
var state_43769__$1 = state_43769;
var statearr_43791_43818 = state_43769__$1;
(statearr_43791_43818[(2)] = inst_43751);

(statearr_43791_43818[(1)] = (5));


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
});})(c__28276__auto___43803,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__28211__auto__,c__28276__auto___43803,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_43795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43795[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_43795[(1)] = (1));

return statearr_43795;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_43769){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_43769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e43796){if((e43796 instanceof Object)){
var ex__28215__auto__ = e43796;
var statearr_43797_43819 = state_43769;
(statearr_43797_43819[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43820 = state_43769;
state_43769 = G__43820;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_43769){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_43769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___43803,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__28278__auto__ = (function (){var statearr_43798 = f__28277__auto__.call(null);
(statearr_43798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___43803);

return statearr_43798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___43803,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args43822 = [];
var len__26171__auto___43880 = arguments.length;
var i__26172__auto___43881 = (0);
while(true){
if((i__26172__auto___43881 < len__26171__auto___43880)){
args43822.push((arguments[i__26172__auto___43881]));

var G__43882 = (i__26172__auto___43881 + (1));
i__26172__auto___43881 = G__43882;
continue;
} else {
}
break;
}

var G__43824 = args43822.length;
switch (G__43824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43822.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28276__auto___43884 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___43884,out){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___43884,out){
return (function (state_43856){
var state_val_43857 = (state_43856[(1)]);
if((state_val_43857 === (7))){
var inst_43836 = (state_43856[(7)]);
var inst_43835 = (state_43856[(8)]);
var inst_43835__$1 = (state_43856[(2)]);
var inst_43836__$1 = cljs.core.nth.call(null,inst_43835__$1,(0),null);
var inst_43837 = cljs.core.nth.call(null,inst_43835__$1,(1),null);
var inst_43838 = (inst_43836__$1 == null);
var state_43856__$1 = (function (){var statearr_43858 = state_43856;
(statearr_43858[(9)] = inst_43837);

(statearr_43858[(7)] = inst_43836__$1);

(statearr_43858[(8)] = inst_43835__$1);

return statearr_43858;
})();
if(cljs.core.truth_(inst_43838)){
var statearr_43859_43885 = state_43856__$1;
(statearr_43859_43885[(1)] = (8));

} else {
var statearr_43860_43886 = state_43856__$1;
(statearr_43860_43886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (1))){
var inst_43825 = cljs.core.vec.call(null,chs);
var inst_43826 = inst_43825;
var state_43856__$1 = (function (){var statearr_43861 = state_43856;
(statearr_43861[(10)] = inst_43826);

return statearr_43861;
})();
var statearr_43862_43887 = state_43856__$1;
(statearr_43862_43887[(2)] = null);

(statearr_43862_43887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (4))){
var inst_43826 = (state_43856[(10)]);
var state_43856__$1 = state_43856;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43856__$1,(7),inst_43826);
} else {
if((state_val_43857 === (6))){
var inst_43852 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
var statearr_43863_43888 = state_43856__$1;
(statearr_43863_43888[(2)] = inst_43852);

(statearr_43863_43888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (3))){
var inst_43854 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43856__$1,inst_43854);
} else {
if((state_val_43857 === (2))){
var inst_43826 = (state_43856[(10)]);
var inst_43828 = cljs.core.count.call(null,inst_43826);
var inst_43829 = (inst_43828 > (0));
var state_43856__$1 = state_43856;
if(cljs.core.truth_(inst_43829)){
var statearr_43865_43889 = state_43856__$1;
(statearr_43865_43889[(1)] = (4));

} else {
var statearr_43866_43890 = state_43856__$1;
(statearr_43866_43890[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (11))){
var inst_43826 = (state_43856[(10)]);
var inst_43845 = (state_43856[(2)]);
var tmp43864 = inst_43826;
var inst_43826__$1 = tmp43864;
var state_43856__$1 = (function (){var statearr_43867 = state_43856;
(statearr_43867[(11)] = inst_43845);

(statearr_43867[(10)] = inst_43826__$1);

return statearr_43867;
})();
var statearr_43868_43891 = state_43856__$1;
(statearr_43868_43891[(2)] = null);

(statearr_43868_43891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (9))){
var inst_43836 = (state_43856[(7)]);
var state_43856__$1 = state_43856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43856__$1,(11),out,inst_43836);
} else {
if((state_val_43857 === (5))){
var inst_43850 = cljs.core.async.close_BANG_.call(null,out);
var state_43856__$1 = state_43856;
var statearr_43869_43892 = state_43856__$1;
(statearr_43869_43892[(2)] = inst_43850);

(statearr_43869_43892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (10))){
var inst_43848 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
var statearr_43870_43893 = state_43856__$1;
(statearr_43870_43893[(2)] = inst_43848);

(statearr_43870_43893[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (8))){
var inst_43837 = (state_43856[(9)]);
var inst_43836 = (state_43856[(7)]);
var inst_43826 = (state_43856[(10)]);
var inst_43835 = (state_43856[(8)]);
var inst_43840 = (function (){var cs = inst_43826;
var vec__43831 = inst_43835;
var v = inst_43836;
var c = inst_43837;
return ((function (cs,vec__43831,v,c,inst_43837,inst_43836,inst_43826,inst_43835,state_val_43857,c__28276__auto___43884,out){
return (function (p1__43821_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43821_SHARP_);
});
;})(cs,vec__43831,v,c,inst_43837,inst_43836,inst_43826,inst_43835,state_val_43857,c__28276__auto___43884,out))
})();
var inst_43841 = cljs.core.filterv.call(null,inst_43840,inst_43826);
var inst_43826__$1 = inst_43841;
var state_43856__$1 = (function (){var statearr_43871 = state_43856;
(statearr_43871[(10)] = inst_43826__$1);

return statearr_43871;
})();
var statearr_43872_43894 = state_43856__$1;
(statearr_43872_43894[(2)] = null);

(statearr_43872_43894[(1)] = (2));


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
});})(c__28276__auto___43884,out))
;
return ((function (switch__28211__auto__,c__28276__auto___43884,out){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_43876 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43876[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_43876[(1)] = (1));

return statearr_43876;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_43856){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_43856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e43877){if((e43877 instanceof Object)){
var ex__28215__auto__ = e43877;
var statearr_43878_43895 = state_43856;
(statearr_43878_43895[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43896 = state_43856;
state_43856 = G__43896;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_43856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_43856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___43884,out))
})();
var state__28278__auto__ = (function (){var statearr_43879 = f__28277__auto__.call(null);
(statearr_43879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___43884);

return statearr_43879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___43884,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args43897 = [];
var len__26171__auto___43946 = arguments.length;
var i__26172__auto___43947 = (0);
while(true){
if((i__26172__auto___43947 < len__26171__auto___43946)){
args43897.push((arguments[i__26172__auto___43947]));

var G__43948 = (i__26172__auto___43947 + (1));
i__26172__auto___43947 = G__43948;
continue;
} else {
}
break;
}

var G__43899 = args43897.length;
switch (G__43899) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43897.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28276__auto___43950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___43950,out){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___43950,out){
return (function (state_43923){
var state_val_43924 = (state_43923[(1)]);
if((state_val_43924 === (7))){
var inst_43905 = (state_43923[(7)]);
var inst_43905__$1 = (state_43923[(2)]);
var inst_43906 = (inst_43905__$1 == null);
var inst_43907 = cljs.core.not.call(null,inst_43906);
var state_43923__$1 = (function (){var statearr_43925 = state_43923;
(statearr_43925[(7)] = inst_43905__$1);

return statearr_43925;
})();
if(inst_43907){
var statearr_43926_43951 = state_43923__$1;
(statearr_43926_43951[(1)] = (8));

} else {
var statearr_43927_43952 = state_43923__$1;
(statearr_43927_43952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (1))){
var inst_43900 = (0);
var state_43923__$1 = (function (){var statearr_43928 = state_43923;
(statearr_43928[(8)] = inst_43900);

return statearr_43928;
})();
var statearr_43929_43953 = state_43923__$1;
(statearr_43929_43953[(2)] = null);

(statearr_43929_43953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (4))){
var state_43923__$1 = state_43923;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43923__$1,(7),ch);
} else {
if((state_val_43924 === (6))){
var inst_43918 = (state_43923[(2)]);
var state_43923__$1 = state_43923;
var statearr_43930_43954 = state_43923__$1;
(statearr_43930_43954[(2)] = inst_43918);

(statearr_43930_43954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (3))){
var inst_43920 = (state_43923[(2)]);
var inst_43921 = cljs.core.async.close_BANG_.call(null,out);
var state_43923__$1 = (function (){var statearr_43931 = state_43923;
(statearr_43931[(9)] = inst_43920);

return statearr_43931;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43923__$1,inst_43921);
} else {
if((state_val_43924 === (2))){
var inst_43900 = (state_43923[(8)]);
var inst_43902 = (inst_43900 < n);
var state_43923__$1 = state_43923;
if(cljs.core.truth_(inst_43902)){
var statearr_43932_43955 = state_43923__$1;
(statearr_43932_43955[(1)] = (4));

} else {
var statearr_43933_43956 = state_43923__$1;
(statearr_43933_43956[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (11))){
var inst_43900 = (state_43923[(8)]);
var inst_43910 = (state_43923[(2)]);
var inst_43911 = (inst_43900 + (1));
var inst_43900__$1 = inst_43911;
var state_43923__$1 = (function (){var statearr_43934 = state_43923;
(statearr_43934[(10)] = inst_43910);

(statearr_43934[(8)] = inst_43900__$1);

return statearr_43934;
})();
var statearr_43935_43957 = state_43923__$1;
(statearr_43935_43957[(2)] = null);

(statearr_43935_43957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (9))){
var state_43923__$1 = state_43923;
var statearr_43936_43958 = state_43923__$1;
(statearr_43936_43958[(2)] = null);

(statearr_43936_43958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (5))){
var state_43923__$1 = state_43923;
var statearr_43937_43959 = state_43923__$1;
(statearr_43937_43959[(2)] = null);

(statearr_43937_43959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (10))){
var inst_43915 = (state_43923[(2)]);
var state_43923__$1 = state_43923;
var statearr_43938_43960 = state_43923__$1;
(statearr_43938_43960[(2)] = inst_43915);

(statearr_43938_43960[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43924 === (8))){
var inst_43905 = (state_43923[(7)]);
var state_43923__$1 = state_43923;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43923__$1,(11),out,inst_43905);
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
});})(c__28276__auto___43950,out))
;
return ((function (switch__28211__auto__,c__28276__auto___43950,out){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_43942 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43942[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_43942[(1)] = (1));

return statearr_43942;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_43923){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_43923);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e43943){if((e43943 instanceof Object)){
var ex__28215__auto__ = e43943;
var statearr_43944_43961 = state_43923;
(statearr_43944_43961[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43923);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43962 = state_43923;
state_43923 = G__43962;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_43923){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_43923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___43950,out))
})();
var state__28278__auto__ = (function (){var statearr_43945 = f__28277__auto__.call(null);
(statearr_43945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___43950);

return statearr_43945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___43950,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43970 = (function (map_LT_,f,ch,meta43971){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43971 = meta43971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43972,meta43971__$1){
var self__ = this;
var _43972__$1 = this;
return (new cljs.core.async.t_cljs$core$async43970(self__.map_LT_,self__.f,self__.ch,meta43971__$1));
});

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43972){
var self__ = this;
var _43972__$1 = this;
return self__.meta43971;
});

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43973 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43973 = (function (map_LT_,f,ch,meta43971,_,fn1,meta43974){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43971 = meta43971;
this._ = _;
this.fn1 = fn1;
this.meta43974 = meta43974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43975,meta43974__$1){
var self__ = this;
var _43975__$1 = this;
return (new cljs.core.async.t_cljs$core$async43973(self__.map_LT_,self__.f,self__.ch,self__.meta43971,self__._,self__.fn1,meta43974__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43975){
var self__ = this;
var _43975__$1 = this;
return self__.meta43974;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43973.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43973.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43963_SHARP_){
return f1.call(null,(((p1__43963_SHARP_ == null))?null:self__.f.call(null,p1__43963_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43973.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43971","meta43971",1175000584,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43970","cljs.core.async/t_cljs$core$async43970",1384043726,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43974","meta43974",4679045,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43973.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43973.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43973";

cljs.core.async.t_cljs$core$async43973.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async43973");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43973 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43973(map_LT___$1,f__$1,ch__$1,meta43971__$1,___$2,fn1__$1,meta43974){
return (new cljs.core.async.t_cljs$core$async43973(map_LT___$1,f__$1,ch__$1,meta43971__$1,___$2,fn1__$1,meta43974));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43973(self__.map_LT_,self__.f,self__.ch,self__.meta43971,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25084__auto__ = ret;
if(cljs.core.truth_(and__25084__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25084__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43970.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43970.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43971","meta43971",1175000584,null)], null);
});

cljs.core.async.t_cljs$core$async43970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43970";

cljs.core.async.t_cljs$core$async43970.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async43970");
});

cljs.core.async.__GT_t_cljs$core$async43970 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43970(map_LT___$1,f__$1,ch__$1,meta43971){
return (new cljs.core.async.t_cljs$core$async43970(map_LT___$1,f__$1,ch__$1,meta43971));
});

}

return (new cljs.core.async.t_cljs$core$async43970(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43979 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43979 = (function (map_GT_,f,ch,meta43980){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta43980 = meta43980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43981,meta43980__$1){
var self__ = this;
var _43981__$1 = this;
return (new cljs.core.async.t_cljs$core$async43979(self__.map_GT_,self__.f,self__.ch,meta43980__$1));
});

cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43981){
var self__ = this;
var _43981__$1 = this;
return self__.meta43980;
});

cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43979.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43979.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43980","meta43980",-1646921875,null)], null);
});

cljs.core.async.t_cljs$core$async43979.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43979.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43979";

cljs.core.async.t_cljs$core$async43979.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async43979");
});

cljs.core.async.__GT_t_cljs$core$async43979 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43979(map_GT___$1,f__$1,ch__$1,meta43980){
return (new cljs.core.async.t_cljs$core$async43979(map_GT___$1,f__$1,ch__$1,meta43980));
});

}

return (new cljs.core.async.t_cljs$core$async43979(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43985 = (function (filter_GT_,p,ch,meta43986){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta43986 = meta43986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43987,meta43986__$1){
var self__ = this;
var _43987__$1 = this;
return (new cljs.core.async.t_cljs$core$async43985(self__.filter_GT_,self__.p,self__.ch,meta43986__$1));
});

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43987){
var self__ = this;
var _43987__$1 = this;
return self__.meta43986;
});

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43986","meta43986",-282120805,null)], null);
});

cljs.core.async.t_cljs$core$async43985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43985";

cljs.core.async.t_cljs$core$async43985.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async43985");
});

cljs.core.async.__GT_t_cljs$core$async43985 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43985(filter_GT___$1,p__$1,ch__$1,meta43986){
return (new cljs.core.async.t_cljs$core$async43985(filter_GT___$1,p__$1,ch__$1,meta43986));
});

}

return (new cljs.core.async.t_cljs$core$async43985(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args43988 = [];
var len__26171__auto___44032 = arguments.length;
var i__26172__auto___44033 = (0);
while(true){
if((i__26172__auto___44033 < len__26171__auto___44032)){
args43988.push((arguments[i__26172__auto___44033]));

var G__44034 = (i__26172__auto___44033 + (1));
i__26172__auto___44033 = G__44034;
continue;
} else {
}
break;
}

var G__43990 = args43988.length;
switch (G__43990) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43988.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28276__auto___44036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___44036,out){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___44036,out){
return (function (state_44011){
var state_val_44012 = (state_44011[(1)]);
if((state_val_44012 === (7))){
var inst_44007 = (state_44011[(2)]);
var state_44011__$1 = state_44011;
var statearr_44013_44037 = state_44011__$1;
(statearr_44013_44037[(2)] = inst_44007);

(statearr_44013_44037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (1))){
var state_44011__$1 = state_44011;
var statearr_44014_44038 = state_44011__$1;
(statearr_44014_44038[(2)] = null);

(statearr_44014_44038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (4))){
var inst_43993 = (state_44011[(7)]);
var inst_43993__$1 = (state_44011[(2)]);
var inst_43994 = (inst_43993__$1 == null);
var state_44011__$1 = (function (){var statearr_44015 = state_44011;
(statearr_44015[(7)] = inst_43993__$1);

return statearr_44015;
})();
if(cljs.core.truth_(inst_43994)){
var statearr_44016_44039 = state_44011__$1;
(statearr_44016_44039[(1)] = (5));

} else {
var statearr_44017_44040 = state_44011__$1;
(statearr_44017_44040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (6))){
var inst_43993 = (state_44011[(7)]);
var inst_43998 = p.call(null,inst_43993);
var state_44011__$1 = state_44011;
if(cljs.core.truth_(inst_43998)){
var statearr_44018_44041 = state_44011__$1;
(statearr_44018_44041[(1)] = (8));

} else {
var statearr_44019_44042 = state_44011__$1;
(statearr_44019_44042[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (3))){
var inst_44009 = (state_44011[(2)]);
var state_44011__$1 = state_44011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44011__$1,inst_44009);
} else {
if((state_val_44012 === (2))){
var state_44011__$1 = state_44011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44011__$1,(4),ch);
} else {
if((state_val_44012 === (11))){
var inst_44001 = (state_44011[(2)]);
var state_44011__$1 = state_44011;
var statearr_44020_44043 = state_44011__$1;
(statearr_44020_44043[(2)] = inst_44001);

(statearr_44020_44043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (9))){
var state_44011__$1 = state_44011;
var statearr_44021_44044 = state_44011__$1;
(statearr_44021_44044[(2)] = null);

(statearr_44021_44044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (5))){
var inst_43996 = cljs.core.async.close_BANG_.call(null,out);
var state_44011__$1 = state_44011;
var statearr_44022_44045 = state_44011__$1;
(statearr_44022_44045[(2)] = inst_43996);

(statearr_44022_44045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (10))){
var inst_44004 = (state_44011[(2)]);
var state_44011__$1 = (function (){var statearr_44023 = state_44011;
(statearr_44023[(8)] = inst_44004);

return statearr_44023;
})();
var statearr_44024_44046 = state_44011__$1;
(statearr_44024_44046[(2)] = null);

(statearr_44024_44046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44012 === (8))){
var inst_43993 = (state_44011[(7)]);
var state_44011__$1 = state_44011;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44011__$1,(11),out,inst_43993);
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
});})(c__28276__auto___44036,out))
;
return ((function (switch__28211__auto__,c__28276__auto___44036,out){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_44028 = [null,null,null,null,null,null,null,null,null];
(statearr_44028[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_44028[(1)] = (1));

return statearr_44028;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_44011){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_44011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e44029){if((e44029 instanceof Object)){
var ex__28215__auto__ = e44029;
var statearr_44030_44047 = state_44011;
(statearr_44030_44047[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44029;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44048 = state_44011;
state_44011 = G__44048;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_44011){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_44011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___44036,out))
})();
var state__28278__auto__ = (function (){var statearr_44031 = f__28277__auto__.call(null);
(statearr_44031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___44036);

return statearr_44031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___44036,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args44049 = [];
var len__26171__auto___44052 = arguments.length;
var i__26172__auto___44053 = (0);
while(true){
if((i__26172__auto___44053 < len__26171__auto___44052)){
args44049.push((arguments[i__26172__auto___44053]));

var G__44054 = (i__26172__auto___44053 + (1));
i__26172__auto___44053 = G__44054;
continue;
} else {
}
break;
}

var G__44051 = args44049.length;
switch (G__44051) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44049.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28276__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto__){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto__){
return (function (state_44221){
var state_val_44222 = (state_44221[(1)]);
if((state_val_44222 === (7))){
var inst_44217 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
var statearr_44223_44264 = state_44221__$1;
(statearr_44223_44264[(2)] = inst_44217);

(statearr_44223_44264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (20))){
var inst_44187 = (state_44221[(7)]);
var inst_44198 = (state_44221[(2)]);
var inst_44199 = cljs.core.next.call(null,inst_44187);
var inst_44173 = inst_44199;
var inst_44174 = null;
var inst_44175 = (0);
var inst_44176 = (0);
var state_44221__$1 = (function (){var statearr_44224 = state_44221;
(statearr_44224[(8)] = inst_44175);

(statearr_44224[(9)] = inst_44173);

(statearr_44224[(10)] = inst_44198);

(statearr_44224[(11)] = inst_44174);

(statearr_44224[(12)] = inst_44176);

return statearr_44224;
})();
var statearr_44225_44265 = state_44221__$1;
(statearr_44225_44265[(2)] = null);

(statearr_44225_44265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (1))){
var state_44221__$1 = state_44221;
var statearr_44226_44266 = state_44221__$1;
(statearr_44226_44266[(2)] = null);

(statearr_44226_44266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (4))){
var inst_44162 = (state_44221[(13)]);
var inst_44162__$1 = (state_44221[(2)]);
var inst_44163 = (inst_44162__$1 == null);
var state_44221__$1 = (function (){var statearr_44227 = state_44221;
(statearr_44227[(13)] = inst_44162__$1);

return statearr_44227;
})();
if(cljs.core.truth_(inst_44163)){
var statearr_44228_44267 = state_44221__$1;
(statearr_44228_44267[(1)] = (5));

} else {
var statearr_44229_44268 = state_44221__$1;
(statearr_44229_44268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (15))){
var state_44221__$1 = state_44221;
var statearr_44233_44269 = state_44221__$1;
(statearr_44233_44269[(2)] = null);

(statearr_44233_44269[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (21))){
var state_44221__$1 = state_44221;
var statearr_44234_44270 = state_44221__$1;
(statearr_44234_44270[(2)] = null);

(statearr_44234_44270[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (13))){
var inst_44175 = (state_44221[(8)]);
var inst_44173 = (state_44221[(9)]);
var inst_44174 = (state_44221[(11)]);
var inst_44176 = (state_44221[(12)]);
var inst_44183 = (state_44221[(2)]);
var inst_44184 = (inst_44176 + (1));
var tmp44230 = inst_44175;
var tmp44231 = inst_44173;
var tmp44232 = inst_44174;
var inst_44173__$1 = tmp44231;
var inst_44174__$1 = tmp44232;
var inst_44175__$1 = tmp44230;
var inst_44176__$1 = inst_44184;
var state_44221__$1 = (function (){var statearr_44235 = state_44221;
(statearr_44235[(8)] = inst_44175__$1);

(statearr_44235[(9)] = inst_44173__$1);

(statearr_44235[(14)] = inst_44183);

(statearr_44235[(11)] = inst_44174__$1);

(statearr_44235[(12)] = inst_44176__$1);

return statearr_44235;
})();
var statearr_44236_44271 = state_44221__$1;
(statearr_44236_44271[(2)] = null);

(statearr_44236_44271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (22))){
var state_44221__$1 = state_44221;
var statearr_44237_44272 = state_44221__$1;
(statearr_44237_44272[(2)] = null);

(statearr_44237_44272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (6))){
var inst_44162 = (state_44221[(13)]);
var inst_44171 = f.call(null,inst_44162);
var inst_44172 = cljs.core.seq.call(null,inst_44171);
var inst_44173 = inst_44172;
var inst_44174 = null;
var inst_44175 = (0);
var inst_44176 = (0);
var state_44221__$1 = (function (){var statearr_44238 = state_44221;
(statearr_44238[(8)] = inst_44175);

(statearr_44238[(9)] = inst_44173);

(statearr_44238[(11)] = inst_44174);

(statearr_44238[(12)] = inst_44176);

return statearr_44238;
})();
var statearr_44239_44273 = state_44221__$1;
(statearr_44239_44273[(2)] = null);

(statearr_44239_44273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (17))){
var inst_44187 = (state_44221[(7)]);
var inst_44191 = cljs.core.chunk_first.call(null,inst_44187);
var inst_44192 = cljs.core.chunk_rest.call(null,inst_44187);
var inst_44193 = cljs.core.count.call(null,inst_44191);
var inst_44173 = inst_44192;
var inst_44174 = inst_44191;
var inst_44175 = inst_44193;
var inst_44176 = (0);
var state_44221__$1 = (function (){var statearr_44240 = state_44221;
(statearr_44240[(8)] = inst_44175);

(statearr_44240[(9)] = inst_44173);

(statearr_44240[(11)] = inst_44174);

(statearr_44240[(12)] = inst_44176);

return statearr_44240;
})();
var statearr_44241_44274 = state_44221__$1;
(statearr_44241_44274[(2)] = null);

(statearr_44241_44274[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (3))){
var inst_44219 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44221__$1,inst_44219);
} else {
if((state_val_44222 === (12))){
var inst_44207 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
var statearr_44242_44275 = state_44221__$1;
(statearr_44242_44275[(2)] = inst_44207);

(statearr_44242_44275[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (2))){
var state_44221__$1 = state_44221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44221__$1,(4),in$);
} else {
if((state_val_44222 === (23))){
var inst_44215 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
var statearr_44243_44276 = state_44221__$1;
(statearr_44243_44276[(2)] = inst_44215);

(statearr_44243_44276[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (19))){
var inst_44202 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
var statearr_44244_44277 = state_44221__$1;
(statearr_44244_44277[(2)] = inst_44202);

(statearr_44244_44277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (11))){
var inst_44173 = (state_44221[(9)]);
var inst_44187 = (state_44221[(7)]);
var inst_44187__$1 = cljs.core.seq.call(null,inst_44173);
var state_44221__$1 = (function (){var statearr_44245 = state_44221;
(statearr_44245[(7)] = inst_44187__$1);

return statearr_44245;
})();
if(inst_44187__$1){
var statearr_44246_44278 = state_44221__$1;
(statearr_44246_44278[(1)] = (14));

} else {
var statearr_44247_44279 = state_44221__$1;
(statearr_44247_44279[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (9))){
var inst_44209 = (state_44221[(2)]);
var inst_44210 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44221__$1 = (function (){var statearr_44248 = state_44221;
(statearr_44248[(15)] = inst_44209);

return statearr_44248;
})();
if(cljs.core.truth_(inst_44210)){
var statearr_44249_44280 = state_44221__$1;
(statearr_44249_44280[(1)] = (21));

} else {
var statearr_44250_44281 = state_44221__$1;
(statearr_44250_44281[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (5))){
var inst_44165 = cljs.core.async.close_BANG_.call(null,out);
var state_44221__$1 = state_44221;
var statearr_44251_44282 = state_44221__$1;
(statearr_44251_44282[(2)] = inst_44165);

(statearr_44251_44282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (14))){
var inst_44187 = (state_44221[(7)]);
var inst_44189 = cljs.core.chunked_seq_QMARK_.call(null,inst_44187);
var state_44221__$1 = state_44221;
if(inst_44189){
var statearr_44252_44283 = state_44221__$1;
(statearr_44252_44283[(1)] = (17));

} else {
var statearr_44253_44284 = state_44221__$1;
(statearr_44253_44284[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (16))){
var inst_44205 = (state_44221[(2)]);
var state_44221__$1 = state_44221;
var statearr_44254_44285 = state_44221__$1;
(statearr_44254_44285[(2)] = inst_44205);

(statearr_44254_44285[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44222 === (10))){
var inst_44174 = (state_44221[(11)]);
var inst_44176 = (state_44221[(12)]);
var inst_44181 = cljs.core._nth.call(null,inst_44174,inst_44176);
var state_44221__$1 = state_44221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44221__$1,(13),out,inst_44181);
} else {
if((state_val_44222 === (18))){
var inst_44187 = (state_44221[(7)]);
var inst_44196 = cljs.core.first.call(null,inst_44187);
var state_44221__$1 = state_44221;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44221__$1,(20),out,inst_44196);
} else {
if((state_val_44222 === (8))){
var inst_44175 = (state_44221[(8)]);
var inst_44176 = (state_44221[(12)]);
var inst_44178 = (inst_44176 < inst_44175);
var inst_44179 = inst_44178;
var state_44221__$1 = state_44221;
if(cljs.core.truth_(inst_44179)){
var statearr_44255_44286 = state_44221__$1;
(statearr_44255_44286[(1)] = (10));

} else {
var statearr_44256_44287 = state_44221__$1;
(statearr_44256_44287[(1)] = (11));

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
});})(c__28276__auto__))
;
return ((function (switch__28211__auto__,c__28276__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28212__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28212__auto____0 = (function (){
var statearr_44260 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44260[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28212__auto__);

(statearr_44260[(1)] = (1));

return statearr_44260;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28212__auto____1 = (function (state_44221){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_44221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e44261){if((e44261 instanceof Object)){
var ex__28215__auto__ = e44261;
var statearr_44262_44288 = state_44221;
(statearr_44262_44288[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44289 = state_44221;
state_44221 = G__44289;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28212__auto__ = function(state_44221){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28212__auto____1.call(this,state_44221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28212__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28212__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto__))
})();
var state__28278__auto__ = (function (){var statearr_44263 = f__28277__auto__.call(null);
(statearr_44263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto__);

return statearr_44263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto__))
);

return c__28276__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args44290 = [];
var len__26171__auto___44293 = arguments.length;
var i__26172__auto___44294 = (0);
while(true){
if((i__26172__auto___44294 < len__26171__auto___44293)){
args44290.push((arguments[i__26172__auto___44294]));

var G__44295 = (i__26172__auto___44294 + (1));
i__26172__auto___44294 = G__44295;
continue;
} else {
}
break;
}

var G__44292 = args44290.length;
switch (G__44292) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44290.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args44297 = [];
var len__26171__auto___44300 = arguments.length;
var i__26172__auto___44301 = (0);
while(true){
if((i__26172__auto___44301 < len__26171__auto___44300)){
args44297.push((arguments[i__26172__auto___44301]));

var G__44302 = (i__26172__auto___44301 + (1));
i__26172__auto___44301 = G__44302;
continue;
} else {
}
break;
}

var G__44299 = args44297.length;
switch (G__44299) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44297.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args44304 = [];
var len__26171__auto___44355 = arguments.length;
var i__26172__auto___44356 = (0);
while(true){
if((i__26172__auto___44356 < len__26171__auto___44355)){
args44304.push((arguments[i__26172__auto___44356]));

var G__44357 = (i__26172__auto___44356 + (1));
i__26172__auto___44356 = G__44357;
continue;
} else {
}
break;
}

var G__44306 = args44304.length;
switch (G__44306) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44304.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28276__auto___44359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___44359,out){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___44359,out){
return (function (state_44330){
var state_val_44331 = (state_44330[(1)]);
if((state_val_44331 === (7))){
var inst_44325 = (state_44330[(2)]);
var state_44330__$1 = state_44330;
var statearr_44332_44360 = state_44330__$1;
(statearr_44332_44360[(2)] = inst_44325);

(statearr_44332_44360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44331 === (1))){
var inst_44307 = null;
var state_44330__$1 = (function (){var statearr_44333 = state_44330;
(statearr_44333[(7)] = inst_44307);

return statearr_44333;
})();
var statearr_44334_44361 = state_44330__$1;
(statearr_44334_44361[(2)] = null);

(statearr_44334_44361[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44331 === (4))){
var inst_44310 = (state_44330[(8)]);
var inst_44310__$1 = (state_44330[(2)]);
var inst_44311 = (inst_44310__$1 == null);
var inst_44312 = cljs.core.not.call(null,inst_44311);
var state_44330__$1 = (function (){var statearr_44335 = state_44330;
(statearr_44335[(8)] = inst_44310__$1);

return statearr_44335;
})();
if(inst_44312){
var statearr_44336_44362 = state_44330__$1;
(statearr_44336_44362[(1)] = (5));

} else {
var statearr_44337_44363 = state_44330__$1;
(statearr_44337_44363[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44331 === (6))){
var state_44330__$1 = state_44330;
var statearr_44338_44364 = state_44330__$1;
(statearr_44338_44364[(2)] = null);

(statearr_44338_44364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44331 === (3))){
var inst_44327 = (state_44330[(2)]);
var inst_44328 = cljs.core.async.close_BANG_.call(null,out);
var state_44330__$1 = (function (){var statearr_44339 = state_44330;
(statearr_44339[(9)] = inst_44327);

return statearr_44339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44330__$1,inst_44328);
} else {
if((state_val_44331 === (2))){
var state_44330__$1 = state_44330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44330__$1,(4),ch);
} else {
if((state_val_44331 === (11))){
var inst_44310 = (state_44330[(8)]);
var inst_44319 = (state_44330[(2)]);
var inst_44307 = inst_44310;
var state_44330__$1 = (function (){var statearr_44340 = state_44330;
(statearr_44340[(10)] = inst_44319);

(statearr_44340[(7)] = inst_44307);

return statearr_44340;
})();
var statearr_44341_44365 = state_44330__$1;
(statearr_44341_44365[(2)] = null);

(statearr_44341_44365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44331 === (9))){
var inst_44310 = (state_44330[(8)]);
var state_44330__$1 = state_44330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44330__$1,(11),out,inst_44310);
} else {
if((state_val_44331 === (5))){
var inst_44307 = (state_44330[(7)]);
var inst_44310 = (state_44330[(8)]);
var inst_44314 = cljs.core._EQ_.call(null,inst_44310,inst_44307);
var state_44330__$1 = state_44330;
if(inst_44314){
var statearr_44343_44366 = state_44330__$1;
(statearr_44343_44366[(1)] = (8));

} else {
var statearr_44344_44367 = state_44330__$1;
(statearr_44344_44367[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44331 === (10))){
var inst_44322 = (state_44330[(2)]);
var state_44330__$1 = state_44330;
var statearr_44345_44368 = state_44330__$1;
(statearr_44345_44368[(2)] = inst_44322);

(statearr_44345_44368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44331 === (8))){
var inst_44307 = (state_44330[(7)]);
var tmp44342 = inst_44307;
var inst_44307__$1 = tmp44342;
var state_44330__$1 = (function (){var statearr_44346 = state_44330;
(statearr_44346[(7)] = inst_44307__$1);

return statearr_44346;
})();
var statearr_44347_44369 = state_44330__$1;
(statearr_44347_44369[(2)] = null);

(statearr_44347_44369[(1)] = (2));


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
});})(c__28276__auto___44359,out))
;
return ((function (switch__28211__auto__,c__28276__auto___44359,out){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_44351 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44351[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_44351[(1)] = (1));

return statearr_44351;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_44330){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_44330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e44352){if((e44352 instanceof Object)){
var ex__28215__auto__ = e44352;
var statearr_44353_44370 = state_44330;
(statearr_44353_44370[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44330);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44371 = state_44330;
state_44330 = G__44371;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_44330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_44330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___44359,out))
})();
var state__28278__auto__ = (function (){var statearr_44354 = f__28277__auto__.call(null);
(statearr_44354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___44359);

return statearr_44354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___44359,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args44372 = [];
var len__26171__auto___44442 = arguments.length;
var i__26172__auto___44443 = (0);
while(true){
if((i__26172__auto___44443 < len__26171__auto___44442)){
args44372.push((arguments[i__26172__auto___44443]));

var G__44444 = (i__26172__auto___44443 + (1));
i__26172__auto___44443 = G__44444;
continue;
} else {
}
break;
}

var G__44374 = args44372.length;
switch (G__44374) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44372.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28276__auto___44446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___44446,out){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___44446,out){
return (function (state_44412){
var state_val_44413 = (state_44412[(1)]);
if((state_val_44413 === (7))){
var inst_44408 = (state_44412[(2)]);
var state_44412__$1 = state_44412;
var statearr_44414_44447 = state_44412__$1;
(statearr_44414_44447[(2)] = inst_44408);

(statearr_44414_44447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (1))){
var inst_44375 = (new Array(n));
var inst_44376 = inst_44375;
var inst_44377 = (0);
var state_44412__$1 = (function (){var statearr_44415 = state_44412;
(statearr_44415[(7)] = inst_44376);

(statearr_44415[(8)] = inst_44377);

return statearr_44415;
})();
var statearr_44416_44448 = state_44412__$1;
(statearr_44416_44448[(2)] = null);

(statearr_44416_44448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (4))){
var inst_44380 = (state_44412[(9)]);
var inst_44380__$1 = (state_44412[(2)]);
var inst_44381 = (inst_44380__$1 == null);
var inst_44382 = cljs.core.not.call(null,inst_44381);
var state_44412__$1 = (function (){var statearr_44417 = state_44412;
(statearr_44417[(9)] = inst_44380__$1);

return statearr_44417;
})();
if(inst_44382){
var statearr_44418_44449 = state_44412__$1;
(statearr_44418_44449[(1)] = (5));

} else {
var statearr_44419_44450 = state_44412__$1;
(statearr_44419_44450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (15))){
var inst_44402 = (state_44412[(2)]);
var state_44412__$1 = state_44412;
var statearr_44420_44451 = state_44412__$1;
(statearr_44420_44451[(2)] = inst_44402);

(statearr_44420_44451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (13))){
var state_44412__$1 = state_44412;
var statearr_44421_44452 = state_44412__$1;
(statearr_44421_44452[(2)] = null);

(statearr_44421_44452[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (6))){
var inst_44377 = (state_44412[(8)]);
var inst_44398 = (inst_44377 > (0));
var state_44412__$1 = state_44412;
if(cljs.core.truth_(inst_44398)){
var statearr_44422_44453 = state_44412__$1;
(statearr_44422_44453[(1)] = (12));

} else {
var statearr_44423_44454 = state_44412__$1;
(statearr_44423_44454[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (3))){
var inst_44410 = (state_44412[(2)]);
var state_44412__$1 = state_44412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44412__$1,inst_44410);
} else {
if((state_val_44413 === (12))){
var inst_44376 = (state_44412[(7)]);
var inst_44400 = cljs.core.vec.call(null,inst_44376);
var state_44412__$1 = state_44412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44412__$1,(15),out,inst_44400);
} else {
if((state_val_44413 === (2))){
var state_44412__$1 = state_44412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44412__$1,(4),ch);
} else {
if((state_val_44413 === (11))){
var inst_44392 = (state_44412[(2)]);
var inst_44393 = (new Array(n));
var inst_44376 = inst_44393;
var inst_44377 = (0);
var state_44412__$1 = (function (){var statearr_44424 = state_44412;
(statearr_44424[(10)] = inst_44392);

(statearr_44424[(7)] = inst_44376);

(statearr_44424[(8)] = inst_44377);

return statearr_44424;
})();
var statearr_44425_44455 = state_44412__$1;
(statearr_44425_44455[(2)] = null);

(statearr_44425_44455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (9))){
var inst_44376 = (state_44412[(7)]);
var inst_44390 = cljs.core.vec.call(null,inst_44376);
var state_44412__$1 = state_44412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44412__$1,(11),out,inst_44390);
} else {
if((state_val_44413 === (5))){
var inst_44376 = (state_44412[(7)]);
var inst_44377 = (state_44412[(8)]);
var inst_44380 = (state_44412[(9)]);
var inst_44385 = (state_44412[(11)]);
var inst_44384 = (inst_44376[inst_44377] = inst_44380);
var inst_44385__$1 = (inst_44377 + (1));
var inst_44386 = (inst_44385__$1 < n);
var state_44412__$1 = (function (){var statearr_44426 = state_44412;
(statearr_44426[(12)] = inst_44384);

(statearr_44426[(11)] = inst_44385__$1);

return statearr_44426;
})();
if(cljs.core.truth_(inst_44386)){
var statearr_44427_44456 = state_44412__$1;
(statearr_44427_44456[(1)] = (8));

} else {
var statearr_44428_44457 = state_44412__$1;
(statearr_44428_44457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (14))){
var inst_44405 = (state_44412[(2)]);
var inst_44406 = cljs.core.async.close_BANG_.call(null,out);
var state_44412__$1 = (function (){var statearr_44430 = state_44412;
(statearr_44430[(13)] = inst_44405);

return statearr_44430;
})();
var statearr_44431_44458 = state_44412__$1;
(statearr_44431_44458[(2)] = inst_44406);

(statearr_44431_44458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (10))){
var inst_44396 = (state_44412[(2)]);
var state_44412__$1 = state_44412;
var statearr_44432_44459 = state_44412__$1;
(statearr_44432_44459[(2)] = inst_44396);

(statearr_44432_44459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44413 === (8))){
var inst_44376 = (state_44412[(7)]);
var inst_44385 = (state_44412[(11)]);
var tmp44429 = inst_44376;
var inst_44376__$1 = tmp44429;
var inst_44377 = inst_44385;
var state_44412__$1 = (function (){var statearr_44433 = state_44412;
(statearr_44433[(7)] = inst_44376__$1);

(statearr_44433[(8)] = inst_44377);

return statearr_44433;
})();
var statearr_44434_44460 = state_44412__$1;
(statearr_44434_44460[(2)] = null);

(statearr_44434_44460[(1)] = (2));


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
});})(c__28276__auto___44446,out))
;
return ((function (switch__28211__auto__,c__28276__auto___44446,out){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_44438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44438[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_44438[(1)] = (1));

return statearr_44438;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_44412){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_44412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e44439){if((e44439 instanceof Object)){
var ex__28215__auto__ = e44439;
var statearr_44440_44461 = state_44412;
(statearr_44440_44461[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44462 = state_44412;
state_44412 = G__44462;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_44412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_44412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___44446,out))
})();
var state__28278__auto__ = (function (){var statearr_44441 = f__28277__auto__.call(null);
(statearr_44441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___44446);

return statearr_44441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___44446,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args44463 = [];
var len__26171__auto___44537 = arguments.length;
var i__26172__auto___44538 = (0);
while(true){
if((i__26172__auto___44538 < len__26171__auto___44537)){
args44463.push((arguments[i__26172__auto___44538]));

var G__44539 = (i__26172__auto___44538 + (1));
i__26172__auto___44538 = G__44539;
continue;
} else {
}
break;
}

var G__44465 = args44463.length;
switch (G__44465) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44463.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__28276__auto___44541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28276__auto___44541,out){
return (function (){
var f__28277__auto__ = (function (){var switch__28211__auto__ = ((function (c__28276__auto___44541,out){
return (function (state_44507){
var state_val_44508 = (state_44507[(1)]);
if((state_val_44508 === (7))){
var inst_44503 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44509_44542 = state_44507__$1;
(statearr_44509_44542[(2)] = inst_44503);

(statearr_44509_44542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (1))){
var inst_44466 = [];
var inst_44467 = inst_44466;
var inst_44468 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44507__$1 = (function (){var statearr_44510 = state_44507;
(statearr_44510[(7)] = inst_44467);

(statearr_44510[(8)] = inst_44468);

return statearr_44510;
})();
var statearr_44511_44543 = state_44507__$1;
(statearr_44511_44543[(2)] = null);

(statearr_44511_44543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (4))){
var inst_44471 = (state_44507[(9)]);
var inst_44471__$1 = (state_44507[(2)]);
var inst_44472 = (inst_44471__$1 == null);
var inst_44473 = cljs.core.not.call(null,inst_44472);
var state_44507__$1 = (function (){var statearr_44512 = state_44507;
(statearr_44512[(9)] = inst_44471__$1);

return statearr_44512;
})();
if(inst_44473){
var statearr_44513_44544 = state_44507__$1;
(statearr_44513_44544[(1)] = (5));

} else {
var statearr_44514_44545 = state_44507__$1;
(statearr_44514_44545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (15))){
var inst_44497 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44515_44546 = state_44507__$1;
(statearr_44515_44546[(2)] = inst_44497);

(statearr_44515_44546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (13))){
var state_44507__$1 = state_44507;
var statearr_44516_44547 = state_44507__$1;
(statearr_44516_44547[(2)] = null);

(statearr_44516_44547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (6))){
var inst_44467 = (state_44507[(7)]);
var inst_44492 = inst_44467.length;
var inst_44493 = (inst_44492 > (0));
var state_44507__$1 = state_44507;
if(cljs.core.truth_(inst_44493)){
var statearr_44517_44548 = state_44507__$1;
(statearr_44517_44548[(1)] = (12));

} else {
var statearr_44518_44549 = state_44507__$1;
(statearr_44518_44549[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (3))){
var inst_44505 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44507__$1,inst_44505);
} else {
if((state_val_44508 === (12))){
var inst_44467 = (state_44507[(7)]);
var inst_44495 = cljs.core.vec.call(null,inst_44467);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44507__$1,(15),out,inst_44495);
} else {
if((state_val_44508 === (2))){
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44507__$1,(4),ch);
} else {
if((state_val_44508 === (11))){
var inst_44471 = (state_44507[(9)]);
var inst_44475 = (state_44507[(10)]);
var inst_44485 = (state_44507[(2)]);
var inst_44486 = [];
var inst_44487 = inst_44486.push(inst_44471);
var inst_44467 = inst_44486;
var inst_44468 = inst_44475;
var state_44507__$1 = (function (){var statearr_44519 = state_44507;
(statearr_44519[(11)] = inst_44487);

(statearr_44519[(7)] = inst_44467);

(statearr_44519[(12)] = inst_44485);

(statearr_44519[(8)] = inst_44468);

return statearr_44519;
})();
var statearr_44520_44550 = state_44507__$1;
(statearr_44520_44550[(2)] = null);

(statearr_44520_44550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (9))){
var inst_44467 = (state_44507[(7)]);
var inst_44483 = cljs.core.vec.call(null,inst_44467);
var state_44507__$1 = state_44507;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44507__$1,(11),out,inst_44483);
} else {
if((state_val_44508 === (5))){
var inst_44468 = (state_44507[(8)]);
var inst_44471 = (state_44507[(9)]);
var inst_44475 = (state_44507[(10)]);
var inst_44475__$1 = f.call(null,inst_44471);
var inst_44476 = cljs.core._EQ_.call(null,inst_44475__$1,inst_44468);
var inst_44477 = cljs.core.keyword_identical_QMARK_.call(null,inst_44468,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44478 = (inst_44476) || (inst_44477);
var state_44507__$1 = (function (){var statearr_44521 = state_44507;
(statearr_44521[(10)] = inst_44475__$1);

return statearr_44521;
})();
if(cljs.core.truth_(inst_44478)){
var statearr_44522_44551 = state_44507__$1;
(statearr_44522_44551[(1)] = (8));

} else {
var statearr_44523_44552 = state_44507__$1;
(statearr_44523_44552[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (14))){
var inst_44500 = (state_44507[(2)]);
var inst_44501 = cljs.core.async.close_BANG_.call(null,out);
var state_44507__$1 = (function (){var statearr_44525 = state_44507;
(statearr_44525[(13)] = inst_44500);

return statearr_44525;
})();
var statearr_44526_44553 = state_44507__$1;
(statearr_44526_44553[(2)] = inst_44501);

(statearr_44526_44553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (10))){
var inst_44490 = (state_44507[(2)]);
var state_44507__$1 = state_44507;
var statearr_44527_44554 = state_44507__$1;
(statearr_44527_44554[(2)] = inst_44490);

(statearr_44527_44554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44508 === (8))){
var inst_44467 = (state_44507[(7)]);
var inst_44471 = (state_44507[(9)]);
var inst_44475 = (state_44507[(10)]);
var inst_44480 = inst_44467.push(inst_44471);
var tmp44524 = inst_44467;
var inst_44467__$1 = tmp44524;
var inst_44468 = inst_44475;
var state_44507__$1 = (function (){var statearr_44528 = state_44507;
(statearr_44528[(7)] = inst_44467__$1);

(statearr_44528[(8)] = inst_44468);

(statearr_44528[(14)] = inst_44480);

return statearr_44528;
})();
var statearr_44529_44555 = state_44507__$1;
(statearr_44529_44555[(2)] = null);

(statearr_44529_44555[(1)] = (2));


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
});})(c__28276__auto___44541,out))
;
return ((function (switch__28211__auto__,c__28276__auto___44541,out){
return (function() {
var cljs$core$async$state_machine__28212__auto__ = null;
var cljs$core$async$state_machine__28212__auto____0 = (function (){
var statearr_44533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44533[(0)] = cljs$core$async$state_machine__28212__auto__);

(statearr_44533[(1)] = (1));

return statearr_44533;
});
var cljs$core$async$state_machine__28212__auto____1 = (function (state_44507){
while(true){
var ret_value__28213__auto__ = (function (){try{while(true){
var result__28214__auto__ = switch__28211__auto__.call(null,state_44507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28214__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28214__auto__;
}
break;
}
}catch (e44534){if((e44534 instanceof Object)){
var ex__28215__auto__ = e44534;
var statearr_44535_44556 = state_44507;
(statearr_44535_44556[(5)] = ex__28215__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28213__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44557 = state_44507;
state_44507 = G__44557;
continue;
} else {
return ret_value__28213__auto__;
}
break;
}
});
cljs$core$async$state_machine__28212__auto__ = function(state_44507){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28212__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28212__auto____1.call(this,state_44507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28212__auto____0;
cljs$core$async$state_machine__28212__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28212__auto____1;
return cljs$core$async$state_machine__28212__auto__;
})()
;})(switch__28211__auto__,c__28276__auto___44541,out))
})();
var state__28278__auto__ = (function (){var statearr_44536 = f__28277__auto__.call(null);
(statearr_44536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28276__auto___44541);

return statearr_44536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28278__auto__);
});})(c__28276__auto___44541,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1503909841639