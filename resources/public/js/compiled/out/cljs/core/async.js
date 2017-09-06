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
var args31035 = [];
var len__26171__auto___31041 = arguments.length;
var i__26172__auto___31042 = (0);
while(true){
if((i__26172__auto___31042 < len__26171__auto___31041)){
args31035.push((arguments[i__26172__auto___31042]));

var G__31043 = (i__26172__auto___31042 + (1));
i__26172__auto___31042 = G__31043;
continue;
} else {
}
break;
}

var G__31037 = args31035.length;
switch (G__31037) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31035.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async31038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31038 = (function (f,blockable,meta31039){
this.f = f;
this.blockable = blockable;
this.meta31039 = meta31039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31040,meta31039__$1){
var self__ = this;
var _31040__$1 = this;
return (new cljs.core.async.t_cljs$core$async31038(self__.f,self__.blockable,meta31039__$1));
});

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31040){
var self__ = this;
var _31040__$1 = this;
return self__.meta31039;
});

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31038.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31039","meta31039",-402019299,null)], null);
});

cljs.core.async.t_cljs$core$async31038.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31038";

cljs.core.async.t_cljs$core$async31038.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async31038");
});

cljs.core.async.__GT_t_cljs$core$async31038 = (function cljs$core$async$__GT_t_cljs$core$async31038(f__$1,blockable__$1,meta31039){
return (new cljs.core.async.t_cljs$core$async31038(f__$1,blockable__$1,meta31039));
});

}

return (new cljs.core.async.t_cljs$core$async31038(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args31047 = [];
var len__26171__auto___31050 = arguments.length;
var i__26172__auto___31051 = (0);
while(true){
if((i__26172__auto___31051 < len__26171__auto___31050)){
args31047.push((arguments[i__26172__auto___31051]));

var G__31052 = (i__26172__auto___31051 + (1));
i__26172__auto___31051 = G__31052;
continue;
} else {
}
break;
}

var G__31049 = args31047.length;
switch (G__31049) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31047.length)].join('')));

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
var args31054 = [];
var len__26171__auto___31057 = arguments.length;
var i__26172__auto___31058 = (0);
while(true){
if((i__26172__auto___31058 < len__26171__auto___31057)){
args31054.push((arguments[i__26172__auto___31058]));

var G__31059 = (i__26172__auto___31058 + (1));
i__26172__auto___31058 = G__31059;
continue;
} else {
}
break;
}

var G__31056 = args31054.length;
switch (G__31056) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31054.length)].join('')));

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
var args31061 = [];
var len__26171__auto___31064 = arguments.length;
var i__26172__auto___31065 = (0);
while(true){
if((i__26172__auto___31065 < len__26171__auto___31064)){
args31061.push((arguments[i__26172__auto___31065]));

var G__31066 = (i__26172__auto___31065 + (1));
i__26172__auto___31065 = G__31066;
continue;
} else {
}
break;
}

var G__31063 = args31061.length;
switch (G__31063) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31061.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_31068 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_31068);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_31068,ret){
return (function (){
return fn1.call(null,val_31068);
});})(val_31068,ret))
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
var args31069 = [];
var len__26171__auto___31072 = arguments.length;
var i__26172__auto___31073 = (0);
while(true){
if((i__26172__auto___31073 < len__26171__auto___31072)){
args31069.push((arguments[i__26172__auto___31073]));

var G__31074 = (i__26172__auto___31073 + (1));
i__26172__auto___31073 = G__31074;
continue;
} else {
}
break;
}

var G__31071 = args31069.length;
switch (G__31071) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31069.length)].join('')));

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
var n__26011__auto___31076 = n;
var x_31077 = (0);
while(true){
if((x_31077 < n__26011__auto___31076)){
(a[x_31077] = (0));

var G__31078 = (x_31077 + (1));
x_31077 = G__31078;
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

var G__31079 = (i + (1));
i = G__31079;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async31083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31083 = (function (alt_flag,flag,meta31084){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta31084 = meta31084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31085,meta31084__$1){
var self__ = this;
var _31085__$1 = this;
return (new cljs.core.async.t_cljs$core$async31083(self__.alt_flag,self__.flag,meta31084__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31085){
var self__ = this;
var _31085__$1 = this;
return self__.meta31084;
});})(flag))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31083.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31084","meta31084",-1471794875,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31083";

cljs.core.async.t_cljs$core$async31083.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async31083");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async31083 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31083(alt_flag__$1,flag__$1,meta31084){
return (new cljs.core.async.t_cljs$core$async31083(alt_flag__$1,flag__$1,meta31084));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31083(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async31089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31089 = (function (alt_handler,flag,cb,meta31090){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta31090 = meta31090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31091,meta31090__$1){
var self__ = this;
var _31091__$1 = this;
return (new cljs.core.async.t_cljs$core$async31089(self__.alt_handler,self__.flag,self__.cb,meta31090__$1));
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31091){
var self__ = this;
var _31091__$1 = this;
return self__.meta31090;
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31090","meta31090",578862395,null)], null);
});

cljs.core.async.t_cljs$core$async31089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31089";

cljs.core.async.t_cljs$core$async31089.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async31089");
});

cljs.core.async.__GT_t_cljs$core$async31089 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31089(alt_handler__$1,flag__$1,cb__$1,meta31090){
return (new cljs.core.async.t_cljs$core$async31089(alt_handler__$1,flag__$1,cb__$1,meta31090));
});

}

return (new cljs.core.async.t_cljs$core$async31089(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__31092_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31092_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31093_SHARP_,port], null));
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
var G__31094 = (i + (1));
i = G__31094;
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
var len__26171__auto___31100 = arguments.length;
var i__26172__auto___31101 = (0);
while(true){
if((i__26172__auto___31101 < len__26171__auto___31100)){
args__26178__auto__.push((arguments[i__26172__auto___31101]));

var G__31102 = (i__26172__auto___31101 + (1));
i__26172__auto___31101 = G__31102;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((1) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26179__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31097){
var map__31098 = p__31097;
var map__31098__$1 = ((((!((map__31098 == null)))?((((map__31098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31098):map__31098);
var opts = map__31098__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31095){
var G__31096 = cljs.core.first.call(null,seq31095);
var seq31095__$1 = cljs.core.next.call(null,seq31095);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31096,seq31095__$1);
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
var args31103 = [];
var len__26171__auto___31153 = arguments.length;
var i__26172__auto___31154 = (0);
while(true){
if((i__26172__auto___31154 < len__26171__auto___31153)){
args31103.push((arguments[i__26172__auto___31154]));

var G__31155 = (i__26172__auto___31154 + (1));
i__26172__auto___31154 = G__31155;
continue;
} else {
}
break;
}

var G__31105 = args31103.length;
switch (G__31105) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31103.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30990__auto___31157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___31157){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___31157){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (7))){
var inst_31125 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31131_31158 = state_31129__$1;
(statearr_31131_31158[(2)] = inst_31125);

(statearr_31131_31158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (1))){
var state_31129__$1 = state_31129;
var statearr_31132_31159 = state_31129__$1;
(statearr_31132_31159[(2)] = null);

(statearr_31132_31159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (4))){
var inst_31108 = (state_31129[(7)]);
var inst_31108__$1 = (state_31129[(2)]);
var inst_31109 = (inst_31108__$1 == null);
var state_31129__$1 = (function (){var statearr_31133 = state_31129;
(statearr_31133[(7)] = inst_31108__$1);

return statearr_31133;
})();
if(cljs.core.truth_(inst_31109)){
var statearr_31134_31160 = state_31129__$1;
(statearr_31134_31160[(1)] = (5));

} else {
var statearr_31135_31161 = state_31129__$1;
(statearr_31135_31161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (13))){
var state_31129__$1 = state_31129;
var statearr_31136_31162 = state_31129__$1;
(statearr_31136_31162[(2)] = null);

(statearr_31136_31162[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (6))){
var inst_31108 = (state_31129[(7)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31129__$1,(11),to,inst_31108);
} else {
if((state_val_31130 === (3))){
var inst_31127 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else {
if((state_val_31130 === (12))){
var state_31129__$1 = state_31129;
var statearr_31137_31163 = state_31129__$1;
(statearr_31137_31163[(2)] = null);

(statearr_31137_31163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (2))){
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(4),from);
} else {
if((state_val_31130 === (11))){
var inst_31118 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_31118)){
var statearr_31138_31164 = state_31129__$1;
(statearr_31138_31164[(1)] = (12));

} else {
var statearr_31139_31165 = state_31129__$1;
(statearr_31139_31165[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (9))){
var state_31129__$1 = state_31129;
var statearr_31140_31166 = state_31129__$1;
(statearr_31140_31166[(2)] = null);

(statearr_31140_31166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (5))){
var state_31129__$1 = state_31129;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31141_31167 = state_31129__$1;
(statearr_31141_31167[(1)] = (8));

} else {
var statearr_31142_31168 = state_31129__$1;
(statearr_31142_31168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (14))){
var inst_31123 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31143_31169 = state_31129__$1;
(statearr_31143_31169[(2)] = inst_31123);

(statearr_31143_31169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (10))){
var inst_31115 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31144_31170 = state_31129__$1;
(statearr_31144_31170[(2)] = inst_31115);

(statearr_31144_31170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (8))){
var inst_31112 = cljs.core.async.close_BANG_.call(null,to);
var state_31129__$1 = state_31129;
var statearr_31145_31171 = state_31129__$1;
(statearr_31145_31171[(2)] = inst_31112);

(statearr_31145_31171[(1)] = (10));


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
});})(c__30990__auto___31157))
;
return ((function (switch__30878__auto__,c__30990__auto___31157){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_31149 = [null,null,null,null,null,null,null,null];
(statearr_31149[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_31149[(1)] = (1));

return statearr_31149;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_31129){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31150){if((e31150 instanceof Object)){
var ex__30882__auto__ = e31150;
var statearr_31151_31172 = state_31129;
(statearr_31151_31172[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31173 = state_31129;
state_31129 = G__31173;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___31157))
})();
var state__30992__auto__ = (function (){var statearr_31152 = f__30991__auto__.call(null);
(statearr_31152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___31157);

return statearr_31152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___31157))
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
return (function (p__31361){
var vec__31362 = p__31361;
var v = cljs.core.nth.call(null,vec__31362,(0),null);
var p = cljs.core.nth.call(null,vec__31362,(1),null);
var job = vec__31362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30990__auto___31548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___31548,res,vec__31362,v,p,job,jobs,results){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___31548,res,vec__31362,v,p,job,jobs,results){
return (function (state_31369){
var state_val_31370 = (state_31369[(1)]);
if((state_val_31370 === (1))){
var state_31369__$1 = state_31369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31369__$1,(2),res,v);
} else {
if((state_val_31370 === (2))){
var inst_31366 = (state_31369[(2)]);
var inst_31367 = cljs.core.async.close_BANG_.call(null,res);
var state_31369__$1 = (function (){var statearr_31371 = state_31369;
(statearr_31371[(7)] = inst_31366);

return statearr_31371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31369__$1,inst_31367);
} else {
return null;
}
}
});})(c__30990__auto___31548,res,vec__31362,v,p,job,jobs,results))
;
return ((function (switch__30878__auto__,c__30990__auto___31548,res,vec__31362,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31375 = [null,null,null,null,null,null,null,null];
(statearr_31375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31375[(1)] = (1));

return statearr_31375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31369){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31376){if((e31376 instanceof Object)){
var ex__30882__auto__ = e31376;
var statearr_31377_31549 = state_31369;
(statearr_31377_31549[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31550 = state_31369;
state_31369 = G__31550;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___31548,res,vec__31362,v,p,job,jobs,results))
})();
var state__30992__auto__ = (function (){var statearr_31378 = f__30991__auto__.call(null);
(statearr_31378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___31548);

return statearr_31378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___31548,res,vec__31362,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31379){
var vec__31380 = p__31379;
var v = cljs.core.nth.call(null,vec__31380,(0),null);
var p = cljs.core.nth.call(null,vec__31380,(1),null);
var job = vec__31380;
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
var n__26011__auto___31551 = n;
var __31552 = (0);
while(true){
if((__31552 < n__26011__auto___31551)){
var G__31383_31553 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__31383_31553) {
case "compute":
var c__30990__auto___31555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31552,c__30990__auto___31555,G__31383_31553,n__26011__auto___31551,jobs,results,process,async){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (__31552,c__30990__auto___31555,G__31383_31553,n__26011__auto___31551,jobs,results,process,async){
return (function (state_31396){
var state_val_31397 = (state_31396[(1)]);
if((state_val_31397 === (1))){
var state_31396__$1 = state_31396;
var statearr_31398_31556 = state_31396__$1;
(statearr_31398_31556[(2)] = null);

(statearr_31398_31556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (2))){
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31396__$1,(4),jobs);
} else {
if((state_val_31397 === (3))){
var inst_31394 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31396__$1,inst_31394);
} else {
if((state_val_31397 === (4))){
var inst_31386 = (state_31396[(2)]);
var inst_31387 = process.call(null,inst_31386);
var state_31396__$1 = state_31396;
if(cljs.core.truth_(inst_31387)){
var statearr_31399_31557 = state_31396__$1;
(statearr_31399_31557[(1)] = (5));

} else {
var statearr_31400_31558 = state_31396__$1;
(statearr_31400_31558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (5))){
var state_31396__$1 = state_31396;
var statearr_31401_31559 = state_31396__$1;
(statearr_31401_31559[(2)] = null);

(statearr_31401_31559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (6))){
var state_31396__$1 = state_31396;
var statearr_31402_31560 = state_31396__$1;
(statearr_31402_31560[(2)] = null);

(statearr_31402_31560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31397 === (7))){
var inst_31392 = (state_31396[(2)]);
var state_31396__$1 = state_31396;
var statearr_31403_31561 = state_31396__$1;
(statearr_31403_31561[(2)] = inst_31392);

(statearr_31403_31561[(1)] = (3));


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
});})(__31552,c__30990__auto___31555,G__31383_31553,n__26011__auto___31551,jobs,results,process,async))
;
return ((function (__31552,switch__30878__auto__,c__30990__auto___31555,G__31383_31553,n__26011__auto___31551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31407 = [null,null,null,null,null,null,null];
(statearr_31407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31407[(1)] = (1));

return statearr_31407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31396){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31408){if((e31408 instanceof Object)){
var ex__30882__auto__ = e31408;
var statearr_31409_31562 = state_31396;
(statearr_31409_31562[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31563 = state_31396;
state_31396 = G__31563;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
;})(__31552,switch__30878__auto__,c__30990__auto___31555,G__31383_31553,n__26011__auto___31551,jobs,results,process,async))
})();
var state__30992__auto__ = (function (){var statearr_31410 = f__30991__auto__.call(null);
(statearr_31410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___31555);

return statearr_31410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(__31552,c__30990__auto___31555,G__31383_31553,n__26011__auto___31551,jobs,results,process,async))
);


break;
case "async":
var c__30990__auto___31564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__31552,c__30990__auto___31564,G__31383_31553,n__26011__auto___31551,jobs,results,process,async){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (__31552,c__30990__auto___31564,G__31383_31553,n__26011__auto___31551,jobs,results,process,async){
return (function (state_31423){
var state_val_31424 = (state_31423[(1)]);
if((state_val_31424 === (1))){
var state_31423__$1 = state_31423;
var statearr_31425_31565 = state_31423__$1;
(statearr_31425_31565[(2)] = null);

(statearr_31425_31565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (2))){
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31423__$1,(4),jobs);
} else {
if((state_val_31424 === (3))){
var inst_31421 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31423__$1,inst_31421);
} else {
if((state_val_31424 === (4))){
var inst_31413 = (state_31423[(2)]);
var inst_31414 = async.call(null,inst_31413);
var state_31423__$1 = state_31423;
if(cljs.core.truth_(inst_31414)){
var statearr_31426_31566 = state_31423__$1;
(statearr_31426_31566[(1)] = (5));

} else {
var statearr_31427_31567 = state_31423__$1;
(statearr_31427_31567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (5))){
var state_31423__$1 = state_31423;
var statearr_31428_31568 = state_31423__$1;
(statearr_31428_31568[(2)] = null);

(statearr_31428_31568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (6))){
var state_31423__$1 = state_31423;
var statearr_31429_31569 = state_31423__$1;
(statearr_31429_31569[(2)] = null);

(statearr_31429_31569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31424 === (7))){
var inst_31419 = (state_31423[(2)]);
var state_31423__$1 = state_31423;
var statearr_31430_31570 = state_31423__$1;
(statearr_31430_31570[(2)] = inst_31419);

(statearr_31430_31570[(1)] = (3));


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
});})(__31552,c__30990__auto___31564,G__31383_31553,n__26011__auto___31551,jobs,results,process,async))
;
return ((function (__31552,switch__30878__auto__,c__30990__auto___31564,G__31383_31553,n__26011__auto___31551,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31434 = [null,null,null,null,null,null,null];
(statearr_31434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31434[(1)] = (1));

return statearr_31434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31423){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31435){if((e31435 instanceof Object)){
var ex__30882__auto__ = e31435;
var statearr_31436_31571 = state_31423;
(statearr_31436_31571[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31572 = state_31423;
state_31423 = G__31572;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31423){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
;})(__31552,switch__30878__auto__,c__30990__auto___31564,G__31383_31553,n__26011__auto___31551,jobs,results,process,async))
})();
var state__30992__auto__ = (function (){var statearr_31437 = f__30991__auto__.call(null);
(statearr_31437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___31564);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(__31552,c__30990__auto___31564,G__31383_31553,n__26011__auto___31551,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__31573 = (__31552 + (1));
__31552 = G__31573;
continue;
} else {
}
break;
}

var c__30990__auto___31574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___31574,jobs,results,process,async){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___31574,jobs,results,process,async){
return (function (state_31459){
var state_val_31460 = (state_31459[(1)]);
if((state_val_31460 === (1))){
var state_31459__$1 = state_31459;
var statearr_31461_31575 = state_31459__$1;
(statearr_31461_31575[(2)] = null);

(statearr_31461_31575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (2))){
var state_31459__$1 = state_31459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31459__$1,(4),from);
} else {
if((state_val_31460 === (3))){
var inst_31457 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31459__$1,inst_31457);
} else {
if((state_val_31460 === (4))){
var inst_31440 = (state_31459[(7)]);
var inst_31440__$1 = (state_31459[(2)]);
var inst_31441 = (inst_31440__$1 == null);
var state_31459__$1 = (function (){var statearr_31462 = state_31459;
(statearr_31462[(7)] = inst_31440__$1);

return statearr_31462;
})();
if(cljs.core.truth_(inst_31441)){
var statearr_31463_31576 = state_31459__$1;
(statearr_31463_31576[(1)] = (5));

} else {
var statearr_31464_31577 = state_31459__$1;
(statearr_31464_31577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (5))){
var inst_31443 = cljs.core.async.close_BANG_.call(null,jobs);
var state_31459__$1 = state_31459;
var statearr_31465_31578 = state_31459__$1;
(statearr_31465_31578[(2)] = inst_31443);

(statearr_31465_31578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (6))){
var inst_31440 = (state_31459[(7)]);
var inst_31445 = (state_31459[(8)]);
var inst_31445__$1 = cljs.core.async.chan.call(null,(1));
var inst_31446 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31447 = [inst_31440,inst_31445__$1];
var inst_31448 = (new cljs.core.PersistentVector(null,2,(5),inst_31446,inst_31447,null));
var state_31459__$1 = (function (){var statearr_31466 = state_31459;
(statearr_31466[(8)] = inst_31445__$1);

return statearr_31466;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31459__$1,(8),jobs,inst_31448);
} else {
if((state_val_31460 === (7))){
var inst_31455 = (state_31459[(2)]);
var state_31459__$1 = state_31459;
var statearr_31467_31579 = state_31459__$1;
(statearr_31467_31579[(2)] = inst_31455);

(statearr_31467_31579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31460 === (8))){
var inst_31445 = (state_31459[(8)]);
var inst_31450 = (state_31459[(2)]);
var state_31459__$1 = (function (){var statearr_31468 = state_31459;
(statearr_31468[(9)] = inst_31450);

return statearr_31468;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31459__$1,(9),results,inst_31445);
} else {
if((state_val_31460 === (9))){
var inst_31452 = (state_31459[(2)]);
var state_31459__$1 = (function (){var statearr_31469 = state_31459;
(statearr_31469[(10)] = inst_31452);

return statearr_31469;
})();
var statearr_31470_31580 = state_31459__$1;
(statearr_31470_31580[(2)] = null);

(statearr_31470_31580[(1)] = (2));


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
});})(c__30990__auto___31574,jobs,results,process,async))
;
return ((function (switch__30878__auto__,c__30990__auto___31574,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31474 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31474[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31474[(1)] = (1));

return statearr_31474;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31459){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31475){if((e31475 instanceof Object)){
var ex__30882__auto__ = e31475;
var statearr_31476_31581 = state_31459;
(statearr_31476_31581[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31582 = state_31459;
state_31459 = G__31582;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31459){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___31574,jobs,results,process,async))
})();
var state__30992__auto__ = (function (){var statearr_31477 = f__30991__auto__.call(null);
(statearr_31477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___31574);

return statearr_31477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___31574,jobs,results,process,async))
);


var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__,jobs,results,process,async){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__,jobs,results,process,async){
return (function (state_31515){
var state_val_31516 = (state_31515[(1)]);
if((state_val_31516 === (7))){
var inst_31511 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31517_31583 = state_31515__$1;
(statearr_31517_31583[(2)] = inst_31511);

(statearr_31517_31583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (20))){
var state_31515__$1 = state_31515;
var statearr_31518_31584 = state_31515__$1;
(statearr_31518_31584[(2)] = null);

(statearr_31518_31584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (1))){
var state_31515__$1 = state_31515;
var statearr_31519_31585 = state_31515__$1;
(statearr_31519_31585[(2)] = null);

(statearr_31519_31585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (4))){
var inst_31480 = (state_31515[(7)]);
var inst_31480__$1 = (state_31515[(2)]);
var inst_31481 = (inst_31480__$1 == null);
var state_31515__$1 = (function (){var statearr_31520 = state_31515;
(statearr_31520[(7)] = inst_31480__$1);

return statearr_31520;
})();
if(cljs.core.truth_(inst_31481)){
var statearr_31521_31586 = state_31515__$1;
(statearr_31521_31586[(1)] = (5));

} else {
var statearr_31522_31587 = state_31515__$1;
(statearr_31522_31587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (15))){
var inst_31493 = (state_31515[(8)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31515__$1,(18),to,inst_31493);
} else {
if((state_val_31516 === (21))){
var inst_31506 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31523_31588 = state_31515__$1;
(statearr_31523_31588[(2)] = inst_31506);

(statearr_31523_31588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (13))){
var inst_31508 = (state_31515[(2)]);
var state_31515__$1 = (function (){var statearr_31524 = state_31515;
(statearr_31524[(9)] = inst_31508);

return statearr_31524;
})();
var statearr_31525_31589 = state_31515__$1;
(statearr_31525_31589[(2)] = null);

(statearr_31525_31589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (6))){
var inst_31480 = (state_31515[(7)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31515__$1,(11),inst_31480);
} else {
if((state_val_31516 === (17))){
var inst_31501 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
if(cljs.core.truth_(inst_31501)){
var statearr_31526_31590 = state_31515__$1;
(statearr_31526_31590[(1)] = (19));

} else {
var statearr_31527_31591 = state_31515__$1;
(statearr_31527_31591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (3))){
var inst_31513 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31515__$1,inst_31513);
} else {
if((state_val_31516 === (12))){
var inst_31490 = (state_31515[(10)]);
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31515__$1,(14),inst_31490);
} else {
if((state_val_31516 === (2))){
var state_31515__$1 = state_31515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31515__$1,(4),results);
} else {
if((state_val_31516 === (19))){
var state_31515__$1 = state_31515;
var statearr_31528_31592 = state_31515__$1;
(statearr_31528_31592[(2)] = null);

(statearr_31528_31592[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (11))){
var inst_31490 = (state_31515[(2)]);
var state_31515__$1 = (function (){var statearr_31529 = state_31515;
(statearr_31529[(10)] = inst_31490);

return statearr_31529;
})();
var statearr_31530_31593 = state_31515__$1;
(statearr_31530_31593[(2)] = null);

(statearr_31530_31593[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (9))){
var state_31515__$1 = state_31515;
var statearr_31531_31594 = state_31515__$1;
(statearr_31531_31594[(2)] = null);

(statearr_31531_31594[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (5))){
var state_31515__$1 = state_31515;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31532_31595 = state_31515__$1;
(statearr_31532_31595[(1)] = (8));

} else {
var statearr_31533_31596 = state_31515__$1;
(statearr_31533_31596[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (14))){
var inst_31495 = (state_31515[(11)]);
var inst_31493 = (state_31515[(8)]);
var inst_31493__$1 = (state_31515[(2)]);
var inst_31494 = (inst_31493__$1 == null);
var inst_31495__$1 = cljs.core.not.call(null,inst_31494);
var state_31515__$1 = (function (){var statearr_31534 = state_31515;
(statearr_31534[(11)] = inst_31495__$1);

(statearr_31534[(8)] = inst_31493__$1);

return statearr_31534;
})();
if(inst_31495__$1){
var statearr_31535_31597 = state_31515__$1;
(statearr_31535_31597[(1)] = (15));

} else {
var statearr_31536_31598 = state_31515__$1;
(statearr_31536_31598[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (16))){
var inst_31495 = (state_31515[(11)]);
var state_31515__$1 = state_31515;
var statearr_31537_31599 = state_31515__$1;
(statearr_31537_31599[(2)] = inst_31495);

(statearr_31537_31599[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (10))){
var inst_31487 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31538_31600 = state_31515__$1;
(statearr_31538_31600[(2)] = inst_31487);

(statearr_31538_31600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (18))){
var inst_31498 = (state_31515[(2)]);
var state_31515__$1 = state_31515;
var statearr_31539_31601 = state_31515__$1;
(statearr_31539_31601[(2)] = inst_31498);

(statearr_31539_31601[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31516 === (8))){
var inst_31484 = cljs.core.async.close_BANG_.call(null,to);
var state_31515__$1 = state_31515;
var statearr_31540_31602 = state_31515__$1;
(statearr_31540_31602[(2)] = inst_31484);

(statearr_31540_31602[(1)] = (10));


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
});})(c__30990__auto__,jobs,results,process,async))
;
return ((function (switch__30878__auto__,c__30990__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_31544 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31544[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__);

(statearr_31544[(1)] = (1));

return statearr_31544;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1 = (function (state_31515){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31545){if((e31545 instanceof Object)){
var ex__30882__auto__ = e31545;
var statearr_31546_31603 = state_31515;
(statearr_31546_31603[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31604 = state_31515;
state_31515 = G__31604;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__ = function(state_31515){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1.call(this,state_31515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__,jobs,results,process,async))
})();
var state__30992__auto__ = (function (){var statearr_31547 = f__30991__auto__.call(null);
(statearr_31547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__,jobs,results,process,async))
);

return c__30990__auto__;
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
var args31605 = [];
var len__26171__auto___31608 = arguments.length;
var i__26172__auto___31609 = (0);
while(true){
if((i__26172__auto___31609 < len__26171__auto___31608)){
args31605.push((arguments[i__26172__auto___31609]));

var G__31610 = (i__26172__auto___31609 + (1));
i__26172__auto___31609 = G__31610;
continue;
} else {
}
break;
}

var G__31607 = args31605.length;
switch (G__31607) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31605.length)].join('')));

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
var args31612 = [];
var len__26171__auto___31615 = arguments.length;
var i__26172__auto___31616 = (0);
while(true){
if((i__26172__auto___31616 < len__26171__auto___31615)){
args31612.push((arguments[i__26172__auto___31616]));

var G__31617 = (i__26172__auto___31616 + (1));
i__26172__auto___31616 = G__31617;
continue;
} else {
}
break;
}

var G__31614 = args31612.length;
switch (G__31614) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31612.length)].join('')));

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
var args31619 = [];
var len__26171__auto___31672 = arguments.length;
var i__26172__auto___31673 = (0);
while(true){
if((i__26172__auto___31673 < len__26171__auto___31672)){
args31619.push((arguments[i__26172__auto___31673]));

var G__31674 = (i__26172__auto___31673 + (1));
i__26172__auto___31673 = G__31674;
continue;
} else {
}
break;
}

var G__31621 = args31619.length;
switch (G__31621) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31619.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30990__auto___31676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___31676,tc,fc){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___31676,tc,fc){
return (function (state_31647){
var state_val_31648 = (state_31647[(1)]);
if((state_val_31648 === (7))){
var inst_31643 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
var statearr_31649_31677 = state_31647__$1;
(statearr_31649_31677[(2)] = inst_31643);

(statearr_31649_31677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (1))){
var state_31647__$1 = state_31647;
var statearr_31650_31678 = state_31647__$1;
(statearr_31650_31678[(2)] = null);

(statearr_31650_31678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (4))){
var inst_31624 = (state_31647[(7)]);
var inst_31624__$1 = (state_31647[(2)]);
var inst_31625 = (inst_31624__$1 == null);
var state_31647__$1 = (function (){var statearr_31651 = state_31647;
(statearr_31651[(7)] = inst_31624__$1);

return statearr_31651;
})();
if(cljs.core.truth_(inst_31625)){
var statearr_31652_31679 = state_31647__$1;
(statearr_31652_31679[(1)] = (5));

} else {
var statearr_31653_31680 = state_31647__$1;
(statearr_31653_31680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (13))){
var state_31647__$1 = state_31647;
var statearr_31654_31681 = state_31647__$1;
(statearr_31654_31681[(2)] = null);

(statearr_31654_31681[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (6))){
var inst_31624 = (state_31647[(7)]);
var inst_31630 = p.call(null,inst_31624);
var state_31647__$1 = state_31647;
if(cljs.core.truth_(inst_31630)){
var statearr_31655_31682 = state_31647__$1;
(statearr_31655_31682[(1)] = (9));

} else {
var statearr_31656_31683 = state_31647__$1;
(statearr_31656_31683[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (3))){
var inst_31645 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31647__$1,inst_31645);
} else {
if((state_val_31648 === (12))){
var state_31647__$1 = state_31647;
var statearr_31657_31684 = state_31647__$1;
(statearr_31657_31684[(2)] = null);

(statearr_31657_31684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (2))){
var state_31647__$1 = state_31647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31647__$1,(4),ch);
} else {
if((state_val_31648 === (11))){
var inst_31624 = (state_31647[(7)]);
var inst_31634 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31647__$1,(8),inst_31634,inst_31624);
} else {
if((state_val_31648 === (9))){
var state_31647__$1 = state_31647;
var statearr_31658_31685 = state_31647__$1;
(statearr_31658_31685[(2)] = tc);

(statearr_31658_31685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (5))){
var inst_31627 = cljs.core.async.close_BANG_.call(null,tc);
var inst_31628 = cljs.core.async.close_BANG_.call(null,fc);
var state_31647__$1 = (function (){var statearr_31659 = state_31647;
(statearr_31659[(8)] = inst_31627);

return statearr_31659;
})();
var statearr_31660_31686 = state_31647__$1;
(statearr_31660_31686[(2)] = inst_31628);

(statearr_31660_31686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (14))){
var inst_31641 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
var statearr_31661_31687 = state_31647__$1;
(statearr_31661_31687[(2)] = inst_31641);

(statearr_31661_31687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (10))){
var state_31647__$1 = state_31647;
var statearr_31662_31688 = state_31647__$1;
(statearr_31662_31688[(2)] = fc);

(statearr_31662_31688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31648 === (8))){
var inst_31636 = (state_31647[(2)]);
var state_31647__$1 = state_31647;
if(cljs.core.truth_(inst_31636)){
var statearr_31663_31689 = state_31647__$1;
(statearr_31663_31689[(1)] = (12));

} else {
var statearr_31664_31690 = state_31647__$1;
(statearr_31664_31690[(1)] = (13));

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
});})(c__30990__auto___31676,tc,fc))
;
return ((function (switch__30878__auto__,c__30990__auto___31676,tc,fc){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_31668 = [null,null,null,null,null,null,null,null,null];
(statearr_31668[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_31668[(1)] = (1));

return statearr_31668;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_31647){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31669){if((e31669 instanceof Object)){
var ex__30882__auto__ = e31669;
var statearr_31670_31691 = state_31647;
(statearr_31670_31691[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31692 = state_31647;
state_31647 = G__31692;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_31647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_31647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___31676,tc,fc))
})();
var state__30992__auto__ = (function (){var statearr_31671 = f__30991__auto__.call(null);
(statearr_31671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___31676);

return statearr_31671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___31676,tc,fc))
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
var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__){
return (function (state_31756){
var state_val_31757 = (state_31756[(1)]);
if((state_val_31757 === (7))){
var inst_31752 = (state_31756[(2)]);
var state_31756__$1 = state_31756;
var statearr_31758_31779 = state_31756__$1;
(statearr_31758_31779[(2)] = inst_31752);

(statearr_31758_31779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31757 === (1))){
var inst_31736 = init;
var state_31756__$1 = (function (){var statearr_31759 = state_31756;
(statearr_31759[(7)] = inst_31736);

return statearr_31759;
})();
var statearr_31760_31780 = state_31756__$1;
(statearr_31760_31780[(2)] = null);

(statearr_31760_31780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31757 === (4))){
var inst_31739 = (state_31756[(8)]);
var inst_31739__$1 = (state_31756[(2)]);
var inst_31740 = (inst_31739__$1 == null);
var state_31756__$1 = (function (){var statearr_31761 = state_31756;
(statearr_31761[(8)] = inst_31739__$1);

return statearr_31761;
})();
if(cljs.core.truth_(inst_31740)){
var statearr_31762_31781 = state_31756__$1;
(statearr_31762_31781[(1)] = (5));

} else {
var statearr_31763_31782 = state_31756__$1;
(statearr_31763_31782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31757 === (6))){
var inst_31736 = (state_31756[(7)]);
var inst_31739 = (state_31756[(8)]);
var inst_31743 = (state_31756[(9)]);
var inst_31743__$1 = f.call(null,inst_31736,inst_31739);
var inst_31744 = cljs.core.reduced_QMARK_.call(null,inst_31743__$1);
var state_31756__$1 = (function (){var statearr_31764 = state_31756;
(statearr_31764[(9)] = inst_31743__$1);

return statearr_31764;
})();
if(inst_31744){
var statearr_31765_31783 = state_31756__$1;
(statearr_31765_31783[(1)] = (8));

} else {
var statearr_31766_31784 = state_31756__$1;
(statearr_31766_31784[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31757 === (3))){
var inst_31754 = (state_31756[(2)]);
var state_31756__$1 = state_31756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31756__$1,inst_31754);
} else {
if((state_val_31757 === (2))){
var state_31756__$1 = state_31756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31756__$1,(4),ch);
} else {
if((state_val_31757 === (9))){
var inst_31743 = (state_31756[(9)]);
var inst_31736 = inst_31743;
var state_31756__$1 = (function (){var statearr_31767 = state_31756;
(statearr_31767[(7)] = inst_31736);

return statearr_31767;
})();
var statearr_31768_31785 = state_31756__$1;
(statearr_31768_31785[(2)] = null);

(statearr_31768_31785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31757 === (5))){
var inst_31736 = (state_31756[(7)]);
var state_31756__$1 = state_31756;
var statearr_31769_31786 = state_31756__$1;
(statearr_31769_31786[(2)] = inst_31736);

(statearr_31769_31786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31757 === (10))){
var inst_31750 = (state_31756[(2)]);
var state_31756__$1 = state_31756;
var statearr_31770_31787 = state_31756__$1;
(statearr_31770_31787[(2)] = inst_31750);

(statearr_31770_31787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31757 === (8))){
var inst_31743 = (state_31756[(9)]);
var inst_31746 = cljs.core.deref.call(null,inst_31743);
var state_31756__$1 = state_31756;
var statearr_31771_31788 = state_31756__$1;
(statearr_31771_31788[(2)] = inst_31746);

(statearr_31771_31788[(1)] = (10));


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
});})(c__30990__auto__))
;
return ((function (switch__30878__auto__,c__30990__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30879__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30879__auto____0 = (function (){
var statearr_31775 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31775[(0)] = cljs$core$async$reduce_$_state_machine__30879__auto__);

(statearr_31775[(1)] = (1));

return statearr_31775;
});
var cljs$core$async$reduce_$_state_machine__30879__auto____1 = (function (state_31756){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31776){if((e31776 instanceof Object)){
var ex__30882__auto__ = e31776;
var statearr_31777_31789 = state_31756;
(statearr_31777_31789[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31776;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31790 = state_31756;
state_31756 = G__31790;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30879__auto__ = function(state_31756){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30879__auto____1.call(this,state_31756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30879__auto____0;
cljs$core$async$reduce_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30879__auto____1;
return cljs$core$async$reduce_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__))
})();
var state__30992__auto__ = (function (){var statearr_31778 = f__30991__auto__.call(null);
(statearr_31778[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_31778;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__))
);

return c__30990__auto__;
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
var args31791 = [];
var len__26171__auto___31843 = arguments.length;
var i__26172__auto___31844 = (0);
while(true){
if((i__26172__auto___31844 < len__26171__auto___31843)){
args31791.push((arguments[i__26172__auto___31844]));

var G__31845 = (i__26172__auto___31844 + (1));
i__26172__auto___31844 = G__31845;
continue;
} else {
}
break;
}

var G__31793 = args31791.length;
switch (G__31793) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31791.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__){
return (function (state_31818){
var state_val_31819 = (state_31818[(1)]);
if((state_val_31819 === (7))){
var inst_31800 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31820_31847 = state_31818__$1;
(statearr_31820_31847[(2)] = inst_31800);

(statearr_31820_31847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (1))){
var inst_31794 = cljs.core.seq.call(null,coll);
var inst_31795 = inst_31794;
var state_31818__$1 = (function (){var statearr_31821 = state_31818;
(statearr_31821[(7)] = inst_31795);

return statearr_31821;
})();
var statearr_31822_31848 = state_31818__$1;
(statearr_31822_31848[(2)] = null);

(statearr_31822_31848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (4))){
var inst_31795 = (state_31818[(7)]);
var inst_31798 = cljs.core.first.call(null,inst_31795);
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31818__$1,(7),ch,inst_31798);
} else {
if((state_val_31819 === (13))){
var inst_31812 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31823_31849 = state_31818__$1;
(statearr_31823_31849[(2)] = inst_31812);

(statearr_31823_31849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (6))){
var inst_31803 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
if(cljs.core.truth_(inst_31803)){
var statearr_31824_31850 = state_31818__$1;
(statearr_31824_31850[(1)] = (8));

} else {
var statearr_31825_31851 = state_31818__$1;
(statearr_31825_31851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (3))){
var inst_31816 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31818__$1,inst_31816);
} else {
if((state_val_31819 === (12))){
var state_31818__$1 = state_31818;
var statearr_31826_31852 = state_31818__$1;
(statearr_31826_31852[(2)] = null);

(statearr_31826_31852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (2))){
var inst_31795 = (state_31818[(7)]);
var state_31818__$1 = state_31818;
if(cljs.core.truth_(inst_31795)){
var statearr_31827_31853 = state_31818__$1;
(statearr_31827_31853[(1)] = (4));

} else {
var statearr_31828_31854 = state_31818__$1;
(statearr_31828_31854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (11))){
var inst_31809 = cljs.core.async.close_BANG_.call(null,ch);
var state_31818__$1 = state_31818;
var statearr_31829_31855 = state_31818__$1;
(statearr_31829_31855[(2)] = inst_31809);

(statearr_31829_31855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (9))){
var state_31818__$1 = state_31818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31830_31856 = state_31818__$1;
(statearr_31830_31856[(1)] = (11));

} else {
var statearr_31831_31857 = state_31818__$1;
(statearr_31831_31857[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (5))){
var inst_31795 = (state_31818[(7)]);
var state_31818__$1 = state_31818;
var statearr_31832_31858 = state_31818__$1;
(statearr_31832_31858[(2)] = inst_31795);

(statearr_31832_31858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (10))){
var inst_31814 = (state_31818[(2)]);
var state_31818__$1 = state_31818;
var statearr_31833_31859 = state_31818__$1;
(statearr_31833_31859[(2)] = inst_31814);

(statearr_31833_31859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31819 === (8))){
var inst_31795 = (state_31818[(7)]);
var inst_31805 = cljs.core.next.call(null,inst_31795);
var inst_31795__$1 = inst_31805;
var state_31818__$1 = (function (){var statearr_31834 = state_31818;
(statearr_31834[(7)] = inst_31795__$1);

return statearr_31834;
})();
var statearr_31835_31860 = state_31818__$1;
(statearr_31835_31860[(2)] = null);

(statearr_31835_31860[(1)] = (2));


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
});})(c__30990__auto__))
;
return ((function (switch__30878__auto__,c__30990__auto__){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_31839 = [null,null,null,null,null,null,null,null];
(statearr_31839[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_31839[(1)] = (1));

return statearr_31839;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_31818){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_31818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e31840){if((e31840 instanceof Object)){
var ex__30882__auto__ = e31840;
var statearr_31841_31861 = state_31818;
(statearr_31841_31861[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31862 = state_31818;
state_31818 = G__31862;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_31818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_31818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__))
})();
var state__30992__auto__ = (function (){var statearr_31842 = f__30991__auto__.call(null);
(statearr_31842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_31842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__))
);

return c__30990__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async32088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32088 = (function (mult,ch,cs,meta32089){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta32089 = meta32089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32090,meta32089__$1){
var self__ = this;
var _32090__$1 = this;
return (new cljs.core.async.t_cljs$core$async32088(self__.mult,self__.ch,self__.cs,meta32089__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32090){
var self__ = this;
var _32090__$1 = this;
return self__.meta32089;
});})(cs))
;

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32088.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32088.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32089","meta32089",-1635450389,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32088";

cljs.core.async.t_cljs$core$async32088.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async32088");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32088 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32088(mult__$1,ch__$1,cs__$1,meta32089){
return (new cljs.core.async.t_cljs$core$async32088(mult__$1,ch__$1,cs__$1,meta32089));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32088(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__30990__auto___32313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___32313,cs,m,dchan,dctr,done){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___32313,cs,m,dchan,dctr,done){
return (function (state_32225){
var state_val_32226 = (state_32225[(1)]);
if((state_val_32226 === (7))){
var inst_32221 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32227_32314 = state_32225__$1;
(statearr_32227_32314[(2)] = inst_32221);

(statearr_32227_32314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (20))){
var inst_32124 = (state_32225[(7)]);
var inst_32136 = cljs.core.first.call(null,inst_32124);
var inst_32137 = cljs.core.nth.call(null,inst_32136,(0),null);
var inst_32138 = cljs.core.nth.call(null,inst_32136,(1),null);
var state_32225__$1 = (function (){var statearr_32228 = state_32225;
(statearr_32228[(8)] = inst_32137);

return statearr_32228;
})();
if(cljs.core.truth_(inst_32138)){
var statearr_32229_32315 = state_32225__$1;
(statearr_32229_32315[(1)] = (22));

} else {
var statearr_32230_32316 = state_32225__$1;
(statearr_32230_32316[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (27))){
var inst_32173 = (state_32225[(9)]);
var inst_32166 = (state_32225[(10)]);
var inst_32093 = (state_32225[(11)]);
var inst_32168 = (state_32225[(12)]);
var inst_32173__$1 = cljs.core._nth.call(null,inst_32166,inst_32168);
var inst_32174 = cljs.core.async.put_BANG_.call(null,inst_32173__$1,inst_32093,done);
var state_32225__$1 = (function (){var statearr_32231 = state_32225;
(statearr_32231[(9)] = inst_32173__$1);

return statearr_32231;
})();
if(cljs.core.truth_(inst_32174)){
var statearr_32232_32317 = state_32225__$1;
(statearr_32232_32317[(1)] = (30));

} else {
var statearr_32233_32318 = state_32225__$1;
(statearr_32233_32318[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (1))){
var state_32225__$1 = state_32225;
var statearr_32234_32319 = state_32225__$1;
(statearr_32234_32319[(2)] = null);

(statearr_32234_32319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (24))){
var inst_32124 = (state_32225[(7)]);
var inst_32143 = (state_32225[(2)]);
var inst_32144 = cljs.core.next.call(null,inst_32124);
var inst_32102 = inst_32144;
var inst_32103 = null;
var inst_32104 = (0);
var inst_32105 = (0);
var state_32225__$1 = (function (){var statearr_32235 = state_32225;
(statearr_32235[(13)] = inst_32143);

(statearr_32235[(14)] = inst_32105);

(statearr_32235[(15)] = inst_32104);

(statearr_32235[(16)] = inst_32103);

(statearr_32235[(17)] = inst_32102);

return statearr_32235;
})();
var statearr_32236_32320 = state_32225__$1;
(statearr_32236_32320[(2)] = null);

(statearr_32236_32320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (39))){
var state_32225__$1 = state_32225;
var statearr_32240_32321 = state_32225__$1;
(statearr_32240_32321[(2)] = null);

(statearr_32240_32321[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (4))){
var inst_32093 = (state_32225[(11)]);
var inst_32093__$1 = (state_32225[(2)]);
var inst_32094 = (inst_32093__$1 == null);
var state_32225__$1 = (function (){var statearr_32241 = state_32225;
(statearr_32241[(11)] = inst_32093__$1);

return statearr_32241;
})();
if(cljs.core.truth_(inst_32094)){
var statearr_32242_32322 = state_32225__$1;
(statearr_32242_32322[(1)] = (5));

} else {
var statearr_32243_32323 = state_32225__$1;
(statearr_32243_32323[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (15))){
var inst_32105 = (state_32225[(14)]);
var inst_32104 = (state_32225[(15)]);
var inst_32103 = (state_32225[(16)]);
var inst_32102 = (state_32225[(17)]);
var inst_32120 = (state_32225[(2)]);
var inst_32121 = (inst_32105 + (1));
var tmp32237 = inst_32104;
var tmp32238 = inst_32103;
var tmp32239 = inst_32102;
var inst_32102__$1 = tmp32239;
var inst_32103__$1 = tmp32238;
var inst_32104__$1 = tmp32237;
var inst_32105__$1 = inst_32121;
var state_32225__$1 = (function (){var statearr_32244 = state_32225;
(statearr_32244[(14)] = inst_32105__$1);

(statearr_32244[(15)] = inst_32104__$1);

(statearr_32244[(16)] = inst_32103__$1);

(statearr_32244[(17)] = inst_32102__$1);

(statearr_32244[(18)] = inst_32120);

return statearr_32244;
})();
var statearr_32245_32324 = state_32225__$1;
(statearr_32245_32324[(2)] = null);

(statearr_32245_32324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (21))){
var inst_32147 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32249_32325 = state_32225__$1;
(statearr_32249_32325[(2)] = inst_32147);

(statearr_32249_32325[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (31))){
var inst_32173 = (state_32225[(9)]);
var inst_32177 = done.call(null,null);
var inst_32178 = cljs.core.async.untap_STAR_.call(null,m,inst_32173);
var state_32225__$1 = (function (){var statearr_32250 = state_32225;
(statearr_32250[(19)] = inst_32177);

return statearr_32250;
})();
var statearr_32251_32326 = state_32225__$1;
(statearr_32251_32326[(2)] = inst_32178);

(statearr_32251_32326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (32))){
var inst_32166 = (state_32225[(10)]);
var inst_32167 = (state_32225[(20)]);
var inst_32168 = (state_32225[(12)]);
var inst_32165 = (state_32225[(21)]);
var inst_32180 = (state_32225[(2)]);
var inst_32181 = (inst_32168 + (1));
var tmp32246 = inst_32166;
var tmp32247 = inst_32167;
var tmp32248 = inst_32165;
var inst_32165__$1 = tmp32248;
var inst_32166__$1 = tmp32246;
var inst_32167__$1 = tmp32247;
var inst_32168__$1 = inst_32181;
var state_32225__$1 = (function (){var statearr_32252 = state_32225;
(statearr_32252[(10)] = inst_32166__$1);

(statearr_32252[(22)] = inst_32180);

(statearr_32252[(20)] = inst_32167__$1);

(statearr_32252[(12)] = inst_32168__$1);

(statearr_32252[(21)] = inst_32165__$1);

return statearr_32252;
})();
var statearr_32253_32327 = state_32225__$1;
(statearr_32253_32327[(2)] = null);

(statearr_32253_32327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (40))){
var inst_32193 = (state_32225[(23)]);
var inst_32197 = done.call(null,null);
var inst_32198 = cljs.core.async.untap_STAR_.call(null,m,inst_32193);
var state_32225__$1 = (function (){var statearr_32254 = state_32225;
(statearr_32254[(24)] = inst_32197);

return statearr_32254;
})();
var statearr_32255_32328 = state_32225__$1;
(statearr_32255_32328[(2)] = inst_32198);

(statearr_32255_32328[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (33))){
var inst_32184 = (state_32225[(25)]);
var inst_32186 = cljs.core.chunked_seq_QMARK_.call(null,inst_32184);
var state_32225__$1 = state_32225;
if(inst_32186){
var statearr_32256_32329 = state_32225__$1;
(statearr_32256_32329[(1)] = (36));

} else {
var statearr_32257_32330 = state_32225__$1;
(statearr_32257_32330[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (13))){
var inst_32114 = (state_32225[(26)]);
var inst_32117 = cljs.core.async.close_BANG_.call(null,inst_32114);
var state_32225__$1 = state_32225;
var statearr_32258_32331 = state_32225__$1;
(statearr_32258_32331[(2)] = inst_32117);

(statearr_32258_32331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (22))){
var inst_32137 = (state_32225[(8)]);
var inst_32140 = cljs.core.async.close_BANG_.call(null,inst_32137);
var state_32225__$1 = state_32225;
var statearr_32259_32332 = state_32225__$1;
(statearr_32259_32332[(2)] = inst_32140);

(statearr_32259_32332[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (36))){
var inst_32184 = (state_32225[(25)]);
var inst_32188 = cljs.core.chunk_first.call(null,inst_32184);
var inst_32189 = cljs.core.chunk_rest.call(null,inst_32184);
var inst_32190 = cljs.core.count.call(null,inst_32188);
var inst_32165 = inst_32189;
var inst_32166 = inst_32188;
var inst_32167 = inst_32190;
var inst_32168 = (0);
var state_32225__$1 = (function (){var statearr_32260 = state_32225;
(statearr_32260[(10)] = inst_32166);

(statearr_32260[(20)] = inst_32167);

(statearr_32260[(12)] = inst_32168);

(statearr_32260[(21)] = inst_32165);

return statearr_32260;
})();
var statearr_32261_32333 = state_32225__$1;
(statearr_32261_32333[(2)] = null);

(statearr_32261_32333[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (41))){
var inst_32184 = (state_32225[(25)]);
var inst_32200 = (state_32225[(2)]);
var inst_32201 = cljs.core.next.call(null,inst_32184);
var inst_32165 = inst_32201;
var inst_32166 = null;
var inst_32167 = (0);
var inst_32168 = (0);
var state_32225__$1 = (function (){var statearr_32262 = state_32225;
(statearr_32262[(10)] = inst_32166);

(statearr_32262[(27)] = inst_32200);

(statearr_32262[(20)] = inst_32167);

(statearr_32262[(12)] = inst_32168);

(statearr_32262[(21)] = inst_32165);

return statearr_32262;
})();
var statearr_32263_32334 = state_32225__$1;
(statearr_32263_32334[(2)] = null);

(statearr_32263_32334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (43))){
var state_32225__$1 = state_32225;
var statearr_32264_32335 = state_32225__$1;
(statearr_32264_32335[(2)] = null);

(statearr_32264_32335[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (29))){
var inst_32209 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32265_32336 = state_32225__$1;
(statearr_32265_32336[(2)] = inst_32209);

(statearr_32265_32336[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (44))){
var inst_32218 = (state_32225[(2)]);
var state_32225__$1 = (function (){var statearr_32266 = state_32225;
(statearr_32266[(28)] = inst_32218);

return statearr_32266;
})();
var statearr_32267_32337 = state_32225__$1;
(statearr_32267_32337[(2)] = null);

(statearr_32267_32337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (6))){
var inst_32157 = (state_32225[(29)]);
var inst_32156 = cljs.core.deref.call(null,cs);
var inst_32157__$1 = cljs.core.keys.call(null,inst_32156);
var inst_32158 = cljs.core.count.call(null,inst_32157__$1);
var inst_32159 = cljs.core.reset_BANG_.call(null,dctr,inst_32158);
var inst_32164 = cljs.core.seq.call(null,inst_32157__$1);
var inst_32165 = inst_32164;
var inst_32166 = null;
var inst_32167 = (0);
var inst_32168 = (0);
var state_32225__$1 = (function (){var statearr_32268 = state_32225;
(statearr_32268[(29)] = inst_32157__$1);

(statearr_32268[(30)] = inst_32159);

(statearr_32268[(10)] = inst_32166);

(statearr_32268[(20)] = inst_32167);

(statearr_32268[(12)] = inst_32168);

(statearr_32268[(21)] = inst_32165);

return statearr_32268;
})();
var statearr_32269_32338 = state_32225__$1;
(statearr_32269_32338[(2)] = null);

(statearr_32269_32338[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (28))){
var inst_32184 = (state_32225[(25)]);
var inst_32165 = (state_32225[(21)]);
var inst_32184__$1 = cljs.core.seq.call(null,inst_32165);
var state_32225__$1 = (function (){var statearr_32270 = state_32225;
(statearr_32270[(25)] = inst_32184__$1);

return statearr_32270;
})();
if(inst_32184__$1){
var statearr_32271_32339 = state_32225__$1;
(statearr_32271_32339[(1)] = (33));

} else {
var statearr_32272_32340 = state_32225__$1;
(statearr_32272_32340[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (25))){
var inst_32167 = (state_32225[(20)]);
var inst_32168 = (state_32225[(12)]);
var inst_32170 = (inst_32168 < inst_32167);
var inst_32171 = inst_32170;
var state_32225__$1 = state_32225;
if(cljs.core.truth_(inst_32171)){
var statearr_32273_32341 = state_32225__$1;
(statearr_32273_32341[(1)] = (27));

} else {
var statearr_32274_32342 = state_32225__$1;
(statearr_32274_32342[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (34))){
var state_32225__$1 = state_32225;
var statearr_32275_32343 = state_32225__$1;
(statearr_32275_32343[(2)] = null);

(statearr_32275_32343[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (17))){
var state_32225__$1 = state_32225;
var statearr_32276_32344 = state_32225__$1;
(statearr_32276_32344[(2)] = null);

(statearr_32276_32344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (3))){
var inst_32223 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32225__$1,inst_32223);
} else {
if((state_val_32226 === (12))){
var inst_32152 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32277_32345 = state_32225__$1;
(statearr_32277_32345[(2)] = inst_32152);

(statearr_32277_32345[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (2))){
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32225__$1,(4),ch);
} else {
if((state_val_32226 === (23))){
var state_32225__$1 = state_32225;
var statearr_32278_32346 = state_32225__$1;
(statearr_32278_32346[(2)] = null);

(statearr_32278_32346[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (35))){
var inst_32207 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32279_32347 = state_32225__$1;
(statearr_32279_32347[(2)] = inst_32207);

(statearr_32279_32347[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (19))){
var inst_32124 = (state_32225[(7)]);
var inst_32128 = cljs.core.chunk_first.call(null,inst_32124);
var inst_32129 = cljs.core.chunk_rest.call(null,inst_32124);
var inst_32130 = cljs.core.count.call(null,inst_32128);
var inst_32102 = inst_32129;
var inst_32103 = inst_32128;
var inst_32104 = inst_32130;
var inst_32105 = (0);
var state_32225__$1 = (function (){var statearr_32280 = state_32225;
(statearr_32280[(14)] = inst_32105);

(statearr_32280[(15)] = inst_32104);

(statearr_32280[(16)] = inst_32103);

(statearr_32280[(17)] = inst_32102);

return statearr_32280;
})();
var statearr_32281_32348 = state_32225__$1;
(statearr_32281_32348[(2)] = null);

(statearr_32281_32348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (11))){
var inst_32124 = (state_32225[(7)]);
var inst_32102 = (state_32225[(17)]);
var inst_32124__$1 = cljs.core.seq.call(null,inst_32102);
var state_32225__$1 = (function (){var statearr_32282 = state_32225;
(statearr_32282[(7)] = inst_32124__$1);

return statearr_32282;
})();
if(inst_32124__$1){
var statearr_32283_32349 = state_32225__$1;
(statearr_32283_32349[(1)] = (16));

} else {
var statearr_32284_32350 = state_32225__$1;
(statearr_32284_32350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (9))){
var inst_32154 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32285_32351 = state_32225__$1;
(statearr_32285_32351[(2)] = inst_32154);

(statearr_32285_32351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (5))){
var inst_32100 = cljs.core.deref.call(null,cs);
var inst_32101 = cljs.core.seq.call(null,inst_32100);
var inst_32102 = inst_32101;
var inst_32103 = null;
var inst_32104 = (0);
var inst_32105 = (0);
var state_32225__$1 = (function (){var statearr_32286 = state_32225;
(statearr_32286[(14)] = inst_32105);

(statearr_32286[(15)] = inst_32104);

(statearr_32286[(16)] = inst_32103);

(statearr_32286[(17)] = inst_32102);

return statearr_32286;
})();
var statearr_32287_32352 = state_32225__$1;
(statearr_32287_32352[(2)] = null);

(statearr_32287_32352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (14))){
var state_32225__$1 = state_32225;
var statearr_32288_32353 = state_32225__$1;
(statearr_32288_32353[(2)] = null);

(statearr_32288_32353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (45))){
var inst_32215 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32289_32354 = state_32225__$1;
(statearr_32289_32354[(2)] = inst_32215);

(statearr_32289_32354[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (26))){
var inst_32157 = (state_32225[(29)]);
var inst_32211 = (state_32225[(2)]);
var inst_32212 = cljs.core.seq.call(null,inst_32157);
var state_32225__$1 = (function (){var statearr_32290 = state_32225;
(statearr_32290[(31)] = inst_32211);

return statearr_32290;
})();
if(inst_32212){
var statearr_32291_32355 = state_32225__$1;
(statearr_32291_32355[(1)] = (42));

} else {
var statearr_32292_32356 = state_32225__$1;
(statearr_32292_32356[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (16))){
var inst_32124 = (state_32225[(7)]);
var inst_32126 = cljs.core.chunked_seq_QMARK_.call(null,inst_32124);
var state_32225__$1 = state_32225;
if(inst_32126){
var statearr_32293_32357 = state_32225__$1;
(statearr_32293_32357[(1)] = (19));

} else {
var statearr_32294_32358 = state_32225__$1;
(statearr_32294_32358[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (38))){
var inst_32204 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32295_32359 = state_32225__$1;
(statearr_32295_32359[(2)] = inst_32204);

(statearr_32295_32359[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (30))){
var state_32225__$1 = state_32225;
var statearr_32296_32360 = state_32225__$1;
(statearr_32296_32360[(2)] = null);

(statearr_32296_32360[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (10))){
var inst_32105 = (state_32225[(14)]);
var inst_32103 = (state_32225[(16)]);
var inst_32113 = cljs.core._nth.call(null,inst_32103,inst_32105);
var inst_32114 = cljs.core.nth.call(null,inst_32113,(0),null);
var inst_32115 = cljs.core.nth.call(null,inst_32113,(1),null);
var state_32225__$1 = (function (){var statearr_32297 = state_32225;
(statearr_32297[(26)] = inst_32114);

return statearr_32297;
})();
if(cljs.core.truth_(inst_32115)){
var statearr_32298_32361 = state_32225__$1;
(statearr_32298_32361[(1)] = (13));

} else {
var statearr_32299_32362 = state_32225__$1;
(statearr_32299_32362[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (18))){
var inst_32150 = (state_32225[(2)]);
var state_32225__$1 = state_32225;
var statearr_32300_32363 = state_32225__$1;
(statearr_32300_32363[(2)] = inst_32150);

(statearr_32300_32363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (42))){
var state_32225__$1 = state_32225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32225__$1,(45),dchan);
} else {
if((state_val_32226 === (37))){
var inst_32184 = (state_32225[(25)]);
var inst_32193 = (state_32225[(23)]);
var inst_32093 = (state_32225[(11)]);
var inst_32193__$1 = cljs.core.first.call(null,inst_32184);
var inst_32194 = cljs.core.async.put_BANG_.call(null,inst_32193__$1,inst_32093,done);
var state_32225__$1 = (function (){var statearr_32301 = state_32225;
(statearr_32301[(23)] = inst_32193__$1);

return statearr_32301;
})();
if(cljs.core.truth_(inst_32194)){
var statearr_32302_32364 = state_32225__$1;
(statearr_32302_32364[(1)] = (39));

} else {
var statearr_32303_32365 = state_32225__$1;
(statearr_32303_32365[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32226 === (8))){
var inst_32105 = (state_32225[(14)]);
var inst_32104 = (state_32225[(15)]);
var inst_32107 = (inst_32105 < inst_32104);
var inst_32108 = inst_32107;
var state_32225__$1 = state_32225;
if(cljs.core.truth_(inst_32108)){
var statearr_32304_32366 = state_32225__$1;
(statearr_32304_32366[(1)] = (10));

} else {
var statearr_32305_32367 = state_32225__$1;
(statearr_32305_32367[(1)] = (11));

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
});})(c__30990__auto___32313,cs,m,dchan,dctr,done))
;
return ((function (switch__30878__auto__,c__30990__auto___32313,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30879__auto__ = null;
var cljs$core$async$mult_$_state_machine__30879__auto____0 = (function (){
var statearr_32309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32309[(0)] = cljs$core$async$mult_$_state_machine__30879__auto__);

(statearr_32309[(1)] = (1));

return statearr_32309;
});
var cljs$core$async$mult_$_state_machine__30879__auto____1 = (function (state_32225){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_32225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32310){if((e32310 instanceof Object)){
var ex__30882__auto__ = e32310;
var statearr_32311_32368 = state_32225;
(statearr_32311_32368[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32369 = state_32225;
state_32225 = G__32369;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30879__auto__ = function(state_32225){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30879__auto____1.call(this,state_32225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30879__auto____0;
cljs$core$async$mult_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30879__auto____1;
return cljs$core$async$mult_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___32313,cs,m,dchan,dctr,done))
})();
var state__30992__auto__ = (function (){var statearr_32312 = f__30991__auto__.call(null);
(statearr_32312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___32313);

return statearr_32312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___32313,cs,m,dchan,dctr,done))
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
var args32370 = [];
var len__26171__auto___32373 = arguments.length;
var i__26172__auto___32374 = (0);
while(true){
if((i__26172__auto___32374 < len__26171__auto___32373)){
args32370.push((arguments[i__26172__auto___32374]));

var G__32375 = (i__26172__auto___32374 + (1));
i__26172__auto___32374 = G__32375;
continue;
} else {
}
break;
}

var G__32372 = args32370.length;
switch (G__32372) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32370.length)].join('')));

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
var len__26171__auto___32387 = arguments.length;
var i__26172__auto___32388 = (0);
while(true){
if((i__26172__auto___32388 < len__26171__auto___32387)){
args__26178__auto__.push((arguments[i__26172__auto___32388]));

var G__32389 = (i__26172__auto___32388 + (1));
i__26172__auto___32388 = G__32389;
continue;
} else {
}
break;
}

var argseq__26179__auto__ = ((((3) < args__26178__auto__.length))?(new cljs.core.IndexedSeq(args__26178__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26179__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32381){
var map__32382 = p__32381;
var map__32382__$1 = ((((!((map__32382 == null)))?((((map__32382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32382):map__32382);
var opts = map__32382__$1;
var statearr_32384_32390 = state;
(statearr_32384_32390[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32382,map__32382__$1,opts){
return (function (val){
var statearr_32385_32391 = state;
(statearr_32385_32391[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32382,map__32382__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32386_32392 = state;
(statearr_32386_32392[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32377){
var G__32378 = cljs.core.first.call(null,seq32377);
var seq32377__$1 = cljs.core.next.call(null,seq32377);
var G__32379 = cljs.core.first.call(null,seq32377__$1);
var seq32377__$2 = cljs.core.next.call(null,seq32377__$1);
var G__32380 = cljs.core.first.call(null,seq32377__$2);
var seq32377__$3 = cljs.core.next.call(null,seq32377__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32378,G__32379,G__32380,seq32377__$3);
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
if(typeof cljs.core.async.t_cljs$core$async32558 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32558 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32559){
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
this.meta32559 = meta32559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32560,meta32559__$1){
var self__ = this;
var _32560__$1 = this;
return (new cljs.core.async.t_cljs$core$async32558(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32559__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32560){
var self__ = this;
var _32560__$1 = this;
return self__.meta32559;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async32558.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32559","meta32559",-517853816,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32558";

cljs.core.async.t_cljs$core$async32558.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async32558");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32558 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32558(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32559){
return (new cljs.core.async.t_cljs$core$async32558(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32559));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32558(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30990__auto___32723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___32723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___32723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32660){
var state_val_32661 = (state_32660[(1)]);
if((state_val_32661 === (7))){
var inst_32576 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
var statearr_32662_32724 = state_32660__$1;
(statearr_32662_32724[(2)] = inst_32576);

(statearr_32662_32724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (20))){
var inst_32588 = (state_32660[(7)]);
var state_32660__$1 = state_32660;
var statearr_32663_32725 = state_32660__$1;
(statearr_32663_32725[(2)] = inst_32588);

(statearr_32663_32725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (27))){
var state_32660__$1 = state_32660;
var statearr_32664_32726 = state_32660__$1;
(statearr_32664_32726[(2)] = null);

(statearr_32664_32726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (1))){
var inst_32564 = (state_32660[(8)]);
var inst_32564__$1 = calc_state.call(null);
var inst_32566 = (inst_32564__$1 == null);
var inst_32567 = cljs.core.not.call(null,inst_32566);
var state_32660__$1 = (function (){var statearr_32665 = state_32660;
(statearr_32665[(8)] = inst_32564__$1);

return statearr_32665;
})();
if(inst_32567){
var statearr_32666_32727 = state_32660__$1;
(statearr_32666_32727[(1)] = (2));

} else {
var statearr_32667_32728 = state_32660__$1;
(statearr_32667_32728[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (24))){
var inst_32620 = (state_32660[(9)]);
var inst_32634 = (state_32660[(10)]);
var inst_32611 = (state_32660[(11)]);
var inst_32634__$1 = inst_32611.call(null,inst_32620);
var state_32660__$1 = (function (){var statearr_32668 = state_32660;
(statearr_32668[(10)] = inst_32634__$1);

return statearr_32668;
})();
if(cljs.core.truth_(inst_32634__$1)){
var statearr_32669_32729 = state_32660__$1;
(statearr_32669_32729[(1)] = (29));

} else {
var statearr_32670_32730 = state_32660__$1;
(statearr_32670_32730[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (4))){
var inst_32579 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
if(cljs.core.truth_(inst_32579)){
var statearr_32671_32731 = state_32660__$1;
(statearr_32671_32731[(1)] = (8));

} else {
var statearr_32672_32732 = state_32660__$1;
(statearr_32672_32732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (15))){
var inst_32605 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
if(cljs.core.truth_(inst_32605)){
var statearr_32673_32733 = state_32660__$1;
(statearr_32673_32733[(1)] = (19));

} else {
var statearr_32674_32734 = state_32660__$1;
(statearr_32674_32734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (21))){
var inst_32610 = (state_32660[(12)]);
var inst_32610__$1 = (state_32660[(2)]);
var inst_32611 = cljs.core.get.call(null,inst_32610__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32612 = cljs.core.get.call(null,inst_32610__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32613 = cljs.core.get.call(null,inst_32610__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32660__$1 = (function (){var statearr_32675 = state_32660;
(statearr_32675[(13)] = inst_32612);

(statearr_32675[(12)] = inst_32610__$1);

(statearr_32675[(11)] = inst_32611);

return statearr_32675;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_32660__$1,(22),inst_32613);
} else {
if((state_val_32661 === (31))){
var inst_32642 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
if(cljs.core.truth_(inst_32642)){
var statearr_32676_32735 = state_32660__$1;
(statearr_32676_32735[(1)] = (32));

} else {
var statearr_32677_32736 = state_32660__$1;
(statearr_32677_32736[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (32))){
var inst_32619 = (state_32660[(14)]);
var state_32660__$1 = state_32660;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32660__$1,(35),out,inst_32619);
} else {
if((state_val_32661 === (33))){
var inst_32610 = (state_32660[(12)]);
var inst_32588 = inst_32610;
var state_32660__$1 = (function (){var statearr_32678 = state_32660;
(statearr_32678[(7)] = inst_32588);

return statearr_32678;
})();
var statearr_32679_32737 = state_32660__$1;
(statearr_32679_32737[(2)] = null);

(statearr_32679_32737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (13))){
var inst_32588 = (state_32660[(7)]);
var inst_32595 = inst_32588.cljs$lang$protocol_mask$partition0$;
var inst_32596 = (inst_32595 & (64));
var inst_32597 = inst_32588.cljs$core$ISeq$;
var inst_32598 = (inst_32596) || (inst_32597);
var state_32660__$1 = state_32660;
if(cljs.core.truth_(inst_32598)){
var statearr_32680_32738 = state_32660__$1;
(statearr_32680_32738[(1)] = (16));

} else {
var statearr_32681_32739 = state_32660__$1;
(statearr_32681_32739[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (22))){
var inst_32620 = (state_32660[(9)]);
var inst_32619 = (state_32660[(14)]);
var inst_32618 = (state_32660[(2)]);
var inst_32619__$1 = cljs.core.nth.call(null,inst_32618,(0),null);
var inst_32620__$1 = cljs.core.nth.call(null,inst_32618,(1),null);
var inst_32621 = (inst_32619__$1 == null);
var inst_32622 = cljs.core._EQ_.call(null,inst_32620__$1,change);
var inst_32623 = (inst_32621) || (inst_32622);
var state_32660__$1 = (function (){var statearr_32682 = state_32660;
(statearr_32682[(9)] = inst_32620__$1);

(statearr_32682[(14)] = inst_32619__$1);

return statearr_32682;
})();
if(cljs.core.truth_(inst_32623)){
var statearr_32683_32740 = state_32660__$1;
(statearr_32683_32740[(1)] = (23));

} else {
var statearr_32684_32741 = state_32660__$1;
(statearr_32684_32741[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (36))){
var inst_32610 = (state_32660[(12)]);
var inst_32588 = inst_32610;
var state_32660__$1 = (function (){var statearr_32685 = state_32660;
(statearr_32685[(7)] = inst_32588);

return statearr_32685;
})();
var statearr_32686_32742 = state_32660__$1;
(statearr_32686_32742[(2)] = null);

(statearr_32686_32742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (29))){
var inst_32634 = (state_32660[(10)]);
var state_32660__$1 = state_32660;
var statearr_32687_32743 = state_32660__$1;
(statearr_32687_32743[(2)] = inst_32634);

(statearr_32687_32743[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (6))){
var state_32660__$1 = state_32660;
var statearr_32688_32744 = state_32660__$1;
(statearr_32688_32744[(2)] = false);

(statearr_32688_32744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (28))){
var inst_32630 = (state_32660[(2)]);
var inst_32631 = calc_state.call(null);
var inst_32588 = inst_32631;
var state_32660__$1 = (function (){var statearr_32689 = state_32660;
(statearr_32689[(7)] = inst_32588);

(statearr_32689[(15)] = inst_32630);

return statearr_32689;
})();
var statearr_32690_32745 = state_32660__$1;
(statearr_32690_32745[(2)] = null);

(statearr_32690_32745[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (25))){
var inst_32656 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
var statearr_32691_32746 = state_32660__$1;
(statearr_32691_32746[(2)] = inst_32656);

(statearr_32691_32746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (34))){
var inst_32654 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
var statearr_32692_32747 = state_32660__$1;
(statearr_32692_32747[(2)] = inst_32654);

(statearr_32692_32747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (17))){
var state_32660__$1 = state_32660;
var statearr_32693_32748 = state_32660__$1;
(statearr_32693_32748[(2)] = false);

(statearr_32693_32748[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (3))){
var state_32660__$1 = state_32660;
var statearr_32694_32749 = state_32660__$1;
(statearr_32694_32749[(2)] = false);

(statearr_32694_32749[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (12))){
var inst_32658 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32660__$1,inst_32658);
} else {
if((state_val_32661 === (2))){
var inst_32564 = (state_32660[(8)]);
var inst_32569 = inst_32564.cljs$lang$protocol_mask$partition0$;
var inst_32570 = (inst_32569 & (64));
var inst_32571 = inst_32564.cljs$core$ISeq$;
var inst_32572 = (inst_32570) || (inst_32571);
var state_32660__$1 = state_32660;
if(cljs.core.truth_(inst_32572)){
var statearr_32695_32750 = state_32660__$1;
(statearr_32695_32750[(1)] = (5));

} else {
var statearr_32696_32751 = state_32660__$1;
(statearr_32696_32751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (23))){
var inst_32619 = (state_32660[(14)]);
var inst_32625 = (inst_32619 == null);
var state_32660__$1 = state_32660;
if(cljs.core.truth_(inst_32625)){
var statearr_32697_32752 = state_32660__$1;
(statearr_32697_32752[(1)] = (26));

} else {
var statearr_32698_32753 = state_32660__$1;
(statearr_32698_32753[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (35))){
var inst_32645 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
if(cljs.core.truth_(inst_32645)){
var statearr_32699_32754 = state_32660__$1;
(statearr_32699_32754[(1)] = (36));

} else {
var statearr_32700_32755 = state_32660__$1;
(statearr_32700_32755[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (19))){
var inst_32588 = (state_32660[(7)]);
var inst_32607 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32588);
var state_32660__$1 = state_32660;
var statearr_32701_32756 = state_32660__$1;
(statearr_32701_32756[(2)] = inst_32607);

(statearr_32701_32756[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (11))){
var inst_32588 = (state_32660[(7)]);
var inst_32592 = (inst_32588 == null);
var inst_32593 = cljs.core.not.call(null,inst_32592);
var state_32660__$1 = state_32660;
if(inst_32593){
var statearr_32702_32757 = state_32660__$1;
(statearr_32702_32757[(1)] = (13));

} else {
var statearr_32703_32758 = state_32660__$1;
(statearr_32703_32758[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (9))){
var inst_32564 = (state_32660[(8)]);
var state_32660__$1 = state_32660;
var statearr_32704_32759 = state_32660__$1;
(statearr_32704_32759[(2)] = inst_32564);

(statearr_32704_32759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (5))){
var state_32660__$1 = state_32660;
var statearr_32705_32760 = state_32660__$1;
(statearr_32705_32760[(2)] = true);

(statearr_32705_32760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (14))){
var state_32660__$1 = state_32660;
var statearr_32706_32761 = state_32660__$1;
(statearr_32706_32761[(2)] = false);

(statearr_32706_32761[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (26))){
var inst_32620 = (state_32660[(9)]);
var inst_32627 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32620);
var state_32660__$1 = state_32660;
var statearr_32707_32762 = state_32660__$1;
(statearr_32707_32762[(2)] = inst_32627);

(statearr_32707_32762[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (16))){
var state_32660__$1 = state_32660;
var statearr_32708_32763 = state_32660__$1;
(statearr_32708_32763[(2)] = true);

(statearr_32708_32763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (38))){
var inst_32650 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
var statearr_32709_32764 = state_32660__$1;
(statearr_32709_32764[(2)] = inst_32650);

(statearr_32709_32764[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (30))){
var inst_32620 = (state_32660[(9)]);
var inst_32612 = (state_32660[(13)]);
var inst_32611 = (state_32660[(11)]);
var inst_32637 = cljs.core.empty_QMARK_.call(null,inst_32611);
var inst_32638 = inst_32612.call(null,inst_32620);
var inst_32639 = cljs.core.not.call(null,inst_32638);
var inst_32640 = (inst_32637) && (inst_32639);
var state_32660__$1 = state_32660;
var statearr_32710_32765 = state_32660__$1;
(statearr_32710_32765[(2)] = inst_32640);

(statearr_32710_32765[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (10))){
var inst_32564 = (state_32660[(8)]);
var inst_32584 = (state_32660[(2)]);
var inst_32585 = cljs.core.get.call(null,inst_32584,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32586 = cljs.core.get.call(null,inst_32584,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32587 = cljs.core.get.call(null,inst_32584,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32588 = inst_32564;
var state_32660__$1 = (function (){var statearr_32711 = state_32660;
(statearr_32711[(16)] = inst_32586);

(statearr_32711[(17)] = inst_32585);

(statearr_32711[(7)] = inst_32588);

(statearr_32711[(18)] = inst_32587);

return statearr_32711;
})();
var statearr_32712_32766 = state_32660__$1;
(statearr_32712_32766[(2)] = null);

(statearr_32712_32766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (18))){
var inst_32602 = (state_32660[(2)]);
var state_32660__$1 = state_32660;
var statearr_32713_32767 = state_32660__$1;
(statearr_32713_32767[(2)] = inst_32602);

(statearr_32713_32767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (37))){
var state_32660__$1 = state_32660;
var statearr_32714_32768 = state_32660__$1;
(statearr_32714_32768[(2)] = null);

(statearr_32714_32768[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32661 === (8))){
var inst_32564 = (state_32660[(8)]);
var inst_32581 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32564);
var state_32660__$1 = state_32660;
var statearr_32715_32769 = state_32660__$1;
(statearr_32715_32769[(2)] = inst_32581);

(statearr_32715_32769[(1)] = (10));


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
});})(c__30990__auto___32723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30878__auto__,c__30990__auto___32723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30879__auto__ = null;
var cljs$core$async$mix_$_state_machine__30879__auto____0 = (function (){
var statearr_32719 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32719[(0)] = cljs$core$async$mix_$_state_machine__30879__auto__);

(statearr_32719[(1)] = (1));

return statearr_32719;
});
var cljs$core$async$mix_$_state_machine__30879__auto____1 = (function (state_32660){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_32660);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32720){if((e32720 instanceof Object)){
var ex__30882__auto__ = e32720;
var statearr_32721_32770 = state_32660;
(statearr_32721_32770[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32771 = state_32660;
state_32660 = G__32771;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30879__auto__ = function(state_32660){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30879__auto____1.call(this,state_32660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30879__auto____0;
cljs$core$async$mix_$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30879__auto____1;
return cljs$core$async$mix_$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___32723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30992__auto__ = (function (){var statearr_32722 = f__30991__auto__.call(null);
(statearr_32722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___32723);

return statearr_32722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___32723,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args32772 = [];
var len__26171__auto___32775 = arguments.length;
var i__26172__auto___32776 = (0);
while(true){
if((i__26172__auto___32776 < len__26171__auto___32775)){
args32772.push((arguments[i__26172__auto___32776]));

var G__32777 = (i__26172__auto___32776 + (1));
i__26172__auto___32776 = G__32777;
continue;
} else {
}
break;
}

var G__32774 = args32772.length;
switch (G__32774) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32772.length)].join('')));

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
var args32780 = [];
var len__26171__auto___32905 = arguments.length;
var i__26172__auto___32906 = (0);
while(true){
if((i__26172__auto___32906 < len__26171__auto___32905)){
args32780.push((arguments[i__26172__auto___32906]));

var G__32907 = (i__26172__auto___32906 + (1));
i__26172__auto___32906 = G__32907;
continue;
} else {
}
break;
}

var G__32782 = args32780.length;
switch (G__32782) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32780.length)].join('')));

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
return (function (p1__32779_SHARP_){
if(cljs.core.truth_(p1__32779_SHARP_.call(null,topic))){
return p1__32779_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__32779_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25096__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async32783 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32783 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32784){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32784 = meta32784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32785,meta32784__$1){
var self__ = this;
var _32785__$1 = this;
return (new cljs.core.async.t_cljs$core$async32783(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32784__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32785){
var self__ = this;
var _32785__$1 = this;
return self__.meta32784;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32783.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32783.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32784","meta32784",142160228,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32783.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32783.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32783";

cljs.core.async.t_cljs$core$async32783.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async32783");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async32783 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32784){
return (new cljs.core.async.t_cljs$core$async32783(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32784));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32783(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30990__auto___32909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___32909,mults,ensure_mult,p){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___32909,mults,ensure_mult,p){
return (function (state_32857){
var state_val_32858 = (state_32857[(1)]);
if((state_val_32858 === (7))){
var inst_32853 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32859_32910 = state_32857__$1;
(statearr_32859_32910[(2)] = inst_32853);

(statearr_32859_32910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (20))){
var state_32857__$1 = state_32857;
var statearr_32860_32911 = state_32857__$1;
(statearr_32860_32911[(2)] = null);

(statearr_32860_32911[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (1))){
var state_32857__$1 = state_32857;
var statearr_32861_32912 = state_32857__$1;
(statearr_32861_32912[(2)] = null);

(statearr_32861_32912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (24))){
var inst_32836 = (state_32857[(7)]);
var inst_32845 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32836);
var state_32857__$1 = state_32857;
var statearr_32862_32913 = state_32857__$1;
(statearr_32862_32913[(2)] = inst_32845);

(statearr_32862_32913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (4))){
var inst_32788 = (state_32857[(8)]);
var inst_32788__$1 = (state_32857[(2)]);
var inst_32789 = (inst_32788__$1 == null);
var state_32857__$1 = (function (){var statearr_32863 = state_32857;
(statearr_32863[(8)] = inst_32788__$1);

return statearr_32863;
})();
if(cljs.core.truth_(inst_32789)){
var statearr_32864_32914 = state_32857__$1;
(statearr_32864_32914[(1)] = (5));

} else {
var statearr_32865_32915 = state_32857__$1;
(statearr_32865_32915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (15))){
var inst_32830 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32866_32916 = state_32857__$1;
(statearr_32866_32916[(2)] = inst_32830);

(statearr_32866_32916[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (21))){
var inst_32850 = (state_32857[(2)]);
var state_32857__$1 = (function (){var statearr_32867 = state_32857;
(statearr_32867[(9)] = inst_32850);

return statearr_32867;
})();
var statearr_32868_32917 = state_32857__$1;
(statearr_32868_32917[(2)] = null);

(statearr_32868_32917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (13))){
var inst_32812 = (state_32857[(10)]);
var inst_32814 = cljs.core.chunked_seq_QMARK_.call(null,inst_32812);
var state_32857__$1 = state_32857;
if(inst_32814){
var statearr_32869_32918 = state_32857__$1;
(statearr_32869_32918[(1)] = (16));

} else {
var statearr_32870_32919 = state_32857__$1;
(statearr_32870_32919[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (22))){
var inst_32842 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
if(cljs.core.truth_(inst_32842)){
var statearr_32871_32920 = state_32857__$1;
(statearr_32871_32920[(1)] = (23));

} else {
var statearr_32872_32921 = state_32857__$1;
(statearr_32872_32921[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (6))){
var inst_32836 = (state_32857[(7)]);
var inst_32838 = (state_32857[(11)]);
var inst_32788 = (state_32857[(8)]);
var inst_32836__$1 = topic_fn.call(null,inst_32788);
var inst_32837 = cljs.core.deref.call(null,mults);
var inst_32838__$1 = cljs.core.get.call(null,inst_32837,inst_32836__$1);
var state_32857__$1 = (function (){var statearr_32873 = state_32857;
(statearr_32873[(7)] = inst_32836__$1);

(statearr_32873[(11)] = inst_32838__$1);

return statearr_32873;
})();
if(cljs.core.truth_(inst_32838__$1)){
var statearr_32874_32922 = state_32857__$1;
(statearr_32874_32922[(1)] = (19));

} else {
var statearr_32875_32923 = state_32857__$1;
(statearr_32875_32923[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (25))){
var inst_32847 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32876_32924 = state_32857__$1;
(statearr_32876_32924[(2)] = inst_32847);

(statearr_32876_32924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (17))){
var inst_32812 = (state_32857[(10)]);
var inst_32821 = cljs.core.first.call(null,inst_32812);
var inst_32822 = cljs.core.async.muxch_STAR_.call(null,inst_32821);
var inst_32823 = cljs.core.async.close_BANG_.call(null,inst_32822);
var inst_32824 = cljs.core.next.call(null,inst_32812);
var inst_32798 = inst_32824;
var inst_32799 = null;
var inst_32800 = (0);
var inst_32801 = (0);
var state_32857__$1 = (function (){var statearr_32877 = state_32857;
(statearr_32877[(12)] = inst_32798);

(statearr_32877[(13)] = inst_32799);

(statearr_32877[(14)] = inst_32823);

(statearr_32877[(15)] = inst_32801);

(statearr_32877[(16)] = inst_32800);

return statearr_32877;
})();
var statearr_32878_32925 = state_32857__$1;
(statearr_32878_32925[(2)] = null);

(statearr_32878_32925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (3))){
var inst_32855 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32857__$1,inst_32855);
} else {
if((state_val_32858 === (12))){
var inst_32832 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32879_32926 = state_32857__$1;
(statearr_32879_32926[(2)] = inst_32832);

(statearr_32879_32926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (2))){
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32857__$1,(4),ch);
} else {
if((state_val_32858 === (23))){
var state_32857__$1 = state_32857;
var statearr_32880_32927 = state_32857__$1;
(statearr_32880_32927[(2)] = null);

(statearr_32880_32927[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (19))){
var inst_32838 = (state_32857[(11)]);
var inst_32788 = (state_32857[(8)]);
var inst_32840 = cljs.core.async.muxch_STAR_.call(null,inst_32838);
var state_32857__$1 = state_32857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32857__$1,(22),inst_32840,inst_32788);
} else {
if((state_val_32858 === (11))){
var inst_32812 = (state_32857[(10)]);
var inst_32798 = (state_32857[(12)]);
var inst_32812__$1 = cljs.core.seq.call(null,inst_32798);
var state_32857__$1 = (function (){var statearr_32881 = state_32857;
(statearr_32881[(10)] = inst_32812__$1);

return statearr_32881;
})();
if(inst_32812__$1){
var statearr_32882_32928 = state_32857__$1;
(statearr_32882_32928[(1)] = (13));

} else {
var statearr_32883_32929 = state_32857__$1;
(statearr_32883_32929[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (9))){
var inst_32834 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32884_32930 = state_32857__$1;
(statearr_32884_32930[(2)] = inst_32834);

(statearr_32884_32930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (5))){
var inst_32795 = cljs.core.deref.call(null,mults);
var inst_32796 = cljs.core.vals.call(null,inst_32795);
var inst_32797 = cljs.core.seq.call(null,inst_32796);
var inst_32798 = inst_32797;
var inst_32799 = null;
var inst_32800 = (0);
var inst_32801 = (0);
var state_32857__$1 = (function (){var statearr_32885 = state_32857;
(statearr_32885[(12)] = inst_32798);

(statearr_32885[(13)] = inst_32799);

(statearr_32885[(15)] = inst_32801);

(statearr_32885[(16)] = inst_32800);

return statearr_32885;
})();
var statearr_32886_32931 = state_32857__$1;
(statearr_32886_32931[(2)] = null);

(statearr_32886_32931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (14))){
var state_32857__$1 = state_32857;
var statearr_32890_32932 = state_32857__$1;
(statearr_32890_32932[(2)] = null);

(statearr_32890_32932[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (16))){
var inst_32812 = (state_32857[(10)]);
var inst_32816 = cljs.core.chunk_first.call(null,inst_32812);
var inst_32817 = cljs.core.chunk_rest.call(null,inst_32812);
var inst_32818 = cljs.core.count.call(null,inst_32816);
var inst_32798 = inst_32817;
var inst_32799 = inst_32816;
var inst_32800 = inst_32818;
var inst_32801 = (0);
var state_32857__$1 = (function (){var statearr_32891 = state_32857;
(statearr_32891[(12)] = inst_32798);

(statearr_32891[(13)] = inst_32799);

(statearr_32891[(15)] = inst_32801);

(statearr_32891[(16)] = inst_32800);

return statearr_32891;
})();
var statearr_32892_32933 = state_32857__$1;
(statearr_32892_32933[(2)] = null);

(statearr_32892_32933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (10))){
var inst_32798 = (state_32857[(12)]);
var inst_32799 = (state_32857[(13)]);
var inst_32801 = (state_32857[(15)]);
var inst_32800 = (state_32857[(16)]);
var inst_32806 = cljs.core._nth.call(null,inst_32799,inst_32801);
var inst_32807 = cljs.core.async.muxch_STAR_.call(null,inst_32806);
var inst_32808 = cljs.core.async.close_BANG_.call(null,inst_32807);
var inst_32809 = (inst_32801 + (1));
var tmp32887 = inst_32798;
var tmp32888 = inst_32799;
var tmp32889 = inst_32800;
var inst_32798__$1 = tmp32887;
var inst_32799__$1 = tmp32888;
var inst_32800__$1 = tmp32889;
var inst_32801__$1 = inst_32809;
var state_32857__$1 = (function (){var statearr_32893 = state_32857;
(statearr_32893[(12)] = inst_32798__$1);

(statearr_32893[(13)] = inst_32799__$1);

(statearr_32893[(15)] = inst_32801__$1);

(statearr_32893[(17)] = inst_32808);

(statearr_32893[(16)] = inst_32800__$1);

return statearr_32893;
})();
var statearr_32894_32934 = state_32857__$1;
(statearr_32894_32934[(2)] = null);

(statearr_32894_32934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (18))){
var inst_32827 = (state_32857[(2)]);
var state_32857__$1 = state_32857;
var statearr_32895_32935 = state_32857__$1;
(statearr_32895_32935[(2)] = inst_32827);

(statearr_32895_32935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32858 === (8))){
var inst_32801 = (state_32857[(15)]);
var inst_32800 = (state_32857[(16)]);
var inst_32803 = (inst_32801 < inst_32800);
var inst_32804 = inst_32803;
var state_32857__$1 = state_32857;
if(cljs.core.truth_(inst_32804)){
var statearr_32896_32936 = state_32857__$1;
(statearr_32896_32936[(1)] = (10));

} else {
var statearr_32897_32937 = state_32857__$1;
(statearr_32897_32937[(1)] = (11));

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
});})(c__30990__auto___32909,mults,ensure_mult,p))
;
return ((function (switch__30878__auto__,c__30990__auto___32909,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_32901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32901[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_32901[(1)] = (1));

return statearr_32901;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_32857){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_32857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e32902){if((e32902 instanceof Object)){
var ex__30882__auto__ = e32902;
var statearr_32903_32938 = state_32857;
(statearr_32903_32938[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32939 = state_32857;
state_32857 = G__32939;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_32857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_32857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___32909,mults,ensure_mult,p))
})();
var state__30992__auto__ = (function (){var statearr_32904 = f__30991__auto__.call(null);
(statearr_32904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___32909);

return statearr_32904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___32909,mults,ensure_mult,p))
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
var args32940 = [];
var len__26171__auto___32943 = arguments.length;
var i__26172__auto___32944 = (0);
while(true){
if((i__26172__auto___32944 < len__26171__auto___32943)){
args32940.push((arguments[i__26172__auto___32944]));

var G__32945 = (i__26172__auto___32944 + (1));
i__26172__auto___32944 = G__32945;
continue;
} else {
}
break;
}

var G__32942 = args32940.length;
switch (G__32942) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32940.length)].join('')));

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
var args32947 = [];
var len__26171__auto___32950 = arguments.length;
var i__26172__auto___32951 = (0);
while(true){
if((i__26172__auto___32951 < len__26171__auto___32950)){
args32947.push((arguments[i__26172__auto___32951]));

var G__32952 = (i__26172__auto___32951 + (1));
i__26172__auto___32951 = G__32952;
continue;
} else {
}
break;
}

var G__32949 = args32947.length;
switch (G__32949) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32947.length)].join('')));

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
var args32954 = [];
var len__26171__auto___33025 = arguments.length;
var i__26172__auto___33026 = (0);
while(true){
if((i__26172__auto___33026 < len__26171__auto___33025)){
args32954.push((arguments[i__26172__auto___33026]));

var G__33027 = (i__26172__auto___33026 + (1));
i__26172__auto___33026 = G__33027;
continue;
} else {
}
break;
}

var G__32956 = args32954.length;
switch (G__32956) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32954.length)].join('')));

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
var c__30990__auto___33029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___33029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___33029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32995){
var state_val_32996 = (state_32995[(1)]);
if((state_val_32996 === (7))){
var state_32995__$1 = state_32995;
var statearr_32997_33030 = state_32995__$1;
(statearr_32997_33030[(2)] = null);

(statearr_32997_33030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (1))){
var state_32995__$1 = state_32995;
var statearr_32998_33031 = state_32995__$1;
(statearr_32998_33031[(2)] = null);

(statearr_32998_33031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (4))){
var inst_32959 = (state_32995[(7)]);
var inst_32961 = (inst_32959 < cnt);
var state_32995__$1 = state_32995;
if(cljs.core.truth_(inst_32961)){
var statearr_32999_33032 = state_32995__$1;
(statearr_32999_33032[(1)] = (6));

} else {
var statearr_33000_33033 = state_32995__$1;
(statearr_33000_33033[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (15))){
var inst_32991 = (state_32995[(2)]);
var state_32995__$1 = state_32995;
var statearr_33001_33034 = state_32995__$1;
(statearr_33001_33034[(2)] = inst_32991);

(statearr_33001_33034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (13))){
var inst_32984 = cljs.core.async.close_BANG_.call(null,out);
var state_32995__$1 = state_32995;
var statearr_33002_33035 = state_32995__$1;
(statearr_33002_33035[(2)] = inst_32984);

(statearr_33002_33035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (6))){
var state_32995__$1 = state_32995;
var statearr_33003_33036 = state_32995__$1;
(statearr_33003_33036[(2)] = null);

(statearr_33003_33036[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (3))){
var inst_32993 = (state_32995[(2)]);
var state_32995__$1 = state_32995;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32995__$1,inst_32993);
} else {
if((state_val_32996 === (12))){
var inst_32981 = (state_32995[(8)]);
var inst_32981__$1 = (state_32995[(2)]);
var inst_32982 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32981__$1);
var state_32995__$1 = (function (){var statearr_33004 = state_32995;
(statearr_33004[(8)] = inst_32981__$1);

return statearr_33004;
})();
if(cljs.core.truth_(inst_32982)){
var statearr_33005_33037 = state_32995__$1;
(statearr_33005_33037[(1)] = (13));

} else {
var statearr_33006_33038 = state_32995__$1;
(statearr_33006_33038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (2))){
var inst_32958 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_32959 = (0);
var state_32995__$1 = (function (){var statearr_33007 = state_32995;
(statearr_33007[(7)] = inst_32959);

(statearr_33007[(9)] = inst_32958);

return statearr_33007;
})();
var statearr_33008_33039 = state_32995__$1;
(statearr_33008_33039[(2)] = null);

(statearr_33008_33039[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (11))){
var inst_32959 = (state_32995[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32995,(10),Object,null,(9));
var inst_32968 = chs__$1.call(null,inst_32959);
var inst_32969 = done.call(null,inst_32959);
var inst_32970 = cljs.core.async.take_BANG_.call(null,inst_32968,inst_32969);
var state_32995__$1 = state_32995;
var statearr_33009_33040 = state_32995__$1;
(statearr_33009_33040[(2)] = inst_32970);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (9))){
var inst_32959 = (state_32995[(7)]);
var inst_32972 = (state_32995[(2)]);
var inst_32973 = (inst_32959 + (1));
var inst_32959__$1 = inst_32973;
var state_32995__$1 = (function (){var statearr_33010 = state_32995;
(statearr_33010[(7)] = inst_32959__$1);

(statearr_33010[(10)] = inst_32972);

return statearr_33010;
})();
var statearr_33011_33041 = state_32995__$1;
(statearr_33011_33041[(2)] = null);

(statearr_33011_33041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (5))){
var inst_32979 = (state_32995[(2)]);
var state_32995__$1 = (function (){var statearr_33012 = state_32995;
(statearr_33012[(11)] = inst_32979);

return statearr_33012;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32995__$1,(12),dchan);
} else {
if((state_val_32996 === (14))){
var inst_32981 = (state_32995[(8)]);
var inst_32986 = cljs.core.apply.call(null,f,inst_32981);
var state_32995__$1 = state_32995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32995__$1,(16),out,inst_32986);
} else {
if((state_val_32996 === (16))){
var inst_32988 = (state_32995[(2)]);
var state_32995__$1 = (function (){var statearr_33013 = state_32995;
(statearr_33013[(12)] = inst_32988);

return statearr_33013;
})();
var statearr_33014_33042 = state_32995__$1;
(statearr_33014_33042[(2)] = null);

(statearr_33014_33042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (10))){
var inst_32963 = (state_32995[(2)]);
var inst_32964 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32995__$1 = (function (){var statearr_33015 = state_32995;
(statearr_33015[(13)] = inst_32963);

return statearr_33015;
})();
var statearr_33016_33043 = state_32995__$1;
(statearr_33016_33043[(2)] = inst_32964);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32995__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32996 === (8))){
var inst_32977 = (state_32995[(2)]);
var state_32995__$1 = state_32995;
var statearr_33017_33044 = state_32995__$1;
(statearr_33017_33044[(2)] = inst_32977);

(statearr_33017_33044[(1)] = (5));


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
});})(c__30990__auto___33029,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30878__auto__,c__30990__auto___33029,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33021[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33021[(1)] = (1));

return statearr_33021;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_32995){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_32995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33022){if((e33022 instanceof Object)){
var ex__30882__auto__ = e33022;
var statearr_33023_33045 = state_32995;
(statearr_33023_33045[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33046 = state_32995;
state_32995 = G__33046;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_32995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_32995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___33029,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30992__auto__ = (function (){var statearr_33024 = f__30991__auto__.call(null);
(statearr_33024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___33029);

return statearr_33024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___33029,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args33048 = [];
var len__26171__auto___33106 = arguments.length;
var i__26172__auto___33107 = (0);
while(true){
if((i__26172__auto___33107 < len__26171__auto___33106)){
args33048.push((arguments[i__26172__auto___33107]));

var G__33108 = (i__26172__auto___33107 + (1));
i__26172__auto___33107 = G__33108;
continue;
} else {
}
break;
}

var G__33050 = args33048.length;
switch (G__33050) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33048.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30990__auto___33110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___33110,out){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___33110,out){
return (function (state_33082){
var state_val_33083 = (state_33082[(1)]);
if((state_val_33083 === (7))){
var inst_33061 = (state_33082[(7)]);
var inst_33062 = (state_33082[(8)]);
var inst_33061__$1 = (state_33082[(2)]);
var inst_33062__$1 = cljs.core.nth.call(null,inst_33061__$1,(0),null);
var inst_33063 = cljs.core.nth.call(null,inst_33061__$1,(1),null);
var inst_33064 = (inst_33062__$1 == null);
var state_33082__$1 = (function (){var statearr_33084 = state_33082;
(statearr_33084[(7)] = inst_33061__$1);

(statearr_33084[(9)] = inst_33063);

(statearr_33084[(8)] = inst_33062__$1);

return statearr_33084;
})();
if(cljs.core.truth_(inst_33064)){
var statearr_33085_33111 = state_33082__$1;
(statearr_33085_33111[(1)] = (8));

} else {
var statearr_33086_33112 = state_33082__$1;
(statearr_33086_33112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (1))){
var inst_33051 = cljs.core.vec.call(null,chs);
var inst_33052 = inst_33051;
var state_33082__$1 = (function (){var statearr_33087 = state_33082;
(statearr_33087[(10)] = inst_33052);

return statearr_33087;
})();
var statearr_33088_33113 = state_33082__$1;
(statearr_33088_33113[(2)] = null);

(statearr_33088_33113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (4))){
var inst_33052 = (state_33082[(10)]);
var state_33082__$1 = state_33082;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33082__$1,(7),inst_33052);
} else {
if((state_val_33083 === (6))){
var inst_33078 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33089_33114 = state_33082__$1;
(statearr_33089_33114[(2)] = inst_33078);

(statearr_33089_33114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (3))){
var inst_33080 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33082__$1,inst_33080);
} else {
if((state_val_33083 === (2))){
var inst_33052 = (state_33082[(10)]);
var inst_33054 = cljs.core.count.call(null,inst_33052);
var inst_33055 = (inst_33054 > (0));
var state_33082__$1 = state_33082;
if(cljs.core.truth_(inst_33055)){
var statearr_33091_33115 = state_33082__$1;
(statearr_33091_33115[(1)] = (4));

} else {
var statearr_33092_33116 = state_33082__$1;
(statearr_33092_33116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (11))){
var inst_33052 = (state_33082[(10)]);
var inst_33071 = (state_33082[(2)]);
var tmp33090 = inst_33052;
var inst_33052__$1 = tmp33090;
var state_33082__$1 = (function (){var statearr_33093 = state_33082;
(statearr_33093[(11)] = inst_33071);

(statearr_33093[(10)] = inst_33052__$1);

return statearr_33093;
})();
var statearr_33094_33117 = state_33082__$1;
(statearr_33094_33117[(2)] = null);

(statearr_33094_33117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (9))){
var inst_33062 = (state_33082[(8)]);
var state_33082__$1 = state_33082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33082__$1,(11),out,inst_33062);
} else {
if((state_val_33083 === (5))){
var inst_33076 = cljs.core.async.close_BANG_.call(null,out);
var state_33082__$1 = state_33082;
var statearr_33095_33118 = state_33082__$1;
(statearr_33095_33118[(2)] = inst_33076);

(statearr_33095_33118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (10))){
var inst_33074 = (state_33082[(2)]);
var state_33082__$1 = state_33082;
var statearr_33096_33119 = state_33082__$1;
(statearr_33096_33119[(2)] = inst_33074);

(statearr_33096_33119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33083 === (8))){
var inst_33061 = (state_33082[(7)]);
var inst_33063 = (state_33082[(9)]);
var inst_33062 = (state_33082[(8)]);
var inst_33052 = (state_33082[(10)]);
var inst_33066 = (function (){var cs = inst_33052;
var vec__33057 = inst_33061;
var v = inst_33062;
var c = inst_33063;
return ((function (cs,vec__33057,v,c,inst_33061,inst_33063,inst_33062,inst_33052,state_val_33083,c__30990__auto___33110,out){
return (function (p1__33047_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33047_SHARP_);
});
;})(cs,vec__33057,v,c,inst_33061,inst_33063,inst_33062,inst_33052,state_val_33083,c__30990__auto___33110,out))
})();
var inst_33067 = cljs.core.filterv.call(null,inst_33066,inst_33052);
var inst_33052__$1 = inst_33067;
var state_33082__$1 = (function (){var statearr_33097 = state_33082;
(statearr_33097[(10)] = inst_33052__$1);

return statearr_33097;
})();
var statearr_33098_33120 = state_33082__$1;
(statearr_33098_33120[(2)] = null);

(statearr_33098_33120[(1)] = (2));


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
});})(c__30990__auto___33110,out))
;
return ((function (switch__30878__auto__,c__30990__auto___33110,out){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33102[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33102[(1)] = (1));

return statearr_33102;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33082){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_33082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33103){if((e33103 instanceof Object)){
var ex__30882__auto__ = e33103;
var statearr_33104_33121 = state_33082;
(statearr_33104_33121[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33122 = state_33082;
state_33082 = G__33122;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___33110,out))
})();
var state__30992__auto__ = (function (){var statearr_33105 = f__30991__auto__.call(null);
(statearr_33105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___33110);

return statearr_33105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___33110,out))
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
var args33123 = [];
var len__26171__auto___33172 = arguments.length;
var i__26172__auto___33173 = (0);
while(true){
if((i__26172__auto___33173 < len__26171__auto___33172)){
args33123.push((arguments[i__26172__auto___33173]));

var G__33174 = (i__26172__auto___33173 + (1));
i__26172__auto___33173 = G__33174;
continue;
} else {
}
break;
}

var G__33125 = args33123.length;
switch (G__33125) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33123.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30990__auto___33176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___33176,out){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___33176,out){
return (function (state_33149){
var state_val_33150 = (state_33149[(1)]);
if((state_val_33150 === (7))){
var inst_33131 = (state_33149[(7)]);
var inst_33131__$1 = (state_33149[(2)]);
var inst_33132 = (inst_33131__$1 == null);
var inst_33133 = cljs.core.not.call(null,inst_33132);
var state_33149__$1 = (function (){var statearr_33151 = state_33149;
(statearr_33151[(7)] = inst_33131__$1);

return statearr_33151;
})();
if(inst_33133){
var statearr_33152_33177 = state_33149__$1;
(statearr_33152_33177[(1)] = (8));

} else {
var statearr_33153_33178 = state_33149__$1;
(statearr_33153_33178[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (1))){
var inst_33126 = (0);
var state_33149__$1 = (function (){var statearr_33154 = state_33149;
(statearr_33154[(8)] = inst_33126);

return statearr_33154;
})();
var statearr_33155_33179 = state_33149__$1;
(statearr_33155_33179[(2)] = null);

(statearr_33155_33179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (4))){
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33149__$1,(7),ch);
} else {
if((state_val_33150 === (6))){
var inst_33144 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33156_33180 = state_33149__$1;
(statearr_33156_33180[(2)] = inst_33144);

(statearr_33156_33180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (3))){
var inst_33146 = (state_33149[(2)]);
var inst_33147 = cljs.core.async.close_BANG_.call(null,out);
var state_33149__$1 = (function (){var statearr_33157 = state_33149;
(statearr_33157[(9)] = inst_33146);

return statearr_33157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33149__$1,inst_33147);
} else {
if((state_val_33150 === (2))){
var inst_33126 = (state_33149[(8)]);
var inst_33128 = (inst_33126 < n);
var state_33149__$1 = state_33149;
if(cljs.core.truth_(inst_33128)){
var statearr_33158_33181 = state_33149__$1;
(statearr_33158_33181[(1)] = (4));

} else {
var statearr_33159_33182 = state_33149__$1;
(statearr_33159_33182[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (11))){
var inst_33126 = (state_33149[(8)]);
var inst_33136 = (state_33149[(2)]);
var inst_33137 = (inst_33126 + (1));
var inst_33126__$1 = inst_33137;
var state_33149__$1 = (function (){var statearr_33160 = state_33149;
(statearr_33160[(10)] = inst_33136);

(statearr_33160[(8)] = inst_33126__$1);

return statearr_33160;
})();
var statearr_33161_33183 = state_33149__$1;
(statearr_33161_33183[(2)] = null);

(statearr_33161_33183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (9))){
var state_33149__$1 = state_33149;
var statearr_33162_33184 = state_33149__$1;
(statearr_33162_33184[(2)] = null);

(statearr_33162_33184[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (5))){
var state_33149__$1 = state_33149;
var statearr_33163_33185 = state_33149__$1;
(statearr_33163_33185[(2)] = null);

(statearr_33163_33185[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (10))){
var inst_33141 = (state_33149[(2)]);
var state_33149__$1 = state_33149;
var statearr_33164_33186 = state_33149__$1;
(statearr_33164_33186[(2)] = inst_33141);

(statearr_33164_33186[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33150 === (8))){
var inst_33131 = (state_33149[(7)]);
var state_33149__$1 = state_33149;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33149__$1,(11),out,inst_33131);
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
});})(c__30990__auto___33176,out))
;
return ((function (switch__30878__auto__,c__30990__auto___33176,out){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33168 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33168[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33168[(1)] = (1));

return statearr_33168;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33149){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_33149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33169){if((e33169 instanceof Object)){
var ex__30882__auto__ = e33169;
var statearr_33170_33187 = state_33149;
(statearr_33170_33187[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33188 = state_33149;
state_33149 = G__33188;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33149){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___33176,out))
})();
var state__30992__auto__ = (function (){var statearr_33171 = f__30991__auto__.call(null);
(statearr_33171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___33176);

return statearr_33171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___33176,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33196 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33196 = (function (map_LT_,f,ch,meta33197){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33197 = meta33197;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33198,meta33197__$1){
var self__ = this;
var _33198__$1 = this;
return (new cljs.core.async.t_cljs$core$async33196(self__.map_LT_,self__.f,self__.ch,meta33197__$1));
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33198){
var self__ = this;
var _33198__$1 = this;
return self__.meta33197;
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33199 = (function (map_LT_,f,ch,meta33197,_,fn1,meta33200){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta33197 = meta33197;
this._ = _;
this.fn1 = fn1;
this.meta33200 = meta33200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33201,meta33200__$1){
var self__ = this;
var _33201__$1 = this;
return (new cljs.core.async.t_cljs$core$async33199(self__.map_LT_,self__.f,self__.ch,self__.meta33197,self__._,self__.fn1,meta33200__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33201){
var self__ = this;
var _33201__$1 = this;
return self__.meta33200;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33199.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33189_SHARP_){
return f1.call(null,(((p1__33189_SHARP_ == null))?null:self__.f.call(null,p1__33189_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33199.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33197","meta33197",-780914017,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33196","cljs.core.async/t_cljs$core$async33196",479400078,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33200","meta33200",1803901695,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33199";

cljs.core.async.t_cljs$core$async33199.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async33199");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33199 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33199(map_LT___$1,f__$1,ch__$1,meta33197__$1,___$2,fn1__$1,meta33200){
return (new cljs.core.async.t_cljs$core$async33199(map_LT___$1,f__$1,ch__$1,meta33197__$1,___$2,fn1__$1,meta33200));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33199(self__.map_LT_,self__.f,self__.ch,self__.meta33197,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33196.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33197","meta33197",-780914017,null)], null);
});

cljs.core.async.t_cljs$core$async33196.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33196.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33196";

cljs.core.async.t_cljs$core$async33196.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async33196");
});

cljs.core.async.__GT_t_cljs$core$async33196 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33196(map_LT___$1,f__$1,ch__$1,meta33197){
return (new cljs.core.async.t_cljs$core$async33196(map_LT___$1,f__$1,ch__$1,meta33197));
});

}

return (new cljs.core.async.t_cljs$core$async33196(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33205 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33205 = (function (map_GT_,f,ch,meta33206){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta33206 = meta33206;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33207,meta33206__$1){
var self__ = this;
var _33207__$1 = this;
return (new cljs.core.async.t_cljs$core$async33205(self__.map_GT_,self__.f,self__.ch,meta33206__$1));
});

cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33207){
var self__ = this;
var _33207__$1 = this;
return self__.meta33206;
});

cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33205.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33205.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33206","meta33206",1580266608,null)], null);
});

cljs.core.async.t_cljs$core$async33205.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33205.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33205";

cljs.core.async.t_cljs$core$async33205.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async33205");
});

cljs.core.async.__GT_t_cljs$core$async33205 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33205(map_GT___$1,f__$1,ch__$1,meta33206){
return (new cljs.core.async.t_cljs$core$async33205(map_GT___$1,f__$1,ch__$1,meta33206));
});

}

return (new cljs.core.async.t_cljs$core$async33205(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33211 = (function (filter_GT_,p,ch,meta33212){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta33212 = meta33212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33213,meta33212__$1){
var self__ = this;
var _33213__$1 = this;
return (new cljs.core.async.t_cljs$core$async33211(self__.filter_GT_,self__.p,self__.ch,meta33212__$1));
});

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33213){
var self__ = this;
var _33213__$1 = this;
return self__.meta33212;
});

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async33211.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33211.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33212","meta33212",518021493,null)], null);
});

cljs.core.async.t_cljs$core$async33211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33211";

cljs.core.async.t_cljs$core$async33211.cljs$lang$ctorPrWriter = (function (this__25702__auto__,writer__25703__auto__,opt__25704__auto__){
return cljs.core._write.call(null,writer__25703__auto__,"cljs.core.async/t_cljs$core$async33211");
});

cljs.core.async.__GT_t_cljs$core$async33211 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33211(filter_GT___$1,p__$1,ch__$1,meta33212){
return (new cljs.core.async.t_cljs$core$async33211(filter_GT___$1,p__$1,ch__$1,meta33212));
});

}

return (new cljs.core.async.t_cljs$core$async33211(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args33214 = [];
var len__26171__auto___33258 = arguments.length;
var i__26172__auto___33259 = (0);
while(true){
if((i__26172__auto___33259 < len__26171__auto___33258)){
args33214.push((arguments[i__26172__auto___33259]));

var G__33260 = (i__26172__auto___33259 + (1));
i__26172__auto___33259 = G__33260;
continue;
} else {
}
break;
}

var G__33216 = args33214.length;
switch (G__33216) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33214.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30990__auto___33262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___33262,out){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___33262,out){
return (function (state_33237){
var state_val_33238 = (state_33237[(1)]);
if((state_val_33238 === (7))){
var inst_33233 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33239_33263 = state_33237__$1;
(statearr_33239_33263[(2)] = inst_33233);

(statearr_33239_33263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (1))){
var state_33237__$1 = state_33237;
var statearr_33240_33264 = state_33237__$1;
(statearr_33240_33264[(2)] = null);

(statearr_33240_33264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (4))){
var inst_33219 = (state_33237[(7)]);
var inst_33219__$1 = (state_33237[(2)]);
var inst_33220 = (inst_33219__$1 == null);
var state_33237__$1 = (function (){var statearr_33241 = state_33237;
(statearr_33241[(7)] = inst_33219__$1);

return statearr_33241;
})();
if(cljs.core.truth_(inst_33220)){
var statearr_33242_33265 = state_33237__$1;
(statearr_33242_33265[(1)] = (5));

} else {
var statearr_33243_33266 = state_33237__$1;
(statearr_33243_33266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (6))){
var inst_33219 = (state_33237[(7)]);
var inst_33224 = p.call(null,inst_33219);
var state_33237__$1 = state_33237;
if(cljs.core.truth_(inst_33224)){
var statearr_33244_33267 = state_33237__$1;
(statearr_33244_33267[(1)] = (8));

} else {
var statearr_33245_33268 = state_33237__$1;
(statearr_33245_33268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (3))){
var inst_33235 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33237__$1,inst_33235);
} else {
if((state_val_33238 === (2))){
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33237__$1,(4),ch);
} else {
if((state_val_33238 === (11))){
var inst_33227 = (state_33237[(2)]);
var state_33237__$1 = state_33237;
var statearr_33246_33269 = state_33237__$1;
(statearr_33246_33269[(2)] = inst_33227);

(statearr_33246_33269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (9))){
var state_33237__$1 = state_33237;
var statearr_33247_33270 = state_33237__$1;
(statearr_33247_33270[(2)] = null);

(statearr_33247_33270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (5))){
var inst_33222 = cljs.core.async.close_BANG_.call(null,out);
var state_33237__$1 = state_33237;
var statearr_33248_33271 = state_33237__$1;
(statearr_33248_33271[(2)] = inst_33222);

(statearr_33248_33271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (10))){
var inst_33230 = (state_33237[(2)]);
var state_33237__$1 = (function (){var statearr_33249 = state_33237;
(statearr_33249[(8)] = inst_33230);

return statearr_33249;
})();
var statearr_33250_33272 = state_33237__$1;
(statearr_33250_33272[(2)] = null);

(statearr_33250_33272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33238 === (8))){
var inst_33219 = (state_33237[(7)]);
var state_33237__$1 = state_33237;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33237__$1,(11),out,inst_33219);
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
});})(c__30990__auto___33262,out))
;
return ((function (switch__30878__auto__,c__30990__auto___33262,out){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33254 = [null,null,null,null,null,null,null,null,null];
(statearr_33254[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33254[(1)] = (1));

return statearr_33254;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33237){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_33237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33255){if((e33255 instanceof Object)){
var ex__30882__auto__ = e33255;
var statearr_33256_33273 = state_33237;
(statearr_33256_33273[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33274 = state_33237;
state_33237 = G__33274;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33237){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___33262,out))
})();
var state__30992__auto__ = (function (){var statearr_33257 = f__30991__auto__.call(null);
(statearr_33257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___33262);

return statearr_33257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___33262,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args33275 = [];
var len__26171__auto___33278 = arguments.length;
var i__26172__auto___33279 = (0);
while(true){
if((i__26172__auto___33279 < len__26171__auto___33278)){
args33275.push((arguments[i__26172__auto___33279]));

var G__33280 = (i__26172__auto___33279 + (1));
i__26172__auto___33279 = G__33280;
continue;
} else {
}
break;
}

var G__33277 = args33275.length;
switch (G__33277) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33275.length)].join('')));

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
var c__30990__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto__){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto__){
return (function (state_33447){
var state_val_33448 = (state_33447[(1)]);
if((state_val_33448 === (7))){
var inst_33443 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33449_33490 = state_33447__$1;
(statearr_33449_33490[(2)] = inst_33443);

(statearr_33449_33490[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (20))){
var inst_33413 = (state_33447[(7)]);
var inst_33424 = (state_33447[(2)]);
var inst_33425 = cljs.core.next.call(null,inst_33413);
var inst_33399 = inst_33425;
var inst_33400 = null;
var inst_33401 = (0);
var inst_33402 = (0);
var state_33447__$1 = (function (){var statearr_33450 = state_33447;
(statearr_33450[(8)] = inst_33401);

(statearr_33450[(9)] = inst_33399);

(statearr_33450[(10)] = inst_33402);

(statearr_33450[(11)] = inst_33400);

(statearr_33450[(12)] = inst_33424);

return statearr_33450;
})();
var statearr_33451_33491 = state_33447__$1;
(statearr_33451_33491[(2)] = null);

(statearr_33451_33491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (1))){
var state_33447__$1 = state_33447;
var statearr_33452_33492 = state_33447__$1;
(statearr_33452_33492[(2)] = null);

(statearr_33452_33492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (4))){
var inst_33388 = (state_33447[(13)]);
var inst_33388__$1 = (state_33447[(2)]);
var inst_33389 = (inst_33388__$1 == null);
var state_33447__$1 = (function (){var statearr_33453 = state_33447;
(statearr_33453[(13)] = inst_33388__$1);

return statearr_33453;
})();
if(cljs.core.truth_(inst_33389)){
var statearr_33454_33493 = state_33447__$1;
(statearr_33454_33493[(1)] = (5));

} else {
var statearr_33455_33494 = state_33447__$1;
(statearr_33455_33494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (15))){
var state_33447__$1 = state_33447;
var statearr_33459_33495 = state_33447__$1;
(statearr_33459_33495[(2)] = null);

(statearr_33459_33495[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (21))){
var state_33447__$1 = state_33447;
var statearr_33460_33496 = state_33447__$1;
(statearr_33460_33496[(2)] = null);

(statearr_33460_33496[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (13))){
var inst_33401 = (state_33447[(8)]);
var inst_33399 = (state_33447[(9)]);
var inst_33402 = (state_33447[(10)]);
var inst_33400 = (state_33447[(11)]);
var inst_33409 = (state_33447[(2)]);
var inst_33410 = (inst_33402 + (1));
var tmp33456 = inst_33401;
var tmp33457 = inst_33399;
var tmp33458 = inst_33400;
var inst_33399__$1 = tmp33457;
var inst_33400__$1 = tmp33458;
var inst_33401__$1 = tmp33456;
var inst_33402__$1 = inst_33410;
var state_33447__$1 = (function (){var statearr_33461 = state_33447;
(statearr_33461[(8)] = inst_33401__$1);

(statearr_33461[(14)] = inst_33409);

(statearr_33461[(9)] = inst_33399__$1);

(statearr_33461[(10)] = inst_33402__$1);

(statearr_33461[(11)] = inst_33400__$1);

return statearr_33461;
})();
var statearr_33462_33497 = state_33447__$1;
(statearr_33462_33497[(2)] = null);

(statearr_33462_33497[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (22))){
var state_33447__$1 = state_33447;
var statearr_33463_33498 = state_33447__$1;
(statearr_33463_33498[(2)] = null);

(statearr_33463_33498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (6))){
var inst_33388 = (state_33447[(13)]);
var inst_33397 = f.call(null,inst_33388);
var inst_33398 = cljs.core.seq.call(null,inst_33397);
var inst_33399 = inst_33398;
var inst_33400 = null;
var inst_33401 = (0);
var inst_33402 = (0);
var state_33447__$1 = (function (){var statearr_33464 = state_33447;
(statearr_33464[(8)] = inst_33401);

(statearr_33464[(9)] = inst_33399);

(statearr_33464[(10)] = inst_33402);

(statearr_33464[(11)] = inst_33400);

return statearr_33464;
})();
var statearr_33465_33499 = state_33447__$1;
(statearr_33465_33499[(2)] = null);

(statearr_33465_33499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (17))){
var inst_33413 = (state_33447[(7)]);
var inst_33417 = cljs.core.chunk_first.call(null,inst_33413);
var inst_33418 = cljs.core.chunk_rest.call(null,inst_33413);
var inst_33419 = cljs.core.count.call(null,inst_33417);
var inst_33399 = inst_33418;
var inst_33400 = inst_33417;
var inst_33401 = inst_33419;
var inst_33402 = (0);
var state_33447__$1 = (function (){var statearr_33466 = state_33447;
(statearr_33466[(8)] = inst_33401);

(statearr_33466[(9)] = inst_33399);

(statearr_33466[(10)] = inst_33402);

(statearr_33466[(11)] = inst_33400);

return statearr_33466;
})();
var statearr_33467_33500 = state_33447__$1;
(statearr_33467_33500[(2)] = null);

(statearr_33467_33500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (3))){
var inst_33445 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33447__$1,inst_33445);
} else {
if((state_val_33448 === (12))){
var inst_33433 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33468_33501 = state_33447__$1;
(statearr_33468_33501[(2)] = inst_33433);

(statearr_33468_33501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (2))){
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33447__$1,(4),in$);
} else {
if((state_val_33448 === (23))){
var inst_33441 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33469_33502 = state_33447__$1;
(statearr_33469_33502[(2)] = inst_33441);

(statearr_33469_33502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (19))){
var inst_33428 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33470_33503 = state_33447__$1;
(statearr_33470_33503[(2)] = inst_33428);

(statearr_33470_33503[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (11))){
var inst_33413 = (state_33447[(7)]);
var inst_33399 = (state_33447[(9)]);
var inst_33413__$1 = cljs.core.seq.call(null,inst_33399);
var state_33447__$1 = (function (){var statearr_33471 = state_33447;
(statearr_33471[(7)] = inst_33413__$1);

return statearr_33471;
})();
if(inst_33413__$1){
var statearr_33472_33504 = state_33447__$1;
(statearr_33472_33504[(1)] = (14));

} else {
var statearr_33473_33505 = state_33447__$1;
(statearr_33473_33505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (9))){
var inst_33435 = (state_33447[(2)]);
var inst_33436 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33447__$1 = (function (){var statearr_33474 = state_33447;
(statearr_33474[(15)] = inst_33435);

return statearr_33474;
})();
if(cljs.core.truth_(inst_33436)){
var statearr_33475_33506 = state_33447__$1;
(statearr_33475_33506[(1)] = (21));

} else {
var statearr_33476_33507 = state_33447__$1;
(statearr_33476_33507[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (5))){
var inst_33391 = cljs.core.async.close_BANG_.call(null,out);
var state_33447__$1 = state_33447;
var statearr_33477_33508 = state_33447__$1;
(statearr_33477_33508[(2)] = inst_33391);

(statearr_33477_33508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (14))){
var inst_33413 = (state_33447[(7)]);
var inst_33415 = cljs.core.chunked_seq_QMARK_.call(null,inst_33413);
var state_33447__$1 = state_33447;
if(inst_33415){
var statearr_33478_33509 = state_33447__$1;
(statearr_33478_33509[(1)] = (17));

} else {
var statearr_33479_33510 = state_33447__$1;
(statearr_33479_33510[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (16))){
var inst_33431 = (state_33447[(2)]);
var state_33447__$1 = state_33447;
var statearr_33480_33511 = state_33447__$1;
(statearr_33480_33511[(2)] = inst_33431);

(statearr_33480_33511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33448 === (10))){
var inst_33402 = (state_33447[(10)]);
var inst_33400 = (state_33447[(11)]);
var inst_33407 = cljs.core._nth.call(null,inst_33400,inst_33402);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33447__$1,(13),out,inst_33407);
} else {
if((state_val_33448 === (18))){
var inst_33413 = (state_33447[(7)]);
var inst_33422 = cljs.core.first.call(null,inst_33413);
var state_33447__$1 = state_33447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33447__$1,(20),out,inst_33422);
} else {
if((state_val_33448 === (8))){
var inst_33401 = (state_33447[(8)]);
var inst_33402 = (state_33447[(10)]);
var inst_33404 = (inst_33402 < inst_33401);
var inst_33405 = inst_33404;
var state_33447__$1 = state_33447;
if(cljs.core.truth_(inst_33405)){
var statearr_33481_33512 = state_33447__$1;
(statearr_33481_33512[(1)] = (10));

} else {
var statearr_33482_33513 = state_33447__$1;
(statearr_33482_33513[(1)] = (11));

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
});})(c__30990__auto__))
;
return ((function (switch__30878__auto__,c__30990__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____0 = (function (){
var statearr_33486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33486[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__);

(statearr_33486[(1)] = (1));

return statearr_33486;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____1 = (function (state_33447){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_33447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33487){if((e33487 instanceof Object)){
var ex__30882__auto__ = e33487;
var statearr_33488_33514 = state_33447;
(statearr_33488_33514[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33487;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33515 = state_33447;
state_33447 = G__33515;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__ = function(state_33447){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____1.call(this,state_33447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30879__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto__))
})();
var state__30992__auto__ = (function (){var statearr_33489 = f__30991__auto__.call(null);
(statearr_33489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto__);

return statearr_33489;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto__))
);

return c__30990__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args33516 = [];
var len__26171__auto___33519 = arguments.length;
var i__26172__auto___33520 = (0);
while(true){
if((i__26172__auto___33520 < len__26171__auto___33519)){
args33516.push((arguments[i__26172__auto___33520]));

var G__33521 = (i__26172__auto___33520 + (1));
i__26172__auto___33520 = G__33521;
continue;
} else {
}
break;
}

var G__33518 = args33516.length;
switch (G__33518) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33516.length)].join('')));

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
var args33523 = [];
var len__26171__auto___33526 = arguments.length;
var i__26172__auto___33527 = (0);
while(true){
if((i__26172__auto___33527 < len__26171__auto___33526)){
args33523.push((arguments[i__26172__auto___33527]));

var G__33528 = (i__26172__auto___33527 + (1));
i__26172__auto___33527 = G__33528;
continue;
} else {
}
break;
}

var G__33525 = args33523.length;
switch (G__33525) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33523.length)].join('')));

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
var args33530 = [];
var len__26171__auto___33581 = arguments.length;
var i__26172__auto___33582 = (0);
while(true){
if((i__26172__auto___33582 < len__26171__auto___33581)){
args33530.push((arguments[i__26172__auto___33582]));

var G__33583 = (i__26172__auto___33582 + (1));
i__26172__auto___33582 = G__33583;
continue;
} else {
}
break;
}

var G__33532 = args33530.length;
switch (G__33532) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33530.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30990__auto___33585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___33585,out){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___33585,out){
return (function (state_33556){
var state_val_33557 = (state_33556[(1)]);
if((state_val_33557 === (7))){
var inst_33551 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
var statearr_33558_33586 = state_33556__$1;
(statearr_33558_33586[(2)] = inst_33551);

(statearr_33558_33586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (1))){
var inst_33533 = null;
var state_33556__$1 = (function (){var statearr_33559 = state_33556;
(statearr_33559[(7)] = inst_33533);

return statearr_33559;
})();
var statearr_33560_33587 = state_33556__$1;
(statearr_33560_33587[(2)] = null);

(statearr_33560_33587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (4))){
var inst_33536 = (state_33556[(8)]);
var inst_33536__$1 = (state_33556[(2)]);
var inst_33537 = (inst_33536__$1 == null);
var inst_33538 = cljs.core.not.call(null,inst_33537);
var state_33556__$1 = (function (){var statearr_33561 = state_33556;
(statearr_33561[(8)] = inst_33536__$1);

return statearr_33561;
})();
if(inst_33538){
var statearr_33562_33588 = state_33556__$1;
(statearr_33562_33588[(1)] = (5));

} else {
var statearr_33563_33589 = state_33556__$1;
(statearr_33563_33589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (6))){
var state_33556__$1 = state_33556;
var statearr_33564_33590 = state_33556__$1;
(statearr_33564_33590[(2)] = null);

(statearr_33564_33590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (3))){
var inst_33553 = (state_33556[(2)]);
var inst_33554 = cljs.core.async.close_BANG_.call(null,out);
var state_33556__$1 = (function (){var statearr_33565 = state_33556;
(statearr_33565[(9)] = inst_33553);

return statearr_33565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33556__$1,inst_33554);
} else {
if((state_val_33557 === (2))){
var state_33556__$1 = state_33556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33556__$1,(4),ch);
} else {
if((state_val_33557 === (11))){
var inst_33536 = (state_33556[(8)]);
var inst_33545 = (state_33556[(2)]);
var inst_33533 = inst_33536;
var state_33556__$1 = (function (){var statearr_33566 = state_33556;
(statearr_33566[(10)] = inst_33545);

(statearr_33566[(7)] = inst_33533);

return statearr_33566;
})();
var statearr_33567_33591 = state_33556__$1;
(statearr_33567_33591[(2)] = null);

(statearr_33567_33591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (9))){
var inst_33536 = (state_33556[(8)]);
var state_33556__$1 = state_33556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33556__$1,(11),out,inst_33536);
} else {
if((state_val_33557 === (5))){
var inst_33536 = (state_33556[(8)]);
var inst_33533 = (state_33556[(7)]);
var inst_33540 = cljs.core._EQ_.call(null,inst_33536,inst_33533);
var state_33556__$1 = state_33556;
if(inst_33540){
var statearr_33569_33592 = state_33556__$1;
(statearr_33569_33592[(1)] = (8));

} else {
var statearr_33570_33593 = state_33556__$1;
(statearr_33570_33593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (10))){
var inst_33548 = (state_33556[(2)]);
var state_33556__$1 = state_33556;
var statearr_33571_33594 = state_33556__$1;
(statearr_33571_33594[(2)] = inst_33548);

(statearr_33571_33594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33557 === (8))){
var inst_33533 = (state_33556[(7)]);
var tmp33568 = inst_33533;
var inst_33533__$1 = tmp33568;
var state_33556__$1 = (function (){var statearr_33572 = state_33556;
(statearr_33572[(7)] = inst_33533__$1);

return statearr_33572;
})();
var statearr_33573_33595 = state_33556__$1;
(statearr_33573_33595[(2)] = null);

(statearr_33573_33595[(1)] = (2));


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
});})(c__30990__auto___33585,out))
;
return ((function (switch__30878__auto__,c__30990__auto___33585,out){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33577 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33577[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33577[(1)] = (1));

return statearr_33577;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33556){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_33556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33578){if((e33578 instanceof Object)){
var ex__30882__auto__ = e33578;
var statearr_33579_33596 = state_33556;
(statearr_33579_33596[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33597 = state_33556;
state_33556 = G__33597;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___33585,out))
})();
var state__30992__auto__ = (function (){var statearr_33580 = f__30991__auto__.call(null);
(statearr_33580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___33585);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___33585,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args33598 = [];
var len__26171__auto___33668 = arguments.length;
var i__26172__auto___33669 = (0);
while(true){
if((i__26172__auto___33669 < len__26171__auto___33668)){
args33598.push((arguments[i__26172__auto___33669]));

var G__33670 = (i__26172__auto___33669 + (1));
i__26172__auto___33669 = G__33670;
continue;
} else {
}
break;
}

var G__33600 = args33598.length;
switch (G__33600) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33598.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30990__auto___33672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___33672,out){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___33672,out){
return (function (state_33638){
var state_val_33639 = (state_33638[(1)]);
if((state_val_33639 === (7))){
var inst_33634 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33640_33673 = state_33638__$1;
(statearr_33640_33673[(2)] = inst_33634);

(statearr_33640_33673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (1))){
var inst_33601 = (new Array(n));
var inst_33602 = inst_33601;
var inst_33603 = (0);
var state_33638__$1 = (function (){var statearr_33641 = state_33638;
(statearr_33641[(7)] = inst_33603);

(statearr_33641[(8)] = inst_33602);

return statearr_33641;
})();
var statearr_33642_33674 = state_33638__$1;
(statearr_33642_33674[(2)] = null);

(statearr_33642_33674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (4))){
var inst_33606 = (state_33638[(9)]);
var inst_33606__$1 = (state_33638[(2)]);
var inst_33607 = (inst_33606__$1 == null);
var inst_33608 = cljs.core.not.call(null,inst_33607);
var state_33638__$1 = (function (){var statearr_33643 = state_33638;
(statearr_33643[(9)] = inst_33606__$1);

return statearr_33643;
})();
if(inst_33608){
var statearr_33644_33675 = state_33638__$1;
(statearr_33644_33675[(1)] = (5));

} else {
var statearr_33645_33676 = state_33638__$1;
(statearr_33645_33676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (15))){
var inst_33628 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33646_33677 = state_33638__$1;
(statearr_33646_33677[(2)] = inst_33628);

(statearr_33646_33677[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (13))){
var state_33638__$1 = state_33638;
var statearr_33647_33678 = state_33638__$1;
(statearr_33647_33678[(2)] = null);

(statearr_33647_33678[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (6))){
var inst_33603 = (state_33638[(7)]);
var inst_33624 = (inst_33603 > (0));
var state_33638__$1 = state_33638;
if(cljs.core.truth_(inst_33624)){
var statearr_33648_33679 = state_33638__$1;
(statearr_33648_33679[(1)] = (12));

} else {
var statearr_33649_33680 = state_33638__$1;
(statearr_33649_33680[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (3))){
var inst_33636 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33638__$1,inst_33636);
} else {
if((state_val_33639 === (12))){
var inst_33602 = (state_33638[(8)]);
var inst_33626 = cljs.core.vec.call(null,inst_33602);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33638__$1,(15),out,inst_33626);
} else {
if((state_val_33639 === (2))){
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33638__$1,(4),ch);
} else {
if((state_val_33639 === (11))){
var inst_33618 = (state_33638[(2)]);
var inst_33619 = (new Array(n));
var inst_33602 = inst_33619;
var inst_33603 = (0);
var state_33638__$1 = (function (){var statearr_33650 = state_33638;
(statearr_33650[(7)] = inst_33603);

(statearr_33650[(10)] = inst_33618);

(statearr_33650[(8)] = inst_33602);

return statearr_33650;
})();
var statearr_33651_33681 = state_33638__$1;
(statearr_33651_33681[(2)] = null);

(statearr_33651_33681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (9))){
var inst_33602 = (state_33638[(8)]);
var inst_33616 = cljs.core.vec.call(null,inst_33602);
var state_33638__$1 = state_33638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33638__$1,(11),out,inst_33616);
} else {
if((state_val_33639 === (5))){
var inst_33611 = (state_33638[(11)]);
var inst_33603 = (state_33638[(7)]);
var inst_33606 = (state_33638[(9)]);
var inst_33602 = (state_33638[(8)]);
var inst_33610 = (inst_33602[inst_33603] = inst_33606);
var inst_33611__$1 = (inst_33603 + (1));
var inst_33612 = (inst_33611__$1 < n);
var state_33638__$1 = (function (){var statearr_33652 = state_33638;
(statearr_33652[(12)] = inst_33610);

(statearr_33652[(11)] = inst_33611__$1);

return statearr_33652;
})();
if(cljs.core.truth_(inst_33612)){
var statearr_33653_33682 = state_33638__$1;
(statearr_33653_33682[(1)] = (8));

} else {
var statearr_33654_33683 = state_33638__$1;
(statearr_33654_33683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (14))){
var inst_33631 = (state_33638[(2)]);
var inst_33632 = cljs.core.async.close_BANG_.call(null,out);
var state_33638__$1 = (function (){var statearr_33656 = state_33638;
(statearr_33656[(13)] = inst_33631);

return statearr_33656;
})();
var statearr_33657_33684 = state_33638__$1;
(statearr_33657_33684[(2)] = inst_33632);

(statearr_33657_33684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (10))){
var inst_33622 = (state_33638[(2)]);
var state_33638__$1 = state_33638;
var statearr_33658_33685 = state_33638__$1;
(statearr_33658_33685[(2)] = inst_33622);

(statearr_33658_33685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33639 === (8))){
var inst_33611 = (state_33638[(11)]);
var inst_33602 = (state_33638[(8)]);
var tmp33655 = inst_33602;
var inst_33602__$1 = tmp33655;
var inst_33603 = inst_33611;
var state_33638__$1 = (function (){var statearr_33659 = state_33638;
(statearr_33659[(7)] = inst_33603);

(statearr_33659[(8)] = inst_33602__$1);

return statearr_33659;
})();
var statearr_33660_33686 = state_33638__$1;
(statearr_33660_33686[(2)] = null);

(statearr_33660_33686[(1)] = (2));


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
});})(c__30990__auto___33672,out))
;
return ((function (switch__30878__auto__,c__30990__auto___33672,out){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33664[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33664[(1)] = (1));

return statearr_33664;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33638){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_33638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33665){if((e33665 instanceof Object)){
var ex__30882__auto__ = e33665;
var statearr_33666_33687 = state_33638;
(statearr_33666_33687[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33688 = state_33638;
state_33638 = G__33688;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___33672,out))
})();
var state__30992__auto__ = (function (){var statearr_33667 = f__30991__auto__.call(null);
(statearr_33667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___33672);

return statearr_33667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___33672,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args33689 = [];
var len__26171__auto___33763 = arguments.length;
var i__26172__auto___33764 = (0);
while(true){
if((i__26172__auto___33764 < len__26171__auto___33763)){
args33689.push((arguments[i__26172__auto___33764]));

var G__33765 = (i__26172__auto___33764 + (1));
i__26172__auto___33764 = G__33765;
continue;
} else {
}
break;
}

var G__33691 = args33689.length;
switch (G__33691) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33689.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30990__auto___33767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30990__auto___33767,out){
return (function (){
var f__30991__auto__ = (function (){var switch__30878__auto__ = ((function (c__30990__auto___33767,out){
return (function (state_33733){
var state_val_33734 = (state_33733[(1)]);
if((state_val_33734 === (7))){
var inst_33729 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33735_33768 = state_33733__$1;
(statearr_33735_33768[(2)] = inst_33729);

(statearr_33735_33768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (1))){
var inst_33692 = [];
var inst_33693 = inst_33692;
var inst_33694 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33733__$1 = (function (){var statearr_33736 = state_33733;
(statearr_33736[(7)] = inst_33693);

(statearr_33736[(8)] = inst_33694);

return statearr_33736;
})();
var statearr_33737_33769 = state_33733__$1;
(statearr_33737_33769[(2)] = null);

(statearr_33737_33769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (4))){
var inst_33697 = (state_33733[(9)]);
var inst_33697__$1 = (state_33733[(2)]);
var inst_33698 = (inst_33697__$1 == null);
var inst_33699 = cljs.core.not.call(null,inst_33698);
var state_33733__$1 = (function (){var statearr_33738 = state_33733;
(statearr_33738[(9)] = inst_33697__$1);

return statearr_33738;
})();
if(inst_33699){
var statearr_33739_33770 = state_33733__$1;
(statearr_33739_33770[(1)] = (5));

} else {
var statearr_33740_33771 = state_33733__$1;
(statearr_33740_33771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (15))){
var inst_33723 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33741_33772 = state_33733__$1;
(statearr_33741_33772[(2)] = inst_33723);

(statearr_33741_33772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (13))){
var state_33733__$1 = state_33733;
var statearr_33742_33773 = state_33733__$1;
(statearr_33742_33773[(2)] = null);

(statearr_33742_33773[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (6))){
var inst_33693 = (state_33733[(7)]);
var inst_33718 = inst_33693.length;
var inst_33719 = (inst_33718 > (0));
var state_33733__$1 = state_33733;
if(cljs.core.truth_(inst_33719)){
var statearr_33743_33774 = state_33733__$1;
(statearr_33743_33774[(1)] = (12));

} else {
var statearr_33744_33775 = state_33733__$1;
(statearr_33744_33775[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (3))){
var inst_33731 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33733__$1,inst_33731);
} else {
if((state_val_33734 === (12))){
var inst_33693 = (state_33733[(7)]);
var inst_33721 = cljs.core.vec.call(null,inst_33693);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33733__$1,(15),out,inst_33721);
} else {
if((state_val_33734 === (2))){
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33733__$1,(4),ch);
} else {
if((state_val_33734 === (11))){
var inst_33701 = (state_33733[(10)]);
var inst_33697 = (state_33733[(9)]);
var inst_33711 = (state_33733[(2)]);
var inst_33712 = [];
var inst_33713 = inst_33712.push(inst_33697);
var inst_33693 = inst_33712;
var inst_33694 = inst_33701;
var state_33733__$1 = (function (){var statearr_33745 = state_33733;
(statearr_33745[(7)] = inst_33693);

(statearr_33745[(11)] = inst_33713);

(statearr_33745[(12)] = inst_33711);

(statearr_33745[(8)] = inst_33694);

return statearr_33745;
})();
var statearr_33746_33776 = state_33733__$1;
(statearr_33746_33776[(2)] = null);

(statearr_33746_33776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (9))){
var inst_33693 = (state_33733[(7)]);
var inst_33709 = cljs.core.vec.call(null,inst_33693);
var state_33733__$1 = state_33733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33733__$1,(11),out,inst_33709);
} else {
if((state_val_33734 === (5))){
var inst_33701 = (state_33733[(10)]);
var inst_33697 = (state_33733[(9)]);
var inst_33694 = (state_33733[(8)]);
var inst_33701__$1 = f.call(null,inst_33697);
var inst_33702 = cljs.core._EQ_.call(null,inst_33701__$1,inst_33694);
var inst_33703 = cljs.core.keyword_identical_QMARK_.call(null,inst_33694,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33704 = (inst_33702) || (inst_33703);
var state_33733__$1 = (function (){var statearr_33747 = state_33733;
(statearr_33747[(10)] = inst_33701__$1);

return statearr_33747;
})();
if(cljs.core.truth_(inst_33704)){
var statearr_33748_33777 = state_33733__$1;
(statearr_33748_33777[(1)] = (8));

} else {
var statearr_33749_33778 = state_33733__$1;
(statearr_33749_33778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (14))){
var inst_33726 = (state_33733[(2)]);
var inst_33727 = cljs.core.async.close_BANG_.call(null,out);
var state_33733__$1 = (function (){var statearr_33751 = state_33733;
(statearr_33751[(13)] = inst_33726);

return statearr_33751;
})();
var statearr_33752_33779 = state_33733__$1;
(statearr_33752_33779[(2)] = inst_33727);

(statearr_33752_33779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (10))){
var inst_33716 = (state_33733[(2)]);
var state_33733__$1 = state_33733;
var statearr_33753_33780 = state_33733__$1;
(statearr_33753_33780[(2)] = inst_33716);

(statearr_33753_33780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33734 === (8))){
var inst_33693 = (state_33733[(7)]);
var inst_33701 = (state_33733[(10)]);
var inst_33697 = (state_33733[(9)]);
var inst_33706 = inst_33693.push(inst_33697);
var tmp33750 = inst_33693;
var inst_33693__$1 = tmp33750;
var inst_33694 = inst_33701;
var state_33733__$1 = (function (){var statearr_33754 = state_33733;
(statearr_33754[(7)] = inst_33693__$1);

(statearr_33754[(14)] = inst_33706);

(statearr_33754[(8)] = inst_33694);

return statearr_33754;
})();
var statearr_33755_33781 = state_33733__$1;
(statearr_33755_33781[(2)] = null);

(statearr_33755_33781[(1)] = (2));


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
});})(c__30990__auto___33767,out))
;
return ((function (switch__30878__auto__,c__30990__auto___33767,out){
return (function() {
var cljs$core$async$state_machine__30879__auto__ = null;
var cljs$core$async$state_machine__30879__auto____0 = (function (){
var statearr_33759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33759[(0)] = cljs$core$async$state_machine__30879__auto__);

(statearr_33759[(1)] = (1));

return statearr_33759;
});
var cljs$core$async$state_machine__30879__auto____1 = (function (state_33733){
while(true){
var ret_value__30880__auto__ = (function (){try{while(true){
var result__30881__auto__ = switch__30878__auto__.call(null,state_33733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30881__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30881__auto__;
}
break;
}
}catch (e33760){if((e33760 instanceof Object)){
var ex__30882__auto__ = e33760;
var statearr_33761_33782 = state_33733;
(statearr_33761_33782[(5)] = ex__30882__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30880__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33783 = state_33733;
state_33733 = G__33783;
continue;
} else {
return ret_value__30880__auto__;
}
break;
}
});
cljs$core$async$state_machine__30879__auto__ = function(state_33733){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30879__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30879__auto____1.call(this,state_33733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30879__auto____0;
cljs$core$async$state_machine__30879__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30879__auto____1;
return cljs$core$async$state_machine__30879__auto__;
})()
;})(switch__30878__auto__,c__30990__auto___33767,out))
})();
var state__30992__auto__ = (function (){var statearr_33762 = f__30991__auto__.call(null);
(statearr_33762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30990__auto___33767);

return statearr_33762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30992__auto__);
});})(c__30990__auto___33767,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1504172203067