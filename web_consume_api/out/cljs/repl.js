// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26969){
var map__26970 = p__26969;
var map__26970__$1 = (((((!((map__26970 == null))))?(((((map__26970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26970.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26970):map__26970);
var m = map__26970__$1;
var n = cljs.core.get.call(null,map__26970__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26970__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__26972_27004 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26973_27005 = null;
var count__26974_27006 = (0);
var i__26975_27007 = (0);
while(true){
if((i__26975_27007 < count__26974_27006)){
var f_27008 = cljs.core._nth.call(null,chunk__26973_27005,i__26975_27007);
cljs.core.println.call(null,"  ",f_27008);


var G__27009 = seq__26972_27004;
var G__27010 = chunk__26973_27005;
var G__27011 = count__26974_27006;
var G__27012 = (i__26975_27007 + (1));
seq__26972_27004 = G__27009;
chunk__26973_27005 = G__27010;
count__26974_27006 = G__27011;
i__26975_27007 = G__27012;
continue;
} else {
var temp__4657__auto___27013 = cljs.core.seq.call(null,seq__26972_27004);
if(temp__4657__auto___27013){
var seq__26972_27014__$1 = temp__4657__auto___27013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26972_27014__$1)){
var c__4550__auto___27015 = cljs.core.chunk_first.call(null,seq__26972_27014__$1);
var G__27016 = cljs.core.chunk_rest.call(null,seq__26972_27014__$1);
var G__27017 = c__4550__auto___27015;
var G__27018 = cljs.core.count.call(null,c__4550__auto___27015);
var G__27019 = (0);
seq__26972_27004 = G__27016;
chunk__26973_27005 = G__27017;
count__26974_27006 = G__27018;
i__26975_27007 = G__27019;
continue;
} else {
var f_27020 = cljs.core.first.call(null,seq__26972_27014__$1);
cljs.core.println.call(null,"  ",f_27020);


var G__27021 = cljs.core.next.call(null,seq__26972_27014__$1);
var G__27022 = null;
var G__27023 = (0);
var G__27024 = (0);
seq__26972_27004 = G__27021;
chunk__26973_27005 = G__27022;
count__26974_27006 = G__27023;
i__26975_27007 = G__27024;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_27025 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_27025);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_27025)))?cljs.core.second.call(null,arglists_27025):arglists_27025));
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
var seq__26976_27026 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26977_27027 = null;
var count__26978_27028 = (0);
var i__26979_27029 = (0);
while(true){
if((i__26979_27029 < count__26978_27028)){
var vec__26990_27030 = cljs.core._nth.call(null,chunk__26977_27027,i__26979_27029);
var name_27031 = cljs.core.nth.call(null,vec__26990_27030,(0),null);
var map__26993_27032 = cljs.core.nth.call(null,vec__26990_27030,(1),null);
var map__26993_27033__$1 = (((((!((map__26993_27032 == null))))?(((((map__26993_27032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26993_27032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26993_27032):map__26993_27032);
var doc_27034 = cljs.core.get.call(null,map__26993_27033__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27035 = cljs.core.get.call(null,map__26993_27033__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27031);

cljs.core.println.call(null," ",arglists_27035);

if(cljs.core.truth_(doc_27034)){
cljs.core.println.call(null," ",doc_27034);
} else {
}


var G__27036 = seq__26976_27026;
var G__27037 = chunk__26977_27027;
var G__27038 = count__26978_27028;
var G__27039 = (i__26979_27029 + (1));
seq__26976_27026 = G__27036;
chunk__26977_27027 = G__27037;
count__26978_27028 = G__27038;
i__26979_27029 = G__27039;
continue;
} else {
var temp__4657__auto___27040 = cljs.core.seq.call(null,seq__26976_27026);
if(temp__4657__auto___27040){
var seq__26976_27041__$1 = temp__4657__auto___27040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26976_27041__$1)){
var c__4550__auto___27042 = cljs.core.chunk_first.call(null,seq__26976_27041__$1);
var G__27043 = cljs.core.chunk_rest.call(null,seq__26976_27041__$1);
var G__27044 = c__4550__auto___27042;
var G__27045 = cljs.core.count.call(null,c__4550__auto___27042);
var G__27046 = (0);
seq__26976_27026 = G__27043;
chunk__26977_27027 = G__27044;
count__26978_27028 = G__27045;
i__26979_27029 = G__27046;
continue;
} else {
var vec__26995_27047 = cljs.core.first.call(null,seq__26976_27041__$1);
var name_27048 = cljs.core.nth.call(null,vec__26995_27047,(0),null);
var map__26998_27049 = cljs.core.nth.call(null,vec__26995_27047,(1),null);
var map__26998_27050__$1 = (((((!((map__26998_27049 == null))))?(((((map__26998_27049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26998_27049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26998_27049):map__26998_27049);
var doc_27051 = cljs.core.get.call(null,map__26998_27050__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_27052 = cljs.core.get.call(null,map__26998_27050__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_27048);

cljs.core.println.call(null," ",arglists_27052);

if(cljs.core.truth_(doc_27051)){
cljs.core.println.call(null," ",doc_27051);
} else {
}


var G__27053 = cljs.core.next.call(null,seq__26976_27041__$1);
var G__27054 = null;
var G__27055 = (0);
var G__27056 = (0);
seq__26976_27026 = G__27053;
chunk__26977_27027 = G__27054;
count__26978_27028 = G__27055;
i__26979_27029 = G__27056;
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

var seq__27000 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__27001 = null;
var count__27002 = (0);
var i__27003 = (0);
while(true){
if((i__27003 < count__27002)){
var role = cljs.core._nth.call(null,chunk__27001,i__27003);
var temp__4657__auto___27057__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27057__$1)){
var spec_27058 = temp__4657__auto___27057__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27058));
} else {
}


var G__27059 = seq__27000;
var G__27060 = chunk__27001;
var G__27061 = count__27002;
var G__27062 = (i__27003 + (1));
seq__27000 = G__27059;
chunk__27001 = G__27060;
count__27002 = G__27061;
i__27003 = G__27062;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__27000);
if(temp__4657__auto____$1){
var seq__27000__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27000__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27000__$1);
var G__27063 = cljs.core.chunk_rest.call(null,seq__27000__$1);
var G__27064 = c__4550__auto__;
var G__27065 = cljs.core.count.call(null,c__4550__auto__);
var G__27066 = (0);
seq__27000 = G__27063;
chunk__27001 = G__27064;
count__27002 = G__27065;
i__27003 = G__27066;
continue;
} else {
var role = cljs.core.first.call(null,seq__27000__$1);
var temp__4657__auto___27067__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___27067__$2)){
var spec_27068 = temp__4657__auto___27067__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_27068));
} else {
}


var G__27069 = cljs.core.next.call(null,seq__27000__$1);
var G__27070 = null;
var G__27071 = (0);
var G__27072 = (0);
seq__27000 = G__27069;
chunk__27001 = G__27070;
count__27002 = G__27071;
i__27003 = G__27072;
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
var G__27073 = cljs.core.conj.call(null,via,t);
var G__27074 = cljs.core.ex_cause.call(null,t);
via = G__27073;
t = G__27074;
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
var map__27077 = datafied_throwable;
var map__27077__$1 = (((((!((map__27077 == null))))?(((((map__27077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27077):map__27077);
var via = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__27077__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__27078 = cljs.core.last.call(null,via);
var map__27078__$1 = (((((!((map__27078 == null))))?(((((map__27078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27078):map__27078);
var type = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__27078__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__27079 = data;
var map__27079__$1 = (((((!((map__27079 == null))))?(((((map__27079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27079):map__27079);
var problems = cljs.core.get.call(null,map__27079__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__27079__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__27079__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__27080 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__27080__$1 = (((((!((map__27080 == null))))?(((((map__27080.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27080.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27080):map__27080);
var top_data = map__27080__$1;
var source = cljs.core.get.call(null,map__27080__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__27085 = phase;
var G__27085__$1 = (((G__27085 instanceof cljs.core.Keyword))?G__27085.fqn:null);
switch (G__27085__$1) {
case "read-source":
var map__27086 = data;
var map__27086__$1 = (((((!((map__27086 == null))))?(((((map__27086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27086):map__27086);
var line = cljs.core.get.call(null,map__27086__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27086__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__27088 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__27088__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27088,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27088);
var G__27088__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27088__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27088__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27088__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27088__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__27089 = top_data;
var G__27089__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__27089,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__27089);
var G__27089__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__27089__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__27089__$1);
var G__27089__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27089__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27089__$2);
var G__27089__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27089__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27089__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27089__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27089__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__27090 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27090,(0),null);
var method = cljs.core.nth.call(null,vec__27090,(1),null);
var file = cljs.core.nth.call(null,vec__27090,(2),null);
var line = cljs.core.nth.call(null,vec__27090,(3),null);
var G__27093 = top_data;
var G__27093__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__27093,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__27093);
var G__27093__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__27093__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__27093__$1);
var G__27093__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__27093__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__27093__$2);
var G__27093__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__27093__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__27093__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__27093__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__27093__$4;
}

break;
case "execution":
var vec__27094 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__27094,(0),null);
var method = cljs.core.nth.call(null,vec__27094,(1),null);
var file = cljs.core.nth.call(null,vec__27094,(2),null);
var line = cljs.core.nth.call(null,vec__27094,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__27094,source__$1,method,file,line,G__27085,G__27085__$1,map__27077,map__27077__$1,via,trace,phase,map__27078,map__27078__$1,type,message,data,map__27079,map__27079__$1,problems,fn,caller,map__27080,map__27080__$1,top_data,source){
return (function (p1__27076_SHARP_){
var or__4131__auto__ = (p1__27076_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__27076_SHARP_);
}
});})(vec__27094,source__$1,method,file,line,G__27085,G__27085__$1,map__27077,map__27077__$1,via,trace,phase,map__27078,map__27078__$1,type,message,data,map__27079,map__27079__$1,problems,fn,caller,map__27080,map__27080__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__27097 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__27097__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__27097,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__27097);
var G__27097__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__27097__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__27097__$1);
var G__27097__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__27097__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__27097__$2);
var G__27097__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__27097__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__27097__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__27097__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__27097__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27085__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__27101){
var map__27102 = p__27101;
var map__27102__$1 = (((((!((map__27102 == null))))?(((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27102.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27102):map__27102);
var triage_data = map__27102__$1;
var phase = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__27104 = phase;
var G__27104__$1 = (((G__27104 instanceof cljs.core.Keyword))?G__27104.fqn:null);
switch (G__27104__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27105_27114 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27106_27115 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27107_27116 = true;
var _STAR_print_fn_STAR__temp_val__27108_27117 = ((function (_STAR_print_newline_STAR__orig_val__27105_27114,_STAR_print_fn_STAR__orig_val__27106_27115,_STAR_print_newline_STAR__temp_val__27107_27116,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27105_27114,_STAR_print_fn_STAR__orig_val__27106_27115,_STAR_print_newline_STAR__temp_val__27107_27116,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27107_27116;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27108_27117;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27105_27114,_STAR_print_fn_STAR__orig_val__27106_27115,_STAR_print_newline_STAR__temp_val__27107_27116,_STAR_print_fn_STAR__temp_val__27108_27117,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27105_27114,_STAR_print_fn_STAR__orig_val__27106_27115,_STAR_print_newline_STAR__temp_val__27107_27116,_STAR_print_fn_STAR__temp_val__27108_27117,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27099_SHARP_){
return cljs.core.dissoc.call(null,p1__27099_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27105_27114,_STAR_print_fn_STAR__orig_val__27106_27115,_STAR_print_newline_STAR__temp_val__27107_27116,_STAR_print_fn_STAR__temp_val__27108_27117,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27105_27114,_STAR_print_fn_STAR__orig_val__27106_27115,_STAR_print_newline_STAR__temp_val__27107_27116,_STAR_print_fn_STAR__temp_val__27108_27117,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27106_27115;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27105_27114;
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
var _STAR_print_newline_STAR__orig_val__27109_27118 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27110_27119 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27111_27120 = true;
var _STAR_print_fn_STAR__temp_val__27112_27121 = ((function (_STAR_print_newline_STAR__orig_val__27109_27118,_STAR_print_fn_STAR__orig_val__27110_27119,_STAR_print_newline_STAR__temp_val__27111_27120,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__27109_27118,_STAR_print_fn_STAR__orig_val__27110_27119,_STAR_print_newline_STAR__temp_val__27111_27120,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27111_27120;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27112_27121;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__27109_27118,_STAR_print_fn_STAR__orig_val__27110_27119,_STAR_print_newline_STAR__temp_val__27111_27120,_STAR_print_fn_STAR__temp_val__27112_27121,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__27109_27118,_STAR_print_fn_STAR__orig_val__27110_27119,_STAR_print_newline_STAR__temp_val__27111_27120,_STAR_print_fn_STAR__temp_val__27112_27121,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__27100_SHARP_){
return cljs.core.dissoc.call(null,p1__27100_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__27109_27118,_STAR_print_fn_STAR__orig_val__27110_27119,_STAR_print_newline_STAR__temp_val__27111_27120,_STAR_print_fn_STAR__temp_val__27112_27121,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__27109_27118,_STAR_print_fn_STAR__orig_val__27110_27119,_STAR_print_newline_STAR__temp_val__27111_27120,_STAR_print_fn_STAR__temp_val__27112_27121,sb__4661__auto__,G__27104,G__27104__$1,loc,class_name,simple_class,cause_type,format,map__27102,map__27102__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27110_27119;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27109_27118;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27104__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1569260573101
