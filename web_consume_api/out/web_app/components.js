// Compiled by ClojureScript 1.10.520 {}
goog.provide('web_app.components');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
web_app.components.like_seymore = (function web_app$components$like_seymore(data,table){
console.log("Hey Seymore! wts goin' on?");

return React.createElement("div",null,React.createElement("h1",null,"Seymore's quantified popularity: ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"likes","likes",792554542).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))),React.createElement("div",null,React.createElement("a",({"href": "#", "onClick": (function (){
return cljs.core.swap_BANG_.call(null,data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"likes","likes",792554542)], null),cljs.core.inc);
})}),"Thumbs up")),React.createElement("div",null,React.createElement("p",null,"Login: "),sablono.interpreter.create_element.call(null,"input",({"type": "text", "id": "login"})),React.createElement("p",null,"Password: "),sablono.interpreter.create_element.call(null,"input",({"type": "password", "id": "password"})),React.createElement("button",({"onClick": (function (e){
return console.log("Hello!!");
})}),"Login")));
});

//# sourceMappingURL=components.js.map?rel=1569007244768
