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
var args29951 = [];
var len__25909__auto___29957 = arguments.length;
var i__25910__auto___29958 = (0);
while(true){
if((i__25910__auto___29958 < len__25909__auto___29957)){
args29951.push((arguments[i__25910__auto___29958]));

var G__29959 = (i__25910__auto___29958 + (1));
i__25910__auto___29958 = G__29959;
continue;
} else {
}
break;
}

var G__29953 = args29951.length;
switch (G__29953) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29951.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29954 = (function (f,blockable,meta29955){
this.f = f;
this.blockable = blockable;
this.meta29955 = meta29955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29956,meta29955__$1){
var self__ = this;
var _29956__$1 = this;
return (new cljs.core.async.t_cljs$core$async29954(self__.f,self__.blockable,meta29955__$1));
});

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29956){
var self__ = this;
var _29956__$1 = this;
return self__.meta29955;
});

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29955","meta29955",1744025909,null)], null);
});

cljs.core.async.t_cljs$core$async29954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29954";

cljs.core.async.t_cljs$core$async29954.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async29954");
});

cljs.core.async.__GT_t_cljs$core$async29954 = (function cljs$core$async$__GT_t_cljs$core$async29954(f__$1,blockable__$1,meta29955){
return (new cljs.core.async.t_cljs$core$async29954(f__$1,blockable__$1,meta29955));
});

}

return (new cljs.core.async.t_cljs$core$async29954(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args29963 = [];
var len__25909__auto___29966 = arguments.length;
var i__25910__auto___29967 = (0);
while(true){
if((i__25910__auto___29967 < len__25909__auto___29966)){
args29963.push((arguments[i__25910__auto___29967]));

var G__29968 = (i__25910__auto___29967 + (1));
i__25910__auto___29967 = G__29968;
continue;
} else {
}
break;
}

var G__29965 = args29963.length;
switch (G__29965) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29963.length)].join('')));

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
var args29970 = [];
var len__25909__auto___29973 = arguments.length;
var i__25910__auto___29974 = (0);
while(true){
if((i__25910__auto___29974 < len__25909__auto___29973)){
args29970.push((arguments[i__25910__auto___29974]));

var G__29975 = (i__25910__auto___29974 + (1));
i__25910__auto___29974 = G__29975;
continue;
} else {
}
break;
}

var G__29972 = args29970.length;
switch (G__29972) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29970.length)].join('')));

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
var args29977 = [];
var len__25909__auto___29980 = arguments.length;
var i__25910__auto___29981 = (0);
while(true){
if((i__25910__auto___29981 < len__25909__auto___29980)){
args29977.push((arguments[i__25910__auto___29981]));

var G__29982 = (i__25910__auto___29981 + (1));
i__25910__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var G__29979 = args29977.length;
switch (G__29979) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29977.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29984 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29984);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29984,ret){
return (function (){
return fn1.call(null,val_29984);
});})(val_29984,ret))
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
var args29985 = [];
var len__25909__auto___29988 = arguments.length;
var i__25910__auto___29989 = (0);
while(true){
if((i__25910__auto___29989 < len__25909__auto___29988)){
args29985.push((arguments[i__25910__auto___29989]));

var G__29990 = (i__25910__auto___29989 + (1));
i__25910__auto___29989 = G__29990;
continue;
} else {
}
break;
}

var G__29987 = args29985.length;
switch (G__29987) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29985.length)].join('')));

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
var n__25749__auto___29992 = n;
var x_29993 = (0);
while(true){
if((x_29993 < n__25749__auto___29992)){
(a[x_29993] = (0));

var G__29994 = (x_29993 + (1));
x_29993 = G__29994;
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

var G__29995 = (i + (1));
i = G__29995;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29999 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29999 = (function (alt_flag,flag,meta30000){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta30000 = meta30000;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30001,meta30000__$1){
var self__ = this;
var _30001__$1 = this;
return (new cljs.core.async.t_cljs$core$async29999(self__.alt_flag,self__.flag,meta30000__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29999.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30001){
var self__ = this;
var _30001__$1 = this;
return self__.meta30000;
});})(flag))
;

cljs.core.async.t_cljs$core$async29999.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29999.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29999.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30000","meta30000",-954719535,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29999.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29999.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29999";

cljs.core.async.t_cljs$core$async29999.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async29999");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29999 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29999(alt_flag__$1,flag__$1,meta30000){
return (new cljs.core.async.t_cljs$core$async29999(alt_flag__$1,flag__$1,meta30000));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29999(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30005 = (function (alt_handler,flag,cb,meta30006){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta30006 = meta30006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30007,meta30006__$1){
var self__ = this;
var _30007__$1 = this;
return (new cljs.core.async.t_cljs$core$async30005(self__.alt_handler,self__.flag,self__.cb,meta30006__$1));
});

cljs.core.async.t_cljs$core$async30005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30007){
var self__ = this;
var _30007__$1 = this;
return self__.meta30006;
});

cljs.core.async.t_cljs$core$async30005.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30005.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30005.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30005.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30006","meta30006",242537686,null)], null);
});

cljs.core.async.t_cljs$core$async30005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30005";

cljs.core.async.t_cljs$core$async30005.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async30005");
});

cljs.core.async.__GT_t_cljs$core$async30005 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30005(alt_handler__$1,flag__$1,cb__$1,meta30006){
return (new cljs.core.async.t_cljs$core$async30005(alt_handler__$1,flag__$1,cb__$1,meta30006));
});

}

return (new cljs.core.async.t_cljs$core$async30005(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30008_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30008_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30009_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30009_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24834__auto__ = wport;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30010 = (i + (1));
i = G__30010;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24834__auto__ = ret;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24822__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24822__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24822__auto__;
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
var args__25916__auto__ = [];
var len__25909__auto___30016 = arguments.length;
var i__25910__auto___30017 = (0);
while(true){
if((i__25910__auto___30017 < len__25909__auto___30016)){
args__25916__auto__.push((arguments[i__25910__auto___30017]));

var G__30018 = (i__25910__auto___30017 + (1));
i__25910__auto___30017 = G__30018;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((1) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25917__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30013){
var map__30014 = p__30013;
var map__30014__$1 = ((((!((map__30014 == null)))?((((map__30014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30014):map__30014);
var opts = map__30014__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30011){
var G__30012 = cljs.core.first.call(null,seq30011);
var seq30011__$1 = cljs.core.next.call(null,seq30011);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30012,seq30011__$1);
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
var args30019 = [];
var len__25909__auto___30069 = arguments.length;
var i__25910__auto___30070 = (0);
while(true){
if((i__25910__auto___30070 < len__25909__auto___30069)){
args30019.push((arguments[i__25910__auto___30070]));

var G__30071 = (i__25910__auto___30070 + (1));
i__25910__auto___30070 = G__30071;
continue;
} else {
}
break;
}

var G__30021 = args30019.length;
switch (G__30021) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30019.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29906__auto___30073 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___30073){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___30073){
return (function (state_30045){
var state_val_30046 = (state_30045[(1)]);
if((state_val_30046 === (7))){
var inst_30041 = (state_30045[(2)]);
var state_30045__$1 = state_30045;
var statearr_30047_30074 = state_30045__$1;
(statearr_30047_30074[(2)] = inst_30041);

(statearr_30047_30074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (1))){
var state_30045__$1 = state_30045;
var statearr_30048_30075 = state_30045__$1;
(statearr_30048_30075[(2)] = null);

(statearr_30048_30075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (4))){
var inst_30024 = (state_30045[(7)]);
var inst_30024__$1 = (state_30045[(2)]);
var inst_30025 = (inst_30024__$1 == null);
var state_30045__$1 = (function (){var statearr_30049 = state_30045;
(statearr_30049[(7)] = inst_30024__$1);

return statearr_30049;
})();
if(cljs.core.truth_(inst_30025)){
var statearr_30050_30076 = state_30045__$1;
(statearr_30050_30076[(1)] = (5));

} else {
var statearr_30051_30077 = state_30045__$1;
(statearr_30051_30077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (13))){
var state_30045__$1 = state_30045;
var statearr_30052_30078 = state_30045__$1;
(statearr_30052_30078[(2)] = null);

(statearr_30052_30078[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (6))){
var inst_30024 = (state_30045[(7)]);
var state_30045__$1 = state_30045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30045__$1,(11),to,inst_30024);
} else {
if((state_val_30046 === (3))){
var inst_30043 = (state_30045[(2)]);
var state_30045__$1 = state_30045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30045__$1,inst_30043);
} else {
if((state_val_30046 === (12))){
var state_30045__$1 = state_30045;
var statearr_30053_30079 = state_30045__$1;
(statearr_30053_30079[(2)] = null);

(statearr_30053_30079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (2))){
var state_30045__$1 = state_30045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30045__$1,(4),from);
} else {
if((state_val_30046 === (11))){
var inst_30034 = (state_30045[(2)]);
var state_30045__$1 = state_30045;
if(cljs.core.truth_(inst_30034)){
var statearr_30054_30080 = state_30045__$1;
(statearr_30054_30080[(1)] = (12));

} else {
var statearr_30055_30081 = state_30045__$1;
(statearr_30055_30081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (9))){
var state_30045__$1 = state_30045;
var statearr_30056_30082 = state_30045__$1;
(statearr_30056_30082[(2)] = null);

(statearr_30056_30082[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (5))){
var state_30045__$1 = state_30045;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30057_30083 = state_30045__$1;
(statearr_30057_30083[(1)] = (8));

} else {
var statearr_30058_30084 = state_30045__$1;
(statearr_30058_30084[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (14))){
var inst_30039 = (state_30045[(2)]);
var state_30045__$1 = state_30045;
var statearr_30059_30085 = state_30045__$1;
(statearr_30059_30085[(2)] = inst_30039);

(statearr_30059_30085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (10))){
var inst_30031 = (state_30045[(2)]);
var state_30045__$1 = state_30045;
var statearr_30060_30086 = state_30045__$1;
(statearr_30060_30086[(2)] = inst_30031);

(statearr_30060_30086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30046 === (8))){
var inst_30028 = cljs.core.async.close_BANG_.call(null,to);
var state_30045__$1 = state_30045;
var statearr_30061_30087 = state_30045__$1;
(statearr_30061_30087[(2)] = inst_30028);

(statearr_30061_30087[(1)] = (10));


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
});})(c__29906__auto___30073))
;
return ((function (switch__29794__auto__,c__29906__auto___30073){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_30065 = [null,null,null,null,null,null,null,null];
(statearr_30065[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_30065[(1)] = (1));

return statearr_30065;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_30045){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30066){if((e30066 instanceof Object)){
var ex__29798__auto__ = e30066;
var statearr_30067_30088 = state_30045;
(statearr_30067_30088[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30089 = state_30045;
state_30045 = G__30089;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_30045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_30045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___30073))
})();
var state__29908__auto__ = (function (){var statearr_30068 = f__29907__auto__.call(null);
(statearr_30068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___30073);

return statearr_30068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___30073))
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
return (function (p__30277){
var vec__30278 = p__30277;
var v = cljs.core.nth.call(null,vec__30278,(0),null);
var p = cljs.core.nth.call(null,vec__30278,(1),null);
var job = vec__30278;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29906__auto___30464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___30464,res,vec__30278,v,p,job,jobs,results){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___30464,res,vec__30278,v,p,job,jobs,results){
return (function (state_30285){
var state_val_30286 = (state_30285[(1)]);
if((state_val_30286 === (1))){
var state_30285__$1 = state_30285;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30285__$1,(2),res,v);
} else {
if((state_val_30286 === (2))){
var inst_30282 = (state_30285[(2)]);
var inst_30283 = cljs.core.async.close_BANG_.call(null,res);
var state_30285__$1 = (function (){var statearr_30287 = state_30285;
(statearr_30287[(7)] = inst_30282);

return statearr_30287;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30285__$1,inst_30283);
} else {
return null;
}
}
});})(c__29906__auto___30464,res,vec__30278,v,p,job,jobs,results))
;
return ((function (switch__29794__auto__,c__29906__auto___30464,res,vec__30278,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0 = (function (){
var statearr_30291 = [null,null,null,null,null,null,null,null];
(statearr_30291[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__);

(statearr_30291[(1)] = (1));

return statearr_30291;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1 = (function (state_30285){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30292){if((e30292 instanceof Object)){
var ex__29798__auto__ = e30292;
var statearr_30293_30465 = state_30285;
(statearr_30293_30465[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30292;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30466 = state_30285;
state_30285 = G__30466;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = function(state_30285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1.call(this,state_30285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___30464,res,vec__30278,v,p,job,jobs,results))
})();
var state__29908__auto__ = (function (){var statearr_30294 = f__29907__auto__.call(null);
(statearr_30294[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___30464);

return statearr_30294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___30464,res,vec__30278,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30295){
var vec__30296 = p__30295;
var v = cljs.core.nth.call(null,vec__30296,(0),null);
var p = cljs.core.nth.call(null,vec__30296,(1),null);
var job = vec__30296;
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
var n__25749__auto___30467 = n;
var __30468 = (0);
while(true){
if((__30468 < n__25749__auto___30467)){
var G__30299_30469 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__30299_30469) {
case "compute":
var c__29906__auto___30471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30468,c__29906__auto___30471,G__30299_30469,n__25749__auto___30467,jobs,results,process,async){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (__30468,c__29906__auto___30471,G__30299_30469,n__25749__auto___30467,jobs,results,process,async){
return (function (state_30312){
var state_val_30313 = (state_30312[(1)]);
if((state_val_30313 === (1))){
var state_30312__$1 = state_30312;
var statearr_30314_30472 = state_30312__$1;
(statearr_30314_30472[(2)] = null);

(statearr_30314_30472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (2))){
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30312__$1,(4),jobs);
} else {
if((state_val_30313 === (3))){
var inst_30310 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30312__$1,inst_30310);
} else {
if((state_val_30313 === (4))){
var inst_30302 = (state_30312[(2)]);
var inst_30303 = process.call(null,inst_30302);
var state_30312__$1 = state_30312;
if(cljs.core.truth_(inst_30303)){
var statearr_30315_30473 = state_30312__$1;
(statearr_30315_30473[(1)] = (5));

} else {
var statearr_30316_30474 = state_30312__$1;
(statearr_30316_30474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (5))){
var state_30312__$1 = state_30312;
var statearr_30317_30475 = state_30312__$1;
(statearr_30317_30475[(2)] = null);

(statearr_30317_30475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (6))){
var state_30312__$1 = state_30312;
var statearr_30318_30476 = state_30312__$1;
(statearr_30318_30476[(2)] = null);

(statearr_30318_30476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30313 === (7))){
var inst_30308 = (state_30312[(2)]);
var state_30312__$1 = state_30312;
var statearr_30319_30477 = state_30312__$1;
(statearr_30319_30477[(2)] = inst_30308);

(statearr_30319_30477[(1)] = (3));


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
});})(__30468,c__29906__auto___30471,G__30299_30469,n__25749__auto___30467,jobs,results,process,async))
;
return ((function (__30468,switch__29794__auto__,c__29906__auto___30471,G__30299_30469,n__25749__auto___30467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0 = (function (){
var statearr_30323 = [null,null,null,null,null,null,null];
(statearr_30323[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__);

(statearr_30323[(1)] = (1));

return statearr_30323;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1 = (function (state_30312){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30324){if((e30324 instanceof Object)){
var ex__29798__auto__ = e30324;
var statearr_30325_30478 = state_30312;
(statearr_30325_30478[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30479 = state_30312;
state_30312 = G__30479;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = function(state_30312){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1.call(this,state_30312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__;
})()
;})(__30468,switch__29794__auto__,c__29906__auto___30471,G__30299_30469,n__25749__auto___30467,jobs,results,process,async))
})();
var state__29908__auto__ = (function (){var statearr_30326 = f__29907__auto__.call(null);
(statearr_30326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___30471);

return statearr_30326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(__30468,c__29906__auto___30471,G__30299_30469,n__25749__auto___30467,jobs,results,process,async))
);


break;
case "async":
var c__29906__auto___30480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30468,c__29906__auto___30480,G__30299_30469,n__25749__auto___30467,jobs,results,process,async){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (__30468,c__29906__auto___30480,G__30299_30469,n__25749__auto___30467,jobs,results,process,async){
return (function (state_30339){
var state_val_30340 = (state_30339[(1)]);
if((state_val_30340 === (1))){
var state_30339__$1 = state_30339;
var statearr_30341_30481 = state_30339__$1;
(statearr_30341_30481[(2)] = null);

(statearr_30341_30481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (2))){
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30339__$1,(4),jobs);
} else {
if((state_val_30340 === (3))){
var inst_30337 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30339__$1,inst_30337);
} else {
if((state_val_30340 === (4))){
var inst_30329 = (state_30339[(2)]);
var inst_30330 = async.call(null,inst_30329);
var state_30339__$1 = state_30339;
if(cljs.core.truth_(inst_30330)){
var statearr_30342_30482 = state_30339__$1;
(statearr_30342_30482[(1)] = (5));

} else {
var statearr_30343_30483 = state_30339__$1;
(statearr_30343_30483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (5))){
var state_30339__$1 = state_30339;
var statearr_30344_30484 = state_30339__$1;
(statearr_30344_30484[(2)] = null);

(statearr_30344_30484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (6))){
var state_30339__$1 = state_30339;
var statearr_30345_30485 = state_30339__$1;
(statearr_30345_30485[(2)] = null);

(statearr_30345_30485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (7))){
var inst_30335 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30346_30486 = state_30339__$1;
(statearr_30346_30486[(2)] = inst_30335);

(statearr_30346_30486[(1)] = (3));


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
});})(__30468,c__29906__auto___30480,G__30299_30469,n__25749__auto___30467,jobs,results,process,async))
;
return ((function (__30468,switch__29794__auto__,c__29906__auto___30480,G__30299_30469,n__25749__auto___30467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0 = (function (){
var statearr_30350 = [null,null,null,null,null,null,null];
(statearr_30350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__);

(statearr_30350[(1)] = (1));

return statearr_30350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1 = (function (state_30339){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30351){if((e30351 instanceof Object)){
var ex__29798__auto__ = e30351;
var statearr_30352_30487 = state_30339;
(statearr_30352_30487[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30488 = state_30339;
state_30339 = G__30488;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = function(state_30339){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1.call(this,state_30339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__;
})()
;})(__30468,switch__29794__auto__,c__29906__auto___30480,G__30299_30469,n__25749__auto___30467,jobs,results,process,async))
})();
var state__29908__auto__ = (function (){var statearr_30353 = f__29907__auto__.call(null);
(statearr_30353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___30480);

return statearr_30353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(__30468,c__29906__auto___30480,G__30299_30469,n__25749__auto___30467,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__30489 = (__30468 + (1));
__30468 = G__30489;
continue;
} else {
}
break;
}

var c__29906__auto___30490 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___30490,jobs,results,process,async){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___30490,jobs,results,process,async){
return (function (state_30375){
var state_val_30376 = (state_30375[(1)]);
if((state_val_30376 === (1))){
var state_30375__$1 = state_30375;
var statearr_30377_30491 = state_30375__$1;
(statearr_30377_30491[(2)] = null);

(statearr_30377_30491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30376 === (2))){
var state_30375__$1 = state_30375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30375__$1,(4),from);
} else {
if((state_val_30376 === (3))){
var inst_30373 = (state_30375[(2)]);
var state_30375__$1 = state_30375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30375__$1,inst_30373);
} else {
if((state_val_30376 === (4))){
var inst_30356 = (state_30375[(7)]);
var inst_30356__$1 = (state_30375[(2)]);
var inst_30357 = (inst_30356__$1 == null);
var state_30375__$1 = (function (){var statearr_30378 = state_30375;
(statearr_30378[(7)] = inst_30356__$1);

return statearr_30378;
})();
if(cljs.core.truth_(inst_30357)){
var statearr_30379_30492 = state_30375__$1;
(statearr_30379_30492[(1)] = (5));

} else {
var statearr_30380_30493 = state_30375__$1;
(statearr_30380_30493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30376 === (5))){
var inst_30359 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30375__$1 = state_30375;
var statearr_30381_30494 = state_30375__$1;
(statearr_30381_30494[(2)] = inst_30359);

(statearr_30381_30494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30376 === (6))){
var inst_30356 = (state_30375[(7)]);
var inst_30361 = (state_30375[(8)]);
var inst_30361__$1 = cljs.core.async.chan.call(null,(1));
var inst_30362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30363 = [inst_30356,inst_30361__$1];
var inst_30364 = (new cljs.core.PersistentVector(null,2,(5),inst_30362,inst_30363,null));
var state_30375__$1 = (function (){var statearr_30382 = state_30375;
(statearr_30382[(8)] = inst_30361__$1);

return statearr_30382;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30375__$1,(8),jobs,inst_30364);
} else {
if((state_val_30376 === (7))){
var inst_30371 = (state_30375[(2)]);
var state_30375__$1 = state_30375;
var statearr_30383_30495 = state_30375__$1;
(statearr_30383_30495[(2)] = inst_30371);

(statearr_30383_30495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30376 === (8))){
var inst_30361 = (state_30375[(8)]);
var inst_30366 = (state_30375[(2)]);
var state_30375__$1 = (function (){var statearr_30384 = state_30375;
(statearr_30384[(9)] = inst_30366);

return statearr_30384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30375__$1,(9),results,inst_30361);
} else {
if((state_val_30376 === (9))){
var inst_30368 = (state_30375[(2)]);
var state_30375__$1 = (function (){var statearr_30385 = state_30375;
(statearr_30385[(10)] = inst_30368);

return statearr_30385;
})();
var statearr_30386_30496 = state_30375__$1;
(statearr_30386_30496[(2)] = null);

(statearr_30386_30496[(1)] = (2));


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
});})(c__29906__auto___30490,jobs,results,process,async))
;
return ((function (switch__29794__auto__,c__29906__auto___30490,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0 = (function (){
var statearr_30390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30390[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__);

(statearr_30390[(1)] = (1));

return statearr_30390;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1 = (function (state_30375){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30391){if((e30391 instanceof Object)){
var ex__29798__auto__ = e30391;
var statearr_30392_30497 = state_30375;
(statearr_30392_30497[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30498 = state_30375;
state_30375 = G__30498;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = function(state_30375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1.call(this,state_30375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___30490,jobs,results,process,async))
})();
var state__29908__auto__ = (function (){var statearr_30393 = f__29907__auto__.call(null);
(statearr_30393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___30490);

return statearr_30393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___30490,jobs,results,process,async))
);


var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__,jobs,results,process,async){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__,jobs,results,process,async){
return (function (state_30431){
var state_val_30432 = (state_30431[(1)]);
if((state_val_30432 === (7))){
var inst_30427 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30433_30499 = state_30431__$1;
(statearr_30433_30499[(2)] = inst_30427);

(statearr_30433_30499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (20))){
var state_30431__$1 = state_30431;
var statearr_30434_30500 = state_30431__$1;
(statearr_30434_30500[(2)] = null);

(statearr_30434_30500[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (1))){
var state_30431__$1 = state_30431;
var statearr_30435_30501 = state_30431__$1;
(statearr_30435_30501[(2)] = null);

(statearr_30435_30501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (4))){
var inst_30396 = (state_30431[(7)]);
var inst_30396__$1 = (state_30431[(2)]);
var inst_30397 = (inst_30396__$1 == null);
var state_30431__$1 = (function (){var statearr_30436 = state_30431;
(statearr_30436[(7)] = inst_30396__$1);

return statearr_30436;
})();
if(cljs.core.truth_(inst_30397)){
var statearr_30437_30502 = state_30431__$1;
(statearr_30437_30502[(1)] = (5));

} else {
var statearr_30438_30503 = state_30431__$1;
(statearr_30438_30503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (15))){
var inst_30409 = (state_30431[(8)]);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30431__$1,(18),to,inst_30409);
} else {
if((state_val_30432 === (21))){
var inst_30422 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30439_30504 = state_30431__$1;
(statearr_30439_30504[(2)] = inst_30422);

(statearr_30439_30504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (13))){
var inst_30424 = (state_30431[(2)]);
var state_30431__$1 = (function (){var statearr_30440 = state_30431;
(statearr_30440[(9)] = inst_30424);

return statearr_30440;
})();
var statearr_30441_30505 = state_30431__$1;
(statearr_30441_30505[(2)] = null);

(statearr_30441_30505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (6))){
var inst_30396 = (state_30431[(7)]);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30431__$1,(11),inst_30396);
} else {
if((state_val_30432 === (17))){
var inst_30417 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
if(cljs.core.truth_(inst_30417)){
var statearr_30442_30506 = state_30431__$1;
(statearr_30442_30506[(1)] = (19));

} else {
var statearr_30443_30507 = state_30431__$1;
(statearr_30443_30507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (3))){
var inst_30429 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30431__$1,inst_30429);
} else {
if((state_val_30432 === (12))){
var inst_30406 = (state_30431[(10)]);
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30431__$1,(14),inst_30406);
} else {
if((state_val_30432 === (2))){
var state_30431__$1 = state_30431;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30431__$1,(4),results);
} else {
if((state_val_30432 === (19))){
var state_30431__$1 = state_30431;
var statearr_30444_30508 = state_30431__$1;
(statearr_30444_30508[(2)] = null);

(statearr_30444_30508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (11))){
var inst_30406 = (state_30431[(2)]);
var state_30431__$1 = (function (){var statearr_30445 = state_30431;
(statearr_30445[(10)] = inst_30406);

return statearr_30445;
})();
var statearr_30446_30509 = state_30431__$1;
(statearr_30446_30509[(2)] = null);

(statearr_30446_30509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (9))){
var state_30431__$1 = state_30431;
var statearr_30447_30510 = state_30431__$1;
(statearr_30447_30510[(2)] = null);

(statearr_30447_30510[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (5))){
var state_30431__$1 = state_30431;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30448_30511 = state_30431__$1;
(statearr_30448_30511[(1)] = (8));

} else {
var statearr_30449_30512 = state_30431__$1;
(statearr_30449_30512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (14))){
var inst_30409 = (state_30431[(8)]);
var inst_30411 = (state_30431[(11)]);
var inst_30409__$1 = (state_30431[(2)]);
var inst_30410 = (inst_30409__$1 == null);
var inst_30411__$1 = cljs.core.not.call(null,inst_30410);
var state_30431__$1 = (function (){var statearr_30450 = state_30431;
(statearr_30450[(8)] = inst_30409__$1);

(statearr_30450[(11)] = inst_30411__$1);

return statearr_30450;
})();
if(inst_30411__$1){
var statearr_30451_30513 = state_30431__$1;
(statearr_30451_30513[(1)] = (15));

} else {
var statearr_30452_30514 = state_30431__$1;
(statearr_30452_30514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (16))){
var inst_30411 = (state_30431[(11)]);
var state_30431__$1 = state_30431;
var statearr_30453_30515 = state_30431__$1;
(statearr_30453_30515[(2)] = inst_30411);

(statearr_30453_30515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (10))){
var inst_30403 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30454_30516 = state_30431__$1;
(statearr_30454_30516[(2)] = inst_30403);

(statearr_30454_30516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (18))){
var inst_30414 = (state_30431[(2)]);
var state_30431__$1 = state_30431;
var statearr_30455_30517 = state_30431__$1;
(statearr_30455_30517[(2)] = inst_30414);

(statearr_30455_30517[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30432 === (8))){
var inst_30400 = cljs.core.async.close_BANG_.call(null,to);
var state_30431__$1 = state_30431;
var statearr_30456_30518 = state_30431__$1;
(statearr_30456_30518[(2)] = inst_30400);

(statearr_30456_30518[(1)] = (10));


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
});})(c__29906__auto__,jobs,results,process,async))
;
return ((function (switch__29794__auto__,c__29906__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0 = (function (){
var statearr_30460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__);

(statearr_30460[(1)] = (1));

return statearr_30460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1 = (function (state_30431){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30461){if((e30461 instanceof Object)){
var ex__29798__auto__ = e30461;
var statearr_30462_30519 = state_30431;
(statearr_30462_30519[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30520 = state_30431;
state_30431 = G__30520;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__ = function(state_30431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1.call(this,state_30431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29795__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__,jobs,results,process,async))
})();
var state__29908__auto__ = (function (){var statearr_30463 = f__29907__auto__.call(null);
(statearr_30463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_30463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__,jobs,results,process,async))
);

return c__29906__auto__;
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
var args30521 = [];
var len__25909__auto___30524 = arguments.length;
var i__25910__auto___30525 = (0);
while(true){
if((i__25910__auto___30525 < len__25909__auto___30524)){
args30521.push((arguments[i__25910__auto___30525]));

var G__30526 = (i__25910__auto___30525 + (1));
i__25910__auto___30525 = G__30526;
continue;
} else {
}
break;
}

var G__30523 = args30521.length;
switch (G__30523) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30521.length)].join('')));

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
var args30528 = [];
var len__25909__auto___30531 = arguments.length;
var i__25910__auto___30532 = (0);
while(true){
if((i__25910__auto___30532 < len__25909__auto___30531)){
args30528.push((arguments[i__25910__auto___30532]));

var G__30533 = (i__25910__auto___30532 + (1));
i__25910__auto___30532 = G__30533;
continue;
} else {
}
break;
}

var G__30530 = args30528.length;
switch (G__30530) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30528.length)].join('')));

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
var args30535 = [];
var len__25909__auto___30588 = arguments.length;
var i__25910__auto___30589 = (0);
while(true){
if((i__25910__auto___30589 < len__25909__auto___30588)){
args30535.push((arguments[i__25910__auto___30589]));

var G__30590 = (i__25910__auto___30589 + (1));
i__25910__auto___30589 = G__30590;
continue;
} else {
}
break;
}

var G__30537 = args30535.length;
switch (G__30537) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30535.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29906__auto___30592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___30592,tc,fc){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___30592,tc,fc){
return (function (state_30563){
var state_val_30564 = (state_30563[(1)]);
if((state_val_30564 === (7))){
var inst_30559 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
var statearr_30565_30593 = state_30563__$1;
(statearr_30565_30593[(2)] = inst_30559);

(statearr_30565_30593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (1))){
var state_30563__$1 = state_30563;
var statearr_30566_30594 = state_30563__$1;
(statearr_30566_30594[(2)] = null);

(statearr_30566_30594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (4))){
var inst_30540 = (state_30563[(7)]);
var inst_30540__$1 = (state_30563[(2)]);
var inst_30541 = (inst_30540__$1 == null);
var state_30563__$1 = (function (){var statearr_30567 = state_30563;
(statearr_30567[(7)] = inst_30540__$1);

return statearr_30567;
})();
if(cljs.core.truth_(inst_30541)){
var statearr_30568_30595 = state_30563__$1;
(statearr_30568_30595[(1)] = (5));

} else {
var statearr_30569_30596 = state_30563__$1;
(statearr_30569_30596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (13))){
var state_30563__$1 = state_30563;
var statearr_30570_30597 = state_30563__$1;
(statearr_30570_30597[(2)] = null);

(statearr_30570_30597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (6))){
var inst_30540 = (state_30563[(7)]);
var inst_30546 = p.call(null,inst_30540);
var state_30563__$1 = state_30563;
if(cljs.core.truth_(inst_30546)){
var statearr_30571_30598 = state_30563__$1;
(statearr_30571_30598[(1)] = (9));

} else {
var statearr_30572_30599 = state_30563__$1;
(statearr_30572_30599[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (3))){
var inst_30561 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30563__$1,inst_30561);
} else {
if((state_val_30564 === (12))){
var state_30563__$1 = state_30563;
var statearr_30573_30600 = state_30563__$1;
(statearr_30573_30600[(2)] = null);

(statearr_30573_30600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (2))){
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30563__$1,(4),ch);
} else {
if((state_val_30564 === (11))){
var inst_30540 = (state_30563[(7)]);
var inst_30550 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30563__$1,(8),inst_30550,inst_30540);
} else {
if((state_val_30564 === (9))){
var state_30563__$1 = state_30563;
var statearr_30574_30601 = state_30563__$1;
(statearr_30574_30601[(2)] = tc);

(statearr_30574_30601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (5))){
var inst_30543 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30544 = cljs.core.async.close_BANG_.call(null,fc);
var state_30563__$1 = (function (){var statearr_30575 = state_30563;
(statearr_30575[(8)] = inst_30543);

return statearr_30575;
})();
var statearr_30576_30602 = state_30563__$1;
(statearr_30576_30602[(2)] = inst_30544);

(statearr_30576_30602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (14))){
var inst_30557 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
var statearr_30577_30603 = state_30563__$1;
(statearr_30577_30603[(2)] = inst_30557);

(statearr_30577_30603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (10))){
var state_30563__$1 = state_30563;
var statearr_30578_30604 = state_30563__$1;
(statearr_30578_30604[(2)] = fc);

(statearr_30578_30604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30564 === (8))){
var inst_30552 = (state_30563[(2)]);
var state_30563__$1 = state_30563;
if(cljs.core.truth_(inst_30552)){
var statearr_30579_30605 = state_30563__$1;
(statearr_30579_30605[(1)] = (12));

} else {
var statearr_30580_30606 = state_30563__$1;
(statearr_30580_30606[(1)] = (13));

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
});})(c__29906__auto___30592,tc,fc))
;
return ((function (switch__29794__auto__,c__29906__auto___30592,tc,fc){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_30584 = [null,null,null,null,null,null,null,null,null];
(statearr_30584[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_30584[(1)] = (1));

return statearr_30584;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_30563){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30585){if((e30585 instanceof Object)){
var ex__29798__auto__ = e30585;
var statearr_30586_30607 = state_30563;
(statearr_30586_30607[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30608 = state_30563;
state_30563 = G__30608;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_30563){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_30563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___30592,tc,fc))
})();
var state__29908__auto__ = (function (){var statearr_30587 = f__29907__auto__.call(null);
(statearr_30587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___30592);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___30592,tc,fc))
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
var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__){
return (function (state_30672){
var state_val_30673 = (state_30672[(1)]);
if((state_val_30673 === (7))){
var inst_30668 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30674_30695 = state_30672__$1;
(statearr_30674_30695[(2)] = inst_30668);

(statearr_30674_30695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (1))){
var inst_30652 = init;
var state_30672__$1 = (function (){var statearr_30675 = state_30672;
(statearr_30675[(7)] = inst_30652);

return statearr_30675;
})();
var statearr_30676_30696 = state_30672__$1;
(statearr_30676_30696[(2)] = null);

(statearr_30676_30696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (4))){
var inst_30655 = (state_30672[(8)]);
var inst_30655__$1 = (state_30672[(2)]);
var inst_30656 = (inst_30655__$1 == null);
var state_30672__$1 = (function (){var statearr_30677 = state_30672;
(statearr_30677[(8)] = inst_30655__$1);

return statearr_30677;
})();
if(cljs.core.truth_(inst_30656)){
var statearr_30678_30697 = state_30672__$1;
(statearr_30678_30697[(1)] = (5));

} else {
var statearr_30679_30698 = state_30672__$1;
(statearr_30679_30698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (6))){
var inst_30652 = (state_30672[(7)]);
var inst_30659 = (state_30672[(9)]);
var inst_30655 = (state_30672[(8)]);
var inst_30659__$1 = f.call(null,inst_30652,inst_30655);
var inst_30660 = cljs.core.reduced_QMARK_.call(null,inst_30659__$1);
var state_30672__$1 = (function (){var statearr_30680 = state_30672;
(statearr_30680[(9)] = inst_30659__$1);

return statearr_30680;
})();
if(inst_30660){
var statearr_30681_30699 = state_30672__$1;
(statearr_30681_30699[(1)] = (8));

} else {
var statearr_30682_30700 = state_30672__$1;
(statearr_30682_30700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (3))){
var inst_30670 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30672__$1,inst_30670);
} else {
if((state_val_30673 === (2))){
var state_30672__$1 = state_30672;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30672__$1,(4),ch);
} else {
if((state_val_30673 === (9))){
var inst_30659 = (state_30672[(9)]);
var inst_30652 = inst_30659;
var state_30672__$1 = (function (){var statearr_30683 = state_30672;
(statearr_30683[(7)] = inst_30652);

return statearr_30683;
})();
var statearr_30684_30701 = state_30672__$1;
(statearr_30684_30701[(2)] = null);

(statearr_30684_30701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (5))){
var inst_30652 = (state_30672[(7)]);
var state_30672__$1 = state_30672;
var statearr_30685_30702 = state_30672__$1;
(statearr_30685_30702[(2)] = inst_30652);

(statearr_30685_30702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (10))){
var inst_30666 = (state_30672[(2)]);
var state_30672__$1 = state_30672;
var statearr_30686_30703 = state_30672__$1;
(statearr_30686_30703[(2)] = inst_30666);

(statearr_30686_30703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30673 === (8))){
var inst_30659 = (state_30672[(9)]);
var inst_30662 = cljs.core.deref.call(null,inst_30659);
var state_30672__$1 = state_30672;
var statearr_30687_30704 = state_30672__$1;
(statearr_30687_30704[(2)] = inst_30662);

(statearr_30687_30704[(1)] = (10));


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
});})(c__29906__auto__))
;
return ((function (switch__29794__auto__,c__29906__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29795__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29795__auto____0 = (function (){
var statearr_30691 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30691[(0)] = cljs$core$async$reduce_$_state_machine__29795__auto__);

(statearr_30691[(1)] = (1));

return statearr_30691;
});
var cljs$core$async$reduce_$_state_machine__29795__auto____1 = (function (state_30672){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30672);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30692){if((e30692 instanceof Object)){
var ex__29798__auto__ = e30692;
var statearr_30693_30705 = state_30672;
(statearr_30693_30705[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30706 = state_30672;
state_30672 = G__30706;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29795__auto__ = function(state_30672){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29795__auto____1.call(this,state_30672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29795__auto____0;
cljs$core$async$reduce_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29795__auto____1;
return cljs$core$async$reduce_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__))
})();
var state__29908__auto__ = (function (){var statearr_30694 = f__29907__auto__.call(null);
(statearr_30694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_30694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__))
);

return c__29906__auto__;
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
var args30707 = [];
var len__25909__auto___30759 = arguments.length;
var i__25910__auto___30760 = (0);
while(true){
if((i__25910__auto___30760 < len__25909__auto___30759)){
args30707.push((arguments[i__25910__auto___30760]));

var G__30761 = (i__25910__auto___30760 + (1));
i__25910__auto___30760 = G__30761;
continue;
} else {
}
break;
}

var G__30709 = args30707.length;
switch (G__30709) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30707.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__){
return (function (state_30734){
var state_val_30735 = (state_30734[(1)]);
if((state_val_30735 === (7))){
var inst_30716 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30736_30763 = state_30734__$1;
(statearr_30736_30763[(2)] = inst_30716);

(statearr_30736_30763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (1))){
var inst_30710 = cljs.core.seq.call(null,coll);
var inst_30711 = inst_30710;
var state_30734__$1 = (function (){var statearr_30737 = state_30734;
(statearr_30737[(7)] = inst_30711);

return statearr_30737;
})();
var statearr_30738_30764 = state_30734__$1;
(statearr_30738_30764[(2)] = null);

(statearr_30738_30764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (4))){
var inst_30711 = (state_30734[(7)]);
var inst_30714 = cljs.core.first.call(null,inst_30711);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30734__$1,(7),ch,inst_30714);
} else {
if((state_val_30735 === (13))){
var inst_30728 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30739_30765 = state_30734__$1;
(statearr_30739_30765[(2)] = inst_30728);

(statearr_30739_30765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (6))){
var inst_30719 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30719)){
var statearr_30740_30766 = state_30734__$1;
(statearr_30740_30766[(1)] = (8));

} else {
var statearr_30741_30767 = state_30734__$1;
(statearr_30741_30767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (3))){
var inst_30732 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30734__$1,inst_30732);
} else {
if((state_val_30735 === (12))){
var state_30734__$1 = state_30734;
var statearr_30742_30768 = state_30734__$1;
(statearr_30742_30768[(2)] = null);

(statearr_30742_30768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (2))){
var inst_30711 = (state_30734[(7)]);
var state_30734__$1 = state_30734;
if(cljs.core.truth_(inst_30711)){
var statearr_30743_30769 = state_30734__$1;
(statearr_30743_30769[(1)] = (4));

} else {
var statearr_30744_30770 = state_30734__$1;
(statearr_30744_30770[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (11))){
var inst_30725 = cljs.core.async.close_BANG_.call(null,ch);
var state_30734__$1 = state_30734;
var statearr_30745_30771 = state_30734__$1;
(statearr_30745_30771[(2)] = inst_30725);

(statearr_30745_30771[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (9))){
var state_30734__$1 = state_30734;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30746_30772 = state_30734__$1;
(statearr_30746_30772[(1)] = (11));

} else {
var statearr_30747_30773 = state_30734__$1;
(statearr_30747_30773[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (5))){
var inst_30711 = (state_30734[(7)]);
var state_30734__$1 = state_30734;
var statearr_30748_30774 = state_30734__$1;
(statearr_30748_30774[(2)] = inst_30711);

(statearr_30748_30774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (10))){
var inst_30730 = (state_30734[(2)]);
var state_30734__$1 = state_30734;
var statearr_30749_30775 = state_30734__$1;
(statearr_30749_30775[(2)] = inst_30730);

(statearr_30749_30775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30735 === (8))){
var inst_30711 = (state_30734[(7)]);
var inst_30721 = cljs.core.next.call(null,inst_30711);
var inst_30711__$1 = inst_30721;
var state_30734__$1 = (function (){var statearr_30750 = state_30734;
(statearr_30750[(7)] = inst_30711__$1);

return statearr_30750;
})();
var statearr_30751_30776 = state_30734__$1;
(statearr_30751_30776[(2)] = null);

(statearr_30751_30776[(1)] = (2));


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
});})(c__29906__auto__))
;
return ((function (switch__29794__auto__,c__29906__auto__){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_30755 = [null,null,null,null,null,null,null,null];
(statearr_30755[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_30755[(1)] = (1));

return statearr_30755;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_30734){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_30734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e30756){if((e30756 instanceof Object)){
var ex__29798__auto__ = e30756;
var statearr_30757_30777 = state_30734;
(statearr_30757_30777[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30778 = state_30734;
state_30734 = G__30778;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_30734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_30734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__))
})();
var state__29908__auto__ = (function (){var statearr_30758 = f__29907__auto__.call(null);
(statearr_30758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_30758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__))
);

return c__29906__auto__;
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
var x__25497__auto__ = (((_ == null))?null:_);
var m__25498__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,_);
} else {
var m__25498__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,_);
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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25498__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch);
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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m);
} else {
var m__25498__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31004 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31004 = (function (mult,ch,cs,meta31005){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta31005 = meta31005;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31006,meta31005__$1){
var self__ = this;
var _31006__$1 = this;
return (new cljs.core.async.t_cljs$core$async31004(self__.mult,self__.ch,self__.cs,meta31005__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31006){
var self__ = this;
var _31006__$1 = this;
return self__.meta31005;
});})(cs))
;

cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31004.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31004.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31005","meta31005",-60018938,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31004.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31004.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31004";

cljs.core.async.t_cljs$core$async31004.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async31004");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31004 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31004(mult__$1,ch__$1,cs__$1,meta31005){
return (new cljs.core.async.t_cljs$core$async31004(mult__$1,ch__$1,cs__$1,meta31005));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31004(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29906__auto___31229 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___31229,cs,m,dchan,dctr,done){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___31229,cs,m,dchan,dctr,done){
return (function (state_31141){
var state_val_31142 = (state_31141[(1)]);
if((state_val_31142 === (7))){
var inst_31137 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31143_31230 = state_31141__$1;
(statearr_31143_31230[(2)] = inst_31137);

(statearr_31143_31230[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (20))){
var inst_31040 = (state_31141[(7)]);
var inst_31052 = cljs.core.first.call(null,inst_31040);
var inst_31053 = cljs.core.nth.call(null,inst_31052,(0),null);
var inst_31054 = cljs.core.nth.call(null,inst_31052,(1),null);
var state_31141__$1 = (function (){var statearr_31144 = state_31141;
(statearr_31144[(8)] = inst_31053);

return statearr_31144;
})();
if(cljs.core.truth_(inst_31054)){
var statearr_31145_31231 = state_31141__$1;
(statearr_31145_31231[(1)] = (22));

} else {
var statearr_31146_31232 = state_31141__$1;
(statearr_31146_31232[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (27))){
var inst_31084 = (state_31141[(9)]);
var inst_31089 = (state_31141[(10)]);
var inst_31082 = (state_31141[(11)]);
var inst_31009 = (state_31141[(12)]);
var inst_31089__$1 = cljs.core._nth.call(null,inst_31082,inst_31084);
var inst_31090 = cljs.core.async.put_BANG_.call(null,inst_31089__$1,inst_31009,done);
var state_31141__$1 = (function (){var statearr_31147 = state_31141;
(statearr_31147[(10)] = inst_31089__$1);

return statearr_31147;
})();
if(cljs.core.truth_(inst_31090)){
var statearr_31148_31233 = state_31141__$1;
(statearr_31148_31233[(1)] = (30));

} else {
var statearr_31149_31234 = state_31141__$1;
(statearr_31149_31234[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (1))){
var state_31141__$1 = state_31141;
var statearr_31150_31235 = state_31141__$1;
(statearr_31150_31235[(2)] = null);

(statearr_31150_31235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (24))){
var inst_31040 = (state_31141[(7)]);
var inst_31059 = (state_31141[(2)]);
var inst_31060 = cljs.core.next.call(null,inst_31040);
var inst_31018 = inst_31060;
var inst_31019 = null;
var inst_31020 = (0);
var inst_31021 = (0);
var state_31141__$1 = (function (){var statearr_31151 = state_31141;
(statearr_31151[(13)] = inst_31018);

(statearr_31151[(14)] = inst_31021);

(statearr_31151[(15)] = inst_31059);

(statearr_31151[(16)] = inst_31020);

(statearr_31151[(17)] = inst_31019);

return statearr_31151;
})();
var statearr_31152_31236 = state_31141__$1;
(statearr_31152_31236[(2)] = null);

(statearr_31152_31236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (39))){
var state_31141__$1 = state_31141;
var statearr_31156_31237 = state_31141__$1;
(statearr_31156_31237[(2)] = null);

(statearr_31156_31237[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (4))){
var inst_31009 = (state_31141[(12)]);
var inst_31009__$1 = (state_31141[(2)]);
var inst_31010 = (inst_31009__$1 == null);
var state_31141__$1 = (function (){var statearr_31157 = state_31141;
(statearr_31157[(12)] = inst_31009__$1);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31010)){
var statearr_31158_31238 = state_31141__$1;
(statearr_31158_31238[(1)] = (5));

} else {
var statearr_31159_31239 = state_31141__$1;
(statearr_31159_31239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (15))){
var inst_31018 = (state_31141[(13)]);
var inst_31021 = (state_31141[(14)]);
var inst_31020 = (state_31141[(16)]);
var inst_31019 = (state_31141[(17)]);
var inst_31036 = (state_31141[(2)]);
var inst_31037 = (inst_31021 + (1));
var tmp31153 = inst_31018;
var tmp31154 = inst_31020;
var tmp31155 = inst_31019;
var inst_31018__$1 = tmp31153;
var inst_31019__$1 = tmp31155;
var inst_31020__$1 = tmp31154;
var inst_31021__$1 = inst_31037;
var state_31141__$1 = (function (){var statearr_31160 = state_31141;
(statearr_31160[(13)] = inst_31018__$1);

(statearr_31160[(14)] = inst_31021__$1);

(statearr_31160[(18)] = inst_31036);

(statearr_31160[(16)] = inst_31020__$1);

(statearr_31160[(17)] = inst_31019__$1);

return statearr_31160;
})();
var statearr_31161_31240 = state_31141__$1;
(statearr_31161_31240[(2)] = null);

(statearr_31161_31240[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (21))){
var inst_31063 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31165_31241 = state_31141__$1;
(statearr_31165_31241[(2)] = inst_31063);

(statearr_31165_31241[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (31))){
var inst_31089 = (state_31141[(10)]);
var inst_31093 = done.call(null,null);
var inst_31094 = cljs.core.async.untap_STAR_.call(null,m,inst_31089);
var state_31141__$1 = (function (){var statearr_31166 = state_31141;
(statearr_31166[(19)] = inst_31093);

return statearr_31166;
})();
var statearr_31167_31242 = state_31141__$1;
(statearr_31167_31242[(2)] = inst_31094);

(statearr_31167_31242[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (32))){
var inst_31081 = (state_31141[(20)]);
var inst_31083 = (state_31141[(21)]);
var inst_31084 = (state_31141[(9)]);
var inst_31082 = (state_31141[(11)]);
var inst_31096 = (state_31141[(2)]);
var inst_31097 = (inst_31084 + (1));
var tmp31162 = inst_31081;
var tmp31163 = inst_31083;
var tmp31164 = inst_31082;
var inst_31081__$1 = tmp31162;
var inst_31082__$1 = tmp31164;
var inst_31083__$1 = tmp31163;
var inst_31084__$1 = inst_31097;
var state_31141__$1 = (function (){var statearr_31168 = state_31141;
(statearr_31168[(20)] = inst_31081__$1);

(statearr_31168[(21)] = inst_31083__$1);

(statearr_31168[(9)] = inst_31084__$1);

(statearr_31168[(22)] = inst_31096);

(statearr_31168[(11)] = inst_31082__$1);

return statearr_31168;
})();
var statearr_31169_31243 = state_31141__$1;
(statearr_31169_31243[(2)] = null);

(statearr_31169_31243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (40))){
var inst_31109 = (state_31141[(23)]);
var inst_31113 = done.call(null,null);
var inst_31114 = cljs.core.async.untap_STAR_.call(null,m,inst_31109);
var state_31141__$1 = (function (){var statearr_31170 = state_31141;
(statearr_31170[(24)] = inst_31113);

return statearr_31170;
})();
var statearr_31171_31244 = state_31141__$1;
(statearr_31171_31244[(2)] = inst_31114);

(statearr_31171_31244[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (33))){
var inst_31100 = (state_31141[(25)]);
var inst_31102 = cljs.core.chunked_seq_QMARK_.call(null,inst_31100);
var state_31141__$1 = state_31141;
if(inst_31102){
var statearr_31172_31245 = state_31141__$1;
(statearr_31172_31245[(1)] = (36));

} else {
var statearr_31173_31246 = state_31141__$1;
(statearr_31173_31246[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (13))){
var inst_31030 = (state_31141[(26)]);
var inst_31033 = cljs.core.async.close_BANG_.call(null,inst_31030);
var state_31141__$1 = state_31141;
var statearr_31174_31247 = state_31141__$1;
(statearr_31174_31247[(2)] = inst_31033);

(statearr_31174_31247[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (22))){
var inst_31053 = (state_31141[(8)]);
var inst_31056 = cljs.core.async.close_BANG_.call(null,inst_31053);
var state_31141__$1 = state_31141;
var statearr_31175_31248 = state_31141__$1;
(statearr_31175_31248[(2)] = inst_31056);

(statearr_31175_31248[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (36))){
var inst_31100 = (state_31141[(25)]);
var inst_31104 = cljs.core.chunk_first.call(null,inst_31100);
var inst_31105 = cljs.core.chunk_rest.call(null,inst_31100);
var inst_31106 = cljs.core.count.call(null,inst_31104);
var inst_31081 = inst_31105;
var inst_31082 = inst_31104;
var inst_31083 = inst_31106;
var inst_31084 = (0);
var state_31141__$1 = (function (){var statearr_31176 = state_31141;
(statearr_31176[(20)] = inst_31081);

(statearr_31176[(21)] = inst_31083);

(statearr_31176[(9)] = inst_31084);

(statearr_31176[(11)] = inst_31082);

return statearr_31176;
})();
var statearr_31177_31249 = state_31141__$1;
(statearr_31177_31249[(2)] = null);

(statearr_31177_31249[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (41))){
var inst_31100 = (state_31141[(25)]);
var inst_31116 = (state_31141[(2)]);
var inst_31117 = cljs.core.next.call(null,inst_31100);
var inst_31081 = inst_31117;
var inst_31082 = null;
var inst_31083 = (0);
var inst_31084 = (0);
var state_31141__$1 = (function (){var statearr_31178 = state_31141;
(statearr_31178[(20)] = inst_31081);

(statearr_31178[(21)] = inst_31083);

(statearr_31178[(9)] = inst_31084);

(statearr_31178[(27)] = inst_31116);

(statearr_31178[(11)] = inst_31082);

return statearr_31178;
})();
var statearr_31179_31250 = state_31141__$1;
(statearr_31179_31250[(2)] = null);

(statearr_31179_31250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (43))){
var state_31141__$1 = state_31141;
var statearr_31180_31251 = state_31141__$1;
(statearr_31180_31251[(2)] = null);

(statearr_31180_31251[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (29))){
var inst_31125 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31181_31252 = state_31141__$1;
(statearr_31181_31252[(2)] = inst_31125);

(statearr_31181_31252[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (44))){
var inst_31134 = (state_31141[(2)]);
var state_31141__$1 = (function (){var statearr_31182 = state_31141;
(statearr_31182[(28)] = inst_31134);

return statearr_31182;
})();
var statearr_31183_31253 = state_31141__$1;
(statearr_31183_31253[(2)] = null);

(statearr_31183_31253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (6))){
var inst_31073 = (state_31141[(29)]);
var inst_31072 = cljs.core.deref.call(null,cs);
var inst_31073__$1 = cljs.core.keys.call(null,inst_31072);
var inst_31074 = cljs.core.count.call(null,inst_31073__$1);
var inst_31075 = cljs.core.reset_BANG_.call(null,dctr,inst_31074);
var inst_31080 = cljs.core.seq.call(null,inst_31073__$1);
var inst_31081 = inst_31080;
var inst_31082 = null;
var inst_31083 = (0);
var inst_31084 = (0);
var state_31141__$1 = (function (){var statearr_31184 = state_31141;
(statearr_31184[(20)] = inst_31081);

(statearr_31184[(21)] = inst_31083);

(statearr_31184[(9)] = inst_31084);

(statearr_31184[(29)] = inst_31073__$1);

(statearr_31184[(30)] = inst_31075);

(statearr_31184[(11)] = inst_31082);

return statearr_31184;
})();
var statearr_31185_31254 = state_31141__$1;
(statearr_31185_31254[(2)] = null);

(statearr_31185_31254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (28))){
var inst_31081 = (state_31141[(20)]);
var inst_31100 = (state_31141[(25)]);
var inst_31100__$1 = cljs.core.seq.call(null,inst_31081);
var state_31141__$1 = (function (){var statearr_31186 = state_31141;
(statearr_31186[(25)] = inst_31100__$1);

return statearr_31186;
})();
if(inst_31100__$1){
var statearr_31187_31255 = state_31141__$1;
(statearr_31187_31255[(1)] = (33));

} else {
var statearr_31188_31256 = state_31141__$1;
(statearr_31188_31256[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (25))){
var inst_31083 = (state_31141[(21)]);
var inst_31084 = (state_31141[(9)]);
var inst_31086 = (inst_31084 < inst_31083);
var inst_31087 = inst_31086;
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31087)){
var statearr_31189_31257 = state_31141__$1;
(statearr_31189_31257[(1)] = (27));

} else {
var statearr_31190_31258 = state_31141__$1;
(statearr_31190_31258[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (34))){
var state_31141__$1 = state_31141;
var statearr_31191_31259 = state_31141__$1;
(statearr_31191_31259[(2)] = null);

(statearr_31191_31259[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (17))){
var state_31141__$1 = state_31141;
var statearr_31192_31260 = state_31141__$1;
(statearr_31192_31260[(2)] = null);

(statearr_31192_31260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (3))){
var inst_31139 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31141__$1,inst_31139);
} else {
if((state_val_31142 === (12))){
var inst_31068 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31193_31261 = state_31141__$1;
(statearr_31193_31261[(2)] = inst_31068);

(statearr_31193_31261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (2))){
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31141__$1,(4),ch);
} else {
if((state_val_31142 === (23))){
var state_31141__$1 = state_31141;
var statearr_31194_31262 = state_31141__$1;
(statearr_31194_31262[(2)] = null);

(statearr_31194_31262[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (35))){
var inst_31123 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31195_31263 = state_31141__$1;
(statearr_31195_31263[(2)] = inst_31123);

(statearr_31195_31263[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (19))){
var inst_31040 = (state_31141[(7)]);
var inst_31044 = cljs.core.chunk_first.call(null,inst_31040);
var inst_31045 = cljs.core.chunk_rest.call(null,inst_31040);
var inst_31046 = cljs.core.count.call(null,inst_31044);
var inst_31018 = inst_31045;
var inst_31019 = inst_31044;
var inst_31020 = inst_31046;
var inst_31021 = (0);
var state_31141__$1 = (function (){var statearr_31196 = state_31141;
(statearr_31196[(13)] = inst_31018);

(statearr_31196[(14)] = inst_31021);

(statearr_31196[(16)] = inst_31020);

(statearr_31196[(17)] = inst_31019);

return statearr_31196;
})();
var statearr_31197_31264 = state_31141__$1;
(statearr_31197_31264[(2)] = null);

(statearr_31197_31264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (11))){
var inst_31018 = (state_31141[(13)]);
var inst_31040 = (state_31141[(7)]);
var inst_31040__$1 = cljs.core.seq.call(null,inst_31018);
var state_31141__$1 = (function (){var statearr_31198 = state_31141;
(statearr_31198[(7)] = inst_31040__$1);

return statearr_31198;
})();
if(inst_31040__$1){
var statearr_31199_31265 = state_31141__$1;
(statearr_31199_31265[(1)] = (16));

} else {
var statearr_31200_31266 = state_31141__$1;
(statearr_31200_31266[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (9))){
var inst_31070 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31201_31267 = state_31141__$1;
(statearr_31201_31267[(2)] = inst_31070);

(statearr_31201_31267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (5))){
var inst_31016 = cljs.core.deref.call(null,cs);
var inst_31017 = cljs.core.seq.call(null,inst_31016);
var inst_31018 = inst_31017;
var inst_31019 = null;
var inst_31020 = (0);
var inst_31021 = (0);
var state_31141__$1 = (function (){var statearr_31202 = state_31141;
(statearr_31202[(13)] = inst_31018);

(statearr_31202[(14)] = inst_31021);

(statearr_31202[(16)] = inst_31020);

(statearr_31202[(17)] = inst_31019);

return statearr_31202;
})();
var statearr_31203_31268 = state_31141__$1;
(statearr_31203_31268[(2)] = null);

(statearr_31203_31268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (14))){
var state_31141__$1 = state_31141;
var statearr_31204_31269 = state_31141__$1;
(statearr_31204_31269[(2)] = null);

(statearr_31204_31269[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (45))){
var inst_31131 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31205_31270 = state_31141__$1;
(statearr_31205_31270[(2)] = inst_31131);

(statearr_31205_31270[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (26))){
var inst_31073 = (state_31141[(29)]);
var inst_31127 = (state_31141[(2)]);
var inst_31128 = cljs.core.seq.call(null,inst_31073);
var state_31141__$1 = (function (){var statearr_31206 = state_31141;
(statearr_31206[(31)] = inst_31127);

return statearr_31206;
})();
if(inst_31128){
var statearr_31207_31271 = state_31141__$1;
(statearr_31207_31271[(1)] = (42));

} else {
var statearr_31208_31272 = state_31141__$1;
(statearr_31208_31272[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (16))){
var inst_31040 = (state_31141[(7)]);
var inst_31042 = cljs.core.chunked_seq_QMARK_.call(null,inst_31040);
var state_31141__$1 = state_31141;
if(inst_31042){
var statearr_31209_31273 = state_31141__$1;
(statearr_31209_31273[(1)] = (19));

} else {
var statearr_31210_31274 = state_31141__$1;
(statearr_31210_31274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (38))){
var inst_31120 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31211_31275 = state_31141__$1;
(statearr_31211_31275[(2)] = inst_31120);

(statearr_31211_31275[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (30))){
var state_31141__$1 = state_31141;
var statearr_31212_31276 = state_31141__$1;
(statearr_31212_31276[(2)] = null);

(statearr_31212_31276[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (10))){
var inst_31021 = (state_31141[(14)]);
var inst_31019 = (state_31141[(17)]);
var inst_31029 = cljs.core._nth.call(null,inst_31019,inst_31021);
var inst_31030 = cljs.core.nth.call(null,inst_31029,(0),null);
var inst_31031 = cljs.core.nth.call(null,inst_31029,(1),null);
var state_31141__$1 = (function (){var statearr_31213 = state_31141;
(statearr_31213[(26)] = inst_31030);

return statearr_31213;
})();
if(cljs.core.truth_(inst_31031)){
var statearr_31214_31277 = state_31141__$1;
(statearr_31214_31277[(1)] = (13));

} else {
var statearr_31215_31278 = state_31141__$1;
(statearr_31215_31278[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (18))){
var inst_31066 = (state_31141[(2)]);
var state_31141__$1 = state_31141;
var statearr_31216_31279 = state_31141__$1;
(statearr_31216_31279[(2)] = inst_31066);

(statearr_31216_31279[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (42))){
var state_31141__$1 = state_31141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31141__$1,(45),dchan);
} else {
if((state_val_31142 === (37))){
var inst_31109 = (state_31141[(23)]);
var inst_31100 = (state_31141[(25)]);
var inst_31009 = (state_31141[(12)]);
var inst_31109__$1 = cljs.core.first.call(null,inst_31100);
var inst_31110 = cljs.core.async.put_BANG_.call(null,inst_31109__$1,inst_31009,done);
var state_31141__$1 = (function (){var statearr_31217 = state_31141;
(statearr_31217[(23)] = inst_31109__$1);

return statearr_31217;
})();
if(cljs.core.truth_(inst_31110)){
var statearr_31218_31280 = state_31141__$1;
(statearr_31218_31280[(1)] = (39));

} else {
var statearr_31219_31281 = state_31141__$1;
(statearr_31219_31281[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31142 === (8))){
var inst_31021 = (state_31141[(14)]);
var inst_31020 = (state_31141[(16)]);
var inst_31023 = (inst_31021 < inst_31020);
var inst_31024 = inst_31023;
var state_31141__$1 = state_31141;
if(cljs.core.truth_(inst_31024)){
var statearr_31220_31282 = state_31141__$1;
(statearr_31220_31282[(1)] = (10));

} else {
var statearr_31221_31283 = state_31141__$1;
(statearr_31221_31283[(1)] = (11));

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
});})(c__29906__auto___31229,cs,m,dchan,dctr,done))
;
return ((function (switch__29794__auto__,c__29906__auto___31229,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29795__auto__ = null;
var cljs$core$async$mult_$_state_machine__29795__auto____0 = (function (){
var statearr_31225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31225[(0)] = cljs$core$async$mult_$_state_machine__29795__auto__);

(statearr_31225[(1)] = (1));

return statearr_31225;
});
var cljs$core$async$mult_$_state_machine__29795__auto____1 = (function (state_31141){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_31141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e31226){if((e31226 instanceof Object)){
var ex__29798__auto__ = e31226;
var statearr_31227_31284 = state_31141;
(statearr_31227_31284[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31285 = state_31141;
state_31141 = G__31285;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29795__auto__ = function(state_31141){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29795__auto____1.call(this,state_31141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29795__auto____0;
cljs$core$async$mult_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29795__auto____1;
return cljs$core$async$mult_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___31229,cs,m,dchan,dctr,done))
})();
var state__29908__auto__ = (function (){var statearr_31228 = f__29907__auto__.call(null);
(statearr_31228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___31229);

return statearr_31228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___31229,cs,m,dchan,dctr,done))
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
var args31286 = [];
var len__25909__auto___31289 = arguments.length;
var i__25910__auto___31290 = (0);
while(true){
if((i__25910__auto___31290 < len__25909__auto___31289)){
args31286.push((arguments[i__25910__auto___31290]));

var G__31291 = (i__25910__auto___31290 + (1));
i__25910__auto___31290 = G__31291;
continue;
} else {
}
break;
}

var G__31288 = args31286.length;
switch (G__31288) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31286.length)].join('')));

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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch);
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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,ch);
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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m);
} else {
var m__25498__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m);
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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,state_map);
} else {
var m__25498__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,state_map);
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
var x__25497__auto__ = (((m == null))?null:m);
var m__25498__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,m,mode);
} else {
var m__25498__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___31303 = arguments.length;
var i__25910__auto___31304 = (0);
while(true){
if((i__25910__auto___31304 < len__25909__auto___31303)){
args__25916__auto__.push((arguments[i__25910__auto___31304]));

var G__31305 = (i__25910__auto___31304 + (1));
i__25910__auto___31304 = G__31305;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((3) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25917__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31297){
var map__31298 = p__31297;
var map__31298__$1 = ((((!((map__31298 == null)))?((((map__31298.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31298.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31298):map__31298);
var opts = map__31298__$1;
var statearr_31300_31306 = state;
(statearr_31300_31306[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31298,map__31298__$1,opts){
return (function (val){
var statearr_31301_31307 = state;
(statearr_31301_31307[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31298,map__31298__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31302_31308 = state;
(statearr_31302_31308[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31293){
var G__31294 = cljs.core.first.call(null,seq31293);
var seq31293__$1 = cljs.core.next.call(null,seq31293);
var G__31295 = cljs.core.first.call(null,seq31293__$1);
var seq31293__$2 = cljs.core.next.call(null,seq31293__$1);
var G__31296 = cljs.core.first.call(null,seq31293__$2);
var seq31293__$3 = cljs.core.next.call(null,seq31293__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31294,G__31295,G__31296,seq31293__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31474 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31475){
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
this.meta31475 = meta31475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31476,meta31475__$1){
var self__ = this;
var _31476__$1 = this;
return (new cljs.core.async.t_cljs$core$async31474(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31475__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31476){
var self__ = this;
var _31476__$1 = this;
return self__.meta31475;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31474.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta31475","meta31475",923129970,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31474";

cljs.core.async.t_cljs$core$async31474.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async31474");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31474 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31474(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31475){
return (new cljs.core.async.t_cljs$core$async31474(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31475));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31474(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29906__auto___31639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___31639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___31639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31576){
var state_val_31577 = (state_31576[(1)]);
if((state_val_31577 === (7))){
var inst_31492 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31578_31640 = state_31576__$1;
(statearr_31578_31640[(2)] = inst_31492);

(statearr_31578_31640[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (20))){
var inst_31504 = (state_31576[(7)]);
var state_31576__$1 = state_31576;
var statearr_31579_31641 = state_31576__$1;
(statearr_31579_31641[(2)] = inst_31504);

(statearr_31579_31641[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (27))){
var state_31576__$1 = state_31576;
var statearr_31580_31642 = state_31576__$1;
(statearr_31580_31642[(2)] = null);

(statearr_31580_31642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (1))){
var inst_31480 = (state_31576[(8)]);
var inst_31480__$1 = calc_state.call(null);
var inst_31482 = (inst_31480__$1 == null);
var inst_31483 = cljs.core.not.call(null,inst_31482);
var state_31576__$1 = (function (){var statearr_31581 = state_31576;
(statearr_31581[(8)] = inst_31480__$1);

return statearr_31581;
})();
if(inst_31483){
var statearr_31582_31643 = state_31576__$1;
(statearr_31582_31643[(1)] = (2));

} else {
var statearr_31583_31644 = state_31576__$1;
(statearr_31583_31644[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (24))){
var inst_31527 = (state_31576[(9)]);
var inst_31550 = (state_31576[(10)]);
var inst_31536 = (state_31576[(11)]);
var inst_31550__$1 = inst_31527.call(null,inst_31536);
var state_31576__$1 = (function (){var statearr_31584 = state_31576;
(statearr_31584[(10)] = inst_31550__$1);

return statearr_31584;
})();
if(cljs.core.truth_(inst_31550__$1)){
var statearr_31585_31645 = state_31576__$1;
(statearr_31585_31645[(1)] = (29));

} else {
var statearr_31586_31646 = state_31576__$1;
(statearr_31586_31646[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (4))){
var inst_31495 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31495)){
var statearr_31587_31647 = state_31576__$1;
(statearr_31587_31647[(1)] = (8));

} else {
var statearr_31588_31648 = state_31576__$1;
(statearr_31588_31648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (15))){
var inst_31521 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31521)){
var statearr_31589_31649 = state_31576__$1;
(statearr_31589_31649[(1)] = (19));

} else {
var statearr_31590_31650 = state_31576__$1;
(statearr_31590_31650[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (21))){
var inst_31526 = (state_31576[(12)]);
var inst_31526__$1 = (state_31576[(2)]);
var inst_31527 = cljs.core.get.call(null,inst_31526__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31528 = cljs.core.get.call(null,inst_31526__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31529 = cljs.core.get.call(null,inst_31526__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31576__$1 = (function (){var statearr_31591 = state_31576;
(statearr_31591[(13)] = inst_31528);

(statearr_31591[(9)] = inst_31527);

(statearr_31591[(12)] = inst_31526__$1);

return statearr_31591;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31576__$1,(22),inst_31529);
} else {
if((state_val_31577 === (31))){
var inst_31558 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31558)){
var statearr_31592_31651 = state_31576__$1;
(statearr_31592_31651[(1)] = (32));

} else {
var statearr_31593_31652 = state_31576__$1;
(statearr_31593_31652[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (32))){
var inst_31535 = (state_31576[(14)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31576__$1,(35),out,inst_31535);
} else {
if((state_val_31577 === (33))){
var inst_31526 = (state_31576[(12)]);
var inst_31504 = inst_31526;
var state_31576__$1 = (function (){var statearr_31594 = state_31576;
(statearr_31594[(7)] = inst_31504);

return statearr_31594;
})();
var statearr_31595_31653 = state_31576__$1;
(statearr_31595_31653[(2)] = null);

(statearr_31595_31653[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (13))){
var inst_31504 = (state_31576[(7)]);
var inst_31511 = inst_31504.cljs$lang$protocol_mask$partition0$;
var inst_31512 = (inst_31511 & (64));
var inst_31513 = inst_31504.cljs$core$ISeq$;
var inst_31514 = (inst_31512) || (inst_31513);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31514)){
var statearr_31596_31654 = state_31576__$1;
(statearr_31596_31654[(1)] = (16));

} else {
var statearr_31597_31655 = state_31576__$1;
(statearr_31597_31655[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (22))){
var inst_31535 = (state_31576[(14)]);
var inst_31536 = (state_31576[(11)]);
var inst_31534 = (state_31576[(2)]);
var inst_31535__$1 = cljs.core.nth.call(null,inst_31534,(0),null);
var inst_31536__$1 = cljs.core.nth.call(null,inst_31534,(1),null);
var inst_31537 = (inst_31535__$1 == null);
var inst_31538 = cljs.core._EQ_.call(null,inst_31536__$1,change);
var inst_31539 = (inst_31537) || (inst_31538);
var state_31576__$1 = (function (){var statearr_31598 = state_31576;
(statearr_31598[(14)] = inst_31535__$1);

(statearr_31598[(11)] = inst_31536__$1);

return statearr_31598;
})();
if(cljs.core.truth_(inst_31539)){
var statearr_31599_31656 = state_31576__$1;
(statearr_31599_31656[(1)] = (23));

} else {
var statearr_31600_31657 = state_31576__$1;
(statearr_31600_31657[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (36))){
var inst_31526 = (state_31576[(12)]);
var inst_31504 = inst_31526;
var state_31576__$1 = (function (){var statearr_31601 = state_31576;
(statearr_31601[(7)] = inst_31504);

return statearr_31601;
})();
var statearr_31602_31658 = state_31576__$1;
(statearr_31602_31658[(2)] = null);

(statearr_31602_31658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (29))){
var inst_31550 = (state_31576[(10)]);
var state_31576__$1 = state_31576;
var statearr_31603_31659 = state_31576__$1;
(statearr_31603_31659[(2)] = inst_31550);

(statearr_31603_31659[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (6))){
var state_31576__$1 = state_31576;
var statearr_31604_31660 = state_31576__$1;
(statearr_31604_31660[(2)] = false);

(statearr_31604_31660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (28))){
var inst_31546 = (state_31576[(2)]);
var inst_31547 = calc_state.call(null);
var inst_31504 = inst_31547;
var state_31576__$1 = (function (){var statearr_31605 = state_31576;
(statearr_31605[(15)] = inst_31546);

(statearr_31605[(7)] = inst_31504);

return statearr_31605;
})();
var statearr_31606_31661 = state_31576__$1;
(statearr_31606_31661[(2)] = null);

(statearr_31606_31661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (25))){
var inst_31572 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31607_31662 = state_31576__$1;
(statearr_31607_31662[(2)] = inst_31572);

(statearr_31607_31662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (34))){
var inst_31570 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31608_31663 = state_31576__$1;
(statearr_31608_31663[(2)] = inst_31570);

(statearr_31608_31663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (17))){
var state_31576__$1 = state_31576;
var statearr_31609_31664 = state_31576__$1;
(statearr_31609_31664[(2)] = false);

(statearr_31609_31664[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (3))){
var state_31576__$1 = state_31576;
var statearr_31610_31665 = state_31576__$1;
(statearr_31610_31665[(2)] = false);

(statearr_31610_31665[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (12))){
var inst_31574 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31576__$1,inst_31574);
} else {
if((state_val_31577 === (2))){
var inst_31480 = (state_31576[(8)]);
var inst_31485 = inst_31480.cljs$lang$protocol_mask$partition0$;
var inst_31486 = (inst_31485 & (64));
var inst_31487 = inst_31480.cljs$core$ISeq$;
var inst_31488 = (inst_31486) || (inst_31487);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31488)){
var statearr_31611_31666 = state_31576__$1;
(statearr_31611_31666[(1)] = (5));

} else {
var statearr_31612_31667 = state_31576__$1;
(statearr_31612_31667[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (23))){
var inst_31535 = (state_31576[(14)]);
var inst_31541 = (inst_31535 == null);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31541)){
var statearr_31613_31668 = state_31576__$1;
(statearr_31613_31668[(1)] = (26));

} else {
var statearr_31614_31669 = state_31576__$1;
(statearr_31614_31669[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (35))){
var inst_31561 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
if(cljs.core.truth_(inst_31561)){
var statearr_31615_31670 = state_31576__$1;
(statearr_31615_31670[(1)] = (36));

} else {
var statearr_31616_31671 = state_31576__$1;
(statearr_31616_31671[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (19))){
var inst_31504 = (state_31576[(7)]);
var inst_31523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31504);
var state_31576__$1 = state_31576;
var statearr_31617_31672 = state_31576__$1;
(statearr_31617_31672[(2)] = inst_31523);

(statearr_31617_31672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (11))){
var inst_31504 = (state_31576[(7)]);
var inst_31508 = (inst_31504 == null);
var inst_31509 = cljs.core.not.call(null,inst_31508);
var state_31576__$1 = state_31576;
if(inst_31509){
var statearr_31618_31673 = state_31576__$1;
(statearr_31618_31673[(1)] = (13));

} else {
var statearr_31619_31674 = state_31576__$1;
(statearr_31619_31674[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (9))){
var inst_31480 = (state_31576[(8)]);
var state_31576__$1 = state_31576;
var statearr_31620_31675 = state_31576__$1;
(statearr_31620_31675[(2)] = inst_31480);

(statearr_31620_31675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (5))){
var state_31576__$1 = state_31576;
var statearr_31621_31676 = state_31576__$1;
(statearr_31621_31676[(2)] = true);

(statearr_31621_31676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (14))){
var state_31576__$1 = state_31576;
var statearr_31622_31677 = state_31576__$1;
(statearr_31622_31677[(2)] = false);

(statearr_31622_31677[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (26))){
var inst_31536 = (state_31576[(11)]);
var inst_31543 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31536);
var state_31576__$1 = state_31576;
var statearr_31623_31678 = state_31576__$1;
(statearr_31623_31678[(2)] = inst_31543);

(statearr_31623_31678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (16))){
var state_31576__$1 = state_31576;
var statearr_31624_31679 = state_31576__$1;
(statearr_31624_31679[(2)] = true);

(statearr_31624_31679[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (38))){
var inst_31566 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31625_31680 = state_31576__$1;
(statearr_31625_31680[(2)] = inst_31566);

(statearr_31625_31680[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (30))){
var inst_31528 = (state_31576[(13)]);
var inst_31527 = (state_31576[(9)]);
var inst_31536 = (state_31576[(11)]);
var inst_31553 = cljs.core.empty_QMARK_.call(null,inst_31527);
var inst_31554 = inst_31528.call(null,inst_31536);
var inst_31555 = cljs.core.not.call(null,inst_31554);
var inst_31556 = (inst_31553) && (inst_31555);
var state_31576__$1 = state_31576;
var statearr_31626_31681 = state_31576__$1;
(statearr_31626_31681[(2)] = inst_31556);

(statearr_31626_31681[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (10))){
var inst_31480 = (state_31576[(8)]);
var inst_31500 = (state_31576[(2)]);
var inst_31501 = cljs.core.get.call(null,inst_31500,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31502 = cljs.core.get.call(null,inst_31500,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31503 = cljs.core.get.call(null,inst_31500,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31504 = inst_31480;
var state_31576__$1 = (function (){var statearr_31627 = state_31576;
(statearr_31627[(16)] = inst_31502);

(statearr_31627[(17)] = inst_31501);

(statearr_31627[(7)] = inst_31504);

(statearr_31627[(18)] = inst_31503);

return statearr_31627;
})();
var statearr_31628_31682 = state_31576__$1;
(statearr_31628_31682[(2)] = null);

(statearr_31628_31682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (18))){
var inst_31518 = (state_31576[(2)]);
var state_31576__$1 = state_31576;
var statearr_31629_31683 = state_31576__$1;
(statearr_31629_31683[(2)] = inst_31518);

(statearr_31629_31683[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (37))){
var state_31576__$1 = state_31576;
var statearr_31630_31684 = state_31576__$1;
(statearr_31630_31684[(2)] = null);

(statearr_31630_31684[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31577 === (8))){
var inst_31480 = (state_31576[(8)]);
var inst_31497 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31480);
var state_31576__$1 = state_31576;
var statearr_31631_31685 = state_31576__$1;
(statearr_31631_31685[(2)] = inst_31497);

(statearr_31631_31685[(1)] = (10));


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
});})(c__29906__auto___31639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29794__auto__,c__29906__auto___31639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29795__auto__ = null;
var cljs$core$async$mix_$_state_machine__29795__auto____0 = (function (){
var statearr_31635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31635[(0)] = cljs$core$async$mix_$_state_machine__29795__auto__);

(statearr_31635[(1)] = (1));

return statearr_31635;
});
var cljs$core$async$mix_$_state_machine__29795__auto____1 = (function (state_31576){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_31576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e31636){if((e31636 instanceof Object)){
var ex__29798__auto__ = e31636;
var statearr_31637_31686 = state_31576;
(statearr_31637_31686[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31687 = state_31576;
state_31576 = G__31687;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29795__auto__ = function(state_31576){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29795__auto____1.call(this,state_31576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29795__auto____0;
cljs$core$async$mix_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29795__auto____1;
return cljs$core$async$mix_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___31639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29908__auto__ = (function (){var statearr_31638 = f__29907__auto__.call(null);
(statearr_31638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___31639);

return statearr_31638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___31639,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25498__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p,v,ch);
} else {
var m__25498__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31688 = [];
var len__25909__auto___31691 = arguments.length;
var i__25910__auto___31692 = (0);
while(true){
if((i__25910__auto___31692 < len__25909__auto___31691)){
args31688.push((arguments[i__25910__auto___31692]));

var G__31693 = (i__25910__auto___31692 + (1));
i__25910__auto___31692 = G__31693;
continue;
} else {
}
break;
}

var G__31690 = args31688.length;
switch (G__31690) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31688.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p);
} else {
var m__25498__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p);
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
var x__25497__auto__ = (((p == null))?null:p);
var m__25498__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25497__auto__)]);
if(!((m__25498__auto__ == null))){
return m__25498__auto__.call(null,p,v);
} else {
var m__25498__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25498__auto____$1 == null))){
return m__25498__auto____$1.call(null,p,v);
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
var args31696 = [];
var len__25909__auto___31821 = arguments.length;
var i__25910__auto___31822 = (0);
while(true){
if((i__25910__auto___31822 < len__25909__auto___31821)){
args31696.push((arguments[i__25910__auto___31822]));

var G__31823 = (i__25910__auto___31822 + (1));
i__25910__auto___31822 = G__31823;
continue;
} else {
}
break;
}

var G__31698 = args31696.length;
switch (G__31698) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31696.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24834__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24834__auto__,mults){
return (function (p1__31695_SHARP_){
if(cljs.core.truth_(p1__31695_SHARP_.call(null,topic))){
return p1__31695_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31695_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24834__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31699 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31699 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31700){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31700 = meta31700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31701,meta31700__$1){
var self__ = this;
var _31701__$1 = this;
return (new cljs.core.async.t_cljs$core$async31699(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31700__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31701){
var self__ = this;
var _31701__$1 = this;
return self__.meta31700;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31699.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31700","meta31700",-499952588,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31699";

cljs.core.async.t_cljs$core$async31699.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async31699");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31699 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31699(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31700){
return (new cljs.core.async.t_cljs$core$async31699(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31700));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31699(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29906__auto___31825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___31825,mults,ensure_mult,p){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___31825,mults,ensure_mult,p){
return (function (state_31773){
var state_val_31774 = (state_31773[(1)]);
if((state_val_31774 === (7))){
var inst_31769 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31775_31826 = state_31773__$1;
(statearr_31775_31826[(2)] = inst_31769);

(statearr_31775_31826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (20))){
var state_31773__$1 = state_31773;
var statearr_31776_31827 = state_31773__$1;
(statearr_31776_31827[(2)] = null);

(statearr_31776_31827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (1))){
var state_31773__$1 = state_31773;
var statearr_31777_31828 = state_31773__$1;
(statearr_31777_31828[(2)] = null);

(statearr_31777_31828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (24))){
var inst_31752 = (state_31773[(7)]);
var inst_31761 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31752);
var state_31773__$1 = state_31773;
var statearr_31778_31829 = state_31773__$1;
(statearr_31778_31829[(2)] = inst_31761);

(statearr_31778_31829[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (4))){
var inst_31704 = (state_31773[(8)]);
var inst_31704__$1 = (state_31773[(2)]);
var inst_31705 = (inst_31704__$1 == null);
var state_31773__$1 = (function (){var statearr_31779 = state_31773;
(statearr_31779[(8)] = inst_31704__$1);

return statearr_31779;
})();
if(cljs.core.truth_(inst_31705)){
var statearr_31780_31830 = state_31773__$1;
(statearr_31780_31830[(1)] = (5));

} else {
var statearr_31781_31831 = state_31773__$1;
(statearr_31781_31831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (15))){
var inst_31746 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31782_31832 = state_31773__$1;
(statearr_31782_31832[(2)] = inst_31746);

(statearr_31782_31832[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (21))){
var inst_31766 = (state_31773[(2)]);
var state_31773__$1 = (function (){var statearr_31783 = state_31773;
(statearr_31783[(9)] = inst_31766);

return statearr_31783;
})();
var statearr_31784_31833 = state_31773__$1;
(statearr_31784_31833[(2)] = null);

(statearr_31784_31833[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (13))){
var inst_31728 = (state_31773[(10)]);
var inst_31730 = cljs.core.chunked_seq_QMARK_.call(null,inst_31728);
var state_31773__$1 = state_31773;
if(inst_31730){
var statearr_31785_31834 = state_31773__$1;
(statearr_31785_31834[(1)] = (16));

} else {
var statearr_31786_31835 = state_31773__$1;
(statearr_31786_31835[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (22))){
var inst_31758 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31758)){
var statearr_31787_31836 = state_31773__$1;
(statearr_31787_31836[(1)] = (23));

} else {
var statearr_31788_31837 = state_31773__$1;
(statearr_31788_31837[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (6))){
var inst_31752 = (state_31773[(7)]);
var inst_31704 = (state_31773[(8)]);
var inst_31754 = (state_31773[(11)]);
var inst_31752__$1 = topic_fn.call(null,inst_31704);
var inst_31753 = cljs.core.deref.call(null,mults);
var inst_31754__$1 = cljs.core.get.call(null,inst_31753,inst_31752__$1);
var state_31773__$1 = (function (){var statearr_31789 = state_31773;
(statearr_31789[(7)] = inst_31752__$1);

(statearr_31789[(11)] = inst_31754__$1);

return statearr_31789;
})();
if(cljs.core.truth_(inst_31754__$1)){
var statearr_31790_31838 = state_31773__$1;
(statearr_31790_31838[(1)] = (19));

} else {
var statearr_31791_31839 = state_31773__$1;
(statearr_31791_31839[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (25))){
var inst_31763 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31792_31840 = state_31773__$1;
(statearr_31792_31840[(2)] = inst_31763);

(statearr_31792_31840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (17))){
var inst_31728 = (state_31773[(10)]);
var inst_31737 = cljs.core.first.call(null,inst_31728);
var inst_31738 = cljs.core.async.muxch_STAR_.call(null,inst_31737);
var inst_31739 = cljs.core.async.close_BANG_.call(null,inst_31738);
var inst_31740 = cljs.core.next.call(null,inst_31728);
var inst_31714 = inst_31740;
var inst_31715 = null;
var inst_31716 = (0);
var inst_31717 = (0);
var state_31773__$1 = (function (){var statearr_31793 = state_31773;
(statearr_31793[(12)] = inst_31714);

(statearr_31793[(13)] = inst_31716);

(statearr_31793[(14)] = inst_31717);

(statearr_31793[(15)] = inst_31715);

(statearr_31793[(16)] = inst_31739);

return statearr_31793;
})();
var statearr_31794_31841 = state_31773__$1;
(statearr_31794_31841[(2)] = null);

(statearr_31794_31841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (3))){
var inst_31771 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31773__$1,inst_31771);
} else {
if((state_val_31774 === (12))){
var inst_31748 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31795_31842 = state_31773__$1;
(statearr_31795_31842[(2)] = inst_31748);

(statearr_31795_31842[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (2))){
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31773__$1,(4),ch);
} else {
if((state_val_31774 === (23))){
var state_31773__$1 = state_31773;
var statearr_31796_31843 = state_31773__$1;
(statearr_31796_31843[(2)] = null);

(statearr_31796_31843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (19))){
var inst_31704 = (state_31773[(8)]);
var inst_31754 = (state_31773[(11)]);
var inst_31756 = cljs.core.async.muxch_STAR_.call(null,inst_31754);
var state_31773__$1 = state_31773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31773__$1,(22),inst_31756,inst_31704);
} else {
if((state_val_31774 === (11))){
var inst_31714 = (state_31773[(12)]);
var inst_31728 = (state_31773[(10)]);
var inst_31728__$1 = cljs.core.seq.call(null,inst_31714);
var state_31773__$1 = (function (){var statearr_31797 = state_31773;
(statearr_31797[(10)] = inst_31728__$1);

return statearr_31797;
})();
if(inst_31728__$1){
var statearr_31798_31844 = state_31773__$1;
(statearr_31798_31844[(1)] = (13));

} else {
var statearr_31799_31845 = state_31773__$1;
(statearr_31799_31845[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (9))){
var inst_31750 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31800_31846 = state_31773__$1;
(statearr_31800_31846[(2)] = inst_31750);

(statearr_31800_31846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (5))){
var inst_31711 = cljs.core.deref.call(null,mults);
var inst_31712 = cljs.core.vals.call(null,inst_31711);
var inst_31713 = cljs.core.seq.call(null,inst_31712);
var inst_31714 = inst_31713;
var inst_31715 = null;
var inst_31716 = (0);
var inst_31717 = (0);
var state_31773__$1 = (function (){var statearr_31801 = state_31773;
(statearr_31801[(12)] = inst_31714);

(statearr_31801[(13)] = inst_31716);

(statearr_31801[(14)] = inst_31717);

(statearr_31801[(15)] = inst_31715);

return statearr_31801;
})();
var statearr_31802_31847 = state_31773__$1;
(statearr_31802_31847[(2)] = null);

(statearr_31802_31847[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (14))){
var state_31773__$1 = state_31773;
var statearr_31806_31848 = state_31773__$1;
(statearr_31806_31848[(2)] = null);

(statearr_31806_31848[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (16))){
var inst_31728 = (state_31773[(10)]);
var inst_31732 = cljs.core.chunk_first.call(null,inst_31728);
var inst_31733 = cljs.core.chunk_rest.call(null,inst_31728);
var inst_31734 = cljs.core.count.call(null,inst_31732);
var inst_31714 = inst_31733;
var inst_31715 = inst_31732;
var inst_31716 = inst_31734;
var inst_31717 = (0);
var state_31773__$1 = (function (){var statearr_31807 = state_31773;
(statearr_31807[(12)] = inst_31714);

(statearr_31807[(13)] = inst_31716);

(statearr_31807[(14)] = inst_31717);

(statearr_31807[(15)] = inst_31715);

return statearr_31807;
})();
var statearr_31808_31849 = state_31773__$1;
(statearr_31808_31849[(2)] = null);

(statearr_31808_31849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (10))){
var inst_31714 = (state_31773[(12)]);
var inst_31716 = (state_31773[(13)]);
var inst_31717 = (state_31773[(14)]);
var inst_31715 = (state_31773[(15)]);
var inst_31722 = cljs.core._nth.call(null,inst_31715,inst_31717);
var inst_31723 = cljs.core.async.muxch_STAR_.call(null,inst_31722);
var inst_31724 = cljs.core.async.close_BANG_.call(null,inst_31723);
var inst_31725 = (inst_31717 + (1));
var tmp31803 = inst_31714;
var tmp31804 = inst_31716;
var tmp31805 = inst_31715;
var inst_31714__$1 = tmp31803;
var inst_31715__$1 = tmp31805;
var inst_31716__$1 = tmp31804;
var inst_31717__$1 = inst_31725;
var state_31773__$1 = (function (){var statearr_31809 = state_31773;
(statearr_31809[(12)] = inst_31714__$1);

(statearr_31809[(13)] = inst_31716__$1);

(statearr_31809[(14)] = inst_31717__$1);

(statearr_31809[(15)] = inst_31715__$1);

(statearr_31809[(17)] = inst_31724);

return statearr_31809;
})();
var statearr_31810_31850 = state_31773__$1;
(statearr_31810_31850[(2)] = null);

(statearr_31810_31850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (18))){
var inst_31743 = (state_31773[(2)]);
var state_31773__$1 = state_31773;
var statearr_31811_31851 = state_31773__$1;
(statearr_31811_31851[(2)] = inst_31743);

(statearr_31811_31851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31774 === (8))){
var inst_31716 = (state_31773[(13)]);
var inst_31717 = (state_31773[(14)]);
var inst_31719 = (inst_31717 < inst_31716);
var inst_31720 = inst_31719;
var state_31773__$1 = state_31773;
if(cljs.core.truth_(inst_31720)){
var statearr_31812_31852 = state_31773__$1;
(statearr_31812_31852[(1)] = (10));

} else {
var statearr_31813_31853 = state_31773__$1;
(statearr_31813_31853[(1)] = (11));

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
});})(c__29906__auto___31825,mults,ensure_mult,p))
;
return ((function (switch__29794__auto__,c__29906__auto___31825,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_31817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31817[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_31817[(1)] = (1));

return statearr_31817;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_31773){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_31773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e31818){if((e31818 instanceof Object)){
var ex__29798__auto__ = e31818;
var statearr_31819_31854 = state_31773;
(statearr_31819_31854[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31855 = state_31773;
state_31773 = G__31855;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_31773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_31773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___31825,mults,ensure_mult,p))
})();
var state__29908__auto__ = (function (){var statearr_31820 = f__29907__auto__.call(null);
(statearr_31820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___31825);

return statearr_31820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___31825,mults,ensure_mult,p))
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
var args31856 = [];
var len__25909__auto___31859 = arguments.length;
var i__25910__auto___31860 = (0);
while(true){
if((i__25910__auto___31860 < len__25909__auto___31859)){
args31856.push((arguments[i__25910__auto___31860]));

var G__31861 = (i__25910__auto___31860 + (1));
i__25910__auto___31860 = G__31861;
continue;
} else {
}
break;
}

var G__31858 = args31856.length;
switch (G__31858) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31856.length)].join('')));

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
var args31863 = [];
var len__25909__auto___31866 = arguments.length;
var i__25910__auto___31867 = (0);
while(true){
if((i__25910__auto___31867 < len__25909__auto___31866)){
args31863.push((arguments[i__25910__auto___31867]));

var G__31868 = (i__25910__auto___31867 + (1));
i__25910__auto___31867 = G__31868;
continue;
} else {
}
break;
}

var G__31865 = args31863.length;
switch (G__31865) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31863.length)].join('')));

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
var args31870 = [];
var len__25909__auto___31941 = arguments.length;
var i__25910__auto___31942 = (0);
while(true){
if((i__25910__auto___31942 < len__25909__auto___31941)){
args31870.push((arguments[i__25910__auto___31942]));

var G__31943 = (i__25910__auto___31942 + (1));
i__25910__auto___31942 = G__31943;
continue;
} else {
}
break;
}

var G__31872 = args31870.length;
switch (G__31872) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31870.length)].join('')));

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
var c__29906__auto___31945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___31945,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___31945,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31911){
var state_val_31912 = (state_31911[(1)]);
if((state_val_31912 === (7))){
var state_31911__$1 = state_31911;
var statearr_31913_31946 = state_31911__$1;
(statearr_31913_31946[(2)] = null);

(statearr_31913_31946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (1))){
var state_31911__$1 = state_31911;
var statearr_31914_31947 = state_31911__$1;
(statearr_31914_31947[(2)] = null);

(statearr_31914_31947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (4))){
var inst_31875 = (state_31911[(7)]);
var inst_31877 = (inst_31875 < cnt);
var state_31911__$1 = state_31911;
if(cljs.core.truth_(inst_31877)){
var statearr_31915_31948 = state_31911__$1;
(statearr_31915_31948[(1)] = (6));

} else {
var statearr_31916_31949 = state_31911__$1;
(statearr_31916_31949[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (15))){
var inst_31907 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31917_31950 = state_31911__$1;
(statearr_31917_31950[(2)] = inst_31907);

(statearr_31917_31950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (13))){
var inst_31900 = cljs.core.async.close_BANG_.call(null,out);
var state_31911__$1 = state_31911;
var statearr_31918_31951 = state_31911__$1;
(statearr_31918_31951[(2)] = inst_31900);

(statearr_31918_31951[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (6))){
var state_31911__$1 = state_31911;
var statearr_31919_31952 = state_31911__$1;
(statearr_31919_31952[(2)] = null);

(statearr_31919_31952[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (3))){
var inst_31909 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31911__$1,inst_31909);
} else {
if((state_val_31912 === (12))){
var inst_31897 = (state_31911[(8)]);
var inst_31897__$1 = (state_31911[(2)]);
var inst_31898 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31897__$1);
var state_31911__$1 = (function (){var statearr_31920 = state_31911;
(statearr_31920[(8)] = inst_31897__$1);

return statearr_31920;
})();
if(cljs.core.truth_(inst_31898)){
var statearr_31921_31953 = state_31911__$1;
(statearr_31921_31953[(1)] = (13));

} else {
var statearr_31922_31954 = state_31911__$1;
(statearr_31922_31954[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (2))){
var inst_31874 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31875 = (0);
var state_31911__$1 = (function (){var statearr_31923 = state_31911;
(statearr_31923[(7)] = inst_31875);

(statearr_31923[(9)] = inst_31874);

return statearr_31923;
})();
var statearr_31924_31955 = state_31911__$1;
(statearr_31924_31955[(2)] = null);

(statearr_31924_31955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (11))){
var inst_31875 = (state_31911[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31911,(10),Object,null,(9));
var inst_31884 = chs__$1.call(null,inst_31875);
var inst_31885 = done.call(null,inst_31875);
var inst_31886 = cljs.core.async.take_BANG_.call(null,inst_31884,inst_31885);
var state_31911__$1 = state_31911;
var statearr_31925_31956 = state_31911__$1;
(statearr_31925_31956[(2)] = inst_31886);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (9))){
var inst_31875 = (state_31911[(7)]);
var inst_31888 = (state_31911[(2)]);
var inst_31889 = (inst_31875 + (1));
var inst_31875__$1 = inst_31889;
var state_31911__$1 = (function (){var statearr_31926 = state_31911;
(statearr_31926[(10)] = inst_31888);

(statearr_31926[(7)] = inst_31875__$1);

return statearr_31926;
})();
var statearr_31927_31957 = state_31911__$1;
(statearr_31927_31957[(2)] = null);

(statearr_31927_31957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (5))){
var inst_31895 = (state_31911[(2)]);
var state_31911__$1 = (function (){var statearr_31928 = state_31911;
(statearr_31928[(11)] = inst_31895);

return statearr_31928;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31911__$1,(12),dchan);
} else {
if((state_val_31912 === (14))){
var inst_31897 = (state_31911[(8)]);
var inst_31902 = cljs.core.apply.call(null,f,inst_31897);
var state_31911__$1 = state_31911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31911__$1,(16),out,inst_31902);
} else {
if((state_val_31912 === (16))){
var inst_31904 = (state_31911[(2)]);
var state_31911__$1 = (function (){var statearr_31929 = state_31911;
(statearr_31929[(12)] = inst_31904);

return statearr_31929;
})();
var statearr_31930_31958 = state_31911__$1;
(statearr_31930_31958[(2)] = null);

(statearr_31930_31958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (10))){
var inst_31879 = (state_31911[(2)]);
var inst_31880 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31911__$1 = (function (){var statearr_31931 = state_31911;
(statearr_31931[(13)] = inst_31879);

return statearr_31931;
})();
var statearr_31932_31959 = state_31911__$1;
(statearr_31932_31959[(2)] = inst_31880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31912 === (8))){
var inst_31893 = (state_31911[(2)]);
var state_31911__$1 = state_31911;
var statearr_31933_31960 = state_31911__$1;
(statearr_31933_31960[(2)] = inst_31893);

(statearr_31933_31960[(1)] = (5));


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
});})(c__29906__auto___31945,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29794__auto__,c__29906__auto___31945,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_31937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31937[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_31937[(1)] = (1));

return statearr_31937;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_31911){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_31911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e31938){if((e31938 instanceof Object)){
var ex__29798__auto__ = e31938;
var statearr_31939_31961 = state_31911;
(statearr_31939_31961[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31962 = state_31911;
state_31911 = G__31962;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_31911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_31911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___31945,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29908__auto__ = (function (){var statearr_31940 = f__29907__auto__.call(null);
(statearr_31940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___31945);

return statearr_31940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___31945,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args31964 = [];
var len__25909__auto___32022 = arguments.length;
var i__25910__auto___32023 = (0);
while(true){
if((i__25910__auto___32023 < len__25909__auto___32022)){
args31964.push((arguments[i__25910__auto___32023]));

var G__32024 = (i__25910__auto___32023 + (1));
i__25910__auto___32023 = G__32024;
continue;
} else {
}
break;
}

var G__31966 = args31964.length;
switch (G__31966) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31964.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29906__auto___32026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___32026,out){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___32026,out){
return (function (state_31998){
var state_val_31999 = (state_31998[(1)]);
if((state_val_31999 === (7))){
var inst_31977 = (state_31998[(7)]);
var inst_31978 = (state_31998[(8)]);
var inst_31977__$1 = (state_31998[(2)]);
var inst_31978__$1 = cljs.core.nth.call(null,inst_31977__$1,(0),null);
var inst_31979 = cljs.core.nth.call(null,inst_31977__$1,(1),null);
var inst_31980 = (inst_31978__$1 == null);
var state_31998__$1 = (function (){var statearr_32000 = state_31998;
(statearr_32000[(7)] = inst_31977__$1);

(statearr_32000[(9)] = inst_31979);

(statearr_32000[(8)] = inst_31978__$1);

return statearr_32000;
})();
if(cljs.core.truth_(inst_31980)){
var statearr_32001_32027 = state_31998__$1;
(statearr_32001_32027[(1)] = (8));

} else {
var statearr_32002_32028 = state_31998__$1;
(statearr_32002_32028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (1))){
var inst_31967 = cljs.core.vec.call(null,chs);
var inst_31968 = inst_31967;
var state_31998__$1 = (function (){var statearr_32003 = state_31998;
(statearr_32003[(10)] = inst_31968);

return statearr_32003;
})();
var statearr_32004_32029 = state_31998__$1;
(statearr_32004_32029[(2)] = null);

(statearr_32004_32029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (4))){
var inst_31968 = (state_31998[(10)]);
var state_31998__$1 = state_31998;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31998__$1,(7),inst_31968);
} else {
if((state_val_31999 === (6))){
var inst_31994 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32005_32030 = state_31998__$1;
(statearr_32005_32030[(2)] = inst_31994);

(statearr_32005_32030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (3))){
var inst_31996 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31998__$1,inst_31996);
} else {
if((state_val_31999 === (2))){
var inst_31968 = (state_31998[(10)]);
var inst_31970 = cljs.core.count.call(null,inst_31968);
var inst_31971 = (inst_31970 > (0));
var state_31998__$1 = state_31998;
if(cljs.core.truth_(inst_31971)){
var statearr_32007_32031 = state_31998__$1;
(statearr_32007_32031[(1)] = (4));

} else {
var statearr_32008_32032 = state_31998__$1;
(statearr_32008_32032[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (11))){
var inst_31968 = (state_31998[(10)]);
var inst_31987 = (state_31998[(2)]);
var tmp32006 = inst_31968;
var inst_31968__$1 = tmp32006;
var state_31998__$1 = (function (){var statearr_32009 = state_31998;
(statearr_32009[(11)] = inst_31987);

(statearr_32009[(10)] = inst_31968__$1);

return statearr_32009;
})();
var statearr_32010_32033 = state_31998__$1;
(statearr_32010_32033[(2)] = null);

(statearr_32010_32033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (9))){
var inst_31978 = (state_31998[(8)]);
var state_31998__$1 = state_31998;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31998__$1,(11),out,inst_31978);
} else {
if((state_val_31999 === (5))){
var inst_31992 = cljs.core.async.close_BANG_.call(null,out);
var state_31998__$1 = state_31998;
var statearr_32011_32034 = state_31998__$1;
(statearr_32011_32034[(2)] = inst_31992);

(statearr_32011_32034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (10))){
var inst_31990 = (state_31998[(2)]);
var state_31998__$1 = state_31998;
var statearr_32012_32035 = state_31998__$1;
(statearr_32012_32035[(2)] = inst_31990);

(statearr_32012_32035[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31999 === (8))){
var inst_31977 = (state_31998[(7)]);
var inst_31979 = (state_31998[(9)]);
var inst_31968 = (state_31998[(10)]);
var inst_31978 = (state_31998[(8)]);
var inst_31982 = (function (){var cs = inst_31968;
var vec__31973 = inst_31977;
var v = inst_31978;
var c = inst_31979;
return ((function (cs,vec__31973,v,c,inst_31977,inst_31979,inst_31968,inst_31978,state_val_31999,c__29906__auto___32026,out){
return (function (p1__31963_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31963_SHARP_);
});
;})(cs,vec__31973,v,c,inst_31977,inst_31979,inst_31968,inst_31978,state_val_31999,c__29906__auto___32026,out))
})();
var inst_31983 = cljs.core.filterv.call(null,inst_31982,inst_31968);
var inst_31968__$1 = inst_31983;
var state_31998__$1 = (function (){var statearr_32013 = state_31998;
(statearr_32013[(10)] = inst_31968__$1);

return statearr_32013;
})();
var statearr_32014_32036 = state_31998__$1;
(statearr_32014_32036[(2)] = null);

(statearr_32014_32036[(1)] = (2));


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
});})(c__29906__auto___32026,out))
;
return ((function (switch__29794__auto__,c__29906__auto___32026,out){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_32018 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32018[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_32018[(1)] = (1));

return statearr_32018;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_31998){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_31998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e32019){if((e32019 instanceof Object)){
var ex__29798__auto__ = e32019;
var statearr_32020_32037 = state_31998;
(statearr_32020_32037[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32038 = state_31998;
state_31998 = G__32038;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_31998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_31998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___32026,out))
})();
var state__29908__auto__ = (function (){var statearr_32021 = f__29907__auto__.call(null);
(statearr_32021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___32026);

return statearr_32021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___32026,out))
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
var args32039 = [];
var len__25909__auto___32088 = arguments.length;
var i__25910__auto___32089 = (0);
while(true){
if((i__25910__auto___32089 < len__25909__auto___32088)){
args32039.push((arguments[i__25910__auto___32089]));

var G__32090 = (i__25910__auto___32089 + (1));
i__25910__auto___32089 = G__32090;
continue;
} else {
}
break;
}

var G__32041 = args32039.length;
switch (G__32041) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32039.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29906__auto___32092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___32092,out){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___32092,out){
return (function (state_32065){
var state_val_32066 = (state_32065[(1)]);
if((state_val_32066 === (7))){
var inst_32047 = (state_32065[(7)]);
var inst_32047__$1 = (state_32065[(2)]);
var inst_32048 = (inst_32047__$1 == null);
var inst_32049 = cljs.core.not.call(null,inst_32048);
var state_32065__$1 = (function (){var statearr_32067 = state_32065;
(statearr_32067[(7)] = inst_32047__$1);

return statearr_32067;
})();
if(inst_32049){
var statearr_32068_32093 = state_32065__$1;
(statearr_32068_32093[(1)] = (8));

} else {
var statearr_32069_32094 = state_32065__$1;
(statearr_32069_32094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (1))){
var inst_32042 = (0);
var state_32065__$1 = (function (){var statearr_32070 = state_32065;
(statearr_32070[(8)] = inst_32042);

return statearr_32070;
})();
var statearr_32071_32095 = state_32065__$1;
(statearr_32071_32095[(2)] = null);

(statearr_32071_32095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (4))){
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32065__$1,(7),ch);
} else {
if((state_val_32066 === (6))){
var inst_32060 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32072_32096 = state_32065__$1;
(statearr_32072_32096[(2)] = inst_32060);

(statearr_32072_32096[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (3))){
var inst_32062 = (state_32065[(2)]);
var inst_32063 = cljs.core.async.close_BANG_.call(null,out);
var state_32065__$1 = (function (){var statearr_32073 = state_32065;
(statearr_32073[(9)] = inst_32062);

return statearr_32073;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32065__$1,inst_32063);
} else {
if((state_val_32066 === (2))){
var inst_32042 = (state_32065[(8)]);
var inst_32044 = (inst_32042 < n);
var state_32065__$1 = state_32065;
if(cljs.core.truth_(inst_32044)){
var statearr_32074_32097 = state_32065__$1;
(statearr_32074_32097[(1)] = (4));

} else {
var statearr_32075_32098 = state_32065__$1;
(statearr_32075_32098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (11))){
var inst_32042 = (state_32065[(8)]);
var inst_32052 = (state_32065[(2)]);
var inst_32053 = (inst_32042 + (1));
var inst_32042__$1 = inst_32053;
var state_32065__$1 = (function (){var statearr_32076 = state_32065;
(statearr_32076[(10)] = inst_32052);

(statearr_32076[(8)] = inst_32042__$1);

return statearr_32076;
})();
var statearr_32077_32099 = state_32065__$1;
(statearr_32077_32099[(2)] = null);

(statearr_32077_32099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (9))){
var state_32065__$1 = state_32065;
var statearr_32078_32100 = state_32065__$1;
(statearr_32078_32100[(2)] = null);

(statearr_32078_32100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (5))){
var state_32065__$1 = state_32065;
var statearr_32079_32101 = state_32065__$1;
(statearr_32079_32101[(2)] = null);

(statearr_32079_32101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (10))){
var inst_32057 = (state_32065[(2)]);
var state_32065__$1 = state_32065;
var statearr_32080_32102 = state_32065__$1;
(statearr_32080_32102[(2)] = inst_32057);

(statearr_32080_32102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32066 === (8))){
var inst_32047 = (state_32065[(7)]);
var state_32065__$1 = state_32065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32065__$1,(11),out,inst_32047);
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
});})(c__29906__auto___32092,out))
;
return ((function (switch__29794__auto__,c__29906__auto___32092,out){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_32084 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32084[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_32084[(1)] = (1));

return statearr_32084;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_32065){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_32065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e32085){if((e32085 instanceof Object)){
var ex__29798__auto__ = e32085;
var statearr_32086_32103 = state_32065;
(statearr_32086_32103[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32104 = state_32065;
state_32065 = G__32104;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_32065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_32065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___32092,out))
})();
var state__29908__auto__ = (function (){var statearr_32087 = f__29907__auto__.call(null);
(statearr_32087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___32092);

return statearr_32087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___32092,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32112 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32112 = (function (map_LT_,f,ch,meta32113){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32113 = meta32113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32114,meta32113__$1){
var self__ = this;
var _32114__$1 = this;
return (new cljs.core.async.t_cljs$core$async32112(self__.map_LT_,self__.f,self__.ch,meta32113__$1));
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32114){
var self__ = this;
var _32114__$1 = this;
return self__.meta32113;
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32115 = (function (map_LT_,f,ch,meta32113,_,fn1,meta32116){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta32113 = meta32113;
this._ = _;
this.fn1 = fn1;
this.meta32116 = meta32116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32117,meta32116__$1){
var self__ = this;
var _32117__$1 = this;
return (new cljs.core.async.t_cljs$core$async32115(self__.map_LT_,self__.f,self__.ch,self__.meta32113,self__._,self__.fn1,meta32116__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32117){
var self__ = this;
var _32117__$1 = this;
return self__.meta32116;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32115.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32105_SHARP_){
return f1.call(null,(((p1__32105_SHARP_ == null))?null:self__.f.call(null,p1__32105_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32115.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32113","meta32113",950322692,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32112","cljs.core.async/t_cljs$core$async32112",-1331791640,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32116","meta32116",1060671560,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32115";

cljs.core.async.t_cljs$core$async32115.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32115");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32115 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32115(map_LT___$1,f__$1,ch__$1,meta32113__$1,___$2,fn1__$1,meta32116){
return (new cljs.core.async.t_cljs$core$async32115(map_LT___$1,f__$1,ch__$1,meta32113__$1,___$2,fn1__$1,meta32116));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32115(self__.map_LT_,self__.f,self__.ch,self__.meta32113,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24822__auto__ = ret;
if(cljs.core.truth_(and__24822__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24822__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32112.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32113","meta32113",950322692,null)], null);
});

cljs.core.async.t_cljs$core$async32112.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32112";

cljs.core.async.t_cljs$core$async32112.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32112");
});

cljs.core.async.__GT_t_cljs$core$async32112 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32112(map_LT___$1,f__$1,ch__$1,meta32113){
return (new cljs.core.async.t_cljs$core$async32112(map_LT___$1,f__$1,ch__$1,meta32113));
});

}

return (new cljs.core.async.t_cljs$core$async32112(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32121 = (function (map_GT_,f,ch,meta32122){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta32122 = meta32122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32123,meta32122__$1){
var self__ = this;
var _32123__$1 = this;
return (new cljs.core.async.t_cljs$core$async32121(self__.map_GT_,self__.f,self__.ch,meta32122__$1));
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32123){
var self__ = this;
var _32123__$1 = this;
return self__.meta32122;
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32122","meta32122",-101084968,null)], null);
});

cljs.core.async.t_cljs$core$async32121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32121";

cljs.core.async.t_cljs$core$async32121.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32121");
});

cljs.core.async.__GT_t_cljs$core$async32121 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32121(map_GT___$1,f__$1,ch__$1,meta32122){
return (new cljs.core.async.t_cljs$core$async32121(map_GT___$1,f__$1,ch__$1,meta32122));
});

}

return (new cljs.core.async.t_cljs$core$async32121(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32127 = (function (filter_GT_,p,ch,meta32128){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta32128 = meta32128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32129,meta32128__$1){
var self__ = this;
var _32129__$1 = this;
return (new cljs.core.async.t_cljs$core$async32127(self__.filter_GT_,self__.p,self__.ch,meta32128__$1));
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32129){
var self__ = this;
var _32129__$1 = this;
return self__.meta32128;
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async32127.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32128","meta32128",-1895678342,null)], null);
});

cljs.core.async.t_cljs$core$async32127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32127";

cljs.core.async.t_cljs$core$async32127.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.core.async/t_cljs$core$async32127");
});

cljs.core.async.__GT_t_cljs$core$async32127 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32127(filter_GT___$1,p__$1,ch__$1,meta32128){
return (new cljs.core.async.t_cljs$core$async32127(filter_GT___$1,p__$1,ch__$1,meta32128));
});

}

return (new cljs.core.async.t_cljs$core$async32127(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32130 = [];
var len__25909__auto___32174 = arguments.length;
var i__25910__auto___32175 = (0);
while(true){
if((i__25910__auto___32175 < len__25909__auto___32174)){
args32130.push((arguments[i__25910__auto___32175]));

var G__32176 = (i__25910__auto___32175 + (1));
i__25910__auto___32175 = G__32176;
continue;
} else {
}
break;
}

var G__32132 = args32130.length;
switch (G__32132) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32130.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29906__auto___32178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___32178,out){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___32178,out){
return (function (state_32153){
var state_val_32154 = (state_32153[(1)]);
if((state_val_32154 === (7))){
var inst_32149 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32155_32179 = state_32153__$1;
(statearr_32155_32179[(2)] = inst_32149);

(statearr_32155_32179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (1))){
var state_32153__$1 = state_32153;
var statearr_32156_32180 = state_32153__$1;
(statearr_32156_32180[(2)] = null);

(statearr_32156_32180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (4))){
var inst_32135 = (state_32153[(7)]);
var inst_32135__$1 = (state_32153[(2)]);
var inst_32136 = (inst_32135__$1 == null);
var state_32153__$1 = (function (){var statearr_32157 = state_32153;
(statearr_32157[(7)] = inst_32135__$1);

return statearr_32157;
})();
if(cljs.core.truth_(inst_32136)){
var statearr_32158_32181 = state_32153__$1;
(statearr_32158_32181[(1)] = (5));

} else {
var statearr_32159_32182 = state_32153__$1;
(statearr_32159_32182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (6))){
var inst_32135 = (state_32153[(7)]);
var inst_32140 = p.call(null,inst_32135);
var state_32153__$1 = state_32153;
if(cljs.core.truth_(inst_32140)){
var statearr_32160_32183 = state_32153__$1;
(statearr_32160_32183[(1)] = (8));

} else {
var statearr_32161_32184 = state_32153__$1;
(statearr_32161_32184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (3))){
var inst_32151 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32153__$1,inst_32151);
} else {
if((state_val_32154 === (2))){
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32153__$1,(4),ch);
} else {
if((state_val_32154 === (11))){
var inst_32143 = (state_32153[(2)]);
var state_32153__$1 = state_32153;
var statearr_32162_32185 = state_32153__$1;
(statearr_32162_32185[(2)] = inst_32143);

(statearr_32162_32185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (9))){
var state_32153__$1 = state_32153;
var statearr_32163_32186 = state_32153__$1;
(statearr_32163_32186[(2)] = null);

(statearr_32163_32186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (5))){
var inst_32138 = cljs.core.async.close_BANG_.call(null,out);
var state_32153__$1 = state_32153;
var statearr_32164_32187 = state_32153__$1;
(statearr_32164_32187[(2)] = inst_32138);

(statearr_32164_32187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (10))){
var inst_32146 = (state_32153[(2)]);
var state_32153__$1 = (function (){var statearr_32165 = state_32153;
(statearr_32165[(8)] = inst_32146);

return statearr_32165;
})();
var statearr_32166_32188 = state_32153__$1;
(statearr_32166_32188[(2)] = null);

(statearr_32166_32188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32154 === (8))){
var inst_32135 = (state_32153[(7)]);
var state_32153__$1 = state_32153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32153__$1,(11),out,inst_32135);
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
});})(c__29906__auto___32178,out))
;
return ((function (switch__29794__auto__,c__29906__auto___32178,out){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_32170 = [null,null,null,null,null,null,null,null,null];
(statearr_32170[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_32170[(1)] = (1));

return statearr_32170;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_32153){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_32153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e32171){if((e32171 instanceof Object)){
var ex__29798__auto__ = e32171;
var statearr_32172_32189 = state_32153;
(statearr_32172_32189[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32171;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32190 = state_32153;
state_32153 = G__32190;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_32153){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_32153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___32178,out))
})();
var state__29908__auto__ = (function (){var statearr_32173 = f__29907__auto__.call(null);
(statearr_32173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___32178);

return statearr_32173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___32178,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32191 = [];
var len__25909__auto___32194 = arguments.length;
var i__25910__auto___32195 = (0);
while(true){
if((i__25910__auto___32195 < len__25909__auto___32194)){
args32191.push((arguments[i__25910__auto___32195]));

var G__32196 = (i__25910__auto___32195 + (1));
i__25910__auto___32195 = G__32196;
continue;
} else {
}
break;
}

var G__32193 = args32191.length;
switch (G__32193) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32191.length)].join('')));

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
var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__){
return (function (state_32363){
var state_val_32364 = (state_32363[(1)]);
if((state_val_32364 === (7))){
var inst_32359 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32365_32406 = state_32363__$1;
(statearr_32365_32406[(2)] = inst_32359);

(statearr_32365_32406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (20))){
var inst_32329 = (state_32363[(7)]);
var inst_32340 = (state_32363[(2)]);
var inst_32341 = cljs.core.next.call(null,inst_32329);
var inst_32315 = inst_32341;
var inst_32316 = null;
var inst_32317 = (0);
var inst_32318 = (0);
var state_32363__$1 = (function (){var statearr_32366 = state_32363;
(statearr_32366[(8)] = inst_32317);

(statearr_32366[(9)] = inst_32316);

(statearr_32366[(10)] = inst_32318);

(statearr_32366[(11)] = inst_32315);

(statearr_32366[(12)] = inst_32340);

return statearr_32366;
})();
var statearr_32367_32407 = state_32363__$1;
(statearr_32367_32407[(2)] = null);

(statearr_32367_32407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (1))){
var state_32363__$1 = state_32363;
var statearr_32368_32408 = state_32363__$1;
(statearr_32368_32408[(2)] = null);

(statearr_32368_32408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (4))){
var inst_32304 = (state_32363[(13)]);
var inst_32304__$1 = (state_32363[(2)]);
var inst_32305 = (inst_32304__$1 == null);
var state_32363__$1 = (function (){var statearr_32369 = state_32363;
(statearr_32369[(13)] = inst_32304__$1);

return statearr_32369;
})();
if(cljs.core.truth_(inst_32305)){
var statearr_32370_32409 = state_32363__$1;
(statearr_32370_32409[(1)] = (5));

} else {
var statearr_32371_32410 = state_32363__$1;
(statearr_32371_32410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (15))){
var state_32363__$1 = state_32363;
var statearr_32375_32411 = state_32363__$1;
(statearr_32375_32411[(2)] = null);

(statearr_32375_32411[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (21))){
var state_32363__$1 = state_32363;
var statearr_32376_32412 = state_32363__$1;
(statearr_32376_32412[(2)] = null);

(statearr_32376_32412[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (13))){
var inst_32317 = (state_32363[(8)]);
var inst_32316 = (state_32363[(9)]);
var inst_32318 = (state_32363[(10)]);
var inst_32315 = (state_32363[(11)]);
var inst_32325 = (state_32363[(2)]);
var inst_32326 = (inst_32318 + (1));
var tmp32372 = inst_32317;
var tmp32373 = inst_32316;
var tmp32374 = inst_32315;
var inst_32315__$1 = tmp32374;
var inst_32316__$1 = tmp32373;
var inst_32317__$1 = tmp32372;
var inst_32318__$1 = inst_32326;
var state_32363__$1 = (function (){var statearr_32377 = state_32363;
(statearr_32377[(8)] = inst_32317__$1);

(statearr_32377[(14)] = inst_32325);

(statearr_32377[(9)] = inst_32316__$1);

(statearr_32377[(10)] = inst_32318__$1);

(statearr_32377[(11)] = inst_32315__$1);

return statearr_32377;
})();
var statearr_32378_32413 = state_32363__$1;
(statearr_32378_32413[(2)] = null);

(statearr_32378_32413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (22))){
var state_32363__$1 = state_32363;
var statearr_32379_32414 = state_32363__$1;
(statearr_32379_32414[(2)] = null);

(statearr_32379_32414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (6))){
var inst_32304 = (state_32363[(13)]);
var inst_32313 = f.call(null,inst_32304);
var inst_32314 = cljs.core.seq.call(null,inst_32313);
var inst_32315 = inst_32314;
var inst_32316 = null;
var inst_32317 = (0);
var inst_32318 = (0);
var state_32363__$1 = (function (){var statearr_32380 = state_32363;
(statearr_32380[(8)] = inst_32317);

(statearr_32380[(9)] = inst_32316);

(statearr_32380[(10)] = inst_32318);

(statearr_32380[(11)] = inst_32315);

return statearr_32380;
})();
var statearr_32381_32415 = state_32363__$1;
(statearr_32381_32415[(2)] = null);

(statearr_32381_32415[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (17))){
var inst_32329 = (state_32363[(7)]);
var inst_32333 = cljs.core.chunk_first.call(null,inst_32329);
var inst_32334 = cljs.core.chunk_rest.call(null,inst_32329);
var inst_32335 = cljs.core.count.call(null,inst_32333);
var inst_32315 = inst_32334;
var inst_32316 = inst_32333;
var inst_32317 = inst_32335;
var inst_32318 = (0);
var state_32363__$1 = (function (){var statearr_32382 = state_32363;
(statearr_32382[(8)] = inst_32317);

(statearr_32382[(9)] = inst_32316);

(statearr_32382[(10)] = inst_32318);

(statearr_32382[(11)] = inst_32315);

return statearr_32382;
})();
var statearr_32383_32416 = state_32363__$1;
(statearr_32383_32416[(2)] = null);

(statearr_32383_32416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (3))){
var inst_32361 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32363__$1,inst_32361);
} else {
if((state_val_32364 === (12))){
var inst_32349 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32384_32417 = state_32363__$1;
(statearr_32384_32417[(2)] = inst_32349);

(statearr_32384_32417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (2))){
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32363__$1,(4),in$);
} else {
if((state_val_32364 === (23))){
var inst_32357 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32385_32418 = state_32363__$1;
(statearr_32385_32418[(2)] = inst_32357);

(statearr_32385_32418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (19))){
var inst_32344 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32386_32419 = state_32363__$1;
(statearr_32386_32419[(2)] = inst_32344);

(statearr_32386_32419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (11))){
var inst_32315 = (state_32363[(11)]);
var inst_32329 = (state_32363[(7)]);
var inst_32329__$1 = cljs.core.seq.call(null,inst_32315);
var state_32363__$1 = (function (){var statearr_32387 = state_32363;
(statearr_32387[(7)] = inst_32329__$1);

return statearr_32387;
})();
if(inst_32329__$1){
var statearr_32388_32420 = state_32363__$1;
(statearr_32388_32420[(1)] = (14));

} else {
var statearr_32389_32421 = state_32363__$1;
(statearr_32389_32421[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (9))){
var inst_32351 = (state_32363[(2)]);
var inst_32352 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32363__$1 = (function (){var statearr_32390 = state_32363;
(statearr_32390[(15)] = inst_32351);

return statearr_32390;
})();
if(cljs.core.truth_(inst_32352)){
var statearr_32391_32422 = state_32363__$1;
(statearr_32391_32422[(1)] = (21));

} else {
var statearr_32392_32423 = state_32363__$1;
(statearr_32392_32423[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (5))){
var inst_32307 = cljs.core.async.close_BANG_.call(null,out);
var state_32363__$1 = state_32363;
var statearr_32393_32424 = state_32363__$1;
(statearr_32393_32424[(2)] = inst_32307);

(statearr_32393_32424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (14))){
var inst_32329 = (state_32363[(7)]);
var inst_32331 = cljs.core.chunked_seq_QMARK_.call(null,inst_32329);
var state_32363__$1 = state_32363;
if(inst_32331){
var statearr_32394_32425 = state_32363__$1;
(statearr_32394_32425[(1)] = (17));

} else {
var statearr_32395_32426 = state_32363__$1;
(statearr_32395_32426[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (16))){
var inst_32347 = (state_32363[(2)]);
var state_32363__$1 = state_32363;
var statearr_32396_32427 = state_32363__$1;
(statearr_32396_32427[(2)] = inst_32347);

(statearr_32396_32427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32364 === (10))){
var inst_32316 = (state_32363[(9)]);
var inst_32318 = (state_32363[(10)]);
var inst_32323 = cljs.core._nth.call(null,inst_32316,inst_32318);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32363__$1,(13),out,inst_32323);
} else {
if((state_val_32364 === (18))){
var inst_32329 = (state_32363[(7)]);
var inst_32338 = cljs.core.first.call(null,inst_32329);
var state_32363__$1 = state_32363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32363__$1,(20),out,inst_32338);
} else {
if((state_val_32364 === (8))){
var inst_32317 = (state_32363[(8)]);
var inst_32318 = (state_32363[(10)]);
var inst_32320 = (inst_32318 < inst_32317);
var inst_32321 = inst_32320;
var state_32363__$1 = state_32363;
if(cljs.core.truth_(inst_32321)){
var statearr_32397_32428 = state_32363__$1;
(statearr_32397_32428[(1)] = (10));

} else {
var statearr_32398_32429 = state_32363__$1;
(statearr_32398_32429[(1)] = (11));

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
});})(c__29906__auto__))
;
return ((function (switch__29794__auto__,c__29906__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29795__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29795__auto____0 = (function (){
var statearr_32402 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32402[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29795__auto__);

(statearr_32402[(1)] = (1));

return statearr_32402;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29795__auto____1 = (function (state_32363){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_32363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e32403){if((e32403 instanceof Object)){
var ex__29798__auto__ = e32403;
var statearr_32404_32430 = state_32363;
(statearr_32404_32430[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32431 = state_32363;
state_32363 = G__32431;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29795__auto__ = function(state_32363){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29795__auto____1.call(this,state_32363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29795__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29795__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__))
})();
var state__29908__auto__ = (function (){var statearr_32405 = f__29907__auto__.call(null);
(statearr_32405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_32405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__))
);

return c__29906__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32432 = [];
var len__25909__auto___32435 = arguments.length;
var i__25910__auto___32436 = (0);
while(true){
if((i__25910__auto___32436 < len__25909__auto___32435)){
args32432.push((arguments[i__25910__auto___32436]));

var G__32437 = (i__25910__auto___32436 + (1));
i__25910__auto___32436 = G__32437;
continue;
} else {
}
break;
}

var G__32434 = args32432.length;
switch (G__32434) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32432.length)].join('')));

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
var args32439 = [];
var len__25909__auto___32442 = arguments.length;
var i__25910__auto___32443 = (0);
while(true){
if((i__25910__auto___32443 < len__25909__auto___32442)){
args32439.push((arguments[i__25910__auto___32443]));

var G__32444 = (i__25910__auto___32443 + (1));
i__25910__auto___32443 = G__32444;
continue;
} else {
}
break;
}

var G__32441 = args32439.length;
switch (G__32441) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32439.length)].join('')));

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
var args32446 = [];
var len__25909__auto___32497 = arguments.length;
var i__25910__auto___32498 = (0);
while(true){
if((i__25910__auto___32498 < len__25909__auto___32497)){
args32446.push((arguments[i__25910__auto___32498]));

var G__32499 = (i__25910__auto___32498 + (1));
i__25910__auto___32498 = G__32499;
continue;
} else {
}
break;
}

var G__32448 = args32446.length;
switch (G__32448) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32446.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29906__auto___32501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___32501,out){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___32501,out){
return (function (state_32472){
var state_val_32473 = (state_32472[(1)]);
if((state_val_32473 === (7))){
var inst_32467 = (state_32472[(2)]);
var state_32472__$1 = state_32472;
var statearr_32474_32502 = state_32472__$1;
(statearr_32474_32502[(2)] = inst_32467);

(statearr_32474_32502[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32473 === (1))){
var inst_32449 = null;
var state_32472__$1 = (function (){var statearr_32475 = state_32472;
(statearr_32475[(7)] = inst_32449);

return statearr_32475;
})();
var statearr_32476_32503 = state_32472__$1;
(statearr_32476_32503[(2)] = null);

(statearr_32476_32503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32473 === (4))){
var inst_32452 = (state_32472[(8)]);
var inst_32452__$1 = (state_32472[(2)]);
var inst_32453 = (inst_32452__$1 == null);
var inst_32454 = cljs.core.not.call(null,inst_32453);
var state_32472__$1 = (function (){var statearr_32477 = state_32472;
(statearr_32477[(8)] = inst_32452__$1);

return statearr_32477;
})();
if(inst_32454){
var statearr_32478_32504 = state_32472__$1;
(statearr_32478_32504[(1)] = (5));

} else {
var statearr_32479_32505 = state_32472__$1;
(statearr_32479_32505[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32473 === (6))){
var state_32472__$1 = state_32472;
var statearr_32480_32506 = state_32472__$1;
(statearr_32480_32506[(2)] = null);

(statearr_32480_32506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32473 === (3))){
var inst_32469 = (state_32472[(2)]);
var inst_32470 = cljs.core.async.close_BANG_.call(null,out);
var state_32472__$1 = (function (){var statearr_32481 = state_32472;
(statearr_32481[(9)] = inst_32469);

return statearr_32481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32472__$1,inst_32470);
} else {
if((state_val_32473 === (2))){
var state_32472__$1 = state_32472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32472__$1,(4),ch);
} else {
if((state_val_32473 === (11))){
var inst_32452 = (state_32472[(8)]);
var inst_32461 = (state_32472[(2)]);
var inst_32449 = inst_32452;
var state_32472__$1 = (function (){var statearr_32482 = state_32472;
(statearr_32482[(7)] = inst_32449);

(statearr_32482[(10)] = inst_32461);

return statearr_32482;
})();
var statearr_32483_32507 = state_32472__$1;
(statearr_32483_32507[(2)] = null);

(statearr_32483_32507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32473 === (9))){
var inst_32452 = (state_32472[(8)]);
var state_32472__$1 = state_32472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32472__$1,(11),out,inst_32452);
} else {
if((state_val_32473 === (5))){
var inst_32449 = (state_32472[(7)]);
var inst_32452 = (state_32472[(8)]);
var inst_32456 = cljs.core._EQ_.call(null,inst_32452,inst_32449);
var state_32472__$1 = state_32472;
if(inst_32456){
var statearr_32485_32508 = state_32472__$1;
(statearr_32485_32508[(1)] = (8));

} else {
var statearr_32486_32509 = state_32472__$1;
(statearr_32486_32509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32473 === (10))){
var inst_32464 = (state_32472[(2)]);
var state_32472__$1 = state_32472;
var statearr_32487_32510 = state_32472__$1;
(statearr_32487_32510[(2)] = inst_32464);

(statearr_32487_32510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32473 === (8))){
var inst_32449 = (state_32472[(7)]);
var tmp32484 = inst_32449;
var inst_32449__$1 = tmp32484;
var state_32472__$1 = (function (){var statearr_32488 = state_32472;
(statearr_32488[(7)] = inst_32449__$1);

return statearr_32488;
})();
var statearr_32489_32511 = state_32472__$1;
(statearr_32489_32511[(2)] = null);

(statearr_32489_32511[(1)] = (2));


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
});})(c__29906__auto___32501,out))
;
return ((function (switch__29794__auto__,c__29906__auto___32501,out){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_32493 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32493[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_32493[(1)] = (1));

return statearr_32493;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_32472){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_32472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e32494){if((e32494 instanceof Object)){
var ex__29798__auto__ = e32494;
var statearr_32495_32512 = state_32472;
(statearr_32495_32512[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32513 = state_32472;
state_32472 = G__32513;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_32472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_32472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___32501,out))
})();
var state__29908__auto__ = (function (){var statearr_32496 = f__29907__auto__.call(null);
(statearr_32496[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___32501);

return statearr_32496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___32501,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32514 = [];
var len__25909__auto___32584 = arguments.length;
var i__25910__auto___32585 = (0);
while(true){
if((i__25910__auto___32585 < len__25909__auto___32584)){
args32514.push((arguments[i__25910__auto___32585]));

var G__32586 = (i__25910__auto___32585 + (1));
i__25910__auto___32585 = G__32586;
continue;
} else {
}
break;
}

var G__32516 = args32514.length;
switch (G__32516) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32514.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29906__auto___32588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___32588,out){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___32588,out){
return (function (state_32554){
var state_val_32555 = (state_32554[(1)]);
if((state_val_32555 === (7))){
var inst_32550 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
var statearr_32556_32589 = state_32554__$1;
(statearr_32556_32589[(2)] = inst_32550);

(statearr_32556_32589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (1))){
var inst_32517 = (new Array(n));
var inst_32518 = inst_32517;
var inst_32519 = (0);
var state_32554__$1 = (function (){var statearr_32557 = state_32554;
(statearr_32557[(7)] = inst_32518);

(statearr_32557[(8)] = inst_32519);

return statearr_32557;
})();
var statearr_32558_32590 = state_32554__$1;
(statearr_32558_32590[(2)] = null);

(statearr_32558_32590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (4))){
var inst_32522 = (state_32554[(9)]);
var inst_32522__$1 = (state_32554[(2)]);
var inst_32523 = (inst_32522__$1 == null);
var inst_32524 = cljs.core.not.call(null,inst_32523);
var state_32554__$1 = (function (){var statearr_32559 = state_32554;
(statearr_32559[(9)] = inst_32522__$1);

return statearr_32559;
})();
if(inst_32524){
var statearr_32560_32591 = state_32554__$1;
(statearr_32560_32591[(1)] = (5));

} else {
var statearr_32561_32592 = state_32554__$1;
(statearr_32561_32592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (15))){
var inst_32544 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
var statearr_32562_32593 = state_32554__$1;
(statearr_32562_32593[(2)] = inst_32544);

(statearr_32562_32593[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (13))){
var state_32554__$1 = state_32554;
var statearr_32563_32594 = state_32554__$1;
(statearr_32563_32594[(2)] = null);

(statearr_32563_32594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (6))){
var inst_32519 = (state_32554[(8)]);
var inst_32540 = (inst_32519 > (0));
var state_32554__$1 = state_32554;
if(cljs.core.truth_(inst_32540)){
var statearr_32564_32595 = state_32554__$1;
(statearr_32564_32595[(1)] = (12));

} else {
var statearr_32565_32596 = state_32554__$1;
(statearr_32565_32596[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (3))){
var inst_32552 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32554__$1,inst_32552);
} else {
if((state_val_32555 === (12))){
var inst_32518 = (state_32554[(7)]);
var inst_32542 = cljs.core.vec.call(null,inst_32518);
var state_32554__$1 = state_32554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32554__$1,(15),out,inst_32542);
} else {
if((state_val_32555 === (2))){
var state_32554__$1 = state_32554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32554__$1,(4),ch);
} else {
if((state_val_32555 === (11))){
var inst_32534 = (state_32554[(2)]);
var inst_32535 = (new Array(n));
var inst_32518 = inst_32535;
var inst_32519 = (0);
var state_32554__$1 = (function (){var statearr_32566 = state_32554;
(statearr_32566[(7)] = inst_32518);

(statearr_32566[(10)] = inst_32534);

(statearr_32566[(8)] = inst_32519);

return statearr_32566;
})();
var statearr_32567_32597 = state_32554__$1;
(statearr_32567_32597[(2)] = null);

(statearr_32567_32597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (9))){
var inst_32518 = (state_32554[(7)]);
var inst_32532 = cljs.core.vec.call(null,inst_32518);
var state_32554__$1 = state_32554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32554__$1,(11),out,inst_32532);
} else {
if((state_val_32555 === (5))){
var inst_32527 = (state_32554[(11)]);
var inst_32518 = (state_32554[(7)]);
var inst_32522 = (state_32554[(9)]);
var inst_32519 = (state_32554[(8)]);
var inst_32526 = (inst_32518[inst_32519] = inst_32522);
var inst_32527__$1 = (inst_32519 + (1));
var inst_32528 = (inst_32527__$1 < n);
var state_32554__$1 = (function (){var statearr_32568 = state_32554;
(statearr_32568[(12)] = inst_32526);

(statearr_32568[(11)] = inst_32527__$1);

return statearr_32568;
})();
if(cljs.core.truth_(inst_32528)){
var statearr_32569_32598 = state_32554__$1;
(statearr_32569_32598[(1)] = (8));

} else {
var statearr_32570_32599 = state_32554__$1;
(statearr_32570_32599[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (14))){
var inst_32547 = (state_32554[(2)]);
var inst_32548 = cljs.core.async.close_BANG_.call(null,out);
var state_32554__$1 = (function (){var statearr_32572 = state_32554;
(statearr_32572[(13)] = inst_32547);

return statearr_32572;
})();
var statearr_32573_32600 = state_32554__$1;
(statearr_32573_32600[(2)] = inst_32548);

(statearr_32573_32600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (10))){
var inst_32538 = (state_32554[(2)]);
var state_32554__$1 = state_32554;
var statearr_32574_32601 = state_32554__$1;
(statearr_32574_32601[(2)] = inst_32538);

(statearr_32574_32601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32555 === (8))){
var inst_32527 = (state_32554[(11)]);
var inst_32518 = (state_32554[(7)]);
var tmp32571 = inst_32518;
var inst_32518__$1 = tmp32571;
var inst_32519 = inst_32527;
var state_32554__$1 = (function (){var statearr_32575 = state_32554;
(statearr_32575[(7)] = inst_32518__$1);

(statearr_32575[(8)] = inst_32519);

return statearr_32575;
})();
var statearr_32576_32602 = state_32554__$1;
(statearr_32576_32602[(2)] = null);

(statearr_32576_32602[(1)] = (2));


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
});})(c__29906__auto___32588,out))
;
return ((function (switch__29794__auto__,c__29906__auto___32588,out){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_32580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32580[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_32580[(1)] = (1));

return statearr_32580;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_32554){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_32554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e32581){if((e32581 instanceof Object)){
var ex__29798__auto__ = e32581;
var statearr_32582_32603 = state_32554;
(statearr_32582_32603[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32604 = state_32554;
state_32554 = G__32604;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_32554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_32554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___32588,out))
})();
var state__29908__auto__ = (function (){var statearr_32583 = f__29907__auto__.call(null);
(statearr_32583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___32588);

return statearr_32583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___32588,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32605 = [];
var len__25909__auto___32679 = arguments.length;
var i__25910__auto___32680 = (0);
while(true){
if((i__25910__auto___32680 < len__25909__auto___32679)){
args32605.push((arguments[i__25910__auto___32680]));

var G__32681 = (i__25910__auto___32680 + (1));
i__25910__auto___32680 = G__32681;
continue;
} else {
}
break;
}

var G__32607 = args32605.length;
switch (G__32607) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32605.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29906__auto___32683 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___32683,out){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___32683,out){
return (function (state_32649){
var state_val_32650 = (state_32649[(1)]);
if((state_val_32650 === (7))){
var inst_32645 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32651_32684 = state_32649__$1;
(statearr_32651_32684[(2)] = inst_32645);

(statearr_32651_32684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (1))){
var inst_32608 = [];
var inst_32609 = inst_32608;
var inst_32610 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32649__$1 = (function (){var statearr_32652 = state_32649;
(statearr_32652[(7)] = inst_32609);

(statearr_32652[(8)] = inst_32610);

return statearr_32652;
})();
var statearr_32653_32685 = state_32649__$1;
(statearr_32653_32685[(2)] = null);

(statearr_32653_32685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (4))){
var inst_32613 = (state_32649[(9)]);
var inst_32613__$1 = (state_32649[(2)]);
var inst_32614 = (inst_32613__$1 == null);
var inst_32615 = cljs.core.not.call(null,inst_32614);
var state_32649__$1 = (function (){var statearr_32654 = state_32649;
(statearr_32654[(9)] = inst_32613__$1);

return statearr_32654;
})();
if(inst_32615){
var statearr_32655_32686 = state_32649__$1;
(statearr_32655_32686[(1)] = (5));

} else {
var statearr_32656_32687 = state_32649__$1;
(statearr_32656_32687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (15))){
var inst_32639 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32657_32688 = state_32649__$1;
(statearr_32657_32688[(2)] = inst_32639);

(statearr_32657_32688[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (13))){
var state_32649__$1 = state_32649;
var statearr_32658_32689 = state_32649__$1;
(statearr_32658_32689[(2)] = null);

(statearr_32658_32689[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (6))){
var inst_32609 = (state_32649[(7)]);
var inst_32634 = inst_32609.length;
var inst_32635 = (inst_32634 > (0));
var state_32649__$1 = state_32649;
if(cljs.core.truth_(inst_32635)){
var statearr_32659_32690 = state_32649__$1;
(statearr_32659_32690[(1)] = (12));

} else {
var statearr_32660_32691 = state_32649__$1;
(statearr_32660_32691[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (3))){
var inst_32647 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32649__$1,inst_32647);
} else {
if((state_val_32650 === (12))){
var inst_32609 = (state_32649[(7)]);
var inst_32637 = cljs.core.vec.call(null,inst_32609);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32649__$1,(15),out,inst_32637);
} else {
if((state_val_32650 === (2))){
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32649__$1,(4),ch);
} else {
if((state_val_32650 === (11))){
var inst_32613 = (state_32649[(9)]);
var inst_32617 = (state_32649[(10)]);
var inst_32627 = (state_32649[(2)]);
var inst_32628 = [];
var inst_32629 = inst_32628.push(inst_32613);
var inst_32609 = inst_32628;
var inst_32610 = inst_32617;
var state_32649__$1 = (function (){var statearr_32661 = state_32649;
(statearr_32661[(11)] = inst_32627);

(statearr_32661[(7)] = inst_32609);

(statearr_32661[(12)] = inst_32629);

(statearr_32661[(8)] = inst_32610);

return statearr_32661;
})();
var statearr_32662_32692 = state_32649__$1;
(statearr_32662_32692[(2)] = null);

(statearr_32662_32692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (9))){
var inst_32609 = (state_32649[(7)]);
var inst_32625 = cljs.core.vec.call(null,inst_32609);
var state_32649__$1 = state_32649;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32649__$1,(11),out,inst_32625);
} else {
if((state_val_32650 === (5))){
var inst_32613 = (state_32649[(9)]);
var inst_32617 = (state_32649[(10)]);
var inst_32610 = (state_32649[(8)]);
var inst_32617__$1 = f.call(null,inst_32613);
var inst_32618 = cljs.core._EQ_.call(null,inst_32617__$1,inst_32610);
var inst_32619 = cljs.core.keyword_identical_QMARK_.call(null,inst_32610,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32620 = (inst_32618) || (inst_32619);
var state_32649__$1 = (function (){var statearr_32663 = state_32649;
(statearr_32663[(10)] = inst_32617__$1);

return statearr_32663;
})();
if(cljs.core.truth_(inst_32620)){
var statearr_32664_32693 = state_32649__$1;
(statearr_32664_32693[(1)] = (8));

} else {
var statearr_32665_32694 = state_32649__$1;
(statearr_32665_32694[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (14))){
var inst_32642 = (state_32649[(2)]);
var inst_32643 = cljs.core.async.close_BANG_.call(null,out);
var state_32649__$1 = (function (){var statearr_32667 = state_32649;
(statearr_32667[(13)] = inst_32642);

return statearr_32667;
})();
var statearr_32668_32695 = state_32649__$1;
(statearr_32668_32695[(2)] = inst_32643);

(statearr_32668_32695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (10))){
var inst_32632 = (state_32649[(2)]);
var state_32649__$1 = state_32649;
var statearr_32669_32696 = state_32649__$1;
(statearr_32669_32696[(2)] = inst_32632);

(statearr_32669_32696[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32650 === (8))){
var inst_32613 = (state_32649[(9)]);
var inst_32609 = (state_32649[(7)]);
var inst_32617 = (state_32649[(10)]);
var inst_32622 = inst_32609.push(inst_32613);
var tmp32666 = inst_32609;
var inst_32609__$1 = tmp32666;
var inst_32610 = inst_32617;
var state_32649__$1 = (function (){var statearr_32670 = state_32649;
(statearr_32670[(7)] = inst_32609__$1);

(statearr_32670[(14)] = inst_32622);

(statearr_32670[(8)] = inst_32610);

return statearr_32670;
})();
var statearr_32671_32697 = state_32649__$1;
(statearr_32671_32697[(2)] = null);

(statearr_32671_32697[(1)] = (2));


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
});})(c__29906__auto___32683,out))
;
return ((function (switch__29794__auto__,c__29906__auto___32683,out){
return (function() {
var cljs$core$async$state_machine__29795__auto__ = null;
var cljs$core$async$state_machine__29795__auto____0 = (function (){
var statearr_32675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32675[(0)] = cljs$core$async$state_machine__29795__auto__);

(statearr_32675[(1)] = (1));

return statearr_32675;
});
var cljs$core$async$state_machine__29795__auto____1 = (function (state_32649){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_32649);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e32676){if((e32676 instanceof Object)){
var ex__29798__auto__ = e32676;
var statearr_32677_32698 = state_32649;
(statearr_32677_32698[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32649);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32699 = state_32649;
state_32649 = G__32699;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
cljs$core$async$state_machine__29795__auto__ = function(state_32649){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29795__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29795__auto____1.call(this,state_32649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29795__auto____0;
cljs$core$async$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29795__auto____1;
return cljs$core$async$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___32683,out))
})();
var state__29908__auto__ = (function (){var statearr_32678 = f__29907__auto__.call(null);
(statearr_32678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___32683);

return statearr_32678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___32683,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1513979287446