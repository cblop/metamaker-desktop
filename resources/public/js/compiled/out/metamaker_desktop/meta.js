// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.meta');
goog.require('cljs.core');
goog.require('re_frame.core');
metamaker_desktop.meta.CSV = "http://www.ntnu.no/ub/data/csv#";
metamaker_desktop.meta.RDFS = "http://www.w3.org/2000/01/rdf-schema#";
metamaker_desktop.meta.DC = "http://purl.org/dc/terms/";
metamaker_desktop.meta.XSD = "http://www.w3.org/2001/XMLSchema#";
metamaker_desktop.meta.NS = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
metamaker_desktop.meta.prefixer = (function metamaker_desktop$meta$prefixer(name,uri){
return [cljs.core.str("@prefix "),cljs.core.str(name),cljs.core.str(":<"),cljs.core.str(uri),cljs.core.str("> .")].join('');
});
metamaker_desktop.meta.column_triples = (function metamaker_desktop$meta$column_triples(columns){
var iter__7197__auto__ = (function metamaker_desktop$meta$column_triples_$_iter__11582(s__11583){
return (new cljs.core.LazySeq(null,(function (){
var s__11583__$1 = s__11583;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11583__$1);
if(temp__4657__auto__){
var s__11583__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11583__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11583__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11585 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11584 = (0);
while(true){
if((i__11584 < size__7196__auto__)){
var i = cljs.core._nth.call(null,c__7195__auto__,i__11584);
cljs.core.chunk_append.call(null,b__11585,(function (){var col = cljs.core.nth.call(null,columns,i);
return [cljs.core.str(":column"),cljs.core.str(i),cljs.core.str(" a csv:Column ;\n"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col))?[cljs.core.str("  rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("\" ;\n")].join(''):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = ((function (i__11584,col,i,c__7195__auto__,size__7196__auto__,b__11585,s__11583__$2,temp__4657__auto__){
return (function metamaker_desktop$meta$column_triples_$_iter__11582_$_iter__11594(s__11595){
return (new cljs.core.LazySeq(null,((function (i__11584,col,i,c__7195__auto__,size__7196__auto__,b__11585,s__11583__$2,temp__4657__auto__){
return (function (){
var s__11595__$1 = s__11595;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11595__$1);
if(temp__4657__auto____$1){
var s__11595__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11595__$2)){
var c__7195__auto____$1 = cljs.core.chunk_first.call(null,s__11595__$2);
var size__7196__auto____$1 = cljs.core.count.call(null,c__7195__auto____$1);
var b__11597 = cljs.core.chunk_buffer.call(null,size__7196__auto____$1);
if((function (){var i__11596 = (0);
while(true){
if((i__11596 < size__7196__auto____$1)){
var m = cljs.core._nth.call(null,c__7195__auto____$1,i__11596);
cljs.core.chunk_append.call(null,b__11597,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})());

var G__11602 = (i__11596 + (1));
i__11596 = G__11602;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11597),metamaker_desktop$meta$column_triples_$_iter__11582_$_iter__11594.call(null,cljs.core.chunk_rest.call(null,s__11595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11597),null);
}
} else {
var m = cljs.core.first.call(null,s__11595__$2);
return cljs.core.cons.call(null,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})(),metamaker_desktop$meta$column_triples_$_iter__11582_$_iter__11594.call(null,cljs.core.rest.call(null,s__11595__$2)));
}
} else {
return null;
}
break;
}
});})(i__11584,col,i,c__7195__auto__,size__7196__auto__,b__11585,s__11583__$2,temp__4657__auto__))
,null,null));
});})(i__11584,col,i,c__7195__auto__,size__7196__auto__,b__11585,s__11583__$2,temp__4657__auto__))
;
return iter__7197__auto__.call(null,col);
})())),cljs.core.str("  csv:hasIndex \""),cljs.core.str(i),cljs.core.str("\" .\n\n")].join('');
})());

var G__11603 = (i__11584 + (1));
i__11584 = G__11603;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11585),metamaker_desktop$meta$column_triples_$_iter__11582.call(null,cljs.core.chunk_rest.call(null,s__11583__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11585),null);
}
} else {
var i = cljs.core.first.call(null,s__11583__$2);
return cljs.core.cons.call(null,(function (){var col = cljs.core.nth.call(null,columns,i);
return [cljs.core.str(":column"),cljs.core.str(i),cljs.core.str(" a csv:Column ;\n"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col))?[cljs.core.str("  rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(col)),cljs.core.str("\" ;\n")].join(''):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = ((function (col,i,s__11583__$2,temp__4657__auto__){
return (function metamaker_desktop$meta$column_triples_$_iter__11582_$_iter__11598(s__11599){
return (new cljs.core.LazySeq(null,((function (col,i,s__11583__$2,temp__4657__auto__){
return (function (){
var s__11599__$1 = s__11599;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__11599__$1);
if(temp__4657__auto____$1){
var s__11599__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11599__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11599__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11601 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11600 = (0);
while(true){
if((i__11600 < size__7196__auto__)){
var m = cljs.core._nth.call(null,c__7195__auto__,i__11600);
cljs.core.chunk_append.call(null,b__11601,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})());

var G__11604 = (i__11600 + (1));
i__11600 = G__11604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11601),metamaker_desktop$meta$column_triples_$_iter__11582_$_iter__11598.call(null,cljs.core.chunk_rest.call(null,s__11599__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11601),null);
}
} else {
var m = cljs.core.first.call(null,s__11599__$2);
return cljs.core.cons.call(null,(function (){var p = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p-for-meta","p-for-meta",1580525990),m], null));
if(cljs.core.truth_(cljs.core.deref.call(null,p))){
return [cljs.core.str("  csv:mapsTo "),cljs.core.str(cljs.core.deref.call(null,p)),cljs.core.str(" ;\n")].join('');
} else {
return m;
}
})(),metamaker_desktop$meta$column_triples_$_iter__11582_$_iter__11598.call(null,cljs.core.rest.call(null,s__11599__$2)));
}
} else {
return null;
}
break;
}
});})(col,i,s__11583__$2,temp__4657__auto__))
,null,null));
});})(col,i,s__11583__$2,temp__4657__auto__))
;
return iter__7197__auto__.call(null,col);
})())),cljs.core.str("  csv:hasIndex \""),cljs.core.str(i),cljs.core.str("\" .\n\n")].join('');
})(),metamaker_desktop$meta$column_triples_$_iter__11582.call(null,cljs.core.rest.call(null,s__11583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,columns)));
});
metamaker_desktop.meta.make_triples = (function metamaker_desktop$meta$make_triples(hmap){
var blank = metamaker_desktop.meta.prefixer.call(null," ",metamaker_desktop.meta.NS);
var csv = metamaker_desktop.meta.prefixer.call(null,"csv",metamaker_desktop.meta.CSV);
var rdfs = metamaker_desktop.meta.prefixer.call(null,"rdfs",metamaker_desktop.meta.RDFS);
var dcterms = metamaker_desktop.meta.prefixer.call(null,"dcterms",metamaker_desktop.meta.DC);
var xsd = metamaker_desktop.meta.prefixer.call(null,"xsd",metamaker_desktop.meta.XSD);
var seas = metamaker_desktop.meta.prefixer.call(null,"seas","https://w3id.org/seas#");
var dm4t = metamaker_desktop.meta.prefixer.call(null,"dm4t","http://www.cs.bath.ac.uk/dm4t#");
var ssn = metamaker_desktop.meta.prefixer.call(null,"ssn","http://purl.oclc.org/NET/ssnx/ssn#");
var prefix = [cljs.core.str("@prefix: <http://www.cs.bath.ac.uk/dm4t/dataset/"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("/> .")].join('');
return cljs.core.apply.call(null,cljs.core.str,new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, [prefix,"\n",csv,"\n",dm4t,"\n",rdfs,"\n",dcterms,"\n",xsd,"\n",seas,"\n",ssn,"\n","\n\n",[cljs.core.str("<"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("> a csv:CsvDocument ;\n")].join(''),[cljs.core.str("  rdfs:label \""),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("\" ;\n")].join(''),[cljs.core.str("  rdfs:comment \""),cljs.core.str(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(hmap)),cljs.core.str("\" ;\n")].join(''),cljs.core.apply.call(null,cljs.core.str,(function (){var iter__7197__auto__ = ((function (blank,csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix){
return (function metamaker_desktop$meta$make_triples_$_iter__11609(s__11610){
return (new cljs.core.LazySeq(null,((function (blank,csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix){
return (function (){
var s__11610__$1 = s__11610;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11610__$1);
if(temp__4657__auto__){
var s__11610__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11610__$2)){
var c__7195__auto__ = cljs.core.chunk_first.call(null,s__11610__$2);
var size__7196__auto__ = cljs.core.count.call(null,c__7195__auto__);
var b__11612 = cljs.core.chunk_buffer.call(null,size__7196__auto__);
if((function (){var i__11611 = (0);
while(true){
if((i__11611 < size__7196__auto__)){
var i = cljs.core._nth.call(null,c__7195__auto__,i__11611);
cljs.core.chunk_append.call(null,b__11612,[cljs.core.str("  csv:hasColumn :column"),cljs.core.str(i),cljs.core.str(((cljs.core._EQ_.call(null,i,(cljs.core.count.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap)) - (1))))?" .\n\n":" ;\n"))].join(''));

var G__11613 = (i__11611 + (1));
i__11611 = G__11613;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11612),metamaker_desktop$meta$make_triples_$_iter__11609.call(null,cljs.core.chunk_rest.call(null,s__11610__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11612),null);
}
} else {
var i = cljs.core.first.call(null,s__11610__$2);
return cljs.core.cons.call(null,[cljs.core.str("  csv:hasColumn :column"),cljs.core.str(i),cljs.core.str(((cljs.core._EQ_.call(null,i,(cljs.core.count.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap)) - (1))))?" .\n\n":" ;\n"))].join(''),metamaker_desktop$meta$make_triples_$_iter__11609.call(null,cljs.core.rest.call(null,s__11610__$2)));
}
} else {
return null;
}
break;
}
});})(blank,csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix))
,null,null));
});})(blank,csv,rdfs,dcterms,xsd,seas,dm4t,ssn,prefix))
;
return iter__7197__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap))));
})()),cljs.core.apply.call(null,cljs.core.str,metamaker_desktop.meta.column_triples.call(null,new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(hmap)))], null));
});

//# sourceMappingURL=meta.js.map?rel=1502809969679