(defproject metamaker-desktop "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.229"]
                 [reagent "0.6.0"]
                 [re-frame "0.9.1"]
                 [org.clojure/core.async "0.2.391"]
                 [re-com "0.8.3"]
                 [garden "1.3.2"]
                 [cljs-ajax "0.5.8"]
                 [cljsjs/chartjs "2.5.0-0"]
                 [cljsjs/papaparse "4.1.1-1"]
                 [ns-tracker "0.3.0"]
                 [compojure "1.5.1"]
                 [ring/ring-json "0.4.0"]
                 [ring-partial-content "1.0.0"]
                 [org.clojars.quoll/turtle "0.2.2"]
                 [ring/ring-core "1.6.2"]
                 [net.solicode/middlebrow-fx "0.1.0-SNAPSHOT"]
                 [net.solicode/middlebrow-thrust "0.1.0-SNAPSHOT"]
                 ;; [ring "1.5.0"]
                 [net.solicode/middlebrow "0.1.0-SNAPSHOT"]
                 [ring/ring-jetty-adapter "1.6.2"]
                 [javax.servlet/servlet-api "2.5"]
                 [ring/ring-defaults "0.2.1"]
                 ]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-ring "0.9.7"]
            [lein-garden "0.2.8"]]

  :ring {:handler metamaker-desktop.handler/app}

  :main metamaker-desktop.core

  :min-lein-version "2.5.3"

  :source-paths ["src/clj"
                 "src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"
                                    "resources/public/css"]

  :figwheel {:css-dirs ["resources/public/css"]}

  :garden {:builds [{:id           "screen"
                     :source-paths ["src/clj"]
                     :stylesheet   metamaker-desktop.css/screen
                     :compiler     {:output-to     "resources/public/css/screen.css"
                                    :pretty-print? true}}]}

  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.8.2"]
                   [figwheel-sidecar "0.5.7"]
                   [com.andrewmcveigh/cljs-time "0.4.0"]
                   [com.cemerick/piggieback "0.2.1"]
                   [javax.servlet/servlet-api "2.5"]
                   [ring/ring-mock "0.3.0"]
                   ]

    :main metamaker-desktop.core
    :plugins      [[lein-figwheel "0.5.7"]]
    }
   :production
   {:cljsbuild
    {:builds {:client {:compiler    {:main "metamaker-desktop.cljs"
                                     :optimizations :advanced
                                     :elide-asserts true
                                     :pretty-print false}}}}}
   }

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "metamaker-desktop.cljs/mount-root"}
     :compiler     {:main                 metamaker-desktop.cljs
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}
                    }}

    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            metamaker-desktop.cljs
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}


    ]}

  )
