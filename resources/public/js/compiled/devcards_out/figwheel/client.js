// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args36923 = [];
var len__25909__auto___36926 = arguments.length;
var i__25910__auto___36927 = (0);
while(true){
if((i__25910__auto___36927 < len__25909__auto___36926)){
args36923.push((arguments[i__25910__auto___36927]));

var G__36928 = (i__25910__auto___36927 + (1));
i__25910__auto___36927 = G__36928;
continue;
} else {
}
break;
}

var G__36925 = args36923.length;
switch (G__36925) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36923.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25916__auto__ = [];
var len__25909__auto___36931 = arguments.length;
var i__25910__auto___36932 = (0);
while(true){
if((i__25910__auto___36932 < len__25909__auto___36931)){
args__25916__auto__.push((arguments[i__25910__auto___36932]));

var G__36933 = (i__25910__auto___36932 + (1));
i__25910__auto___36932 = G__36933;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36930){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36930));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25916__auto__ = [];
var len__25909__auto___36935 = arguments.length;
var i__25910__auto___36936 = (0);
while(true){
if((i__25910__auto___36936 < len__25909__auto___36935)){
args__25916__auto__.push((arguments[i__25910__auto___36936]));

var G__36937 = (i__25910__auto___36936 + (1));
i__25910__auto___36936 = G__36937;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36934){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36934));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36938){
var map__36941 = p__36938;
var map__36941__$1 = ((((!((map__36941 == null)))?((((map__36941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36941):map__36941);
var message = cljs.core.get.call(null,map__36941__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36941__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24834__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24834__auto__)){
return or__24834__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24822__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24822__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24822__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__29906__auto___37103 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___37103,ch){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___37103,ch){
return (function (state_37072){
var state_val_37073 = (state_37072[(1)]);
if((state_val_37073 === (7))){
var inst_37068 = (state_37072[(2)]);
var state_37072__$1 = state_37072;
var statearr_37074_37104 = state_37072__$1;
(statearr_37074_37104[(2)] = inst_37068);

(statearr_37074_37104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (1))){
var state_37072__$1 = state_37072;
var statearr_37075_37105 = state_37072__$1;
(statearr_37075_37105[(2)] = null);

(statearr_37075_37105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (4))){
var inst_37025 = (state_37072[(7)]);
var inst_37025__$1 = (state_37072[(2)]);
var state_37072__$1 = (function (){var statearr_37076 = state_37072;
(statearr_37076[(7)] = inst_37025__$1);

return statearr_37076;
})();
if(cljs.core.truth_(inst_37025__$1)){
var statearr_37077_37106 = state_37072__$1;
(statearr_37077_37106[(1)] = (5));

} else {
var statearr_37078_37107 = state_37072__$1;
(statearr_37078_37107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (15))){
var inst_37032 = (state_37072[(8)]);
var inst_37047 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37032);
var inst_37048 = cljs.core.first.call(null,inst_37047);
var inst_37049 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37048);
var inst_37050 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_37049)].join('');
var inst_37051 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37050);
var state_37072__$1 = state_37072;
var statearr_37079_37108 = state_37072__$1;
(statearr_37079_37108[(2)] = inst_37051);

(statearr_37079_37108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (13))){
var inst_37056 = (state_37072[(2)]);
var state_37072__$1 = state_37072;
var statearr_37080_37109 = state_37072__$1;
(statearr_37080_37109[(2)] = inst_37056);

(statearr_37080_37109[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (6))){
var state_37072__$1 = state_37072;
var statearr_37081_37110 = state_37072__$1;
(statearr_37081_37110[(2)] = null);

(statearr_37081_37110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (17))){
var inst_37054 = (state_37072[(2)]);
var state_37072__$1 = state_37072;
var statearr_37082_37111 = state_37072__$1;
(statearr_37082_37111[(2)] = inst_37054);

(statearr_37082_37111[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (3))){
var inst_37070 = (state_37072[(2)]);
var state_37072__$1 = state_37072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37072__$1,inst_37070);
} else {
if((state_val_37073 === (12))){
var inst_37031 = (state_37072[(9)]);
var inst_37045 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37031,opts);
var state_37072__$1 = state_37072;
if(cljs.core.truth_(inst_37045)){
var statearr_37083_37112 = state_37072__$1;
(statearr_37083_37112[(1)] = (15));

} else {
var statearr_37084_37113 = state_37072__$1;
(statearr_37084_37113[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (2))){
var state_37072__$1 = state_37072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37072__$1,(4),ch);
} else {
if((state_val_37073 === (11))){
var inst_37032 = (state_37072[(8)]);
var inst_37037 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37038 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37032);
var inst_37039 = cljs.core.async.timeout.call(null,(1000));
var inst_37040 = [inst_37038,inst_37039];
var inst_37041 = (new cljs.core.PersistentVector(null,2,(5),inst_37037,inst_37040,null));
var state_37072__$1 = state_37072;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37072__$1,(14),inst_37041);
} else {
if((state_val_37073 === (9))){
var inst_37032 = (state_37072[(8)]);
var inst_37058 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37059 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37032);
var inst_37060 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37059);
var inst_37061 = [cljs.core.str("Not loading: "),cljs.core.str(inst_37060)].join('');
var inst_37062 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37061);
var state_37072__$1 = (function (){var statearr_37085 = state_37072;
(statearr_37085[(10)] = inst_37058);

return statearr_37085;
})();
var statearr_37086_37114 = state_37072__$1;
(statearr_37086_37114[(2)] = inst_37062);

(statearr_37086_37114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (5))){
var inst_37025 = (state_37072[(7)]);
var inst_37027 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37028 = (new cljs.core.PersistentArrayMap(null,2,inst_37027,null));
var inst_37029 = (new cljs.core.PersistentHashSet(null,inst_37028,null));
var inst_37030 = figwheel.client.focus_msgs.call(null,inst_37029,inst_37025);
var inst_37031 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37030);
var inst_37032 = cljs.core.first.call(null,inst_37030);
var inst_37033 = figwheel.client.autoload_QMARK_.call(null);
var state_37072__$1 = (function (){var statearr_37087 = state_37072;
(statearr_37087[(8)] = inst_37032);

(statearr_37087[(9)] = inst_37031);

return statearr_37087;
})();
if(cljs.core.truth_(inst_37033)){
var statearr_37088_37115 = state_37072__$1;
(statearr_37088_37115[(1)] = (8));

} else {
var statearr_37089_37116 = state_37072__$1;
(statearr_37089_37116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (14))){
var inst_37043 = (state_37072[(2)]);
var state_37072__$1 = state_37072;
var statearr_37090_37117 = state_37072__$1;
(statearr_37090_37117[(2)] = inst_37043);

(statearr_37090_37117[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (16))){
var state_37072__$1 = state_37072;
var statearr_37091_37118 = state_37072__$1;
(statearr_37091_37118[(2)] = null);

(statearr_37091_37118[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (10))){
var inst_37064 = (state_37072[(2)]);
var state_37072__$1 = (function (){var statearr_37092 = state_37072;
(statearr_37092[(11)] = inst_37064);

return statearr_37092;
})();
var statearr_37093_37119 = state_37072__$1;
(statearr_37093_37119[(2)] = null);

(statearr_37093_37119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37073 === (8))){
var inst_37031 = (state_37072[(9)]);
var inst_37035 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37031,opts);
var state_37072__$1 = state_37072;
if(cljs.core.truth_(inst_37035)){
var statearr_37094_37120 = state_37072__$1;
(statearr_37094_37120[(1)] = (11));

} else {
var statearr_37095_37121 = state_37072__$1;
(statearr_37095_37121[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29906__auto___37103,ch))
;
return ((function (switch__29794__auto__,c__29906__auto___37103,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__29795__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__29795__auto____0 = (function (){
var statearr_37099 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37099[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__29795__auto__);

(statearr_37099[(1)] = (1));

return statearr_37099;
});
var figwheel$client$file_reloader_plugin_$_state_machine__29795__auto____1 = (function (state_37072){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_37072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e37100){if((e37100 instanceof Object)){
var ex__29798__auto__ = e37100;
var statearr_37101_37122 = state_37072;
(statearr_37101_37122[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37123 = state_37072;
state_37072 = G__37123;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__29795__auto__ = function(state_37072){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__29795__auto____1.call(this,state_37072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__29795__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__29795__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___37103,ch))
})();
var state__29908__auto__ = (function (){var statearr_37102 = f__29907__auto__.call(null);
(statearr_37102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___37103);

return statearr_37102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___37103,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37124_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37124_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_37127 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37127){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37126){if((e37126 instanceof Error)){
var e = e37126;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37127], null));
} else {
var e = e37126;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37127))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37128){
var map__37137 = p__37128;
var map__37137__$1 = ((((!((map__37137 == null)))?((((map__37137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37137):map__37137);
var opts = map__37137__$1;
var build_id = cljs.core.get.call(null,map__37137__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37137,map__37137__$1,opts,build_id){
return (function (p__37139){
var vec__37140 = p__37139;
var seq__37141 = cljs.core.seq.call(null,vec__37140);
var first__37142 = cljs.core.first.call(null,seq__37141);
var seq__37141__$1 = cljs.core.next.call(null,seq__37141);
var map__37143 = first__37142;
var map__37143__$1 = ((((!((map__37143 == null)))?((((map__37143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37143):map__37143);
var msg = map__37143__$1;
var msg_name = cljs.core.get.call(null,map__37143__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37141__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37140,seq__37141,first__37142,seq__37141__$1,map__37143,map__37143__$1,msg,msg_name,_,map__37137,map__37137__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37140,seq__37141,first__37142,seq__37141__$1,map__37143,map__37143__$1,msg,msg_name,_,map__37137,map__37137__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37137,map__37137__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37151){
var vec__37152 = p__37151;
var seq__37153 = cljs.core.seq.call(null,vec__37152);
var first__37154 = cljs.core.first.call(null,seq__37153);
var seq__37153__$1 = cljs.core.next.call(null,seq__37153);
var map__37155 = first__37154;
var map__37155__$1 = ((((!((map__37155 == null)))?((((map__37155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37155):map__37155);
var msg = map__37155__$1;
var msg_name = cljs.core.get.call(null,map__37155__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37153__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37157){
var map__37169 = p__37157;
var map__37169__$1 = ((((!((map__37169 == null)))?((((map__37169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37169):map__37169);
var on_compile_warning = cljs.core.get.call(null,map__37169__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37169__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37169,map__37169__$1,on_compile_warning,on_compile_fail){
return (function (p__37171){
var vec__37172 = p__37171;
var seq__37173 = cljs.core.seq.call(null,vec__37172);
var first__37174 = cljs.core.first.call(null,seq__37173);
var seq__37173__$1 = cljs.core.next.call(null,seq__37173);
var map__37175 = first__37174;
var map__37175__$1 = ((((!((map__37175 == null)))?((((map__37175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37175):map__37175);
var msg = map__37175__$1;
var msg_name = cljs.core.get.call(null,map__37175__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37173__$1;
var pred__37177 = cljs.core._EQ_;
var expr__37178 = msg_name;
if(cljs.core.truth_(pred__37177.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37178))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37177.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37178))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37169,map__37169__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__,msg_hist,msg_names,msg){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__,msg_hist,msg_names,msg){
return (function (state_37406){
var state_val_37407 = (state_37406[(1)]);
if((state_val_37407 === (7))){
var inst_37326 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37326)){
var statearr_37408_37458 = state_37406__$1;
(statearr_37408_37458[(1)] = (8));

} else {
var statearr_37409_37459 = state_37406__$1;
(statearr_37409_37459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (20))){
var inst_37400 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37410_37460 = state_37406__$1;
(statearr_37410_37460[(2)] = inst_37400);

(statearr_37410_37460[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (27))){
var inst_37396 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37411_37461 = state_37406__$1;
(statearr_37411_37461[(2)] = inst_37396);

(statearr_37411_37461[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (1))){
var inst_37319 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37319)){
var statearr_37412_37462 = state_37406__$1;
(statearr_37412_37462[(1)] = (2));

} else {
var statearr_37413_37463 = state_37406__$1;
(statearr_37413_37463[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (24))){
var inst_37398 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37414_37464 = state_37406__$1;
(statearr_37414_37464[(2)] = inst_37398);

(statearr_37414_37464[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (4))){
var inst_37404 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37406__$1,inst_37404);
} else {
if((state_val_37407 === (15))){
var inst_37402 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37415_37465 = state_37406__$1;
(statearr_37415_37465[(2)] = inst_37402);

(statearr_37415_37465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (21))){
var inst_37355 = (state_37406[(2)]);
var inst_37356 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37357 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37356);
var state_37406__$1 = (function (){var statearr_37416 = state_37406;
(statearr_37416[(7)] = inst_37355);

return statearr_37416;
})();
var statearr_37417_37466 = state_37406__$1;
(statearr_37417_37466[(2)] = inst_37357);

(statearr_37417_37466[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (31))){
var inst_37385 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37385)){
var statearr_37418_37467 = state_37406__$1;
(statearr_37418_37467[(1)] = (34));

} else {
var statearr_37419_37468 = state_37406__$1;
(statearr_37419_37468[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (32))){
var inst_37394 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37420_37469 = state_37406__$1;
(statearr_37420_37469[(2)] = inst_37394);

(statearr_37420_37469[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (33))){
var inst_37381 = (state_37406[(2)]);
var inst_37382 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37383 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37382);
var state_37406__$1 = (function (){var statearr_37421 = state_37406;
(statearr_37421[(8)] = inst_37381);

return statearr_37421;
})();
var statearr_37422_37470 = state_37406__$1;
(statearr_37422_37470[(2)] = inst_37383);

(statearr_37422_37470[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (13))){
var inst_37340 = figwheel.client.heads_up.clear.call(null);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(16),inst_37340);
} else {
if((state_val_37407 === (22))){
var inst_37361 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37362 = figwheel.client.heads_up.append_warning_message.call(null,inst_37361);
var state_37406__$1 = state_37406;
var statearr_37423_37471 = state_37406__$1;
(statearr_37423_37471[(2)] = inst_37362);

(statearr_37423_37471[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (36))){
var inst_37392 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37424_37472 = state_37406__$1;
(statearr_37424_37472[(2)] = inst_37392);

(statearr_37424_37472[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (29))){
var inst_37372 = (state_37406[(2)]);
var inst_37373 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37374 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37373);
var state_37406__$1 = (function (){var statearr_37425 = state_37406;
(statearr_37425[(9)] = inst_37372);

return statearr_37425;
})();
var statearr_37426_37473 = state_37406__$1;
(statearr_37426_37473[(2)] = inst_37374);

(statearr_37426_37473[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (6))){
var inst_37321 = (state_37406[(10)]);
var state_37406__$1 = state_37406;
var statearr_37427_37474 = state_37406__$1;
(statearr_37427_37474[(2)] = inst_37321);

(statearr_37427_37474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (28))){
var inst_37368 = (state_37406[(2)]);
var inst_37369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37370 = figwheel.client.heads_up.display_warning.call(null,inst_37369);
var state_37406__$1 = (function (){var statearr_37428 = state_37406;
(statearr_37428[(11)] = inst_37368);

return statearr_37428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(29),inst_37370);
} else {
if((state_val_37407 === (25))){
var inst_37366 = figwheel.client.heads_up.clear.call(null);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(28),inst_37366);
} else {
if((state_val_37407 === (34))){
var inst_37387 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(37),inst_37387);
} else {
if((state_val_37407 === (17))){
var inst_37346 = (state_37406[(2)]);
var inst_37347 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37348 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37347);
var state_37406__$1 = (function (){var statearr_37429 = state_37406;
(statearr_37429[(12)] = inst_37346);

return statearr_37429;
})();
var statearr_37430_37475 = state_37406__$1;
(statearr_37430_37475[(2)] = inst_37348);

(statearr_37430_37475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (3))){
var inst_37338 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37338)){
var statearr_37431_37476 = state_37406__$1;
(statearr_37431_37476[(1)] = (13));

} else {
var statearr_37432_37477 = state_37406__$1;
(statearr_37432_37477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (12))){
var inst_37334 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37433_37478 = state_37406__$1;
(statearr_37433_37478[(2)] = inst_37334);

(statearr_37433_37478[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (2))){
var inst_37321 = (state_37406[(10)]);
var inst_37321__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37406__$1 = (function (){var statearr_37434 = state_37406;
(statearr_37434[(10)] = inst_37321__$1);

return statearr_37434;
})();
if(cljs.core.truth_(inst_37321__$1)){
var statearr_37435_37479 = state_37406__$1;
(statearr_37435_37479[(1)] = (5));

} else {
var statearr_37436_37480 = state_37406__$1;
(statearr_37436_37480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (23))){
var inst_37364 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37364)){
var statearr_37437_37481 = state_37406__$1;
(statearr_37437_37481[(1)] = (25));

} else {
var statearr_37438_37482 = state_37406__$1;
(statearr_37438_37482[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (35))){
var state_37406__$1 = state_37406;
var statearr_37439_37483 = state_37406__$1;
(statearr_37439_37483[(2)] = null);

(statearr_37439_37483[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (19))){
var inst_37359 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37359)){
var statearr_37440_37484 = state_37406__$1;
(statearr_37440_37484[(1)] = (22));

} else {
var statearr_37441_37485 = state_37406__$1;
(statearr_37441_37485[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (11))){
var inst_37330 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37442_37486 = state_37406__$1;
(statearr_37442_37486[(2)] = inst_37330);

(statearr_37442_37486[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (9))){
var inst_37332 = figwheel.client.heads_up.clear.call(null);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(12),inst_37332);
} else {
if((state_val_37407 === (5))){
var inst_37323 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37406__$1 = state_37406;
var statearr_37443_37487 = state_37406__$1;
(statearr_37443_37487[(2)] = inst_37323);

(statearr_37443_37487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (14))){
var inst_37350 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37350)){
var statearr_37444_37488 = state_37406__$1;
(statearr_37444_37488[(1)] = (18));

} else {
var statearr_37445_37489 = state_37406__$1;
(statearr_37445_37489[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (26))){
var inst_37376 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37406__$1 = state_37406;
if(cljs.core.truth_(inst_37376)){
var statearr_37446_37490 = state_37406__$1;
(statearr_37446_37490[(1)] = (30));

} else {
var statearr_37447_37491 = state_37406__$1;
(statearr_37447_37491[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (16))){
var inst_37342 = (state_37406[(2)]);
var inst_37343 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37344 = figwheel.client.heads_up.display_exception.call(null,inst_37343);
var state_37406__$1 = (function (){var statearr_37448 = state_37406;
(statearr_37448[(13)] = inst_37342);

return statearr_37448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(17),inst_37344);
} else {
if((state_val_37407 === (30))){
var inst_37378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37379 = figwheel.client.heads_up.display_warning.call(null,inst_37378);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(33),inst_37379);
} else {
if((state_val_37407 === (10))){
var inst_37336 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37449_37492 = state_37406__$1;
(statearr_37449_37492[(2)] = inst_37336);

(statearr_37449_37492[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (18))){
var inst_37352 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37353 = figwheel.client.heads_up.display_exception.call(null,inst_37352);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(21),inst_37353);
} else {
if((state_val_37407 === (37))){
var inst_37389 = (state_37406[(2)]);
var state_37406__$1 = state_37406;
var statearr_37450_37493 = state_37406__$1;
(statearr_37450_37493[(2)] = inst_37389);

(statearr_37450_37493[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37407 === (8))){
var inst_37328 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37406__$1 = state_37406;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37406__$1,(11),inst_37328);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29906__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__29794__auto__,c__29906__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto____0 = (function (){
var statearr_37454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37454[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto__);

(statearr_37454[(1)] = (1));

return statearr_37454;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto____1 = (function (state_37406){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_37406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e37455){if((e37455 instanceof Object)){
var ex__29798__auto__ = e37455;
var statearr_37456_37494 = state_37406;
(statearr_37456_37494[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37495 = state_37406;
state_37406 = G__37495;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto__ = function(state_37406){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto____1.call(this,state_37406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__,msg_hist,msg_names,msg))
})();
var state__29908__auto__ = (function (){var statearr_37457 = f__29907__auto__.call(null);
(statearr_37457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_37457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__,msg_hist,msg_names,msg))
);

return c__29906__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__29906__auto___37558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto___37558,ch){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto___37558,ch){
return (function (state_37541){
var state_val_37542 = (state_37541[(1)]);
if((state_val_37542 === (1))){
var state_37541__$1 = state_37541;
var statearr_37543_37559 = state_37541__$1;
(statearr_37543_37559[(2)] = null);

(statearr_37543_37559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (2))){
var state_37541__$1 = state_37541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37541__$1,(4),ch);
} else {
if((state_val_37542 === (3))){
var inst_37539 = (state_37541[(2)]);
var state_37541__$1 = state_37541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37541__$1,inst_37539);
} else {
if((state_val_37542 === (4))){
var inst_37529 = (state_37541[(7)]);
var inst_37529__$1 = (state_37541[(2)]);
var state_37541__$1 = (function (){var statearr_37544 = state_37541;
(statearr_37544[(7)] = inst_37529__$1);

return statearr_37544;
})();
if(cljs.core.truth_(inst_37529__$1)){
var statearr_37545_37560 = state_37541__$1;
(statearr_37545_37560[(1)] = (5));

} else {
var statearr_37546_37561 = state_37541__$1;
(statearr_37546_37561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (5))){
var inst_37529 = (state_37541[(7)]);
var inst_37531 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37529);
var state_37541__$1 = state_37541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37541__$1,(8),inst_37531);
} else {
if((state_val_37542 === (6))){
var state_37541__$1 = state_37541;
var statearr_37547_37562 = state_37541__$1;
(statearr_37547_37562[(2)] = null);

(statearr_37547_37562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (7))){
var inst_37537 = (state_37541[(2)]);
var state_37541__$1 = state_37541;
var statearr_37548_37563 = state_37541__$1;
(statearr_37548_37563[(2)] = inst_37537);

(statearr_37548_37563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37542 === (8))){
var inst_37533 = (state_37541[(2)]);
var state_37541__$1 = (function (){var statearr_37549 = state_37541;
(statearr_37549[(8)] = inst_37533);

return statearr_37549;
})();
var statearr_37550_37564 = state_37541__$1;
(statearr_37550_37564[(2)] = null);

(statearr_37550_37564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__29906__auto___37558,ch))
;
return ((function (switch__29794__auto__,c__29906__auto___37558,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__29795__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__29795__auto____0 = (function (){
var statearr_37554 = [null,null,null,null,null,null,null,null,null];
(statearr_37554[(0)] = figwheel$client$heads_up_plugin_$_state_machine__29795__auto__);

(statearr_37554[(1)] = (1));

return statearr_37554;
});
var figwheel$client$heads_up_plugin_$_state_machine__29795__auto____1 = (function (state_37541){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_37541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e37555){if((e37555 instanceof Object)){
var ex__29798__auto__ = e37555;
var statearr_37556_37565 = state_37541;
(statearr_37556_37565[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37566 = state_37541;
state_37541 = G__37566;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__29795__auto__ = function(state_37541){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__29795__auto____1.call(this,state_37541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__29795__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__29795__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto___37558,ch))
})();
var state__29908__auto__ = (function (){var statearr_37557 = f__29907__auto__.call(null);
(statearr_37557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto___37558);

return statearr_37557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto___37558,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__){
return (function (state_37587){
var state_val_37588 = (state_37587[(1)]);
if((state_val_37588 === (1))){
var inst_37582 = cljs.core.async.timeout.call(null,(3000));
var state_37587__$1 = state_37587;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37587__$1,(2),inst_37582);
} else {
if((state_val_37588 === (2))){
var inst_37584 = (state_37587[(2)]);
var inst_37585 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37587__$1 = (function (){var statearr_37589 = state_37587;
(statearr_37589[(7)] = inst_37584);

return statearr_37589;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37587__$1,inst_37585);
} else {
return null;
}
}
});})(c__29906__auto__))
;
return ((function (switch__29794__auto__,c__29906__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__29795__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__29795__auto____0 = (function (){
var statearr_37593 = [null,null,null,null,null,null,null,null];
(statearr_37593[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__29795__auto__);

(statearr_37593[(1)] = (1));

return statearr_37593;
});
var figwheel$client$enforce_project_plugin_$_state_machine__29795__auto____1 = (function (state_37587){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_37587);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e37594){if((e37594 instanceof Object)){
var ex__29798__auto__ = e37594;
var statearr_37595_37597 = state_37587;
(statearr_37595_37597[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37587);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37598 = state_37587;
state_37587 = G__37598;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__29795__auto__ = function(state_37587){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__29795__auto____1.call(this,state_37587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__29795__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__29795__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__))
})();
var state__29908__auto__ = (function (){var statearr_37596 = f__29907__auto__.call(null);
(statearr_37596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_37596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__))
);

return c__29906__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__29906__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29906__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__29907__auto__ = (function (){var switch__29794__auto__ = ((function (c__29906__auto__,figwheel_version,temp__4657__auto__){
return (function (state_37621){
var state_val_37622 = (state_37621[(1)]);
if((state_val_37622 === (1))){
var inst_37615 = cljs.core.async.timeout.call(null,(2000));
var state_37621__$1 = state_37621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37621__$1,(2),inst_37615);
} else {
if((state_val_37622 === (2))){
var inst_37617 = (state_37621[(2)]);
var inst_37618 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37619 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37618);
var state_37621__$1 = (function (){var statearr_37623 = state_37621;
(statearr_37623[(7)] = inst_37617);

return statearr_37623;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37621__$1,inst_37619);
} else {
return null;
}
}
});})(c__29906__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__29794__auto__,c__29906__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto____0 = (function (){
var statearr_37627 = [null,null,null,null,null,null,null,null];
(statearr_37627[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto__);

(statearr_37627[(1)] = (1));

return statearr_37627;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto____1 = (function (state_37621){
while(true){
var ret_value__29796__auto__ = (function (){try{while(true){
var result__29797__auto__ = switch__29794__auto__.call(null,state_37621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29797__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29797__auto__;
}
break;
}
}catch (e37628){if((e37628 instanceof Object)){
var ex__29798__auto__ = e37628;
var statearr_37629_37631 = state_37621;
(statearr_37629_37631[(5)] = ex__29798__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29796__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37632 = state_37621;
state_37621 = G__37632;
continue;
} else {
return ret_value__29796__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto__ = function(state_37621){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto____1.call(this,state_37621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__29795__auto__;
})()
;})(switch__29794__auto__,c__29906__auto__,figwheel_version,temp__4657__auto__))
})();
var state__29908__auto__ = (function (){var statearr_37630 = f__29907__auto__.call(null);
(statearr_37630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29906__auto__);

return statearr_37630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29908__auto__);
});})(c__29906__auto__,figwheel_version,temp__4657__auto__))
);

return c__29906__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37633){
var map__37637 = p__37633;
var map__37637__$1 = ((((!((map__37637 == null)))?((((map__37637.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37637.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37637):map__37637);
var file = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37637__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37639 = "";
var G__37639__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37639),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37639);
var G__37639__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37639__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37639__$1);
if(cljs.core.truth_((function (){var and__24822__auto__ = line;
if(cljs.core.truth_(and__24822__auto__)){
return column;
} else {
return and__24822__auto__;
}
})())){
return [cljs.core.str(G__37639__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37639__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37640){
var map__37647 = p__37640;
var map__37647__$1 = ((((!((map__37647 == null)))?((((map__37647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37647):map__37647);
var ed = map__37647__$1;
var formatted_exception = cljs.core.get.call(null,map__37647__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37647__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37647__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37649_37653 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37650_37654 = null;
var count__37651_37655 = (0);
var i__37652_37656 = (0);
while(true){
if((i__37652_37656 < count__37651_37655)){
var msg_37657 = cljs.core._nth.call(null,chunk__37650_37654,i__37652_37656);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37657);

var G__37658 = seq__37649_37653;
var G__37659 = chunk__37650_37654;
var G__37660 = count__37651_37655;
var G__37661 = (i__37652_37656 + (1));
seq__37649_37653 = G__37658;
chunk__37650_37654 = G__37659;
count__37651_37655 = G__37660;
i__37652_37656 = G__37661;
continue;
} else {
var temp__4657__auto___37662 = cljs.core.seq.call(null,seq__37649_37653);
if(temp__4657__auto___37662){
var seq__37649_37663__$1 = temp__4657__auto___37662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37649_37663__$1)){
var c__25645__auto___37664 = cljs.core.chunk_first.call(null,seq__37649_37663__$1);
var G__37665 = cljs.core.chunk_rest.call(null,seq__37649_37663__$1);
var G__37666 = c__25645__auto___37664;
var G__37667 = cljs.core.count.call(null,c__25645__auto___37664);
var G__37668 = (0);
seq__37649_37653 = G__37665;
chunk__37650_37654 = G__37666;
count__37651_37655 = G__37667;
i__37652_37656 = G__37668;
continue;
} else {
var msg_37669 = cljs.core.first.call(null,seq__37649_37663__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37669);

var G__37670 = cljs.core.next.call(null,seq__37649_37663__$1);
var G__37671 = null;
var G__37672 = (0);
var G__37673 = (0);
seq__37649_37653 = G__37670;
chunk__37650_37654 = G__37671;
count__37651_37655 = G__37672;
i__37652_37656 = G__37673;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37674){
var map__37677 = p__37674;
var map__37677__$1 = ((((!((map__37677 == null)))?((((map__37677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37677):map__37677);
var w = map__37677__$1;
var message = cljs.core.get.call(null,map__37677__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/devcards_out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24822__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24822__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24822__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37689 = cljs.core.seq.call(null,plugins);
var chunk__37690 = null;
var count__37691 = (0);
var i__37692 = (0);
while(true){
if((i__37692 < count__37691)){
var vec__37693 = cljs.core._nth.call(null,chunk__37690,i__37692);
var k = cljs.core.nth.call(null,vec__37693,(0),null);
var plugin = cljs.core.nth.call(null,vec__37693,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37699 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37689,chunk__37690,count__37691,i__37692,pl_37699,vec__37693,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37699.call(null,msg_hist);
});})(seq__37689,chunk__37690,count__37691,i__37692,pl_37699,vec__37693,k,plugin))
);
} else {
}

var G__37700 = seq__37689;
var G__37701 = chunk__37690;
var G__37702 = count__37691;
var G__37703 = (i__37692 + (1));
seq__37689 = G__37700;
chunk__37690 = G__37701;
count__37691 = G__37702;
i__37692 = G__37703;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37689);
if(temp__4657__auto__){
var seq__37689__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37689__$1)){
var c__25645__auto__ = cljs.core.chunk_first.call(null,seq__37689__$1);
var G__37704 = cljs.core.chunk_rest.call(null,seq__37689__$1);
var G__37705 = c__25645__auto__;
var G__37706 = cljs.core.count.call(null,c__25645__auto__);
var G__37707 = (0);
seq__37689 = G__37704;
chunk__37690 = G__37705;
count__37691 = G__37706;
i__37692 = G__37707;
continue;
} else {
var vec__37696 = cljs.core.first.call(null,seq__37689__$1);
var k = cljs.core.nth.call(null,vec__37696,(0),null);
var plugin = cljs.core.nth.call(null,vec__37696,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37708 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37689,chunk__37690,count__37691,i__37692,pl_37708,vec__37696,k,plugin,seq__37689__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37708.call(null,msg_hist);
});})(seq__37689,chunk__37690,count__37691,i__37692,pl_37708,vec__37696,k,plugin,seq__37689__$1,temp__4657__auto__))
);
} else {
}

var G__37709 = cljs.core.next.call(null,seq__37689__$1);
var G__37710 = null;
var G__37711 = (0);
var G__37712 = (0);
seq__37689 = G__37709;
chunk__37690 = G__37710;
count__37691 = G__37711;
i__37692 = G__37712;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args37713 = [];
var len__25909__auto___37720 = arguments.length;
var i__25910__auto___37721 = (0);
while(true){
if((i__25910__auto___37721 < len__25909__auto___37720)){
args37713.push((arguments[i__25910__auto___37721]));

var G__37722 = (i__25910__auto___37721 + (1));
i__25910__auto___37721 = G__37722;
continue;
} else {
}
break;
}

var G__37715 = args37713.length;
switch (G__37715) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37713.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37716_37724 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37717_37725 = null;
var count__37718_37726 = (0);
var i__37719_37727 = (0);
while(true){
if((i__37719_37727 < count__37718_37726)){
var msg_37728 = cljs.core._nth.call(null,chunk__37717_37725,i__37719_37727);
figwheel.client.socket.handle_incoming_message.call(null,msg_37728);

var G__37729 = seq__37716_37724;
var G__37730 = chunk__37717_37725;
var G__37731 = count__37718_37726;
var G__37732 = (i__37719_37727 + (1));
seq__37716_37724 = G__37729;
chunk__37717_37725 = G__37730;
count__37718_37726 = G__37731;
i__37719_37727 = G__37732;
continue;
} else {
var temp__4657__auto___37733 = cljs.core.seq.call(null,seq__37716_37724);
if(temp__4657__auto___37733){
var seq__37716_37734__$1 = temp__4657__auto___37733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37716_37734__$1)){
var c__25645__auto___37735 = cljs.core.chunk_first.call(null,seq__37716_37734__$1);
var G__37736 = cljs.core.chunk_rest.call(null,seq__37716_37734__$1);
var G__37737 = c__25645__auto___37735;
var G__37738 = cljs.core.count.call(null,c__25645__auto___37735);
var G__37739 = (0);
seq__37716_37724 = G__37736;
chunk__37717_37725 = G__37737;
count__37718_37726 = G__37738;
i__37719_37727 = G__37739;
continue;
} else {
var msg_37740 = cljs.core.first.call(null,seq__37716_37734__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37740);

var G__37741 = cljs.core.next.call(null,seq__37716_37734__$1);
var G__37742 = null;
var G__37743 = (0);
var G__37744 = (0);
seq__37716_37724 = G__37741;
chunk__37717_37725 = G__37742;
count__37718_37726 = G__37743;
i__37719_37727 = G__37744;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25916__auto__ = [];
var len__25909__auto___37749 = arguments.length;
var i__25910__auto___37750 = (0);
while(true){
if((i__25910__auto___37750 < len__25909__auto___37749)){
args__25916__auto__.push((arguments[i__25910__auto___37750]));

var G__37751 = (i__25910__auto___37750 + (1));
i__25910__auto___37750 = G__37751;
continue;
} else {
}
break;
}

var argseq__25917__auto__ = ((((0) < args__25916__auto__.length))?(new cljs.core.IndexedSeq(args__25916__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25917__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37746){
var map__37747 = p__37746;
var map__37747__$1 = ((((!((map__37747 == null)))?((((map__37747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37747):map__37747);
var opts = map__37747__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37745){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37745));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37753){if((e37753 instanceof Error)){
var e = e37753;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37753;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37757){
var map__37758 = p__37757;
var map__37758__$1 = ((((!((map__37758 == null)))?((((map__37758.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37758.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37758):map__37758);
var msg_name = cljs.core.get.call(null,map__37758__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1513979292466