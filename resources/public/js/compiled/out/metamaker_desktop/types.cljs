(ns metamaker-desktop.types)

(defn detect-type [v]
  (cond
    (= (type v) js/String) "String"
    (= (type v) js/Number) "Number"
    ))
