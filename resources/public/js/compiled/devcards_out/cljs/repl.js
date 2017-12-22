// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36484){
var map__36509 = p__36484;
var map__36509__$1 = ((((!((map__36509 == null)))?((((map__36509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36509):map__36509);
var m = map__36509__$1;
var n = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36509__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36511_36533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36512_36534 = null;
var count__36513_36535 = (0);
var i__36514_36536 = (0);
while(true){
if((i__36514_36536 < count__36513_36535)){
var f_36537 = cljs.core._nth.call(null,chunk__36512_36534,i__36514_36536);
cljs.core.println.call(null,"  ",f_36537);

var G__36538 = seq__36511_36533;
var G__36539 = chunk__36512_36534;
var G__36540 = count__36513_36535;
var G__36541 = (i__36514_36536 + (1));
seq__36511_36533 = G__36538;
chunk__36512_36534 = G__36539;
count__36513_36535 = G__36540;
i__36514_36536 = G__36541;
continue;
} else {
var temp__4657__auto___36542 = cljs.core.seq.call(null,seq__36511_36533);
if(temp__4657__auto___36542){
var seq__36511_36543__$1 = temp__4657__auto___36542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36511_36543__$1)){
var c__25645__auto___36544 = cljs.core.chunk_first.call(null,seq__36511_36543__$1);
var G__36545 = cljs.core.chunk_rest.call(null,seq__36511_36543__$1);
var G__36546 = c__25645__auto___36544;
var G__36547 = cljs.core.count.call(null,c__25645__auto___36544);
var G__36548 = (0);
seq__36511_36533 = G__36545;
chunk__36512_36534 = G__36546;
count__36513_36535 = G__36547;
i__36514_36536 = G__36548;
continue;
} else {
var f_36549 = cljs.core.first.call(null,seq__36511_36543__$1);
cljs.core.println.call(null,"  ",f_36549);

var G__36550 = cljs.core.next.call(null,seq__36511_36543__$1);
var G__36551 = null;
var G__36552 = (0);
var G__36553 = (0);
seq__36511_36533 = G__36550;
chunk__36512_36534 = G__36551;
count__36513_36535 = G__36552;
i__36514_36536 = G__36553;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36554 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24834__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36554);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36554)))?cljs.core.second.call(null,arglists_36554):arglists_36554));
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
var seq__36515_36555 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36516_36556 = null;
var count__36517_36557 = (0);
var i__36518_36558 = (0);
while(true){
if((i__36518_36558 < count__36517_36557)){
var vec__36519_36559 = cljs.core._nth.call(null,chunk__36516_36556,i__36518_36558);
var name_36560 = cljs.core.nth.call(null,vec__36519_36559,(0),null);
var map__36522_36561 = cljs.core.nth.call(null,vec__36519_36559,(1),null);
var map__36522_36562__$1 = ((((!((map__36522_36561 == null)))?((((map__36522_36561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36522_36561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36522_36561):map__36522_36561);
var doc_36563 = cljs.core.get.call(null,map__36522_36562__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36564 = cljs.core.get.call(null,map__36522_36562__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36560);

cljs.core.println.call(null," ",arglists_36564);

if(cljs.core.truth_(doc_36563)){
cljs.core.println.call(null," ",doc_36563);
} else {
}

var G__36565 = seq__36515_36555;
var G__36566 = chunk__36516_36556;
var G__36567 = count__36517_36557;
var G__36568 = (i__36518_36558 + (1));
seq__36515_36555 = G__36565;
chunk__36516_36556 = G__36566;
count__36517_36557 = G__36567;
i__36518_36558 = G__36568;
continue;
} else {
var temp__4657__auto___36569 = cljs.core.seq.call(null,seq__36515_36555);
if(temp__4657__auto___36569){
var seq__36515_36570__$1 = temp__4657__auto___36569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36515_36570__$1)){
var c__25645__auto___36571 = cljs.core.chunk_first.call(null,seq__36515_36570__$1);
var G__36572 = cljs.core.chunk_rest.call(null,seq__36515_36570__$1);
var G__36573 = c__25645__auto___36571;
var G__36574 = cljs.core.count.call(null,c__25645__auto___36571);
var G__36575 = (0);
seq__36515_36555 = G__36572;
chunk__36516_36556 = G__36573;
count__36517_36557 = G__36574;
i__36518_36558 = G__36575;
continue;
} else {
var vec__36524_36576 = cljs.core.first.call(null,seq__36515_36570__$1);
var name_36577 = cljs.core.nth.call(null,vec__36524_36576,(0),null);
var map__36527_36578 = cljs.core.nth.call(null,vec__36524_36576,(1),null);
var map__36527_36579__$1 = ((((!((map__36527_36578 == null)))?((((map__36527_36578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36527_36578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36527_36578):map__36527_36578);
var doc_36580 = cljs.core.get.call(null,map__36527_36579__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36581 = cljs.core.get.call(null,map__36527_36579__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36577);

cljs.core.println.call(null," ",arglists_36581);

if(cljs.core.truth_(doc_36580)){
cljs.core.println.call(null," ",doc_36580);
} else {
}

var G__36582 = cljs.core.next.call(null,seq__36515_36570__$1);
var G__36583 = null;
var G__36584 = (0);
var G__36585 = (0);
seq__36515_36555 = G__36582;
chunk__36516_36556 = G__36583;
count__36517_36557 = G__36584;
i__36518_36558 = G__36585;
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

var seq__36529 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36530 = null;
var count__36531 = (0);
var i__36532 = (0);
while(true){
if((i__36532 < count__36531)){
var role = cljs.core._nth.call(null,chunk__36530,i__36532);
var temp__4657__auto___36586__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36586__$1)){
var spec_36587 = temp__4657__auto___36586__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36587));
} else {
}

var G__36588 = seq__36529;
var G__36589 = chunk__36530;
var G__36590 = count__36531;
var G__36591 = (i__36532 + (1));
seq__36529 = G__36588;
chunk__36530 = G__36589;
count__36531 = G__36590;
i__36532 = G__36591;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36529);
if(temp__4657__auto____$1){
var seq__36529__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36529__$1)){
var c__25645__auto__ = cljs.core.chunk_first.call(null,seq__36529__$1);
var G__36592 = cljs.core.chunk_rest.call(null,seq__36529__$1);
var G__36593 = c__25645__auto__;
var G__36594 = cljs.core.count.call(null,c__25645__auto__);
var G__36595 = (0);
seq__36529 = G__36592;
chunk__36530 = G__36593;
count__36531 = G__36594;
i__36532 = G__36595;
continue;
} else {
var role = cljs.core.first.call(null,seq__36529__$1);
var temp__4657__auto___36596__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36596__$2)){
var spec_36597 = temp__4657__auto___36596__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36597));
} else {
}

var G__36598 = cljs.core.next.call(null,seq__36529__$1);
var G__36599 = null;
var G__36600 = (0);
var G__36601 = (0);
seq__36529 = G__36598;
chunk__36530 = G__36599;
count__36531 = G__36600;
i__36532 = G__36601;
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

//# sourceMappingURL=repl.js.map?rel=1513979291743