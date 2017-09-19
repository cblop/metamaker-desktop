(ns metamaker-desktop.db)

(def default-db
  {:name "MetaMaker"
   :dataset-name ""
   ;; :fname "http://mist.cs.bath.ac.uk/refit-cleaned/CLEAN_House1.csv"
   ;; :fname "/home/_mthom/repos/metamaker-desktop/resources/local/test.csv"
   :fname ""
   :dataset ""
   :chart-data {:type "line"
                :data
                {:labels []
                 :datasets [{:data []
                             :label "Values"}]}}
   :selected-sets (set [])
   :show-locals-modal false
   :srate "1"
   :data-urls []
   :datasets []
   :cat-qa [nil]
   :cat-qb [nil]
   :filtered-cats [[] []]
   :cat-as [{:id "time" :label "Time"}
            {:id "type" :label "Reading Type"}
            {:id "location" :label "Location"}
            {:id "value" :label "Value"}
            ]
   :cat-bs [{:id 0 :cat-id "time" :label "Start Time" :p "ssn:startTime"}
            {:id 1 :cat-id "time" :label "End Time" :p "ssn:endTime"}
            {:id 2 :cat-id "time" :label "Timestamp" :p "xsd:dateTimeStamp"}
            {:id 3 :cat-id "location" :label "Device" :p "seas:device"}
            {:id 4 :cat-id "location" :label "Sensor" :p "seas:sensor"}
            {:id 5 :cat-id "location" :label "Room" :p "seas:room"}
            {:id 6 :cat-id "location" :label "House" :p "seas:house"}
            {:id 7 :cat-id "location" :label "Appliance" :p "seas:appliance"}
            {:id 8 :cat-id "value" :label "Value" :p "ssn:hasValue"}
            {:id 9 :cat-id "value" :label "Maximum Value" :p "seas:maxValue"}
            {:id 10 :cat-id "value" :label "Minimum Value" :p "seas:minValue"}
            {:id 11 :cat-id "value" :label "Mean Value" :p "seas:meanValue"}
            {:id 12 :cat-id "type" :label "Power (Watts)" :p "seas:powerReading"}
            {:id 13 :cat-id "type" :label "Humidity (relative)" :p "seas:humidityReading"}
            {:id 14 :cat-id "type" :label "Gas" :p "seas:gasReading"}
            {:id 15 :cat-id "type" :label "CO2" :p "seas:co2Reading"}
            {:id 16 :cat-id "type" :label "Light" :p "seas:lightReading"}
            {:id 17 :cat-id "type" :label "Motion (PIR)" :p "seas:motionReading"}
            ]
   :sparql "PREFIX csv:<http://www.ntnu.no/ub/data/csv#>
PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>
PREFIX xsd:<http://www.w3.org/2001/XMLSchema#>

SELECT *
WHERE {{
  SELECT ?f ?i WHERE {
       ?f csv:hasColumn ?c .
       ?c csv:mapsTo ssn:hasValue .
       ?c csv:hasIndex ?i .}
} UNION {
  SELECT ?ti WHERE {
       ?f csv:hasColumn ?t .
       ?t csv:mapsTo xsd:dateTimeStamp .
       ?t csv:hasIndex ?ti .}}}"
;;    :sparql "PREFIX csv:<http://www.ntnu.no/ub/data/csv#>
;; PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>

;; SELECT ?f ?i
;; WHERE {?f csv:hasColumn ?c .
;;        ?c csv:mapsTo ssn:hasValue .
;;        ?c csv:hasIndex ?i .}"
   :files []
   :current-tab :tab1
   :description ""
   :show-sparql false
   :selected-tab 0
   :datatypes [{:cat-b "Start time"
                :cat-a "Time"
                :type :string
                :p "ssn:startTime"
                }
               {:cat-b "End time"
                :cat-a "Time"
                :type :string
                :p "ssn:endTime"}
               {:cat-b "Timestamp"
                :cat-a "Time"
                :type :string
                :p "xsd:dateTimeStamp"}
               {:cat-b "Device"
                :cat-a "Location"
                :type :string
                :p "seas:device"}
               {:cat-b "Sensor"
                :cat-a "Location"
                :type :string
                :p "seas:sensor"}
               {
                :cat-b "Room"
                :cat-a "Location"
                :type :string
                :p "seas:room"}
               {:cat-b "House"
                :cat-a "Location"
                :type :string
                :p "seas:house"
                }
               {
                :cat-b "Appliance"
                :cat-a "Location"
                :type :string
                :p "seas:appliance"}
               {:cat-b "Value"
                :cat-a "Value"
                :type :float
                :p "ssn:hasValue"}
               {:cat-b "Maximum Value"
                :cat-a "Value"
                :type :float
                :p "seas:maxValue"}
               {:cat-b "Minimum Value"
                :cat-a "Value"
                :type :float
                :p "seas:minValue"}
               {:cat-b "Mean Value"
                :cat-a "Value"
                :type :float
                :p "seas:meanValue"}
               {:cat-b "Power (Watts)"
                :cat-a "Type"
                :type :float
                :p "seas:powerReading"}
               {:cat-b "Humidity (relative)"
                :cat-a "Type"
                :type :float
                :p "rdf:a"
                :o "seas:humidityReading"}
               {:cat-b "Gas"
                :cat-a "Type"
                :type :float
                :p "seas:gasReading"}
               {:cat-b "CO2"
                :cat-a "Type"
                :type :float
                :p "seas:co2Reading"}
               {:cat-b "Light"
                :cat-a "Type"
                :type :float
                :p "seas:lightReading"}
               {:cat-b "Motion (PIR)"
                :cat-a "Type"
                :type :float
                :p "seas:motionReading"}
               ]
   :metas []
   :file-metas []
   :types [{:id 0 :label "String"} {:id 1 :label "Number"} {:id 2 :label "Date"}]
   }
  )
