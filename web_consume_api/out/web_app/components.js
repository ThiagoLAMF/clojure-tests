// Compiled by ClojureScript 1.10.520 {}
goog.provide('web_app.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
web_app.components.table_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"0",new cljs.core.Keyword(null,"username","username",1605666410),"abc",new cljs.core.Keyword(null,"email","email",1415816706),"asd@asd.com",new cljs.core.Keyword(null,"password_hash","password_hash",955010413),"pass"], null));
web_app.components.email_address = cljs.core.atom.call(null,"teste");
web_app.components.password = cljs.core.atom.call(null,"password");
web_app.components.check_user_api = (function web_app$components$check_user_api(email,pass,user_state){
var c__21145__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto__){
return (function (){
var f__21146__auto__ = (function (){var switch__20275__auto__ = ((function (c__21145__auto__){
return (function (state_29134){
var state_val_29135 = (state_29134[(1)]);
if((state_val_29135 === (1))){
var inst_29121 = ["http://localhost:3000/checkuser/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pass)].join('');
var inst_29122 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_29123 = [false];
var inst_29124 = cljs.core.PersistentHashMap.fromArrays(inst_29122,inst_29123);
var inst_29125 = cljs_http.client.get.call(null,inst_29121,inst_29124);
var state_29134__$1 = state_29134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29134__$1,(2),inst_29125);
} else {
if((state_val_29135 === (2))){
var inst_29127 = (state_29134[(2)]);
var inst_29128 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29127);
var inst_29129 = cljs.core.prn.call(null,inst_29128);
var inst_29130 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29127);
var inst_29131 = cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),inst_29130);
var inst_29132 = cljs.core.prn.call(null,inst_29131);
var state_29134__$1 = (function (){var statearr_29136 = state_29134;
(statearr_29136[(7)] = inst_29129);

return statearr_29136;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29134__$1,inst_29132);
} else {
return null;
}
}
});})(c__21145__auto__))
;
return ((function (switch__20275__auto__,c__21145__auto__){
return (function() {
var web_app$components$check_user_api_$_state_machine__20276__auto__ = null;
var web_app$components$check_user_api_$_state_machine__20276__auto____0 = (function (){
var statearr_29137 = [null,null,null,null,null,null,null,null];
(statearr_29137[(0)] = web_app$components$check_user_api_$_state_machine__20276__auto__);

(statearr_29137[(1)] = (1));

return statearr_29137;
});
var web_app$components$check_user_api_$_state_machine__20276__auto____1 = (function (state_29134){
while(true){
var ret_value__20277__auto__ = (function (){try{while(true){
var result__20278__auto__ = switch__20275__auto__.call(null,state_29134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20278__auto__;
}
break;
}
}catch (e29138){if((e29138 instanceof Object)){
var ex__20279__auto__ = e29138;
var statearr_29139_29141 = state_29134;
(statearr_29139_29141[(5)] = ex__20279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29142 = state_29134;
state_29134 = G__29142;
continue;
} else {
return ret_value__20277__auto__;
}
break;
}
});
web_app$components$check_user_api_$_state_machine__20276__auto__ = function(state_29134){
switch(arguments.length){
case 0:
return web_app$components$check_user_api_$_state_machine__20276__auto____0.call(this);
case 1:
return web_app$components$check_user_api_$_state_machine__20276__auto____1.call(this,state_29134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
web_app$components$check_user_api_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$0 = web_app$components$check_user_api_$_state_machine__20276__auto____0;
web_app$components$check_user_api_$_state_machine__20276__auto__.cljs$core$IFn$_invoke$arity$1 = web_app$components$check_user_api_$_state_machine__20276__auto____1;
return web_app$components$check_user_api_$_state_machine__20276__auto__;
})()
;})(switch__20275__auto__,c__21145__auto__))
})();
var state__21147__auto__ = (function (){var statearr_29140 = f__21146__auto__.call(null);
(statearr_29140[(6)] = c__21145__auto__);

return statearr_29140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto__))
);

return c__21145__auto__;
});
web_app.components.input_element = (function web_app$components$input_element(id,name,type,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"class","class",-2030961996),"form-control",new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"required","required",1807647006),"",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__29143_SHARP_){
return cljs.core.reset_BANG_.call(null,value,p1__29143_SHARP_.target.value);
})], null)], null);
});
web_app.components.like_seymore = (function web_app$components$like_seymore(data,user_state){
console.log("Hey Seymore! wts goin' on?");

return React.createElement("div",({"className": "signup-wrapper"}),React.createElement("h1",null,"Seymore's quantified popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")),React.createElement("h2",null,"Welcome "),React.createElement("h2",null,"LOGADO: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,user_state)))),(function (){var attrs29146 = web_app.components.input_element.call(null,"email","email","email",web_app.components.email_address);
return cljs.core.apply.call(null,React.createElement,"form",((cljs.core.map_QMARK_.call(null,attrs29146))?sablono.interpreter.attributes.call(null,attrs29146):null),((cljs.core.map_QMARK_.call(null,attrs29146))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,web_app.components.input_element.call(null,"pass","pass","password",web_app.components.password))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs29146),sablono.interpreter.interpret.call(null,web_app.components.input_element.call(null,"pass","pass","password",web_app.components.password))], null)));
})(),React.createElement("button",({"onClick": (function (e){
return web_app.components.check_user_api.call(null,cljs.core.deref.call(null,web_app.components.email_address),cljs.core.deref.call(null,web_app.components.password),user_state);
})}),"Login"));
});

//# sourceMappingURL=components.js.map?rel=1569264622187
