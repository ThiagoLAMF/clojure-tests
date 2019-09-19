// Compiled by ClojureScript 1.10.520 {}
goog.provide('web_app.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
web_app.components.get_data = (function web_app$components$get_data(table_state){
var c__21389__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21389__auto__){
return (function (){
var f__21390__auto__ = (function (){var switch__21340__auto__ = ((function (c__21389__auto__){
return (function (state_23077){
var state_val_23078 = (state_23077[(1)]);
if((state_val_23078 === (1))){
var inst_23064 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_23065 = ["since"];
var inst_23066 = [(135)];
var inst_23067 = cljs.core.PersistentHashMap.fromArrays(inst_23065,inst_23066);
var inst_23068 = [false,inst_23067];
var inst_23069 = cljs.core.PersistentHashMap.fromArrays(inst_23064,inst_23068);
var inst_23070 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_23069);
var state_23077__$1 = state_23077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23077__$1,(2),inst_23070);
} else {
if((state_val_23078 === (2))){
var inst_23072 = (state_23077[(2)]);
var inst_23073 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_23072);
var inst_23074 = cljs.core.prn.call(null,"oi");
var inst_23075 = cljs.core.reset_BANG_.call(null,table_state,inst_23073);
var state_23077__$1 = (function (){var statearr_23079 = state_23077;
(statearr_23079[(7)] = inst_23074);

return statearr_23079;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23077__$1,inst_23075);
} else {
return null;
}
}
});})(c__21389__auto__))
;
return ((function (switch__21340__auto__,c__21389__auto__){
return (function() {
var web_app$components$get_data_$_state_machine__21341__auto__ = null;
var web_app$components$get_data_$_state_machine__21341__auto____0 = (function (){
var statearr_23080 = [null,null,null,null,null,null,null,null];
(statearr_23080[(0)] = web_app$components$get_data_$_state_machine__21341__auto__);

(statearr_23080[(1)] = (1));

return statearr_23080;
});
var web_app$components$get_data_$_state_machine__21341__auto____1 = (function (state_23077){
while(true){
var ret_value__21342__auto__ = (function (){try{while(true){
var result__21343__auto__ = switch__21340__auto__.call(null,state_23077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21343__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21343__auto__;
}
break;
}
}catch (e23081){if((e23081 instanceof Object)){
var ex__21344__auto__ = e23081;
var statearr_23082_23084 = state_23077;
(statearr_23082_23084[(5)] = ex__21344__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21342__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23085 = state_23077;
state_23077 = G__23085;
continue;
} else {
return ret_value__21342__auto__;
}
break;
}
});
web_app$components$get_data_$_state_machine__21341__auto__ = function(state_23077){
switch(arguments.length){
case 0:
return web_app$components$get_data_$_state_machine__21341__auto____0.call(this);
case 1:
return web_app$components$get_data_$_state_machine__21341__auto____1.call(this,state_23077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
web_app$components$get_data_$_state_machine__21341__auto__.cljs$core$IFn$_invoke$arity$0 = web_app$components$get_data_$_state_machine__21341__auto____0;
web_app$components$get_data_$_state_machine__21341__auto__.cljs$core$IFn$_invoke$arity$1 = web_app$components$get_data_$_state_machine__21341__auto____1;
return web_app$components$get_data_$_state_machine__21341__auto__;
})()
;})(switch__21340__auto__,c__21389__auto__))
})();
var state__21391__auto__ = (function (){var statearr_23083 = f__21390__auto__.call(null);
(statearr_23083[(6)] = c__21389__auto__);

return statearr_23083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21391__auto__);
});})(c__21389__auto__))
);

return c__21389__auto__;
});
web_app.components.like_seymore = (function web_app$components$like_seymore(data,table){
console.log("Hey Seymore! wts goin' on?");

web_app.components.get_data.call(null,table);

return React.createElement("div",null,React.createElement("h1",null,"Seymore's quantified popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")),React.createElement("div",null,React.createElement("h1",null,"API:"),React.createElement("table",({"id": "tabelaTeste"}),React.createElement("tbody",null,cljs.core.into_array.call(null,(function (){var iter__4523__auto__ = (function web_app$components$like_seymore_$_iter__23088(s__23089){
return (new cljs.core.LazySeq(null,(function (){
var s__23089__$1 = s__23089;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23089__$1);
if(temp__4657__auto__){
var s__23089__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23089__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23089__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23091 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23090 = (0);
while(true){
if((i__23090 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__23090);
cljs.core.chunk_append.call(null,b__23091,sablono.interpreter.interpret.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tr","tr",-1424774646),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"td","td",1479933353),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"height","height",1025178622),"42",new cljs.core.Keyword(null,"width","width",-384071477),"42",new cljs.core.Keyword(null,"alt","alt",-3214426),"Profile image"], null)],null))],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(item)],null))],null))));

var G__23092 = (i__23090 + (1));
i__23090 = G__23092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23091),web_app$components$like_seymore_$_iter__23088.call(null,cljs.core.chunk_rest.call(null,s__23089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23091),null);
}
} else {
var item = cljs.core.first.call(null,s__23089__$2);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tr","tr",-1424774646),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"td","td",1479933353),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"height","height",1025178622),"42",new cljs.core.Keyword(null,"width","width",-384071477),"42",new cljs.core.Keyword(null,"alt","alt",-3214426),"Profile image"], null)],null))],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"login","login",55217519).cljs$core$IFn$_invoke$arity$1(item)],null))],null))),web_app$components$like_seymore_$_iter__23088.call(null,cljs.core.rest.call(null,s__23089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,table));
})())))));
});

//# sourceMappingURL=components.js.map?rel=1568896992482
