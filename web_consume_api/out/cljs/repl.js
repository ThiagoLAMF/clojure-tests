// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26972){
var map__26973 = p__26972;
var map__26973__$1 = (((((!((map__26973 == null))))?(((((map__26973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26973):map__26973);
var m = map__26973__$1;
var n = cljs.core.get.call(null,map__26973__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26973__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__26975_27007 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26976_27008 = null;
var count__26977_27009 = (0);
var i__26978_27010 = (0);
while(true){
if((i__26978_27010 < count__26977_27009)){
var f_27011 = cljs.core._nth.call(null,chunk__26976_27008,i__26978_27010);
cljs.core.println.call(null,"  ",f_27011);


var G__27012 = seq__26975_27007;
var G__27013 = chunk__26976_27008;
var G__27014 = count__26977_27009;
var G__27015 = (i__26978_27010 + (1));
seq__26975_27007 = G__27012;
chunk__26976_27008 = G__27013;
count__26977_27009 = G__27014;
i__26978_27010 = G__27015;
continue;
} else {
var temp__4657__auto___27016 = cljs.core.seq.call(null,seq__26975_27007);
if(temp__4657__auto___27016){
var seq__26975_27017__$1 = temp__4657__auto___27016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26975_27017__$1)){
var c__4550__auto___27018 = cljs.core.chunk_first.call(null,seq__26975_27017__$1);
var G__27019 = cljs.core.chunk_rest.call(null,seq__26975_27017__$1);
var G__27020 = c__4550__auto___27018;
var G__27021 = cljs.core.count.call(null,c__4550__auto___27018);
var G__27022 = (0);
seq__26975_27007 = G__27019;
chunk__26976_27008 = G__27020;
count__26977_27009 = G__27021;
i__26978_27010 = G__27022;
continue;
} else {
var f_27023 = cljs.core.first.call(null,seq__26975_27017__$1);
cljs.core.println.call(null,"  ",f_27023);


var G__27024 = cljs.core.next.call(null,seq__26975_27017__$1);
var G__27025 = null;
var G__27026 = (0);
var G__27027 = (0);
seq__26975_27007 = G__27024;
chunk__26976_27008 = G__27025;
count__26977_27009 = G__27026;
i__26978_27010 = G__27027;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27028 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27028);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27028)))?cljs.core.second.call(null,arglists_27028):arglists_27028));
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
var seq__26979_27029 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26980_27030 = null;
var count__26981_27031 = (0);
var i__26982_27032 = (0);
while(true){
if((i__26982_27032 < count__26981_27031)){
var vec__26993_27033 = cljs.core._nth.call(null,chunk__26980_27030,i__26982_27032);
var name_27034 = cljs.core.nth.call(null,vec__26993_27033,(0),null);
var map__26996_27035 = cljs.core.nth.call(null,vec__26993_27033,(1),null);
var map__26996_27036__$1 = (((((!((map__26996_27035 == null))))?(((((map__26996_27035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26996_27035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26996_27035):map__26996_27035);
var doc_27037 = cljs.core.get.call(null,map__26996_27036__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27038 = cljs.core.get.call(null,map__26996_27036__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27034);

cljs.core.println.call(null," ",arglists_27038);

if(cljs.core.truth_(doc_27037)){
cljs.core.println.call(null," ",doc_27037);
} else {
}


var G__27039 = seq__26979_27029;
var G__27040 = chunk__26980_27030;
var G__27041 = count__26981_27031;
var G__27042 = (i__26982_27032 + (1));
seq__26979_27029 = G__27039;
chunk__26980_27030 = G__27040;
count__26981_27031 = G__27041;
i__26982_27032 = G__27042;
continue;
} else {
var temp__4657__auto___27043 = cljs.core.seq.call(null,seq__26979_27029);
if(temp__4657__auto___27043){
var seq__26979_27044__$1 = temp__4657__auto___27043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26979_27044__$1)){
var c__4550__auto___27045 = cljs.core.chunk_first.call(null,seq__26979_27044__$1);
var G__27046 = cljs.core.chunk_rest.call(null,seq__26979_27044__$1);
var G__27047 = c__4550__auto___27045;
var G__27048 = cljs.core.count.call(null,c__4550__auto___27045);
var G__27049 = (0);
seq__26979_27029 = G__27046;
chunk__26980_27030 = G__27047;
count__26981_27031 = G__27048;
i__26982_27032 = G__27049;
continue;
} else {
var vec__26998_27050 = cljs.core.first.call(null,seq__26979_27044__$1);
var name_27051 = cljs.core.nth.call(null,vec__26998_27050,(0),null);
var map__27001_27052 = cljs.core.nth.call(null,vec__26998_27050,(1),null);
var map__27001_27053__$1 = (((((!((map__27001_27052 == null))))?(((((map__27001_27052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27001_27052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27001_27052):map__27001_27052);
var doc_27054 = cljs.core.get.call(null,map__27001_27053__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27055 = cljs.core.get.call(null,map__27001_27053__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27051);

cljs.core.println.call(null," ",arglists_27055);

if(cljs.core.truth_(doc_27054)){
cljs.core.println.call(null," ",doc_27054);
} else {
}


var G__27056 = cljs.core.next.call(null,seq__26979_27044__$1);
var G__27057 = null;
var G__27058 = (0);
var G__27059 = (0);
seq__26979_27029 = G__27056;
chunk__26980_27030 = G__27057;
count__26981_27031 = G__27058;
i__26982_27032 = G__27059;
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

var seq__27003 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27004 = null;
var count__27005 = (0);
var i__27006 = (0);
while(true){
if((i__27006 < count__27005)){
var role = cljs.core._nth.call(null,chunk__27004,i__27006);
var temp__4657__auto___27060__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27060__$1)){
var spec_27061 = temp__4657__auto___27060__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27061));
} else {
}


var G__27062 = seq__27003;
var G__27063 = chunk__27004;
var G__27064 = count__27005;
var G__27065 = (i__27006 + (1));
seq__27003 = G__27062;
chunk__27004 = G__27063;
count__27005 = G__27064;
i__27006 = G__27065;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__27003);
if(temp__4657__auto____$1){
var seq__27003__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27003__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27003__$1);
var G__27066 = cljs.core.chunk_rest.call(null,seq__27003__$1);
var G__27067 = c__4550__auto__;
var G__27068 = cljs.core.count.call(null,c__4550__auto__);
var G__27069 = (0);
seq__27003 = G__27066;
chunk__27004 = G__27067;
count__27005 = G__27068;
i__27006 = G__27069;
continue;
} else {
var role = cljs.core.first.call(null,seq__27003__$1);
var temp__4657__auto___27070__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27070__$2)){
var spec_27071 = temp__4657__auto___27070__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27071));
} else {
}


var G__27072 = cljs.core.next.call(null,seq__27003__$1);
var G__27073 = null;
var G__27074 = (0);
var G__27075 = (0);
seq__27003 = G__27072;
chunk__27004 = G__27073;
count__27005 = G__27074;
i__27006 = G__27075;
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
var G__27076 = cljs.core.conj.call(null,via,t);
var G__27077 = cljs.core.ex_cause.call(null,t);
via = G__27076;
t = G__27077;
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
var map__27080 = datafied_throwable;
var map__27080__$1 = (((((!((map__27080 == null))))?(((((map__27080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27080):map__27080);
var via = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27081 = cljs.core.last.call(null,via);
var map__27081__$1 = (((((!((map__27081 == null))))?(((((map__27081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27081):map__27081);
var type = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27081__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27082 = data;
var map__27082__$1 = (((((!((map__27082 == null))))?(((((map__27082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27082):map__27082);
var problems = cljs.core.get.call(null,map__27082__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27082__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27082__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27083 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27083__$1 = (((((!((map__27083 == null))))?(((((map__27083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27083):map__27083);
var top_data = map__27083__$1;
var source = cljs.core.get.call(null,map__27083__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27088 = phase;
var G__27088__$1 = (((G__27088 instanceof cljs.core.Keyword))?G__27088.fqn:null);
switch (G__27088__$1) {
case "read-source":
var map__27089 = data;
var map__27089__$1 = (((((!((map__27089 == null))))?(((((map__27089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27089):map__27089);
var line = cljs.core.get.call(null,map__27089__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27089__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27091 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27091__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27091,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27091);
var G__27091__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27091__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27091__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27091__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27091__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27092 = top_data;
var G__27092__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27092,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27092);
var G__27092__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27092__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27092__$1);
var G__27092__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27092__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27092__$2);
var G__27092__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27092__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27092__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27092__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27092__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27093 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27093,(0),null);
var method = cljs.core.nth.call(null,vec__27093,(1),null);
var file = cljs.core.nth.call(null,vec__27093,(2),null);
var line = cljs.core.nth.call(null,vec__27093,(3),null);
var G__27096 = top_data;
var G__27096__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27096,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27096);
var G__27096__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27096__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27096__$1);
var G__27096__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__27096__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27096__$2);
var G__27096__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27096__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27096__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27096__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27096__$4;
}

break;
case "execution":
var vec__27097 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27097,(0),null);
var method = cljs.core.nth.call(null,vec__27097,(1),null);
var file = cljs.core.nth.call(null,vec__27097,(2),null);
var line = cljs.core.nth.call(null,vec__27097,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__27097,source__$1,method,file,line,G__27088,G__27088__$1,map__27080,map__27080__$1,via,trace,phase,map__27081,map__27081__$1,type,message,data,map__27082,map__27082__$1,problems,fn,caller,map__27083,map__27083__$1,top_data,source){
return (function (p1__27079_SHARP_){
var or__4131__auto__ = (p1__27079_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27079_SHARP_);
}
});})(vec__27097,source__$1,method,file,line,G__27088,G__27088__$1,map__27080,map__27080__$1,via,trace,phase,map__27081,map__27081__$1,type,message,data,map__27082,map__27082__$1,problems,fn,caller,map__27083,map__27083__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27100 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27100__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27100,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27100);
var G__27100__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27100__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27100__$1);
var G__27100__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__27100__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27100__$2);
var G__27100__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27100__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27100__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27100__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27100__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27088__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27104){
var map__27105 = p__27104;
var map__27105__$1 = (((((!((map__27105 == null))))?(((((map__27105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27105):map__27105);
var triage_data = map__27105__$1;
var phase = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27105__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__27107 = phase;
var G__27107__$1 = (((G__27107 instanceof cljs.core.Keyword))?G__27107.fqn:null);
switch (G__27107__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27108_27117 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27109_27118 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27110_27119 = true;
var _STAR_print_fn_STAR__temp_val__27111_27120 = ((function (_STAR_print_newline_STAR__orig_val__27108_27117,_STAR_print_fn_STAR__orig_val__27109_27118,_STAR_print_newline_STAR__temp_val__27110_27119,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27108_27117,_STAR_print_fn_STAR__orig_val__27109_27118,_STAR_print_newline_STAR__temp_val__27110_27119,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27110_27119;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27111_27120;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27108_27117,_STAR_print_fn_STAR__orig_val__27109_27118,_STAR_print_newline_STAR__temp_val__27110_27119,_STAR_print_fn_STAR__temp_val__27111_27120,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27108_27117,_STAR_print_fn_STAR__orig_val__27109_27118,_STAR_print_newline_STAR__temp_val__27110_27119,_STAR_print_fn_STAR__temp_val__27111_27120,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27102_SHARP_){
return cljs.core.dissoc.call(null,p1__27102_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27108_27117,_STAR_print_fn_STAR__orig_val__27109_27118,_STAR_print_newline_STAR__temp_val__27110_27119,_STAR_print_fn_STAR__temp_val__27111_27120,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27108_27117,_STAR_print_fn_STAR__orig_val__27109_27118,_STAR_print_newline_STAR__temp_val__27110_27119,_STAR_print_fn_STAR__temp_val__27111_27120,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27109_27118;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27108_27117;
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
var _STAR_print_newline_STAR__orig_val__27112_27121 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27113_27122 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27114_27123 = true;
var _STAR_print_fn_STAR__temp_val__27115_27124 = ((function (_STAR_print_newline_STAR__orig_val__27112_27121,_STAR_print_fn_STAR__orig_val__27113_27122,_STAR_print_newline_STAR__temp_val__27114_27123,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27112_27121,_STAR_print_fn_STAR__orig_val__27113_27122,_STAR_print_newline_STAR__temp_val__27114_27123,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27114_27123;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27115_27124;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27112_27121,_STAR_print_fn_STAR__orig_val__27113_27122,_STAR_print_newline_STAR__temp_val__27114_27123,_STAR_print_fn_STAR__temp_val__27115_27124,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27112_27121,_STAR_print_fn_STAR__orig_val__27113_27122,_STAR_print_newline_STAR__temp_val__27114_27123,_STAR_print_fn_STAR__temp_val__27115_27124,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27103_SHARP_){
return cljs.core.dissoc.call(null,p1__27103_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27112_27121,_STAR_print_fn_STAR__orig_val__27113_27122,_STAR_print_newline_STAR__temp_val__27114_27123,_STAR_print_fn_STAR__temp_val__27115_27124,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27112_27121,_STAR_print_fn_STAR__orig_val__27113_27122,_STAR_print_newline_STAR__temp_val__27114_27123,_STAR_print_fn_STAR__temp_val__27115_27124,sb__4661__auto__,G__27107,G__27107__$1,loc,class_name,simple_class,cause_type,format,map__27105,map__27105__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27113_27122;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27112_27121;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27107__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1569276395443
