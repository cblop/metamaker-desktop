(ns metamaker-desktop.db
  (:require [clojure.java.shell :refer [sh]]
            [clojure.java.io :as io])
  )


(defn start-server []
  (sh "sh" "fuseki-server" "--port" "3030" "--update" "--loc=./ds" "/ds" :dir (-> "fuseki" io/resource io/file))) ;; port is 3030

