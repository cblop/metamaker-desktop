// Compiled by ClojureScript 1.9.229 {}
goog.provide('metamaker_desktop.cljs');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('metamaker_desktop.views');
goog.require('metamaker_desktop.events');
goog.require('metamaker_desktop.subs');
goog.require('metamaker_desktop.config');
goog.require('re_frame.core');
metamaker_desktop.cljs.dev_setup = (function metamaker_desktop$cljs$dev_setup(){
if(cljs.core.truth_(metamaker_desktop.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
metamaker_desktop.cljs.mount_root = (function metamaker_desktop$cljs$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [metamaker_desktop.views.main_panel], null),document.getElementById("app"));
});
metamaker_desktop.cljs.init = (function metamaker_desktop$cljs$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

cljs.core.enable_console_print_BANG_.call(null);

metamaker_desktop.cljs.dev_setup.call(null);

return metamaker_desktop.cljs.mount_root.call(null);
});
goog.exportSymbol('metamaker_desktop.cljs.init', metamaker_desktop.cljs.init);

//# sourceMappingURL=cljs.js.map?rel=1503928315038