// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__25440__auto__,writer__25441__auto__,opt__25442__auto__){
return cljs.core._write.call(null,writer__25441__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35220 = arguments.length;
var i__25910__auto___35221 = (0);
while(true){
if((i__25910__auto___35221 < len__25909__auto___35220)){
args__25916__auto__.push((arguments[i__25910__auto___35221]));

var G__35222 = (i__25910__auto___35221 + (1));
i__25910__auto___35221 = G__35222;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq35219){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35219));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35224 = arguments.length;
var i__25910__auto___35225 = (0);
while(true){
if((i__25910__auto___35225 < len__25909__auto___35224)){
args__25916__auto__.push((arguments[i__25910__auto___35225]));

var G__35226 = (i__25910__auto___35225 + (1));
i__25910__auto___35225 = G__35226;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq35223){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35223));
});

var g_QMARK__35227 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_35228 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35227){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35227))
,null));
var mkg_35229 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__35227,g_35228){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__35227,g_35228))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__35227,g_35228,mkg_35229){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35227).call(null,x);
});})(g_QMARK__35227,g_35228,mkg_35229))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__35227,g_35228,mkg_35229){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_35229).call(null,gfn);
});})(g_QMARK__35227,g_35228,mkg_35229))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__35227,g_35228,mkg_35229){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_35228).call(null,generator);
});})(g_QMARK__35227,g_35228,mkg_35229))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35191__auto___35248 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__35191__auto___35248){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35249 = arguments.length;
var i__25910__auto___35250 = (0);
while(true){
if((i__25910__auto___35250 < len__25909__auto___35249)){
args__25916__auto__.push((arguments[i__25910__auto___35250]));

var G__35251 = (i__25910__auto___35250 + (1));
i__25910__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35248))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35248){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35248),args);
});})(g__35191__auto___35248))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__35191__auto___35248){
return (function (seq35230){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35230));
});})(g__35191__auto___35248))
;


var g__35191__auto___35252 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__35191__auto___35252){
return (function cljs$spec$impl$gen$list(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35253 = arguments.length;
var i__25910__auto___35254 = (0);
while(true){
if((i__25910__auto___35254 < len__25909__auto___35253)){
args__25916__auto__.push((arguments[i__25910__auto___35254]));

var G__35255 = (i__25910__auto___35254 + (1));
i__25910__auto___35254 = G__35255;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35252))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35252){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35252),args);
});})(g__35191__auto___35252))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__35191__auto___35252){
return (function (seq35231){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35231));
});})(g__35191__auto___35252))
;


var g__35191__auto___35256 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__35191__auto___35256){
return (function cljs$spec$impl$gen$map(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35257 = arguments.length;
var i__25910__auto___35258 = (0);
while(true){
if((i__25910__auto___35258 < len__25909__auto___35257)){
args__25916__auto__.push((arguments[i__25910__auto___35258]));

var G__35259 = (i__25910__auto___35258 + (1));
i__25910__auto___35258 = G__35259;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35256))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35256){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35256),args);
});})(g__35191__auto___35256))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__35191__auto___35256){
return (function (seq35232){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35232));
});})(g__35191__auto___35256))
;


var g__35191__auto___35260 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__35191__auto___35260){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35261 = arguments.length;
var i__25910__auto___35262 = (0);
while(true){
if((i__25910__auto___35262 < len__25909__auto___35261)){
args__25916__auto__.push((arguments[i__25910__auto___35262]));

var G__35263 = (i__25910__auto___35262 + (1));
i__25910__auto___35262 = G__35263;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35260))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35260){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35260),args);
});})(g__35191__auto___35260))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__35191__auto___35260){
return (function (seq35233){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35233));
});})(g__35191__auto___35260))
;


var g__35191__auto___35264 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__35191__auto___35264){
return (function cljs$spec$impl$gen$set(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35265 = arguments.length;
var i__25910__auto___35266 = (0);
while(true){
if((i__25910__auto___35266 < len__25909__auto___35265)){
args__25916__auto__.push((arguments[i__25910__auto___35266]));

var G__35267 = (i__25910__auto___35266 + (1));
i__25910__auto___35266 = G__35267;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35264))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35264){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35264),args);
});})(g__35191__auto___35264))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__35191__auto___35264){
return (function (seq35234){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35234));
});})(g__35191__auto___35264))
;


var g__35191__auto___35268 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__35191__auto___35268){
return (function cljs$spec$impl$gen$vector(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35269 = arguments.length;
var i__25910__auto___35270 = (0);
while(true){
if((i__25910__auto___35270 < len__25909__auto___35269)){
args__25916__auto__.push((arguments[i__25910__auto___35270]));

var G__35271 = (i__25910__auto___35270 + (1));
i__25910__auto___35270 = G__35271;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35268))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35268){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35268),args);
});})(g__35191__auto___35268))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__35191__auto___35268){
return (function (seq35235){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35235));
});})(g__35191__auto___35268))
;


var g__35191__auto___35272 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__35191__auto___35272){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35273 = arguments.length;
var i__25910__auto___35274 = (0);
while(true){
if((i__25910__auto___35274 < len__25909__auto___35273)){
args__25916__auto__.push((arguments[i__25910__auto___35274]));

var G__35275 = (i__25910__auto___35274 + (1));
i__25910__auto___35274 = G__35275;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35272))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35272){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35272),args);
});})(g__35191__auto___35272))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__35191__auto___35272){
return (function (seq35236){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35236));
});})(g__35191__auto___35272))
;


var g__35191__auto___35276 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__35191__auto___35276){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35277 = arguments.length;
var i__25910__auto___35278 = (0);
while(true){
if((i__25910__auto___35278 < len__25909__auto___35277)){
args__25916__auto__.push((arguments[i__25910__auto___35278]));

var G__35279 = (i__25910__auto___35278 + (1));
i__25910__auto___35278 = G__35279;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35276))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35276){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35276),args);
});})(g__35191__auto___35276))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__35191__auto___35276){
return (function (seq35237){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35237));
});})(g__35191__auto___35276))
;


var g__35191__auto___35280 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__35191__auto___35280){
return (function cljs$spec$impl$gen$elements(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35281 = arguments.length;
var i__25910__auto___35282 = (0);
while(true){
if((i__25910__auto___35282 < len__25909__auto___35281)){
args__25916__auto__.push((arguments[i__25910__auto___35282]));

var G__35283 = (i__25910__auto___35282 + (1));
i__25910__auto___35282 = G__35283;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35280))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35280){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35280),args);
});})(g__35191__auto___35280))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__35191__auto___35280){
return (function (seq35238){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35238));
});})(g__35191__auto___35280))
;


var g__35191__auto___35284 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__35191__auto___35284){
return (function cljs$spec$impl$gen$bind(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35285 = arguments.length;
var i__25910__auto___35286 = (0);
while(true){
if((i__25910__auto___35286 < len__25909__auto___35285)){
args__25916__auto__.push((arguments[i__25910__auto___35286]));

var G__35287 = (i__25910__auto___35286 + (1));
i__25910__auto___35286 = G__35287;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35284))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35284){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35284),args);
});})(g__35191__auto___35284))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__35191__auto___35284){
return (function (seq35239){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35239));
});})(g__35191__auto___35284))
;


var g__35191__auto___35288 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__35191__auto___35288){
return (function cljs$spec$impl$gen$choose(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35289 = arguments.length;
var i__25910__auto___35290 = (0);
while(true){
if((i__25910__auto___35290 < len__25909__auto___35289)){
args__25916__auto__.push((arguments[i__25910__auto___35290]));

var G__35291 = (i__25910__auto___35290 + (1));
i__25910__auto___35290 = G__35291;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35288))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35288){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35288),args);
});})(g__35191__auto___35288))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__35191__auto___35288){
return (function (seq35240){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35240));
});})(g__35191__auto___35288))
;


var g__35191__auto___35292 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__35191__auto___35292){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35293 = arguments.length;
var i__25910__auto___35294 = (0);
while(true){
if((i__25910__auto___35294 < len__25909__auto___35293)){
args__25916__auto__.push((arguments[i__25910__auto___35294]));

var G__35295 = (i__25910__auto___35294 + (1));
i__25910__auto___35294 = G__35295;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35292))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35292){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35292),args);
});})(g__35191__auto___35292))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__35191__auto___35292){
return (function (seq35241){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35241));
});})(g__35191__auto___35292))
;


var g__35191__auto___35296 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__35191__auto___35296){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35297 = arguments.length;
var i__25910__auto___35298 = (0);
while(true){
if((i__25910__auto___35298 < len__25909__auto___35297)){
args__25916__auto__.push((arguments[i__25910__auto___35298]));

var G__35299 = (i__25910__auto___35298 + (1));
i__25910__auto___35298 = G__35299;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35296))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35296){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35296),args);
});})(g__35191__auto___35296))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__35191__auto___35296){
return (function (seq35242){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35242));
});})(g__35191__auto___35296))
;


var g__35191__auto___35300 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__35191__auto___35300){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35301 = arguments.length;
var i__25910__auto___35302 = (0);
while(true){
if((i__25910__auto___35302 < len__25909__auto___35301)){
args__25916__auto__.push((arguments[i__25910__auto___35302]));

var G__35303 = (i__25910__auto___35302 + (1));
i__25910__auto___35302 = G__35303;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35300))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35300){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35300),args);
});})(g__35191__auto___35300))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__35191__auto___35300){
return (function (seq35243){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35243));
});})(g__35191__auto___35300))
;


var g__35191__auto___35304 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__35191__auto___35304){
return (function cljs$spec$impl$gen$sample(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35305 = arguments.length;
var i__25910__auto___35306 = (0);
while(true){
if((i__25910__auto___35306 < len__25909__auto___35305)){
args__25916__auto__.push((arguments[i__25910__auto___35306]));

var G__35307 = (i__25910__auto___35306 + (1));
i__25910__auto___35306 = G__35307;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35304))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35304){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35304),args);
});})(g__35191__auto___35304))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__35191__auto___35304){
return (function (seq35244){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35244));
});})(g__35191__auto___35304))
;


var g__35191__auto___35308 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__35191__auto___35308){
return (function cljs$spec$impl$gen$return(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35309 = arguments.length;
var i__25910__auto___35310 = (0);
while(true){
if((i__25910__auto___35310 < len__25909__auto___35309)){
args__25916__auto__.push((arguments[i__25910__auto___35310]));

var G__35311 = (i__25910__auto___35310 + (1));
i__25910__auto___35310 = G__35311;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35308))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35308){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35308),args);
});})(g__35191__auto___35308))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__35191__auto___35308){
return (function (seq35245){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35245));
});})(g__35191__auto___35308))
;


var g__35191__auto___35312 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__35191__auto___35312){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35313 = arguments.length;
var i__25910__auto___35314 = (0);
while(true){
if((i__25910__auto___35314 < len__25909__auto___35313)){
args__25916__auto__.push((arguments[i__25910__auto___35314]));

var G__35315 = (i__25910__auto___35314 + (1));
i__25910__auto___35314 = G__35315;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35312))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35312){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35312),args);
});})(g__35191__auto___35312))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35191__auto___35312){
return (function (seq35246){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35246));
});})(g__35191__auto___35312))
;


var g__35191__auto___35316 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__35191__auto___35316){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35317 = arguments.length;
var i__25910__auto___35318 = (0);
while(true){
if((i__25910__auto___35318 < len__25909__auto___35317)){
args__25916__auto__.push((arguments[i__25910__auto___35318]));

var G__35319 = (i__25910__auto___35318 + (1));
i__25910__auto___35318 = G__35319;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35191__auto___35316))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35191__auto___35316){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35191__auto___35316),args);
});})(g__35191__auto___35316))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__35191__auto___35316){
return (function (seq35247){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35247));
});})(g__35191__auto___35316))
;

var g__35204__auto___35341 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__35204__auto___35341){
return (function cljs$spec$impl$gen$any(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35342 = arguments.length;
var i__25910__auto___35343 = (0);
while(true){
if((i__25910__auto___35343 < len__25909__auto___35342)){
args__25916__auto__.push((arguments[i__25910__auto___35343]));

var G__35344 = (i__25910__auto___35343 + (1));
i__25910__auto___35343 = G__35344;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35341))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35341){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35341);
});})(g__35204__auto___35341))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__35204__auto___35341){
return (function (seq35320){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35320));
});})(g__35204__auto___35341))
;


var g__35204__auto___35345 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__35204__auto___35345){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35346 = arguments.length;
var i__25910__auto___35347 = (0);
while(true){
if((i__25910__auto___35347 < len__25909__auto___35346)){
args__25916__auto__.push((arguments[i__25910__auto___35347]));

var G__35348 = (i__25910__auto___35347 + (1));
i__25910__auto___35347 = G__35348;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35345))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35345){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35345);
});})(g__35204__auto___35345))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__35204__auto___35345){
return (function (seq35321){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35321));
});})(g__35204__auto___35345))
;


var g__35204__auto___35349 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__35204__auto___35349){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35350 = arguments.length;
var i__25910__auto___35351 = (0);
while(true){
if((i__25910__auto___35351 < len__25909__auto___35350)){
args__25916__auto__.push((arguments[i__25910__auto___35351]));

var G__35352 = (i__25910__auto___35351 + (1));
i__25910__auto___35351 = G__35352;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35349))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35349){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35349);
});})(g__35204__auto___35349))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__35204__auto___35349){
return (function (seq35322){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35322));
});})(g__35204__auto___35349))
;


var g__35204__auto___35353 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__35204__auto___35353){
return (function cljs$spec$impl$gen$char(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35354 = arguments.length;
var i__25910__auto___35355 = (0);
while(true){
if((i__25910__auto___35355 < len__25909__auto___35354)){
args__25916__auto__.push((arguments[i__25910__auto___35355]));

var G__35356 = (i__25910__auto___35355 + (1));
i__25910__auto___35355 = G__35356;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35353))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35353){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35353);
});})(g__35204__auto___35353))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__35204__auto___35353){
return (function (seq35323){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35323));
});})(g__35204__auto___35353))
;


var g__35204__auto___35357 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__35204__auto___35357){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35358 = arguments.length;
var i__25910__auto___35359 = (0);
while(true){
if((i__25910__auto___35359 < len__25909__auto___35358)){
args__25916__auto__.push((arguments[i__25910__auto___35359]));

var G__35360 = (i__25910__auto___35359 + (1));
i__25910__auto___35359 = G__35360;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35357))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35357){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35357);
});})(g__35204__auto___35357))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__35204__auto___35357){
return (function (seq35324){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35324));
});})(g__35204__auto___35357))
;


var g__35204__auto___35361 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__35204__auto___35361){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35362 = arguments.length;
var i__25910__auto___35363 = (0);
while(true){
if((i__25910__auto___35363 < len__25909__auto___35362)){
args__25916__auto__.push((arguments[i__25910__auto___35363]));

var G__35364 = (i__25910__auto___35363 + (1));
i__25910__auto___35363 = G__35364;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35361))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35361){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35361);
});})(g__35204__auto___35361))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__35204__auto___35361){
return (function (seq35325){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35325));
});})(g__35204__auto___35361))
;


var g__35204__auto___35365 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__35204__auto___35365){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35366 = arguments.length;
var i__25910__auto___35367 = (0);
while(true){
if((i__25910__auto___35367 < len__25909__auto___35366)){
args__25916__auto__.push((arguments[i__25910__auto___35367]));

var G__35368 = (i__25910__auto___35367 + (1));
i__25910__auto___35367 = G__35368;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35365))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35365){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35365);
});})(g__35204__auto___35365))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__35204__auto___35365){
return (function (seq35326){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35326));
});})(g__35204__auto___35365))
;


var g__35204__auto___35369 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__35204__auto___35369){
return (function cljs$spec$impl$gen$double(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35370 = arguments.length;
var i__25910__auto___35371 = (0);
while(true){
if((i__25910__auto___35371 < len__25909__auto___35370)){
args__25916__auto__.push((arguments[i__25910__auto___35371]));

var G__35372 = (i__25910__auto___35371 + (1));
i__25910__auto___35371 = G__35372;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35369))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35369){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35369);
});})(g__35204__auto___35369))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__35204__auto___35369){
return (function (seq35327){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35327));
});})(g__35204__auto___35369))
;


var g__35204__auto___35373 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__35204__auto___35373){
return (function cljs$spec$impl$gen$int(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35374 = arguments.length;
var i__25910__auto___35375 = (0);
while(true){
if((i__25910__auto___35375 < len__25909__auto___35374)){
args__25916__auto__.push((arguments[i__25910__auto___35375]));

var G__35376 = (i__25910__auto___35375 + (1));
i__25910__auto___35375 = G__35376;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35373))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35373){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35373);
});})(g__35204__auto___35373))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__35204__auto___35373){
return (function (seq35328){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35328));
});})(g__35204__auto___35373))
;


var g__35204__auto___35377 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__35204__auto___35377){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35378 = arguments.length;
var i__25910__auto___35379 = (0);
while(true){
if((i__25910__auto___35379 < len__25909__auto___35378)){
args__25916__auto__.push((arguments[i__25910__auto___35379]));

var G__35380 = (i__25910__auto___35379 + (1));
i__25910__auto___35379 = G__35380;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35377))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35377){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35377);
});})(g__35204__auto___35377))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__35204__auto___35377){
return (function (seq35329){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35329));
});})(g__35204__auto___35377))
;


var g__35204__auto___35381 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__35204__auto___35381){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35382 = arguments.length;
var i__25910__auto___35383 = (0);
while(true){
if((i__25910__auto___35383 < len__25909__auto___35382)){
args__25916__auto__.push((arguments[i__25910__auto___35383]));

var G__35384 = (i__25910__auto___35383 + (1));
i__25910__auto___35383 = G__35384;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35381))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35381){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35381);
});})(g__35204__auto___35381))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__35204__auto___35381){
return (function (seq35330){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35330));
});})(g__35204__auto___35381))
;


var g__35204__auto___35385 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__35204__auto___35385){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35386 = arguments.length;
var i__25910__auto___35387 = (0);
while(true){
if((i__25910__auto___35387 < len__25909__auto___35386)){
args__25916__auto__.push((arguments[i__25910__auto___35387]));

var G__35388 = (i__25910__auto___35387 + (1));
i__25910__auto___35387 = G__35388;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35385))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35385){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35385);
});})(g__35204__auto___35385))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__35204__auto___35385){
return (function (seq35331){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35331));
});})(g__35204__auto___35385))
;


var g__35204__auto___35389 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__35204__auto___35389){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35390 = arguments.length;
var i__25910__auto___35391 = (0);
while(true){
if((i__25910__auto___35391 < len__25909__auto___35390)){
args__25916__auto__.push((arguments[i__25910__auto___35391]));

var G__35392 = (i__25910__auto___35391 + (1));
i__25910__auto___35391 = G__35392;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35389))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35389){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35389);
});})(g__35204__auto___35389))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__35204__auto___35389){
return (function (seq35332){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35332));
});})(g__35204__auto___35389))
;


var g__35204__auto___35393 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__35204__auto___35393){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35394 = arguments.length;
var i__25910__auto___35395 = (0);
while(true){
if((i__25910__auto___35395 < len__25909__auto___35394)){
args__25916__auto__.push((arguments[i__25910__auto___35395]));

var G__35396 = (i__25910__auto___35395 + (1));
i__25910__auto___35395 = G__35396;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35393))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35393){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35393);
});})(g__35204__auto___35393))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__35204__auto___35393){
return (function (seq35333){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35333));
});})(g__35204__auto___35393))
;


var g__35204__auto___35397 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__35204__auto___35397){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35398 = arguments.length;
var i__25910__auto___35399 = (0);
while(true){
if((i__25910__auto___35399 < len__25909__auto___35398)){
args__25916__auto__.push((arguments[i__25910__auto___35399]));

var G__35400 = (i__25910__auto___35399 + (1));
i__25910__auto___35399 = G__35400;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35397))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35397){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35397);
});})(g__35204__auto___35397))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__35204__auto___35397){
return (function (seq35334){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35334));
});})(g__35204__auto___35397))
;


var g__35204__auto___35401 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__35204__auto___35401){
return (function cljs$spec$impl$gen$string(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35402 = arguments.length;
var i__25910__auto___35403 = (0);
while(true){
if((i__25910__auto___35403 < len__25909__auto___35402)){
args__25916__auto__.push((arguments[i__25910__auto___35403]));

var G__35404 = (i__25910__auto___35403 + (1));
i__25910__auto___35403 = G__35404;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35401))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35401){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35401);
});})(g__35204__auto___35401))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__35204__auto___35401){
return (function (seq35335){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35335));
});})(g__35204__auto___35401))
;


var g__35204__auto___35405 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__35204__auto___35405){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35406 = arguments.length;
var i__25910__auto___35407 = (0);
while(true){
if((i__25910__auto___35407 < len__25909__auto___35406)){
args__25916__auto__.push((arguments[i__25910__auto___35407]));

var G__35408 = (i__25910__auto___35407 + (1));
i__25910__auto___35407 = G__35408;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35405))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35405){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35405);
});})(g__35204__auto___35405))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__35204__auto___35405){
return (function (seq35336){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35336));
});})(g__35204__auto___35405))
;


var g__35204__auto___35409 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__35204__auto___35409){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35410 = arguments.length;
var i__25910__auto___35411 = (0);
while(true){
if((i__25910__auto___35411 < len__25909__auto___35410)){
args__25916__auto__.push((arguments[i__25910__auto___35411]));

var G__35412 = (i__25910__auto___35411 + (1));
i__25910__auto___35411 = G__35412;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35409))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35409){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35409);
});})(g__35204__auto___35409))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__35204__auto___35409){
return (function (seq35337){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35337));
});})(g__35204__auto___35409))
;


var g__35204__auto___35413 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__35204__auto___35413){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35414 = arguments.length;
var i__25910__auto___35415 = (0);
while(true){
if((i__25910__auto___35415 < len__25909__auto___35414)){
args__25916__auto__.push((arguments[i__25910__auto___35415]));

var G__35416 = (i__25910__auto___35415 + (1));
i__25910__auto___35415 = G__35416;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35413))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35413){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35413);
});})(g__35204__auto___35413))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__35204__auto___35413){
return (function (seq35338){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35338));
});})(g__35204__auto___35413))
;


var g__35204__auto___35417 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__35204__auto___35417){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35418 = arguments.length;
var i__25910__auto___35419 = (0);
while(true){
if((i__25910__auto___35419 < len__25909__auto___35418)){
args__25916__auto__.push((arguments[i__25910__auto___35419]));

var G__35420 = (i__25910__auto___35419 + (1));
i__25910__auto___35419 = G__35420;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35417))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35417){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35417);
});})(g__35204__auto___35417))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__35204__auto___35417){
return (function (seq35339){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35339));
});})(g__35204__auto___35417))
;


var g__35204__auto___35421 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__35204__auto___35421){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35422 = arguments.length;
var i__25910__auto___35423 = (0);
while(true){
if((i__25910__auto___35423 < len__25909__auto___35422)){
args__25916__auto__.push((arguments[i__25910__auto___35423]));

var G__35424 = (i__25910__auto___35423 + (1));
i__25910__auto___35423 = G__35424;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});})(g__35204__auto___35421))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35204__auto___35421){
return (function (args){
return cljs.core.deref.call(null,g__35204__auto___35421);
});})(g__35204__auto___35421))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__35204__auto___35421){
return (function (seq35340){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35340));
});})(g__35204__auto___35421))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__25916__auto__ = [];
var len__25909__auto___35427 = arguments.length;
var i__25910__auto___35428 = (0);
while(true){
if((i__25910__auto___35428 < len__25909__auto___35427)){
args__25916__auto__.push((arguments[i__25910__auto___35428]));

var G__35429 = (i__25910__auto___35428 + (1));
i__25910__auto___35428 = G__35429;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__35425_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35425_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq35426){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35426));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__35430_SHARP_){
return (new Date(p1__35430_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1513979290345