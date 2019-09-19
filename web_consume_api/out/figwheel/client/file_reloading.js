// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
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
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25432_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25432_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
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
var seq__25433 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25434 = null;
var count__25435 = (0);
var i__25436 = (0);
while(true){
if((i__25436 < count__25435)){
var n = cljs.core._nth.call(null,chunk__25434,i__25436);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25437 = seq__25433;
var G__25438 = chunk__25434;
var G__25439 = count__25435;
var G__25440 = (i__25436 + (1));
seq__25433 = G__25437;
chunk__25434 = G__25438;
count__25435 = G__25439;
i__25436 = G__25440;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25433);
if(temp__4657__auto__){
var seq__25433__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25433__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25433__$1);
var G__25441 = cljs.core.chunk_rest.call(null,seq__25433__$1);
var G__25442 = c__4550__auto__;
var G__25443 = cljs.core.count.call(null,c__4550__auto__);
var G__25444 = (0);
seq__25433 = G__25441;
chunk__25434 = G__25442;
count__25435 = G__25443;
i__25436 = G__25444;
continue;
} else {
var n = cljs.core.first.call(null,seq__25433__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25445 = cljs.core.next.call(null,seq__25433__$1);
var G__25446 = null;
var G__25447 = (0);
var G__25448 = (0);
seq__25433 = G__25445;
chunk__25434 = G__25446;
count__25435 = G__25447;
i__25436 = G__25448;
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
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__25449){
var vec__25450 = p__25449;
var _ = cljs.core.nth.call(null,vec__25450,(0),null);
var v = cljs.core.nth.call(null,vec__25450,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__25453){
var vec__25454 = p__25453;
var k = cljs.core.nth.call(null,vec__25454,(0),null);
var v = cljs.core.nth.call(null,vec__25454,(1),null);
return (k > current_depth);
}),topo_state));
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

var seq__25466_25474 = cljs.core.seq.call(null,deps);
var chunk__25467_25475 = null;
var count__25468_25476 = (0);
var i__25469_25477 = (0);
while(true){
if((i__25469_25477 < count__25468_25476)){
var dep_25478 = cljs.core._nth.call(null,chunk__25467_25475,i__25469_25477);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25478;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25478));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25478,(depth + (1)),state);
} else {
}


var G__25479 = seq__25466_25474;
var G__25480 = chunk__25467_25475;
var G__25481 = count__25468_25476;
var G__25482 = (i__25469_25477 + (1));
seq__25466_25474 = G__25479;
chunk__25467_25475 = G__25480;
count__25468_25476 = G__25481;
i__25469_25477 = G__25482;
continue;
} else {
var temp__4657__auto___25483 = cljs.core.seq.call(null,seq__25466_25474);
if(temp__4657__auto___25483){
var seq__25466_25484__$1 = temp__4657__auto___25483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25466_25484__$1)){
var c__4550__auto___25485 = cljs.core.chunk_first.call(null,seq__25466_25484__$1);
var G__25486 = cljs.core.chunk_rest.call(null,seq__25466_25484__$1);
var G__25487 = c__4550__auto___25485;
var G__25488 = cljs.core.count.call(null,c__4550__auto___25485);
var G__25489 = (0);
seq__25466_25474 = G__25486;
chunk__25467_25475 = G__25487;
count__25468_25476 = G__25488;
i__25469_25477 = G__25489;
continue;
} else {
var dep_25490 = cljs.core.first.call(null,seq__25466_25484__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25490;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25490));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25490,(depth + (1)),state);
} else {
}


var G__25491 = cljs.core.next.call(null,seq__25466_25484__$1);
var G__25492 = null;
var G__25493 = (0);
var G__25494 = (0);
seq__25466_25474 = G__25491;
chunk__25467_25475 = G__25492;
count__25468_25476 = G__25493;
i__25469_25477 = G__25494;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25470){
var vec__25471 = p__25470;
var seq__25472 = cljs.core.seq.call(null,vec__25471);
var first__25473 = cljs.core.first.call(null,seq__25472);
var seq__25472__$1 = cljs.core.next.call(null,seq__25472);
var x = first__25473;
var xs = seq__25472__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25471,seq__25472,first__25473,seq__25472__$1,x,xs,get_deps__$1){
return (function (p1__25457_SHARP_){
return clojure.set.difference.call(null,p1__25457_SHARP_,x);
});})(vec__25471,seq__25472,first__25473,seq__25472__$1,x,xs,get_deps__$1))
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
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25495 = cljs.core.seq.call(null,provides);
var chunk__25496 = null;
var count__25497 = (0);
var i__25498 = (0);
while(true){
if((i__25498 < count__25497)){
var prov = cljs.core._nth.call(null,chunk__25496,i__25498);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25507_25515 = cljs.core.seq.call(null,requires);
var chunk__25508_25516 = null;
var count__25509_25517 = (0);
var i__25510_25518 = (0);
while(true){
if((i__25510_25518 < count__25509_25517)){
var req_25519 = cljs.core._nth.call(null,chunk__25508_25516,i__25510_25518);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25519,prov);


var G__25520 = seq__25507_25515;
var G__25521 = chunk__25508_25516;
var G__25522 = count__25509_25517;
var G__25523 = (i__25510_25518 + (1));
seq__25507_25515 = G__25520;
chunk__25508_25516 = G__25521;
count__25509_25517 = G__25522;
i__25510_25518 = G__25523;
continue;
} else {
var temp__4657__auto___25524 = cljs.core.seq.call(null,seq__25507_25515);
if(temp__4657__auto___25524){
var seq__25507_25525__$1 = temp__4657__auto___25524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25507_25525__$1)){
var c__4550__auto___25526 = cljs.core.chunk_first.call(null,seq__25507_25525__$1);
var G__25527 = cljs.core.chunk_rest.call(null,seq__25507_25525__$1);
var G__25528 = c__4550__auto___25526;
var G__25529 = cljs.core.count.call(null,c__4550__auto___25526);
var G__25530 = (0);
seq__25507_25515 = G__25527;
chunk__25508_25516 = G__25528;
count__25509_25517 = G__25529;
i__25510_25518 = G__25530;
continue;
} else {
var req_25531 = cljs.core.first.call(null,seq__25507_25525__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25531,prov);


var G__25532 = cljs.core.next.call(null,seq__25507_25525__$1);
var G__25533 = null;
var G__25534 = (0);
var G__25535 = (0);
seq__25507_25515 = G__25532;
chunk__25508_25516 = G__25533;
count__25509_25517 = G__25534;
i__25510_25518 = G__25535;
continue;
}
} else {
}
}
break;
}


var G__25536 = seq__25495;
var G__25537 = chunk__25496;
var G__25538 = count__25497;
var G__25539 = (i__25498 + (1));
seq__25495 = G__25536;
chunk__25496 = G__25537;
count__25497 = G__25538;
i__25498 = G__25539;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25495);
if(temp__4657__auto__){
var seq__25495__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25495__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25495__$1);
var G__25540 = cljs.core.chunk_rest.call(null,seq__25495__$1);
var G__25541 = c__4550__auto__;
var G__25542 = cljs.core.count.call(null,c__4550__auto__);
var G__25543 = (0);
seq__25495 = G__25540;
chunk__25496 = G__25541;
count__25497 = G__25542;
i__25498 = G__25543;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25495__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25511_25544 = cljs.core.seq.call(null,requires);
var chunk__25512_25545 = null;
var count__25513_25546 = (0);
var i__25514_25547 = (0);
while(true){
if((i__25514_25547 < count__25513_25546)){
var req_25548 = cljs.core._nth.call(null,chunk__25512_25545,i__25514_25547);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25548,prov);


var G__25549 = seq__25511_25544;
var G__25550 = chunk__25512_25545;
var G__25551 = count__25513_25546;
var G__25552 = (i__25514_25547 + (1));
seq__25511_25544 = G__25549;
chunk__25512_25545 = G__25550;
count__25513_25546 = G__25551;
i__25514_25547 = G__25552;
continue;
} else {
var temp__4657__auto___25553__$1 = cljs.core.seq.call(null,seq__25511_25544);
if(temp__4657__auto___25553__$1){
var seq__25511_25554__$1 = temp__4657__auto___25553__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25511_25554__$1)){
var c__4550__auto___25555 = cljs.core.chunk_first.call(null,seq__25511_25554__$1);
var G__25556 = cljs.core.chunk_rest.call(null,seq__25511_25554__$1);
var G__25557 = c__4550__auto___25555;
var G__25558 = cljs.core.count.call(null,c__4550__auto___25555);
var G__25559 = (0);
seq__25511_25544 = G__25556;
chunk__25512_25545 = G__25557;
count__25513_25546 = G__25558;
i__25514_25547 = G__25559;
continue;
} else {
var req_25560 = cljs.core.first.call(null,seq__25511_25554__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25560,prov);


var G__25561 = cljs.core.next.call(null,seq__25511_25554__$1);
var G__25562 = null;
var G__25563 = (0);
var G__25564 = (0);
seq__25511_25544 = G__25561;
chunk__25512_25545 = G__25562;
count__25513_25546 = G__25563;
i__25514_25547 = G__25564;
continue;
}
} else {
}
}
break;
}


var G__25565 = cljs.core.next.call(null,seq__25495__$1);
var G__25566 = null;
var G__25567 = (0);
var G__25568 = (0);
seq__25495 = G__25565;
chunk__25496 = G__25566;
count__25497 = G__25567;
i__25498 = G__25568;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25569_25573 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25570_25574 = null;
var count__25571_25575 = (0);
var i__25572_25576 = (0);
while(true){
if((i__25572_25576 < count__25571_25575)){
var ns_25577 = cljs.core._nth.call(null,chunk__25570_25574,i__25572_25576);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25577);


var G__25578 = seq__25569_25573;
var G__25579 = chunk__25570_25574;
var G__25580 = count__25571_25575;
var G__25581 = (i__25572_25576 + (1));
seq__25569_25573 = G__25578;
chunk__25570_25574 = G__25579;
count__25571_25575 = G__25580;
i__25572_25576 = G__25581;
continue;
} else {
var temp__4657__auto___25582 = cljs.core.seq.call(null,seq__25569_25573);
if(temp__4657__auto___25582){
var seq__25569_25583__$1 = temp__4657__auto___25582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25569_25583__$1)){
var c__4550__auto___25584 = cljs.core.chunk_first.call(null,seq__25569_25583__$1);
var G__25585 = cljs.core.chunk_rest.call(null,seq__25569_25583__$1);
var G__25586 = c__4550__auto___25584;
var G__25587 = cljs.core.count.call(null,c__4550__auto___25584);
var G__25588 = (0);
seq__25569_25573 = G__25585;
chunk__25570_25574 = G__25586;
count__25571_25575 = G__25587;
i__25572_25576 = G__25588;
continue;
} else {
var ns_25589 = cljs.core.first.call(null,seq__25569_25583__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25589);


var G__25590 = cljs.core.next.call(null,seq__25569_25583__$1);
var G__25591 = null;
var G__25592 = (0);
var G__25593 = (0);
seq__25569_25573 = G__25590;
chunk__25570_25574 = G__25591;
count__25571_25575 = G__25592;
i__25572_25576 = G__25593;
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
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
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
var G__25594__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25594 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25595__i = 0, G__25595__a = new Array(arguments.length -  0);
while (G__25595__i < G__25595__a.length) {G__25595__a[G__25595__i] = arguments[G__25595__i + 0]; ++G__25595__i;}
  args = new cljs.core.IndexedSeq(G__25595__a,0,null);
} 
return G__25594__delegate.call(this,args);};
G__25594.cljs$lang$maxFixedArity = 0;
G__25594.cljs$lang$applyTo = (function (arglist__25596){
var args = cljs.core.seq(arglist__25596);
return G__25594__delegate(args);
});
G__25594.cljs$core$IFn$_invoke$arity$variadic = G__25594__delegate;
return G__25594;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__25597_SHARP_,p2__25598_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25597_SHARP_)),p2__25598_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__25599_SHARP_,p2__25600_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25599_SHARP_),p2__25600_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25601 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25601.addCallback(((function (G__25601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25601))
);

G__25601.addErrback(((function (G__25601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25601))
);

return G__25601;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25602){if((e25602 instanceof Error)){
var e = e25602;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25602;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25603){if((e25603 instanceof Error)){
var e = e25603;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25603;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25604 = cljs.core._EQ_;
var expr__25605 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25604.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25605))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25604.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25605))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25604.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25605))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25604,expr__25605){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25604,expr__25605))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25607,callback){
var map__25608 = p__25607;
var map__25608__$1 = (((((!((map__25608 == null))))?(((((map__25608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25608):map__25608);
var file_msg = map__25608__$1;
var request_url = cljs.core.get.call(null,map__25608__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25608,map__25608__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25608,map__25608__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto__){
return (function (state_25646){
var state_val_25647 = (state_25646[(1)]);
if((state_val_25647 === (7))){
var inst_25642 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25648_25674 = state_25646__$1;
(statearr_25648_25674[(2)] = inst_25642);

(statearr_25648_25674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (1))){
var state_25646__$1 = state_25646;
var statearr_25649_25675 = state_25646__$1;
(statearr_25649_25675[(2)] = null);

(statearr_25649_25675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (4))){
var inst_25612 = (state_25646[(7)]);
var inst_25612__$1 = (state_25646[(2)]);
var state_25646__$1 = (function (){var statearr_25650 = state_25646;
(statearr_25650[(7)] = inst_25612__$1);

return statearr_25650;
})();
if(cljs.core.truth_(inst_25612__$1)){
var statearr_25651_25676 = state_25646__$1;
(statearr_25651_25676[(1)] = (5));

} else {
var statearr_25652_25677 = state_25646__$1;
(statearr_25652_25677[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (15))){
var inst_25627 = (state_25646[(8)]);
var inst_25625 = (state_25646[(9)]);
var inst_25629 = inst_25627.call(null,inst_25625);
var state_25646__$1 = state_25646;
var statearr_25653_25678 = state_25646__$1;
(statearr_25653_25678[(2)] = inst_25629);

(statearr_25653_25678[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (13))){
var inst_25636 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25654_25679 = state_25646__$1;
(statearr_25654_25679[(2)] = inst_25636);

(statearr_25654_25679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (6))){
var state_25646__$1 = state_25646;
var statearr_25655_25680 = state_25646__$1;
(statearr_25655_25680[(2)] = null);

(statearr_25655_25680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (17))){
var inst_25633 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
var statearr_25656_25681 = state_25646__$1;
(statearr_25656_25681[(2)] = inst_25633);

(statearr_25656_25681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (3))){
var inst_25644 = (state_25646[(2)]);
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25646__$1,inst_25644);
} else {
if((state_val_25647 === (12))){
var state_25646__$1 = state_25646;
var statearr_25657_25682 = state_25646__$1;
(statearr_25657_25682[(2)] = null);

(statearr_25657_25682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (2))){
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25646__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25647 === (11))){
var inst_25617 = (state_25646[(10)]);
var inst_25623 = figwheel.client.file_reloading.blocking_load.call(null,inst_25617);
var state_25646__$1 = state_25646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25646__$1,(14),inst_25623);
} else {
if((state_val_25647 === (9))){
var inst_25617 = (state_25646[(10)]);
var state_25646__$1 = state_25646;
if(cljs.core.truth_(inst_25617)){
var statearr_25658_25683 = state_25646__$1;
(statearr_25658_25683[(1)] = (11));

} else {
var statearr_25659_25684 = state_25646__$1;
(statearr_25659_25684[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (5))){
var inst_25612 = (state_25646[(7)]);
var inst_25618 = (state_25646[(11)]);
var inst_25617 = cljs.core.nth.call(null,inst_25612,(0),null);
var inst_25618__$1 = cljs.core.nth.call(null,inst_25612,(1),null);
var state_25646__$1 = (function (){var statearr_25660 = state_25646;
(statearr_25660[(11)] = inst_25618__$1);

(statearr_25660[(10)] = inst_25617);

return statearr_25660;
})();
if(cljs.core.truth_(inst_25618__$1)){
var statearr_25661_25685 = state_25646__$1;
(statearr_25661_25685[(1)] = (8));

} else {
var statearr_25662_25686 = state_25646__$1;
(statearr_25662_25686[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (14))){
var inst_25627 = (state_25646[(8)]);
var inst_25617 = (state_25646[(10)]);
var inst_25625 = (state_25646[(2)]);
var inst_25626 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25627__$1 = cljs.core.get.call(null,inst_25626,inst_25617);
var state_25646__$1 = (function (){var statearr_25663 = state_25646;
(statearr_25663[(8)] = inst_25627__$1);

(statearr_25663[(9)] = inst_25625);

return statearr_25663;
})();
if(cljs.core.truth_(inst_25627__$1)){
var statearr_25664_25687 = state_25646__$1;
(statearr_25664_25687[(1)] = (15));

} else {
var statearr_25665_25688 = state_25646__$1;
(statearr_25665_25688[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (16))){
var inst_25625 = (state_25646[(9)]);
var inst_25631 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25625);
var state_25646__$1 = state_25646;
var statearr_25666_25689 = state_25646__$1;
(statearr_25666_25689[(2)] = inst_25631);

(statearr_25666_25689[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (10))){
var inst_25638 = (state_25646[(2)]);
var state_25646__$1 = (function (){var statearr_25667 = state_25646;
(statearr_25667[(12)] = inst_25638);

return statearr_25667;
})();
var statearr_25668_25690 = state_25646__$1;
(statearr_25668_25690[(2)] = null);

(statearr_25668_25690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25647 === (8))){
var inst_25618 = (state_25646[(11)]);
var inst_25620 = eval(inst_25618);
var state_25646__$1 = state_25646;
var statearr_25669_25691 = state_25646__$1;
(statearr_25669_25691[(2)] = inst_25620);

(statearr_25669_25691[(1)] = (10));


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
});})(c__21145__auto__))
;
return ((function (switch__20275__auto__,c__21145__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20276__auto__ = null;
var figwheel$client$file_reloading$state_machine__20276__auto____0 = (function (){
var statearr_25670 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25670[(0)] = figwheel$client$file_reloading$state_machine__20276__auto__);

(statearr_25670[(1)] = (1));

return statearr_25670;
});
var figwheel$client$file_reloading$state_machine__20276__auto____1 = (function (state_25646){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_25646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e25671){if((e25671 instanceof Object)){
var ex__20279__auto__ = e25671;
var statearr_25672_25692 = state_25646;
(statearr_25672_25692[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25693 = state_25646;
state_25646 = G__25693;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20276__auto__ = function(state_25646){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20276__auto____1.call(this,state_25646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20276__auto____0;
figwheel$client$file_reloading$state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20276__auto____1;
return figwheel$client$file_reloading$state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_25673 = f__21146__auto__.call(null);
(statearr_25673[(6)] = c__21145__auto__);

return statearr_25673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25695 = arguments.length;
switch (G__25695) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25697,callback){
var map__25698 = p__25697;
var map__25698__$1 = (((((!((map__25698 == null))))?(((((map__25698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25698):map__25698);
var file_msg = map__25698__$1;
var namespace = cljs.core.get.call(null,map__25698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25698,map__25698__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25698,map__25698__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25700){
var map__25701 = p__25700;
var map__25701__$1 = (((((!((map__25701 == null))))?(((((map__25701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25701):map__25701);
var file_msg = map__25701__$1;
var namespace = cljs.core.get.call(null,map__25701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25703){
var map__25704 = p__25703;
var map__25704__$1 = (((((!((map__25704 == null))))?(((((map__25704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25704):map__25704);
var file_msg = map__25704__$1;
var namespace = cljs.core.get.call(null,map__25704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25706,callback){
var map__25707 = p__25706;
var map__25707__$1 = (((((!((map__25707 == null))))?(((((map__25707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25707):map__25707);
var file_msg = map__25707__$1;
var request_url = cljs.core.get.call(null,map__25707__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25707__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__21145__auto___25757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___25757,out){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto___25757,out){
return (function (state_25742){
var state_val_25743 = (state_25742[(1)]);
if((state_val_25743 === (1))){
var inst_25716 = cljs.core.seq.call(null,files);
var inst_25717 = cljs.core.first.call(null,inst_25716);
var inst_25718 = cljs.core.next.call(null,inst_25716);
var inst_25719 = files;
var state_25742__$1 = (function (){var statearr_25744 = state_25742;
(statearr_25744[(7)] = inst_25718);

(statearr_25744[(8)] = inst_25719);

(statearr_25744[(9)] = inst_25717);

return statearr_25744;
})();
var statearr_25745_25758 = state_25742__$1;
(statearr_25745_25758[(2)] = null);

(statearr_25745_25758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (2))){
var inst_25725 = (state_25742[(10)]);
var inst_25719 = (state_25742[(8)]);
var inst_25724 = cljs.core.seq.call(null,inst_25719);
var inst_25725__$1 = cljs.core.first.call(null,inst_25724);
var inst_25726 = cljs.core.next.call(null,inst_25724);
var inst_25727 = (inst_25725__$1 == null);
var inst_25728 = cljs.core.not.call(null,inst_25727);
var state_25742__$1 = (function (){var statearr_25746 = state_25742;
(statearr_25746[(10)] = inst_25725__$1);

(statearr_25746[(11)] = inst_25726);

return statearr_25746;
})();
if(inst_25728){
var statearr_25747_25759 = state_25742__$1;
(statearr_25747_25759[(1)] = (4));

} else {
var statearr_25748_25760 = state_25742__$1;
(statearr_25748_25760[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (3))){
var inst_25740 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25742__$1,inst_25740);
} else {
if((state_val_25743 === (4))){
var inst_25725 = (state_25742[(10)]);
var inst_25730 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25725);
var state_25742__$1 = state_25742;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25742__$1,(7),inst_25730);
} else {
if((state_val_25743 === (5))){
var inst_25736 = cljs.core.async.close_BANG_.call(null,out);
var state_25742__$1 = state_25742;
var statearr_25749_25761 = state_25742__$1;
(statearr_25749_25761[(2)] = inst_25736);

(statearr_25749_25761[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (6))){
var inst_25738 = (state_25742[(2)]);
var state_25742__$1 = state_25742;
var statearr_25750_25762 = state_25742__$1;
(statearr_25750_25762[(2)] = inst_25738);

(statearr_25750_25762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25743 === (7))){
var inst_25726 = (state_25742[(11)]);
var inst_25732 = (state_25742[(2)]);
var inst_25733 = cljs.core.async.put_BANG_.call(null,out,inst_25732);
var inst_25719 = inst_25726;
var state_25742__$1 = (function (){var statearr_25751 = state_25742;
(statearr_25751[(8)] = inst_25719);

(statearr_25751[(12)] = inst_25733);

return statearr_25751;
})();
var statearr_25752_25763 = state_25742__$1;
(statearr_25752_25763[(2)] = null);

(statearr_25752_25763[(1)] = (2));


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
});})(c__21145__auto___25757,out))
;
return ((function (switch__20275__auto__,c__21145__auto___25757,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____0 = (function (){
var statearr_25753 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25753[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__);

(statearr_25753[(1)] = (1));

return statearr_25753;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____1 = (function (state_25742){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_25742);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e25754){if((e25754 instanceof Object)){
var ex__20279__auto__ = e25754;
var statearr_25755_25764 = state_25742;
(statearr_25755_25764[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25742);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25765 = state_25742;
state_25742 = G__25765;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__ = function(state_25742){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____1.call(this,state_25742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto___25757,out))
})();
var state__21147__auto__ = (function (){var statearr_25756 = f__21146__auto__.call(null);
(statearr_25756[(6)] = c__21145__auto___25757);

return statearr_25756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___25757,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25766,opts){
var map__25767 = p__25766;
var map__25767__$1 = (((((!((map__25767 == null))))?(((((map__25767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25767):map__25767);
var eval_body = cljs.core.get.call(null,map__25767__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25767__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25769){var e = e25769;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25770_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25770_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25771){
var vec__25772 = p__25771;
var k = cljs.core.nth.call(null,vec__25772,(0),null);
var v = cljs.core.nth.call(null,vec__25772,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25775){
var vec__25776 = p__25775;
var k = cljs.core.nth.call(null,vec__25776,(0),null);
var v = cljs.core.nth.call(null,vec__25776,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25782,p__25783){
var map__25784 = p__25782;
var map__25784__$1 = (((((!((map__25784 == null))))?(((((map__25784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25784):map__25784);
var opts = map__25784__$1;
var before_jsload = cljs.core.get.call(null,map__25784__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25784__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25784__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25785 = p__25783;
var map__25785__$1 = (((((!((map__25785 == null))))?(((((map__25785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25785):map__25785);
var msg = map__25785__$1;
var files = cljs.core.get.call(null,map__25785__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25785__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25785__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25939){
var state_val_25940 = (state_25939[(1)]);
if((state_val_25940 === (7))){
var inst_25802 = (state_25939[(7)]);
var inst_25801 = (state_25939[(8)]);
var inst_25800 = (state_25939[(9)]);
var inst_25799 = (state_25939[(10)]);
var inst_25807 = cljs.core._nth.call(null,inst_25800,inst_25802);
var inst_25808 = figwheel.client.file_reloading.eval_body.call(null,inst_25807,opts);
var inst_25809 = (inst_25802 + (1));
var tmp25941 = inst_25801;
var tmp25942 = inst_25800;
var tmp25943 = inst_25799;
var inst_25799__$1 = tmp25943;
var inst_25800__$1 = tmp25942;
var inst_25801__$1 = tmp25941;
var inst_25802__$1 = inst_25809;
var state_25939__$1 = (function (){var statearr_25944 = state_25939;
(statearr_25944[(7)] = inst_25802__$1);

(statearr_25944[(8)] = inst_25801__$1);

(statearr_25944[(9)] = inst_25800__$1);

(statearr_25944[(10)] = inst_25799__$1);

(statearr_25944[(11)] = inst_25808);

return statearr_25944;
})();
var statearr_25945_26028 = state_25939__$1;
(statearr_25945_26028[(2)] = null);

(statearr_25945_26028[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (20))){
var inst_25842 = (state_25939[(12)]);
var inst_25850 = figwheel.client.file_reloading.sort_files.call(null,inst_25842);
var state_25939__$1 = state_25939;
var statearr_25946_26029 = state_25939__$1;
(statearr_25946_26029[(2)] = inst_25850);

(statearr_25946_26029[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (27))){
var state_25939__$1 = state_25939;
var statearr_25947_26030 = state_25939__$1;
(statearr_25947_26030[(2)] = null);

(statearr_25947_26030[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (1))){
var inst_25791 = (state_25939[(13)]);
var inst_25788 = before_jsload.call(null,files);
var inst_25789 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25790 = (function (){return ((function (inst_25791,inst_25788,inst_25789,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25779_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25779_SHARP_);
});
;})(inst_25791,inst_25788,inst_25789,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25791__$1 = cljs.core.filter.call(null,inst_25790,files);
var inst_25792 = cljs.core.not_empty.call(null,inst_25791__$1);
var state_25939__$1 = (function (){var statearr_25948 = state_25939;
(statearr_25948[(14)] = inst_25788);

(statearr_25948[(15)] = inst_25789);

(statearr_25948[(13)] = inst_25791__$1);

return statearr_25948;
})();
if(cljs.core.truth_(inst_25792)){
var statearr_25949_26031 = state_25939__$1;
(statearr_25949_26031[(1)] = (2));

} else {
var statearr_25950_26032 = state_25939__$1;
(statearr_25950_26032[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (24))){
var state_25939__$1 = state_25939;
var statearr_25951_26033 = state_25939__$1;
(statearr_25951_26033[(2)] = null);

(statearr_25951_26033[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (39))){
var inst_25892 = (state_25939[(16)]);
var state_25939__$1 = state_25939;
var statearr_25952_26034 = state_25939__$1;
(statearr_25952_26034[(2)] = inst_25892);

(statearr_25952_26034[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (46))){
var inst_25934 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25953_26035 = state_25939__$1;
(statearr_25953_26035[(2)] = inst_25934);

(statearr_25953_26035[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (4))){
var inst_25836 = (state_25939[(2)]);
var inst_25837 = cljs.core.List.EMPTY;
var inst_25838 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25837);
var inst_25839 = (function (){return ((function (inst_25836,inst_25837,inst_25838,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25780_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25780_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25780_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25780_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_25836,inst_25837,inst_25838,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25840 = cljs.core.filter.call(null,inst_25839,files);
var inst_25841 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25842 = cljs.core.concat.call(null,inst_25840,inst_25841);
var state_25939__$1 = (function (){var statearr_25954 = state_25939;
(statearr_25954[(12)] = inst_25842);

(statearr_25954[(17)] = inst_25838);

(statearr_25954[(18)] = inst_25836);

return statearr_25954;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25955_26036 = state_25939__$1;
(statearr_25955_26036[(1)] = (16));

} else {
var statearr_25956_26037 = state_25939__$1;
(statearr_25956_26037[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (15))){
var inst_25826 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25957_26038 = state_25939__$1;
(statearr_25957_26038[(2)] = inst_25826);

(statearr_25957_26038[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (21))){
var inst_25852 = (state_25939[(19)]);
var inst_25852__$1 = (state_25939[(2)]);
var inst_25853 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25852__$1);
var state_25939__$1 = (function (){var statearr_25958 = state_25939;
(statearr_25958[(19)] = inst_25852__$1);

return statearr_25958;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25939__$1,(22),inst_25853);
} else {
if((state_val_25940 === (31))){
var inst_25937 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25939__$1,inst_25937);
} else {
if((state_val_25940 === (32))){
var inst_25892 = (state_25939[(16)]);
var inst_25897 = inst_25892.cljs$lang$protocol_mask$partition0$;
var inst_25898 = (inst_25897 & (64));
var inst_25899 = inst_25892.cljs$core$ISeq$;
var inst_25900 = (cljs.core.PROTOCOL_SENTINEL === inst_25899);
var inst_25901 = ((inst_25898) || (inst_25900));
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25901)){
var statearr_25959_26039 = state_25939__$1;
(statearr_25959_26039[(1)] = (35));

} else {
var statearr_25960_26040 = state_25939__$1;
(statearr_25960_26040[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (40))){
var inst_25914 = (state_25939[(20)]);
var inst_25913 = (state_25939[(2)]);
var inst_25914__$1 = cljs.core.get.call(null,inst_25913,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25915 = cljs.core.get.call(null,inst_25913,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25916 = cljs.core.not_empty.call(null,inst_25914__$1);
var state_25939__$1 = (function (){var statearr_25961 = state_25939;
(statearr_25961[(20)] = inst_25914__$1);

(statearr_25961[(21)] = inst_25915);

return statearr_25961;
})();
if(cljs.core.truth_(inst_25916)){
var statearr_25962_26041 = state_25939__$1;
(statearr_25962_26041[(1)] = (41));

} else {
var statearr_25963_26042 = state_25939__$1;
(statearr_25963_26042[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (33))){
var state_25939__$1 = state_25939;
var statearr_25964_26043 = state_25939__$1;
(statearr_25964_26043[(2)] = false);

(statearr_25964_26043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (13))){
var inst_25812 = (state_25939[(22)]);
var inst_25816 = cljs.core.chunk_first.call(null,inst_25812);
var inst_25817 = cljs.core.chunk_rest.call(null,inst_25812);
var inst_25818 = cljs.core.count.call(null,inst_25816);
var inst_25799 = inst_25817;
var inst_25800 = inst_25816;
var inst_25801 = inst_25818;
var inst_25802 = (0);
var state_25939__$1 = (function (){var statearr_25965 = state_25939;
(statearr_25965[(7)] = inst_25802);

(statearr_25965[(8)] = inst_25801);

(statearr_25965[(9)] = inst_25800);

(statearr_25965[(10)] = inst_25799);

return statearr_25965;
})();
var statearr_25966_26044 = state_25939__$1;
(statearr_25966_26044[(2)] = null);

(statearr_25966_26044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (22))){
var inst_25855 = (state_25939[(23)]);
var inst_25860 = (state_25939[(24)]);
var inst_25852 = (state_25939[(19)]);
var inst_25856 = (state_25939[(25)]);
var inst_25855__$1 = (state_25939[(2)]);
var inst_25856__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25855__$1);
var inst_25857 = (function (){var all_files = inst_25852;
var res_SINGLEQUOTE_ = inst_25855__$1;
var res = inst_25856__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25855,inst_25860,inst_25852,inst_25856,inst_25855__$1,inst_25856__$1,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25781_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25781_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25855,inst_25860,inst_25852,inst_25856,inst_25855__$1,inst_25856__$1,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25858 = cljs.core.filter.call(null,inst_25857,inst_25855__$1);
var inst_25859 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25860__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25859);
var inst_25861 = cljs.core.not_empty.call(null,inst_25860__$1);
var state_25939__$1 = (function (){var statearr_25967 = state_25939;
(statearr_25967[(23)] = inst_25855__$1);

(statearr_25967[(26)] = inst_25858);

(statearr_25967[(24)] = inst_25860__$1);

(statearr_25967[(25)] = inst_25856__$1);

return statearr_25967;
})();
if(cljs.core.truth_(inst_25861)){
var statearr_25968_26045 = state_25939__$1;
(statearr_25968_26045[(1)] = (23));

} else {
var statearr_25969_26046 = state_25939__$1;
(statearr_25969_26046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (36))){
var state_25939__$1 = state_25939;
var statearr_25970_26047 = state_25939__$1;
(statearr_25970_26047[(2)] = false);

(statearr_25970_26047[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (41))){
var inst_25914 = (state_25939[(20)]);
var inst_25918 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25919 = cljs.core.map.call(null,inst_25918,inst_25914);
var inst_25920 = cljs.core.pr_str.call(null,inst_25919);
var inst_25921 = ["figwheel-no-load meta-data: ",inst_25920].join('');
var inst_25922 = figwheel.client.utils.log.call(null,inst_25921);
var state_25939__$1 = state_25939;
var statearr_25971_26048 = state_25939__$1;
(statearr_25971_26048[(2)] = inst_25922);

(statearr_25971_26048[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (43))){
var inst_25915 = (state_25939[(21)]);
var inst_25925 = (state_25939[(2)]);
var inst_25926 = cljs.core.not_empty.call(null,inst_25915);
var state_25939__$1 = (function (){var statearr_25972 = state_25939;
(statearr_25972[(27)] = inst_25925);

return statearr_25972;
})();
if(cljs.core.truth_(inst_25926)){
var statearr_25973_26049 = state_25939__$1;
(statearr_25973_26049[(1)] = (44));

} else {
var statearr_25974_26050 = state_25939__$1;
(statearr_25974_26050[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (29))){
var inst_25855 = (state_25939[(23)]);
var inst_25858 = (state_25939[(26)]);
var inst_25860 = (state_25939[(24)]);
var inst_25892 = (state_25939[(16)]);
var inst_25852 = (state_25939[(19)]);
var inst_25856 = (state_25939[(25)]);
var inst_25888 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25891 = (function (){var all_files = inst_25852;
var res_SINGLEQUOTE_ = inst_25855;
var res = inst_25856;
var files_not_loaded = inst_25858;
var dependencies_that_loaded = inst_25860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25892,inst_25852,inst_25856,inst_25888,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25890){
var map__25975 = p__25890;
var map__25975__$1 = (((((!((map__25975 == null))))?(((((map__25975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25975):map__25975);
var namespace = cljs.core.get.call(null,map__25975__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25892,inst_25852,inst_25856,inst_25888,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25892__$1 = cljs.core.group_by.call(null,inst_25891,inst_25858);
var inst_25894 = (inst_25892__$1 == null);
var inst_25895 = cljs.core.not.call(null,inst_25894);
var state_25939__$1 = (function (){var statearr_25977 = state_25939;
(statearr_25977[(16)] = inst_25892__$1);

(statearr_25977[(28)] = inst_25888);

return statearr_25977;
})();
if(inst_25895){
var statearr_25978_26051 = state_25939__$1;
(statearr_25978_26051[(1)] = (32));

} else {
var statearr_25979_26052 = state_25939__$1;
(statearr_25979_26052[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (44))){
var inst_25915 = (state_25939[(21)]);
var inst_25928 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25915);
var inst_25929 = cljs.core.pr_str.call(null,inst_25928);
var inst_25930 = ["not required: ",inst_25929].join('');
var inst_25931 = figwheel.client.utils.log.call(null,inst_25930);
var state_25939__$1 = state_25939;
var statearr_25980_26053 = state_25939__$1;
(statearr_25980_26053[(2)] = inst_25931);

(statearr_25980_26053[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (6))){
var inst_25833 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25981_26054 = state_25939__$1;
(statearr_25981_26054[(2)] = inst_25833);

(statearr_25981_26054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (28))){
var inst_25858 = (state_25939[(26)]);
var inst_25885 = (state_25939[(2)]);
var inst_25886 = cljs.core.not_empty.call(null,inst_25858);
var state_25939__$1 = (function (){var statearr_25982 = state_25939;
(statearr_25982[(29)] = inst_25885);

return statearr_25982;
})();
if(cljs.core.truth_(inst_25886)){
var statearr_25983_26055 = state_25939__$1;
(statearr_25983_26055[(1)] = (29));

} else {
var statearr_25984_26056 = state_25939__$1;
(statearr_25984_26056[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (25))){
var inst_25856 = (state_25939[(25)]);
var inst_25872 = (state_25939[(2)]);
var inst_25873 = cljs.core.not_empty.call(null,inst_25856);
var state_25939__$1 = (function (){var statearr_25985 = state_25939;
(statearr_25985[(30)] = inst_25872);

return statearr_25985;
})();
if(cljs.core.truth_(inst_25873)){
var statearr_25986_26057 = state_25939__$1;
(statearr_25986_26057[(1)] = (26));

} else {
var statearr_25987_26058 = state_25939__$1;
(statearr_25987_26058[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (34))){
var inst_25908 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25908)){
var statearr_25988_26059 = state_25939__$1;
(statearr_25988_26059[(1)] = (38));

} else {
var statearr_25989_26060 = state_25939__$1;
(statearr_25989_26060[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (17))){
var state_25939__$1 = state_25939;
var statearr_25990_26061 = state_25939__$1;
(statearr_25990_26061[(2)] = recompile_dependents);

(statearr_25990_26061[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (3))){
var state_25939__$1 = state_25939;
var statearr_25991_26062 = state_25939__$1;
(statearr_25991_26062[(2)] = null);

(statearr_25991_26062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (12))){
var inst_25829 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_25992_26063 = state_25939__$1;
(statearr_25992_26063[(2)] = inst_25829);

(statearr_25992_26063[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (2))){
var inst_25791 = (state_25939[(13)]);
var inst_25798 = cljs.core.seq.call(null,inst_25791);
var inst_25799 = inst_25798;
var inst_25800 = null;
var inst_25801 = (0);
var inst_25802 = (0);
var state_25939__$1 = (function (){var statearr_25993 = state_25939;
(statearr_25993[(7)] = inst_25802);

(statearr_25993[(8)] = inst_25801);

(statearr_25993[(9)] = inst_25800);

(statearr_25993[(10)] = inst_25799);

return statearr_25993;
})();
var statearr_25994_26064 = state_25939__$1;
(statearr_25994_26064[(2)] = null);

(statearr_25994_26064[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (23))){
var inst_25855 = (state_25939[(23)]);
var inst_25858 = (state_25939[(26)]);
var inst_25860 = (state_25939[(24)]);
var inst_25852 = (state_25939[(19)]);
var inst_25856 = (state_25939[(25)]);
var inst_25863 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25865 = (function (){var all_files = inst_25852;
var res_SINGLEQUOTE_ = inst_25855;
var res = inst_25856;
var files_not_loaded = inst_25858;
var dependencies_that_loaded = inst_25860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25852,inst_25856,inst_25863,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25864){
var map__25995 = p__25864;
var map__25995__$1 = (((((!((map__25995 == null))))?(((((map__25995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25995):map__25995);
var request_url = cljs.core.get.call(null,map__25995__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25852,inst_25856,inst_25863,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25866 = cljs.core.reverse.call(null,inst_25860);
var inst_25867 = cljs.core.map.call(null,inst_25865,inst_25866);
var inst_25868 = cljs.core.pr_str.call(null,inst_25867);
var inst_25869 = figwheel.client.utils.log.call(null,inst_25868);
var state_25939__$1 = (function (){var statearr_25997 = state_25939;
(statearr_25997[(31)] = inst_25863);

return statearr_25997;
})();
var statearr_25998_26065 = state_25939__$1;
(statearr_25998_26065[(2)] = inst_25869);

(statearr_25998_26065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (35))){
var state_25939__$1 = state_25939;
var statearr_25999_26066 = state_25939__$1;
(statearr_25999_26066[(2)] = true);

(statearr_25999_26066[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (19))){
var inst_25842 = (state_25939[(12)]);
var inst_25848 = figwheel.client.file_reloading.expand_files.call(null,inst_25842);
var state_25939__$1 = state_25939;
var statearr_26000_26067 = state_25939__$1;
(statearr_26000_26067[(2)] = inst_25848);

(statearr_26000_26067[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (11))){
var state_25939__$1 = state_25939;
var statearr_26001_26068 = state_25939__$1;
(statearr_26001_26068[(2)] = null);

(statearr_26001_26068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (9))){
var inst_25831 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_26002_26069 = state_25939__$1;
(statearr_26002_26069[(2)] = inst_25831);

(statearr_26002_26069[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (5))){
var inst_25802 = (state_25939[(7)]);
var inst_25801 = (state_25939[(8)]);
var inst_25804 = (inst_25802 < inst_25801);
var inst_25805 = inst_25804;
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25805)){
var statearr_26003_26070 = state_25939__$1;
(statearr_26003_26070[(1)] = (7));

} else {
var statearr_26004_26071 = state_25939__$1;
(statearr_26004_26071[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (14))){
var inst_25812 = (state_25939[(22)]);
var inst_25821 = cljs.core.first.call(null,inst_25812);
var inst_25822 = figwheel.client.file_reloading.eval_body.call(null,inst_25821,opts);
var inst_25823 = cljs.core.next.call(null,inst_25812);
var inst_25799 = inst_25823;
var inst_25800 = null;
var inst_25801 = (0);
var inst_25802 = (0);
var state_25939__$1 = (function (){var statearr_26005 = state_25939;
(statearr_26005[(7)] = inst_25802);

(statearr_26005[(8)] = inst_25801);

(statearr_26005[(9)] = inst_25800);

(statearr_26005[(32)] = inst_25822);

(statearr_26005[(10)] = inst_25799);

return statearr_26005;
})();
var statearr_26006_26072 = state_25939__$1;
(statearr_26006_26072[(2)] = null);

(statearr_26006_26072[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (45))){
var state_25939__$1 = state_25939;
var statearr_26007_26073 = state_25939__$1;
(statearr_26007_26073[(2)] = null);

(statearr_26007_26073[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (26))){
var inst_25855 = (state_25939[(23)]);
var inst_25858 = (state_25939[(26)]);
var inst_25860 = (state_25939[(24)]);
var inst_25852 = (state_25939[(19)]);
var inst_25856 = (state_25939[(25)]);
var inst_25875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25877 = (function (){var all_files = inst_25852;
var res_SINGLEQUOTE_ = inst_25855;
var res = inst_25856;
var files_not_loaded = inst_25858;
var dependencies_that_loaded = inst_25860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25852,inst_25856,inst_25875,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25876){
var map__26008 = p__25876;
var map__26008__$1 = (((((!((map__26008 == null))))?(((((map__26008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26008):map__26008);
var namespace = cljs.core.get.call(null,map__26008__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26008__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25852,inst_25856,inst_25875,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25878 = cljs.core.map.call(null,inst_25877,inst_25856);
var inst_25879 = cljs.core.pr_str.call(null,inst_25878);
var inst_25880 = figwheel.client.utils.log.call(null,inst_25879);
var inst_25881 = (function (){var all_files = inst_25852;
var res_SINGLEQUOTE_ = inst_25855;
var res = inst_25856;
var files_not_loaded = inst_25858;
var dependencies_that_loaded = inst_25860;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25852,inst_25856,inst_25875,inst_25877,inst_25878,inst_25879,inst_25880,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25858,inst_25860,inst_25852,inst_25856,inst_25875,inst_25877,inst_25878,inst_25879,inst_25880,state_val_25940,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25882 = setTimeout(inst_25881,(10));
var state_25939__$1 = (function (){var statearr_26010 = state_25939;
(statearr_26010[(33)] = inst_25875);

(statearr_26010[(34)] = inst_25880);

return statearr_26010;
})();
var statearr_26011_26074 = state_25939__$1;
(statearr_26011_26074[(2)] = inst_25882);

(statearr_26011_26074[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (16))){
var state_25939__$1 = state_25939;
var statearr_26012_26075 = state_25939__$1;
(statearr_26012_26075[(2)] = reload_dependents);

(statearr_26012_26075[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (38))){
var inst_25892 = (state_25939[(16)]);
var inst_25910 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25892);
var state_25939__$1 = state_25939;
var statearr_26013_26076 = state_25939__$1;
(statearr_26013_26076[(2)] = inst_25910);

(statearr_26013_26076[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (30))){
var state_25939__$1 = state_25939;
var statearr_26014_26077 = state_25939__$1;
(statearr_26014_26077[(2)] = null);

(statearr_26014_26077[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (10))){
var inst_25812 = (state_25939[(22)]);
var inst_25814 = cljs.core.chunked_seq_QMARK_.call(null,inst_25812);
var state_25939__$1 = state_25939;
if(inst_25814){
var statearr_26015_26078 = state_25939__$1;
(statearr_26015_26078[(1)] = (13));

} else {
var statearr_26016_26079 = state_25939__$1;
(statearr_26016_26079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (18))){
var inst_25846 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
if(cljs.core.truth_(inst_25846)){
var statearr_26017_26080 = state_25939__$1;
(statearr_26017_26080[(1)] = (19));

} else {
var statearr_26018_26081 = state_25939__$1;
(statearr_26018_26081[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (42))){
var state_25939__$1 = state_25939;
var statearr_26019_26082 = state_25939__$1;
(statearr_26019_26082[(2)] = null);

(statearr_26019_26082[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (37))){
var inst_25905 = (state_25939[(2)]);
var state_25939__$1 = state_25939;
var statearr_26020_26083 = state_25939__$1;
(statearr_26020_26083[(2)] = inst_25905);

(statearr_26020_26083[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25940 === (8))){
var inst_25812 = (state_25939[(22)]);
var inst_25799 = (state_25939[(10)]);
var inst_25812__$1 = cljs.core.seq.call(null,inst_25799);
var state_25939__$1 = (function (){var statearr_26021 = state_25939;
(statearr_26021[(22)] = inst_25812__$1);

return statearr_26021;
})();
if(inst_25812__$1){
var statearr_26022_26084 = state_25939__$1;
(statearr_26022_26084[(1)] = (10));

} else {
var statearr_26023_26085 = state_25939__$1;
(statearr_26023_26085[(1)] = (11));

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
});})(c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20275__auto__,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____0 = (function (){
var statearr_26024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26024[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__);

(statearr_26024[(1)] = (1));

return statearr_26024;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____1 = (function (state_25939){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_25939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e26025){if((e26025 instanceof Object)){
var ex__20279__auto__ = e26025;
var statearr_26026_26086 = state_25939;
(statearr_26026_26086[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26087 = state_25939;
state_25939 = G__26087;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__ = function(state_25939){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____1.call(this,state_25939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21147__auto__ = (function (){var statearr_26027 = f__21146__auto__.call(null);
(statearr_26027[(6)] = c__21145__auto__);

return statearr_26027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__,map__25784,map__25784__$1,opts,before_jsload,on_jsload,reload_dependents,map__25785,map__25785__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21145__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26090,link){
var map__26091 = p__26090;
var map__26091__$1 = (((((!((map__26091 == null))))?(((((map__26091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26091):map__26091);
var file = cljs.core.get.call(null,map__26091__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26091,map__26091__$1,file){
return (function (p1__26088_SHARP_,p2__26089_SHARP_){
if(cljs.core._EQ_.call(null,p1__26088_SHARP_,p2__26089_SHARP_)){
return p1__26088_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26091,map__26091__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26094){
var map__26095 = p__26094;
var map__26095__$1 = (((((!((map__26095 == null))))?(((((map__26095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26095):map__26095);
var match_length = cljs.core.get.call(null,map__26095__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26095__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26093_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26093_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26097_SHARP_,p2__26098_SHARP_){
return cljs.core.assoc.call(null,p1__26097_SHARP_,cljs.core.get.call(null,p2__26098_SHARP_,key),p2__26098_SHARP_);
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
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
var loaded_f_datas_26099 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26099);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26099);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26100,p__26101){
var map__26102 = p__26100;
var map__26102__$1 = (((((!((map__26102 == null))))?(((((map__26102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26102):map__26102);
var on_cssload = cljs.core.get.call(null,map__26102__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26103 = p__26101;
var map__26103__$1 = (((((!((map__26103 == null))))?(((((map__26103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26103):map__26103);
var files_msg = map__26103__$1;
var files = cljs.core.get.call(null,map__26103__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
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

//# sourceMappingURL=file_reloading.js.map?rel=1568825115913
