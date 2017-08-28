(ns metamaker-desktop.cljs
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [metamaker-desktop.events]
            [metamaker-desktop.subs]
            [metamaker-desktop.views :as views]
            [metamaker-desktop.config :as config]))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (re-frame/dispatch-sync [:initialize-db])
  (enable-console-print!)
  (dev-setup)
  (mount-root))
