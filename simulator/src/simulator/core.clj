(ns simulator.core
  (:gen-class)
  (:require [clojurewerkz.machine-head.client :as mh]
  										[clojure.core.async :refer [go-loop]]
  										[clojure.core.async :as async]
  										[clojure.data.json :as json]))


;; estado atual
(def app-state (atom {:id 1
																						:status 0
																						:lastUpdate 0
																						:now 0
																						:timeRed 10000
																						:timeYellow 10000
																						:timeGreen 10000}))

;; pega o tempo correspondente ao estado atual
(defn get-state-time []
			(cond
					( = (:status @app-state) 0 ) (:timeRed @app-state)
					(or ( = (:status @app-state) 1 ) ( = (:status @app-state) 3 ) ) (:timeYellow @app-state)
					( = (:status @app-state) 2 ) (:timeGreen @app-state)))

;;Atualiza o estado atual
(defn refresh-lights []
				(swap! app-state
         #(-> % 
              (assoc :status (mod (+ (:status %) 1) 4))
              (assoc :lastUpdate (System/currentTimeMillis)))))
			

;;publica uma mensagem
(defn publish-mqtt []
	(let [id (mh/generate-id)
				c (mh/connect "tcp://127.0.0.1:1883" id)]
				(mh/publish c "test" (json/write-str @app-state))
				;;(println "enviou")
				(mh/disconnect c))
)


;;Traduz o estado atual na cor correspondente
(defn status-to-color[status]
  (cond 
    (= status 0) "yellow" ;;yellow going to red
    (= status 1) "red" ;;red going to yellow
    (= status 2) "yellow" ;;yellow going to green
    (= status 3) "green" ;;green going to yellow
    :else "black")
)


(defn -main
  [& args]
  (println "Im alive!")
  (async/<!! (async/go-loop [n 0]
  					 									(refresh-lights)
 																(println (status-to-color (:status @app-state)) "STATUS - " (:status @app-state) " TIME - " (get-state-time))
 																(publish-mqtt)
                 (async/<! (async/timeout (get-state-time)))
                 (recur (inc n))))
)
