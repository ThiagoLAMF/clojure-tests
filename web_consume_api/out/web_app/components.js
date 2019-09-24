// Compiled by ClojureScript 1.10.520 {}
goog.provide('web_app.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
web_app.components.table_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"0",new cljs.core.Keyword(null,"username","username",1605666410),"abc",new cljs.core.Keyword(null,"email","email",1415816706),"asd@asd.com",new cljs.core.Keyword(null,"password_hash","password_hash",955010413),"pass"], null));
web_app.components.email_address = cljs.core.atom.call(null,"userteste");
web_app.components.password = cljs.core.atom.call(null,"password");
web_app.components.check_user_api = (function web_app$components$check_user_api(email,pass,user_state){
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto__){
return (function (state_33477){
var state_val_33478 = (state_33477[(1)]);
if((state_val_33478 === (1))){
var inst_33464 = ["http://localhost:3000/checkuser/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)].join('');
var inst_33465 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_33466 = [false];
var inst_33467 = cljs.core.PersistentHashMap.fromArrays(inst_33465,inst_33466);
var inst_33468 = cljs_http.client.get.call(null,inst_33464,inst_33467);
var state_33477__$1 = state_33477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33477__$1,(2),inst_33468);
} else {
if((state_val_33478 === (2))){
var inst_33470 = (state_33477[(2)]);
var inst_33471 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_33470);
var inst_33472 = JSON.parse(inst_33471);
var inst_33473 = cljs.core.js__GT_clj.call(null,inst_33472,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var inst_33474 = cljs.core.map.call(null,new cljs.core.Keyword(null,"username","username",1605666410),inst_33473);
var inst_33475 = cljs.core.prn.call(null,inst_33474);
var state_33477__$1 = state_33477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33477__$1,inst_33475);
} else {
return null;
}
}
});})(c__21145__auto__))
;
return ((function (switch__21052__auto__,c__21145__auto__){
return (function() {
var web_app$components$check_user_api_$_state_machine__21053__auto__ = null;
var web_app$components$check_user_api_$_state_machine__21053__auto____0 = (function (){
var statearr_33479 = [null,null,null,null,null,null,null];
(statearr_33479[(0)] = web_app$components$check_user_api_$_state_machine__21053__auto__);

(statearr_33479[(1)] = (1));

return statearr_33479;
});
var web_app$components$check_user_api_$_state_machine__21053__auto____1 = (function (state_33477){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_33477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e33480){if((e33480 instanceof Object)){
var ex__21056__auto__ = e33480;
var statearr_33481_33483 = state_33477;
(statearr_33481_33483[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33484 = state_33477;
state_33477 = G__33484;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
web_app$components$check_user_api_$_state_machine__21053__auto__ = function(state_33477){
switch(arguments.length){
case 0:
return web_app$components$check_user_api_$_state_machine__21053__auto____0.call(this);
case 1:
return web_app$components$check_user_api_$_state_machine__21053__auto____1.call(this,state_33477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
web_app$components$check_user_api_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = web_app$components$check_user_api_$_state_machine__21053__auto____0;
web_app$components$check_user_api_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = web_app$components$check_user_api_$_state_machine__21053__auto____1;
return web_app$components$check_user_api_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_33482 = f__21146__auto__.call(null);
(statearr_33482[(6)] = c__21145__auto__);

return statearr_33482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
});
web_app.components.input_element = (function web_app$components$input_element(id,name,type,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__33485_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__33485_SHARP_.target.value);
})], null)], null);
});
web_app.components.like_seymore = (function web_app$components$like_seymore(data,user_state){
console.log("Hey Seymore! wts goin' on?");

cljs.core.prn.call(null,window.prompt("oi"));

return React.createElement("div",({"className": "signup-wrapper"}),React.createElement("h1",null,"Seymore's quantified popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")),React.createElement("h2",null,"Welcome "),React.createElement("h2",null,"LOGADO2: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user_state)))),(function (){var attrs33488 = web_app.components.input_element.call(null,"email","email","email",web_app.components.email_address);
return cljs.core.apply.call(null,React.createElement,"form",((cljs.core.map_QMARK_.call(null,attrs33488))?sablono.interpreter.attributes.call(null,attrs33488):null),((cljs.core.map_QMARK_.call(null,attrs33488))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,web_app.components.input_element.call(null,"pass","pass","password",web_app.components.password))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33488),sablono.interpreter.interpret.call(null,web_app.components.input_element.call(null,"pass","pass","password",web_app.components.password))], null)));
})(),React.createElement("button",({"onClick": (function (e){
return web_app.components.check_user_api.call(null,cljs.core.deref.call(null,web_app.components.email_address),cljs.core.deref.call(null,web_app.components.password),user_state);
})}),"Login"));
});

//# sourceMappingURL=components.js.map?rel=1569281958624
