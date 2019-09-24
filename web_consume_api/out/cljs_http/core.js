// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__23073){
var vec__23074 = p__23073;
var k = cljs.core.nth.call(null,vec__23074,(0),null);
var v = cljs.core.nth.call(null,vec__23074,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__23077 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__23077)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__23077)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__23077)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__23077)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__23077)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__23077)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23077)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__23078){
var map__23079 = p__23078;
var map__23079__$1 = (((((!((map__23079 == null))))?(((((map__23079.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23079.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23079):map__23079);
var request = map__23079__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__23079__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__23081 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__23081,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__23081,response_type);

G__23081.setTimeoutInterval(timeout);

G__23081.setWithCredentials(send_credentials);

return G__23081;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__23082){
var map__23083 = p__23082;
var map__23083__$1 = (((((!((map__23083 == null))))?(((((map__23083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23083):map__23083);
var request = map__23083__$1;
var request_method = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__23083__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4131__auto__ = request_method;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_23107 = ((function (channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});})(channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__23085_23108 = xhr;
G__23085_23108.setProgressEventsEnabled(true);

G__23085_23108.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_23107,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__23085_23108.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_23107,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__21145__auto___23109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___23109,channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___23109,channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_23096){
var state_val_23097 = (state_23096[(1)]);
if((state_val_23097 === (1))){
var state_23096__$1 = state_23096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23096__$1,(2),cancel);
} else {
if((state_val_23097 === (2))){
var inst_23087 = (state_23096[(2)]);
var inst_23088 = xhr.isComplete();
var inst_23089 = cljs.core.not.call(null,inst_23088);
var state_23096__$1 = (function (){var statearr_23098 = state_23096;
(statearr_23098[(7)] = inst_23087);

return statearr_23098;
})();
if(inst_23089){
var statearr_23099_23110 = state_23096__$1;
(statearr_23099_23110[(1)] = (3));

} else {
var statearr_23100_23111 = state_23096__$1;
(statearr_23100_23111[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (3))){
var inst_23091 = xhr.abort();
var state_23096__$1 = state_23096;
var statearr_23101_23112 = state_23096__$1;
(statearr_23101_23112[(2)] = inst_23091);

(statearr_23101_23112[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (4))){
var state_23096__$1 = state_23096;
var statearr_23102_23113 = state_23096__$1;
(statearr_23102_23113[(2)] = null);

(statearr_23102_23113[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23097 === (5))){
var inst_23094 = (state_23096[(2)]);
var state_23096__$1 = state_23096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23096__$1,inst_23094);
} else {
return null;
}
}
}
}
}
});})(c__21145__auto___23109,channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__21052__auto__,c__21145__auto___23109,channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__21053__auto__ = null;
var cljs_http$core$xhr_$_state_machine__21053__auto____0 = (function (){
var statearr_23103 = [null,null,null,null,null,null,null,null];
(statearr_23103[(0)] = cljs_http$core$xhr_$_state_machine__21053__auto__);

(statearr_23103[(1)] = (1));

return statearr_23103;
});
var cljs_http$core$xhr_$_state_machine__21053__auto____1 = (function (state_23096){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_23096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e23104){if((e23104 instanceof Object)){
var ex__21056__auto__ = e23104;
var statearr_23105_23114 = state_23096;
(statearr_23105_23114[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23115 = state_23096;
state_23096 = G__23115;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__21053__auto__ = function(state_23096){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__21053__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__21053__auto____1.call(this,state_23096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__21053__auto____0;
cljs_http$core$xhr_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__21053__auto____1;
return cljs_http$core$xhr_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___23109,channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__21147__auto__ = (function (){var statearr_23106 = f__21146__auto__.call(null);
(statearr_23106[(6)] = c__21145__auto___23109);

return statearr_23106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___23109,channel,request_url,method,headers__$1,xhr,map__23083,map__23083__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__23116){
var map__23117 = p__23116;
var map__23117__$1 = (((((!((map__23117 == null))))?(((((map__23117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23117):map__23117);
var request = map__23117__$1;
var timeout = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__23117__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_23130 = jsonp.send(null,((function (channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_23130], null));

if(cljs.core.truth_(cancel)){
var c__21145__auto___23131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21145__auto___23131,req_23130,channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__21146__auto__ = (function (){var switch__21052__auto__ = ((function (c__21145__auto___23131,req_23130,channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_23123){
var state_val_23124 = (state_23123[(1)]);
if((state_val_23124 === (1))){
var state_23123__$1 = state_23123;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23123__$1,(2),cancel);
} else {
if((state_val_23124 === (2))){
var inst_23120 = (state_23123[(2)]);
var inst_23121 = jsonp.cancel(req_23130);
var state_23123__$1 = (function (){var statearr_23125 = state_23123;
(statearr_23125[(7)] = inst_23120);

return statearr_23125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23123__$1,inst_23121);
} else {
return null;
}
}
});})(c__21145__auto___23131,req_23130,channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__21052__auto__,c__21145__auto___23131,req_23130,channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__21053__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__21053__auto____0 = (function (){
var statearr_23126 = [null,null,null,null,null,null,null,null];
(statearr_23126[(0)] = cljs_http$core$jsonp_$_state_machine__21053__auto__);

(statearr_23126[(1)] = (1));

return statearr_23126;
});
var cljs_http$core$jsonp_$_state_machine__21053__auto____1 = (function (state_23123){
while(true){
var ret_value__21054__auto__ = (function (){try{while(true){
var result__21055__auto__ = switch__21052__auto__.call(null,state_23123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21055__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21055__auto__;
}
break;
}
}catch (e23127){if((e23127 instanceof Object)){
var ex__21056__auto__ = e23127;
var statearr_23128_23132 = state_23123;
(statearr_23128_23132[(5)] = ex__21056__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23133 = state_23123;
state_23123 = G__23133;
continue;
} else {
return ret_value__21054__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__21053__auto__ = function(state_23123){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__21053__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__21053__auto____1.call(this,state_23123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__21053__auto____0;
cljs_http$core$jsonp_$_state_machine__21053__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__21053__auto____1;
return cljs_http$core$jsonp_$_state_machine__21053__auto__;
})()
;})(switch__21052__auto__,c__21145__auto___23131,req_23130,channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__21147__auto__ = (function (){var statearr_23129 = f__21146__auto__.call(null);
(statearr_23129[(6)] = c__21145__auto___23131);

return statearr_23129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21147__auto__);
});})(c__21145__auto___23131,req_23130,channel,jsonp,map__23117,map__23117__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__23134){
var map__23135 = p__23134;
var map__23135__$1 = (((((!((map__23135 == null))))?(((((map__23135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23135):map__23135);
var request = map__23135__$1;
var request_method = cljs.core.get.call(null,map__23135__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map?rel=1569276391353
