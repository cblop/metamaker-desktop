// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46656){
var map__46681 = p__46656;
var map__46681__$1 = ((((!((map__46681 == null)))?((((map__46681.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46681.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46681):map__46681);
var m = map__46681__$1;
var n = cljs.core.get.call(null,map__46681__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46681__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46683_46705 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46684_46706 = null;
var count__46685_46707 = (0);
var i__46686_46708 = (0);
while(true){
if((i__46686_46708 < count__46685_46707)){
var f_46709 = cljs.core._nth.call(null,chunk__46684_46706,i__46686_46708);
cljs.core.println.call(null,"  ",f_46709);

var G__46710 = seq__46683_46705;
var G__46711 = chunk__46684_46706;
var G__46712 = count__46685_46707;
var G__46713 = (i__46686_46708 + (1));
seq__46683_46705 = G__46710;
chunk__46684_46706 = G__46711;
count__46685_46707 = G__46712;
i__46686_46708 = G__46713;
continue;
} else {
var temp__4657__auto___46714 = cljs.core.seq.call(null,seq__46683_46705);
if(temp__4657__auto___46714){
var seq__46683_46715__$1 = temp__4657__auto___46714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46683_46715__$1)){
var c__25907__auto___46716 = cljs.core.chunk_first.call(null,seq__46683_46715__$1);
var G__46717 = cljs.core.chunk_rest.call(null,seq__46683_46715__$1);
var G__46718 = c__25907__auto___46716;
var G__46719 = cljs.core.count.call(null,c__25907__auto___46716);
var G__46720 = (0);
seq__46683_46705 = G__46717;
chunk__46684_46706 = G__46718;
count__46685_46707 = G__46719;
i__46686_46708 = G__46720;
continue;
} else {
var f_46721 = cljs.core.first.call(null,seq__46683_46715__$1);
cljs.core.println.call(null,"  ",f_46721);

var G__46722 = cljs.core.next.call(null,seq__46683_46715__$1);
var G__46723 = null;
var G__46724 = (0);
var G__46725 = (0);
seq__46683_46705 = G__46722;
chunk__46684_46706 = G__46723;
count__46685_46707 = G__46724;
i__46686_46708 = G__46725;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46726 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25096__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25096__auto__)){
return or__25096__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46726);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46726)))?cljs.core.second.call(null,arglists_46726):arglists_46726));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__46687_46727 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46688_46728 = null;
var count__46689_46729 = (0);
var i__46690_46730 = (0);
while(true){
if((i__46690_46730 < count__46689_46729)){
var vec__46691_46731 = cljs.core._nth.call(null,chunk__46688_46728,i__46690_46730);
var name_46732 = cljs.core.nth.call(null,vec__46691_46731,(0),null);
var map__46694_46733 = cljs.core.nth.call(null,vec__46691_46731,(1),null);
var map__46694_46734__$1 = ((((!((map__46694_46733 == null)))?((((map__46694_46733.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46694_46733.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46694_46733):map__46694_46733);
var doc_46735 = cljs.core.get.call(null,map__46694_46734__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46736 = cljs.core.get.call(null,map__46694_46734__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46732);

cljs.core.println.call(null," ",arglists_46736);

if(cljs.core.truth_(doc_46735)){
cljs.core.println.call(null," ",doc_46735);
} else {
}

var G__46737 = seq__46687_46727;
var G__46738 = chunk__46688_46728;
var G__46739 = count__46689_46729;
var G__46740 = (i__46690_46730 + (1));
seq__46687_46727 = G__46737;
chunk__46688_46728 = G__46738;
count__46689_46729 = G__46739;
i__46690_46730 = G__46740;
continue;
} else {
var temp__4657__auto___46741 = cljs.core.seq.call(null,seq__46687_46727);
if(temp__4657__auto___46741){
var seq__46687_46742__$1 = temp__4657__auto___46741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46687_46742__$1)){
var c__25907__auto___46743 = cljs.core.chunk_first.call(null,seq__46687_46742__$1);
var G__46744 = cljs.core.chunk_rest.call(null,seq__46687_46742__$1);
var G__46745 = c__25907__auto___46743;
var G__46746 = cljs.core.count.call(null,c__25907__auto___46743);
var G__46747 = (0);
seq__46687_46727 = G__46744;
chunk__46688_46728 = G__46745;
count__46689_46729 = G__46746;
i__46690_46730 = G__46747;
continue;
} else {
var vec__46696_46748 = cljs.core.first.call(null,seq__46687_46742__$1);
var name_46749 = cljs.core.nth.call(null,vec__46696_46748,(0),null);
var map__46699_46750 = cljs.core.nth.call(null,vec__46696_46748,(1),null);
var map__46699_46751__$1 = ((((!((map__46699_46750 == null)))?((((map__46699_46750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46699_46750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46699_46750):map__46699_46750);
var doc_46752 = cljs.core.get.call(null,map__46699_46751__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46753 = cljs.core.get.call(null,map__46699_46751__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46749);

cljs.core.println.call(null," ",arglists_46753);

if(cljs.core.truth_(doc_46752)){
cljs.core.println.call(null," ",doc_46752);
} else {
}

var G__46754 = cljs.core.next.call(null,seq__46687_46742__$1);
var G__46755 = null;
var G__46756 = (0);
var G__46757 = (0);
seq__46687_46727 = G__46754;
chunk__46688_46728 = G__46755;
count__46689_46729 = G__46756;
i__46690_46730 = G__46757;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__46701 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46702 = null;
var count__46703 = (0);
var i__46704 = (0);
while(true){
if((i__46704 < count__46703)){
var role = cljs.core._nth.call(null,chunk__46702,i__46704);
var temp__4657__auto___46758__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46758__$1)){
var spec_46759 = temp__4657__auto___46758__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46759));
} else {
}

var G__46760 = seq__46701;
var G__46761 = chunk__46702;
var G__46762 = count__46703;
var G__46763 = (i__46704 + (1));
seq__46701 = G__46760;
chunk__46702 = G__46761;
count__46703 = G__46762;
i__46704 = G__46763;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__46701);
if(temp__4657__auto____$1){
var seq__46701__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46701__$1)){
var c__25907__auto__ = cljs.core.chunk_first.call(null,seq__46701__$1);
var G__46764 = cljs.core.chunk_rest.call(null,seq__46701__$1);
var G__46765 = c__25907__auto__;
var G__46766 = cljs.core.count.call(null,c__25907__auto__);
var G__46767 = (0);
seq__46701 = G__46764;
chunk__46702 = G__46765;
count__46703 = G__46766;
i__46704 = G__46767;
continue;
} else {
var role = cljs.core.first.call(null,seq__46701__$1);
var temp__4657__auto___46768__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___46768__$2)){
var spec_46769 = temp__4657__auto___46768__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_46769));
} else {
}

var G__46770 = cljs.core.next.call(null,seq__46701__$1);
var G__46771 = null;
var G__46772 = (0);
var G__46773 = (0);
seq__46701 = G__46770;
chunk__46702 = G__46771;
count__46703 = G__46772;
i__46704 = G__46773;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1503909846056