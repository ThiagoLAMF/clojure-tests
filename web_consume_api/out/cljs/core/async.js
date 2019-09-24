// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21191 = arguments.length;
switch (G__21191) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21192 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21192 = (function (f,blockable,meta21193){
this.f = f;
this.blockable = blockable;
this.meta21193 = meta21193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21194,meta21193__$1){
var self__ = this;
var _21194__$1 = this;
return (new cljs.core.async.t_cljs$core$async21192(self__.f,self__.blockable,meta21193__$1));
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21194){
var self__ = this;
var _21194__$1 = this;
return self__.meta21193;
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21193","meta21193",2039000894,null)], null);
});

cljs.core.async.t_cljs$core$async21192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21192";

cljs.core.async.t_cljs$core$async21192.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21192");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21192.
 */
cljs.core.async.__GT_t_cljs$core$async21192 = (function cljs$core$async$__GT_t_cljs$core$async21192(f__$1,blockable__$1,meta21193){
return (new cljs.core.async.t_cljs$core$async21192(f__$1,blockable__$1,meta21193));
});

}

return (new cljs.core.async.t_cljs$core$async21192(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__21198 = arguments.length;
switch (G__21198) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__21201 = arguments.length;
switch (G__21201) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__21204 = arguments.length;
switch (G__21204) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21206 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21206);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21206,ret){
return (function (){
return fn1.call(null,val_21206);
});})(val_21206,ret))
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
var G__21208 = arguments.length;
switch (G__21208) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var n__4607__auto___21210 = n;
var x_21211 = (0);
while(true){
if((x_21211 < n__4607__auto___21210)){
(a[x_21211] = (0));

var G__21212 = (x_21211 + (1));
x_21211 = G__21212;
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

var G__21213 = (i + (1));
i = G__21213;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21214 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21214 = (function (flag,meta21215){
this.flag = flag;
this.meta21215 = meta21215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21216,meta21215__$1){
var self__ = this;
var _21216__$1 = this;
return (new cljs.core.async.t_cljs$core$async21214(self__.flag,meta21215__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21216){
var self__ = this;
var _21216__$1 = this;
return self__.meta21215;
});})(flag))
;

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21214.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21215","meta21215",-610078896,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21214";

cljs.core.async.t_cljs$core$async21214.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21214");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21214.
 */
cljs.core.async.__GT_t_cljs$core$async21214 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21214(flag__$1,meta21215){
return (new cljs.core.async.t_cljs$core$async21214(flag__$1,meta21215));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21214(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21217 = (function (flag,cb,meta21218){
this.flag = flag;
this.cb = cb;
this.meta21218 = meta21218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21219,meta21218__$1){
var self__ = this;
var _21219__$1 = this;
return (new cljs.core.async.t_cljs$core$async21217(self__.flag,self__.cb,meta21218__$1));
});

cljs.core.async.t_cljs$core$async21217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21219){
var self__ = this;
var _21219__$1 = this;
return self__.meta21218;
});

cljs.core.async.t_cljs$core$async21217.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21217.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21218","meta21218",742024931,null)], null);
});

cljs.core.async.t_cljs$core$async21217.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21217";

cljs.core.async.t_cljs$core$async21217.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21217");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21217.
 */
cljs.core.async.__GT_t_cljs$core$async21217 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21217(flag__$1,cb__$1,meta21218){
return (new cljs.core.async.t_cljs$core$async21217(flag__$1,cb__$1,meta21218));
});

}

return (new cljs.core.async.t_cljs$core$async21217(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21220_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21220_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21221_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21221_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21222 = (i + (1));
i = G__21222;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___21228 = arguments.length;
var i__4731__auto___21229 = (0);
while(true){
if((i__4731__auto___21229 < len__4730__auto___21228)){
args__4736__auto__.push((arguments[i__4731__auto___21229]));

var G__21230 = (i__4731__auto___21229 + (1));
i__4731__auto___21229 = G__21230;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21225){
var map__21226 = p__21225;
var map__21226__$1 = (((((!((map__21226 == null))))?(((((map__21226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21226):map__21226);
var opts = map__21226__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21223){
var G__21224 = cljs.core.first.call(null,seq21223);
var seq21223__$1 = cljs.core.next.call(null,seq21223);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21224,seq21223__$1);
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
var G__21232 = arguments.length;
switch (G__21232) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21145__auto___21278 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___21278){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___21278){
return (function (state_21256){
var state_val_21257 = (state_21256[(1)]);
if((state_val_21257 === (7))){
var inst_21252 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
var statearr_21258_21279 = state_21256__$1;
(statearr_21258_21279[(2)] = inst_21252);

(statearr_21258_21279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (1))){
var state_21256__$1 = state_21256;
var statearr_21259_21280 = state_21256__$1;
(statearr_21259_21280[(2)] = null);

(statearr_21259_21280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (4))){
var inst_21235 = (state_21256[(7)]);
var inst_21235__$1 = (state_21256[(2)]);
var inst_21236 = (inst_21235__$1 == null);
var state_21256__$1 = (function (){var statearr_21260 = state_21256;
(statearr_21260[(7)] = inst_21235__$1);

return statearr_21260;
})();
if(cljs.core.truth_(inst_21236)){
var statearr_21261_21281 = state_21256__$1;
(statearr_21261_21281[(1)] = (5));

} else {
var statearr_21262_21282 = state_21256__$1;
(statearr_21262_21282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (13))){
var state_21256__$1 = state_21256;
var statearr_21263_21283 = state_21256__$1;
(statearr_21263_21283[(2)] = null);

(statearr_21263_21283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (6))){
var inst_21235 = (state_21256[(7)]);
var state_21256__$1 = state_21256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21256__$1,(11),to,inst_21235);
} else {
if((state_val_21257 === (3))){
var inst_21254 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21256__$1,inst_21254);
} else {
if((state_val_21257 === (12))){
var state_21256__$1 = state_21256;
var statearr_21264_21284 = state_21256__$1;
(statearr_21264_21284[(2)] = null);

(statearr_21264_21284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (2))){
var state_21256__$1 = state_21256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21256__$1,(4),from);
} else {
if((state_val_21257 === (11))){
var inst_21245 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
if(cljs.core.truth_(inst_21245)){
var statearr_21265_21285 = state_21256__$1;
(statearr_21265_21285[(1)] = (12));

} else {
var statearr_21266_21286 = state_21256__$1;
(statearr_21266_21286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (9))){
var state_21256__$1 = state_21256;
var statearr_21267_21287 = state_21256__$1;
(statearr_21267_21287[(2)] = null);

(statearr_21267_21287[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (5))){
var state_21256__$1 = state_21256;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21268_21288 = state_21256__$1;
(statearr_21268_21288[(1)] = (8));

} else {
var statearr_21269_21289 = state_21256__$1;
(statearr_21269_21289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (14))){
var inst_21250 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
var statearr_21270_21290 = state_21256__$1;
(statearr_21270_21290[(2)] = inst_21250);

(statearr_21270_21290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (10))){
var inst_21242 = (state_21256[(2)]);
var state_21256__$1 = state_21256;
var statearr_21271_21291 = state_21256__$1;
(statearr_21271_21291[(2)] = inst_21242);

(statearr_21271_21291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21257 === (8))){
var inst_21239 = cljs.core.async.close_BANG_.call(null,to);
var state_21256__$1 = state_21256;
var statearr_21272_21292 = state_21256__$1;
(statearr_21272_21292[(2)] = inst_21239);

(statearr_21272_21292[(1)] = (10));


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
});})(c__21145__auto___21278))
;
return ((function (switch__21052__auto__,c__21145__auto___21278){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_21273 = [null,null,null,null,null,null,null,null];
(statearr_21273[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_21273[(1)] = (1));

return statearr_21273;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_21256){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21274){if((e21274 instanceof Object)){
var ex__21056__auto__ = e21274;
var statearr_21275_21293 = state_21256;
(statearr_21275_21293[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21294 = state_21256;
state_21256 = G__21294;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_21256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_21256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___21278))
})();
var state__21147__auto__ = (function (){var statearr_21276 = f__21146__auto__.call(null);
(statearr_21276[(6)] = c__21145__auto___21278);

return statearr_21276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___21278))
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
return (function (p__21295){
var vec__21296 = p__21295;
var v = cljs.core.nth.call(null,vec__21296,(0),null);
var p = cljs.core.nth.call(null,vec__21296,(1),null);
var job = vec__21296;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21145__auto___21467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___21467,res,vec__21296,v,p,job,jobs,results){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___21467,res,vec__21296,v,p,job,jobs,results){
return (function (state_21303){
var state_val_21304 = (state_21303[(1)]);
if((state_val_21304 === (1))){
var state_21303__$1 = state_21303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21303__$1,(2),res,v);
} else {
if((state_val_21304 === (2))){
var inst_21300 = (state_21303[(2)]);
var inst_21301 = cljs.core.async.close_BANG_.call(null,res);
var state_21303__$1 = (function (){var statearr_21305 = state_21303;
(statearr_21305[(7)] = inst_21300);

return statearr_21305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21303__$1,inst_21301);
} else {
return null;
}
}
});})(c__21145__auto___21467,res,vec__21296,v,p,job,jobs,results))
;
return ((function (switch__21052__auto__,c__21145__auto___21467,res,vec__21296,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0 = (function (){
var statearr_21306 = [null,null,null,null,null,null,null,null];
(statearr_21306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__);

(statearr_21306[(1)] = (1));

return statearr_21306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1 = (function (state_21303){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21307){if((e21307 instanceof Object)){
var ex__21056__auto__ = e21307;
var statearr_21308_21468 = state_21303;
(statearr_21308_21468[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21469 = state_21303;
state_21303 = G__21469;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = function(state_21303){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1.call(this,state_21303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___21467,res,vec__21296,v,p,job,jobs,results))
})();
var state__21147__auto__ = (function (){var statearr_21309 = f__21146__auto__.call(null);
(statearr_21309[(6)] = c__21145__auto___21467);

return statearr_21309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___21467,res,vec__21296,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21310){
var vec__21311 = p__21310;
var v = cljs.core.nth.call(null,vec__21311,(0),null);
var p = cljs.core.nth.call(null,vec__21311,(1),null);
var job = vec__21311;
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
var n__4607__auto___21470 = n;
var __21471 = (0);
while(true){
if((__21471 < n__4607__auto___21470)){
var G__21314_21472 = type;
var G__21314_21473__$1 = (((G__21314_21472 instanceof cljs.core.Keyword))?G__21314_21472.fqn:null);
switch (G__21314_21473__$1) {
case "compute":
var c__21145__auto___21475 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21471,c__21145__auto___21475,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (__21471,c__21145__auto___21475,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async){
return (function (state_21327){
var state_val_21328 = (state_21327[(1)]);
if((state_val_21328 === (1))){
var state_21327__$1 = state_21327;
var statearr_21329_21476 = state_21327__$1;
(statearr_21329_21476[(2)] = null);

(statearr_21329_21476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21328 === (2))){
var state_21327__$1 = state_21327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21327__$1,(4),jobs);
} else {
if((state_val_21328 === (3))){
var inst_21325 = (state_21327[(2)]);
var state_21327__$1 = state_21327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21327__$1,inst_21325);
} else {
if((state_val_21328 === (4))){
var inst_21317 = (state_21327[(2)]);
var inst_21318 = process.call(null,inst_21317);
var state_21327__$1 = state_21327;
if(cljs.core.truth_(inst_21318)){
var statearr_21330_21477 = state_21327__$1;
(statearr_21330_21477[(1)] = (5));

} else {
var statearr_21331_21478 = state_21327__$1;
(statearr_21331_21478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21328 === (5))){
var state_21327__$1 = state_21327;
var statearr_21332_21479 = state_21327__$1;
(statearr_21332_21479[(2)] = null);

(statearr_21332_21479[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21328 === (6))){
var state_21327__$1 = state_21327;
var statearr_21333_21480 = state_21327__$1;
(statearr_21333_21480[(2)] = null);

(statearr_21333_21480[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21328 === (7))){
var inst_21323 = (state_21327[(2)]);
var state_21327__$1 = state_21327;
var statearr_21334_21481 = state_21327__$1;
(statearr_21334_21481[(2)] = inst_21323);

(statearr_21334_21481[(1)] = (3));


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
});})(__21471,c__21145__auto___21475,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async))
;
return ((function (__21471,switch__21052__auto__,c__21145__auto___21475,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0 = (function (){
var statearr_21335 = [null,null,null,null,null,null,null];
(statearr_21335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__);

(statearr_21335[(1)] = (1));

return statearr_21335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1 = (function (state_21327){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21336){if((e21336 instanceof Object)){
var ex__21056__auto__ = e21336;
var statearr_21337_21482 = state_21327;
(statearr_21337_21482[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21483 = state_21327;
state_21327 = G__21483;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = function(state_21327){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1.call(this,state_21327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__;
})()
;})(__21471,switch__21052__auto__,c__21145__auto___21475,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async))
})();
var state__21147__auto__ = (function (){var statearr_21338 = f__21146__auto__.call(null);
(statearr_21338[(6)] = c__21145__auto___21475);

return statearr_21338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(__21471,c__21145__auto___21475,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async))
);


break;
case "async":
var c__21145__auto___21484 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21471,c__21145__auto___21484,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (__21471,c__21145__auto___21484,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async){
return (function (state_21351){
var state_val_21352 = (state_21351[(1)]);
if((state_val_21352 === (1))){
var state_21351__$1 = state_21351;
var statearr_21353_21485 = state_21351__$1;
(statearr_21353_21485[(2)] = null);

(statearr_21353_21485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (2))){
var state_21351__$1 = state_21351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21351__$1,(4),jobs);
} else {
if((state_val_21352 === (3))){
var inst_21349 = (state_21351[(2)]);
var state_21351__$1 = state_21351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21351__$1,inst_21349);
} else {
if((state_val_21352 === (4))){
var inst_21341 = (state_21351[(2)]);
var inst_21342 = async.call(null,inst_21341);
var state_21351__$1 = state_21351;
if(cljs.core.truth_(inst_21342)){
var statearr_21354_21486 = state_21351__$1;
(statearr_21354_21486[(1)] = (5));

} else {
var statearr_21355_21487 = state_21351__$1;
(statearr_21355_21487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (5))){
var state_21351__$1 = state_21351;
var statearr_21356_21488 = state_21351__$1;
(statearr_21356_21488[(2)] = null);

(statearr_21356_21488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (6))){
var state_21351__$1 = state_21351;
var statearr_21357_21489 = state_21351__$1;
(statearr_21357_21489[(2)] = null);

(statearr_21357_21489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21352 === (7))){
var inst_21347 = (state_21351[(2)]);
var state_21351__$1 = state_21351;
var statearr_21358_21490 = state_21351__$1;
(statearr_21358_21490[(2)] = inst_21347);

(statearr_21358_21490[(1)] = (3));


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
});})(__21471,c__21145__auto___21484,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async))
;
return ((function (__21471,switch__21052__auto__,c__21145__auto___21484,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0 = (function (){
var statearr_21359 = [null,null,null,null,null,null,null];
(statearr_21359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__);

(statearr_21359[(1)] = (1));

return statearr_21359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1 = (function (state_21351){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21360){if((e21360 instanceof Object)){
var ex__21056__auto__ = e21360;
var statearr_21361_21491 = state_21351;
(statearr_21361_21491[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21492 = state_21351;
state_21351 = G__21492;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = function(state_21351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1.call(this,state_21351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__;
})()
;})(__21471,switch__21052__auto__,c__21145__auto___21484,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async))
})();
var state__21147__auto__ = (function (){var statearr_21362 = f__21146__auto__.call(null);
(statearr_21362[(6)] = c__21145__auto___21484);

return statearr_21362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(__21471,c__21145__auto___21484,G__21314_21472,G__21314_21473__$1,n__4607__auto___21470,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21314_21473__$1)].join('')));

}

var G__21493 = (__21471 + (1));
__21471 = G__21493;
continue;
} else {
}
break;
}

var c__21145__auto___21494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___21494,jobs,results,process,async){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___21494,jobs,results,process,async){
return (function (state_21384){
var state_val_21385 = (state_21384[(1)]);
if((state_val_21385 === (1))){
var state_21384__$1 = state_21384;
var statearr_21386_21495 = state_21384__$1;
(statearr_21386_21495[(2)] = null);

(statearr_21386_21495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (2))){
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21384__$1,(4),from);
} else {
if((state_val_21385 === (3))){
var inst_21382 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21384__$1,inst_21382);
} else {
if((state_val_21385 === (4))){
var inst_21365 = (state_21384[(7)]);
var inst_21365__$1 = (state_21384[(2)]);
var inst_21366 = (inst_21365__$1 == null);
var state_21384__$1 = (function (){var statearr_21387 = state_21384;
(statearr_21387[(7)] = inst_21365__$1);

return statearr_21387;
})();
if(cljs.core.truth_(inst_21366)){
var statearr_21388_21496 = state_21384__$1;
(statearr_21388_21496[(1)] = (5));

} else {
var statearr_21389_21497 = state_21384__$1;
(statearr_21389_21497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (5))){
var inst_21368 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21384__$1 = state_21384;
var statearr_21390_21498 = state_21384__$1;
(statearr_21390_21498[(2)] = inst_21368);

(statearr_21390_21498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (6))){
var inst_21370 = (state_21384[(8)]);
var inst_21365 = (state_21384[(7)]);
var inst_21370__$1 = cljs.core.async.chan.call(null,(1));
var inst_21371 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21372 = [inst_21365,inst_21370__$1];
var inst_21373 = (new cljs.core.PersistentVector(null,2,(5),inst_21371,inst_21372,null));
var state_21384__$1 = (function (){var statearr_21391 = state_21384;
(statearr_21391[(8)] = inst_21370__$1);

return statearr_21391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21384__$1,(8),jobs,inst_21373);
} else {
if((state_val_21385 === (7))){
var inst_21380 = (state_21384[(2)]);
var state_21384__$1 = state_21384;
var statearr_21392_21499 = state_21384__$1;
(statearr_21392_21499[(2)] = inst_21380);

(statearr_21392_21499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21385 === (8))){
var inst_21370 = (state_21384[(8)]);
var inst_21375 = (state_21384[(2)]);
var state_21384__$1 = (function (){var statearr_21393 = state_21384;
(statearr_21393[(9)] = inst_21375);

return statearr_21393;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21384__$1,(9),results,inst_21370);
} else {
if((state_val_21385 === (9))){
var inst_21377 = (state_21384[(2)]);
var state_21384__$1 = (function (){var statearr_21394 = state_21384;
(statearr_21394[(10)] = inst_21377);

return statearr_21394;
})();
var statearr_21395_21500 = state_21384__$1;
(statearr_21395_21500[(2)] = null);

(statearr_21395_21500[(1)] = (2));


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
});})(c__21145__auto___21494,jobs,results,process,async))
;
return ((function (switch__21052__auto__,c__21145__auto___21494,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0 = (function (){
var statearr_21396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21396[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__);

(statearr_21396[(1)] = (1));

return statearr_21396;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1 = (function (state_21384){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21397){if((e21397 instanceof Object)){
var ex__21056__auto__ = e21397;
var statearr_21398_21501 = state_21384;
(statearr_21398_21501[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21502 = state_21384;
state_21384 = G__21502;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = function(state_21384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1.call(this,state_21384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___21494,jobs,results,process,async))
})();
var state__21147__auto__ = (function (){var statearr_21399 = f__21146__auto__.call(null);
(statearr_21399[(6)] = c__21145__auto___21494);

return statearr_21399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___21494,jobs,results,process,async))
);


var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__,jobs,results,process,async){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__,jobs,results,process,async){
return (function (state_21437){
var state_val_21438 = (state_21437[(1)]);
if((state_val_21438 === (7))){
var inst_21433 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
var statearr_21439_21503 = state_21437__$1;
(statearr_21439_21503[(2)] = inst_21433);

(statearr_21439_21503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (20))){
var state_21437__$1 = state_21437;
var statearr_21440_21504 = state_21437__$1;
(statearr_21440_21504[(2)] = null);

(statearr_21440_21504[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (1))){
var state_21437__$1 = state_21437;
var statearr_21441_21505 = state_21437__$1;
(statearr_21441_21505[(2)] = null);

(statearr_21441_21505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (4))){
var inst_21402 = (state_21437[(7)]);
var inst_21402__$1 = (state_21437[(2)]);
var inst_21403 = (inst_21402__$1 == null);
var state_21437__$1 = (function (){var statearr_21442 = state_21437;
(statearr_21442[(7)] = inst_21402__$1);

return statearr_21442;
})();
if(cljs.core.truth_(inst_21403)){
var statearr_21443_21506 = state_21437__$1;
(statearr_21443_21506[(1)] = (5));

} else {
var statearr_21444_21507 = state_21437__$1;
(statearr_21444_21507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (15))){
var inst_21415 = (state_21437[(8)]);
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21437__$1,(18),to,inst_21415);
} else {
if((state_val_21438 === (21))){
var inst_21428 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
var statearr_21445_21508 = state_21437__$1;
(statearr_21445_21508[(2)] = inst_21428);

(statearr_21445_21508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (13))){
var inst_21430 = (state_21437[(2)]);
var state_21437__$1 = (function (){var statearr_21446 = state_21437;
(statearr_21446[(9)] = inst_21430);

return statearr_21446;
})();
var statearr_21447_21509 = state_21437__$1;
(statearr_21447_21509[(2)] = null);

(statearr_21447_21509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (6))){
var inst_21402 = (state_21437[(7)]);
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21437__$1,(11),inst_21402);
} else {
if((state_val_21438 === (17))){
var inst_21423 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
if(cljs.core.truth_(inst_21423)){
var statearr_21448_21510 = state_21437__$1;
(statearr_21448_21510[(1)] = (19));

} else {
var statearr_21449_21511 = state_21437__$1;
(statearr_21449_21511[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (3))){
var inst_21435 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21437__$1,inst_21435);
} else {
if((state_val_21438 === (12))){
var inst_21412 = (state_21437[(10)]);
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21437__$1,(14),inst_21412);
} else {
if((state_val_21438 === (2))){
var state_21437__$1 = state_21437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21437__$1,(4),results);
} else {
if((state_val_21438 === (19))){
var state_21437__$1 = state_21437;
var statearr_21450_21512 = state_21437__$1;
(statearr_21450_21512[(2)] = null);

(statearr_21450_21512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (11))){
var inst_21412 = (state_21437[(2)]);
var state_21437__$1 = (function (){var statearr_21451 = state_21437;
(statearr_21451[(10)] = inst_21412);

return statearr_21451;
})();
var statearr_21452_21513 = state_21437__$1;
(statearr_21452_21513[(2)] = null);

(statearr_21452_21513[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (9))){
var state_21437__$1 = state_21437;
var statearr_21453_21514 = state_21437__$1;
(statearr_21453_21514[(2)] = null);

(statearr_21453_21514[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (5))){
var state_21437__$1 = state_21437;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21454_21515 = state_21437__$1;
(statearr_21454_21515[(1)] = (8));

} else {
var statearr_21455_21516 = state_21437__$1;
(statearr_21455_21516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (14))){
var inst_21415 = (state_21437[(8)]);
var inst_21417 = (state_21437[(11)]);
var inst_21415__$1 = (state_21437[(2)]);
var inst_21416 = (inst_21415__$1 == null);
var inst_21417__$1 = cljs.core.not.call(null,inst_21416);
var state_21437__$1 = (function (){var statearr_21456 = state_21437;
(statearr_21456[(8)] = inst_21415__$1);

(statearr_21456[(11)] = inst_21417__$1);

return statearr_21456;
})();
if(inst_21417__$1){
var statearr_21457_21517 = state_21437__$1;
(statearr_21457_21517[(1)] = (15));

} else {
var statearr_21458_21518 = state_21437__$1;
(statearr_21458_21518[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (16))){
var inst_21417 = (state_21437[(11)]);
var state_21437__$1 = state_21437;
var statearr_21459_21519 = state_21437__$1;
(statearr_21459_21519[(2)] = inst_21417);

(statearr_21459_21519[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (10))){
var inst_21409 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
var statearr_21460_21520 = state_21437__$1;
(statearr_21460_21520[(2)] = inst_21409);

(statearr_21460_21520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (18))){
var inst_21420 = (state_21437[(2)]);
var state_21437__$1 = state_21437;
var statearr_21461_21521 = state_21437__$1;
(statearr_21461_21521[(2)] = inst_21420);

(statearr_21461_21521[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21438 === (8))){
var inst_21406 = cljs.core.async.close_BANG_.call(null,to);
var state_21437__$1 = state_21437;
var statearr_21462_21522 = state_21437__$1;
(statearr_21462_21522[(2)] = inst_21406);

(statearr_21462_21522[(1)] = (10));


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
});})(c__21145__auto__,jobs,results,process,async))
;
return ((function (switch__21052__auto__,c__21145__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0 = (function (){
var statearr_21463 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__);

(statearr_21463[(1)] = (1));

return statearr_21463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1 = (function (state_21437){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21464){if((e21464 instanceof Object)){
var ex__21056__auto__ = e21464;
var statearr_21465_21523 = state_21437;
(statearr_21465_21523[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21524 = state_21437;
state_21437 = G__21524;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__ = function(state_21437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1.call(this,state_21437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21053__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__,jobs,results,process,async))
})();
var state__21147__auto__ = (function (){var statearr_21466 = f__21146__auto__.call(null);
(statearr_21466[(6)] = c__21145__auto__);

return statearr_21466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__,jobs,results,process,async))
);

return c__21145__auto__;
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
var G__21526 = arguments.length;
switch (G__21526) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__21529 = arguments.length;
switch (G__21529) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__21532 = arguments.length;
switch (G__21532) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21145__auto___21581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___21581,tc,fc){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___21581,tc,fc){
return (function (state_21558){
var state_val_21559 = (state_21558[(1)]);
if((state_val_21559 === (7))){
var inst_21554 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
var statearr_21560_21582 = state_21558__$1;
(statearr_21560_21582[(2)] = inst_21554);

(statearr_21560_21582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (1))){
var state_21558__$1 = state_21558;
var statearr_21561_21583 = state_21558__$1;
(statearr_21561_21583[(2)] = null);

(statearr_21561_21583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (4))){
var inst_21535 = (state_21558[(7)]);
var inst_21535__$1 = (state_21558[(2)]);
var inst_21536 = (inst_21535__$1 == null);
var state_21558__$1 = (function (){var statearr_21562 = state_21558;
(statearr_21562[(7)] = inst_21535__$1);

return statearr_21562;
})();
if(cljs.core.truth_(inst_21536)){
var statearr_21563_21584 = state_21558__$1;
(statearr_21563_21584[(1)] = (5));

} else {
var statearr_21564_21585 = state_21558__$1;
(statearr_21564_21585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (13))){
var state_21558__$1 = state_21558;
var statearr_21565_21586 = state_21558__$1;
(statearr_21565_21586[(2)] = null);

(statearr_21565_21586[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (6))){
var inst_21535 = (state_21558[(7)]);
var inst_21541 = p.call(null,inst_21535);
var state_21558__$1 = state_21558;
if(cljs.core.truth_(inst_21541)){
var statearr_21566_21587 = state_21558__$1;
(statearr_21566_21587[(1)] = (9));

} else {
var statearr_21567_21588 = state_21558__$1;
(statearr_21567_21588[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (3))){
var inst_21556 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21558__$1,inst_21556);
} else {
if((state_val_21559 === (12))){
var state_21558__$1 = state_21558;
var statearr_21568_21589 = state_21558__$1;
(statearr_21568_21589[(2)] = null);

(statearr_21568_21589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (2))){
var state_21558__$1 = state_21558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21558__$1,(4),ch);
} else {
if((state_val_21559 === (11))){
var inst_21535 = (state_21558[(7)]);
var inst_21545 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21558__$1,(8),inst_21545,inst_21535);
} else {
if((state_val_21559 === (9))){
var state_21558__$1 = state_21558;
var statearr_21569_21590 = state_21558__$1;
(statearr_21569_21590[(2)] = tc);

(statearr_21569_21590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (5))){
var inst_21538 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21539 = cljs.core.async.close_BANG_.call(null,fc);
var state_21558__$1 = (function (){var statearr_21570 = state_21558;
(statearr_21570[(8)] = inst_21538);

return statearr_21570;
})();
var statearr_21571_21591 = state_21558__$1;
(statearr_21571_21591[(2)] = inst_21539);

(statearr_21571_21591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (14))){
var inst_21552 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
var statearr_21572_21592 = state_21558__$1;
(statearr_21572_21592[(2)] = inst_21552);

(statearr_21572_21592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (10))){
var state_21558__$1 = state_21558;
var statearr_21573_21593 = state_21558__$1;
(statearr_21573_21593[(2)] = fc);

(statearr_21573_21593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21559 === (8))){
var inst_21547 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
if(cljs.core.truth_(inst_21547)){
var statearr_21574_21594 = state_21558__$1;
(statearr_21574_21594[(1)] = (12));

} else {
var statearr_21575_21595 = state_21558__$1;
(statearr_21575_21595[(1)] = (13));

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
});})(c__21145__auto___21581,tc,fc))
;
return ((function (switch__21052__auto__,c__21145__auto___21581,tc,fc){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_21576 = [null,null,null,null,null,null,null,null,null];
(statearr_21576[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_21576[(1)] = (1));

return statearr_21576;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_21558){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21577){if((e21577 instanceof Object)){
var ex__21056__auto__ = e21577;
var statearr_21578_21596 = state_21558;
(statearr_21578_21596[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21597 = state_21558;
state_21558 = G__21597;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_21558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_21558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___21581,tc,fc))
})();
var state__21147__auto__ = (function (){var statearr_21579 = f__21146__auto__.call(null);
(statearr_21579[(6)] = c__21145__auto___21581);

return statearr_21579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___21581,tc,fc))
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
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__){
return (function (state_21618){
var state_val_21619 = (state_21618[(1)]);
if((state_val_21619 === (7))){
var inst_21614 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21620_21638 = state_21618__$1;
(statearr_21620_21638[(2)] = inst_21614);

(statearr_21620_21638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (1))){
var inst_21598 = init;
var state_21618__$1 = (function (){var statearr_21621 = state_21618;
(statearr_21621[(7)] = inst_21598);

return statearr_21621;
})();
var statearr_21622_21639 = state_21618__$1;
(statearr_21622_21639[(2)] = null);

(statearr_21622_21639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (4))){
var inst_21601 = (state_21618[(8)]);
var inst_21601__$1 = (state_21618[(2)]);
var inst_21602 = (inst_21601__$1 == null);
var state_21618__$1 = (function (){var statearr_21623 = state_21618;
(statearr_21623[(8)] = inst_21601__$1);

return statearr_21623;
})();
if(cljs.core.truth_(inst_21602)){
var statearr_21624_21640 = state_21618__$1;
(statearr_21624_21640[(1)] = (5));

} else {
var statearr_21625_21641 = state_21618__$1;
(statearr_21625_21641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (6))){
var inst_21605 = (state_21618[(9)]);
var inst_21598 = (state_21618[(7)]);
var inst_21601 = (state_21618[(8)]);
var inst_21605__$1 = f.call(null,inst_21598,inst_21601);
var inst_21606 = cljs.core.reduced_QMARK_.call(null,inst_21605__$1);
var state_21618__$1 = (function (){var statearr_21626 = state_21618;
(statearr_21626[(9)] = inst_21605__$1);

return statearr_21626;
})();
if(inst_21606){
var statearr_21627_21642 = state_21618__$1;
(statearr_21627_21642[(1)] = (8));

} else {
var statearr_21628_21643 = state_21618__$1;
(statearr_21628_21643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (3))){
var inst_21616 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21618__$1,inst_21616);
} else {
if((state_val_21619 === (2))){
var state_21618__$1 = state_21618;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21618__$1,(4),ch);
} else {
if((state_val_21619 === (9))){
var inst_21605 = (state_21618[(9)]);
var inst_21598 = inst_21605;
var state_21618__$1 = (function (){var statearr_21629 = state_21618;
(statearr_21629[(7)] = inst_21598);

return statearr_21629;
})();
var statearr_21630_21644 = state_21618__$1;
(statearr_21630_21644[(2)] = null);

(statearr_21630_21644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (5))){
var inst_21598 = (state_21618[(7)]);
var state_21618__$1 = state_21618;
var statearr_21631_21645 = state_21618__$1;
(statearr_21631_21645[(2)] = inst_21598);

(statearr_21631_21645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (10))){
var inst_21612 = (state_21618[(2)]);
var state_21618__$1 = state_21618;
var statearr_21632_21646 = state_21618__$1;
(statearr_21632_21646[(2)] = inst_21612);

(statearr_21632_21646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21619 === (8))){
var inst_21605 = (state_21618[(9)]);
var inst_21608 = cljs.core.deref.call(null,inst_21605);
var state_21618__$1 = state_21618;
var statearr_21633_21647 = state_21618__$1;
(statearr_21633_21647[(2)] = inst_21608);

(statearr_21633_21647[(1)] = (10));


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
});})(c__21145__auto__))
;
return ((function (switch__21052__auto__,c__21145__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21053__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21053__auto____0 = (function (){
var statearr_21634 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21634[(0)] = cljs$core$async$reduce_$_state_machine__21053__auto__);

(statearr_21634[(1)] = (1));

return statearr_21634;
});
var cljs$core$async$reduce_$_state_machine__21053__auto____1 = (function (state_21618){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21635){if((e21635 instanceof Object)){
var ex__21056__auto__ = e21635;
var statearr_21636_21648 = state_21618;
(statearr_21636_21648[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21649 = state_21618;
state_21618 = G__21649;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21053__auto__ = function(state_21618){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21053__auto____1.call(this,state_21618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21053__auto____0;
cljs$core$async$reduce_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21053__auto____1;
return cljs$core$async$reduce_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_21637 = f__21146__auto__.call(null);
(statearr_21637[(6)] = c__21145__auto__);

return statearr_21637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__,f__$1){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__,f__$1){
return (function (state_21655){
var state_val_21656 = (state_21655[(1)]);
if((state_val_21656 === (1))){
var inst_21650 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21655__$1,(2),inst_21650);
} else {
if((state_val_21656 === (2))){
var inst_21652 = (state_21655[(2)]);
var inst_21653 = f__$1.call(null,inst_21652);
var state_21655__$1 = state_21655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21655__$1,inst_21653);
} else {
return null;
}
}
});})(c__21145__auto__,f__$1))
;
return ((function (switch__21052__auto__,c__21145__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21053__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21053__auto____0 = (function (){
var statearr_21657 = [null,null,null,null,null,null,null];
(statearr_21657[(0)] = cljs$core$async$transduce_$_state_machine__21053__auto__);

(statearr_21657[(1)] = (1));

return statearr_21657;
});
var cljs$core$async$transduce_$_state_machine__21053__auto____1 = (function (state_21655){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21658){if((e21658 instanceof Object)){
var ex__21056__auto__ = e21658;
var statearr_21659_21661 = state_21655;
(statearr_21659_21661[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21662 = state_21655;
state_21655 = G__21662;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21053__auto__ = function(state_21655){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21053__auto____1.call(this,state_21655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21053__auto____0;
cljs$core$async$transduce_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21053__auto____1;
return cljs$core$async$transduce_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__,f__$1))
})();
var state__21147__auto__ = (function (){var statearr_21660 = f__21146__auto__.call(null);
(statearr_21660[(6)] = c__21145__auto__);

return statearr_21660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__,f__$1))
);

return c__21145__auto__;
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
var G__21664 = arguments.length;
switch (G__21664) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__){
return (function (state_21689){
var state_val_21690 = (state_21689[(1)]);
if((state_val_21690 === (7))){
var inst_21671 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21691_21712 = state_21689__$1;
(statearr_21691_21712[(2)] = inst_21671);

(statearr_21691_21712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (1))){
var inst_21665 = cljs.core.seq.call(null,coll);
var inst_21666 = inst_21665;
var state_21689__$1 = (function (){var statearr_21692 = state_21689;
(statearr_21692[(7)] = inst_21666);

return statearr_21692;
})();
var statearr_21693_21713 = state_21689__$1;
(statearr_21693_21713[(2)] = null);

(statearr_21693_21713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (4))){
var inst_21666 = (state_21689[(7)]);
var inst_21669 = cljs.core.first.call(null,inst_21666);
var state_21689__$1 = state_21689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21689__$1,(7),ch,inst_21669);
} else {
if((state_val_21690 === (13))){
var inst_21683 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21694_21714 = state_21689__$1;
(statearr_21694_21714[(2)] = inst_21683);

(statearr_21694_21714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (6))){
var inst_21674 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21674)){
var statearr_21695_21715 = state_21689__$1;
(statearr_21695_21715[(1)] = (8));

} else {
var statearr_21696_21716 = state_21689__$1;
(statearr_21696_21716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (3))){
var inst_21687 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21689__$1,inst_21687);
} else {
if((state_val_21690 === (12))){
var state_21689__$1 = state_21689;
var statearr_21697_21717 = state_21689__$1;
(statearr_21697_21717[(2)] = null);

(statearr_21697_21717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (2))){
var inst_21666 = (state_21689[(7)]);
var state_21689__$1 = state_21689;
if(cljs.core.truth_(inst_21666)){
var statearr_21698_21718 = state_21689__$1;
(statearr_21698_21718[(1)] = (4));

} else {
var statearr_21699_21719 = state_21689__$1;
(statearr_21699_21719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (11))){
var inst_21680 = cljs.core.async.close_BANG_.call(null,ch);
var state_21689__$1 = state_21689;
var statearr_21700_21720 = state_21689__$1;
(statearr_21700_21720[(2)] = inst_21680);

(statearr_21700_21720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (9))){
var state_21689__$1 = state_21689;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21701_21721 = state_21689__$1;
(statearr_21701_21721[(1)] = (11));

} else {
var statearr_21702_21722 = state_21689__$1;
(statearr_21702_21722[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (5))){
var inst_21666 = (state_21689[(7)]);
var state_21689__$1 = state_21689;
var statearr_21703_21723 = state_21689__$1;
(statearr_21703_21723[(2)] = inst_21666);

(statearr_21703_21723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (10))){
var inst_21685 = (state_21689[(2)]);
var state_21689__$1 = state_21689;
var statearr_21704_21724 = state_21689__$1;
(statearr_21704_21724[(2)] = inst_21685);

(statearr_21704_21724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21690 === (8))){
var inst_21666 = (state_21689[(7)]);
var inst_21676 = cljs.core.next.call(null,inst_21666);
var inst_21666__$1 = inst_21676;
var state_21689__$1 = (function (){var statearr_21705 = state_21689;
(statearr_21705[(7)] = inst_21666__$1);

return statearr_21705;
})();
var statearr_21706_21725 = state_21689__$1;
(statearr_21706_21725[(2)] = null);

(statearr_21706_21725[(1)] = (2));


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
});})(c__21145__auto__))
;
return ((function (switch__21052__auto__,c__21145__auto__){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_21707 = [null,null,null,null,null,null,null,null];
(statearr_21707[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_21707[(1)] = (1));

return statearr_21707;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_21689){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21708){if((e21708 instanceof Object)){
var ex__21056__auto__ = e21708;
var statearr_21709_21726 = state_21689;
(statearr_21709_21726[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21727 = state_21689;
state_21689 = G__21727;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_21689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_21689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_21710 = f__21146__auto__.call(null);
(statearr_21710[(6)] = c__21145__auto__);

return statearr_21710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21728 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21728 = (function (ch,cs,meta21729){
this.ch = ch;
this.cs = cs;
this.meta21729 = meta21729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21730,meta21729__$1){
var self__ = this;
var _21730__$1 = this;
return (new cljs.core.async.t_cljs$core$async21728(self__.ch,self__.cs,meta21729__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21730){
var self__ = this;
var _21730__$1 = this;
return self__.meta21729;
});})(cs))
;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21728.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21728.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21729","meta21729",1076935679,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21728";

cljs.core.async.t_cljs$core$async21728.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async21728");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21728.
 */
cljs.core.async.__GT_t_cljs$core$async21728 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21728(ch__$1,cs__$1,meta21729){
return (new cljs.core.async.t_cljs$core$async21728(ch__$1,cs__$1,meta21729));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21728(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21145__auto___21950 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___21950,cs,m,dchan,dctr,done){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___21950,cs,m,dchan,dctr,done){
return (function (state_21865){
var state_val_21866 = (state_21865[(1)]);
if((state_val_21866 === (7))){
var inst_21861 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21867_21951 = state_21865__$1;
(statearr_21867_21951[(2)] = inst_21861);

(statearr_21867_21951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (20))){
var inst_21764 = (state_21865[(7)]);
var inst_21776 = cljs.core.first.call(null,inst_21764);
var inst_21777 = cljs.core.nth.call(null,inst_21776,(0),null);
var inst_21778 = cljs.core.nth.call(null,inst_21776,(1),null);
var state_21865__$1 = (function (){var statearr_21868 = state_21865;
(statearr_21868[(8)] = inst_21777);

return statearr_21868;
})();
if(cljs.core.truth_(inst_21778)){
var statearr_21869_21952 = state_21865__$1;
(statearr_21869_21952[(1)] = (22));

} else {
var statearr_21870_21953 = state_21865__$1;
(statearr_21870_21953[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (27))){
var inst_21813 = (state_21865[(9)]);
var inst_21733 = (state_21865[(10)]);
var inst_21808 = (state_21865[(11)]);
var inst_21806 = (state_21865[(12)]);
var inst_21813__$1 = cljs.core._nth.call(null,inst_21806,inst_21808);
var inst_21814 = cljs.core.async.put_BANG_.call(null,inst_21813__$1,inst_21733,done);
var state_21865__$1 = (function (){var statearr_21871 = state_21865;
(statearr_21871[(9)] = inst_21813__$1);

return statearr_21871;
})();
if(cljs.core.truth_(inst_21814)){
var statearr_21872_21954 = state_21865__$1;
(statearr_21872_21954[(1)] = (30));

} else {
var statearr_21873_21955 = state_21865__$1;
(statearr_21873_21955[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (1))){
var state_21865__$1 = state_21865;
var statearr_21874_21956 = state_21865__$1;
(statearr_21874_21956[(2)] = null);

(statearr_21874_21956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (24))){
var inst_21764 = (state_21865[(7)]);
var inst_21783 = (state_21865[(2)]);
var inst_21784 = cljs.core.next.call(null,inst_21764);
var inst_21742 = inst_21784;
var inst_21743 = null;
var inst_21744 = (0);
var inst_21745 = (0);
var state_21865__$1 = (function (){var statearr_21875 = state_21865;
(statearr_21875[(13)] = inst_21742);

(statearr_21875[(14)] = inst_21744);

(statearr_21875[(15)] = inst_21745);

(statearr_21875[(16)] = inst_21743);

(statearr_21875[(17)] = inst_21783);

return statearr_21875;
})();
var statearr_21876_21957 = state_21865__$1;
(statearr_21876_21957[(2)] = null);

(statearr_21876_21957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (39))){
var state_21865__$1 = state_21865;
var statearr_21880_21958 = state_21865__$1;
(statearr_21880_21958[(2)] = null);

(statearr_21880_21958[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (4))){
var inst_21733 = (state_21865[(10)]);
var inst_21733__$1 = (state_21865[(2)]);
var inst_21734 = (inst_21733__$1 == null);
var state_21865__$1 = (function (){var statearr_21881 = state_21865;
(statearr_21881[(10)] = inst_21733__$1);

return statearr_21881;
})();
if(cljs.core.truth_(inst_21734)){
var statearr_21882_21959 = state_21865__$1;
(statearr_21882_21959[(1)] = (5));

} else {
var statearr_21883_21960 = state_21865__$1;
(statearr_21883_21960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (15))){
var inst_21742 = (state_21865[(13)]);
var inst_21744 = (state_21865[(14)]);
var inst_21745 = (state_21865[(15)]);
var inst_21743 = (state_21865[(16)]);
var inst_21760 = (state_21865[(2)]);
var inst_21761 = (inst_21745 + (1));
var tmp21877 = inst_21742;
var tmp21878 = inst_21744;
var tmp21879 = inst_21743;
var inst_21742__$1 = tmp21877;
var inst_21743__$1 = tmp21879;
var inst_21744__$1 = tmp21878;
var inst_21745__$1 = inst_21761;
var state_21865__$1 = (function (){var statearr_21884 = state_21865;
(statearr_21884[(18)] = inst_21760);

(statearr_21884[(13)] = inst_21742__$1);

(statearr_21884[(14)] = inst_21744__$1);

(statearr_21884[(15)] = inst_21745__$1);

(statearr_21884[(16)] = inst_21743__$1);

return statearr_21884;
})();
var statearr_21885_21961 = state_21865__$1;
(statearr_21885_21961[(2)] = null);

(statearr_21885_21961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (21))){
var inst_21787 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21889_21962 = state_21865__$1;
(statearr_21889_21962[(2)] = inst_21787);

(statearr_21889_21962[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (31))){
var inst_21813 = (state_21865[(9)]);
var inst_21817 = done.call(null,null);
var inst_21818 = cljs.core.async.untap_STAR_.call(null,m,inst_21813);
var state_21865__$1 = (function (){var statearr_21890 = state_21865;
(statearr_21890[(19)] = inst_21817);

return statearr_21890;
})();
var statearr_21891_21963 = state_21865__$1;
(statearr_21891_21963[(2)] = inst_21818);

(statearr_21891_21963[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (32))){
var inst_21807 = (state_21865[(20)]);
var inst_21808 = (state_21865[(11)]);
var inst_21805 = (state_21865[(21)]);
var inst_21806 = (state_21865[(12)]);
var inst_21820 = (state_21865[(2)]);
var inst_21821 = (inst_21808 + (1));
var tmp21886 = inst_21807;
var tmp21887 = inst_21805;
var tmp21888 = inst_21806;
var inst_21805__$1 = tmp21887;
var inst_21806__$1 = tmp21888;
var inst_21807__$1 = tmp21886;
var inst_21808__$1 = inst_21821;
var state_21865__$1 = (function (){var statearr_21892 = state_21865;
(statearr_21892[(20)] = inst_21807__$1);

(statearr_21892[(22)] = inst_21820);

(statearr_21892[(11)] = inst_21808__$1);

(statearr_21892[(21)] = inst_21805__$1);

(statearr_21892[(12)] = inst_21806__$1);

return statearr_21892;
})();
var statearr_21893_21964 = state_21865__$1;
(statearr_21893_21964[(2)] = null);

(statearr_21893_21964[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (40))){
var inst_21833 = (state_21865[(23)]);
var inst_21837 = done.call(null,null);
var inst_21838 = cljs.core.async.untap_STAR_.call(null,m,inst_21833);
var state_21865__$1 = (function (){var statearr_21894 = state_21865;
(statearr_21894[(24)] = inst_21837);

return statearr_21894;
})();
var statearr_21895_21965 = state_21865__$1;
(statearr_21895_21965[(2)] = inst_21838);

(statearr_21895_21965[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (33))){
var inst_21824 = (state_21865[(25)]);
var inst_21826 = cljs.core.chunked_seq_QMARK_.call(null,inst_21824);
var state_21865__$1 = state_21865;
if(inst_21826){
var statearr_21896_21966 = state_21865__$1;
(statearr_21896_21966[(1)] = (36));

} else {
var statearr_21897_21967 = state_21865__$1;
(statearr_21897_21967[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (13))){
var inst_21754 = (state_21865[(26)]);
var inst_21757 = cljs.core.async.close_BANG_.call(null,inst_21754);
var state_21865__$1 = state_21865;
var statearr_21898_21968 = state_21865__$1;
(statearr_21898_21968[(2)] = inst_21757);

(statearr_21898_21968[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (22))){
var inst_21777 = (state_21865[(8)]);
var inst_21780 = cljs.core.async.close_BANG_.call(null,inst_21777);
var state_21865__$1 = state_21865;
var statearr_21899_21969 = state_21865__$1;
(statearr_21899_21969[(2)] = inst_21780);

(statearr_21899_21969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (36))){
var inst_21824 = (state_21865[(25)]);
var inst_21828 = cljs.core.chunk_first.call(null,inst_21824);
var inst_21829 = cljs.core.chunk_rest.call(null,inst_21824);
var inst_21830 = cljs.core.count.call(null,inst_21828);
var inst_21805 = inst_21829;
var inst_21806 = inst_21828;
var inst_21807 = inst_21830;
var inst_21808 = (0);
var state_21865__$1 = (function (){var statearr_21900 = state_21865;
(statearr_21900[(20)] = inst_21807);

(statearr_21900[(11)] = inst_21808);

(statearr_21900[(21)] = inst_21805);

(statearr_21900[(12)] = inst_21806);

return statearr_21900;
})();
var statearr_21901_21970 = state_21865__$1;
(statearr_21901_21970[(2)] = null);

(statearr_21901_21970[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (41))){
var inst_21824 = (state_21865[(25)]);
var inst_21840 = (state_21865[(2)]);
var inst_21841 = cljs.core.next.call(null,inst_21824);
var inst_21805 = inst_21841;
var inst_21806 = null;
var inst_21807 = (0);
var inst_21808 = (0);
var state_21865__$1 = (function (){var statearr_21902 = state_21865;
(statearr_21902[(20)] = inst_21807);

(statearr_21902[(27)] = inst_21840);

(statearr_21902[(11)] = inst_21808);

(statearr_21902[(21)] = inst_21805);

(statearr_21902[(12)] = inst_21806);

return statearr_21902;
})();
var statearr_21903_21971 = state_21865__$1;
(statearr_21903_21971[(2)] = null);

(statearr_21903_21971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (43))){
var state_21865__$1 = state_21865;
var statearr_21904_21972 = state_21865__$1;
(statearr_21904_21972[(2)] = null);

(statearr_21904_21972[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (29))){
var inst_21849 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21905_21973 = state_21865__$1;
(statearr_21905_21973[(2)] = inst_21849);

(statearr_21905_21973[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (44))){
var inst_21858 = (state_21865[(2)]);
var state_21865__$1 = (function (){var statearr_21906 = state_21865;
(statearr_21906[(28)] = inst_21858);

return statearr_21906;
})();
var statearr_21907_21974 = state_21865__$1;
(statearr_21907_21974[(2)] = null);

(statearr_21907_21974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (6))){
var inst_21797 = (state_21865[(29)]);
var inst_21796 = cljs.core.deref.call(null,cs);
var inst_21797__$1 = cljs.core.keys.call(null,inst_21796);
var inst_21798 = cljs.core.count.call(null,inst_21797__$1);
var inst_21799 = cljs.core.reset_BANG_.call(null,dctr,inst_21798);
var inst_21804 = cljs.core.seq.call(null,inst_21797__$1);
var inst_21805 = inst_21804;
var inst_21806 = null;
var inst_21807 = (0);
var inst_21808 = (0);
var state_21865__$1 = (function (){var statearr_21908 = state_21865;
(statearr_21908[(20)] = inst_21807);

(statearr_21908[(30)] = inst_21799);

(statearr_21908[(29)] = inst_21797__$1);

(statearr_21908[(11)] = inst_21808);

(statearr_21908[(21)] = inst_21805);

(statearr_21908[(12)] = inst_21806);

return statearr_21908;
})();
var statearr_21909_21975 = state_21865__$1;
(statearr_21909_21975[(2)] = null);

(statearr_21909_21975[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (28))){
var inst_21824 = (state_21865[(25)]);
var inst_21805 = (state_21865[(21)]);
var inst_21824__$1 = cljs.core.seq.call(null,inst_21805);
var state_21865__$1 = (function (){var statearr_21910 = state_21865;
(statearr_21910[(25)] = inst_21824__$1);

return statearr_21910;
})();
if(inst_21824__$1){
var statearr_21911_21976 = state_21865__$1;
(statearr_21911_21976[(1)] = (33));

} else {
var statearr_21912_21977 = state_21865__$1;
(statearr_21912_21977[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (25))){
var inst_21807 = (state_21865[(20)]);
var inst_21808 = (state_21865[(11)]);
var inst_21810 = (inst_21808 < inst_21807);
var inst_21811 = inst_21810;
var state_21865__$1 = state_21865;
if(cljs.core.truth_(inst_21811)){
var statearr_21913_21978 = state_21865__$1;
(statearr_21913_21978[(1)] = (27));

} else {
var statearr_21914_21979 = state_21865__$1;
(statearr_21914_21979[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (34))){
var state_21865__$1 = state_21865;
var statearr_21915_21980 = state_21865__$1;
(statearr_21915_21980[(2)] = null);

(statearr_21915_21980[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (17))){
var state_21865__$1 = state_21865;
var statearr_21916_21981 = state_21865__$1;
(statearr_21916_21981[(2)] = null);

(statearr_21916_21981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (3))){
var inst_21863 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21865__$1,inst_21863);
} else {
if((state_val_21866 === (12))){
var inst_21792 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21917_21982 = state_21865__$1;
(statearr_21917_21982[(2)] = inst_21792);

(statearr_21917_21982[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (2))){
var state_21865__$1 = state_21865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21865__$1,(4),ch);
} else {
if((state_val_21866 === (23))){
var state_21865__$1 = state_21865;
var statearr_21918_21983 = state_21865__$1;
(statearr_21918_21983[(2)] = null);

(statearr_21918_21983[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (35))){
var inst_21847 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21919_21984 = state_21865__$1;
(statearr_21919_21984[(2)] = inst_21847);

(statearr_21919_21984[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (19))){
var inst_21764 = (state_21865[(7)]);
var inst_21768 = cljs.core.chunk_first.call(null,inst_21764);
var inst_21769 = cljs.core.chunk_rest.call(null,inst_21764);
var inst_21770 = cljs.core.count.call(null,inst_21768);
var inst_21742 = inst_21769;
var inst_21743 = inst_21768;
var inst_21744 = inst_21770;
var inst_21745 = (0);
var state_21865__$1 = (function (){var statearr_21920 = state_21865;
(statearr_21920[(13)] = inst_21742);

(statearr_21920[(14)] = inst_21744);

(statearr_21920[(15)] = inst_21745);

(statearr_21920[(16)] = inst_21743);

return statearr_21920;
})();
var statearr_21921_21985 = state_21865__$1;
(statearr_21921_21985[(2)] = null);

(statearr_21921_21985[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (11))){
var inst_21742 = (state_21865[(13)]);
var inst_21764 = (state_21865[(7)]);
var inst_21764__$1 = cljs.core.seq.call(null,inst_21742);
var state_21865__$1 = (function (){var statearr_21922 = state_21865;
(statearr_21922[(7)] = inst_21764__$1);

return statearr_21922;
})();
if(inst_21764__$1){
var statearr_21923_21986 = state_21865__$1;
(statearr_21923_21986[(1)] = (16));

} else {
var statearr_21924_21987 = state_21865__$1;
(statearr_21924_21987[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (9))){
var inst_21794 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21925_21988 = state_21865__$1;
(statearr_21925_21988[(2)] = inst_21794);

(statearr_21925_21988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (5))){
var inst_21740 = cljs.core.deref.call(null,cs);
var inst_21741 = cljs.core.seq.call(null,inst_21740);
var inst_21742 = inst_21741;
var inst_21743 = null;
var inst_21744 = (0);
var inst_21745 = (0);
var state_21865__$1 = (function (){var statearr_21926 = state_21865;
(statearr_21926[(13)] = inst_21742);

(statearr_21926[(14)] = inst_21744);

(statearr_21926[(15)] = inst_21745);

(statearr_21926[(16)] = inst_21743);

return statearr_21926;
})();
var statearr_21927_21989 = state_21865__$1;
(statearr_21927_21989[(2)] = null);

(statearr_21927_21989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (14))){
var state_21865__$1 = state_21865;
var statearr_21928_21990 = state_21865__$1;
(statearr_21928_21990[(2)] = null);

(statearr_21928_21990[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (45))){
var inst_21855 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21929_21991 = state_21865__$1;
(statearr_21929_21991[(2)] = inst_21855);

(statearr_21929_21991[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (26))){
var inst_21797 = (state_21865[(29)]);
var inst_21851 = (state_21865[(2)]);
var inst_21852 = cljs.core.seq.call(null,inst_21797);
var state_21865__$1 = (function (){var statearr_21930 = state_21865;
(statearr_21930[(31)] = inst_21851);

return statearr_21930;
})();
if(inst_21852){
var statearr_21931_21992 = state_21865__$1;
(statearr_21931_21992[(1)] = (42));

} else {
var statearr_21932_21993 = state_21865__$1;
(statearr_21932_21993[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (16))){
var inst_21764 = (state_21865[(7)]);
var inst_21766 = cljs.core.chunked_seq_QMARK_.call(null,inst_21764);
var state_21865__$1 = state_21865;
if(inst_21766){
var statearr_21933_21994 = state_21865__$1;
(statearr_21933_21994[(1)] = (19));

} else {
var statearr_21934_21995 = state_21865__$1;
(statearr_21934_21995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (38))){
var inst_21844 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21935_21996 = state_21865__$1;
(statearr_21935_21996[(2)] = inst_21844);

(statearr_21935_21996[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (30))){
var state_21865__$1 = state_21865;
var statearr_21936_21997 = state_21865__$1;
(statearr_21936_21997[(2)] = null);

(statearr_21936_21997[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (10))){
var inst_21745 = (state_21865[(15)]);
var inst_21743 = (state_21865[(16)]);
var inst_21753 = cljs.core._nth.call(null,inst_21743,inst_21745);
var inst_21754 = cljs.core.nth.call(null,inst_21753,(0),null);
var inst_21755 = cljs.core.nth.call(null,inst_21753,(1),null);
var state_21865__$1 = (function (){var statearr_21937 = state_21865;
(statearr_21937[(26)] = inst_21754);

return statearr_21937;
})();
if(cljs.core.truth_(inst_21755)){
var statearr_21938_21998 = state_21865__$1;
(statearr_21938_21998[(1)] = (13));

} else {
var statearr_21939_21999 = state_21865__$1;
(statearr_21939_21999[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (18))){
var inst_21790 = (state_21865[(2)]);
var state_21865__$1 = state_21865;
var statearr_21940_22000 = state_21865__$1;
(statearr_21940_22000[(2)] = inst_21790);

(statearr_21940_22000[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (42))){
var state_21865__$1 = state_21865;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21865__$1,(45),dchan);
} else {
if((state_val_21866 === (37))){
var inst_21824 = (state_21865[(25)]);
var inst_21733 = (state_21865[(10)]);
var inst_21833 = (state_21865[(23)]);
var inst_21833__$1 = cljs.core.first.call(null,inst_21824);
var inst_21834 = cljs.core.async.put_BANG_.call(null,inst_21833__$1,inst_21733,done);
var state_21865__$1 = (function (){var statearr_21941 = state_21865;
(statearr_21941[(23)] = inst_21833__$1);

return statearr_21941;
})();
if(cljs.core.truth_(inst_21834)){
var statearr_21942_22001 = state_21865__$1;
(statearr_21942_22001[(1)] = (39));

} else {
var statearr_21943_22002 = state_21865__$1;
(statearr_21943_22002[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21866 === (8))){
var inst_21744 = (state_21865[(14)]);
var inst_21745 = (state_21865[(15)]);
var inst_21747 = (inst_21745 < inst_21744);
var inst_21748 = inst_21747;
var state_21865__$1 = state_21865;
if(cljs.core.truth_(inst_21748)){
var statearr_21944_22003 = state_21865__$1;
(statearr_21944_22003[(1)] = (10));

} else {
var statearr_21945_22004 = state_21865__$1;
(statearr_21945_22004[(1)] = (11));

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
});})(c__21145__auto___21950,cs,m,dchan,dctr,done))
;
return ((function (switch__21052__auto__,c__21145__auto___21950,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21053__auto__ = null;
var cljs$core$async$mult_$_state_machine__21053__auto____0 = (function (){
var statearr_21946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21946[(0)] = cljs$core$async$mult_$_state_machine__21053__auto__);

(statearr_21946[(1)] = (1));

return statearr_21946;
});
var cljs$core$async$mult_$_state_machine__21053__auto____1 = (function (state_21865){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_21865);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e21947){if((e21947 instanceof Object)){
var ex__21056__auto__ = e21947;
var statearr_21948_22005 = state_21865;
(statearr_21948_22005[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22006 = state_21865;
state_21865 = G__22006;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21053__auto__ = function(state_21865){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21053__auto____1.call(this,state_21865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21053__auto____0;
cljs$core$async$mult_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21053__auto____1;
return cljs$core$async$mult_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___21950,cs,m,dchan,dctr,done))
})();
var state__21147__auto__ = (function (){var statearr_21949 = f__21146__auto__.call(null);
(statearr_21949[(6)] = c__21145__auto___21950);

return statearr_21949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___21950,cs,m,dchan,dctr,done))
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
var G__22008 = arguments.length;
switch (G__22008) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___22020 = arguments.length;
var i__4731__auto___22021 = (0);
while(true){
if((i__4731__auto___22021 < len__4730__auto___22020)){
args__4736__auto__.push((arguments[i__4731__auto___22021]));

var G__22022 = (i__4731__auto___22021 + (1));
i__4731__auto___22021 = G__22022;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22014){
var map__22015 = p__22014;
var map__22015__$1 = (((((!((map__22015 == null))))?(((((map__22015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22015):map__22015);
var opts = map__22015__$1;
var statearr_22017_22023 = state;
(statearr_22017_22023[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__22015,map__22015__$1,opts){
return (function (val){
var statearr_22018_22024 = state;
(statearr_22018_22024[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22015,map__22015__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_22019_22025 = state;
(statearr_22019_22025[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22010){
var G__22011 = cljs.core.first.call(null,seq22010);
var seq22010__$1 = cljs.core.next.call(null,seq22010);
var G__22012 = cljs.core.first.call(null,seq22010__$1);
var seq22010__$2 = cljs.core.next.call(null,seq22010__$1);
var G__22013 = cljs.core.first.call(null,seq22010__$2);
var seq22010__$3 = cljs.core.next.call(null,seq22010__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22011,G__22012,G__22013,seq22010__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22026 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22027){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22027 = meta22027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22028,meta22027__$1){
var self__ = this;
var _22028__$1 = this;
return (new cljs.core.async.t_cljs$core$async22026(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22027__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22028){
var self__ = this;
var _22028__$1 = this;
return self__.meta22027;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta22027","meta22027",1261940379,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22026";

cljs.core.async.t_cljs$core$async22026.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22026");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22026.
 */
cljs.core.async.__GT_t_cljs$core$async22026 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22026(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22027){
return (new cljs.core.async.t_cljs$core$async22026(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22027));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22026(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21145__auto___22190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22130){
var state_val_22131 = (state_22130[(1)]);
if((state_val_22131 === (7))){
var inst_22045 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
var statearr_22132_22191 = state_22130__$1;
(statearr_22132_22191[(2)] = inst_22045);

(statearr_22132_22191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (20))){
var inst_22057 = (state_22130[(7)]);
var state_22130__$1 = state_22130;
var statearr_22133_22192 = state_22130__$1;
(statearr_22133_22192[(2)] = inst_22057);

(statearr_22133_22192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (27))){
var state_22130__$1 = state_22130;
var statearr_22134_22193 = state_22130__$1;
(statearr_22134_22193[(2)] = null);

(statearr_22134_22193[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (1))){
var inst_22032 = (state_22130[(8)]);
var inst_22032__$1 = calc_state.call(null);
var inst_22034 = (inst_22032__$1 == null);
var inst_22035 = cljs.core.not.call(null,inst_22034);
var state_22130__$1 = (function (){var statearr_22135 = state_22130;
(statearr_22135[(8)] = inst_22032__$1);

return statearr_22135;
})();
if(inst_22035){
var statearr_22136_22194 = state_22130__$1;
(statearr_22136_22194[(1)] = (2));

} else {
var statearr_22137_22195 = state_22130__$1;
(statearr_22137_22195[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (24))){
var inst_22081 = (state_22130[(9)]);
var inst_22104 = (state_22130[(10)]);
var inst_22090 = (state_22130[(11)]);
var inst_22104__$1 = inst_22081.call(null,inst_22090);
var state_22130__$1 = (function (){var statearr_22138 = state_22130;
(statearr_22138[(10)] = inst_22104__$1);

return statearr_22138;
})();
if(cljs.core.truth_(inst_22104__$1)){
var statearr_22139_22196 = state_22130__$1;
(statearr_22139_22196[(1)] = (29));

} else {
var statearr_22140_22197 = state_22130__$1;
(statearr_22140_22197[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (4))){
var inst_22048 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
if(cljs.core.truth_(inst_22048)){
var statearr_22141_22198 = state_22130__$1;
(statearr_22141_22198[(1)] = (8));

} else {
var statearr_22142_22199 = state_22130__$1;
(statearr_22142_22199[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (15))){
var inst_22075 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
if(cljs.core.truth_(inst_22075)){
var statearr_22143_22200 = state_22130__$1;
(statearr_22143_22200[(1)] = (19));

} else {
var statearr_22144_22201 = state_22130__$1;
(statearr_22144_22201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (21))){
var inst_22080 = (state_22130[(12)]);
var inst_22080__$1 = (state_22130[(2)]);
var inst_22081 = cljs.core.get.call(null,inst_22080__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22082 = cljs.core.get.call(null,inst_22080__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22083 = cljs.core.get.call(null,inst_22080__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22130__$1 = (function (){var statearr_22145 = state_22130;
(statearr_22145[(9)] = inst_22081);

(statearr_22145[(12)] = inst_22080__$1);

(statearr_22145[(13)] = inst_22082);

return statearr_22145;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22130__$1,(22),inst_22083);
} else {
if((state_val_22131 === (31))){
var inst_22112 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
if(cljs.core.truth_(inst_22112)){
var statearr_22146_22202 = state_22130__$1;
(statearr_22146_22202[(1)] = (32));

} else {
var statearr_22147_22203 = state_22130__$1;
(statearr_22147_22203[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (32))){
var inst_22089 = (state_22130[(14)]);
var state_22130__$1 = state_22130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22130__$1,(35),out,inst_22089);
} else {
if((state_val_22131 === (33))){
var inst_22080 = (state_22130[(12)]);
var inst_22057 = inst_22080;
var state_22130__$1 = (function (){var statearr_22148 = state_22130;
(statearr_22148[(7)] = inst_22057);

return statearr_22148;
})();
var statearr_22149_22204 = state_22130__$1;
(statearr_22149_22204[(2)] = null);

(statearr_22149_22204[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (13))){
var inst_22057 = (state_22130[(7)]);
var inst_22064 = inst_22057.cljs$lang$protocol_mask$partition0$;
var inst_22065 = (inst_22064 & (64));
var inst_22066 = inst_22057.cljs$core$ISeq$;
var inst_22067 = (cljs.core.PROTOCOL_SENTINEL === inst_22066);
var inst_22068 = ((inst_22065) || (inst_22067));
var state_22130__$1 = state_22130;
if(cljs.core.truth_(inst_22068)){
var statearr_22150_22205 = state_22130__$1;
(statearr_22150_22205[(1)] = (16));

} else {
var statearr_22151_22206 = state_22130__$1;
(statearr_22151_22206[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (22))){
var inst_22089 = (state_22130[(14)]);
var inst_22090 = (state_22130[(11)]);
var inst_22088 = (state_22130[(2)]);
var inst_22089__$1 = cljs.core.nth.call(null,inst_22088,(0),null);
var inst_22090__$1 = cljs.core.nth.call(null,inst_22088,(1),null);
var inst_22091 = (inst_22089__$1 == null);
var inst_22092 = cljs.core._EQ_.call(null,inst_22090__$1,change);
var inst_22093 = ((inst_22091) || (inst_22092));
var state_22130__$1 = (function (){var statearr_22152 = state_22130;
(statearr_22152[(14)] = inst_22089__$1);

(statearr_22152[(11)] = inst_22090__$1);

return statearr_22152;
})();
if(cljs.core.truth_(inst_22093)){
var statearr_22153_22207 = state_22130__$1;
(statearr_22153_22207[(1)] = (23));

} else {
var statearr_22154_22208 = state_22130__$1;
(statearr_22154_22208[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (36))){
var inst_22080 = (state_22130[(12)]);
var inst_22057 = inst_22080;
var state_22130__$1 = (function (){var statearr_22155 = state_22130;
(statearr_22155[(7)] = inst_22057);

return statearr_22155;
})();
var statearr_22156_22209 = state_22130__$1;
(statearr_22156_22209[(2)] = null);

(statearr_22156_22209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (29))){
var inst_22104 = (state_22130[(10)]);
var state_22130__$1 = state_22130;
var statearr_22157_22210 = state_22130__$1;
(statearr_22157_22210[(2)] = inst_22104);

(statearr_22157_22210[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (6))){
var state_22130__$1 = state_22130;
var statearr_22158_22211 = state_22130__$1;
(statearr_22158_22211[(2)] = false);

(statearr_22158_22211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (28))){
var inst_22100 = (state_22130[(2)]);
var inst_22101 = calc_state.call(null);
var inst_22057 = inst_22101;
var state_22130__$1 = (function (){var statearr_22159 = state_22130;
(statearr_22159[(15)] = inst_22100);

(statearr_22159[(7)] = inst_22057);

return statearr_22159;
})();
var statearr_22160_22212 = state_22130__$1;
(statearr_22160_22212[(2)] = null);

(statearr_22160_22212[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (25))){
var inst_22126 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
var statearr_22161_22213 = state_22130__$1;
(statearr_22161_22213[(2)] = inst_22126);

(statearr_22161_22213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (34))){
var inst_22124 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
var statearr_22162_22214 = state_22130__$1;
(statearr_22162_22214[(2)] = inst_22124);

(statearr_22162_22214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (17))){
var state_22130__$1 = state_22130;
var statearr_22163_22215 = state_22130__$1;
(statearr_22163_22215[(2)] = false);

(statearr_22163_22215[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (3))){
var state_22130__$1 = state_22130;
var statearr_22164_22216 = state_22130__$1;
(statearr_22164_22216[(2)] = false);

(statearr_22164_22216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (12))){
var inst_22128 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22130__$1,inst_22128);
} else {
if((state_val_22131 === (2))){
var inst_22032 = (state_22130[(8)]);
var inst_22037 = inst_22032.cljs$lang$protocol_mask$partition0$;
var inst_22038 = (inst_22037 & (64));
var inst_22039 = inst_22032.cljs$core$ISeq$;
var inst_22040 = (cljs.core.PROTOCOL_SENTINEL === inst_22039);
var inst_22041 = ((inst_22038) || (inst_22040));
var state_22130__$1 = state_22130;
if(cljs.core.truth_(inst_22041)){
var statearr_22165_22217 = state_22130__$1;
(statearr_22165_22217[(1)] = (5));

} else {
var statearr_22166_22218 = state_22130__$1;
(statearr_22166_22218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (23))){
var inst_22089 = (state_22130[(14)]);
var inst_22095 = (inst_22089 == null);
var state_22130__$1 = state_22130;
if(cljs.core.truth_(inst_22095)){
var statearr_22167_22219 = state_22130__$1;
(statearr_22167_22219[(1)] = (26));

} else {
var statearr_22168_22220 = state_22130__$1;
(statearr_22168_22220[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (35))){
var inst_22115 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
if(cljs.core.truth_(inst_22115)){
var statearr_22169_22221 = state_22130__$1;
(statearr_22169_22221[(1)] = (36));

} else {
var statearr_22170_22222 = state_22130__$1;
(statearr_22170_22222[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (19))){
var inst_22057 = (state_22130[(7)]);
var inst_22077 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22057);
var state_22130__$1 = state_22130;
var statearr_22171_22223 = state_22130__$1;
(statearr_22171_22223[(2)] = inst_22077);

(statearr_22171_22223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (11))){
var inst_22057 = (state_22130[(7)]);
var inst_22061 = (inst_22057 == null);
var inst_22062 = cljs.core.not.call(null,inst_22061);
var state_22130__$1 = state_22130;
if(inst_22062){
var statearr_22172_22224 = state_22130__$1;
(statearr_22172_22224[(1)] = (13));

} else {
var statearr_22173_22225 = state_22130__$1;
(statearr_22173_22225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (9))){
var inst_22032 = (state_22130[(8)]);
var state_22130__$1 = state_22130;
var statearr_22174_22226 = state_22130__$1;
(statearr_22174_22226[(2)] = inst_22032);

(statearr_22174_22226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (5))){
var state_22130__$1 = state_22130;
var statearr_22175_22227 = state_22130__$1;
(statearr_22175_22227[(2)] = true);

(statearr_22175_22227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (14))){
var state_22130__$1 = state_22130;
var statearr_22176_22228 = state_22130__$1;
(statearr_22176_22228[(2)] = false);

(statearr_22176_22228[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (26))){
var inst_22090 = (state_22130[(11)]);
var inst_22097 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22090);
var state_22130__$1 = state_22130;
var statearr_22177_22229 = state_22130__$1;
(statearr_22177_22229[(2)] = inst_22097);

(statearr_22177_22229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (16))){
var state_22130__$1 = state_22130;
var statearr_22178_22230 = state_22130__$1;
(statearr_22178_22230[(2)] = true);

(statearr_22178_22230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (38))){
var inst_22120 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
var statearr_22179_22231 = state_22130__$1;
(statearr_22179_22231[(2)] = inst_22120);

(statearr_22179_22231[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (30))){
var inst_22081 = (state_22130[(9)]);
var inst_22082 = (state_22130[(13)]);
var inst_22090 = (state_22130[(11)]);
var inst_22107 = cljs.core.empty_QMARK_.call(null,inst_22081);
var inst_22108 = inst_22082.call(null,inst_22090);
var inst_22109 = cljs.core.not.call(null,inst_22108);
var inst_22110 = ((inst_22107) && (inst_22109));
var state_22130__$1 = state_22130;
var statearr_22180_22232 = state_22130__$1;
(statearr_22180_22232[(2)] = inst_22110);

(statearr_22180_22232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (10))){
var inst_22032 = (state_22130[(8)]);
var inst_22053 = (state_22130[(2)]);
var inst_22054 = cljs.core.get.call(null,inst_22053,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22055 = cljs.core.get.call(null,inst_22053,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22056 = cljs.core.get.call(null,inst_22053,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22057 = inst_22032;
var state_22130__$1 = (function (){var statearr_22181 = state_22130;
(statearr_22181[(16)] = inst_22056);

(statearr_22181[(17)] = inst_22055);

(statearr_22181[(7)] = inst_22057);

(statearr_22181[(18)] = inst_22054);

return statearr_22181;
})();
var statearr_22182_22233 = state_22130__$1;
(statearr_22182_22233[(2)] = null);

(statearr_22182_22233[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (18))){
var inst_22072 = (state_22130[(2)]);
var state_22130__$1 = state_22130;
var statearr_22183_22234 = state_22130__$1;
(statearr_22183_22234[(2)] = inst_22072);

(statearr_22183_22234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (37))){
var state_22130__$1 = state_22130;
var statearr_22184_22235 = state_22130__$1;
(statearr_22184_22235[(2)] = null);

(statearr_22184_22235[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22131 === (8))){
var inst_22032 = (state_22130[(8)]);
var inst_22050 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22032);
var state_22130__$1 = state_22130;
var statearr_22185_22236 = state_22130__$1;
(statearr_22185_22236[(2)] = inst_22050);

(statearr_22185_22236[(1)] = (10));


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
});})(c__21145__auto___22190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21052__auto__,c__21145__auto___22190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21053__auto__ = null;
var cljs$core$async$mix_$_state_machine__21053__auto____0 = (function (){
var statearr_22186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22186[(0)] = cljs$core$async$mix_$_state_machine__21053__auto__);

(statearr_22186[(1)] = (1));

return statearr_22186;
});
var cljs$core$async$mix_$_state_machine__21053__auto____1 = (function (state_22130){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22187){if((e22187 instanceof Object)){
var ex__21056__auto__ = e22187;
var statearr_22188_22237 = state_22130;
(statearr_22188_22237[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22238 = state_22130;
state_22130 = G__22238;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21053__auto__ = function(state_22130){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21053__auto____1.call(this,state_22130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21053__auto____0;
cljs$core$async$mix_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21053__auto____1;
return cljs$core$async$mix_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21147__auto__ = (function (){var statearr_22189 = f__21146__auto__.call(null);
(statearr_22189[(6)] = c__21145__auto___22190);

return statearr_22189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22190,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22240 = arguments.length;
switch (G__22240) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__22244 = arguments.length;
switch (G__22244) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__22242_SHARP_){
if(cljs.core.truth_(p1__22242_SHARP_.call(null,topic))){
return p1__22242_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22242_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22245 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22245 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22246){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22246 = meta22246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22247,meta22246__$1){
var self__ = this;
var _22247__$1 = this;
return (new cljs.core.async.t_cljs$core$async22245(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22246__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22247){
var self__ = this;
var _22247__$1 = this;
return self__.meta22246;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22245.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22245.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22246","meta22246",-863714870,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22245";

cljs.core.async.t_cljs$core$async22245.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22245");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22245.
 */
cljs.core.async.__GT_t_cljs$core$async22245 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22246){
return (new cljs.core.async.t_cljs$core$async22245(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22246));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22245(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21145__auto___22365 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22365,mults,ensure_mult,p){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22365,mults,ensure_mult,p){
return (function (state_22319){
var state_val_22320 = (state_22319[(1)]);
if((state_val_22320 === (7))){
var inst_22315 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22321_22366 = state_22319__$1;
(statearr_22321_22366[(2)] = inst_22315);

(statearr_22321_22366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (20))){
var state_22319__$1 = state_22319;
var statearr_22322_22367 = state_22319__$1;
(statearr_22322_22367[(2)] = null);

(statearr_22322_22367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (1))){
var state_22319__$1 = state_22319;
var statearr_22323_22368 = state_22319__$1;
(statearr_22323_22368[(2)] = null);

(statearr_22323_22368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (24))){
var inst_22298 = (state_22319[(7)]);
var inst_22307 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22298);
var state_22319__$1 = state_22319;
var statearr_22324_22369 = state_22319__$1;
(statearr_22324_22369[(2)] = inst_22307);

(statearr_22324_22369[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (4))){
var inst_22250 = (state_22319[(8)]);
var inst_22250__$1 = (state_22319[(2)]);
var inst_22251 = (inst_22250__$1 == null);
var state_22319__$1 = (function (){var statearr_22325 = state_22319;
(statearr_22325[(8)] = inst_22250__$1);

return statearr_22325;
})();
if(cljs.core.truth_(inst_22251)){
var statearr_22326_22370 = state_22319__$1;
(statearr_22326_22370[(1)] = (5));

} else {
var statearr_22327_22371 = state_22319__$1;
(statearr_22327_22371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (15))){
var inst_22292 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22328_22372 = state_22319__$1;
(statearr_22328_22372[(2)] = inst_22292);

(statearr_22328_22372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (21))){
var inst_22312 = (state_22319[(2)]);
var state_22319__$1 = (function (){var statearr_22329 = state_22319;
(statearr_22329[(9)] = inst_22312);

return statearr_22329;
})();
var statearr_22330_22373 = state_22319__$1;
(statearr_22330_22373[(2)] = null);

(statearr_22330_22373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (13))){
var inst_22274 = (state_22319[(10)]);
var inst_22276 = cljs.core.chunked_seq_QMARK_.call(null,inst_22274);
var state_22319__$1 = state_22319;
if(inst_22276){
var statearr_22331_22374 = state_22319__$1;
(statearr_22331_22374[(1)] = (16));

} else {
var statearr_22332_22375 = state_22319__$1;
(statearr_22332_22375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (22))){
var inst_22304 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
if(cljs.core.truth_(inst_22304)){
var statearr_22333_22376 = state_22319__$1;
(statearr_22333_22376[(1)] = (23));

} else {
var statearr_22334_22377 = state_22319__$1;
(statearr_22334_22377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (6))){
var inst_22250 = (state_22319[(8)]);
var inst_22300 = (state_22319[(11)]);
var inst_22298 = (state_22319[(7)]);
var inst_22298__$1 = topic_fn.call(null,inst_22250);
var inst_22299 = cljs.core.deref.call(null,mults);
var inst_22300__$1 = cljs.core.get.call(null,inst_22299,inst_22298__$1);
var state_22319__$1 = (function (){var statearr_22335 = state_22319;
(statearr_22335[(11)] = inst_22300__$1);

(statearr_22335[(7)] = inst_22298__$1);

return statearr_22335;
})();
if(cljs.core.truth_(inst_22300__$1)){
var statearr_22336_22378 = state_22319__$1;
(statearr_22336_22378[(1)] = (19));

} else {
var statearr_22337_22379 = state_22319__$1;
(statearr_22337_22379[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (25))){
var inst_22309 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22338_22380 = state_22319__$1;
(statearr_22338_22380[(2)] = inst_22309);

(statearr_22338_22380[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (17))){
var inst_22274 = (state_22319[(10)]);
var inst_22283 = cljs.core.first.call(null,inst_22274);
var inst_22284 = cljs.core.async.muxch_STAR_.call(null,inst_22283);
var inst_22285 = cljs.core.async.close_BANG_.call(null,inst_22284);
var inst_22286 = cljs.core.next.call(null,inst_22274);
var inst_22260 = inst_22286;
var inst_22261 = null;
var inst_22262 = (0);
var inst_22263 = (0);
var state_22319__$1 = (function (){var statearr_22339 = state_22319;
(statearr_22339[(12)] = inst_22261);

(statearr_22339[(13)] = inst_22285);

(statearr_22339[(14)] = inst_22260);

(statearr_22339[(15)] = inst_22263);

(statearr_22339[(16)] = inst_22262);

return statearr_22339;
})();
var statearr_22340_22381 = state_22319__$1;
(statearr_22340_22381[(2)] = null);

(statearr_22340_22381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (3))){
var inst_22317 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22319__$1,inst_22317);
} else {
if((state_val_22320 === (12))){
var inst_22294 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22341_22382 = state_22319__$1;
(statearr_22341_22382[(2)] = inst_22294);

(statearr_22341_22382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (2))){
var state_22319__$1 = state_22319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22319__$1,(4),ch);
} else {
if((state_val_22320 === (23))){
var state_22319__$1 = state_22319;
var statearr_22342_22383 = state_22319__$1;
(statearr_22342_22383[(2)] = null);

(statearr_22342_22383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (19))){
var inst_22250 = (state_22319[(8)]);
var inst_22300 = (state_22319[(11)]);
var inst_22302 = cljs.core.async.muxch_STAR_.call(null,inst_22300);
var state_22319__$1 = state_22319;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22319__$1,(22),inst_22302,inst_22250);
} else {
if((state_val_22320 === (11))){
var inst_22274 = (state_22319[(10)]);
var inst_22260 = (state_22319[(14)]);
var inst_22274__$1 = cljs.core.seq.call(null,inst_22260);
var state_22319__$1 = (function (){var statearr_22343 = state_22319;
(statearr_22343[(10)] = inst_22274__$1);

return statearr_22343;
})();
if(inst_22274__$1){
var statearr_22344_22384 = state_22319__$1;
(statearr_22344_22384[(1)] = (13));

} else {
var statearr_22345_22385 = state_22319__$1;
(statearr_22345_22385[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (9))){
var inst_22296 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22346_22386 = state_22319__$1;
(statearr_22346_22386[(2)] = inst_22296);

(statearr_22346_22386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (5))){
var inst_22257 = cljs.core.deref.call(null,mults);
var inst_22258 = cljs.core.vals.call(null,inst_22257);
var inst_22259 = cljs.core.seq.call(null,inst_22258);
var inst_22260 = inst_22259;
var inst_22261 = null;
var inst_22262 = (0);
var inst_22263 = (0);
var state_22319__$1 = (function (){var statearr_22347 = state_22319;
(statearr_22347[(12)] = inst_22261);

(statearr_22347[(14)] = inst_22260);

(statearr_22347[(15)] = inst_22263);

(statearr_22347[(16)] = inst_22262);

return statearr_22347;
})();
var statearr_22348_22387 = state_22319__$1;
(statearr_22348_22387[(2)] = null);

(statearr_22348_22387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (14))){
var state_22319__$1 = state_22319;
var statearr_22352_22388 = state_22319__$1;
(statearr_22352_22388[(2)] = null);

(statearr_22352_22388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (16))){
var inst_22274 = (state_22319[(10)]);
var inst_22278 = cljs.core.chunk_first.call(null,inst_22274);
var inst_22279 = cljs.core.chunk_rest.call(null,inst_22274);
var inst_22280 = cljs.core.count.call(null,inst_22278);
var inst_22260 = inst_22279;
var inst_22261 = inst_22278;
var inst_22262 = inst_22280;
var inst_22263 = (0);
var state_22319__$1 = (function (){var statearr_22353 = state_22319;
(statearr_22353[(12)] = inst_22261);

(statearr_22353[(14)] = inst_22260);

(statearr_22353[(15)] = inst_22263);

(statearr_22353[(16)] = inst_22262);

return statearr_22353;
})();
var statearr_22354_22389 = state_22319__$1;
(statearr_22354_22389[(2)] = null);

(statearr_22354_22389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (10))){
var inst_22261 = (state_22319[(12)]);
var inst_22260 = (state_22319[(14)]);
var inst_22263 = (state_22319[(15)]);
var inst_22262 = (state_22319[(16)]);
var inst_22268 = cljs.core._nth.call(null,inst_22261,inst_22263);
var inst_22269 = cljs.core.async.muxch_STAR_.call(null,inst_22268);
var inst_22270 = cljs.core.async.close_BANG_.call(null,inst_22269);
var inst_22271 = (inst_22263 + (1));
var tmp22349 = inst_22261;
var tmp22350 = inst_22260;
var tmp22351 = inst_22262;
var inst_22260__$1 = tmp22350;
var inst_22261__$1 = tmp22349;
var inst_22262__$1 = tmp22351;
var inst_22263__$1 = inst_22271;
var state_22319__$1 = (function (){var statearr_22355 = state_22319;
(statearr_22355[(12)] = inst_22261__$1);

(statearr_22355[(17)] = inst_22270);

(statearr_22355[(14)] = inst_22260__$1);

(statearr_22355[(15)] = inst_22263__$1);

(statearr_22355[(16)] = inst_22262__$1);

return statearr_22355;
})();
var statearr_22356_22390 = state_22319__$1;
(statearr_22356_22390[(2)] = null);

(statearr_22356_22390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (18))){
var inst_22289 = (state_22319[(2)]);
var state_22319__$1 = state_22319;
var statearr_22357_22391 = state_22319__$1;
(statearr_22357_22391[(2)] = inst_22289);

(statearr_22357_22391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22320 === (8))){
var inst_22263 = (state_22319[(15)]);
var inst_22262 = (state_22319[(16)]);
var inst_22265 = (inst_22263 < inst_22262);
var inst_22266 = inst_22265;
var state_22319__$1 = state_22319;
if(cljs.core.truth_(inst_22266)){
var statearr_22358_22392 = state_22319__$1;
(statearr_22358_22392[(1)] = (10));

} else {
var statearr_22359_22393 = state_22319__$1;
(statearr_22359_22393[(1)] = (11));

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
});})(c__21145__auto___22365,mults,ensure_mult,p))
;
return ((function (switch__21052__auto__,c__21145__auto___22365,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_22360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22360[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_22360[(1)] = (1));

return statearr_22360;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_22319){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22361){if((e22361 instanceof Object)){
var ex__21056__auto__ = e22361;
var statearr_22362_22394 = state_22319;
(statearr_22362_22394[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22395 = state_22319;
state_22319 = G__22395;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_22319){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_22319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22365,mults,ensure_mult,p))
})();
var state__21147__auto__ = (function (){var statearr_22363 = f__21146__auto__.call(null);
(statearr_22363[(6)] = c__21145__auto___22365);

return statearr_22363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22365,mults,ensure_mult,p))
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
var G__22397 = arguments.length;
switch (G__22397) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__22400 = arguments.length;
switch (G__22400) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__22403 = arguments.length;
switch (G__22403) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__21145__auto___22470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22442){
var state_val_22443 = (state_22442[(1)]);
if((state_val_22443 === (7))){
var state_22442__$1 = state_22442;
var statearr_22444_22471 = state_22442__$1;
(statearr_22444_22471[(2)] = null);

(statearr_22444_22471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (1))){
var state_22442__$1 = state_22442;
var statearr_22445_22472 = state_22442__$1;
(statearr_22445_22472[(2)] = null);

(statearr_22445_22472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (4))){
var inst_22406 = (state_22442[(7)]);
var inst_22408 = (inst_22406 < cnt);
var state_22442__$1 = state_22442;
if(cljs.core.truth_(inst_22408)){
var statearr_22446_22473 = state_22442__$1;
(statearr_22446_22473[(1)] = (6));

} else {
var statearr_22447_22474 = state_22442__$1;
(statearr_22447_22474[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (15))){
var inst_22438 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22448_22475 = state_22442__$1;
(statearr_22448_22475[(2)] = inst_22438);

(statearr_22448_22475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (13))){
var inst_22431 = cljs.core.async.close_BANG_.call(null,out);
var state_22442__$1 = state_22442;
var statearr_22449_22476 = state_22442__$1;
(statearr_22449_22476[(2)] = inst_22431);

(statearr_22449_22476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (6))){
var state_22442__$1 = state_22442;
var statearr_22450_22477 = state_22442__$1;
(statearr_22450_22477[(2)] = null);

(statearr_22450_22477[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (3))){
var inst_22440 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22442__$1,inst_22440);
} else {
if((state_val_22443 === (12))){
var inst_22428 = (state_22442[(8)]);
var inst_22428__$1 = (state_22442[(2)]);
var inst_22429 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22428__$1);
var state_22442__$1 = (function (){var statearr_22451 = state_22442;
(statearr_22451[(8)] = inst_22428__$1);

return statearr_22451;
})();
if(cljs.core.truth_(inst_22429)){
var statearr_22452_22478 = state_22442__$1;
(statearr_22452_22478[(1)] = (13));

} else {
var statearr_22453_22479 = state_22442__$1;
(statearr_22453_22479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (2))){
var inst_22405 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22406 = (0);
var state_22442__$1 = (function (){var statearr_22454 = state_22442;
(statearr_22454[(7)] = inst_22406);

(statearr_22454[(9)] = inst_22405);

return statearr_22454;
})();
var statearr_22455_22480 = state_22442__$1;
(statearr_22455_22480[(2)] = null);

(statearr_22455_22480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (11))){
var inst_22406 = (state_22442[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22442,(10),Object,null,(9));
var inst_22415 = chs__$1.call(null,inst_22406);
var inst_22416 = done.call(null,inst_22406);
var inst_22417 = cljs.core.async.take_BANG_.call(null,inst_22415,inst_22416);
var state_22442__$1 = state_22442;
var statearr_22456_22481 = state_22442__$1;
(statearr_22456_22481[(2)] = inst_22417);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (9))){
var inst_22406 = (state_22442[(7)]);
var inst_22419 = (state_22442[(2)]);
var inst_22420 = (inst_22406 + (1));
var inst_22406__$1 = inst_22420;
var state_22442__$1 = (function (){var statearr_22457 = state_22442;
(statearr_22457[(10)] = inst_22419);

(statearr_22457[(7)] = inst_22406__$1);

return statearr_22457;
})();
var statearr_22458_22482 = state_22442__$1;
(statearr_22458_22482[(2)] = null);

(statearr_22458_22482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (5))){
var inst_22426 = (state_22442[(2)]);
var state_22442__$1 = (function (){var statearr_22459 = state_22442;
(statearr_22459[(11)] = inst_22426);

return statearr_22459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22442__$1,(12),dchan);
} else {
if((state_val_22443 === (14))){
var inst_22428 = (state_22442[(8)]);
var inst_22433 = cljs.core.apply.call(null,f,inst_22428);
var state_22442__$1 = state_22442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22442__$1,(16),out,inst_22433);
} else {
if((state_val_22443 === (16))){
var inst_22435 = (state_22442[(2)]);
var state_22442__$1 = (function (){var statearr_22460 = state_22442;
(statearr_22460[(12)] = inst_22435);

return statearr_22460;
})();
var statearr_22461_22483 = state_22442__$1;
(statearr_22461_22483[(2)] = null);

(statearr_22461_22483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (10))){
var inst_22410 = (state_22442[(2)]);
var inst_22411 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22442__$1 = (function (){var statearr_22462 = state_22442;
(statearr_22462[(13)] = inst_22410);

return statearr_22462;
})();
var statearr_22463_22484 = state_22442__$1;
(statearr_22463_22484[(2)] = inst_22411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22443 === (8))){
var inst_22424 = (state_22442[(2)]);
var state_22442__$1 = state_22442;
var statearr_22464_22485 = state_22442__$1;
(statearr_22464_22485[(2)] = inst_22424);

(statearr_22464_22485[(1)] = (5));


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
});})(c__21145__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21052__auto__,c__21145__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_22465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22465[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_22465[(1)] = (1));

return statearr_22465;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_22442){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22466){if((e22466 instanceof Object)){
var ex__21056__auto__ = e22466;
var statearr_22467_22486 = state_22442;
(statearr_22467_22486[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22466;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22487 = state_22442;
state_22442 = G__22487;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_22442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_22442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21147__auto__ = (function (){var statearr_22468 = f__21146__auto__.call(null);
(statearr_22468[(6)] = c__21145__auto___22470);

return statearr_22468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22470,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__22490 = arguments.length;
switch (G__22490) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21145__auto___22544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22544,out){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22544,out){
return (function (state_22522){
var state_val_22523 = (state_22522[(1)]);
if((state_val_22523 === (7))){
var inst_22502 = (state_22522[(7)]);
var inst_22501 = (state_22522[(8)]);
var inst_22501__$1 = (state_22522[(2)]);
var inst_22502__$1 = cljs.core.nth.call(null,inst_22501__$1,(0),null);
var inst_22503 = cljs.core.nth.call(null,inst_22501__$1,(1),null);
var inst_22504 = (inst_22502__$1 == null);
var state_22522__$1 = (function (){var statearr_22524 = state_22522;
(statearr_22524[(7)] = inst_22502__$1);

(statearr_22524[(8)] = inst_22501__$1);

(statearr_22524[(9)] = inst_22503);

return statearr_22524;
})();
if(cljs.core.truth_(inst_22504)){
var statearr_22525_22545 = state_22522__$1;
(statearr_22525_22545[(1)] = (8));

} else {
var statearr_22526_22546 = state_22522__$1;
(statearr_22526_22546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (1))){
var inst_22491 = cljs.core.vec.call(null,chs);
var inst_22492 = inst_22491;
var state_22522__$1 = (function (){var statearr_22527 = state_22522;
(statearr_22527[(10)] = inst_22492);

return statearr_22527;
})();
var statearr_22528_22547 = state_22522__$1;
(statearr_22528_22547[(2)] = null);

(statearr_22528_22547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (4))){
var inst_22492 = (state_22522[(10)]);
var state_22522__$1 = state_22522;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22522__$1,(7),inst_22492);
} else {
if((state_val_22523 === (6))){
var inst_22518 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22529_22548 = state_22522__$1;
(statearr_22529_22548[(2)] = inst_22518);

(statearr_22529_22548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (3))){
var inst_22520 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22522__$1,inst_22520);
} else {
if((state_val_22523 === (2))){
var inst_22492 = (state_22522[(10)]);
var inst_22494 = cljs.core.count.call(null,inst_22492);
var inst_22495 = (inst_22494 > (0));
var state_22522__$1 = state_22522;
if(cljs.core.truth_(inst_22495)){
var statearr_22531_22549 = state_22522__$1;
(statearr_22531_22549[(1)] = (4));

} else {
var statearr_22532_22550 = state_22522__$1;
(statearr_22532_22550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (11))){
var inst_22492 = (state_22522[(10)]);
var inst_22511 = (state_22522[(2)]);
var tmp22530 = inst_22492;
var inst_22492__$1 = tmp22530;
var state_22522__$1 = (function (){var statearr_22533 = state_22522;
(statearr_22533[(11)] = inst_22511);

(statearr_22533[(10)] = inst_22492__$1);

return statearr_22533;
})();
var statearr_22534_22551 = state_22522__$1;
(statearr_22534_22551[(2)] = null);

(statearr_22534_22551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (9))){
var inst_22502 = (state_22522[(7)]);
var state_22522__$1 = state_22522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22522__$1,(11),out,inst_22502);
} else {
if((state_val_22523 === (5))){
var inst_22516 = cljs.core.async.close_BANG_.call(null,out);
var state_22522__$1 = state_22522;
var statearr_22535_22552 = state_22522__$1;
(statearr_22535_22552[(2)] = inst_22516);

(statearr_22535_22552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (10))){
var inst_22514 = (state_22522[(2)]);
var state_22522__$1 = state_22522;
var statearr_22536_22553 = state_22522__$1;
(statearr_22536_22553[(2)] = inst_22514);

(statearr_22536_22553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22523 === (8))){
var inst_22492 = (state_22522[(10)]);
var inst_22502 = (state_22522[(7)]);
var inst_22501 = (state_22522[(8)]);
var inst_22503 = (state_22522[(9)]);
var inst_22506 = (function (){var cs = inst_22492;
var vec__22497 = inst_22501;
var v = inst_22502;
var c = inst_22503;
return ((function (cs,vec__22497,v,c,inst_22492,inst_22502,inst_22501,inst_22503,state_val_22523,c__21145__auto___22544,out){
return (function (p1__22488_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22488_SHARP_);
});
;})(cs,vec__22497,v,c,inst_22492,inst_22502,inst_22501,inst_22503,state_val_22523,c__21145__auto___22544,out))
})();
var inst_22507 = cljs.core.filterv.call(null,inst_22506,inst_22492);
var inst_22492__$1 = inst_22507;
var state_22522__$1 = (function (){var statearr_22537 = state_22522;
(statearr_22537[(10)] = inst_22492__$1);

return statearr_22537;
})();
var statearr_22538_22554 = state_22522__$1;
(statearr_22538_22554[(2)] = null);

(statearr_22538_22554[(1)] = (2));


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
});})(c__21145__auto___22544,out))
;
return ((function (switch__21052__auto__,c__21145__auto___22544,out){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_22539 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22539[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_22539[(1)] = (1));

return statearr_22539;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_22522){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22540){if((e22540 instanceof Object)){
var ex__21056__auto__ = e22540;
var statearr_22541_22555 = state_22522;
(statearr_22541_22555[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22556 = state_22522;
state_22522 = G__22556;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_22522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_22522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22544,out))
})();
var state__21147__auto__ = (function (){var statearr_22542 = f__21146__auto__.call(null);
(statearr_22542[(6)] = c__21145__auto___22544);

return statearr_22542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22544,out))
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
var G__22558 = arguments.length;
switch (G__22558) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21145__auto___22603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22603,out){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22603,out){
return (function (state_22582){
var state_val_22583 = (state_22582[(1)]);
if((state_val_22583 === (7))){
var inst_22564 = (state_22582[(7)]);
var inst_22564__$1 = (state_22582[(2)]);
var inst_22565 = (inst_22564__$1 == null);
var inst_22566 = cljs.core.not.call(null,inst_22565);
var state_22582__$1 = (function (){var statearr_22584 = state_22582;
(statearr_22584[(7)] = inst_22564__$1);

return statearr_22584;
})();
if(inst_22566){
var statearr_22585_22604 = state_22582__$1;
(statearr_22585_22604[(1)] = (8));

} else {
var statearr_22586_22605 = state_22582__$1;
(statearr_22586_22605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (1))){
var inst_22559 = (0);
var state_22582__$1 = (function (){var statearr_22587 = state_22582;
(statearr_22587[(8)] = inst_22559);

return statearr_22587;
})();
var statearr_22588_22606 = state_22582__$1;
(statearr_22588_22606[(2)] = null);

(statearr_22588_22606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (4))){
var state_22582__$1 = state_22582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22582__$1,(7),ch);
} else {
if((state_val_22583 === (6))){
var inst_22577 = (state_22582[(2)]);
var state_22582__$1 = state_22582;
var statearr_22589_22607 = state_22582__$1;
(statearr_22589_22607[(2)] = inst_22577);

(statearr_22589_22607[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (3))){
var inst_22579 = (state_22582[(2)]);
var inst_22580 = cljs.core.async.close_BANG_.call(null,out);
var state_22582__$1 = (function (){var statearr_22590 = state_22582;
(statearr_22590[(9)] = inst_22579);

return statearr_22590;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22582__$1,inst_22580);
} else {
if((state_val_22583 === (2))){
var inst_22559 = (state_22582[(8)]);
var inst_22561 = (inst_22559 < n);
var state_22582__$1 = state_22582;
if(cljs.core.truth_(inst_22561)){
var statearr_22591_22608 = state_22582__$1;
(statearr_22591_22608[(1)] = (4));

} else {
var statearr_22592_22609 = state_22582__$1;
(statearr_22592_22609[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (11))){
var inst_22559 = (state_22582[(8)]);
var inst_22569 = (state_22582[(2)]);
var inst_22570 = (inst_22559 + (1));
var inst_22559__$1 = inst_22570;
var state_22582__$1 = (function (){var statearr_22593 = state_22582;
(statearr_22593[(8)] = inst_22559__$1);

(statearr_22593[(10)] = inst_22569);

return statearr_22593;
})();
var statearr_22594_22610 = state_22582__$1;
(statearr_22594_22610[(2)] = null);

(statearr_22594_22610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (9))){
var state_22582__$1 = state_22582;
var statearr_22595_22611 = state_22582__$1;
(statearr_22595_22611[(2)] = null);

(statearr_22595_22611[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (5))){
var state_22582__$1 = state_22582;
var statearr_22596_22612 = state_22582__$1;
(statearr_22596_22612[(2)] = null);

(statearr_22596_22612[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (10))){
var inst_22574 = (state_22582[(2)]);
var state_22582__$1 = state_22582;
var statearr_22597_22613 = state_22582__$1;
(statearr_22597_22613[(2)] = inst_22574);

(statearr_22597_22613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22583 === (8))){
var inst_22564 = (state_22582[(7)]);
var state_22582__$1 = state_22582;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22582__$1,(11),out,inst_22564);
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
});})(c__21145__auto___22603,out))
;
return ((function (switch__21052__auto__,c__21145__auto___22603,out){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_22598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22598[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_22598[(1)] = (1));

return statearr_22598;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_22582){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22599){if((e22599 instanceof Object)){
var ex__21056__auto__ = e22599;
var statearr_22600_22614 = state_22582;
(statearr_22600_22614[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22615 = state_22582;
state_22582 = G__22615;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_22582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_22582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22603,out))
})();
var state__21147__auto__ = (function (){var statearr_22601 = f__21146__auto__.call(null);
(statearr_22601[(6)] = c__21145__auto___22603);

return statearr_22601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22603,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22617 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22617 = (function (f,ch,meta22618){
this.f = f;
this.ch = ch;
this.meta22618 = meta22618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22619,meta22618__$1){
var self__ = this;
var _22619__$1 = this;
return (new cljs.core.async.t_cljs$core$async22617(self__.f,self__.ch,meta22618__$1));
});

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22619){
var self__ = this;
var _22619__$1 = this;
return self__.meta22618;
});

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22620 = (function (f,ch,meta22618,_,fn1,meta22621){
this.f = f;
this.ch = ch;
this.meta22618 = meta22618;
this._ = _;
this.fn1 = fn1;
this.meta22621 = meta22621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22622,meta22621__$1){
var self__ = this;
var _22622__$1 = this;
return (new cljs.core.async.t_cljs$core$async22620(self__.f,self__.ch,self__.meta22618,self__._,self__.fn1,meta22621__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22622){
var self__ = this;
var _22622__$1 = this;
return self__.meta22621;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22616_SHARP_){
return f1.call(null,(((p1__22616_SHARP_ == null))?null:self__.f.call(null,p1__22616_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22620.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22618","meta22618",1428184389,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22617","cljs.core.async/t_cljs$core$async22617",-1045724311,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22621","meta22621",1770019718,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22620";

cljs.core.async.t_cljs$core$async22620.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22620");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22620.
 */
cljs.core.async.__GT_t_cljs$core$async22620 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22620(f__$1,ch__$1,meta22618__$1,___$2,fn1__$1,meta22621){
return (new cljs.core.async.t_cljs$core$async22620(f__$1,ch__$1,meta22618__$1,___$2,fn1__$1,meta22621));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22620(self__.f,self__.ch,self__.meta22618,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22617.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22618","meta22618",1428184389,null)], null);
});

cljs.core.async.t_cljs$core$async22617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22617";

cljs.core.async.t_cljs$core$async22617.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22617");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22617.
 */
cljs.core.async.__GT_t_cljs$core$async22617 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22617(f__$1,ch__$1,meta22618){
return (new cljs.core.async.t_cljs$core$async22617(f__$1,ch__$1,meta22618));
});

}

return (new cljs.core.async.t_cljs$core$async22617(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22623 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22623 = (function (f,ch,meta22624){
this.f = f;
this.ch = ch;
this.meta22624 = meta22624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22625,meta22624__$1){
var self__ = this;
var _22625__$1 = this;
return (new cljs.core.async.t_cljs$core$async22623(self__.f,self__.ch,meta22624__$1));
});

cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22625){
var self__ = this;
var _22625__$1 = this;
return self__.meta22624;
});

cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22624","meta22624",-1047972509,null)], null);
});

cljs.core.async.t_cljs$core$async22623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22623";

cljs.core.async.t_cljs$core$async22623.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22623");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22623.
 */
cljs.core.async.__GT_t_cljs$core$async22623 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22623(f__$1,ch__$1,meta22624){
return (new cljs.core.async.t_cljs$core$async22623(f__$1,ch__$1,meta22624));
});

}

return (new cljs.core.async.t_cljs$core$async22623(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22626 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22626 = (function (p,ch,meta22627){
this.p = p;
this.ch = ch;
this.meta22627 = meta22627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22628,meta22627__$1){
var self__ = this;
var _22628__$1 = this;
return (new cljs.core.async.t_cljs$core$async22626(self__.p,self__.ch,meta22627__$1));
});

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22628){
var self__ = this;
var _22628__$1 = this;
return self__.meta22627;
});

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22627","meta22627",-296063249,null)], null);
});

cljs.core.async.t_cljs$core$async22626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22626";

cljs.core.async.t_cljs$core$async22626.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22626");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22626.
 */
cljs.core.async.__GT_t_cljs$core$async22626 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22626(p__$1,ch__$1,meta22627){
return (new cljs.core.async.t_cljs$core$async22626(p__$1,ch__$1,meta22627));
});

}

return (new cljs.core.async.t_cljs$core$async22626(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22630 = arguments.length;
switch (G__22630) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21145__auto___22670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22670,out){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22670,out){
return (function (state_22651){
var state_val_22652 = (state_22651[(1)]);
if((state_val_22652 === (7))){
var inst_22647 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
var statearr_22653_22671 = state_22651__$1;
(statearr_22653_22671[(2)] = inst_22647);

(statearr_22653_22671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (1))){
var state_22651__$1 = state_22651;
var statearr_22654_22672 = state_22651__$1;
(statearr_22654_22672[(2)] = null);

(statearr_22654_22672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (4))){
var inst_22633 = (state_22651[(7)]);
var inst_22633__$1 = (state_22651[(2)]);
var inst_22634 = (inst_22633__$1 == null);
var state_22651__$1 = (function (){var statearr_22655 = state_22651;
(statearr_22655[(7)] = inst_22633__$1);

return statearr_22655;
})();
if(cljs.core.truth_(inst_22634)){
var statearr_22656_22673 = state_22651__$1;
(statearr_22656_22673[(1)] = (5));

} else {
var statearr_22657_22674 = state_22651__$1;
(statearr_22657_22674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (6))){
var inst_22633 = (state_22651[(7)]);
var inst_22638 = p.call(null,inst_22633);
var state_22651__$1 = state_22651;
if(cljs.core.truth_(inst_22638)){
var statearr_22658_22675 = state_22651__$1;
(statearr_22658_22675[(1)] = (8));

} else {
var statearr_22659_22676 = state_22651__$1;
(statearr_22659_22676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (3))){
var inst_22649 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22651__$1,inst_22649);
} else {
if((state_val_22652 === (2))){
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22651__$1,(4),ch);
} else {
if((state_val_22652 === (11))){
var inst_22641 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
var statearr_22660_22677 = state_22651__$1;
(statearr_22660_22677[(2)] = inst_22641);

(statearr_22660_22677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (9))){
var state_22651__$1 = state_22651;
var statearr_22661_22678 = state_22651__$1;
(statearr_22661_22678[(2)] = null);

(statearr_22661_22678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (5))){
var inst_22636 = cljs.core.async.close_BANG_.call(null,out);
var state_22651__$1 = state_22651;
var statearr_22662_22679 = state_22651__$1;
(statearr_22662_22679[(2)] = inst_22636);

(statearr_22662_22679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (10))){
var inst_22644 = (state_22651[(2)]);
var state_22651__$1 = (function (){var statearr_22663 = state_22651;
(statearr_22663[(8)] = inst_22644);

return statearr_22663;
})();
var statearr_22664_22680 = state_22651__$1;
(statearr_22664_22680[(2)] = null);

(statearr_22664_22680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (8))){
var inst_22633 = (state_22651[(7)]);
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22651__$1,(11),out,inst_22633);
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
});})(c__21145__auto___22670,out))
;
return ((function (switch__21052__auto__,c__21145__auto___22670,out){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_22665 = [null,null,null,null,null,null,null,null,null];
(statearr_22665[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_22665[(1)] = (1));

return statearr_22665;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_22651){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22666){if((e22666 instanceof Object)){
var ex__21056__auto__ = e22666;
var statearr_22667_22681 = state_22651;
(statearr_22667_22681[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22682 = state_22651;
state_22651 = G__22682;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_22651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_22651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22670,out))
})();
var state__21147__auto__ = (function (){var statearr_22668 = f__21146__auto__.call(null);
(statearr_22668[(6)] = c__21145__auto___22670);

return statearr_22668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22670,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22684 = arguments.length;
switch (G__22684) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__){
return (function (state_22747){
var state_val_22748 = (state_22747[(1)]);
if((state_val_22748 === (7))){
var inst_22743 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22749_22787 = state_22747__$1;
(statearr_22749_22787[(2)] = inst_22743);

(statearr_22749_22787[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (20))){
var inst_22713 = (state_22747[(7)]);
var inst_22724 = (state_22747[(2)]);
var inst_22725 = cljs.core.next.call(null,inst_22713);
var inst_22699 = inst_22725;
var inst_22700 = null;
var inst_22701 = (0);
var inst_22702 = (0);
var state_22747__$1 = (function (){var statearr_22750 = state_22747;
(statearr_22750[(8)] = inst_22702);

(statearr_22750[(9)] = inst_22699);

(statearr_22750[(10)] = inst_22724);

(statearr_22750[(11)] = inst_22700);

(statearr_22750[(12)] = inst_22701);

return statearr_22750;
})();
var statearr_22751_22788 = state_22747__$1;
(statearr_22751_22788[(2)] = null);

(statearr_22751_22788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (1))){
var state_22747__$1 = state_22747;
var statearr_22752_22789 = state_22747__$1;
(statearr_22752_22789[(2)] = null);

(statearr_22752_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (4))){
var inst_22688 = (state_22747[(13)]);
var inst_22688__$1 = (state_22747[(2)]);
var inst_22689 = (inst_22688__$1 == null);
var state_22747__$1 = (function (){var statearr_22753 = state_22747;
(statearr_22753[(13)] = inst_22688__$1);

return statearr_22753;
})();
if(cljs.core.truth_(inst_22689)){
var statearr_22754_22790 = state_22747__$1;
(statearr_22754_22790[(1)] = (5));

} else {
var statearr_22755_22791 = state_22747__$1;
(statearr_22755_22791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (15))){
var state_22747__$1 = state_22747;
var statearr_22759_22792 = state_22747__$1;
(statearr_22759_22792[(2)] = null);

(statearr_22759_22792[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (21))){
var state_22747__$1 = state_22747;
var statearr_22760_22793 = state_22747__$1;
(statearr_22760_22793[(2)] = null);

(statearr_22760_22793[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (13))){
var inst_22702 = (state_22747[(8)]);
var inst_22699 = (state_22747[(9)]);
var inst_22700 = (state_22747[(11)]);
var inst_22701 = (state_22747[(12)]);
var inst_22709 = (state_22747[(2)]);
var inst_22710 = (inst_22702 + (1));
var tmp22756 = inst_22699;
var tmp22757 = inst_22700;
var tmp22758 = inst_22701;
var inst_22699__$1 = tmp22756;
var inst_22700__$1 = tmp22757;
var inst_22701__$1 = tmp22758;
var inst_22702__$1 = inst_22710;
var state_22747__$1 = (function (){var statearr_22761 = state_22747;
(statearr_22761[(14)] = inst_22709);

(statearr_22761[(8)] = inst_22702__$1);

(statearr_22761[(9)] = inst_22699__$1);

(statearr_22761[(11)] = inst_22700__$1);

(statearr_22761[(12)] = inst_22701__$1);

return statearr_22761;
})();
var statearr_22762_22794 = state_22747__$1;
(statearr_22762_22794[(2)] = null);

(statearr_22762_22794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (22))){
var state_22747__$1 = state_22747;
var statearr_22763_22795 = state_22747__$1;
(statearr_22763_22795[(2)] = null);

(statearr_22763_22795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (6))){
var inst_22688 = (state_22747[(13)]);
var inst_22697 = f.call(null,inst_22688);
var inst_22698 = cljs.core.seq.call(null,inst_22697);
var inst_22699 = inst_22698;
var inst_22700 = null;
var inst_22701 = (0);
var inst_22702 = (0);
var state_22747__$1 = (function (){var statearr_22764 = state_22747;
(statearr_22764[(8)] = inst_22702);

(statearr_22764[(9)] = inst_22699);

(statearr_22764[(11)] = inst_22700);

(statearr_22764[(12)] = inst_22701);

return statearr_22764;
})();
var statearr_22765_22796 = state_22747__$1;
(statearr_22765_22796[(2)] = null);

(statearr_22765_22796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (17))){
var inst_22713 = (state_22747[(7)]);
var inst_22717 = cljs.core.chunk_first.call(null,inst_22713);
var inst_22718 = cljs.core.chunk_rest.call(null,inst_22713);
var inst_22719 = cljs.core.count.call(null,inst_22717);
var inst_22699 = inst_22718;
var inst_22700 = inst_22717;
var inst_22701 = inst_22719;
var inst_22702 = (0);
var state_22747__$1 = (function (){var statearr_22766 = state_22747;
(statearr_22766[(8)] = inst_22702);

(statearr_22766[(9)] = inst_22699);

(statearr_22766[(11)] = inst_22700);

(statearr_22766[(12)] = inst_22701);

return statearr_22766;
})();
var statearr_22767_22797 = state_22747__$1;
(statearr_22767_22797[(2)] = null);

(statearr_22767_22797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (3))){
var inst_22745 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22747__$1,inst_22745);
} else {
if((state_val_22748 === (12))){
var inst_22733 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22768_22798 = state_22747__$1;
(statearr_22768_22798[(2)] = inst_22733);

(statearr_22768_22798[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (2))){
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22747__$1,(4),in$);
} else {
if((state_val_22748 === (23))){
var inst_22741 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22769_22799 = state_22747__$1;
(statearr_22769_22799[(2)] = inst_22741);

(statearr_22769_22799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (19))){
var inst_22728 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22770_22800 = state_22747__$1;
(statearr_22770_22800[(2)] = inst_22728);

(statearr_22770_22800[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (11))){
var inst_22699 = (state_22747[(9)]);
var inst_22713 = (state_22747[(7)]);
var inst_22713__$1 = cljs.core.seq.call(null,inst_22699);
var state_22747__$1 = (function (){var statearr_22771 = state_22747;
(statearr_22771[(7)] = inst_22713__$1);

return statearr_22771;
})();
if(inst_22713__$1){
var statearr_22772_22801 = state_22747__$1;
(statearr_22772_22801[(1)] = (14));

} else {
var statearr_22773_22802 = state_22747__$1;
(statearr_22773_22802[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (9))){
var inst_22735 = (state_22747[(2)]);
var inst_22736 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22747__$1 = (function (){var statearr_22774 = state_22747;
(statearr_22774[(15)] = inst_22735);

return statearr_22774;
})();
if(cljs.core.truth_(inst_22736)){
var statearr_22775_22803 = state_22747__$1;
(statearr_22775_22803[(1)] = (21));

} else {
var statearr_22776_22804 = state_22747__$1;
(statearr_22776_22804[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (5))){
var inst_22691 = cljs.core.async.close_BANG_.call(null,out);
var state_22747__$1 = state_22747;
var statearr_22777_22805 = state_22747__$1;
(statearr_22777_22805[(2)] = inst_22691);

(statearr_22777_22805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (14))){
var inst_22713 = (state_22747[(7)]);
var inst_22715 = cljs.core.chunked_seq_QMARK_.call(null,inst_22713);
var state_22747__$1 = state_22747;
if(inst_22715){
var statearr_22778_22806 = state_22747__$1;
(statearr_22778_22806[(1)] = (17));

} else {
var statearr_22779_22807 = state_22747__$1;
(statearr_22779_22807[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (16))){
var inst_22731 = (state_22747[(2)]);
var state_22747__$1 = state_22747;
var statearr_22780_22808 = state_22747__$1;
(statearr_22780_22808[(2)] = inst_22731);

(statearr_22780_22808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22748 === (10))){
var inst_22702 = (state_22747[(8)]);
var inst_22700 = (state_22747[(11)]);
var inst_22707 = cljs.core._nth.call(null,inst_22700,inst_22702);
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22747__$1,(13),out,inst_22707);
} else {
if((state_val_22748 === (18))){
var inst_22713 = (state_22747[(7)]);
var inst_22722 = cljs.core.first.call(null,inst_22713);
var state_22747__$1 = state_22747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22747__$1,(20),out,inst_22722);
} else {
if((state_val_22748 === (8))){
var inst_22702 = (state_22747[(8)]);
var inst_22701 = (state_22747[(12)]);
var inst_22704 = (inst_22702 < inst_22701);
var inst_22705 = inst_22704;
var state_22747__$1 = state_22747;
if(cljs.core.truth_(inst_22705)){
var statearr_22781_22809 = state_22747__$1;
(statearr_22781_22809[(1)] = (10));

} else {
var statearr_22782_22810 = state_22747__$1;
(statearr_22782_22810[(1)] = (11));

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
});})(c__21145__auto__))
;
return ((function (switch__21052__auto__,c__21145__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21053__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21053__auto____0 = (function (){
var statearr_22783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22783[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21053__auto__);

(statearr_22783[(1)] = (1));

return statearr_22783;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21053__auto____1 = (function (state_22747){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22784){if((e22784 instanceof Object)){
var ex__21056__auto__ = e22784;
var statearr_22785_22811 = state_22747;
(statearr_22785_22811[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22812 = state_22747;
state_22747 = G__22812;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21053__auto__ = function(state_22747){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21053__auto____1.call(this,state_22747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21053__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21053__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_22786 = f__21146__auto__.call(null);
(statearr_22786[(6)] = c__21145__auto__);

return statearr_22786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22814 = arguments.length;
switch (G__22814) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__22817 = arguments.length;
switch (G__22817) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__22820 = arguments.length;
switch (G__22820) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21145__auto___22867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22867,out){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22867,out){
return (function (state_22844){
var state_val_22845 = (state_22844[(1)]);
if((state_val_22845 === (7))){
var inst_22839 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22846_22868 = state_22844__$1;
(statearr_22846_22868[(2)] = inst_22839);

(statearr_22846_22868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (1))){
var inst_22821 = null;
var state_22844__$1 = (function (){var statearr_22847 = state_22844;
(statearr_22847[(7)] = inst_22821);

return statearr_22847;
})();
var statearr_22848_22869 = state_22844__$1;
(statearr_22848_22869[(2)] = null);

(statearr_22848_22869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (4))){
var inst_22824 = (state_22844[(8)]);
var inst_22824__$1 = (state_22844[(2)]);
var inst_22825 = (inst_22824__$1 == null);
var inst_22826 = cljs.core.not.call(null,inst_22825);
var state_22844__$1 = (function (){var statearr_22849 = state_22844;
(statearr_22849[(8)] = inst_22824__$1);

return statearr_22849;
})();
if(inst_22826){
var statearr_22850_22870 = state_22844__$1;
(statearr_22850_22870[(1)] = (5));

} else {
var statearr_22851_22871 = state_22844__$1;
(statearr_22851_22871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (6))){
var state_22844__$1 = state_22844;
var statearr_22852_22872 = state_22844__$1;
(statearr_22852_22872[(2)] = null);

(statearr_22852_22872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (3))){
var inst_22841 = (state_22844[(2)]);
var inst_22842 = cljs.core.async.close_BANG_.call(null,out);
var state_22844__$1 = (function (){var statearr_22853 = state_22844;
(statearr_22853[(9)] = inst_22841);

return statearr_22853;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22844__$1,inst_22842);
} else {
if((state_val_22845 === (2))){
var state_22844__$1 = state_22844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22844__$1,(4),ch);
} else {
if((state_val_22845 === (11))){
var inst_22824 = (state_22844[(8)]);
var inst_22833 = (state_22844[(2)]);
var inst_22821 = inst_22824;
var state_22844__$1 = (function (){var statearr_22854 = state_22844;
(statearr_22854[(10)] = inst_22833);

(statearr_22854[(7)] = inst_22821);

return statearr_22854;
})();
var statearr_22855_22873 = state_22844__$1;
(statearr_22855_22873[(2)] = null);

(statearr_22855_22873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (9))){
var inst_22824 = (state_22844[(8)]);
var state_22844__$1 = state_22844;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22844__$1,(11),out,inst_22824);
} else {
if((state_val_22845 === (5))){
var inst_22824 = (state_22844[(8)]);
var inst_22821 = (state_22844[(7)]);
var inst_22828 = cljs.core._EQ_.call(null,inst_22824,inst_22821);
var state_22844__$1 = state_22844;
if(inst_22828){
var statearr_22857_22874 = state_22844__$1;
(statearr_22857_22874[(1)] = (8));

} else {
var statearr_22858_22875 = state_22844__$1;
(statearr_22858_22875[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (10))){
var inst_22836 = (state_22844[(2)]);
var state_22844__$1 = state_22844;
var statearr_22859_22876 = state_22844__$1;
(statearr_22859_22876[(2)] = inst_22836);

(statearr_22859_22876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22845 === (8))){
var inst_22821 = (state_22844[(7)]);
var tmp22856 = inst_22821;
var inst_22821__$1 = tmp22856;
var state_22844__$1 = (function (){var statearr_22860 = state_22844;
(statearr_22860[(7)] = inst_22821__$1);

return statearr_22860;
})();
var statearr_22861_22877 = state_22844__$1;
(statearr_22861_22877[(2)] = null);

(statearr_22861_22877[(1)] = (2));


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
});})(c__21145__auto___22867,out))
;
return ((function (switch__21052__auto__,c__21145__auto___22867,out){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_22862 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22862[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_22862[(1)] = (1));

return statearr_22862;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_22844){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22863){if((e22863 instanceof Object)){
var ex__21056__auto__ = e22863;
var statearr_22864_22878 = state_22844;
(statearr_22864_22878[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22879 = state_22844;
state_22844 = G__22879;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_22844){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_22844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22867,out))
})();
var state__21147__auto__ = (function (){var statearr_22865 = f__21146__auto__.call(null);
(statearr_22865[(6)] = c__21145__auto___22867);

return statearr_22865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22867,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22881 = arguments.length;
switch (G__22881) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21145__auto___22947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___22947,out){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___22947,out){
return (function (state_22919){
var state_val_22920 = (state_22919[(1)]);
if((state_val_22920 === (7))){
var inst_22915 = (state_22919[(2)]);
var state_22919__$1 = state_22919;
var statearr_22921_22948 = state_22919__$1;
(statearr_22921_22948[(2)] = inst_22915);

(statearr_22921_22948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (1))){
var inst_22882 = (new Array(n));
var inst_22883 = inst_22882;
var inst_22884 = (0);
var state_22919__$1 = (function (){var statearr_22922 = state_22919;
(statearr_22922[(7)] = inst_22884);

(statearr_22922[(8)] = inst_22883);

return statearr_22922;
})();
var statearr_22923_22949 = state_22919__$1;
(statearr_22923_22949[(2)] = null);

(statearr_22923_22949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (4))){
var inst_22887 = (state_22919[(9)]);
var inst_22887__$1 = (state_22919[(2)]);
var inst_22888 = (inst_22887__$1 == null);
var inst_22889 = cljs.core.not.call(null,inst_22888);
var state_22919__$1 = (function (){var statearr_22924 = state_22919;
(statearr_22924[(9)] = inst_22887__$1);

return statearr_22924;
})();
if(inst_22889){
var statearr_22925_22950 = state_22919__$1;
(statearr_22925_22950[(1)] = (5));

} else {
var statearr_22926_22951 = state_22919__$1;
(statearr_22926_22951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (15))){
var inst_22909 = (state_22919[(2)]);
var state_22919__$1 = state_22919;
var statearr_22927_22952 = state_22919__$1;
(statearr_22927_22952[(2)] = inst_22909);

(statearr_22927_22952[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (13))){
var state_22919__$1 = state_22919;
var statearr_22928_22953 = state_22919__$1;
(statearr_22928_22953[(2)] = null);

(statearr_22928_22953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (6))){
var inst_22884 = (state_22919[(7)]);
var inst_22905 = (inst_22884 > (0));
var state_22919__$1 = state_22919;
if(cljs.core.truth_(inst_22905)){
var statearr_22929_22954 = state_22919__$1;
(statearr_22929_22954[(1)] = (12));

} else {
var statearr_22930_22955 = state_22919__$1;
(statearr_22930_22955[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (3))){
var inst_22917 = (state_22919[(2)]);
var state_22919__$1 = state_22919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22919__$1,inst_22917);
} else {
if((state_val_22920 === (12))){
var inst_22883 = (state_22919[(8)]);
var inst_22907 = cljs.core.vec.call(null,inst_22883);
var state_22919__$1 = state_22919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22919__$1,(15),out,inst_22907);
} else {
if((state_val_22920 === (2))){
var state_22919__$1 = state_22919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22919__$1,(4),ch);
} else {
if((state_val_22920 === (11))){
var inst_22899 = (state_22919[(2)]);
var inst_22900 = (new Array(n));
var inst_22883 = inst_22900;
var inst_22884 = (0);
var state_22919__$1 = (function (){var statearr_22931 = state_22919;
(statearr_22931[(10)] = inst_22899);

(statearr_22931[(7)] = inst_22884);

(statearr_22931[(8)] = inst_22883);

return statearr_22931;
})();
var statearr_22932_22956 = state_22919__$1;
(statearr_22932_22956[(2)] = null);

(statearr_22932_22956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (9))){
var inst_22883 = (state_22919[(8)]);
var inst_22897 = cljs.core.vec.call(null,inst_22883);
var state_22919__$1 = state_22919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22919__$1,(11),out,inst_22897);
} else {
if((state_val_22920 === (5))){
var inst_22892 = (state_22919[(11)]);
var inst_22884 = (state_22919[(7)]);
var inst_22883 = (state_22919[(8)]);
var inst_22887 = (state_22919[(9)]);
var inst_22891 = (inst_22883[inst_22884] = inst_22887);
var inst_22892__$1 = (inst_22884 + (1));
var inst_22893 = (inst_22892__$1 < n);
var state_22919__$1 = (function (){var statearr_22933 = state_22919;
(statearr_22933[(11)] = inst_22892__$1);

(statearr_22933[(12)] = inst_22891);

return statearr_22933;
})();
if(cljs.core.truth_(inst_22893)){
var statearr_22934_22957 = state_22919__$1;
(statearr_22934_22957[(1)] = (8));

} else {
var statearr_22935_22958 = state_22919__$1;
(statearr_22935_22958[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (14))){
var inst_22912 = (state_22919[(2)]);
var inst_22913 = cljs.core.async.close_BANG_.call(null,out);
var state_22919__$1 = (function (){var statearr_22937 = state_22919;
(statearr_22937[(13)] = inst_22912);

return statearr_22937;
})();
var statearr_22938_22959 = state_22919__$1;
(statearr_22938_22959[(2)] = inst_22913);

(statearr_22938_22959[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (10))){
var inst_22903 = (state_22919[(2)]);
var state_22919__$1 = state_22919;
var statearr_22939_22960 = state_22919__$1;
(statearr_22939_22960[(2)] = inst_22903);

(statearr_22939_22960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22920 === (8))){
var inst_22892 = (state_22919[(11)]);
var inst_22883 = (state_22919[(8)]);
var tmp22936 = inst_22883;
var inst_22883__$1 = tmp22936;
var inst_22884 = inst_22892;
var state_22919__$1 = (function (){var statearr_22940 = state_22919;
(statearr_22940[(7)] = inst_22884);

(statearr_22940[(8)] = inst_22883__$1);

return statearr_22940;
})();
var statearr_22941_22961 = state_22919__$1;
(statearr_22941_22961[(2)] = null);

(statearr_22941_22961[(1)] = (2));


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
});})(c__21145__auto___22947,out))
;
return ((function (switch__21052__auto__,c__21145__auto___22947,out){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_22942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22942[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_22942[(1)] = (1));

return statearr_22942;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_22919){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_22919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e22943){if((e22943 instanceof Object)){
var ex__21056__auto__ = e22943;
var statearr_22944_22962 = state_22919;
(statearr_22944_22962[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22963 = state_22919;
state_22919 = G__22963;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_22919){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_22919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___22947,out))
})();
var state__21147__auto__ = (function (){var statearr_22945 = f__21146__auto__.call(null);
(statearr_22945[(6)] = c__21145__auto___22947);

return statearr_22945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___22947,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__22965 = arguments.length;
switch (G__22965) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21145__auto___23035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___23035,out){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___23035,out){
return (function (state_23007){
var state_val_23008 = (state_23007[(1)]);
if((state_val_23008 === (7))){
var inst_23003 = (state_23007[(2)]);
var state_23007__$1 = state_23007;
var statearr_23009_23036 = state_23007__$1;
(statearr_23009_23036[(2)] = inst_23003);

(statearr_23009_23036[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (1))){
var inst_22966 = [];
var inst_22967 = inst_22966;
var inst_22968 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23007__$1 = (function (){var statearr_23010 = state_23007;
(statearr_23010[(7)] = inst_22968);

(statearr_23010[(8)] = inst_22967);

return statearr_23010;
})();
var statearr_23011_23037 = state_23007__$1;
(statearr_23011_23037[(2)] = null);

(statearr_23011_23037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (4))){
var inst_22971 = (state_23007[(9)]);
var inst_22971__$1 = (state_23007[(2)]);
var inst_22972 = (inst_22971__$1 == null);
var inst_22973 = cljs.core.not.call(null,inst_22972);
var state_23007__$1 = (function (){var statearr_23012 = state_23007;
(statearr_23012[(9)] = inst_22971__$1);

return statearr_23012;
})();
if(inst_22973){
var statearr_23013_23038 = state_23007__$1;
(statearr_23013_23038[(1)] = (5));

} else {
var statearr_23014_23039 = state_23007__$1;
(statearr_23014_23039[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (15))){
var inst_22997 = (state_23007[(2)]);
var state_23007__$1 = state_23007;
var statearr_23015_23040 = state_23007__$1;
(statearr_23015_23040[(2)] = inst_22997);

(statearr_23015_23040[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (13))){
var state_23007__$1 = state_23007;
var statearr_23016_23041 = state_23007__$1;
(statearr_23016_23041[(2)] = null);

(statearr_23016_23041[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (6))){
var inst_22967 = (state_23007[(8)]);
var inst_22992 = inst_22967.length;
var inst_22993 = (inst_22992 > (0));
var state_23007__$1 = state_23007;
if(cljs.core.truth_(inst_22993)){
var statearr_23017_23042 = state_23007__$1;
(statearr_23017_23042[(1)] = (12));

} else {
var statearr_23018_23043 = state_23007__$1;
(statearr_23018_23043[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (3))){
var inst_23005 = (state_23007[(2)]);
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23007__$1,inst_23005);
} else {
if((state_val_23008 === (12))){
var inst_22967 = (state_23007[(8)]);
var inst_22995 = cljs.core.vec.call(null,inst_22967);
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23007__$1,(15),out,inst_22995);
} else {
if((state_val_23008 === (2))){
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23007__$1,(4),ch);
} else {
if((state_val_23008 === (11))){
var inst_22971 = (state_23007[(9)]);
var inst_22975 = (state_23007[(10)]);
var inst_22985 = (state_23007[(2)]);
var inst_22986 = [];
var inst_22987 = inst_22986.push(inst_22971);
var inst_22967 = inst_22986;
var inst_22968 = inst_22975;
var state_23007__$1 = (function (){var statearr_23019 = state_23007;
(statearr_23019[(11)] = inst_22987);

(statearr_23019[(7)] = inst_22968);

(statearr_23019[(8)] = inst_22967);

(statearr_23019[(12)] = inst_22985);

return statearr_23019;
})();
var statearr_23020_23044 = state_23007__$1;
(statearr_23020_23044[(2)] = null);

(statearr_23020_23044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (9))){
var inst_22967 = (state_23007[(8)]);
var inst_22983 = cljs.core.vec.call(null,inst_22967);
var state_23007__$1 = state_23007;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23007__$1,(11),out,inst_22983);
} else {
if((state_val_23008 === (5))){
var inst_22971 = (state_23007[(9)]);
var inst_22968 = (state_23007[(7)]);
var inst_22975 = (state_23007[(10)]);
var inst_22975__$1 = f.call(null,inst_22971);
var inst_22976 = cljs.core._EQ_.call(null,inst_22975__$1,inst_22968);
var inst_22977 = cljs.core.keyword_identical_QMARK_.call(null,inst_22968,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22978 = ((inst_22976) || (inst_22977));
var state_23007__$1 = (function (){var statearr_23021 = state_23007;
(statearr_23021[(10)] = inst_22975__$1);

return statearr_23021;
})();
if(cljs.core.truth_(inst_22978)){
var statearr_23022_23045 = state_23007__$1;
(statearr_23022_23045[(1)] = (8));

} else {
var statearr_23023_23046 = state_23007__$1;
(statearr_23023_23046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (14))){
var inst_23000 = (state_23007[(2)]);
var inst_23001 = cljs.core.async.close_BANG_.call(null,out);
var state_23007__$1 = (function (){var statearr_23025 = state_23007;
(statearr_23025[(13)] = inst_23000);

return statearr_23025;
})();
var statearr_23026_23047 = state_23007__$1;
(statearr_23026_23047[(2)] = inst_23001);

(statearr_23026_23047[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (10))){
var inst_22990 = (state_23007[(2)]);
var state_23007__$1 = state_23007;
var statearr_23027_23048 = state_23007__$1;
(statearr_23027_23048[(2)] = inst_22990);

(statearr_23027_23048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23008 === (8))){
var inst_22971 = (state_23007[(9)]);
var inst_22975 = (state_23007[(10)]);
var inst_22967 = (state_23007[(8)]);
var inst_22980 = inst_22967.push(inst_22971);
var tmp23024 = inst_22967;
var inst_22967__$1 = tmp23024;
var inst_22968 = inst_22975;
var state_23007__$1 = (function (){var statearr_23028 = state_23007;
(statearr_23028[(14)] = inst_22980);

(statearr_23028[(7)] = inst_22968);

(statearr_23028[(8)] = inst_22967__$1);

return statearr_23028;
})();
var statearr_23029_23049 = state_23007__$1;
(statearr_23029_23049[(2)] = null);

(statearr_23029_23049[(1)] = (2));


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
});})(c__21145__auto___23035,out))
;
return ((function (switch__21052__auto__,c__21145__auto___23035,out){
return (function() {
var cljs$core$async$state_machine__21053__auto__ = null;
var cljs$core$async$state_machine__21053__auto____0 = (function (){
var statearr_23030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23030[(0)] = cljs$core$async$state_machine__21053__auto__);

(statearr_23030[(1)] = (1));

return statearr_23030;
});
var cljs$core$async$state_machine__21053__auto____1 = (function (state_23007){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_23007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e23031){if((e23031 instanceof Object)){
var ex__21056__auto__ = e23031;
var statearr_23032_23050 = state_23007;
(statearr_23032_23050[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23051 = state_23007;
state_23007 = G__23051;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs$core$async$state_machine__21053__auto__ = function(state_23007){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21053__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21053__auto____1.call(this,state_23007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21053__auto____0;
cljs$core$async$state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21053__auto____1;
return cljs$core$async$state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___23035,out))
})();
var state__21147__auto__ = (function (){var statearr_23033 = f__21146__auto__.call(null);
(statearr_23033[(6)] = c__21145__auto___23035);

return statearr_23033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___23035,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1569276391118
