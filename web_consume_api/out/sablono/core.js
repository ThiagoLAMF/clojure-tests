// Compiled by ClojureScript 1.10.520 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__23909__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__23906 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__23907 = cljs.core.seq.call(null,vec__23906);
var first__23908 = cljs.core.first.call(null,seq__23907);
var seq__23907__$1 = cljs.core.next.call(null,seq__23907);
var tag = first__23908;
var body = seq__23907__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__23909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23910__i = 0, G__23910__a = new Array(arguments.length -  0);
while (G__23910__i < G__23910__a.length) {G__23910__a[G__23910__i] = arguments[G__23910__i + 0]; ++G__23910__i;}
  args = new cljs.core.IndexedSeq(G__23910__a,0,null);
} 
return G__23909__delegate.call(this,args);};
G__23909.cljs$lang$maxFixedArity = 0;
G__23909.cljs$lang$applyTo = (function (arglist__23911){
var args = cljs.core.seq(arglist__23911);
return G__23909__delegate(args);
});
G__23909.cljs$core$IFn$_invoke$arity$variadic = G__23909__delegate;
return G__23909;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__23912(s__23913){
return (new cljs.core.LazySeq(null,(function (){
var s__23913__$1 = s__23913;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23913__$1);
if(temp__4657__auto__){
var s__23913__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23913__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23913__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23915 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23914 = (0);
while(true){
if((i__23914 < size__4522__auto__)){
var args = cljs.core._nth.call(null,c__4521__auto__,i__23914);
cljs.core.chunk_append.call(null,b__23915,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__23916 = (i__23914 + (1));
i__23914 = G__23916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23915),sablono$core$update_arglists_$_iter__23912.call(null,cljs.core.chunk_rest.call(null,s__23913__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23915),null);
}
} else {
var args = cljs.core.first.call(null,s__23913__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__23912.call(null,cljs.core.rest.call(null,s__23913__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23922 = arguments.length;
var i__4731__auto___23923 = (0);
while(true){
if((i__4731__auto___23923 < len__4730__auto___23922)){
args__4736__auto__.push((arguments[i__4731__auto___23923]));

var G__23924 = (i__4731__auto___23923 + (1));
i__4731__auto___23923 = G__23924;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__23918(s__23919){
return (new cljs.core.LazySeq(null,(function (){
var s__23919__$1 = s__23919;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23919__$1);
if(temp__4657__auto__){
var s__23919__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23919__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23919__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23921 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23920 = (0);
while(true){
if((i__23920 < size__4522__auto__)){
var style = cljs.core._nth.call(null,c__4521__auto__,i__23920);
cljs.core.chunk_append.call(null,b__23921,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__23925 = (i__23920 + (1));
i__23920 = G__23925;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23921),sablono$core$iter__23918.call(null,cljs.core.chunk_rest.call(null,s__23919__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23921),null);
}
} else {
var style = cljs.core.first.call(null,s__23919__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__23918.call(null,cljs.core.rest.call(null,s__23919__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq23917){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23917));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to23926 = (function sablono$core$link_to23926(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23929 = arguments.length;
var i__4731__auto___23930 = (0);
while(true){
if((i__4731__auto___23930 < len__4730__auto___23929)){
args__4736__auto__.push((arguments[i__4731__auto___23930]));

var G__23931 = (i__4731__auto___23930 + (1));
i__4731__auto___23930 = G__23931;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to23926.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to23926.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to23926.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to23926.cljs$lang$applyTo = (function (seq23927){
var G__23928 = cljs.core.first.call(null,seq23927);
var seq23927__$1 = cljs.core.next.call(null,seq23927);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23928,seq23927__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to23926);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to23932 = (function sablono$core$mail_to23932(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23939 = arguments.length;
var i__4731__auto___23940 = (0);
while(true){
if((i__4731__auto___23940 < len__4730__auto___23939)){
args__4736__auto__.push((arguments[i__4731__auto___23940]));

var G__23941 = (i__4731__auto___23940 + (1));
i__4731__auto___23940 = G__23941;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to23932.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to23932.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__23935){
var vec__23936 = p__23935;
var content = cljs.core.nth.call(null,vec__23936,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to23932.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to23932.cljs$lang$applyTo = (function (seq23933){
var G__23934 = cljs.core.first.call(null,seq23933);
var seq23933__$1 = cljs.core.next.call(null,seq23933);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23934,seq23933__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to23932);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list23942 = (function sablono$core$unordered_list23942(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list23942_$_iter__23943(s__23944){
return (new cljs.core.LazySeq(null,(function (){
var s__23944__$1 = s__23944;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23944__$1);
if(temp__4657__auto__){
var s__23944__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23944__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23944__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23946 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23945 = (0);
while(true){
if((i__23945 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23945);
cljs.core.chunk_append.call(null,b__23946,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23947 = (i__23945 + (1));
i__23945 = G__23947;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23946),sablono$core$unordered_list23942_$_iter__23943.call(null,cljs.core.chunk_rest.call(null,s__23944__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23946),null);
}
} else {
var x = cljs.core.first.call(null,s__23944__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list23942_$_iter__23943.call(null,cljs.core.rest.call(null,s__23944__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list23942);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list23948 = (function sablono$core$ordered_list23948(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list23948_$_iter__23949(s__23950){
return (new cljs.core.LazySeq(null,(function (){
var s__23950__$1 = s__23950;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__23950__$1);
if(temp__4657__auto__){
var s__23950__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23950__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__23950__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__23952 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__23951 = (0);
while(true){
if((i__23951 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__23951);
cljs.core.chunk_append.call(null,b__23952,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__23953 = (i__23951 + (1));
i__23951 = G__23953;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23952),sablono$core$ordered_list23948_$_iter__23949.call(null,cljs.core.chunk_rest.call(null,s__23950__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23952),null);
}
} else {
var x = cljs.core.first.call(null,s__23950__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list23948_$_iter__23949.call(null,cljs.core.rest.call(null,s__23950__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list23948);
/**
 * Create an image element.
 */
sablono.core.image23954 = (function sablono$core$image23954(var_args){
var G__23956 = arguments.length;
switch (G__23956) {
case 1:
return sablono.core.image23954.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image23954.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image23954.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image23954.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image23954.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image23954);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__23958_SHARP_,p2__23959_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23958_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23959_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__23960_SHARP_,p2__23961_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__23960_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__23961_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field23962 = (function sablono$core$color_field23962(var_args){
var G__23964 = arguments.length;
switch (G__23964) {
case 1:
return sablono.core.color_field23962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field23962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field23962.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.color_field23962.call(null,name__23896__auto__,null);
});

sablono.core.color_field23962.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.color_field23962.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field23962);

/**
 * Creates a date input field.
 */
sablono.core.date_field23965 = (function sablono$core$date_field23965(var_args){
var G__23967 = arguments.length;
switch (G__23967) {
case 1:
return sablono.core.date_field23965.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field23965.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field23965.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.date_field23965.call(null,name__23896__auto__,null);
});

sablono.core.date_field23965.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.date_field23965.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field23965);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field23968 = (function sablono$core$datetime_field23968(var_args){
var G__23970 = arguments.length;
switch (G__23970) {
case 1:
return sablono.core.datetime_field23968.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field23968.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field23968.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.datetime_field23968.call(null,name__23896__auto__,null);
});

sablono.core.datetime_field23968.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.datetime_field23968.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field23968);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field23971 = (function sablono$core$datetime_local_field23971(var_args){
var G__23973 = arguments.length;
switch (G__23973) {
case 1:
return sablono.core.datetime_local_field23971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field23971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field23971.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.datetime_local_field23971.call(null,name__23896__auto__,null);
});

sablono.core.datetime_local_field23971.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.datetime_local_field23971.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field23971);

/**
 * Creates a email input field.
 */
sablono.core.email_field23974 = (function sablono$core$email_field23974(var_args){
var G__23976 = arguments.length;
switch (G__23976) {
case 1:
return sablono.core.email_field23974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field23974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field23974.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.email_field23974.call(null,name__23896__auto__,null);
});

sablono.core.email_field23974.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.email_field23974.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field23974);

/**
 * Creates a file input field.
 */
sablono.core.file_field23977 = (function sablono$core$file_field23977(var_args){
var G__23979 = arguments.length;
switch (G__23979) {
case 1:
return sablono.core.file_field23977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field23977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field23977.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.file_field23977.call(null,name__23896__auto__,null);
});

sablono.core.file_field23977.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.file_field23977.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field23977);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field23980 = (function sablono$core$hidden_field23980(var_args){
var G__23982 = arguments.length;
switch (G__23982) {
case 1:
return sablono.core.hidden_field23980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field23980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field23980.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.hidden_field23980.call(null,name__23896__auto__,null);
});

sablono.core.hidden_field23980.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.hidden_field23980.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field23980);

/**
 * Creates a month input field.
 */
sablono.core.month_field23983 = (function sablono$core$month_field23983(var_args){
var G__23985 = arguments.length;
switch (G__23985) {
case 1:
return sablono.core.month_field23983.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field23983.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field23983.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.month_field23983.call(null,name__23896__auto__,null);
});

sablono.core.month_field23983.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.month_field23983.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field23983);

/**
 * Creates a number input field.
 */
sablono.core.number_field23986 = (function sablono$core$number_field23986(var_args){
var G__23988 = arguments.length;
switch (G__23988) {
case 1:
return sablono.core.number_field23986.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field23986.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field23986.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.number_field23986.call(null,name__23896__auto__,null);
});

sablono.core.number_field23986.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.number_field23986.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field23986);

/**
 * Creates a password input field.
 */
sablono.core.password_field23989 = (function sablono$core$password_field23989(var_args){
var G__23991 = arguments.length;
switch (G__23991) {
case 1:
return sablono.core.password_field23989.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field23989.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field23989.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.password_field23989.call(null,name__23896__auto__,null);
});

sablono.core.password_field23989.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.password_field23989.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field23989);

/**
 * Creates a range input field.
 */
sablono.core.range_field23992 = (function sablono$core$range_field23992(var_args){
var G__23994 = arguments.length;
switch (G__23994) {
case 1:
return sablono.core.range_field23992.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field23992.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field23992.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.range_field23992.call(null,name__23896__auto__,null);
});

sablono.core.range_field23992.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.range_field23992.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field23992);

/**
 * Creates a search input field.
 */
sablono.core.search_field23995 = (function sablono$core$search_field23995(var_args){
var G__23997 = arguments.length;
switch (G__23997) {
case 1:
return sablono.core.search_field23995.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field23995.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field23995.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.search_field23995.call(null,name__23896__auto__,null);
});

sablono.core.search_field23995.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.search_field23995.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field23995);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field23998 = (function sablono$core$tel_field23998(var_args){
var G__24000 = arguments.length;
switch (G__24000) {
case 1:
return sablono.core.tel_field23998.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field23998.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field23998.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.tel_field23998.call(null,name__23896__auto__,null);
});

sablono.core.tel_field23998.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.tel_field23998.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field23998);

/**
 * Creates a text input field.
 */
sablono.core.text_field24001 = (function sablono$core$text_field24001(var_args){
var G__24003 = arguments.length;
switch (G__24003) {
case 1:
return sablono.core.text_field24001.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24001.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field24001.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.text_field24001.call(null,name__23896__auto__,null);
});

sablono.core.text_field24001.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.text_field24001.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24001);

/**
 * Creates a time input field.
 */
sablono.core.time_field24004 = (function sablono$core$time_field24004(var_args){
var G__24006 = arguments.length;
switch (G__24006) {
case 1:
return sablono.core.time_field24004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field24004.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.time_field24004.call(null,name__23896__auto__,null);
});

sablono.core.time_field24004.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.time_field24004.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24004);

/**
 * Creates a url input field.
 */
sablono.core.url_field24007 = (function sablono$core$url_field24007(var_args){
var G__24009 = arguments.length;
switch (G__24009) {
case 1:
return sablono.core.url_field24007.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24007.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field24007.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.url_field24007.call(null,name__23896__auto__,null);
});

sablono.core.url_field24007.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.url_field24007.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24007);

/**
 * Creates a week input field.
 */
sablono.core.week_field24010 = (function sablono$core$week_field24010(var_args){
var G__24012 = arguments.length;
switch (G__24012) {
case 1:
return sablono.core.week_field24010.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24010.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field24010.cljs$core$IFn$_invoke$arity$1 = (function (name__23896__auto__){
return sablono.core.week_field24010.call(null,name__23896__auto__,null);
});

sablono.core.week_field24010.cljs$core$IFn$_invoke$arity$2 = (function (name__23896__auto__,value__23897__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__23896__auto__,value__23897__auto__);
});

sablono.core.week_field24010.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24010);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24030 = (function sablono$core$check_box24030(var_args){
var G__24032 = arguments.length;
switch (G__24032) {
case 1:
return sablono.core.check_box24030.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24030.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24030.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box24030.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24030.call(null,name,null);
});

sablono.core.check_box24030.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24030.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24030.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24030.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24030);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24034 = (function sablono$core$radio_button24034(var_args){
var G__24036 = arguments.length;
switch (G__24036) {
case 1:
return sablono.core.radio_button24034.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24034.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24034.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button24034.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24034.call(null,group,null);
});

sablono.core.radio_button24034.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24034.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24034.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24034.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24034);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24038 = (function sablono$core$select_options24038(coll){
var iter__4523__auto__ = (function sablono$core$select_options24038_$_iter__24039(s__24040){
return (new cljs.core.LazySeq(null,(function (){
var s__24040__$1 = s__24040;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__24040__$1);
if(temp__4657__auto__){
var s__24040__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24040__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__24040__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__24042 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__24041 = (0);
while(true){
if((i__24041 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__24041);
cljs.core.chunk_append.call(null,b__24042,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24043 = x;
var text = cljs.core.nth.call(null,vec__24043,(0),null);
var val = cljs.core.nth.call(null,vec__24043,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24043,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24038.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24049 = (i__24041 + (1));
i__24041 = G__24049;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24042),sablono$core$select_options24038_$_iter__24039.call(null,cljs.core.chunk_rest.call(null,s__24040__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24042),null);
}
} else {
var x = cljs.core.first.call(null,s__24040__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24046 = x;
var text = cljs.core.nth.call(null,vec__24046,(0),null);
var val = cljs.core.nth.call(null,vec__24046,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24046,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options24038.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24038_$_iter__24039.call(null,cljs.core.rest.call(null,s__24040__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24038);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24050 = (function sablono$core$drop_down24050(var_args){
var G__24052 = arguments.length;
switch (G__24052) {
case 2:
return sablono.core.drop_down24050.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24050.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down24050.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24050.call(null,name,options,null);
});

sablono.core.drop_down24050.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24050.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24050);
/**
 * Creates a text area element.
 */
sablono.core.text_area24054 = (function sablono$core$text_area24054(var_args){
var G__24056 = arguments.length;
switch (G__24056) {
case 1:
return sablono.core.text_area24054.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24054.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area24054.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24054.call(null,name,null);
});

sablono.core.text_area24054.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area24054.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24054);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24058 = (function sablono$core$label24058(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24058);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24059 = (function sablono$core$submit_button24059(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24059);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24060 = (function sablono$core$reset_button24060(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24060);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24061 = (function sablono$core$form_to24061(var_args){
var args__4736__auto__ = [];
var len__4730__auto___24068 = arguments.length;
var i__4731__auto___24069 = (0);
while(true){
if((i__4731__auto___24069 < len__4730__auto___24068)){
args__4736__auto__.push((arguments[i__4731__auto___24069]));

var G__24070 = (i__4731__auto___24069 + (1));
i__4731__auto___24069 = G__24070;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to24061.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to24061.cljs$core$IFn$_invoke$arity$variadic = (function (p__24064,body){
var vec__24065 = p__24064;
var method = cljs.core.nth.call(null,vec__24065,(0),null);
var action = cljs.core.nth.call(null,vec__24065,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24061.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to24061.cljs$lang$applyTo = (function (seq24062){
var G__24063 = cljs.core.first.call(null,seq24062);
var seq24062__$1 = cljs.core.next.call(null,seq24062);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24063,seq24062__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24061);

//# sourceMappingURL=core.js.map?rel=1569276392067
