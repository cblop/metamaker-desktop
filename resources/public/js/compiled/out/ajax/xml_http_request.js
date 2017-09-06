// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__28015,handler){
var map__28016 = p__28015;
var map__28016__$1 = ((((!((map__28016 == null)))?((((map__28016.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28016.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28016):map__28016);
var uri = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__28016__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__28016,map__28016__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__28014_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__28014_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__28016,map__28016__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___28028 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___28028)){
var response_type_28029 = temp__4657__auto___28028;
this$__$1.responseType = cljs.core.name.call(null,response_type_28029);
} else {
}

var seq__28018_28030 = cljs.core.seq.call(null,headers);
var chunk__28019_28031 = null;
var count__28020_28032 = (0);
var i__28021_28033 = (0);
while(true){
if((i__28021_28033 < count__28020_28032)){
var vec__28022_28034 = cljs.core._nth.call(null,chunk__28019_28031,i__28021_28033);
var k_28035 = cljs.core.nth.call(null,vec__28022_28034,(0),null);
var v_28036 = cljs.core.nth.call(null,vec__28022_28034,(1),null);
this$__$1.setRequestHeader(k_28035,v_28036);

var G__28037 = seq__28018_28030;
var G__28038 = chunk__28019_28031;
var G__28039 = count__28020_28032;
var G__28040 = (i__28021_28033 + (1));
seq__28018_28030 = G__28037;
chunk__28019_28031 = G__28038;
count__28020_28032 = G__28039;
i__28021_28033 = G__28040;
continue;
} else {
var temp__4657__auto___28041 = cljs.core.seq.call(null,seq__28018_28030);
if(temp__4657__auto___28041){
var seq__28018_28042__$1 = temp__4657__auto___28041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28018_28042__$1)){
var c__25907__auto___28043 = cljs.core.chunk_first.call(null,seq__28018_28042__$1);
var G__28044 = cljs.core.chunk_rest.call(null,seq__28018_28042__$1);
var G__28045 = c__25907__auto___28043;
var G__28046 = cljs.core.count.call(null,c__25907__auto___28043);
var G__28047 = (0);
seq__28018_28030 = G__28044;
chunk__28019_28031 = G__28045;
count__28020_28032 = G__28046;
i__28021_28033 = G__28047;
continue;
} else {
var vec__28025_28048 = cljs.core.first.call(null,seq__28018_28042__$1);
var k_28049 = cljs.core.nth.call(null,vec__28025_28048,(0),null);
var v_28050 = cljs.core.nth.call(null,vec__28025_28048,(1),null);
this$__$1.setRequestHeader(k_28049,v_28050);

var G__28051 = cljs.core.next.call(null,seq__28018_28042__$1);
var G__28052 = null;
var G__28053 = (0);
var G__28054 = (0);
seq__28018_28030 = G__28051;
chunk__28019_28031 = G__28052;
count__28020_28032 = G__28053;
i__28021_28033 = G__28054;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25096__auto__ = body;
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1504172196164