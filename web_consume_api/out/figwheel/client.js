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
}catch (e27319){if((e27319 instanceof Error)){
var e = e27319;
return "Error: Unable to stringify";
} else {
throw e27319;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__27322 = arguments.length;
switch (G__27322) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27320_SHARP_){
if(typeof p1__27320_SHARP_ === 'string'){
return p1__27320_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__27320_SHARP_);
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
var len__4730__auto___27325 = arguments.length;
var i__4731__auto___27326 = (0);
while(true){
if((i__4731__auto___27326 < len__4730__auto___27325)){
args__4736__auto__.push((arguments[i__4731__auto___27326]));

var G__27327 = (i__4731__auto___27326 + (1));
i__4731__auto___27326 = G__27327;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq27324){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27324));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27329 = arguments.length;
var i__4731__auto___27330 = (0);
while(true){
if((i__4731__auto___27330 < len__4730__auto___27329)){
args__4736__auto__.push((arguments[i__4731__auto___27330]));

var G__27331 = (i__4731__auto___27330 + (1));
i__4731__auto___27330 = G__27331;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq27328){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27328));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27332){
var map__27333 = p__27332;
var map__27333__$1 = (((((!((map__27333 == null))))?(((((map__27333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27333):map__27333);
var message = cljs.core.get.call(null,map__27333__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27333__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__21145__auto___27412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___27412,ch){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___27412,ch){
return (function (state_27384){
var state_val_27385 = (state_27384[(1)]);
if((state_val_27385 === (7))){
var inst_27380 = (state_27384[(2)]);
var state_27384__$1 = state_27384;
var statearr_27386_27413 = state_27384__$1;
(statearr_27386_27413[(2)] = inst_27380);

(statearr_27386_27413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (1))){
var state_27384__$1 = state_27384;
var statearr_27387_27414 = state_27384__$1;
(statearr_27387_27414[(2)] = null);

(statearr_27387_27414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (4))){
var inst_27337 = (state_27384[(7)]);
var inst_27337__$1 = (state_27384[(2)]);
var state_27384__$1 = (function (){var statearr_27388 = state_27384;
(statearr_27388[(7)] = inst_27337__$1);

return statearr_27388;
})();
if(cljs.core.truth_(inst_27337__$1)){
var statearr_27389_27415 = state_27384__$1;
(statearr_27389_27415[(1)] = (5));

} else {
var statearr_27390_27416 = state_27384__$1;
(statearr_27390_27416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (15))){
var inst_27344 = (state_27384[(8)]);
var inst_27359 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27344);
var inst_27360 = cljs.core.first.call(null,inst_27359);
var inst_27361 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27360);
var inst_27362 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27361)].join('');
var inst_27363 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27362);
var state_27384__$1 = state_27384;
var statearr_27391_27417 = state_27384__$1;
(statearr_27391_27417[(2)] = inst_27363);

(statearr_27391_27417[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (13))){
var inst_27368 = (state_27384[(2)]);
var state_27384__$1 = state_27384;
var statearr_27392_27418 = state_27384__$1;
(statearr_27392_27418[(2)] = inst_27368);

(statearr_27392_27418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (6))){
var state_27384__$1 = state_27384;
var statearr_27393_27419 = state_27384__$1;
(statearr_27393_27419[(2)] = null);

(statearr_27393_27419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (17))){
var inst_27366 = (state_27384[(2)]);
var state_27384__$1 = state_27384;
var statearr_27394_27420 = state_27384__$1;
(statearr_27394_27420[(2)] = inst_27366);

(statearr_27394_27420[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (3))){
var inst_27382 = (state_27384[(2)]);
var state_27384__$1 = state_27384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27384__$1,inst_27382);
} else {
if((state_val_27385 === (12))){
var inst_27343 = (state_27384[(9)]);
var inst_27357 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27343,opts);
var state_27384__$1 = state_27384;
if(inst_27357){
var statearr_27395_27421 = state_27384__$1;
(statearr_27395_27421[(1)] = (15));

} else {
var statearr_27396_27422 = state_27384__$1;
(statearr_27396_27422[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (2))){
var state_27384__$1 = state_27384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27384__$1,(4),ch);
} else {
if((state_val_27385 === (11))){
var inst_27344 = (state_27384[(8)]);
var inst_27349 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27350 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27344);
var inst_27351 = cljs.core.async.timeout.call(null,(1000));
var inst_27352 = [inst_27350,inst_27351];
var inst_27353 = (new cljs.core.PersistentVector(null,2,(5),inst_27349,inst_27352,null));
var state_27384__$1 = state_27384;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27384__$1,(14),inst_27353);
} else {
if((state_val_27385 === (9))){
var inst_27344 = (state_27384[(8)]);
var inst_27370 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27371 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27344);
var inst_27372 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27371);
var inst_27373 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_27372)].join('');
var inst_27374 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27373);
var state_27384__$1 = (function (){var statearr_27397 = state_27384;
(statearr_27397[(10)] = inst_27370);

return statearr_27397;
})();
var statearr_27398_27423 = state_27384__$1;
(statearr_27398_27423[(2)] = inst_27374);

(statearr_27398_27423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (5))){
var inst_27337 = (state_27384[(7)]);
var inst_27339 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27340 = (new cljs.core.PersistentArrayMap(null,2,inst_27339,null));
var inst_27341 = (new cljs.core.PersistentHashSet(null,inst_27340,null));
var inst_27342 = figwheel.client.focus_msgs.call(null,inst_27341,inst_27337);
var inst_27343 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27342);
var inst_27344 = cljs.core.first.call(null,inst_27342);
var inst_27345 = figwheel.client.autoload_QMARK_.call(null);
var state_27384__$1 = (function (){var statearr_27399 = state_27384;
(statearr_27399[(8)] = inst_27344);

(statearr_27399[(9)] = inst_27343);

return statearr_27399;
})();
if(cljs.core.truth_(inst_27345)){
var statearr_27400_27424 = state_27384__$1;
(statearr_27400_27424[(1)] = (8));

} else {
var statearr_27401_27425 = state_27384__$1;
(statearr_27401_27425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (14))){
var inst_27355 = (state_27384[(2)]);
var state_27384__$1 = state_27384;
var statearr_27402_27426 = state_27384__$1;
(statearr_27402_27426[(2)] = inst_27355);

(statearr_27402_27426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (16))){
var state_27384__$1 = state_27384;
var statearr_27403_27427 = state_27384__$1;
(statearr_27403_27427[(2)] = null);

(statearr_27403_27427[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (10))){
var inst_27376 = (state_27384[(2)]);
var state_27384__$1 = (function (){var statearr_27404 = state_27384;
(statearr_27404[(11)] = inst_27376);

return statearr_27404;
})();
var statearr_27405_27428 = state_27384__$1;
(statearr_27405_27428[(2)] = null);

(statearr_27405_27428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27385 === (8))){
var inst_27343 = (state_27384[(9)]);
var inst_27347 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27343,opts);
var state_27384__$1 = state_27384;
if(cljs.core.truth_(inst_27347)){
var statearr_27406_27429 = state_27384__$1;
(statearr_27406_27429[(1)] = (11));

} else {
var statearr_27407_27430 = state_27384__$1;
(statearr_27407_27430[(1)] = (12));

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
});})(c__21145__auto___27412,ch))
;
return ((function (switch__21052__auto__,c__21145__auto___27412,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21053__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21053__auto____0 = (function (){
var statearr_27408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27408[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21053__auto__);

(statearr_27408[(1)] = (1));

return statearr_27408;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21053__auto____1 = (function (state_27384){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_27384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e27409){if((e27409 instanceof Object)){
var ex__21056__auto__ = e27409;
var statearr_27410_27431 = state_27384;
(statearr_27410_27431[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27432 = state_27384;
state_27384 = G__27432;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21053__auto__ = function(state_27384){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21053__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21053__auto____1.call(this,state_27384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21053__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21053__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___27412,ch))
})();
var state__21147__auto__ = (function (){var statearr_27411 = f__21146__auto__.call(null);
(statearr_27411[(6)] = c__21145__auto___27412);

return statearr_27411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___27412,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27433_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27433_SHARP_));
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
var base_path_27439 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27439){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27435 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27436 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27437 = true;
var _STAR_print_fn_STAR__temp_val__27438 = ((function (_STAR_print_newline_STAR__orig_val__27435,_STAR_print_fn_STAR__orig_val__27436,_STAR_print_newline_STAR__temp_val__27437,sb,base_path_27439){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__27435,_STAR_print_fn_STAR__orig_val__27436,_STAR_print_newline_STAR__temp_val__27437,sb,base_path_27439))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27437;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27438;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27436;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27435;
}}catch (e27434){if((e27434 instanceof Error)){
var e = e27434;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27439], null));
} else {
var e = e27434;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27439))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27440){
var map__27441 = p__27440;
var map__27441__$1 = (((((!((map__27441 == null))))?(((((map__27441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27441):map__27441);
var opts = map__27441__$1;
var build_id = cljs.core.get.call(null,map__27441__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27441,map__27441__$1,opts,build_id){
return (function (p__27443){
var vec__27444 = p__27443;
var seq__27445 = cljs.core.seq.call(null,vec__27444);
var first__27446 = cljs.core.first.call(null,seq__27445);
var seq__27445__$1 = cljs.core.next.call(null,seq__27445);
var map__27447 = first__27446;
var map__27447__$1 = (((((!((map__27447 == null))))?(((((map__27447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27447):map__27447);
var msg = map__27447__$1;
var msg_name = cljs.core.get.call(null,map__27447__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27445__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27444,seq__27445,first__27446,seq__27445__$1,map__27447,map__27447__$1,msg,msg_name,_,map__27441,map__27441__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27444,seq__27445,first__27446,seq__27445__$1,map__27447,map__27447__$1,msg,msg_name,_,map__27441,map__27441__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27441,map__27441__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27449){
var vec__27450 = p__27449;
var seq__27451 = cljs.core.seq.call(null,vec__27450);
var first__27452 = cljs.core.first.call(null,seq__27451);
var seq__27451__$1 = cljs.core.next.call(null,seq__27451);
var map__27453 = first__27452;
var map__27453__$1 = (((((!((map__27453 == null))))?(((((map__27453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27453):map__27453);
var msg = map__27453__$1;
var msg_name = cljs.core.get.call(null,map__27453__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27451__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27455){
var map__27456 = p__27455;
var map__27456__$1 = (((((!((map__27456 == null))))?(((((map__27456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27456):map__27456);
var on_compile_warning = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27456__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27456,map__27456__$1,on_compile_warning,on_compile_fail){
return (function (p__27458){
var vec__27459 = p__27458;
var seq__27460 = cljs.core.seq.call(null,vec__27459);
var first__27461 = cljs.core.first.call(null,seq__27460);
var seq__27460__$1 = cljs.core.next.call(null,seq__27460);
var map__27462 = first__27461;
var map__27462__$1 = (((((!((map__27462 == null))))?(((((map__27462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27462):map__27462);
var msg = map__27462__$1;
var msg_name = cljs.core.get.call(null,map__27462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__27460__$1;
var pred__27464 = cljs.core._EQ_;
var expr__27465 = msg_name;
if(cljs.core.truth_(pred__27464.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27465))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27464.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27465))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27456,map__27456__$1,on_compile_warning,on_compile_fail))
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
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__,msg_hist,msg_names,msg){
return (function (state_27554){
var state_val_27555 = (state_27554[(1)]);
if((state_val_27555 === (7))){
var inst_27474 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
if(cljs.core.truth_(inst_27474)){
var statearr_27556_27603 = state_27554__$1;
(statearr_27556_27603[(1)] = (8));

} else {
var statearr_27557_27604 = state_27554__$1;
(statearr_27557_27604[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (20))){
var inst_27548 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27558_27605 = state_27554__$1;
(statearr_27558_27605[(2)] = inst_27548);

(statearr_27558_27605[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (27))){
var inst_27544 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27559_27606 = state_27554__$1;
(statearr_27559_27606[(2)] = inst_27544);

(statearr_27559_27606[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (1))){
var inst_27467 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27554__$1 = state_27554;
if(cljs.core.truth_(inst_27467)){
var statearr_27560_27607 = state_27554__$1;
(statearr_27560_27607[(1)] = (2));

} else {
var statearr_27561_27608 = state_27554__$1;
(statearr_27561_27608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (24))){
var inst_27546 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27562_27609 = state_27554__$1;
(statearr_27562_27609[(2)] = inst_27546);

(statearr_27562_27609[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (4))){
var inst_27552 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27554__$1,inst_27552);
} else {
if((state_val_27555 === (15))){
var inst_27550 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27563_27610 = state_27554__$1;
(statearr_27563_27610[(2)] = inst_27550);

(statearr_27563_27610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (21))){
var inst_27503 = (state_27554[(2)]);
var inst_27504 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27505 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27504);
var state_27554__$1 = (function (){var statearr_27564 = state_27554;
(statearr_27564[(7)] = inst_27503);

return statearr_27564;
})();
var statearr_27565_27611 = state_27554__$1;
(statearr_27565_27611[(2)] = inst_27505);

(statearr_27565_27611[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (31))){
var inst_27533 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27554__$1 = state_27554;
if(inst_27533){
var statearr_27566_27612 = state_27554__$1;
(statearr_27566_27612[(1)] = (34));

} else {
var statearr_27567_27613 = state_27554__$1;
(statearr_27567_27613[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (32))){
var inst_27542 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27568_27614 = state_27554__$1;
(statearr_27568_27614[(2)] = inst_27542);

(statearr_27568_27614[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (33))){
var inst_27529 = (state_27554[(2)]);
var inst_27530 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27531 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27530);
var state_27554__$1 = (function (){var statearr_27569 = state_27554;
(statearr_27569[(8)] = inst_27529);

return statearr_27569;
})();
var statearr_27570_27615 = state_27554__$1;
(statearr_27570_27615[(2)] = inst_27531);

(statearr_27570_27615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (13))){
var inst_27488 = figwheel.client.heads_up.clear.call(null);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(16),inst_27488);
} else {
if((state_val_27555 === (22))){
var inst_27509 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27510 = figwheel.client.heads_up.append_warning_message.call(null,inst_27509);
var state_27554__$1 = state_27554;
var statearr_27571_27616 = state_27554__$1;
(statearr_27571_27616[(2)] = inst_27510);

(statearr_27571_27616[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (36))){
var inst_27540 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27572_27617 = state_27554__$1;
(statearr_27572_27617[(2)] = inst_27540);

(statearr_27572_27617[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (29))){
var inst_27520 = (state_27554[(2)]);
var inst_27521 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27522 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27521);
var state_27554__$1 = (function (){var statearr_27573 = state_27554;
(statearr_27573[(9)] = inst_27520);

return statearr_27573;
})();
var statearr_27574_27618 = state_27554__$1;
(statearr_27574_27618[(2)] = inst_27522);

(statearr_27574_27618[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (6))){
var inst_27469 = (state_27554[(10)]);
var state_27554__$1 = state_27554;
var statearr_27575_27619 = state_27554__$1;
(statearr_27575_27619[(2)] = inst_27469);

(statearr_27575_27619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (28))){
var inst_27516 = (state_27554[(2)]);
var inst_27517 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27518 = figwheel.client.heads_up.display_warning.call(null,inst_27517);
var state_27554__$1 = (function (){var statearr_27576 = state_27554;
(statearr_27576[(11)] = inst_27516);

return statearr_27576;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(29),inst_27518);
} else {
if((state_val_27555 === (25))){
var inst_27514 = figwheel.client.heads_up.clear.call(null);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(28),inst_27514);
} else {
if((state_val_27555 === (34))){
var inst_27535 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(37),inst_27535);
} else {
if((state_val_27555 === (17))){
var inst_27494 = (state_27554[(2)]);
var inst_27495 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27496 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27495);
var state_27554__$1 = (function (){var statearr_27577 = state_27554;
(statearr_27577[(12)] = inst_27494);

return statearr_27577;
})();
var statearr_27578_27620 = state_27554__$1;
(statearr_27578_27620[(2)] = inst_27496);

(statearr_27578_27620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (3))){
var inst_27486 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27554__$1 = state_27554;
if(inst_27486){
var statearr_27579_27621 = state_27554__$1;
(statearr_27579_27621[(1)] = (13));

} else {
var statearr_27580_27622 = state_27554__$1;
(statearr_27580_27622[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (12))){
var inst_27482 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27581_27623 = state_27554__$1;
(statearr_27581_27623[(2)] = inst_27482);

(statearr_27581_27623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (2))){
var inst_27469 = (state_27554[(10)]);
var inst_27469__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27554__$1 = (function (){var statearr_27582 = state_27554;
(statearr_27582[(10)] = inst_27469__$1);

return statearr_27582;
})();
if(cljs.core.truth_(inst_27469__$1)){
var statearr_27583_27624 = state_27554__$1;
(statearr_27583_27624[(1)] = (5));

} else {
var statearr_27584_27625 = state_27554__$1;
(statearr_27584_27625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (23))){
var inst_27512 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27554__$1 = state_27554;
if(inst_27512){
var statearr_27585_27626 = state_27554__$1;
(statearr_27585_27626[(1)] = (25));

} else {
var statearr_27586_27627 = state_27554__$1;
(statearr_27586_27627[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (35))){
var state_27554__$1 = state_27554;
var statearr_27587_27628 = state_27554__$1;
(statearr_27587_27628[(2)] = null);

(statearr_27587_27628[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (19))){
var inst_27507 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27554__$1 = state_27554;
if(inst_27507){
var statearr_27588_27629 = state_27554__$1;
(statearr_27588_27629[(1)] = (22));

} else {
var statearr_27589_27630 = state_27554__$1;
(statearr_27589_27630[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (11))){
var inst_27478 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27590_27631 = state_27554__$1;
(statearr_27590_27631[(2)] = inst_27478);

(statearr_27590_27631[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (9))){
var inst_27480 = figwheel.client.heads_up.clear.call(null);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(12),inst_27480);
} else {
if((state_val_27555 === (5))){
var inst_27471 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27554__$1 = state_27554;
var statearr_27591_27632 = state_27554__$1;
(statearr_27591_27632[(2)] = inst_27471);

(statearr_27591_27632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (14))){
var inst_27498 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27554__$1 = state_27554;
if(inst_27498){
var statearr_27592_27633 = state_27554__$1;
(statearr_27592_27633[(1)] = (18));

} else {
var statearr_27593_27634 = state_27554__$1;
(statearr_27593_27634[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (26))){
var inst_27524 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27554__$1 = state_27554;
if(inst_27524){
var statearr_27594_27635 = state_27554__$1;
(statearr_27594_27635[(1)] = (30));

} else {
var statearr_27595_27636 = state_27554__$1;
(statearr_27595_27636[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (16))){
var inst_27490 = (state_27554[(2)]);
var inst_27491 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27492 = figwheel.client.heads_up.display_exception.call(null,inst_27491);
var state_27554__$1 = (function (){var statearr_27596 = state_27554;
(statearr_27596[(13)] = inst_27490);

return statearr_27596;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(17),inst_27492);
} else {
if((state_val_27555 === (30))){
var inst_27526 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27527 = figwheel.client.heads_up.display_warning.call(null,inst_27526);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(33),inst_27527);
} else {
if((state_val_27555 === (10))){
var inst_27484 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27597_27637 = state_27554__$1;
(statearr_27597_27637[(2)] = inst_27484);

(statearr_27597_27637[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (18))){
var inst_27500 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27501 = figwheel.client.heads_up.display_exception.call(null,inst_27500);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(21),inst_27501);
} else {
if((state_val_27555 === (37))){
var inst_27537 = (state_27554[(2)]);
var state_27554__$1 = state_27554;
var statearr_27598_27638 = state_27554__$1;
(statearr_27598_27638[(2)] = inst_27537);

(statearr_27598_27638[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27555 === (8))){
var inst_27476 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27554__$1 = state_27554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27554__$1,(11),inst_27476);
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
return ((function (switch__21052__auto__,c__21145__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto____0 = (function (){
var statearr_27599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27599[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto__);

(statearr_27599[(1)] = (1));

return statearr_27599;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto____1 = (function (state_27554){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_27554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e27600){if((e27600 instanceof Object)){
var ex__21056__auto__ = e27600;
var statearr_27601_27639 = state_27554;
(statearr_27601_27639[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27640 = state_27554;
state_27554 = G__27640;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto__ = function(state_27554){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto____1.call(this,state_27554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__,msg_hist,msg_names,msg))
})();
var state__21147__auto__ = (function (){var statearr_27602 = f__21146__auto__.call(null);
(statearr_27602[(6)] = c__21145__auto__);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__,msg_hist,msg_names,msg))
);

return c__21145__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21145__auto___27669 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___27669,ch){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___27669,ch){
return (function (state_27655){
var state_val_27656 = (state_27655[(1)]);
if((state_val_27656 === (1))){
var state_27655__$1 = state_27655;
var statearr_27657_27670 = state_27655__$1;
(statearr_27657_27670[(2)] = null);

(statearr_27657_27670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (2))){
var state_27655__$1 = state_27655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27655__$1,(4),ch);
} else {
if((state_val_27656 === (3))){
var inst_27653 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27655__$1,inst_27653);
} else {
if((state_val_27656 === (4))){
var inst_27643 = (state_27655[(7)]);
var inst_27643__$1 = (state_27655[(2)]);
var state_27655__$1 = (function (){var statearr_27658 = state_27655;
(statearr_27658[(7)] = inst_27643__$1);

return statearr_27658;
})();
if(cljs.core.truth_(inst_27643__$1)){
var statearr_27659_27671 = state_27655__$1;
(statearr_27659_27671[(1)] = (5));

} else {
var statearr_27660_27672 = state_27655__$1;
(statearr_27660_27672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (5))){
var inst_27643 = (state_27655[(7)]);
var inst_27645 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27643);
var state_27655__$1 = state_27655;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27655__$1,(8),inst_27645);
} else {
if((state_val_27656 === (6))){
var state_27655__$1 = state_27655;
var statearr_27661_27673 = state_27655__$1;
(statearr_27661_27673[(2)] = null);

(statearr_27661_27673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (7))){
var inst_27651 = (state_27655[(2)]);
var state_27655__$1 = state_27655;
var statearr_27662_27674 = state_27655__$1;
(statearr_27662_27674[(2)] = inst_27651);

(statearr_27662_27674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27656 === (8))){
var inst_27647 = (state_27655[(2)]);
var state_27655__$1 = (function (){var statearr_27663 = state_27655;
(statearr_27663[(8)] = inst_27647);

return statearr_27663;
})();
var statearr_27664_27675 = state_27655__$1;
(statearr_27664_27675[(2)] = null);

(statearr_27664_27675[(1)] = (2));


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
});})(c__21145__auto___27669,ch))
;
return ((function (switch__21052__auto__,c__21145__auto___27669,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21053__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21053__auto____0 = (function (){
var statearr_27665 = [null,null,null,null,null,null,null,null,null];
(statearr_27665[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21053__auto__);

(statearr_27665[(1)] = (1));

return statearr_27665;
});
var figwheel$client$heads_up_plugin_$_state_machine__21053__auto____1 = (function (state_27655){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_27655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e27666){if((e27666 instanceof Object)){
var ex__21056__auto__ = e27666;
var statearr_27667_27676 = state_27655;
(statearr_27667_27676[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27677 = state_27655;
state_27655 = G__27677;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21053__auto__ = function(state_27655){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21053__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21053__auto____1.call(this,state_27655);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21053__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21053__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___27669,ch))
})();
var state__21147__auto__ = (function (){var statearr_27668 = f__21146__auto__.call(null);
(statearr_27668[(6)] = c__21145__auto___27669);

return statearr_27668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___27669,ch))
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
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__){
return (function (state_27683){
var state_val_27684 = (state_27683[(1)]);
if((state_val_27684 === (1))){
var inst_27678 = cljs.core.async.timeout.call(null,(3000));
var state_27683__$1 = state_27683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27683__$1,(2),inst_27678);
} else {
if((state_val_27684 === (2))){
var inst_27680 = (state_27683[(2)]);
var inst_27681 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27683__$1 = (function (){var statearr_27685 = state_27683;
(statearr_27685[(7)] = inst_27680);

return statearr_27685;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27683__$1,inst_27681);
} else {
return null;
}
}
});})(c__21145__auto__))
;
return ((function (switch__21052__auto__,c__21145__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21053__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21053__auto____0 = (function (){
var statearr_27686 = [null,null,null,null,null,null,null,null];
(statearr_27686[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21053__auto__);

(statearr_27686[(1)] = (1));

return statearr_27686;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21053__auto____1 = (function (state_27683){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_27683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e27687){if((e27687 instanceof Object)){
var ex__21056__auto__ = e27687;
var statearr_27688_27690 = state_27683;
(statearr_27688_27690[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27691 = state_27683;
state_27683 = G__27691;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21053__auto__ = function(state_27683){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21053__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21053__auto____1.call(this,state_27683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21053__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21053__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_27689 = f__21146__auto__.call(null);
(statearr_27689[(6)] = c__21145__auto__);

return statearr_27689;
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
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__,figwheel_version,temp__4657__auto__){
return (function (state_27698){
var state_val_27699 = (state_27698[(1)]);
if((state_val_27699 === (1))){
var inst_27692 = cljs.core.async.timeout.call(null,(2000));
var state_27698__$1 = state_27698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27698__$1,(2),inst_27692);
} else {
if((state_val_27699 === (2))){
var inst_27694 = (state_27698[(2)]);
var inst_27695 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27696 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27695);
var state_27698__$1 = (function (){var statearr_27700 = state_27698;
(statearr_27700[(7)] = inst_27694);

return statearr_27700;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27698__$1,inst_27696);
} else {
return null;
}
}
});})(c__21145__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__21052__auto__,c__21145__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto____0 = (function (){
var statearr_27701 = [null,null,null,null,null,null,null,null];
(statearr_27701[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto__);

(statearr_27701[(1)] = (1));

return statearr_27701;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto____1 = (function (state_27698){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_27698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e27702){if((e27702 instanceof Object)){
var ex__21056__auto__ = e27702;
var statearr_27703_27705 = state_27698;
(statearr_27703_27705[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27706 = state_27698;
state_27698 = G__27706;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto__ = function(state_27698){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto____1.call(this,state_27698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__,figwheel_version,temp__4657__auto__))
})();
var state__21147__auto__ = (function (){var statearr_27704 = f__21146__auto__.call(null);
(statearr_27704[(6)] = c__21145__auto__);

return statearr_27704;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27707){
var map__27708 = p__27707;
var map__27708__$1 = (((((!((map__27708 == null))))?(((((map__27708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27708):map__27708);
var file = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27708__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27710 = "";
var G__27710__$1 = (cljs.core.truth_(file)?[G__27710,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27710);
var G__27710__$2 = (cljs.core.truth_(line)?[G__27710__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27710__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__27710__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27710__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27711){
var map__27712 = p__27711;
var map__27712__$1 = (((((!((map__27712 == null))))?(((((map__27712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27712.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27712):map__27712);
var ed = map__27712__$1;
var exception_data = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27712__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_27715 = (function (){var G__27714 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27714)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__27714;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_27715);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27716){
var map__27717 = p__27716;
var map__27717__$1 = (((((!((map__27717 == null))))?(((((map__27717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27717):map__27717);
var w = map__27717__$1;
var message = cljs.core.get.call(null,map__27717__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__27719 = cljs.core.seq.call(null,plugins);
var chunk__27720 = null;
var count__27721 = (0);
var i__27722 = (0);
while(true){
if((i__27722 < count__27721)){
var vec__27729 = cljs.core._nth.call(null,chunk__27720,i__27722);
var k = cljs.core.nth.call(null,vec__27729,(0),null);
var plugin = cljs.core.nth.call(null,vec__27729,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27735 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27719,chunk__27720,count__27721,i__27722,pl_27735,vec__27729,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27735.call(null,msg_hist);
});})(seq__27719,chunk__27720,count__27721,i__27722,pl_27735,vec__27729,k,plugin))
);
} else {
}


var G__27736 = seq__27719;
var G__27737 = chunk__27720;
var G__27738 = count__27721;
var G__27739 = (i__27722 + (1));
seq__27719 = G__27736;
chunk__27720 = G__27737;
count__27721 = G__27738;
i__27722 = G__27739;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27719);
if(temp__4657__auto__){
var seq__27719__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27719__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27719__$1);
var G__27740 = cljs.core.chunk_rest.call(null,seq__27719__$1);
var G__27741 = c__4550__auto__;
var G__27742 = cljs.core.count.call(null,c__4550__auto__);
var G__27743 = (0);
seq__27719 = G__27740;
chunk__27720 = G__27741;
count__27721 = G__27742;
i__27722 = G__27743;
continue;
} else {
var vec__27732 = cljs.core.first.call(null,seq__27719__$1);
var k = cljs.core.nth.call(null,vec__27732,(0),null);
var plugin = cljs.core.nth.call(null,vec__27732,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27744 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27719,chunk__27720,count__27721,i__27722,pl_27744,vec__27732,k,plugin,seq__27719__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27744.call(null,msg_hist);
});})(seq__27719,chunk__27720,count__27721,i__27722,pl_27744,vec__27732,k,plugin,seq__27719__$1,temp__4657__auto__))
);
} else {
}


var G__27745 = cljs.core.next.call(null,seq__27719__$1);
var G__27746 = null;
var G__27747 = (0);
var G__27748 = (0);
seq__27719 = G__27745;
chunk__27720 = G__27746;
count__27721 = G__27747;
i__27722 = G__27748;
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
var G__27750 = arguments.length;
switch (G__27750) {
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

var seq__27751_27756 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27752_27757 = null;
var count__27753_27758 = (0);
var i__27754_27759 = (0);
while(true){
if((i__27754_27759 < count__27753_27758)){
var msg_27760 = cljs.core._nth.call(null,chunk__27752_27757,i__27754_27759);
figwheel.client.socket.handle_incoming_message.call(null,msg_27760);


var G__27761 = seq__27751_27756;
var G__27762 = chunk__27752_27757;
var G__27763 = count__27753_27758;
var G__27764 = (i__27754_27759 + (1));
seq__27751_27756 = G__27761;
chunk__27752_27757 = G__27762;
count__27753_27758 = G__27763;
i__27754_27759 = G__27764;
continue;
} else {
var temp__4657__auto___27765 = cljs.core.seq.call(null,seq__27751_27756);
if(temp__4657__auto___27765){
var seq__27751_27766__$1 = temp__4657__auto___27765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27751_27766__$1)){
var c__4550__auto___27767 = cljs.core.chunk_first.call(null,seq__27751_27766__$1);
var G__27768 = cljs.core.chunk_rest.call(null,seq__27751_27766__$1);
var G__27769 = c__4550__auto___27767;
var G__27770 = cljs.core.count.call(null,c__4550__auto___27767);
var G__27771 = (0);
seq__27751_27756 = G__27768;
chunk__27752_27757 = G__27769;
count__27753_27758 = G__27770;
i__27754_27759 = G__27771;
continue;
} else {
var msg_27772 = cljs.core.first.call(null,seq__27751_27766__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27772);


var G__27773 = cljs.core.next.call(null,seq__27751_27766__$1);
var G__27774 = null;
var G__27775 = (0);
var G__27776 = (0);
seq__27751_27756 = G__27773;
chunk__27752_27757 = G__27774;
count__27753_27758 = G__27775;
i__27754_27759 = G__27776;
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
var len__4730__auto___27781 = arguments.length;
var i__4731__auto___27782 = (0);
while(true){
if((i__4731__auto___27782 < len__4730__auto___27781)){
args__4736__auto__.push((arguments[i__4731__auto___27782]));

var G__27783 = (i__4731__auto___27782 + (1));
i__4731__auto___27782 = G__27783;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27778){
var map__27779 = p__27778;
var map__27779__$1 = (((((!((map__27779 == null))))?(((((map__27779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27779):map__27779);
var opts = map__27779__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27777){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27777));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27784){if((e27784 instanceof Error)){
var e = e27784;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27784;

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
return (function (p__27785){
var map__27786 = p__27785;
var map__27786__$1 = (((((!((map__27786 == null))))?(((((map__27786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27786):map__27786);
var msg_name = cljs.core.get.call(null,map__27786__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1569276395927
