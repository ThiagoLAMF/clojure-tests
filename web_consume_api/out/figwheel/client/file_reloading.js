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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25429_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25429_SHARP_));
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
var seq__25430 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25431 = null;
var count__25432 = (0);
var i__25433 = (0);
while(true){
if((i__25433 < count__25432)){
var n = cljs.core._nth.call(null,chunk__25431,i__25433);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25434 = seq__25430;
var G__25435 = chunk__25431;
var G__25436 = count__25432;
var G__25437 = (i__25433 + (1));
seq__25430 = G__25434;
chunk__25431 = G__25435;
count__25432 = G__25436;
i__25433 = G__25437;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25430);
if(temp__4657__auto__){
var seq__25430__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25430__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25430__$1);
var G__25438 = cljs.core.chunk_rest.call(null,seq__25430__$1);
var G__25439 = c__4550__auto__;
var G__25440 = cljs.core.count.call(null,c__4550__auto__);
var G__25441 = (0);
seq__25430 = G__25438;
chunk__25431 = G__25439;
count__25432 = G__25440;
i__25433 = G__25441;
continue;
} else {
var n = cljs.core.first.call(null,seq__25430__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__25442 = cljs.core.next.call(null,seq__25430__$1);
var G__25443 = null;
var G__25444 = (0);
var G__25445 = (0);
seq__25430 = G__25442;
chunk__25431 = G__25443;
count__25432 = G__25444;
i__25433 = G__25445;
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
return cljs.core.some.call(null,(function (p__25446){
var vec__25447 = p__25446;
var _ = cljs.core.nth.call(null,vec__25447,(0),null);
var v = cljs.core.nth.call(null,vec__25447,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__25450){
var vec__25451 = p__25450;
var k = cljs.core.nth.call(null,vec__25451,(0),null);
var v = cljs.core.nth.call(null,vec__25451,(1),null);
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

var seq__25463_25471 = cljs.core.seq.call(null,deps);
var chunk__25464_25472 = null;
var count__25465_25473 = (0);
var i__25466_25474 = (0);
while(true){
if((i__25466_25474 < count__25465_25473)){
var dep_25475 = cljs.core._nth.call(null,chunk__25464_25472,i__25466_25474);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25475;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25475));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25475,(depth + (1)),state);
} else {
}


var G__25476 = seq__25463_25471;
var G__25477 = chunk__25464_25472;
var G__25478 = count__25465_25473;
var G__25479 = (i__25466_25474 + (1));
seq__25463_25471 = G__25476;
chunk__25464_25472 = G__25477;
count__25465_25473 = G__25478;
i__25466_25474 = G__25479;
continue;
} else {
var temp__4657__auto___25480 = cljs.core.seq.call(null,seq__25463_25471);
if(temp__4657__auto___25480){
var seq__25463_25481__$1 = temp__4657__auto___25480;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25463_25481__$1)){
var c__4550__auto___25482 = cljs.core.chunk_first.call(null,seq__25463_25481__$1);
var G__25483 = cljs.core.chunk_rest.call(null,seq__25463_25481__$1);
var G__25484 = c__4550__auto___25482;
var G__25485 = cljs.core.count.call(null,c__4550__auto___25482);
var G__25486 = (0);
seq__25463_25471 = G__25483;
chunk__25464_25472 = G__25484;
count__25465_25473 = G__25485;
i__25466_25474 = G__25486;
continue;
} else {
var dep_25487 = cljs.core.first.call(null,seq__25463_25481__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25487;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25487));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25487,(depth + (1)),state);
} else {
}


var G__25488 = cljs.core.next.call(null,seq__25463_25481__$1);
var G__25489 = null;
var G__25490 = (0);
var G__25491 = (0);
seq__25463_25471 = G__25488;
chunk__25464_25472 = G__25489;
count__25465_25473 = G__25490;
i__25466_25474 = G__25491;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25467){
var vec__25468 = p__25467;
var seq__25469 = cljs.core.seq.call(null,vec__25468);
var first__25470 = cljs.core.first.call(null,seq__25469);
var seq__25469__$1 = cljs.core.next.call(null,seq__25469);
var x = first__25470;
var xs = seq__25469__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25468,seq__25469,first__25470,seq__25469__$1,x,xs,get_deps__$1){
return (function (p1__25454_SHARP_){
return clojure.set.difference.call(null,p1__25454_SHARP_,x);
});})(vec__25468,seq__25469,first__25470,seq__25469__$1,x,xs,get_deps__$1))
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
var seq__25492 = cljs.core.seq.call(null,provides);
var chunk__25493 = null;
var count__25494 = (0);
var i__25495 = (0);
while(true){
if((i__25495 < count__25494)){
var prov = cljs.core._nth.call(null,chunk__25493,i__25495);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25504_25512 = cljs.core.seq.call(null,requires);
var chunk__25505_25513 = null;
var count__25506_25514 = (0);
var i__25507_25515 = (0);
while(true){
if((i__25507_25515 < count__25506_25514)){
var req_25516 = cljs.core._nth.call(null,chunk__25505_25513,i__25507_25515);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25516,prov);


var G__25517 = seq__25504_25512;
var G__25518 = chunk__25505_25513;
var G__25519 = count__25506_25514;
var G__25520 = (i__25507_25515 + (1));
seq__25504_25512 = G__25517;
chunk__25505_25513 = G__25518;
count__25506_25514 = G__25519;
i__25507_25515 = G__25520;
continue;
} else {
var temp__4657__auto___25521 = cljs.core.seq.call(null,seq__25504_25512);
if(temp__4657__auto___25521){
var seq__25504_25522__$1 = temp__4657__auto___25521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25504_25522__$1)){
var c__4550__auto___25523 = cljs.core.chunk_first.call(null,seq__25504_25522__$1);
var G__25524 = cljs.core.chunk_rest.call(null,seq__25504_25522__$1);
var G__25525 = c__4550__auto___25523;
var G__25526 = cljs.core.count.call(null,c__4550__auto___25523);
var G__25527 = (0);
seq__25504_25512 = G__25524;
chunk__25505_25513 = G__25525;
count__25506_25514 = G__25526;
i__25507_25515 = G__25527;
continue;
} else {
var req_25528 = cljs.core.first.call(null,seq__25504_25522__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25528,prov);


var G__25529 = cljs.core.next.call(null,seq__25504_25522__$1);
var G__25530 = null;
var G__25531 = (0);
var G__25532 = (0);
seq__25504_25512 = G__25529;
chunk__25505_25513 = G__25530;
count__25506_25514 = G__25531;
i__25507_25515 = G__25532;
continue;
}
} else {
}
}
break;
}


var G__25533 = seq__25492;
var G__25534 = chunk__25493;
var G__25535 = count__25494;
var G__25536 = (i__25495 + (1));
seq__25492 = G__25533;
chunk__25493 = G__25534;
count__25494 = G__25535;
i__25495 = G__25536;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25492);
if(temp__4657__auto__){
var seq__25492__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25492__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25492__$1);
var G__25537 = cljs.core.chunk_rest.call(null,seq__25492__$1);
var G__25538 = c__4550__auto__;
var G__25539 = cljs.core.count.call(null,c__4550__auto__);
var G__25540 = (0);
seq__25492 = G__25537;
chunk__25493 = G__25538;
count__25494 = G__25539;
i__25495 = G__25540;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25492__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25508_25541 = cljs.core.seq.call(null,requires);
var chunk__25509_25542 = null;
var count__25510_25543 = (0);
var i__25511_25544 = (0);
while(true){
if((i__25511_25544 < count__25510_25543)){
var req_25545 = cljs.core._nth.call(null,chunk__25509_25542,i__25511_25544);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25545,prov);


var G__25546 = seq__25508_25541;
var G__25547 = chunk__25509_25542;
var G__25548 = count__25510_25543;
var G__25549 = (i__25511_25544 + (1));
seq__25508_25541 = G__25546;
chunk__25509_25542 = G__25547;
count__25510_25543 = G__25548;
i__25511_25544 = G__25549;
continue;
} else {
var temp__4657__auto___25550__$1 = cljs.core.seq.call(null,seq__25508_25541);
if(temp__4657__auto___25550__$1){
var seq__25508_25551__$1 = temp__4657__auto___25550__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25508_25551__$1)){
var c__4550__auto___25552 = cljs.core.chunk_first.call(null,seq__25508_25551__$1);
var G__25553 = cljs.core.chunk_rest.call(null,seq__25508_25551__$1);
var G__25554 = c__4550__auto___25552;
var G__25555 = cljs.core.count.call(null,c__4550__auto___25552);
var G__25556 = (0);
seq__25508_25541 = G__25553;
chunk__25509_25542 = G__25554;
count__25510_25543 = G__25555;
i__25511_25544 = G__25556;
continue;
} else {
var req_25557 = cljs.core.first.call(null,seq__25508_25551__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25557,prov);


var G__25558 = cljs.core.next.call(null,seq__25508_25551__$1);
var G__25559 = null;
var G__25560 = (0);
var G__25561 = (0);
seq__25508_25541 = G__25558;
chunk__25509_25542 = G__25559;
count__25510_25543 = G__25560;
i__25511_25544 = G__25561;
continue;
}
} else {
}
}
break;
}


var G__25562 = cljs.core.next.call(null,seq__25492__$1);
var G__25563 = null;
var G__25564 = (0);
var G__25565 = (0);
seq__25492 = G__25562;
chunk__25493 = G__25563;
count__25494 = G__25564;
i__25495 = G__25565;
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
var seq__25566_25570 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25567_25571 = null;
var count__25568_25572 = (0);
var i__25569_25573 = (0);
while(true){
if((i__25569_25573 < count__25568_25572)){
var ns_25574 = cljs.core._nth.call(null,chunk__25567_25571,i__25569_25573);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25574);


var G__25575 = seq__25566_25570;
var G__25576 = chunk__25567_25571;
var G__25577 = count__25568_25572;
var G__25578 = (i__25569_25573 + (1));
seq__25566_25570 = G__25575;
chunk__25567_25571 = G__25576;
count__25568_25572 = G__25577;
i__25569_25573 = G__25578;
continue;
} else {
var temp__4657__auto___25579 = cljs.core.seq.call(null,seq__25566_25570);
if(temp__4657__auto___25579){
var seq__25566_25580__$1 = temp__4657__auto___25579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25566_25580__$1)){
var c__4550__auto___25581 = cljs.core.chunk_first.call(null,seq__25566_25580__$1);
var G__25582 = cljs.core.chunk_rest.call(null,seq__25566_25580__$1);
var G__25583 = c__4550__auto___25581;
var G__25584 = cljs.core.count.call(null,c__4550__auto___25581);
var G__25585 = (0);
seq__25566_25570 = G__25582;
chunk__25567_25571 = G__25583;
count__25568_25572 = G__25584;
i__25569_25573 = G__25585;
continue;
} else {
var ns_25586 = cljs.core.first.call(null,seq__25566_25580__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25586);


var G__25587 = cljs.core.next.call(null,seq__25566_25580__$1);
var G__25588 = null;
var G__25589 = (0);
var G__25590 = (0);
seq__25566_25570 = G__25587;
chunk__25567_25571 = G__25588;
count__25568_25572 = G__25589;
i__25569_25573 = G__25590;
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
var G__25591__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25591 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25592__i = 0, G__25592__a = new Array(arguments.length -  0);
while (G__25592__i < G__25592__a.length) {G__25592__a[G__25592__i] = arguments[G__25592__i + 0]; ++G__25592__i;}
  args = new cljs.core.IndexedSeq(G__25592__a,0,null);
} 
return G__25591__delegate.call(this,args);};
G__25591.cljs$lang$maxFixedArity = 0;
G__25591.cljs$lang$applyTo = (function (arglist__25593){
var args = cljs.core.seq(arglist__25593);
return G__25591__delegate(args);
});
G__25591.cljs$core$IFn$_invoke$arity$variadic = G__25591__delegate;
return G__25591;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__25594_SHARP_,p2__25595_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25594_SHARP_)),p2__25595_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__25596_SHARP_,p2__25597_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25596_SHARP_),p2__25597_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25598 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25598.addCallback(((function (G__25598){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25598))
);

G__25598.addErrback(((function (G__25598){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25598))
);

return G__25598;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25599){if((e25599 instanceof Error)){
var e = e25599;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25599;

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
}catch (e25600){if((e25600 instanceof Error)){
var e = e25600;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25600;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25601 = cljs.core._EQ_;
var expr__25602 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25601.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25602))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25601.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25602))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25601.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25602))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25601,expr__25602){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25601,expr__25602))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25604,callback){
var map__25605 = p__25604;
var map__25605__$1 = (((((!((map__25605 == null))))?(((((map__25605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25605.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25605):map__25605);
var file_msg = map__25605__$1;
var request_url = cljs.core.get.call(null,map__25605__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25605,map__25605__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25605,map__25605__$1,file_msg,request_url))
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
return (function (state_25643){
var state_val_25644 = (state_25643[(1)]);
if((state_val_25644 === (7))){
var inst_25639 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
var statearr_25645_25671 = state_25643__$1;
(statearr_25645_25671[(2)] = inst_25639);

(statearr_25645_25671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (1))){
var state_25643__$1 = state_25643;
var statearr_25646_25672 = state_25643__$1;
(statearr_25646_25672[(2)] = null);

(statearr_25646_25672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (4))){
var inst_25609 = (state_25643[(7)]);
var inst_25609__$1 = (state_25643[(2)]);
var state_25643__$1 = (function (){var statearr_25647 = state_25643;
(statearr_25647[(7)] = inst_25609__$1);

return statearr_25647;
})();
if(cljs.core.truth_(inst_25609__$1)){
var statearr_25648_25673 = state_25643__$1;
(statearr_25648_25673[(1)] = (5));

} else {
var statearr_25649_25674 = state_25643__$1;
(statearr_25649_25674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (15))){
var inst_25622 = (state_25643[(8)]);
var inst_25624 = (state_25643[(9)]);
var inst_25626 = inst_25624.call(null,inst_25622);
var state_25643__$1 = state_25643;
var statearr_25650_25675 = state_25643__$1;
(statearr_25650_25675[(2)] = inst_25626);

(statearr_25650_25675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (13))){
var inst_25633 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
var statearr_25651_25676 = state_25643__$1;
(statearr_25651_25676[(2)] = inst_25633);

(statearr_25651_25676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (6))){
var state_25643__$1 = state_25643;
var statearr_25652_25677 = state_25643__$1;
(statearr_25652_25677[(2)] = null);

(statearr_25652_25677[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (17))){
var inst_25630 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
var statearr_25653_25678 = state_25643__$1;
(statearr_25653_25678[(2)] = inst_25630);

(statearr_25653_25678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (3))){
var inst_25641 = (state_25643[(2)]);
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25643__$1,inst_25641);
} else {
if((state_val_25644 === (12))){
var state_25643__$1 = state_25643;
var statearr_25654_25679 = state_25643__$1;
(statearr_25654_25679[(2)] = null);

(statearr_25654_25679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (2))){
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25643__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25644 === (11))){
var inst_25614 = (state_25643[(10)]);
var inst_25620 = figwheel.client.file_reloading.blocking_load.call(null,inst_25614);
var state_25643__$1 = state_25643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25643__$1,(14),inst_25620);
} else {
if((state_val_25644 === (9))){
var inst_25614 = (state_25643[(10)]);
var state_25643__$1 = state_25643;
if(cljs.core.truth_(inst_25614)){
var statearr_25655_25680 = state_25643__$1;
(statearr_25655_25680[(1)] = (11));

} else {
var statearr_25656_25681 = state_25643__$1;
(statearr_25656_25681[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (5))){
var inst_25609 = (state_25643[(7)]);
var inst_25615 = (state_25643[(11)]);
var inst_25614 = cljs.core.nth.call(null,inst_25609,(0),null);
var inst_25615__$1 = cljs.core.nth.call(null,inst_25609,(1),null);
var state_25643__$1 = (function (){var statearr_25657 = state_25643;
(statearr_25657[(11)] = inst_25615__$1);

(statearr_25657[(10)] = inst_25614);

return statearr_25657;
})();
if(cljs.core.truth_(inst_25615__$1)){
var statearr_25658_25682 = state_25643__$1;
(statearr_25658_25682[(1)] = (8));

} else {
var statearr_25659_25683 = state_25643__$1;
(statearr_25659_25683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (14))){
var inst_25624 = (state_25643[(9)]);
var inst_25614 = (state_25643[(10)]);
var inst_25622 = (state_25643[(2)]);
var inst_25623 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25624__$1 = cljs.core.get.call(null,inst_25623,inst_25614);
var state_25643__$1 = (function (){var statearr_25660 = state_25643;
(statearr_25660[(8)] = inst_25622);

(statearr_25660[(9)] = inst_25624__$1);

return statearr_25660;
})();
if(cljs.core.truth_(inst_25624__$1)){
var statearr_25661_25684 = state_25643__$1;
(statearr_25661_25684[(1)] = (15));

} else {
var statearr_25662_25685 = state_25643__$1;
(statearr_25662_25685[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (16))){
var inst_25622 = (state_25643[(8)]);
var inst_25628 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25622);
var state_25643__$1 = state_25643;
var statearr_25663_25686 = state_25643__$1;
(statearr_25663_25686[(2)] = inst_25628);

(statearr_25663_25686[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (10))){
var inst_25635 = (state_25643[(2)]);
var state_25643__$1 = (function (){var statearr_25664 = state_25643;
(statearr_25664[(12)] = inst_25635);

return statearr_25664;
})();
var statearr_25665_25687 = state_25643__$1;
(statearr_25665_25687[(2)] = null);

(statearr_25665_25687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25644 === (8))){
var inst_25615 = (state_25643[(11)]);
var inst_25617 = eval(inst_25615);
var state_25643__$1 = state_25643;
var statearr_25666_25688 = state_25643__$1;
(statearr_25666_25688[(2)] = inst_25617);

(statearr_25666_25688[(1)] = (10));


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
var statearr_25667 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25667[(0)] = figwheel$client$file_reloading$state_machine__20276__auto__);

(statearr_25667[(1)] = (1));

return statearr_25667;
});
var figwheel$client$file_reloading$state_machine__20276__auto____1 = (function (state_25643){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_25643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e25668){if((e25668 instanceof Object)){
var ex__20279__auto__ = e25668;
var statearr_25669_25689 = state_25643;
(statearr_25669_25689[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25690 = state_25643;
state_25643 = G__25690;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20276__auto__ = function(state_25643){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20276__auto____1.call(this,state_25643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20276__auto____0;
figwheel$client$file_reloading$state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20276__auto____1;
return figwheel$client$file_reloading$state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_25670 = f__21146__auto__.call(null);
(statearr_25670[(6)] = c__21145__auto__);

return statearr_25670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25692 = arguments.length;
switch (G__25692) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25694,callback){
var map__25695 = p__25694;
var map__25695__$1 = (((((!((map__25695 == null))))?(((((map__25695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25695):map__25695);
var file_msg = map__25695__$1;
var namespace = cljs.core.get.call(null,map__25695__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25695,map__25695__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25695,map__25695__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25697){
var map__25698 = p__25697;
var map__25698__$1 = (((((!((map__25698 == null))))?(((((map__25698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25698):map__25698);
var file_msg = map__25698__$1;
var namespace = cljs.core.get.call(null,map__25698__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25700){
var map__25701 = p__25700;
var map__25701__$1 = (((((!((map__25701 == null))))?(((((map__25701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25701):map__25701);
var file_msg = map__25701__$1;
var namespace = cljs.core.get.call(null,map__25701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25703,callback){
var map__25704 = p__25703;
var map__25704__$1 = (((((!((map__25704 == null))))?(((((map__25704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25704):map__25704);
var file_msg = map__25704__$1;
var request_url = cljs.core.get.call(null,map__25704__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21145__auto___25754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___25754,out){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto___25754,out){
return (function (state_25739){
var state_val_25740 = (state_25739[(1)]);
if((state_val_25740 === (1))){
var inst_25713 = cljs.core.seq.call(null,files);
var inst_25714 = cljs.core.first.call(null,inst_25713);
var inst_25715 = cljs.core.next.call(null,inst_25713);
var inst_25716 = files;
var state_25739__$1 = (function (){var statearr_25741 = state_25739;
(statearr_25741[(7)] = inst_25714);

(statearr_25741[(8)] = inst_25716);

(statearr_25741[(9)] = inst_25715);

return statearr_25741;
})();
var statearr_25742_25755 = state_25739__$1;
(statearr_25742_25755[(2)] = null);

(statearr_25742_25755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (2))){
var inst_25716 = (state_25739[(8)]);
var inst_25722 = (state_25739[(10)]);
var inst_25721 = cljs.core.seq.call(null,inst_25716);
var inst_25722__$1 = cljs.core.first.call(null,inst_25721);
var inst_25723 = cljs.core.next.call(null,inst_25721);
var inst_25724 = (inst_25722__$1 == null);
var inst_25725 = cljs.core.not.call(null,inst_25724);
var state_25739__$1 = (function (){var statearr_25743 = state_25739;
(statearr_25743[(11)] = inst_25723);

(statearr_25743[(10)] = inst_25722__$1);

return statearr_25743;
})();
if(inst_25725){
var statearr_25744_25756 = state_25739__$1;
(statearr_25744_25756[(1)] = (4));

} else {
var statearr_25745_25757 = state_25739__$1;
(statearr_25745_25757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (3))){
var inst_25737 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25739__$1,inst_25737);
} else {
if((state_val_25740 === (4))){
var inst_25722 = (state_25739[(10)]);
var inst_25727 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25722);
var state_25739__$1 = state_25739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25739__$1,(7),inst_25727);
} else {
if((state_val_25740 === (5))){
var inst_25733 = cljs.core.async.close_BANG_.call(null,out);
var state_25739__$1 = state_25739;
var statearr_25746_25758 = state_25739__$1;
(statearr_25746_25758[(2)] = inst_25733);

(statearr_25746_25758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (6))){
var inst_25735 = (state_25739[(2)]);
var state_25739__$1 = state_25739;
var statearr_25747_25759 = state_25739__$1;
(statearr_25747_25759[(2)] = inst_25735);

(statearr_25747_25759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25740 === (7))){
var inst_25723 = (state_25739[(11)]);
var inst_25729 = (state_25739[(2)]);
var inst_25730 = cljs.core.async.put_BANG_.call(null,out,inst_25729);
var inst_25716 = inst_25723;
var state_25739__$1 = (function (){var statearr_25748 = state_25739;
(statearr_25748[(8)] = inst_25716);

(statearr_25748[(12)] = inst_25730);

return statearr_25748;
})();
var statearr_25749_25760 = state_25739__$1;
(statearr_25749_25760[(2)] = null);

(statearr_25749_25760[(1)] = (2));


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
});})(c__21145__auto___25754,out))
;
return ((function (switch__20275__auto__,c__21145__auto___25754,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____0 = (function (){
var statearr_25750 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25750[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__);

(statearr_25750[(1)] = (1));

return statearr_25750;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____1 = (function (state_25739){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_25739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e25751){if((e25751 instanceof Object)){
var ex__20279__auto__ = e25751;
var statearr_25752_25761 = state_25739;
(statearr_25752_25761[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25751;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25762 = state_25739;
state_25739 = G__25762;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__ = function(state_25739){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____1.call(this,state_25739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto___25754,out))
})();
var state__21147__auto__ = (function (){var statearr_25753 = f__21146__auto__.call(null);
(statearr_25753[(6)] = c__21145__auto___25754);

return statearr_25753;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___25754,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25763,opts){
var map__25764 = p__25763;
var map__25764__$1 = (((((!((map__25764 == null))))?(((((map__25764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25764):map__25764);
var eval_body = cljs.core.get.call(null,map__25764__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25766){var e = e25766;
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
return (function (p1__25767_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25767_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25768){
var vec__25769 = p__25768;
var k = cljs.core.nth.call(null,vec__25769,(0),null);
var v = cljs.core.nth.call(null,vec__25769,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25772){
var vec__25773 = p__25772;
var k = cljs.core.nth.call(null,vec__25773,(0),null);
var v = cljs.core.nth.call(null,vec__25773,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25779,p__25780){
var map__25781 = p__25779;
var map__25781__$1 = (((((!((map__25781 == null))))?(((((map__25781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25781):map__25781);
var opts = map__25781__$1;
var before_jsload = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25781__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25782 = p__25780;
var map__25782__$1 = (((((!((map__25782 == null))))?(((((map__25782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25782):map__25782);
var msg = map__25782__$1;
var files = cljs.core.get.call(null,map__25782__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25782__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25782__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25936){
var state_val_25937 = (state_25936[(1)]);
if((state_val_25937 === (7))){
var inst_25797 = (state_25936[(7)]);
var inst_25796 = (state_25936[(8)]);
var inst_25798 = (state_25936[(9)]);
var inst_25799 = (state_25936[(10)]);
var inst_25804 = cljs.core._nth.call(null,inst_25797,inst_25799);
var inst_25805 = figwheel.client.file_reloading.eval_body.call(null,inst_25804,opts);
var inst_25806 = (inst_25799 + (1));
var tmp25938 = inst_25797;
var tmp25939 = inst_25796;
var tmp25940 = inst_25798;
var inst_25796__$1 = tmp25939;
var inst_25797__$1 = tmp25938;
var inst_25798__$1 = tmp25940;
var inst_25799__$1 = inst_25806;
var state_25936__$1 = (function (){var statearr_25941 = state_25936;
(statearr_25941[(7)] = inst_25797__$1);

(statearr_25941[(8)] = inst_25796__$1);

(statearr_25941[(11)] = inst_25805);

(statearr_25941[(9)] = inst_25798__$1);

(statearr_25941[(10)] = inst_25799__$1);

return statearr_25941;
})();
var statearr_25942_26025 = state_25936__$1;
(statearr_25942_26025[(2)] = null);

(statearr_25942_26025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (20))){
var inst_25839 = (state_25936[(12)]);
var inst_25847 = figwheel.client.file_reloading.sort_files.call(null,inst_25839);
var state_25936__$1 = state_25936;
var statearr_25943_26026 = state_25936__$1;
(statearr_25943_26026[(2)] = inst_25847);

(statearr_25943_26026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (27))){
var state_25936__$1 = state_25936;
var statearr_25944_26027 = state_25936__$1;
(statearr_25944_26027[(2)] = null);

(statearr_25944_26027[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (1))){
var inst_25788 = (state_25936[(13)]);
var inst_25785 = before_jsload.call(null,files);
var inst_25786 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25787 = (function (){return ((function (inst_25788,inst_25785,inst_25786,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25776_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25776_SHARP_);
});
;})(inst_25788,inst_25785,inst_25786,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25788__$1 = cljs.core.filter.call(null,inst_25787,files);
var inst_25789 = cljs.core.not_empty.call(null,inst_25788__$1);
var state_25936__$1 = (function (){var statearr_25945 = state_25936;
(statearr_25945[(13)] = inst_25788__$1);

(statearr_25945[(14)] = inst_25786);

(statearr_25945[(15)] = inst_25785);

return statearr_25945;
})();
if(cljs.core.truth_(inst_25789)){
var statearr_25946_26028 = state_25936__$1;
(statearr_25946_26028[(1)] = (2));

} else {
var statearr_25947_26029 = state_25936__$1;
(statearr_25947_26029[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (24))){
var state_25936__$1 = state_25936;
var statearr_25948_26030 = state_25936__$1;
(statearr_25948_26030[(2)] = null);

(statearr_25948_26030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (39))){
var inst_25889 = (state_25936[(16)]);
var state_25936__$1 = state_25936;
var statearr_25949_26031 = state_25936__$1;
(statearr_25949_26031[(2)] = inst_25889);

(statearr_25949_26031[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (46))){
var inst_25931 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25950_26032 = state_25936__$1;
(statearr_25950_26032[(2)] = inst_25931);

(statearr_25950_26032[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (4))){
var inst_25833 = (state_25936[(2)]);
var inst_25834 = cljs.core.List.EMPTY;
var inst_25835 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25834);
var inst_25836 = (function (){return ((function (inst_25833,inst_25834,inst_25835,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25777_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25777_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25777_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25777_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_25833,inst_25834,inst_25835,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25837 = cljs.core.filter.call(null,inst_25836,files);
var inst_25838 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25839 = cljs.core.concat.call(null,inst_25837,inst_25838);
var state_25936__$1 = (function (){var statearr_25951 = state_25936;
(statearr_25951[(12)] = inst_25839);

(statearr_25951[(17)] = inst_25833);

(statearr_25951[(18)] = inst_25835);

return statearr_25951;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25952_26033 = state_25936__$1;
(statearr_25952_26033[(1)] = (16));

} else {
var statearr_25953_26034 = state_25936__$1;
(statearr_25953_26034[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (15))){
var inst_25823 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25954_26035 = state_25936__$1;
(statearr_25954_26035[(2)] = inst_25823);

(statearr_25954_26035[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (21))){
var inst_25849 = (state_25936[(19)]);
var inst_25849__$1 = (state_25936[(2)]);
var inst_25850 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25849__$1);
var state_25936__$1 = (function (){var statearr_25955 = state_25936;
(statearr_25955[(19)] = inst_25849__$1);

return statearr_25955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25936__$1,(22),inst_25850);
} else {
if((state_val_25937 === (31))){
var inst_25934 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25936__$1,inst_25934);
} else {
if((state_val_25937 === (32))){
var inst_25889 = (state_25936[(16)]);
var inst_25894 = inst_25889.cljs$lang$protocol_mask$partition0$;
var inst_25895 = (inst_25894 & (64));
var inst_25896 = inst_25889.cljs$core$ISeq$;
var inst_25897 = (cljs.core.PROTOCOL_SENTINEL === inst_25896);
var inst_25898 = ((inst_25895) || (inst_25897));
var state_25936__$1 = state_25936;
if(cljs.core.truth_(inst_25898)){
var statearr_25956_26036 = state_25936__$1;
(statearr_25956_26036[(1)] = (35));

} else {
var statearr_25957_26037 = state_25936__$1;
(statearr_25957_26037[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (40))){
var inst_25911 = (state_25936[(20)]);
var inst_25910 = (state_25936[(2)]);
var inst_25911__$1 = cljs.core.get.call(null,inst_25910,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25912 = cljs.core.get.call(null,inst_25910,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25913 = cljs.core.not_empty.call(null,inst_25911__$1);
var state_25936__$1 = (function (){var statearr_25958 = state_25936;
(statearr_25958[(21)] = inst_25912);

(statearr_25958[(20)] = inst_25911__$1);

return statearr_25958;
})();
if(cljs.core.truth_(inst_25913)){
var statearr_25959_26038 = state_25936__$1;
(statearr_25959_26038[(1)] = (41));

} else {
var statearr_25960_26039 = state_25936__$1;
(statearr_25960_26039[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (33))){
var state_25936__$1 = state_25936;
var statearr_25961_26040 = state_25936__$1;
(statearr_25961_26040[(2)] = false);

(statearr_25961_26040[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (13))){
var inst_25809 = (state_25936[(22)]);
var inst_25813 = cljs.core.chunk_first.call(null,inst_25809);
var inst_25814 = cljs.core.chunk_rest.call(null,inst_25809);
var inst_25815 = cljs.core.count.call(null,inst_25813);
var inst_25796 = inst_25814;
var inst_25797 = inst_25813;
var inst_25798 = inst_25815;
var inst_25799 = (0);
var state_25936__$1 = (function (){var statearr_25962 = state_25936;
(statearr_25962[(7)] = inst_25797);

(statearr_25962[(8)] = inst_25796);

(statearr_25962[(9)] = inst_25798);

(statearr_25962[(10)] = inst_25799);

return statearr_25962;
})();
var statearr_25963_26041 = state_25936__$1;
(statearr_25963_26041[(2)] = null);

(statearr_25963_26041[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (22))){
var inst_25853 = (state_25936[(23)]);
var inst_25857 = (state_25936[(24)]);
var inst_25849 = (state_25936[(19)]);
var inst_25852 = (state_25936[(25)]);
var inst_25852__$1 = (state_25936[(2)]);
var inst_25853__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25852__$1);
var inst_25854 = (function (){var all_files = inst_25849;
var res_SINGLEQUOTE_ = inst_25852__$1;
var res = inst_25853__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25853,inst_25857,inst_25849,inst_25852,inst_25852__$1,inst_25853__$1,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25778_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25778_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25853,inst_25857,inst_25849,inst_25852,inst_25852__$1,inst_25853__$1,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25855 = cljs.core.filter.call(null,inst_25854,inst_25852__$1);
var inst_25856 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25857__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25856);
var inst_25858 = cljs.core.not_empty.call(null,inst_25857__$1);
var state_25936__$1 = (function (){var statearr_25964 = state_25936;
(statearr_25964[(26)] = inst_25855);

(statearr_25964[(23)] = inst_25853__$1);

(statearr_25964[(24)] = inst_25857__$1);

(statearr_25964[(25)] = inst_25852__$1);

return statearr_25964;
})();
if(cljs.core.truth_(inst_25858)){
var statearr_25965_26042 = state_25936__$1;
(statearr_25965_26042[(1)] = (23));

} else {
var statearr_25966_26043 = state_25936__$1;
(statearr_25966_26043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (36))){
var state_25936__$1 = state_25936;
var statearr_25967_26044 = state_25936__$1;
(statearr_25967_26044[(2)] = false);

(statearr_25967_26044[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (41))){
var inst_25911 = (state_25936[(20)]);
var inst_25915 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25916 = cljs.core.map.call(null,inst_25915,inst_25911);
var inst_25917 = cljs.core.pr_str.call(null,inst_25916);
var inst_25918 = ["figwheel-no-load meta-data: ",inst_25917].join('');
var inst_25919 = figwheel.client.utils.log.call(null,inst_25918);
var state_25936__$1 = state_25936;
var statearr_25968_26045 = state_25936__$1;
(statearr_25968_26045[(2)] = inst_25919);

(statearr_25968_26045[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (43))){
var inst_25912 = (state_25936[(21)]);
var inst_25922 = (state_25936[(2)]);
var inst_25923 = cljs.core.not_empty.call(null,inst_25912);
var state_25936__$1 = (function (){var statearr_25969 = state_25936;
(statearr_25969[(27)] = inst_25922);

return statearr_25969;
})();
if(cljs.core.truth_(inst_25923)){
var statearr_25970_26046 = state_25936__$1;
(statearr_25970_26046[(1)] = (44));

} else {
var statearr_25971_26047 = state_25936__$1;
(statearr_25971_26047[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (29))){
var inst_25855 = (state_25936[(26)]);
var inst_25853 = (state_25936[(23)]);
var inst_25889 = (state_25936[(16)]);
var inst_25857 = (state_25936[(24)]);
var inst_25849 = (state_25936[(19)]);
var inst_25852 = (state_25936[(25)]);
var inst_25885 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25888 = (function (){var all_files = inst_25849;
var res_SINGLEQUOTE_ = inst_25852;
var res = inst_25853;
var files_not_loaded = inst_25855;
var dependencies_that_loaded = inst_25857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25889,inst_25857,inst_25849,inst_25852,inst_25885,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25887){
var map__25972 = p__25887;
var map__25972__$1 = (((((!((map__25972 == null))))?(((((map__25972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25972):map__25972);
var namespace = cljs.core.get.call(null,map__25972__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25889,inst_25857,inst_25849,inst_25852,inst_25885,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25889__$1 = cljs.core.group_by.call(null,inst_25888,inst_25855);
var inst_25891 = (inst_25889__$1 == null);
var inst_25892 = cljs.core.not.call(null,inst_25891);
var state_25936__$1 = (function (){var statearr_25974 = state_25936;
(statearr_25974[(28)] = inst_25885);

(statearr_25974[(16)] = inst_25889__$1);

return statearr_25974;
})();
if(inst_25892){
var statearr_25975_26048 = state_25936__$1;
(statearr_25975_26048[(1)] = (32));

} else {
var statearr_25976_26049 = state_25936__$1;
(statearr_25976_26049[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (44))){
var inst_25912 = (state_25936[(21)]);
var inst_25925 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25912);
var inst_25926 = cljs.core.pr_str.call(null,inst_25925);
var inst_25927 = ["not required: ",inst_25926].join('');
var inst_25928 = figwheel.client.utils.log.call(null,inst_25927);
var state_25936__$1 = state_25936;
var statearr_25977_26050 = state_25936__$1;
(statearr_25977_26050[(2)] = inst_25928);

(statearr_25977_26050[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (6))){
var inst_25830 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25978_26051 = state_25936__$1;
(statearr_25978_26051[(2)] = inst_25830);

(statearr_25978_26051[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (28))){
var inst_25855 = (state_25936[(26)]);
var inst_25882 = (state_25936[(2)]);
var inst_25883 = cljs.core.not_empty.call(null,inst_25855);
var state_25936__$1 = (function (){var statearr_25979 = state_25936;
(statearr_25979[(29)] = inst_25882);

return statearr_25979;
})();
if(cljs.core.truth_(inst_25883)){
var statearr_25980_26052 = state_25936__$1;
(statearr_25980_26052[(1)] = (29));

} else {
var statearr_25981_26053 = state_25936__$1;
(statearr_25981_26053[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (25))){
var inst_25853 = (state_25936[(23)]);
var inst_25869 = (state_25936[(2)]);
var inst_25870 = cljs.core.not_empty.call(null,inst_25853);
var state_25936__$1 = (function (){var statearr_25982 = state_25936;
(statearr_25982[(30)] = inst_25869);

return statearr_25982;
})();
if(cljs.core.truth_(inst_25870)){
var statearr_25983_26054 = state_25936__$1;
(statearr_25983_26054[(1)] = (26));

} else {
var statearr_25984_26055 = state_25936__$1;
(statearr_25984_26055[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (34))){
var inst_25905 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
if(cljs.core.truth_(inst_25905)){
var statearr_25985_26056 = state_25936__$1;
(statearr_25985_26056[(1)] = (38));

} else {
var statearr_25986_26057 = state_25936__$1;
(statearr_25986_26057[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (17))){
var state_25936__$1 = state_25936;
var statearr_25987_26058 = state_25936__$1;
(statearr_25987_26058[(2)] = recompile_dependents);

(statearr_25987_26058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (3))){
var state_25936__$1 = state_25936;
var statearr_25988_26059 = state_25936__$1;
(statearr_25988_26059[(2)] = null);

(statearr_25988_26059[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (12))){
var inst_25826 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25989_26060 = state_25936__$1;
(statearr_25989_26060[(2)] = inst_25826);

(statearr_25989_26060[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (2))){
var inst_25788 = (state_25936[(13)]);
var inst_25795 = cljs.core.seq.call(null,inst_25788);
var inst_25796 = inst_25795;
var inst_25797 = null;
var inst_25798 = (0);
var inst_25799 = (0);
var state_25936__$1 = (function (){var statearr_25990 = state_25936;
(statearr_25990[(7)] = inst_25797);

(statearr_25990[(8)] = inst_25796);

(statearr_25990[(9)] = inst_25798);

(statearr_25990[(10)] = inst_25799);

return statearr_25990;
})();
var statearr_25991_26061 = state_25936__$1;
(statearr_25991_26061[(2)] = null);

(statearr_25991_26061[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (23))){
var inst_25855 = (state_25936[(26)]);
var inst_25853 = (state_25936[(23)]);
var inst_25857 = (state_25936[(24)]);
var inst_25849 = (state_25936[(19)]);
var inst_25852 = (state_25936[(25)]);
var inst_25860 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25862 = (function (){var all_files = inst_25849;
var res_SINGLEQUOTE_ = inst_25852;
var res = inst_25853;
var files_not_loaded = inst_25855;
var dependencies_that_loaded = inst_25857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25857,inst_25849,inst_25852,inst_25860,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25861){
var map__25992 = p__25861;
var map__25992__$1 = (((((!((map__25992 == null))))?(((((map__25992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25992):map__25992);
var request_url = cljs.core.get.call(null,map__25992__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25857,inst_25849,inst_25852,inst_25860,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25863 = cljs.core.reverse.call(null,inst_25857);
var inst_25864 = cljs.core.map.call(null,inst_25862,inst_25863);
var inst_25865 = cljs.core.pr_str.call(null,inst_25864);
var inst_25866 = figwheel.client.utils.log.call(null,inst_25865);
var state_25936__$1 = (function (){var statearr_25994 = state_25936;
(statearr_25994[(31)] = inst_25860);

return statearr_25994;
})();
var statearr_25995_26062 = state_25936__$1;
(statearr_25995_26062[(2)] = inst_25866);

(statearr_25995_26062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (35))){
var state_25936__$1 = state_25936;
var statearr_25996_26063 = state_25936__$1;
(statearr_25996_26063[(2)] = true);

(statearr_25996_26063[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (19))){
var inst_25839 = (state_25936[(12)]);
var inst_25845 = figwheel.client.file_reloading.expand_files.call(null,inst_25839);
var state_25936__$1 = state_25936;
var statearr_25997_26064 = state_25936__$1;
(statearr_25997_26064[(2)] = inst_25845);

(statearr_25997_26064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (11))){
var state_25936__$1 = state_25936;
var statearr_25998_26065 = state_25936__$1;
(statearr_25998_26065[(2)] = null);

(statearr_25998_26065[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (9))){
var inst_25828 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_25999_26066 = state_25936__$1;
(statearr_25999_26066[(2)] = inst_25828);

(statearr_25999_26066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (5))){
var inst_25798 = (state_25936[(9)]);
var inst_25799 = (state_25936[(10)]);
var inst_25801 = (inst_25799 < inst_25798);
var inst_25802 = inst_25801;
var state_25936__$1 = state_25936;
if(cljs.core.truth_(inst_25802)){
var statearr_26000_26067 = state_25936__$1;
(statearr_26000_26067[(1)] = (7));

} else {
var statearr_26001_26068 = state_25936__$1;
(statearr_26001_26068[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (14))){
var inst_25809 = (state_25936[(22)]);
var inst_25818 = cljs.core.first.call(null,inst_25809);
var inst_25819 = figwheel.client.file_reloading.eval_body.call(null,inst_25818,opts);
var inst_25820 = cljs.core.next.call(null,inst_25809);
var inst_25796 = inst_25820;
var inst_25797 = null;
var inst_25798 = (0);
var inst_25799 = (0);
var state_25936__$1 = (function (){var statearr_26002 = state_25936;
(statearr_26002[(7)] = inst_25797);

(statearr_26002[(8)] = inst_25796);

(statearr_26002[(32)] = inst_25819);

(statearr_26002[(9)] = inst_25798);

(statearr_26002[(10)] = inst_25799);

return statearr_26002;
})();
var statearr_26003_26069 = state_25936__$1;
(statearr_26003_26069[(2)] = null);

(statearr_26003_26069[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (45))){
var state_25936__$1 = state_25936;
var statearr_26004_26070 = state_25936__$1;
(statearr_26004_26070[(2)] = null);

(statearr_26004_26070[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (26))){
var inst_25855 = (state_25936[(26)]);
var inst_25853 = (state_25936[(23)]);
var inst_25857 = (state_25936[(24)]);
var inst_25849 = (state_25936[(19)]);
var inst_25852 = (state_25936[(25)]);
var inst_25872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25874 = (function (){var all_files = inst_25849;
var res_SINGLEQUOTE_ = inst_25852;
var res = inst_25853;
var files_not_loaded = inst_25855;
var dependencies_that_loaded = inst_25857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25857,inst_25849,inst_25852,inst_25872,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25873){
var map__26005 = p__25873;
var map__26005__$1 = (((((!((map__26005 == null))))?(((((map__26005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26005):map__26005);
var namespace = cljs.core.get.call(null,map__26005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25857,inst_25849,inst_25852,inst_25872,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25875 = cljs.core.map.call(null,inst_25874,inst_25853);
var inst_25876 = cljs.core.pr_str.call(null,inst_25875);
var inst_25877 = figwheel.client.utils.log.call(null,inst_25876);
var inst_25878 = (function (){var all_files = inst_25849;
var res_SINGLEQUOTE_ = inst_25852;
var res = inst_25853;
var files_not_loaded = inst_25855;
var dependencies_that_loaded = inst_25857;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25857,inst_25849,inst_25852,inst_25872,inst_25874,inst_25875,inst_25876,inst_25877,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25855,inst_25853,inst_25857,inst_25849,inst_25852,inst_25872,inst_25874,inst_25875,inst_25876,inst_25877,state_val_25937,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25879 = setTimeout(inst_25878,(10));
var state_25936__$1 = (function (){var statearr_26007 = state_25936;
(statearr_26007[(33)] = inst_25872);

(statearr_26007[(34)] = inst_25877);

return statearr_26007;
})();
var statearr_26008_26071 = state_25936__$1;
(statearr_26008_26071[(2)] = inst_25879);

(statearr_26008_26071[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (16))){
var state_25936__$1 = state_25936;
var statearr_26009_26072 = state_25936__$1;
(statearr_26009_26072[(2)] = reload_dependents);

(statearr_26009_26072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (38))){
var inst_25889 = (state_25936[(16)]);
var inst_25907 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25889);
var state_25936__$1 = state_25936;
var statearr_26010_26073 = state_25936__$1;
(statearr_26010_26073[(2)] = inst_25907);

(statearr_26010_26073[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (30))){
var state_25936__$1 = state_25936;
var statearr_26011_26074 = state_25936__$1;
(statearr_26011_26074[(2)] = null);

(statearr_26011_26074[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (10))){
var inst_25809 = (state_25936[(22)]);
var inst_25811 = cljs.core.chunked_seq_QMARK_.call(null,inst_25809);
var state_25936__$1 = state_25936;
if(inst_25811){
var statearr_26012_26075 = state_25936__$1;
(statearr_26012_26075[(1)] = (13));

} else {
var statearr_26013_26076 = state_25936__$1;
(statearr_26013_26076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (18))){
var inst_25843 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
if(cljs.core.truth_(inst_25843)){
var statearr_26014_26077 = state_25936__$1;
(statearr_26014_26077[(1)] = (19));

} else {
var statearr_26015_26078 = state_25936__$1;
(statearr_26015_26078[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (42))){
var state_25936__$1 = state_25936;
var statearr_26016_26079 = state_25936__$1;
(statearr_26016_26079[(2)] = null);

(statearr_26016_26079[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (37))){
var inst_25902 = (state_25936[(2)]);
var state_25936__$1 = state_25936;
var statearr_26017_26080 = state_25936__$1;
(statearr_26017_26080[(2)] = inst_25902);

(statearr_26017_26080[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25937 === (8))){
var inst_25796 = (state_25936[(8)]);
var inst_25809 = (state_25936[(22)]);
var inst_25809__$1 = cljs.core.seq.call(null,inst_25796);
var state_25936__$1 = (function (){var statearr_26018 = state_25936;
(statearr_26018[(22)] = inst_25809__$1);

return statearr_26018;
})();
if(inst_25809__$1){
var statearr_26019_26081 = state_25936__$1;
(statearr_26019_26081[(1)] = (10));

} else {
var statearr_26020_26082 = state_25936__$1;
(statearr_26020_26082[(1)] = (11));

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
});})(c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20275__auto__,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____0 = (function (){
var statearr_26021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26021[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__);

(statearr_26021[(1)] = (1));

return statearr_26021;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____1 = (function (state_25936){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_25936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e26022){if((e26022 instanceof Object)){
var ex__20279__auto__ = e26022;
var statearr_26023_26083 = state_25936;
(statearr_26023_26083[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26084 = state_25936;
state_25936 = G__26084;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__ = function(state_25936){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____1.call(this,state_25936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21147__auto__ = (function (){var statearr_26024 = f__21146__auto__.call(null);
(statearr_26024[(6)] = c__21145__auto__);

return statearr_26024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__,map__25781,map__25781__$1,opts,before_jsload,on_jsload,reload_dependents,map__25782,map__25782__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21145__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26087,link){
var map__26088 = p__26087;
var map__26088__$1 = (((((!((map__26088 == null))))?(((((map__26088.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26088.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26088):map__26088);
var file = cljs.core.get.call(null,map__26088__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__26088,map__26088__$1,file){
return (function (p1__26085_SHARP_,p2__26086_SHARP_){
if(cljs.core._EQ_.call(null,p1__26085_SHARP_,p2__26086_SHARP_)){
return p1__26085_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__26088,map__26088__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26091){
var map__26092 = p__26091;
var map__26092__$1 = (((((!((map__26092 == null))))?(((((map__26092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26092):map__26092);
var match_length = cljs.core.get.call(null,map__26092__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26092__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26090_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26090_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26094_SHARP_,p2__26095_SHARP_){
return cljs.core.assoc.call(null,p1__26094_SHARP_,cljs.core.get.call(null,p2__26095_SHARP_,key),p2__26095_SHARP_);
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
var loaded_f_datas_26096 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_26096);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_26096);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26097,p__26098){
var map__26099 = p__26097;
var map__26099__$1 = (((((!((map__26099 == null))))?(((((map__26099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26099):map__26099);
var on_cssload = cljs.core.get.call(null,map__26099__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__26100 = p__26098;
var map__26100__$1 = (((((!((map__26100 == null))))?(((((map__26100.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26100.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26100):map__26100);
var files_msg = map__26100__$1;
var files = cljs.core.get.call(null,map__26100__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1569260571403
