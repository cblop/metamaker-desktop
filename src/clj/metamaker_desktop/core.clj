(ns metamaker-desktop.core
  (:require [metamaker-desktop.db :refer :all]
            [metamaker-desktop.handler :refer [app]]
            [middlebrow.core :as mb]
            [middlebrow-thrust.core :as thrust]
            [middlebrow-fx.core :as fx]
            [ring.adapter.jetty :refer :all]
            [clojure.java.io :as io])
  (:gen-class)
  )

(def ARCH (if (= (System/getProperty "os.name") "Mac OS X") "mac"
              (if (= (System/getProperty "os.arch") "amd64") "linux" "win")))


(defn -main
  []
  (do
    (future (start-server))
    (future (run-jetty app {:port 7777}))
    (let [window (thrust/create-window
                  :thrust-directory (-> (str "thrust-" ARCH) io/resource)
                  :url "http://localhost:7777" ; URL to your web app
                  :width 1024
                  :height 768
                  :title "MetaMaker")]
      (mb/show window)
      (mb/activate window))
    true
    )
  )


