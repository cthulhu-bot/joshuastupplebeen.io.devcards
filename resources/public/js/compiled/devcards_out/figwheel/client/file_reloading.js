// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
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
var or__24834__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24834__auto__){
return or__24834__auto__;
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
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24834__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34149_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34149_SHARP_));
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
var seq__34154 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34155 = null;
var count__34156 = (0);
var i__34157 = (0);
while(true){
if((i__34157 < count__34156)){
var n = cljs.core._nth.call(null,chunk__34155,i__34157);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34158 = seq__34154;
var G__34159 = chunk__34155;
var G__34160 = count__34156;
var G__34161 = (i__34157 + (1));
seq__34154 = G__34158;
chunk__34155 = G__34159;
count__34156 = G__34160;
i__34157 = G__34161;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34154);
if(temp__4657__auto__){
var seq__34154__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34154__$1)){
var c__25645__auto__ = cljs.core.chunk_first.call(null,seq__34154__$1);
var G__34162 = cljs.core.chunk_rest.call(null,seq__34154__$1);
var G__34163 = c__25645__auto__;
var G__34164 = cljs.core.count.call(null,c__25645__auto__);
var G__34165 = (0);
seq__34154 = G__34162;
chunk__34155 = G__34163;
count__34156 = G__34164;
i__34157 = G__34165;
continue;
} else {
var n = cljs.core.first.call(null,seq__34154__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34166 = cljs.core.next.call(null,seq__34154__$1);
var G__34167 = null;
var G__34168 = (0);
var G__34169 = (0);
seq__34154 = G__34166;
chunk__34155 = G__34167;
count__34156 = G__34168;
i__34157 = G__34169;
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

var seq__34220_34231 = cljs.core.seq.call(null,deps);
var chunk__34221_34232 = null;
var count__34222_34233 = (0);
var i__34223_34234 = (0);
while(true){
if((i__34223_34234 < count__34222_34233)){
var dep_34235 = cljs.core._nth.call(null,chunk__34221_34232,i__34223_34234);
topo_sort_helper_STAR_.call(null,dep_34235,(depth + (1)),state);

var G__34236 = seq__34220_34231;
var G__34237 = chunk__34221_34232;
var G__34238 = count__34222_34233;
var G__34239 = (i__34223_34234 + (1));
seq__34220_34231 = G__34236;
chunk__34221_34232 = G__34237;
count__34222_34233 = G__34238;
i__34223_34234 = G__34239;
continue;
} else {
var temp__4657__auto___34240 = cljs.core.seq.call(null,seq__34220_34231);
if(temp__4657__auto___34240){
var seq__34220_34241__$1 = temp__4657__auto___34240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34220_34241__$1)){
var c__25645__auto___34242 = cljs.core.chunk_first.call(null,seq__34220_34241__$1);
var G__34243 = cljs.core.chunk_rest.call(null,seq__34220_34241__$1);
var G__34244 = c__25645__auto___34242;
var G__34245 = cljs.core.count.call(null,c__25645__auto___34242);
var G__34246 = (0);
seq__34220_34231 = G__34243;
chunk__34221_34232 = G__34244;
count__34222_34233 = G__34245;
i__34223_34234 = G__34246;
continue;
} else {
var dep_34247 = cljs.core.first.call(null,seq__34220_34241__$1);
topo_sort_helper_STAR_.call(null,dep_34247,(depth + (1)),state);

var G__34248 = cljs.core.next.call(null,seq__34220_34241__$1);
var G__34249 = null;
var G__34250 = (0);
var G__34251 = (0);
seq__34220_34231 = G__34248;
chunk__34221_34232 = G__34249;
count__34222_34233 = G__34250;
i__34223_34234 = G__34251;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34224){
var vec__34228 = p__34224;
var seq__34229 = cljs.core.seq.call(null,vec__34228);
var first__34230 = cljs.core.first.call(null,seq__34229);
var seq__34229__$1 = cljs.core.next.call(null,seq__34229);
var x = first__34230;
var xs = seq__34229__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34228,seq__34229,first__34230,seq__34229__$1,x,xs,get_deps__$1){
return (function (p1__34170_SHARP_){
return clojure.set.difference.call(null,p1__34170_SHARP_,x);
});})(vec__34228,seq__34229,first__34230,seq__34229__$1,x,xs,get_deps__$1))
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
var seq__34264 = cljs.core.seq.call(null,provides);
var chunk__34265 = null;
var count__34266 = (0);
var i__34267 = (0);
while(true){
if((i__34267 < count__34266)){
var prov = cljs.core._nth.call(null,chunk__34265,i__34267);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34268_34276 = cljs.core.seq.call(null,requires);
var chunk__34269_34277 = null;
var count__34270_34278 = (0);
var i__34271_34279 = (0);
while(true){
if((i__34271_34279 < count__34270_34278)){
var req_34280 = cljs.core._nth.call(null,chunk__34269_34277,i__34271_34279);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34280,prov);

var G__34281 = seq__34268_34276;
var G__34282 = chunk__34269_34277;
var G__34283 = count__34270_34278;
var G__34284 = (i__34271_34279 + (1));
seq__34268_34276 = G__34281;
chunk__34269_34277 = G__34282;
count__34270_34278 = G__34283;
i__34271_34279 = G__34284;
continue;
} else {
var temp__4657__auto___34285 = cljs.core.seq.call(null,seq__34268_34276);
if(temp__4657__auto___34285){
var seq__34268_34286__$1 = temp__4657__auto___34285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34268_34286__$1)){
var c__25645__auto___34287 = cljs.core.chunk_first.call(null,seq__34268_34286__$1);
var G__34288 = cljs.core.chunk_rest.call(null,seq__34268_34286__$1);
var G__34289 = c__25645__auto___34287;
var G__34290 = cljs.core.count.call(null,c__25645__auto___34287);
var G__34291 = (0);
seq__34268_34276 = G__34288;
chunk__34269_34277 = G__34289;
count__34270_34278 = G__34290;
i__34271_34279 = G__34291;
continue;
} else {
var req_34292 = cljs.core.first.call(null,seq__34268_34286__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34292,prov);

var G__34293 = cljs.core.next.call(null,seq__34268_34286__$1);
var G__34294 = null;
var G__34295 = (0);
var G__34296 = (0);
seq__34268_34276 = G__34293;
chunk__34269_34277 = G__34294;
count__34270_34278 = G__34295;
i__34271_34279 = G__34296;
continue;
}
} else {
}
}
break;
}

var G__34297 = seq__34264;
var G__34298 = chunk__34265;
var G__34299 = count__34266;
var G__34300 = (i__34267 + (1));
seq__34264 = G__34297;
chunk__34265 = G__34298;
count__34266 = G__34299;
i__34267 = G__34300;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34264);
if(temp__4657__auto__){
var seq__34264__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34264__$1)){
var c__25645__auto__ = cljs.core.chunk_first.call(null,seq__34264__$1);
var G__34301 = cljs.core.chunk_rest.call(null,seq__34264__$1);
var G__34302 = c__25645__auto__;
var G__34303 = cljs.core.count.call(null,c__25645__auto__);
var G__34304 = (0);
seq__34264 = G__34301;
chunk__34265 = G__34302;
count__34266 = G__34303;
i__34267 = G__34304;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34264__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34272_34305 = cljs.core.seq.call(null,requires);
var chunk__34273_34306 = null;
var count__34274_34307 = (0);
var i__34275_34308 = (0);
while(true){
if((i__34275_34308 < count__34274_34307)){
var req_34309 = cljs.core._nth.call(null,chunk__34273_34306,i__34275_34308);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34309,prov);

var G__34310 = seq__34272_34305;
var G__34311 = chunk__34273_34306;
var G__34312 = count__34274_34307;
var G__34313 = (i__34275_34308 + (1));
seq__34272_34305 = G__34310;
chunk__34273_34306 = G__34311;
count__34274_34307 = G__34312;
i__34275_34308 = G__34313;
continue;
} else {
var temp__4657__auto___34314__$1 = cljs.core.seq.call(null,seq__34272_34305);
if(temp__4657__auto___34314__$1){
var seq__34272_34315__$1 = temp__4657__auto___34314__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34272_34315__$1)){
var c__25645__auto___34316 = cljs.core.chunk_first.call(null,seq__34272_34315__$1);
var G__34317 = cljs.core.chunk_rest.call(null,seq__34272_34315__$1);
var G__34318 = c__25645__auto___34316;
var G__34319 = cljs.core.count.call(null,c__25645__auto___34316);
var G__34320 = (0);
seq__34272_34305 = G__34317;
chunk__34273_34306 = G__34318;
count__34274_34307 = G__34319;
i__34275_34308 = G__34320;
continue;
} else {
var req_34321 = cljs.core.first.call(null,seq__34272_34315__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34321,prov);

var G__34322 = cljs.core.next.call(null,seq__34272_34315__$1);
var G__34323 = null;
var G__34324 = (0);
var G__34325 = (0);
seq__34272_34305 = G__34322;
chunk__34273_34306 = G__34323;
count__34274_34307 = G__34324;
i__34275_34308 = G__34325;
continue;
}
} else {
}
}
break;
}

var G__34326 = cljs.core.next.call(null,seq__34264__$1);
var G__34327 = null;
var G__34328 = (0);
var G__34329 = (0);
seq__34264 = G__34326;
chunk__34265 = G__34327;
count__34266 = G__34328;
i__34267 = G__34329;
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
var seq__34334_34338 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34335_34339 = null;
var count__34336_34340 = (0);
var i__34337_34341 = (0);
while(true){
if((i__34337_34341 < count__34336_34340)){
var ns_34342 = cljs.core._nth.call(null,chunk__34335_34339,i__34337_34341);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34342);

var G__34343 = seq__34334_34338;
var G__34344 = chunk__34335_34339;
var G__34345 = count__34336_34340;
var G__34346 = (i__34337_34341 + (1));
seq__34334_34338 = G__34343;
chunk__34335_34339 = G__34344;
count__34336_34340 = G__34345;
i__34337_34341 = G__34346;
continue;
} else {
var temp__4657__auto___34347 = cljs.core.seq.call(null,seq__34334_34338);
if(temp__4657__auto___34347){
var seq__34334_34348__$1 = temp__4657__auto___34347;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34334_34348__$1)){
var c__25645__auto___34349 = cljs.core.chunk_first.call(null,seq__34334_34348__$1);
var G__34350 = cljs.core.chunk_rest.call(null,seq__34334_34348__$1);
var G__34351 = c__25645__auto___34349;
var G__34352 = cljs.core.count.call(null,c__25645__auto___34349);
var G__34353 = (0);
seq__34334_34338 = G__34350;
chunk__34335_34339 = G__34351;
count__34336_34340 = G__34352;
i__34337_34341 = G__34353;
continue;
} else {
var ns_34354 = cljs.core.first.call(null,seq__34334_34348__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34354);

var G__34355 = cljs.core.next.call(null,seq__34334_34348__$1);
var G__34356 = null;
var G__34357 = (0);
var G__34358 = (0);
seq__34334_34338 = G__34355;
chunk__34335_34339 = G__34356;
count__34336_34340 = G__34357;
i__34337_34341 = G__34358;
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
goog.require_figwheel_backup_ = (function (){var or__24834__auto__ = goog.require__;
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
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
var G__34359__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34359 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34360__i = 0, G__34360__a = new Array(arguments.length -  0);
while (G__34360__i < G__34360__a.length) {G__34360__a[G__34360__i] = arguments[G__34360__i + 0]; ++G__34360__i;}
  args = new cljs.core.IndexedSeq(G__34360__a,0);
} 
return G__34359__delegate.call(this,args);};
G__34359.cljs$lang$maxFixedArity = 0;
G__34359.cljs$lang$applyTo = (function (arglist__34361){
var args = cljs.core.seq(arglist__34361);
return G__34359__delegate(args);
});
G__34359.cljs$core$IFn$_invoke$arity$variadic = G__34359__delegate;
return G__34359;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34362 = cljs.core._EQ_;
var expr__34363 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34362.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34363))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34362,expr__34363){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34362,expr__34363))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34362,expr__34363){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34365){if((e34365 instanceof Error)){
var e = e34365;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34365;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34362,expr__34363))
} else {
if(cljs.core.truth_(pred__34362.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34363))){
return ((function (pred__34362,expr__34363){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__34362,expr__34363){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__34362,expr__34363))
);

return deferred.addErrback(((function (deferred,pred__34362,expr__34363){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__34362,expr__34363))
);
});
;})(pred__34362,expr__34363))
} else {
if(cljs.core.truth_(pred__34362.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34363))){
return ((function (pred__34362,expr__34363){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34366){if((e34366 instanceof Error)){
var e = e34366;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34366;

}
}})());
});
;})(pred__34362,expr__34363))
} else {
return ((function (pred__34362,expr__34363){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34362,expr__34363))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34367,callback){
var map__34370 = p__34367;
var map__34370__$1 = ((((!((map__34370 == null)))?((((map__34370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34370):map__34370);
var file_msg = map__34370__$1;
var request_url = cljs.core.get.call(null,map__34370__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34370,map__34370__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34370,map__34370__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__){
return (function (state_34394){
var state_val_34395 = (state_34394[(1)]);
if((state_val_34395 === (7))){
var inst_34390 = (state_34394[(2)]);
var state_34394__$1 = state_34394;
var statearr_34396_34416 = state_34394__$1;
(statearr_34396_34416[(2)] = inst_34390);

(statearr_34396_34416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (1))){
var state_34394__$1 = state_34394;
var statearr_34397_34417 = state_34394__$1;
(statearr_34397_34417[(2)] = null);

(statearr_34397_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (4))){
var inst_34374 = (state_34394[(7)]);
var inst_34374__$1 = (state_34394[(2)]);
var state_34394__$1 = (function (){var statearr_34398 = state_34394;
(statearr_34398[(7)] = inst_34374__$1);

return statearr_34398;
})();
if(cljs.core.truth_(inst_34374__$1)){
var statearr_34399_34418 = state_34394__$1;
(statearr_34399_34418[(1)] = (5));

} else {
var statearr_34400_34419 = state_34394__$1;
(statearr_34400_34419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (6))){
var state_34394__$1 = state_34394;
var statearr_34401_34420 = state_34394__$1;
(statearr_34401_34420[(2)] = null);

(statearr_34401_34420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (3))){
var inst_34392 = (state_34394[(2)]);
var state_34394__$1 = state_34394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34394__$1,inst_34392);
} else {
if((state_val_34395 === (2))){
var state_34394__$1 = state_34394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34394__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34395 === (11))){
var inst_34386 = (state_34394[(2)]);
var state_34394__$1 = (function (){var statearr_34402 = state_34394;
(statearr_34402[(8)] = inst_34386);

return statearr_34402;
})();
var statearr_34403_34421 = state_34394__$1;
(statearr_34403_34421[(2)] = null);

(statearr_34403_34421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (9))){
var inst_34380 = (state_34394[(9)]);
var inst_34378 = (state_34394[(10)]);
var inst_34382 = inst_34380.call(null,inst_34378);
var state_34394__$1 = state_34394;
var statearr_34404_34422 = state_34394__$1;
(statearr_34404_34422[(2)] = inst_34382);

(statearr_34404_34422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (5))){
var inst_34374 = (state_34394[(7)]);
var inst_34376 = figwheel.client.file_reloading.blocking_load.call(null,inst_34374);
var state_34394__$1 = state_34394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34394__$1,(8),inst_34376);
} else {
if((state_val_34395 === (10))){
var inst_34378 = (state_34394[(10)]);
var inst_34384 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34378);
var state_34394__$1 = state_34394;
var statearr_34405_34423 = state_34394__$1;
(statearr_34405_34423[(2)] = inst_34384);

(statearr_34405_34423[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34395 === (8))){
var inst_34380 = (state_34394[(9)]);
var inst_34374 = (state_34394[(7)]);
var inst_34378 = (state_34394[(2)]);
var inst_34379 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34380__$1 = cljs.core.get.call(null,inst_34379,inst_34374);
var state_34394__$1 = (function (){var statearr_34406 = state_34394;
(statearr_34406[(9)] = inst_34380__$1);

(statearr_34406[(10)] = inst_34378);

return statearr_34406;
})();
if(cljs.core.truth_(inst_34380__$1)){
var statearr_34407_34424 = state_34394__$1;
(statearr_34407_34424[(1)] = (9));

} else {
var statearr_34408_34425 = state_34394__$1;
(statearr_34408_34425[(1)] = (10));

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
});})(c__29906__auto__))
;
return ((function (switch__29794__auto__,c__29906__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__29795__auto__ = null;
var figwheel$client$file_reloading$state_machine__29795__auto____0 = (function (){
var statearr_34412 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34412[(0)] = figwheel$client$file_reloading$state_machine__29795__auto__);

(statearr_34412[(1)] = (1));

return statearr_34412;
});
var figwheel$client$file_reloading$state_machine__29795__auto____1 = (function (state_34394){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_34394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e34413){if((e34413 instanceof Object)){
var ex__29798__auto__ = e34413;
var statearr_34414_34426 = state_34394;
(statearr_34414_34426[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34427 = state_34394;
state_34394 = G__34427;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__29795__auto__ = function(state_34394){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__29795__auto____1.call(this,state_34394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__29795__auto____0;
figwheel$client$file_reloading$state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__29795__auto____1;
return figwheel$client$file_reloading$state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__))
})();
var state__29908__auto__ = (function (){var statearr_34415 = f__29907__auto__.call(null);
(statearr_34415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_34415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__))
);

return c__29906__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34428,callback){
var map__34431 = p__34428;
var map__34431__$1 = ((((!((map__34431 == null)))?((((map__34431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34431):map__34431);
var file_msg = map__34431__$1;
var namespace = cljs.core.get.call(null,map__34431__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34431,map__34431__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34431,map__34431__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34433){
var map__34436 = p__34433;
var map__34436__$1 = ((((!((map__34436 == null)))?((((map__34436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34436):map__34436);
var file_msg = map__34436__$1;
var namespace = cljs.core.get.call(null,map__34436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34438){
var map__34441 = p__34438;
var map__34441__$1 = ((((!((map__34441 == null)))?((((map__34441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34441):map__34441);
var file_msg = map__34441__$1;
var namespace = cljs.core.get.call(null,map__34441__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24822__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__24822__auto__){
var or__24834__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
var or__24834__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24834__auto____$1)){
return or__24834__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24822__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34443,callback){
var map__34446 = p__34443;
var map__34446__$1 = ((((!((map__34446 == null)))?((((map__34446.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34446.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34446):map__34446);
var file_msg = map__34446__$1;
var request_url = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34446__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__29906__auto___34550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___34550,out){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___34550,out){
return (function (state_34532){
var state_val_34533 = (state_34532[(1)]);
if((state_val_34533 === (1))){
var inst_34506 = cljs.core.seq.call(null,files);
var inst_34507 = cljs.core.first.call(null,inst_34506);
var inst_34508 = cljs.core.next.call(null,inst_34506);
var inst_34509 = files;
var state_34532__$1 = (function (){var statearr_34534 = state_34532;
(statearr_34534[(7)] = inst_34507);

(statearr_34534[(8)] = inst_34509);

(statearr_34534[(9)] = inst_34508);

return statearr_34534;
})();
var statearr_34535_34551 = state_34532__$1;
(statearr_34535_34551[(2)] = null);

(statearr_34535_34551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (2))){
var inst_34515 = (state_34532[(10)]);
var inst_34509 = (state_34532[(8)]);
var inst_34514 = cljs.core.seq.call(null,inst_34509);
var inst_34515__$1 = cljs.core.first.call(null,inst_34514);
var inst_34516 = cljs.core.next.call(null,inst_34514);
var inst_34517 = (inst_34515__$1 == null);
var inst_34518 = cljs.core.not.call(null,inst_34517);
var state_34532__$1 = (function (){var statearr_34536 = state_34532;
(statearr_34536[(10)] = inst_34515__$1);

(statearr_34536[(11)] = inst_34516);

return statearr_34536;
})();
if(inst_34518){
var statearr_34537_34552 = state_34532__$1;
(statearr_34537_34552[(1)] = (4));

} else {
var statearr_34538_34553 = state_34532__$1;
(statearr_34538_34553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (3))){
var inst_34530 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34532__$1,inst_34530);
} else {
if((state_val_34533 === (4))){
var inst_34515 = (state_34532[(10)]);
var inst_34520 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34515);
var state_34532__$1 = state_34532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34532__$1,(7),inst_34520);
} else {
if((state_val_34533 === (5))){
var inst_34526 = cljs.core.async.close_BANG_.call(null,out);
var state_34532__$1 = state_34532;
var statearr_34539_34554 = state_34532__$1;
(statearr_34539_34554[(2)] = inst_34526);

(statearr_34539_34554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (6))){
var inst_34528 = (state_34532[(2)]);
var state_34532__$1 = state_34532;
var statearr_34540_34555 = state_34532__$1;
(statearr_34540_34555[(2)] = inst_34528);

(statearr_34540_34555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34533 === (7))){
var inst_34516 = (state_34532[(11)]);
var inst_34522 = (state_34532[(2)]);
var inst_34523 = cljs.core.async.put_BANG_.call(null,out,inst_34522);
var inst_34509 = inst_34516;
var state_34532__$1 = (function (){var statearr_34541 = state_34532;
(statearr_34541[(8)] = inst_34509);

(statearr_34541[(12)] = inst_34523);

return statearr_34541;
})();
var statearr_34542_34556 = state_34532__$1;
(statearr_34542_34556[(2)] = null);

(statearr_34542_34556[(1)] = (2));


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
});})(c__29906__auto___34550,out))
;
return ((function (switch__29794__auto__,c__29906__auto___34550,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto____0 = (function (){
var statearr_34546 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34546[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto__);

(statearr_34546[(1)] = (1));

return statearr_34546;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto____1 = (function (state_34532){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_34532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e34547){if((e34547 instanceof Object)){
var ex__29798__auto__ = e34547;
var statearr_34548_34557 = state_34532;
(statearr_34548_34557[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_34532;
state_34532 = G__34558;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto__ = function(state_34532){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto____1.call(this,state_34532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___34550,out))
})();
var state__29908__auto__ = (function (){var statearr_34549 = f__29907__auto__.call(null);
(statearr_34549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___34550);

return statearr_34549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___34550,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34559,opts){
var map__34563 = p__34559;
var map__34563__$1 = ((((!((map__34563 == null)))?((((map__34563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34563):map__34563);
var eval_body__$1 = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24822__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24822__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24822__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e34565){var e = e34565;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__34566_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34566_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34575){
var vec__34576 = p__34575;
var k = cljs.core.nth.call(null,vec__34576,(0),null);
var v = cljs.core.nth.call(null,vec__34576,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34579){
var vec__34580 = p__34579;
var k = cljs.core.nth.call(null,vec__34580,(0),null);
var v = cljs.core.nth.call(null,vec__34580,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34586,p__34587){
var map__34834 = p__34586;
var map__34834__$1 = ((((!((map__34834 == null)))?((((map__34834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34834):map__34834);
var opts = map__34834__$1;
var before_jsload = cljs.core.get.call(null,map__34834__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34834__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34834__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34835 = p__34587;
var map__34835__$1 = ((((!((map__34835 == null)))?((((map__34835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34835):map__34835);
var msg = map__34835__$1;
var files = cljs.core.get.call(null,map__34835__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34835__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34835__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34988){
var state_val_34989 = (state_34988[(1)]);
if((state_val_34989 === (7))){
var inst_34849 = (state_34988[(7)]);
var inst_34852 = (state_34988[(8)]);
var inst_34851 = (state_34988[(9)]);
var inst_34850 = (state_34988[(10)]);
var inst_34857 = cljs.core._nth.call(null,inst_34850,inst_34852);
var inst_34858 = figwheel.client.file_reloading.eval_body.call(null,inst_34857,opts);
var inst_34859 = (inst_34852 + (1));
var tmp34990 = inst_34849;
var tmp34991 = inst_34851;
var tmp34992 = inst_34850;
var inst_34849__$1 = tmp34990;
var inst_34850__$1 = tmp34992;
var inst_34851__$1 = tmp34991;
var inst_34852__$1 = inst_34859;
var state_34988__$1 = (function (){var statearr_34993 = state_34988;
(statearr_34993[(11)] = inst_34858);

(statearr_34993[(7)] = inst_34849__$1);

(statearr_34993[(8)] = inst_34852__$1);

(statearr_34993[(9)] = inst_34851__$1);

(statearr_34993[(10)] = inst_34850__$1);

return statearr_34993;
})();
var statearr_34994_35080 = state_34988__$1;
(statearr_34994_35080[(2)] = null);

(statearr_34994_35080[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (20))){
var inst_34892 = (state_34988[(12)]);
var inst_34900 = figwheel.client.file_reloading.sort_files.call(null,inst_34892);
var state_34988__$1 = state_34988;
var statearr_34995_35081 = state_34988__$1;
(statearr_34995_35081[(2)] = inst_34900);

(statearr_34995_35081[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (27))){
var state_34988__$1 = state_34988;
var statearr_34996_35082 = state_34988__$1;
(statearr_34996_35082[(2)] = null);

(statearr_34996_35082[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (1))){
var inst_34841 = (state_34988[(13)]);
var inst_34838 = before_jsload.call(null,files);
var inst_34839 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34840 = (function (){return ((function (inst_34841,inst_34838,inst_34839,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34583_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34583_SHARP_);
});
;})(inst_34841,inst_34838,inst_34839,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34841__$1 = cljs.core.filter.call(null,inst_34840,files);
var inst_34842 = cljs.core.not_empty.call(null,inst_34841__$1);
var state_34988__$1 = (function (){var statearr_34997 = state_34988;
(statearr_34997[(13)] = inst_34841__$1);

(statearr_34997[(14)] = inst_34838);

(statearr_34997[(15)] = inst_34839);

return statearr_34997;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34998_35083 = state_34988__$1;
(statearr_34998_35083[(1)] = (2));

} else {
var statearr_34999_35084 = state_34988__$1;
(statearr_34999_35084[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (24))){
var state_34988__$1 = state_34988;
var statearr_35000_35085 = state_34988__$1;
(statearr_35000_35085[(2)] = null);

(statearr_35000_35085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (39))){
var inst_34942 = (state_34988[(16)]);
var state_34988__$1 = state_34988;
var statearr_35001_35086 = state_34988__$1;
(statearr_35001_35086[(2)] = inst_34942);

(statearr_35001_35086[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (46))){
var inst_34983 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_35002_35087 = state_34988__$1;
(statearr_35002_35087[(2)] = inst_34983);

(statearr_35002_35087[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (4))){
var inst_34886 = (state_34988[(2)]);
var inst_34887 = cljs.core.List.EMPTY;
var inst_34888 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34887);
var inst_34889 = (function (){return ((function (inst_34886,inst_34887,inst_34888,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34584_SHARP_){
var and__24822__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34584_SHARP_);
if(cljs.core.truth_(and__24822__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34584_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34584_SHARP_)));
} else {
return and__24822__auto__;
}
});
;})(inst_34886,inst_34887,inst_34888,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34890 = cljs.core.filter.call(null,inst_34889,files);
var inst_34891 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34892 = cljs.core.concat.call(null,inst_34890,inst_34891);
var state_34988__$1 = (function (){var statearr_35003 = state_34988;
(statearr_35003[(17)] = inst_34886);

(statearr_35003[(12)] = inst_34892);

(statearr_35003[(18)] = inst_34888);

return statearr_35003;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35004_35088 = state_34988__$1;
(statearr_35004_35088[(1)] = (16));

} else {
var statearr_35005_35089 = state_34988__$1;
(statearr_35005_35089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (15))){
var inst_34876 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_35006_35090 = state_34988__$1;
(statearr_35006_35090[(2)] = inst_34876);

(statearr_35006_35090[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (21))){
var inst_34902 = (state_34988[(19)]);
var inst_34902__$1 = (state_34988[(2)]);
var inst_34903 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34902__$1);
var state_34988__$1 = (function (){var statearr_35007 = state_34988;
(statearr_35007[(19)] = inst_34902__$1);

return statearr_35007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34988__$1,(22),inst_34903);
} else {
if((state_val_34989 === (31))){
var inst_34986 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34988__$1,inst_34986);
} else {
if((state_val_34989 === (32))){
var inst_34942 = (state_34988[(16)]);
var inst_34947 = inst_34942.cljs$lang$protocol_mask$partition0$;
var inst_34948 = (inst_34947 & (64));
var inst_34949 = inst_34942.cljs$core$ISeq$;
var inst_34950 = (inst_34948) || (inst_34949);
var state_34988__$1 = state_34988;
if(cljs.core.truth_(inst_34950)){
var statearr_35008_35091 = state_34988__$1;
(statearr_35008_35091[(1)] = (35));

} else {
var statearr_35009_35092 = state_34988__$1;
(statearr_35009_35092[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (40))){
var inst_34963 = (state_34988[(20)]);
var inst_34962 = (state_34988[(2)]);
var inst_34963__$1 = cljs.core.get.call(null,inst_34962,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34964 = cljs.core.get.call(null,inst_34962,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34965 = cljs.core.not_empty.call(null,inst_34963__$1);
var state_34988__$1 = (function (){var statearr_35010 = state_34988;
(statearr_35010[(21)] = inst_34964);

(statearr_35010[(20)] = inst_34963__$1);

return statearr_35010;
})();
if(cljs.core.truth_(inst_34965)){
var statearr_35011_35093 = state_34988__$1;
(statearr_35011_35093[(1)] = (41));

} else {
var statearr_35012_35094 = state_34988__$1;
(statearr_35012_35094[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (33))){
var state_34988__$1 = state_34988;
var statearr_35013_35095 = state_34988__$1;
(statearr_35013_35095[(2)] = false);

(statearr_35013_35095[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (13))){
var inst_34862 = (state_34988[(22)]);
var inst_34866 = cljs.core.chunk_first.call(null,inst_34862);
var inst_34867 = cljs.core.chunk_rest.call(null,inst_34862);
var inst_34868 = cljs.core.count.call(null,inst_34866);
var inst_34849 = inst_34867;
var inst_34850 = inst_34866;
var inst_34851 = inst_34868;
var inst_34852 = (0);
var state_34988__$1 = (function (){var statearr_35014 = state_34988;
(statearr_35014[(7)] = inst_34849);

(statearr_35014[(8)] = inst_34852);

(statearr_35014[(9)] = inst_34851);

(statearr_35014[(10)] = inst_34850);

return statearr_35014;
})();
var statearr_35015_35096 = state_34988__$1;
(statearr_35015_35096[(2)] = null);

(statearr_35015_35096[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (22))){
var inst_34905 = (state_34988[(23)]);
var inst_34910 = (state_34988[(24)]);
var inst_34906 = (state_34988[(25)]);
var inst_34902 = (state_34988[(19)]);
var inst_34905__$1 = (state_34988[(2)]);
var inst_34906__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34905__$1);
var inst_34907 = (function (){var all_files = inst_34902;
var res_SINGLEQUOTE_ = inst_34905__$1;
var res = inst_34906__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34905,inst_34910,inst_34906,inst_34902,inst_34905__$1,inst_34906__$1,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34585_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34585_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34905,inst_34910,inst_34906,inst_34902,inst_34905__$1,inst_34906__$1,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34908 = cljs.core.filter.call(null,inst_34907,inst_34905__$1);
var inst_34909 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34910__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34909);
var inst_34911 = cljs.core.not_empty.call(null,inst_34910__$1);
var state_34988__$1 = (function (){var statearr_35016 = state_34988;
(statearr_35016[(23)] = inst_34905__$1);

(statearr_35016[(24)] = inst_34910__$1);

(statearr_35016[(25)] = inst_34906__$1);

(statearr_35016[(26)] = inst_34908);

return statearr_35016;
})();
if(cljs.core.truth_(inst_34911)){
var statearr_35017_35097 = state_34988__$1;
(statearr_35017_35097[(1)] = (23));

} else {
var statearr_35018_35098 = state_34988__$1;
(statearr_35018_35098[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (36))){
var state_34988__$1 = state_34988;
var statearr_35019_35099 = state_34988__$1;
(statearr_35019_35099[(2)] = false);

(statearr_35019_35099[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (41))){
var inst_34963 = (state_34988[(20)]);
var inst_34967 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34968 = cljs.core.map.call(null,inst_34967,inst_34963);
var inst_34969 = cljs.core.pr_str.call(null,inst_34968);
var inst_34970 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34969)].join('');
var inst_34971 = figwheel.client.utils.log.call(null,inst_34970);
var state_34988__$1 = state_34988;
var statearr_35020_35100 = state_34988__$1;
(statearr_35020_35100[(2)] = inst_34971);

(statearr_35020_35100[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (43))){
var inst_34964 = (state_34988[(21)]);
var inst_34974 = (state_34988[(2)]);
var inst_34975 = cljs.core.not_empty.call(null,inst_34964);
var state_34988__$1 = (function (){var statearr_35021 = state_34988;
(statearr_35021[(27)] = inst_34974);

return statearr_35021;
})();
if(cljs.core.truth_(inst_34975)){
var statearr_35022_35101 = state_34988__$1;
(statearr_35022_35101[(1)] = (44));

} else {
var statearr_35023_35102 = state_34988__$1;
(statearr_35023_35102[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (29))){
var inst_34905 = (state_34988[(23)]);
var inst_34910 = (state_34988[(24)]);
var inst_34906 = (state_34988[(25)]);
var inst_34942 = (state_34988[(16)]);
var inst_34908 = (state_34988[(26)]);
var inst_34902 = (state_34988[(19)]);
var inst_34938 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34941 = (function (){var all_files = inst_34902;
var res_SINGLEQUOTE_ = inst_34905;
var res = inst_34906;
var files_not_loaded = inst_34908;
var dependencies_that_loaded = inst_34910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34942,inst_34908,inst_34902,inst_34938,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34940){
var map__35024 = p__34940;
var map__35024__$1 = ((((!((map__35024 == null)))?((((map__35024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35024):map__35024);
var namespace = cljs.core.get.call(null,map__35024__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34942,inst_34908,inst_34902,inst_34938,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34942__$1 = cljs.core.group_by.call(null,inst_34941,inst_34908);
var inst_34944 = (inst_34942__$1 == null);
var inst_34945 = cljs.core.not.call(null,inst_34944);
var state_34988__$1 = (function (){var statearr_35026 = state_34988;
(statearr_35026[(16)] = inst_34942__$1);

(statearr_35026[(28)] = inst_34938);

return statearr_35026;
})();
if(inst_34945){
var statearr_35027_35103 = state_34988__$1;
(statearr_35027_35103[(1)] = (32));

} else {
var statearr_35028_35104 = state_34988__$1;
(statearr_35028_35104[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (44))){
var inst_34964 = (state_34988[(21)]);
var inst_34977 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34964);
var inst_34978 = cljs.core.pr_str.call(null,inst_34977);
var inst_34979 = [cljs.core.str("not required: "),cljs.core.str(inst_34978)].join('');
var inst_34980 = figwheel.client.utils.log.call(null,inst_34979);
var state_34988__$1 = state_34988;
var statearr_35029_35105 = state_34988__$1;
(statearr_35029_35105[(2)] = inst_34980);

(statearr_35029_35105[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (6))){
var inst_34883 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_35030_35106 = state_34988__$1;
(statearr_35030_35106[(2)] = inst_34883);

(statearr_35030_35106[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (28))){
var inst_34908 = (state_34988[(26)]);
var inst_34935 = (state_34988[(2)]);
var inst_34936 = cljs.core.not_empty.call(null,inst_34908);
var state_34988__$1 = (function (){var statearr_35031 = state_34988;
(statearr_35031[(29)] = inst_34935);

return statearr_35031;
})();
if(cljs.core.truth_(inst_34936)){
var statearr_35032_35107 = state_34988__$1;
(statearr_35032_35107[(1)] = (29));

} else {
var statearr_35033_35108 = state_34988__$1;
(statearr_35033_35108[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (25))){
var inst_34906 = (state_34988[(25)]);
var inst_34922 = (state_34988[(2)]);
var inst_34923 = cljs.core.not_empty.call(null,inst_34906);
var state_34988__$1 = (function (){var statearr_35034 = state_34988;
(statearr_35034[(30)] = inst_34922);

return statearr_35034;
})();
if(cljs.core.truth_(inst_34923)){
var statearr_35035_35109 = state_34988__$1;
(statearr_35035_35109[(1)] = (26));

} else {
var statearr_35036_35110 = state_34988__$1;
(statearr_35036_35110[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (34))){
var inst_34957 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
if(cljs.core.truth_(inst_34957)){
var statearr_35037_35111 = state_34988__$1;
(statearr_35037_35111[(1)] = (38));

} else {
var statearr_35038_35112 = state_34988__$1;
(statearr_35038_35112[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (17))){
var state_34988__$1 = state_34988;
var statearr_35039_35113 = state_34988__$1;
(statearr_35039_35113[(2)] = recompile_dependents);

(statearr_35039_35113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (3))){
var state_34988__$1 = state_34988;
var statearr_35040_35114 = state_34988__$1;
(statearr_35040_35114[(2)] = null);

(statearr_35040_35114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (12))){
var inst_34879 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_35041_35115 = state_34988__$1;
(statearr_35041_35115[(2)] = inst_34879);

(statearr_35041_35115[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (2))){
var inst_34841 = (state_34988[(13)]);
var inst_34848 = cljs.core.seq.call(null,inst_34841);
var inst_34849 = inst_34848;
var inst_34850 = null;
var inst_34851 = (0);
var inst_34852 = (0);
var state_34988__$1 = (function (){var statearr_35042 = state_34988;
(statearr_35042[(7)] = inst_34849);

(statearr_35042[(8)] = inst_34852);

(statearr_35042[(9)] = inst_34851);

(statearr_35042[(10)] = inst_34850);

return statearr_35042;
})();
var statearr_35043_35116 = state_34988__$1;
(statearr_35043_35116[(2)] = null);

(statearr_35043_35116[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (23))){
var inst_34905 = (state_34988[(23)]);
var inst_34910 = (state_34988[(24)]);
var inst_34906 = (state_34988[(25)]);
var inst_34908 = (state_34988[(26)]);
var inst_34902 = (state_34988[(19)]);
var inst_34913 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34915 = (function (){var all_files = inst_34902;
var res_SINGLEQUOTE_ = inst_34905;
var res = inst_34906;
var files_not_loaded = inst_34908;
var dependencies_that_loaded = inst_34910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34908,inst_34902,inst_34913,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34914){
var map__35044 = p__34914;
var map__35044__$1 = ((((!((map__35044 == null)))?((((map__35044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35044):map__35044);
var request_url = cljs.core.get.call(null,map__35044__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34908,inst_34902,inst_34913,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34916 = cljs.core.reverse.call(null,inst_34910);
var inst_34917 = cljs.core.map.call(null,inst_34915,inst_34916);
var inst_34918 = cljs.core.pr_str.call(null,inst_34917);
var inst_34919 = figwheel.client.utils.log.call(null,inst_34918);
var state_34988__$1 = (function (){var statearr_35046 = state_34988;
(statearr_35046[(31)] = inst_34913);

return statearr_35046;
})();
var statearr_35047_35117 = state_34988__$1;
(statearr_35047_35117[(2)] = inst_34919);

(statearr_35047_35117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (35))){
var state_34988__$1 = state_34988;
var statearr_35048_35118 = state_34988__$1;
(statearr_35048_35118[(2)] = true);

(statearr_35048_35118[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (19))){
var inst_34892 = (state_34988[(12)]);
var inst_34898 = figwheel.client.file_reloading.expand_files.call(null,inst_34892);
var state_34988__$1 = state_34988;
var statearr_35049_35119 = state_34988__$1;
(statearr_35049_35119[(2)] = inst_34898);

(statearr_35049_35119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (11))){
var state_34988__$1 = state_34988;
var statearr_35050_35120 = state_34988__$1;
(statearr_35050_35120[(2)] = null);

(statearr_35050_35120[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (9))){
var inst_34881 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_35051_35121 = state_34988__$1;
(statearr_35051_35121[(2)] = inst_34881);

(statearr_35051_35121[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (5))){
var inst_34852 = (state_34988[(8)]);
var inst_34851 = (state_34988[(9)]);
var inst_34854 = (inst_34852 < inst_34851);
var inst_34855 = inst_34854;
var state_34988__$1 = state_34988;
if(cljs.core.truth_(inst_34855)){
var statearr_35052_35122 = state_34988__$1;
(statearr_35052_35122[(1)] = (7));

} else {
var statearr_35053_35123 = state_34988__$1;
(statearr_35053_35123[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (14))){
var inst_34862 = (state_34988[(22)]);
var inst_34871 = cljs.core.first.call(null,inst_34862);
var inst_34872 = figwheel.client.file_reloading.eval_body.call(null,inst_34871,opts);
var inst_34873 = cljs.core.next.call(null,inst_34862);
var inst_34849 = inst_34873;
var inst_34850 = null;
var inst_34851 = (0);
var inst_34852 = (0);
var state_34988__$1 = (function (){var statearr_35054 = state_34988;
(statearr_35054[(7)] = inst_34849);

(statearr_35054[(8)] = inst_34852);

(statearr_35054[(32)] = inst_34872);

(statearr_35054[(9)] = inst_34851);

(statearr_35054[(10)] = inst_34850);

return statearr_35054;
})();
var statearr_35055_35124 = state_34988__$1;
(statearr_35055_35124[(2)] = null);

(statearr_35055_35124[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (45))){
var state_34988__$1 = state_34988;
var statearr_35056_35125 = state_34988__$1;
(statearr_35056_35125[(2)] = null);

(statearr_35056_35125[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (26))){
var inst_34905 = (state_34988[(23)]);
var inst_34910 = (state_34988[(24)]);
var inst_34906 = (state_34988[(25)]);
var inst_34908 = (state_34988[(26)]);
var inst_34902 = (state_34988[(19)]);
var inst_34925 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34927 = (function (){var all_files = inst_34902;
var res_SINGLEQUOTE_ = inst_34905;
var res = inst_34906;
var files_not_loaded = inst_34908;
var dependencies_that_loaded = inst_34910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34908,inst_34902,inst_34925,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34926){
var map__35057 = p__34926;
var map__35057__$1 = ((((!((map__35057 == null)))?((((map__35057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35057):map__35057);
var namespace = cljs.core.get.call(null,map__35057__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35057__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34908,inst_34902,inst_34925,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34928 = cljs.core.map.call(null,inst_34927,inst_34906);
var inst_34929 = cljs.core.pr_str.call(null,inst_34928);
var inst_34930 = figwheel.client.utils.log.call(null,inst_34929);
var inst_34931 = (function (){var all_files = inst_34902;
var res_SINGLEQUOTE_ = inst_34905;
var res = inst_34906;
var files_not_loaded = inst_34908;
var dependencies_that_loaded = inst_34910;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34908,inst_34902,inst_34925,inst_34927,inst_34928,inst_34929,inst_34930,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34905,inst_34910,inst_34906,inst_34908,inst_34902,inst_34925,inst_34927,inst_34928,inst_34929,inst_34930,state_val_34989,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34932 = setTimeout(inst_34931,(10));
var state_34988__$1 = (function (){var statearr_35059 = state_34988;
(statearr_35059[(33)] = inst_34925);

(statearr_35059[(34)] = inst_34930);

return statearr_35059;
})();
var statearr_35060_35126 = state_34988__$1;
(statearr_35060_35126[(2)] = inst_34932);

(statearr_35060_35126[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (16))){
var state_34988__$1 = state_34988;
var statearr_35061_35127 = state_34988__$1;
(statearr_35061_35127[(2)] = reload_dependents);

(statearr_35061_35127[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (38))){
var inst_34942 = (state_34988[(16)]);
var inst_34959 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34942);
var state_34988__$1 = state_34988;
var statearr_35062_35128 = state_34988__$1;
(statearr_35062_35128[(2)] = inst_34959);

(statearr_35062_35128[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (30))){
var state_34988__$1 = state_34988;
var statearr_35063_35129 = state_34988__$1;
(statearr_35063_35129[(2)] = null);

(statearr_35063_35129[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (10))){
var inst_34862 = (state_34988[(22)]);
var inst_34864 = cljs.core.chunked_seq_QMARK_.call(null,inst_34862);
var state_34988__$1 = state_34988;
if(inst_34864){
var statearr_35064_35130 = state_34988__$1;
(statearr_35064_35130[(1)] = (13));

} else {
var statearr_35065_35131 = state_34988__$1;
(statearr_35065_35131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (18))){
var inst_34896 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
if(cljs.core.truth_(inst_34896)){
var statearr_35066_35132 = state_34988__$1;
(statearr_35066_35132[(1)] = (19));

} else {
var statearr_35067_35133 = state_34988__$1;
(statearr_35067_35133[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (42))){
var state_34988__$1 = state_34988;
var statearr_35068_35134 = state_34988__$1;
(statearr_35068_35134[(2)] = null);

(statearr_35068_35134[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (37))){
var inst_34954 = (state_34988[(2)]);
var state_34988__$1 = state_34988;
var statearr_35069_35135 = state_34988__$1;
(statearr_35069_35135[(2)] = inst_34954);

(statearr_35069_35135[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34989 === (8))){
var inst_34862 = (state_34988[(22)]);
var inst_34849 = (state_34988[(7)]);
var inst_34862__$1 = cljs.core.seq.call(null,inst_34849);
var state_34988__$1 = (function (){var statearr_35070 = state_34988;
(statearr_35070[(22)] = inst_34862__$1);

return statearr_35070;
})();
if(inst_34862__$1){
var statearr_35071_35136 = state_34988__$1;
(statearr_35071_35136[(1)] = (10));

} else {
var statearr_35072_35137 = state_34988__$1;
(statearr_35072_35137[(1)] = (11));

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
});})(c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__29794__auto__,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto____0 = (function (){
var statearr_35076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35076[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto__);

(statearr_35076[(1)] = (1));

return statearr_35076;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto____1 = (function (state_34988){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_34988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e35077){if((e35077 instanceof Object)){
var ex__29798__auto__ = e35077;
var statearr_35078_35138 = state_34988;
(statearr_35078_35138[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35139 = state_34988;
state_34988 = G__35139;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto__ = function(state_34988){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto____1.call(this,state_34988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__29908__auto__ = (function (){var statearr_35079 = f__29907__auto__.call(null);
(statearr_35079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_35079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__,map__34834,map__34834__$1,opts,before_jsload,on_jsload,reload_dependents,map__34835,map__34835__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__29906__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35142,link){
var map__35145 = p__35142;
var map__35145__$1 = ((((!((map__35145 == null)))?((((map__35145.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35145.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35145):map__35145);
var file = cljs.core.get.call(null,map__35145__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35145,map__35145__$1,file){
return (function (p1__35140_SHARP_,p2__35141_SHARP_){
if(cljs.core._EQ_.call(null,p1__35140_SHARP_,p2__35141_SHARP_)){
return p1__35140_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35145,map__35145__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35151){
var map__35152 = p__35151;
var map__35152__$1 = ((((!((map__35152 == null)))?((((map__35152.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35152.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35152):map__35152);
var match_length = cljs.core.get.call(null,map__35152__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35152__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35147_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35147_SHARP_);
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
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35154_SHARP_,p2__35155_SHARP_){
return cljs.core.assoc.call(null,p1__35154_SHARP_,cljs.core.get.call(null,p2__35155_SHARP_,key),p2__35155_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35156 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35156);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35156);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35157,p__35158){
var map__35163 = p__35157;
var map__35163__$1 = ((((!((map__35163 == null)))?((((map__35163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35163):map__35163);
var on_cssload = cljs.core.get.call(null,map__35163__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35164 = p__35158;
var map__35164__$1 = ((((!((map__35164 == null)))?((((map__35164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35164):map__35164);
var files_msg = map__35164__$1;
var files = cljs.core.get.call(null,map__35164__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1513979289938