// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__9583,handler){
var map__9584 = p__9583;
var map__9584__$1 = ((((!((map__9584 == null)))?((((map__9584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9584):map__9584);
var uri = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__9584__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__9584,map__9584__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__9582_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__9582_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__9584,map__9584__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___9596 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___9596)){
var response_type_9597 = temp__4657__auto___9596;
this$__$1.responseType = cljs.core.name.call(null,response_type_9597);
} else {
}

var seq__9586_9598 = cljs.core.seq.call(null,headers);
var chunk__9587_9599 = null;
var count__9588_9600 = (0);
var i__9589_9601 = (0);
while(true){
if((i__9589_9601 < count__9588_9600)){
var vec__9590_9602 = cljs.core._nth.call(null,chunk__9587_9599,i__9589_9601);
var k_9603 = cljs.core.nth.call(null,vec__9590_9602,(0),null);
var v_9604 = cljs.core.nth.call(null,vec__9590_9602,(1),null);
this$__$1.setRequestHeader(k_9603,v_9604);

var G__9605 = seq__9586_9598;
var G__9606 = chunk__9587_9599;
var G__9607 = count__9588_9600;
var G__9608 = (i__9589_9601 + (1));
seq__9586_9598 = G__9605;
chunk__9587_9599 = G__9606;
count__9588_9600 = G__9607;
i__9589_9601 = G__9608;
continue;
} else {
var temp__4657__auto___9609 = cljs.core.seq.call(null,seq__9586_9598);
if(temp__4657__auto___9609){
var seq__9586_9610__$1 = temp__4657__auto___9609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9586_9610__$1)){
var c__7228__auto___9611 = cljs.core.chunk_first.call(null,seq__9586_9610__$1);
var G__9612 = cljs.core.chunk_rest.call(null,seq__9586_9610__$1);
var G__9613 = c__7228__auto___9611;
var G__9614 = cljs.core.count.call(null,c__7228__auto___9611);
var G__9615 = (0);
seq__9586_9598 = G__9612;
chunk__9587_9599 = G__9613;
count__9588_9600 = G__9614;
i__9589_9601 = G__9615;
continue;
} else {
var vec__9593_9616 = cljs.core.first.call(null,seq__9586_9610__$1);
var k_9617 = cljs.core.nth.call(null,vec__9593_9616,(0),null);
var v_9618 = cljs.core.nth.call(null,vec__9593_9616,(1),null);
this$__$1.setRequestHeader(k_9617,v_9618);

var G__9619 = cljs.core.next.call(null,seq__9586_9610__$1);
var G__9620 = null;
var G__9621 = (0);
var G__9622 = (0);
seq__9586_9598 = G__9619;
chunk__9587_9599 = G__9620;
count__9588_9600 = G__9621;
i__9589_9601 = G__9622;
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

//# sourceMappingURL=xml_http_request.js.map?rel=1505229166619