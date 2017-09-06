(ns metamaker-desktop.parser
  (:require
   [re-frame.core :as re-frame]
   [cljsjs.papaparse]))


(set! (.-SCRIPT_PATH js/Papa) "js/papaparse.min.js")

;; (defn stepfn [results parser]
;;   (if (< (rand) 0.00001)
;;     (println (str "Row data:" (js->clj (first (.-data results)))))))

(def line-no (atom 0))
(def chart-data (atom {:type "line"
                       :data {:labels []
                              :datasets [{:data []
                                          :label "Value"}]}}))
(def csv-rows (atom []))

;; (mod 5 1)

;; (defn stepfn [results parser]
;;   (let [clj-results (first (:data (js->clj results :keywordize-keys true)))]))

;; (defn stepfn [results parser]
;;   ;; (println results)
;;   (let [clj-results (first (:data (js->clj results :keywordize-keys true)))
;;         row-str (str "")
;;         results (re-frame/subscribe [:results])

;;         srate (js/parseInt @(re-frame/subscribe [:srate]))
;;         ]
;;     ;; (println (str "Row data:" clj-results))
;;     (reset! csv-rows (conj @csv-rows ))
;;     (if (and (>= (count clj-results) y-index) (> @line-no 0) (= 0 (mod @line-no srate)))
;;       (do
;;         (reset! chart-data (assoc-in @chart-data [:data :labels] (conj (:labels (:data @chart-data)) (nth clj-results x-index))))
;;         (reset! chart-data (assoc-in @chart-data [:data :datasets 0 :data] (conj (:data (first (:datasets (:data @chart-data)))) (js/parseInt (nth clj-results y-index)))))
;;         (re-frame/dispatch [:set-chart-data @chart-data])
;;         ;; (re-frame/dispatch [:add-chart-data {:label (nth clj-results t-index) :data (nth clj-results v-index)}])
;;         ))
;;     (reset! line-no (inc @line-no))
;;     )
;;   )


;; (if (.indexOf (to-array [1 2 3]) 1) true false)


(defn stepfn [{:keys [f d cs all-cs]}]
  (fn [results parser]
    (let [clj-results (first (:data (js->clj results :keywordize-keys true)))
          row-str (if-not (= "" (apply str clj-results)) (str f "\t" d (apply str (for [k (sort (keys all-cs))]
                                                                   (let [v (get cs k)]
                                                                     (if v
                                                                       (str "\t" (nth clj-results (js/parseInt v)))
                                                                       "\t"))
                                                                   ))) "")
          srate (js/parseInt @(re-frame/subscribe [:srate]))]
      (do
        (if (= 0 (mod @line-no srate))
          (if-not (or (= row-str "") (zero? @line-no)) ; don't want the header line
            (reset! csv-rows (conj @csv-rows row-str))))
        ;; (println @csv-rows)
        ;; (println clj-results)
        ;; (println cs)
        ;; (println all-cs)

        (reset! line-no (inc @line-no))))))


(defn complete [results, parser]
  (let [clj-results (:data (js->clj results :keywordize-keys true))]
    (do
      (println (str "Table data:" (js->clj results :keywordize-keys true)))
      (re-frame/dispatch [:set-rows clj-results])
      )))


(defn parse-sample [fname size]
  (.parse js/Papa fname
          (clj->js {
                    :download false
                    :dynamicTyping true
                    ;; :step stepfn
                    :complete complete
                    ;; :header true
                    ;; :worker true
                    :preview size
                    })))

(defn parse-remote-sample [fname size]
  (.parse js/Papa fname
          (clj->js {
                    :download true
                    :dynamicTyping true
                    ;; :step stepfn
                    :complete complete
                    ;; :header true
                    ;; :worker true
                    :preview size
                    })))



(defn parse-local [fobj fname dataset cols all-cols last?]
  (.parse js/Papa fobj
          (clj->js {
                    :download false
                    :dynamicTyping true
                    :step (stepfn {:f fname :d dataset :cs cols :all-cs all-cols})
                    :complete #(do (reset! line-no 0)
                                   ;; (println @csv-rows)
                                   (if last? (re-frame/dispatch [:download-csv @csv-rows]))
                                   ;; (re-frame/dispatch [:download-csv @csv-rows])
                                   )
                    :header false
                    ;; :worker true
                    ;; :preview size
                    })))


(defn parse-locals [data all-cols]
  (do
    (reset! csv-rows [(str "dm4t:file\tdm4t:dataset" (apply str (for [k (sort (keys all-cols))]
                                                                  (str "\t" (get all-cols k)))))])
    (doseq [d data] (apply parse-local d))
    true
    ;; @csv-rows
    ))


;; (defn parse-stream [fname]
;;   (do
;;     (reset! chart-data {:type "line"
;;                         :data {:labels []
;;                                :datasets [{:data []
;;                                            :label "Value"}]}})
;;     (.parse js/Papa fname
;;             (clj->js {
;;                       :download true
;;                       :dynamicTyping true
;;                       :step stepfn
;;                       ;; :complete complete
;;                       :header false
;;                       ;; :worker true
;;                       ;; :preview size
;;                       }))))

;; (clj->js {:download true
;;           :dynamic-typing true
;;           :header true
;;           :worker true
;;           :preview 100})
