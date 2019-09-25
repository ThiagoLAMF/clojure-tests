(ns server-controller.core
  (:gen-class)
  (:require [clojurewerkz.machine-head.client :as mh]
  										[clojure.data.json :as json]
  										[server_controller.sql :as sql]
  										[server_controller.db :refer [db]]))

(defn -main
  [& args]
  (println "Im alive!")
  )

;;Se inscreve em um topico
; set up the connection
(def id (mh/generate-id))
(def c (mh/connect "tcp://127.0.0.1:1883" id))

; set up a ref to keep track of the number of messages
(def i (ref 0))

;;(def disconnect (mh/disconnect c))

; define a callback on the topic/hello topic
(def s (mh/subscribe c {"test" 0}
				(fn [^String topic meta ^bytes payload]
				(println "Received MQTT -> " (String. payload) )
				(let [statusTraffic (json/read-str (String. payload) :key-fn keyword)] 
						(println "STATUS->" (:status statusTraffic))	
						(sql/update-device db {:status (:status statusTraffic) :id (:id statusTraffic)})
						(sql/insert-log db {:status (:status statusTraffic) :trafficlightfk (:id statusTraffic)})
				)
				
				(dosync (alter i inc)))))