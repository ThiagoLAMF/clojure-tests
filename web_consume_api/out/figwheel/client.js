// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e27316){if((e27316 instanceof Error)){
var e = e27316;
return "Error: Unable to stringify";
} else {
throw e27316;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27319 = arguments.length;
switch (G__27319) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27317_SHARP_){
if(typeof p1__27317_SHARP_ === 'string'){
return p1__27317_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27317_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27322 = arguments.length;
var i__4731__auto___27323 = (0);
while(true){
if((i__4731__auto___27323 < len__4730__auto___27322)){
args__4736__auto__.push((arguments[i__4731__auto___27323]));

var G__27324 = (i__4731__auto___27323 + (1));
i__4731__auto___27323 = G__27324;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27321){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27321));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27326 = arguments.length;
var i__4731__auto___27327 = (0);
while(true){
if((i__4731__auto___27327 < len__4730__auto___27326)){
args__4736__auto__.push((arguments[i__4731__auto___27327]));

var G__27328 = (i__4731__auto___27327 + (1));
i__4731__auto___27327 = G__27328;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27325){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27325));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27329){
var map__27330 = p__27329;
var map__27330__$1 = (((((!((map__27330 == null))))?(((((map__27330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27330):map__27330);
var message = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27330__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21145__auto___27409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___27409,ch){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto___27409,ch){
return (function (state_27381){
var state_val_27382 = (state_27381[(1)]);
if((state_val_27382 === (7))){
var inst_27377 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27383_27410 = state_27381__$1;
(statearr_27383_27410[(2)] = inst_27377);

(statearr_27383_27410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (1))){
var state_27381__$1 = state_27381;
var statearr_27384_27411 = state_27381__$1;
(statearr_27384_27411[(2)] = null);

(statearr_27384_27411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (4))){
var inst_27334 = (state_27381[(7)]);
var inst_27334__$1 = (state_27381[(2)]);
var state_27381__$1 = (function (){var statearr_27385 = state_27381;
(statearr_27385[(7)] = inst_27334__$1);

return statearr_27385;
})();
if(cljs.core.truth_(inst_27334__$1)){
var statearr_27386_27412 = state_27381__$1;
(statearr_27386_27412[(1)] = (5));

} else {
var statearr_27387_27413 = state_27381__$1;
(statearr_27387_27413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (15))){
var inst_27341 = (state_27381[(8)]);
var inst_27356 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27341);
var inst_27357 = cljs.core.first.call(null,inst_27356);
var inst_27358 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27357);
var inst_27359 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27358)].join('');
var inst_27360 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27359);
var state_27381__$1 = state_27381;
var statearr_27388_27414 = state_27381__$1;
(statearr_27388_27414[(2)] = inst_27360);

(statearr_27388_27414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (13))){
var inst_27365 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27389_27415 = state_27381__$1;
(statearr_27389_27415[(2)] = inst_27365);

(statearr_27389_27415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (6))){
var state_27381__$1 = state_27381;
var statearr_27390_27416 = state_27381__$1;
(statearr_27390_27416[(2)] = null);

(statearr_27390_27416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (17))){
var inst_27363 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27391_27417 = state_27381__$1;
(statearr_27391_27417[(2)] = inst_27363);

(statearr_27391_27417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (3))){
var inst_27379 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27381__$1,inst_27379);
} else {
if((state_val_27382 === (12))){
var inst_27340 = (state_27381[(9)]);
var inst_27354 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27340,opts);
var state_27381__$1 = state_27381;
if(inst_27354){
var statearr_27392_27418 = state_27381__$1;
(statearr_27392_27418[(1)] = (15));

} else {
var statearr_27393_27419 = state_27381__$1;
(statearr_27393_27419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (2))){
var state_27381__$1 = state_27381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27381__$1,(4),ch);
} else {
if((state_val_27382 === (11))){
var inst_27341 = (state_27381[(8)]);
var inst_27346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27347 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27341);
var inst_27348 = cljs.core.async.timeout.call(null,(1000));
var inst_27349 = [inst_27347,inst_27348];
var inst_27350 = (new cljs.core.PersistentVector(null,2,(5),inst_27346,inst_27349,null));
var state_27381__$1 = state_27381;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27381__$1,(14),inst_27350);
} else {
if((state_val_27382 === (9))){
var inst_27341 = (state_27381[(8)]);
var inst_27367 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27368 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27341);
var inst_27369 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27368);
var inst_27370 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27369)].join('');
var inst_27371 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27370);
var state_27381__$1 = (function (){var statearr_27394 = state_27381;
(statearr_27394[(10)] = inst_27367);

return statearr_27394;
})();
var statearr_27395_27420 = state_27381__$1;
(statearr_27395_27420[(2)] = inst_27371);

(statearr_27395_27420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (5))){
var inst_27334 = (state_27381[(7)]);
var inst_27336 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27337 = (new cljs.core.PersistentArrayMap(null,2,inst_27336,null));
var inst_27338 = (new cljs.core.PersistentHashSet(null,inst_27337,null));
var inst_27339 = figwheel.client.focus_msgs.call(null,inst_27338,inst_27334);
var inst_27340 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27339);
var inst_27341 = cljs.core.first.call(null,inst_27339);
var inst_27342 = figwheel.client.autoload_QMARK_.call(null);
var state_27381__$1 = (function (){var statearr_27396 = state_27381;
(statearr_27396[(8)] = inst_27341);

(statearr_27396[(9)] = inst_27340);

return statearr_27396;
})();
if(cljs.core.truth_(inst_27342)){
var statearr_27397_27421 = state_27381__$1;
(statearr_27397_27421[(1)] = (8));

} else {
var statearr_27398_27422 = state_27381__$1;
(statearr_27398_27422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (14))){
var inst_27352 = (state_27381[(2)]);
var state_27381__$1 = state_27381;
var statearr_27399_27423 = state_27381__$1;
(statearr_27399_27423[(2)] = inst_27352);

(statearr_27399_27423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (16))){
var state_27381__$1 = state_27381;
var statearr_27400_27424 = state_27381__$1;
(statearr_27400_27424[(2)] = null);

(statearr_27400_27424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (10))){
var inst_27373 = (state_27381[(2)]);
var state_27381__$1 = (function (){var statearr_27401 = state_27381;
(statearr_27401[(11)] = inst_27373);

return statearr_27401;
})();
var statearr_27402_27425 = state_27381__$1;
(statearr_27402_27425[(2)] = null);

(statearr_27402_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27382 === (8))){
var inst_27340 = (state_27381[(9)]);
var inst_27344 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27340,opts);
var state_27381__$1 = state_27381;
if(cljs.core.truth_(inst_27344)){
var statearr_27403_27426 = state_27381__$1;
(statearr_27403_27426[(1)] = (11));

} else {
var statearr_27404_27427 = state_27381__$1;
(statearr_27404_27427[(1)] = (12));

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
});})(c__21145__auto___27409,ch))
;
return ((function (switch__20275__auto__,c__21145__auto___27409,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20276__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20276__auto____0 = (function (){
var statearr_27405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27405[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20276__auto__);

(statearr_27405[(1)] = (1));

return statearr_27405;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20276__auto____1 = (function (state_27381){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_27381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e27406){if((e27406 instanceof Object)){
var ex__20279__auto__ = e27406;
var statearr_27407_27428 = state_27381;
(statearr_27407_27428[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27429 = state_27381;
state_27381 = G__27429;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20276__auto__ = function(state_27381){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20276__auto____1.call(this,state_27381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20276__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20276__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto___27409,ch))
})();
var state__21147__auto__ = (function (){var statearr_27408 = f__21146__auto__.call(null);
(statearr_27408[(6)] = c__21145__auto___27409);

return statearr_27408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___27409,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27430_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27430_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27436 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27436){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27432 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27433 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27434 = true;
var _STAR_print_fn_STAR__temp_val__27435 = ((function (_STAR_print_newline_STAR__orig_val__27432,_STAR_print_fn_STAR__orig_val__27433,_STAR_print_newline_STAR__temp_val__27434,sb,base_path_27436){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__27432,_STAR_print_fn_STAR__orig_val__27433,_STAR_print_newline_STAR__temp_val__27434,sb,base_path_27436))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27434;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27435;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27433;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27432;
}}catch (e27431){if((e27431 instanceof Error)){
var e = e27431;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27436], null));
} else {
var e = e27431;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27436))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27437){
var map__27438 = p__27437;
var map__27438__$1 = (((((!((map__27438 == null))))?(((((map__27438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27438):map__27438);
var opts = map__27438__$1;
var build_id = cljs.core.get.call(null,map__27438__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27438,map__27438__$1,opts,build_id){
return (function (p__27440){
var vec__27441 = p__27440;
var seq__27442 = cljs.core.seq.call(null,vec__27441);
var first__27443 = cljs.core.first.call(null,seq__27442);
var seq__27442__$1 = cljs.core.next.call(null,seq__27442);
var map__27444 = first__27443;
var map__27444__$1 = (((((!((map__27444 == null))))?(((((map__27444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27444):map__27444);
var msg = map__27444__$1;
var msg_name = cljs.core.get.call(null,map__27444__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27442__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27441,seq__27442,first__27443,seq__27442__$1,map__27444,map__27444__$1,msg,msg_name,_,map__27438,map__27438__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27441,seq__27442,first__27443,seq__27442__$1,map__27444,map__27444__$1,msg,msg_name,_,map__27438,map__27438__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27438,map__27438__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27446){
var vec__27447 = p__27446;
var seq__27448 = cljs.core.seq.call(null,vec__27447);
var first__27449 = cljs.core.first.call(null,seq__27448);
var seq__27448__$1 = cljs.core.next.call(null,seq__27448);
var map__27450 = first__27449;
var map__27450__$1 = (((((!((map__27450 == null))))?(((((map__27450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27450):map__27450);
var msg = map__27450__$1;
var msg_name = cljs.core.get.call(null,map__27450__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27448__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27452){
var map__27453 = p__27452;
var map__27453__$1 = (((((!((map__27453 == null))))?(((((map__27453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27453):map__27453);
var on_compile_warning = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27453,map__27453__$1,on_compile_warning,on_compile_fail){
return (function (p__27455){
var vec__27456 = p__27455;
var seq__27457 = cljs.core.seq.call(null,vec__27456);
var first__27458 = cljs.core.first.call(null,seq__27457);
var seq__27457__$1 = cljs.core.next.call(null,seq__27457);
var map__27459 = first__27458;
var map__27459__$1 = (((((!((map__27459 == null))))?(((((map__27459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27459):map__27459);
var msg = map__27459__$1;
var msg_name = cljs.core.get.call(null,map__27459__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27457__$1;
var pred__27461 = cljs.core._EQ_;
var expr__27462 = msg_name;
if(cljs.core.truth_(pred__27461.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27462))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27461.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27462))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27453,map__27453__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto__,msg_hist,msg_names,msg){
return (function (state_27551){
var state_val_27552 = (state_27551[(1)]);
if((state_val_27552 === (7))){
var inst_27471 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27471)){
var statearr_27553_27600 = state_27551__$1;
(statearr_27553_27600[(1)] = (8));

} else {
var statearr_27554_27601 = state_27551__$1;
(statearr_27554_27601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (20))){
var inst_27545 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27555_27602 = state_27551__$1;
(statearr_27555_27602[(2)] = inst_27545);

(statearr_27555_27602[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (27))){
var inst_27541 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27556_27603 = state_27551__$1;
(statearr_27556_27603[(2)] = inst_27541);

(statearr_27556_27603[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (1))){
var inst_27464 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27551__$1 = state_27551;
if(cljs.core.truth_(inst_27464)){
var statearr_27557_27604 = state_27551__$1;
(statearr_27557_27604[(1)] = (2));

} else {
var statearr_27558_27605 = state_27551__$1;
(statearr_27558_27605[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (24))){
var inst_27543 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27559_27606 = state_27551__$1;
(statearr_27559_27606[(2)] = inst_27543);

(statearr_27559_27606[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (4))){
var inst_27549 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27551__$1,inst_27549);
} else {
if((state_val_27552 === (15))){
var inst_27547 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27560_27607 = state_27551__$1;
(statearr_27560_27607[(2)] = inst_27547);

(statearr_27560_27607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (21))){
var inst_27500 = (state_27551[(2)]);
var inst_27501 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27502 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27501);
var state_27551__$1 = (function (){var statearr_27561 = state_27551;
(statearr_27561[(7)] = inst_27500);

return statearr_27561;
})();
var statearr_27562_27608 = state_27551__$1;
(statearr_27562_27608[(2)] = inst_27502);

(statearr_27562_27608[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (31))){
var inst_27530 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27551__$1 = state_27551;
if(inst_27530){
var statearr_27563_27609 = state_27551__$1;
(statearr_27563_27609[(1)] = (34));

} else {
var statearr_27564_27610 = state_27551__$1;
(statearr_27564_27610[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (32))){
var inst_27539 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27565_27611 = state_27551__$1;
(statearr_27565_27611[(2)] = inst_27539);

(statearr_27565_27611[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (33))){
var inst_27526 = (state_27551[(2)]);
var inst_27527 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27528 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27527);
var state_27551__$1 = (function (){var statearr_27566 = state_27551;
(statearr_27566[(8)] = inst_27526);

return statearr_27566;
})();
var statearr_27567_27612 = state_27551__$1;
(statearr_27567_27612[(2)] = inst_27528);

(statearr_27567_27612[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (13))){
var inst_27485 = figwheel.client.heads_up.clear.call(null);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(16),inst_27485);
} else {
if((state_val_27552 === (22))){
var inst_27506 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27507 = figwheel.client.heads_up.append_warning_message.call(null,inst_27506);
var state_27551__$1 = state_27551;
var statearr_27568_27613 = state_27551__$1;
(statearr_27568_27613[(2)] = inst_27507);

(statearr_27568_27613[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (36))){
var inst_27537 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27569_27614 = state_27551__$1;
(statearr_27569_27614[(2)] = inst_27537);

(statearr_27569_27614[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (29))){
var inst_27517 = (state_27551[(2)]);
var inst_27518 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27519 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27518);
var state_27551__$1 = (function (){var statearr_27570 = state_27551;
(statearr_27570[(9)] = inst_27517);

return statearr_27570;
})();
var statearr_27571_27615 = state_27551__$1;
(statearr_27571_27615[(2)] = inst_27519);

(statearr_27571_27615[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (6))){
var inst_27466 = (state_27551[(10)]);
var state_27551__$1 = state_27551;
var statearr_27572_27616 = state_27551__$1;
(statearr_27572_27616[(2)] = inst_27466);

(statearr_27572_27616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (28))){
var inst_27513 = (state_27551[(2)]);
var inst_27514 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27515 = figwheel.client.heads_up.display_warning.call(null,inst_27514);
var state_27551__$1 = (function (){var statearr_27573 = state_27551;
(statearr_27573[(11)] = inst_27513);

return statearr_27573;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(29),inst_27515);
} else {
if((state_val_27552 === (25))){
var inst_27511 = figwheel.client.heads_up.clear.call(null);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(28),inst_27511);
} else {
if((state_val_27552 === (34))){
var inst_27532 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(37),inst_27532);
} else {
if((state_val_27552 === (17))){
var inst_27491 = (state_27551[(2)]);
var inst_27492 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27493 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27492);
var state_27551__$1 = (function (){var statearr_27574 = state_27551;
(statearr_27574[(12)] = inst_27491);

return statearr_27574;
})();
var statearr_27575_27617 = state_27551__$1;
(statearr_27575_27617[(2)] = inst_27493);

(statearr_27575_27617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (3))){
var inst_27483 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27551__$1 = state_27551;
if(inst_27483){
var statearr_27576_27618 = state_27551__$1;
(statearr_27576_27618[(1)] = (13));

} else {
var statearr_27577_27619 = state_27551__$1;
(statearr_27577_27619[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (12))){
var inst_27479 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27578_27620 = state_27551__$1;
(statearr_27578_27620[(2)] = inst_27479);

(statearr_27578_27620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (2))){
var inst_27466 = (state_27551[(10)]);
var inst_27466__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27551__$1 = (function (){var statearr_27579 = state_27551;
(statearr_27579[(10)] = inst_27466__$1);

return statearr_27579;
})();
if(cljs.core.truth_(inst_27466__$1)){
var statearr_27580_27621 = state_27551__$1;
(statearr_27580_27621[(1)] = (5));

} else {
var statearr_27581_27622 = state_27551__$1;
(statearr_27581_27622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (23))){
var inst_27509 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27551__$1 = state_27551;
if(inst_27509){
var statearr_27582_27623 = state_27551__$1;
(statearr_27582_27623[(1)] = (25));

} else {
var statearr_27583_27624 = state_27551__$1;
(statearr_27583_27624[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (35))){
var state_27551__$1 = state_27551;
var statearr_27584_27625 = state_27551__$1;
(statearr_27584_27625[(2)] = null);

(statearr_27584_27625[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (19))){
var inst_27504 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27551__$1 = state_27551;
if(inst_27504){
var statearr_27585_27626 = state_27551__$1;
(statearr_27585_27626[(1)] = (22));

} else {
var statearr_27586_27627 = state_27551__$1;
(statearr_27586_27627[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (11))){
var inst_27475 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27587_27628 = state_27551__$1;
(statearr_27587_27628[(2)] = inst_27475);

(statearr_27587_27628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (9))){
var inst_27477 = figwheel.client.heads_up.clear.call(null);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(12),inst_27477);
} else {
if((state_val_27552 === (5))){
var inst_27468 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27551__$1 = state_27551;
var statearr_27588_27629 = state_27551__$1;
(statearr_27588_27629[(2)] = inst_27468);

(statearr_27588_27629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (14))){
var inst_27495 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27551__$1 = state_27551;
if(inst_27495){
var statearr_27589_27630 = state_27551__$1;
(statearr_27589_27630[(1)] = (18));

} else {
var statearr_27590_27631 = state_27551__$1;
(statearr_27590_27631[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (26))){
var inst_27521 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27551__$1 = state_27551;
if(inst_27521){
var statearr_27591_27632 = state_27551__$1;
(statearr_27591_27632[(1)] = (30));

} else {
var statearr_27592_27633 = state_27551__$1;
(statearr_27592_27633[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (16))){
var inst_27487 = (state_27551[(2)]);
var inst_27488 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27489 = figwheel.client.heads_up.display_exception.call(null,inst_27488);
var state_27551__$1 = (function (){var statearr_27593 = state_27551;
(statearr_27593[(13)] = inst_27487);

return statearr_27593;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(17),inst_27489);
} else {
if((state_val_27552 === (30))){
var inst_27523 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27524 = figwheel.client.heads_up.display_warning.call(null,inst_27523);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(33),inst_27524);
} else {
if((state_val_27552 === (10))){
var inst_27481 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27594_27634 = state_27551__$1;
(statearr_27594_27634[(2)] = inst_27481);

(statearr_27594_27634[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (18))){
var inst_27497 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27498 = figwheel.client.heads_up.display_exception.call(null,inst_27497);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(21),inst_27498);
} else {
if((state_val_27552 === (37))){
var inst_27534 = (state_27551[(2)]);
var state_27551__$1 = state_27551;
var statearr_27595_27635 = state_27551__$1;
(statearr_27595_27635[(2)] = inst_27534);

(statearr_27595_27635[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27552 === (8))){
var inst_27473 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27551__$1 = state_27551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27551__$1,(11),inst_27473);
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
});})(c__21145__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20275__auto__,c__21145__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto____0 = (function (){
var statearr_27596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27596[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto__);

(statearr_27596[(1)] = (1));

return statearr_27596;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto____1 = (function (state_27551){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_27551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e27597){if((e27597 instanceof Object)){
var ex__20279__auto__ = e27597;
var statearr_27598_27636 = state_27551;
(statearr_27598_27636[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27637 = state_27551;
state_27551 = G__27637;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto__ = function(state_27551){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto____1.call(this,state_27551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__,msg_hist,msg_names,msg))
})();
var state__21147__auto__ = (function (){var statearr_27599 = f__21146__auto__.call(null);
(statearr_27599[(6)] = c__21145__auto__);

return statearr_27599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__,msg_hist,msg_names,msg))
);

return c__21145__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21145__auto___27666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___27666,ch){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto___27666,ch){
return (function (state_27652){
var state_val_27653 = (state_27652[(1)]);
if((state_val_27653 === (1))){
var state_27652__$1 = state_27652;
var statearr_27654_27667 = state_27652__$1;
(statearr_27654_27667[(2)] = null);

(statearr_27654_27667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (2))){
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27652__$1,(4),ch);
} else {
if((state_val_27653 === (3))){
var inst_27650 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27652__$1,inst_27650);
} else {
if((state_val_27653 === (4))){
var inst_27640 = (state_27652[(7)]);
var inst_27640__$1 = (state_27652[(2)]);
var state_27652__$1 = (function (){var statearr_27655 = state_27652;
(statearr_27655[(7)] = inst_27640__$1);

return statearr_27655;
})();
if(cljs.core.truth_(inst_27640__$1)){
var statearr_27656_27668 = state_27652__$1;
(statearr_27656_27668[(1)] = (5));

} else {
var statearr_27657_27669 = state_27652__$1;
(statearr_27657_27669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (5))){
var inst_27640 = (state_27652[(7)]);
var inst_27642 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27640);
var state_27652__$1 = state_27652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27652__$1,(8),inst_27642);
} else {
if((state_val_27653 === (6))){
var state_27652__$1 = state_27652;
var statearr_27658_27670 = state_27652__$1;
(statearr_27658_27670[(2)] = null);

(statearr_27658_27670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (7))){
var inst_27648 = (state_27652[(2)]);
var state_27652__$1 = state_27652;
var statearr_27659_27671 = state_27652__$1;
(statearr_27659_27671[(2)] = inst_27648);

(statearr_27659_27671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27653 === (8))){
var inst_27644 = (state_27652[(2)]);
var state_27652__$1 = (function (){var statearr_27660 = state_27652;
(statearr_27660[(8)] = inst_27644);

return statearr_27660;
})();
var statearr_27661_27672 = state_27652__$1;
(statearr_27661_27672[(2)] = null);

(statearr_27661_27672[(1)] = (2));


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
});})(c__21145__auto___27666,ch))
;
return ((function (switch__20275__auto__,c__21145__auto___27666,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20276__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20276__auto____0 = (function (){
var statearr_27662 = [null,null,null,null,null,null,null,null,null];
(statearr_27662[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20276__auto__);

(statearr_27662[(1)] = (1));

return statearr_27662;
});
var figwheel$client$heads_up_plugin_$_state_machine__20276__auto____1 = (function (state_27652){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_27652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e27663){if((e27663 instanceof Object)){
var ex__20279__auto__ = e27663;
var statearr_27664_27673 = state_27652;
(statearr_27664_27673[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27674 = state_27652;
state_27652 = G__27674;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20276__auto__ = function(state_27652){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20276__auto____1.call(this,state_27652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20276__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20276__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto___27666,ch))
})();
var state__21147__auto__ = (function (){var statearr_27665 = f__21146__auto__.call(null);
(statearr_27665[(6)] = c__21145__auto___27666);

return statearr_27665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___27666,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto__){
return (function (state_27680){
var state_val_27681 = (state_27680[(1)]);
if((state_val_27681 === (1))){
var inst_27675 = cljs.core.async.timeout.call(null,(3000));
var state_27680__$1 = state_27680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27680__$1,(2),inst_27675);
} else {
if((state_val_27681 === (2))){
var inst_27677 = (state_27680[(2)]);
var inst_27678 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27680__$1 = (function (){var statearr_27682 = state_27680;
(statearr_27682[(7)] = inst_27677);

return statearr_27682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27680__$1,inst_27678);
} else {
return null;
}
}
});})(c__21145__auto__))
;
return ((function (switch__20275__auto__,c__21145__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20276__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20276__auto____0 = (function (){
var statearr_27683 = [null,null,null,null,null,null,null,null];
(statearr_27683[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20276__auto__);

(statearr_27683[(1)] = (1));

return statearr_27683;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20276__auto____1 = (function (state_27680){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_27680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e27684){if((e27684 instanceof Object)){
var ex__20279__auto__ = e27684;
var statearr_27685_27687 = state_27680;
(statearr_27685_27687[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27688 = state_27680;
state_27680 = G__27688;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20276__auto__ = function(state_27680){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20276__auto____1.call(this,state_27680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20276__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20276__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_27686 = f__21146__auto__.call(null);
(statearr_27686[(6)] = c__21145__auto__);

return statearr_27686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto__,figwheel_version,temp__4657__auto__){
return (function (state_27695){
var state_val_27696 = (state_27695[(1)]);
if((state_val_27696 === (1))){
var inst_27689 = cljs.core.async.timeout.call(null,(2000));
var state_27695__$1 = state_27695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27695__$1,(2),inst_27689);
} else {
if((state_val_27696 === (2))){
var inst_27691 = (state_27695[(2)]);
var inst_27692 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27693 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27692);
var state_27695__$1 = (function (){var statearr_27697 = state_27695;
(statearr_27697[(7)] = inst_27691);

return statearr_27697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27695__$1,inst_27693);
} else {
return null;
}
}
});})(c__21145__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__20275__auto__,c__21145__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto____0 = (function (){
var statearr_27698 = [null,null,null,null,null,null,null,null];
(statearr_27698[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto__);

(statearr_27698[(1)] = (1));

return statearr_27698;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto____1 = (function (state_27695){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_27695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e27699){if((e27699 instanceof Object)){
var ex__20279__auto__ = e27699;
var statearr_27700_27702 = state_27695;
(statearr_27700_27702[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27703 = state_27695;
state_27695 = G__27703;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto__ = function(state_27695){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto____1.call(this,state_27695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__,figwheel_version,temp__4657__auto__))
})();
var state__21147__auto__ = (function (){var statearr_27701 = f__21146__auto__.call(null);
(statearr_27701[(6)] = c__21145__auto__);

return statearr_27701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__,figwheel_version,temp__4657__auto__))
);

return c__21145__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27704){
var map__27705 = p__27704;
var map__27705__$1 = (((((!((map__27705 == null))))?(((((map__27705.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27705.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27705):map__27705);
var file = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27705__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27707 = "";
var G__27707__$1 = (cljs.core.truth_(file)?[G__27707,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27707);
var G__27707__$2 = (cljs.core.truth_(line)?[G__27707__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27707__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__27707__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27707__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27708){
var map__27709 = p__27708;
var map__27709__$1 = (((((!((map__27709 == null))))?(((((map__27709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27709):map__27709);
var ed = map__27709__$1;
var exception_data = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27709__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_27712 = (function (){var G__27711 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27711)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__27711;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_27712);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27713){
var map__27714 = p__27713;
var map__27714__$1 = (((((!((map__27714 == null))))?(((((map__27714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27714):map__27714);
var w = map__27714__$1;
var message = cljs.core.get.call(null,map__27714__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27716 = cljs.core.seq.call(null,plugins);
var chunk__27717 = null;
var count__27718 = (0);
var i__27719 = (0);
while(true){
if((i__27719 < count__27718)){
var vec__27726 = cljs.core._nth.call(null,chunk__27717,i__27719);
var k = cljs.core.nth.call(null,vec__27726,(0),null);
var plugin = cljs.core.nth.call(null,vec__27726,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27732 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27716,chunk__27717,count__27718,i__27719,pl_27732,vec__27726,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27732.call(null,msg_hist);
});})(seq__27716,chunk__27717,count__27718,i__27719,pl_27732,vec__27726,k,plugin))
);
} else {
}


var G__27733 = seq__27716;
var G__27734 = chunk__27717;
var G__27735 = count__27718;
var G__27736 = (i__27719 + (1));
seq__27716 = G__27733;
chunk__27717 = G__27734;
count__27718 = G__27735;
i__27719 = G__27736;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27716);
if(temp__4657__auto__){
var seq__27716__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27716__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27716__$1);
var G__27737 = cljs.core.chunk_rest.call(null,seq__27716__$1);
var G__27738 = c__4550__auto__;
var G__27739 = cljs.core.count.call(null,c__4550__auto__);
var G__27740 = (0);
seq__27716 = G__27737;
chunk__27717 = G__27738;
count__27718 = G__27739;
i__27719 = G__27740;
continue;
} else {
var vec__27729 = cljs.core.first.call(null,seq__27716__$1);
var k = cljs.core.nth.call(null,vec__27729,(0),null);
var plugin = cljs.core.nth.call(null,vec__27729,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27741 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27716,chunk__27717,count__27718,i__27719,pl_27741,vec__27729,k,plugin,seq__27716__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27741.call(null,msg_hist);
});})(seq__27716,chunk__27717,count__27718,i__27719,pl_27741,vec__27729,k,plugin,seq__27716__$1,temp__4657__auto__))
);
} else {
}


var G__27742 = cljs.core.next.call(null,seq__27716__$1);
var G__27743 = null;
var G__27744 = (0);
var G__27745 = (0);
seq__27716 = G__27742;
chunk__27717 = G__27743;
count__27718 = G__27744;
i__27719 = G__27745;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__27747 = arguments.length;
switch (G__27747) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__27748_27753 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27749_27754 = null;
var count__27750_27755 = (0);
var i__27751_27756 = (0);
while(true){
if((i__27751_27756 < count__27750_27755)){
var msg_27757 = cljs.core._nth.call(null,chunk__27749_27754,i__27751_27756);
figwheel.client.socket.handle_incoming_message.call(null,msg_27757);


var G__27758 = seq__27748_27753;
var G__27759 = chunk__27749_27754;
var G__27760 = count__27750_27755;
var G__27761 = (i__27751_27756 + (1));
seq__27748_27753 = G__27758;
chunk__27749_27754 = G__27759;
count__27750_27755 = G__27760;
i__27751_27756 = G__27761;
continue;
} else {
var temp__4657__auto___27762 = cljs.core.seq.call(null,seq__27748_27753);
if(temp__4657__auto___27762){
var seq__27748_27763__$1 = temp__4657__auto___27762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27748_27763__$1)){
var c__4550__auto___27764 = cljs.core.chunk_first.call(null,seq__27748_27763__$1);
var G__27765 = cljs.core.chunk_rest.call(null,seq__27748_27763__$1);
var G__27766 = c__4550__auto___27764;
var G__27767 = cljs.core.count.call(null,c__4550__auto___27764);
var G__27768 = (0);
seq__27748_27753 = G__27765;
chunk__27749_27754 = G__27766;
count__27750_27755 = G__27767;
i__27751_27756 = G__27768;
continue;
} else {
var msg_27769 = cljs.core.first.call(null,seq__27748_27763__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27769);


var G__27770 = cljs.core.next.call(null,seq__27748_27763__$1);
var G__27771 = null;
var G__27772 = (0);
var G__27773 = (0);
seq__27748_27753 = G__27770;
chunk__27749_27754 = G__27771;
count__27750_27755 = G__27772;
i__27751_27756 = G__27773;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27778 = arguments.length;
var i__4731__auto___27779 = (0);
while(true){
if((i__4731__auto___27779 < len__4730__auto___27778)){
args__4736__auto__.push((arguments[i__4731__auto___27779]));

var G__27780 = (i__4731__auto___27779 + (1));
i__4731__auto___27779 = G__27780;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27775){
var map__27776 = p__27775;
var map__27776__$1 = (((((!((map__27776 == null))))?(((((map__27776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27776):map__27776);
var opts = map__27776__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27774){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27774));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27781){if((e27781 instanceof Error)){
var e = e27781;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27781;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__27782){
var map__27783 = p__27782;
var map__27783__$1 = (((((!((map__27783 == null))))?(((((map__27783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27783):map__27783);
var msg_name = cljs.core.get.call(null,map__27783__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1569260573666
