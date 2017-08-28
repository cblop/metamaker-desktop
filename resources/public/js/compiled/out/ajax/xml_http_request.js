// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7691,handler){
var map__7692 = p__7691;
var map__7692__$1 = ((((!((map__7692 == null)))?((((map__7692.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7692.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7692):map__7692);
var uri = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__7692__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__7692,map__7692__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__7690_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__7690_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__7692,map__7692__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___7704 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___7704)){
var response_type_7705 = temp__4657__auto___7704;
this$__$1.responseType = cljs.core.name.call(null,response_type_7705);
} else {
}

var seq__7694_7706 = cljs.core.seq.call(null,headers);
var chunk__7695_7707 = null;
var count__7696_7708 = (0);
var i__7697_7709 = (0);
while(true){
if((i__7697_7709 < count__7696_7708)){
var vec__7698_7710 = cljs.core._nth.call(null,chunk__7695_7707,i__7697_7709);
var k_7711 = cljs.core.nth.call(null,vec__7698_7710,(0),null);
var v_7712 = cljs.core.nth.call(null,vec__7698_7710,(1),null);
this$__$1.setRequestHeader(k_7711,v_7712);

var G__7713 = seq__7694_7706;
var G__7714 = chunk__7695_7707;
var G__7715 = count__7696_7708;
var G__7716 = (i__7697_7709 + (1));
seq__7694_7706 = G__7713;
chunk__7695_7707 = G__7714;
count__7696_7708 = G__7715;
i__7697_7709 = G__7716;
continue;
} else {
var temp__4657__auto___7717 = cljs.core.seq.call(null,seq__7694_7706);
if(temp__4657__auto___7717){
var seq__7694_7718__$1 = temp__4657__auto___7717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7694_7718__$1)){
var c__7228__auto___7719 = cljs.core.chunk_first.call(null,seq__7694_7718__$1);
var G__7720 = cljs.core.chunk_rest.call(null,seq__7694_7718__$1);
var G__7721 = c__7228__auto___7719;
var G__7722 = cljs.core.count.call(null,c__7228__auto___7719);
var G__7723 = (0);
seq__7694_7706 = G__7720;
chunk__7695_7707 = G__7721;
count__7696_7708 = G__7722;
i__7697_7709 = G__7723;
continue;
} else {
var vec__7701_7724 = cljs.core.first.call(null,seq__7694_7718__$1);
var k_7725 = cljs.core.nth.call(null,vec__7701_7724,(0),null);
var v_7726 = cljs.core.nth.call(null,vec__7701_7724,(1),null);
this$__$1.setRequestHeader(k_7725,v_7726);

var G__7727 = cljs.core.next.call(null,seq__7694_7718__$1);
var G__7728 = null;
var G__7729 = (0);
var G__7730 = (0);
seq__7694_7706 = G__7727;
chunk__7695_7707 = G__7728;
count__7696_7708 = G__7729;
i__7697_7709 = G__7730;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6417__auto__ = body;
if(cljs.core.truth_(or__6417__auto__)){
return or__6417__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1502809957414