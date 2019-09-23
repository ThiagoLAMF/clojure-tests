// Compiled by ClojureScript 1.10.520 {}
goog.provide('web_app.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('web_app.components');
if((typeof web_app !== 'undefined') && (typeof web_app.core !== 'undefined') && (typeof web_app.core.app_state !== 'undefined')){
} else {
web_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"likes","likes",792554542),(0),new cljs.core.Keyword(null,"logado","logado",-375640853),(0)], null));
}
web_app.core.user_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"0",new cljs.core.Keyword(null,"username","username",1605666410),"abc",new cljs.core.Keyword(null,"email","email",1415816706),"asd@asd.com",new cljs.core.Keyword(null,"password_hash","password_hash",955010413),"pass"], null));
web_app.core.render_BANG_ = (function web_app$core$render_BANG_(){
return ReactDOM.render(web_app.components.like_seymore.call(null,web_app.core.app_state,web_app.core.user_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,web_app.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return web_app.core.render_BANG_.call(null);
}));
web_app.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1569264622203
