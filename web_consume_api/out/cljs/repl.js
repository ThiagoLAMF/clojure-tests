// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20241){
var map__20242 = p__20241;
var map__20242__$1 = (((((!((map__20242 == null))))?(((((map__20242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20242):map__20242);
var m = map__20242__$1;
var n = cljs.core.get.call(null,map__20242__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__20242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20244_20276 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20245_20277 = null;
var count__20246_20278 = (0);
var i__20247_20279 = (0);
while(true){
if((i__20247_20279 < count__20246_20278)){
var f_20280 = cljs.core._nth.call(null,chunk__20245_20277,i__20247_20279);
cljs.core.println.call(null,"  ",f_20280);


var G__20281 = seq__20244_20276;
var G__20282 = chunk__20245_20277;
var G__20283 = count__20246_20278;
var G__20284 = (i__20247_20279 + (1));
seq__20244_20276 = G__20281;
chunk__20245_20277 = G__20282;
count__20246_20278 = G__20283;
i__20247_20279 = G__20284;
continue;
} else {
var temp__4657__auto___20285 = cljs.core.seq.call(null,seq__20244_20276);
if(temp__4657__auto___20285){
var seq__20244_20286__$1 = temp__4657__auto___20285;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20244_20286__$1)){
var c__4550__auto___20287 = cljs.core.chunk_first.call(null,seq__20244_20286__$1);
var G__20288 = cljs.core.chunk_rest.call(null,seq__20244_20286__$1);
var G__20289 = c__4550__auto___20287;
var G__20290 = cljs.core.count.call(null,c__4550__auto___20287);
var G__20291 = (0);
seq__20244_20276 = G__20288;
chunk__20245_20277 = G__20289;
count__20246_20278 = G__20290;
i__20247_20279 = G__20291;
continue;
} else {
var f_20292 = cljs.core.first.call(null,seq__20244_20286__$1);
cljs.core.println.call(null,"  ",f_20292);


var G__20293 = cljs.core.next.call(null,seq__20244_20286__$1);
var G__20294 = null;
var G__20295 = (0);
var G__20296 = (0);
seq__20244_20276 = G__20293;
chunk__20245_20277 = G__20294;
count__20246_20278 = G__20295;
i__20247_20279 = G__20296;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20297 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_20297);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_20297)))?cljs.core.second.call(null,arglists_20297):arglists_20297));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20248_20298 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20249_20299 = null;
var count__20250_20300 = (0);
var i__20251_20301 = (0);
while(true){
if((i__20251_20301 < count__20250_20300)){
var vec__20262_20302 = cljs.core._nth.call(null,chunk__20249_20299,i__20251_20301);
var name_20303 = cljs.core.nth.call(null,vec__20262_20302,(0),null);
var map__20265_20304 = cljs.core.nth.call(null,vec__20262_20302,(1),null);
var map__20265_20305__$1 = (((((!((map__20265_20304 == null))))?(((((map__20265_20304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20265_20304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20265_20304):map__20265_20304);
var doc_20306 = cljs.core.get.call(null,map__20265_20305__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20307 = cljs.core.get.call(null,map__20265_20305__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20303);

cljs.core.println.call(null," ",arglists_20307);

if(cljs.core.truth_(doc_20306)){
cljs.core.println.call(null," ",doc_20306);
} else {
}


var G__20308 = seq__20248_20298;
var G__20309 = chunk__20249_20299;
var G__20310 = count__20250_20300;
var G__20311 = (i__20251_20301 + (1));
seq__20248_20298 = G__20308;
chunk__20249_20299 = G__20309;
count__20250_20300 = G__20310;
i__20251_20301 = G__20311;
continue;
} else {
var temp__4657__auto___20312 = cljs.core.seq.call(null,seq__20248_20298);
if(temp__4657__auto___20312){
var seq__20248_20313__$1 = temp__4657__auto___20312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20248_20313__$1)){
var c__4550__auto___20314 = cljs.core.chunk_first.call(null,seq__20248_20313__$1);
var G__20315 = cljs.core.chunk_rest.call(null,seq__20248_20313__$1);
var G__20316 = c__4550__auto___20314;
var G__20317 = cljs.core.count.call(null,c__4550__auto___20314);
var G__20318 = (0);
seq__20248_20298 = G__20315;
chunk__20249_20299 = G__20316;
count__20250_20300 = G__20317;
i__20251_20301 = G__20318;
continue;
} else {
var vec__20267_20319 = cljs.core.first.call(null,seq__20248_20313__$1);
var name_20320 = cljs.core.nth.call(null,vec__20267_20319,(0),null);
var map__20270_20321 = cljs.core.nth.call(null,vec__20267_20319,(1),null);
var map__20270_20322__$1 = (((((!((map__20270_20321 == null))))?(((((map__20270_20321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20270_20321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20270_20321):map__20270_20321);
var doc_20323 = cljs.core.get.call(null,map__20270_20322__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20324 = cljs.core.get.call(null,map__20270_20322__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_20320);

cljs.core.println.call(null," ",arglists_20324);

if(cljs.core.truth_(doc_20323)){
cljs.core.println.call(null," ",doc_20323);
} else {
}


var G__20325 = cljs.core.next.call(null,seq__20248_20313__$1);
var G__20326 = null;
var G__20327 = (0);
var G__20328 = (0);
seq__20248_20298 = G__20325;
chunk__20249_20299 = G__20326;
count__20250_20300 = G__20327;
i__20251_20301 = G__20328;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__20272 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20273 = null;
var count__20274 = (0);
var i__20275 = (0);
while(true){
if((i__20275 < count__20274)){
var role = cljs.core._nth.call(null,chunk__20273,i__20275);
var temp__4657__auto___20329__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___20329__$1)){
var spec_20330 = temp__4657__auto___20329__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20330));
} else {
}


var G__20331 = seq__20272;
var G__20332 = chunk__20273;
var G__20333 = count__20274;
var G__20334 = (i__20275 + (1));
seq__20272 = G__20331;
chunk__20273 = G__20332;
count__20274 = G__20333;
i__20275 = G__20334;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__20272);
if(temp__4657__auto____$1){
var seq__20272__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20272__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__20272__$1);
var G__20335 = cljs.core.chunk_rest.call(null,seq__20272__$1);
var G__20336 = c__4550__auto__;
var G__20337 = cljs.core.count.call(null,c__4550__auto__);
var G__20338 = (0);
seq__20272 = G__20335;
chunk__20273 = G__20336;
count__20274 = G__20337;
i__20275 = G__20338;
continue;
} else {
var role = cljs.core.first.call(null,seq__20272__$1);
var temp__4657__auto___20339__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___20339__$2)){
var spec_20340 = temp__4657__auto___20339__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_20340));
} else {
}


var G__20341 = cljs.core.next.call(null,seq__20272__$1);
var G__20342 = null;
var G__20343 = (0);
var G__20344 = (0);
seq__20272 = G__20341;
chunk__20273 = G__20342;
count__20274 = G__20343;
i__20275 = G__20344;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__4657__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__4657__auto__)){
var msg = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__4657__auto__)){
var ed = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20345 = cljs.core.conj.call(null,via,t);
var G__20346 = cljs.core.ex_cause.call(null,t);
via = G__20345;
t = G__20346;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__4657__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__4657__auto__)){
var root_msg = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__4657__auto__)){
var data = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__4657__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__4657__auto__)){
var phase = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20349 = datafied_throwable;
var map__20349__$1 = (((((!((map__20349 == null))))?(((((map__20349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20349):map__20349);
var via = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__20349__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20350 = cljs.core.last.call(null,via);
var map__20350__$1 = (((((!((map__20350 == null))))?(((((map__20350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20350):map__20350);
var type = cljs.core.get.call(null,map__20350__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__20350__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__20350__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20351 = data;
var map__20351__$1 = (((((!((map__20351 == null))))?(((((map__20351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20351):map__20351);
var problems = cljs.core.get.call(null,map__20351__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__20351__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__20351__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20352 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__20352__$1 = (((((!((map__20352 == null))))?(((((map__20352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20352):map__20352);
var top_data = map__20352__$1;
var source = cljs.core.get.call(null,map__20352__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__20357 = phase;
var G__20357__$1 = (((G__20357 instanceof cljs.core.Keyword))?G__20357.fqn:null);
switch (G__20357__$1) {
case "read-source":
var map__20358 = data;
var map__20358__$1 = (((((!((map__20358 == null))))?(((((map__20358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20358):map__20358);
var line = cljs.core.get.call(null,map__20358__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20358__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20360 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__20360__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20360,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20360);
var G__20360__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20360__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20360__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20360__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20360__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20361 = top_data;
var G__20361__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__20361,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20361);
var G__20361__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__20361__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20361__$1);
var G__20361__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20361__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20361__$2);
var G__20361__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20361__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20361__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20361__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20361__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20362 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20362,(0),null);
var method = cljs.core.nth.call(null,vec__20362,(1),null);
var file = cljs.core.nth.call(null,vec__20362,(2),null);
var line = cljs.core.nth.call(null,vec__20362,(3),null);
var G__20365 = top_data;
var G__20365__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__20365,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20365);
var G__20365__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__20365__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20365__$1);
var G__20365__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__20365__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20365__$2);
var G__20365__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__20365__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20365__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__20365__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20365__$4;
}

break;
case "execution":
var vec__20366 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__20366,(0),null);
var method = cljs.core.nth.call(null,vec__20366,(1),null);
var file = cljs.core.nth.call(null,vec__20366,(2),null);
var line = cljs.core.nth.call(null,vec__20366,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__20366,source__$1,method,file,line,G__20357,G__20357__$1,map__20349,map__20349__$1,via,trace,phase,map__20350,map__20350__$1,type,message,data,map__20351,map__20351__$1,problems,fn,caller,map__20352,map__20352__$1,top_data,source){
return (function (p1__20348_SHARP_){
var or__4131__auto__ = (p1__20348_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__20348_SHARP_);
}
});})(vec__20366,source__$1,method,file,line,G__20357,G__20357__$1,map__20349,map__20349__$1,via,trace,phase,map__20350,map__20350__$1,type,message,data,map__20351,map__20351__$1,problems,fn,caller,map__20352,map__20352__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__20369 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20369__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__20369,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20369);
var G__20369__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__20369__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20369__$1);
var G__20369__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__20369__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20369__$2);
var G__20369__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__20369__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20369__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__20369__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20369__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20357__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20373){
var map__20374 = p__20373;
var map__20374__$1 = (((((!((map__20374 == null))))?(((((map__20374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20374):map__20374);
var triage_data = map__20374__$1;
var phase = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__20374__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20376 = phase;
var G__20376__$1 = (((G__20376 instanceof cljs.core.Keyword))?G__20376.fqn:null);
switch (G__20376__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20377_20386 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20378_20387 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20379_20388 = true;
var _STAR_print_fn_STAR__temp_val__20380_20389 = ((function (_STAR_print_newline_STAR__orig_val__20377_20386,_STAR_print_fn_STAR__orig_val__20378_20387,_STAR_print_newline_STAR__temp_val__20379_20388,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__20377_20386,_STAR_print_fn_STAR__orig_val__20378_20387,_STAR_print_newline_STAR__temp_val__20379_20388,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20379_20388;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20380_20389;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__20377_20386,_STAR_print_fn_STAR__orig_val__20378_20387,_STAR_print_newline_STAR__temp_val__20379_20388,_STAR_print_fn_STAR__temp_val__20380_20389,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__20377_20386,_STAR_print_fn_STAR__orig_val__20378_20387,_STAR_print_newline_STAR__temp_val__20379_20388,_STAR_print_fn_STAR__temp_val__20380_20389,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__20371_SHARP_){
return cljs.core.dissoc.call(null,p1__20371_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__20377_20386,_STAR_print_fn_STAR__orig_val__20378_20387,_STAR_print_newline_STAR__temp_val__20379_20388,_STAR_print_fn_STAR__temp_val__20380_20389,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__20377_20386,_STAR_print_fn_STAR__orig_val__20378_20387,_STAR_print_newline_STAR__temp_val__20379_20388,_STAR_print_fn_STAR__temp_val__20380_20389,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20378_20387;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20377_20386;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20381_20390 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20382_20391 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20383_20392 = true;
var _STAR_print_fn_STAR__temp_val__20384_20393 = ((function (_STAR_print_newline_STAR__orig_val__20381_20390,_STAR_print_fn_STAR__orig_val__20382_20391,_STAR_print_newline_STAR__temp_val__20383_20392,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__20381_20390,_STAR_print_fn_STAR__orig_val__20382_20391,_STAR_print_newline_STAR__temp_val__20383_20392,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20383_20392;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20384_20393;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__20381_20390,_STAR_print_fn_STAR__orig_val__20382_20391,_STAR_print_newline_STAR__temp_val__20383_20392,_STAR_print_fn_STAR__temp_val__20384_20393,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__20381_20390,_STAR_print_fn_STAR__orig_val__20382_20391,_STAR_print_newline_STAR__temp_val__20383_20392,_STAR_print_fn_STAR__temp_val__20384_20393,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__20372_SHARP_){
return cljs.core.dissoc.call(null,p1__20372_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__20381_20390,_STAR_print_fn_STAR__orig_val__20382_20391,_STAR_print_newline_STAR__temp_val__20383_20392,_STAR_print_fn_STAR__temp_val__20384_20393,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__20381_20390,_STAR_print_fn_STAR__orig_val__20382_20391,_STAR_print_newline_STAR__temp_val__20383_20392,_STAR_print_fn_STAR__temp_val__20384_20393,sb__4661__auto__,G__20376,G__20376__$1,loc,class_name,simple_class,cause_type,format,map__20374,map__20374__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20382_20391;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20381_20390;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20376__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1568825141811
