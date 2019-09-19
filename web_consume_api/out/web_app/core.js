// Compiled by ClojureScript 1.10.520 {}
goog.provide('web_app.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('web_app.components');
if((typeof web_app !== 'undefined') && (typeof web_app.core !== 'undefined') && (typeof web_app.core.app_state !== 'undefined')){
} else {
web_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"likes","likes",792554542),(0)], null));
}
web_app.core.table_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"login","login",55217519),"0"], null)], null));
web_app.core.render_BANG_ = (function web_app$core$render_BANG_(){
return ReactDOM.render(web_app.components.like_seymore.call(null,web_app.core.app_state,web_app.core.table_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,web_app.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return web_app.core.render_BANG_.call(null);
}));
web_app.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1568896992535
