(ns web-app.components
		(:require-macros [cljs.core.async.macros :refer [go]])
  (:require [sablono.core :as sab]
  										[cljs-http.client :as http]
  										[cljs.core.async :refer [<!]]
  										))


;;(def table-state (atom [{:login "0"}]))
;;(def teste-state (atom "0"))

;;(defn get-data [table-state]
;;	(go (let [response (<! (http/get "https://api.github.com/users"
;;                                 {:with-credentials? false
;;                                  :query-params {"since" 135}}))
;;      body (:body response)]
;;      (prn "oi")
;;      (reset! table-state body);; reset!
      ;;(doseq [item (:body response)] (prn (:login item)))
     	;;(doseq [item (:body response)] ([:tr [:td (:login item)] [:td (:login item)]]) )
;;      )))



(defn like-seymore [data table]
		(.log js/console "Hey Seymore! wts goin' on?")
		;;(get-data table)
  (sab/html [:div
             [:h1 "Seymore's quantified popularity: " (:likes @data)]
             [:div [:a {:href "#"
                        :onClick #(swap! data update-in [:likes] inc)}
                    "Thumbs up"]]
;;             [:div
;;              [:h1 "API:"]
;;              [:table {:id "tabelaTeste"}
;;               [:tbody
;;               		(for [item @table] (vector :tr 
;;               																										(vector :td 
;;               																															(vector :img {:src (:avatar_url item)
;;               																																             :height "42" 
;;               																																             :width "42"
;;               																																             :alt "Profile image"}))
;;               																										(vector :td (:login item)) 
;;               		                               
;;               		 ))
;;                 ]]]
														[:div
																[:p "Login: "]
																[:input {:type "text" :id "login"}]
																[:p "Password: "]
																[:input {:type "password" :id "password"}]
																[:button {:on-click (fn [e] (js/console.log "Hello!!"))} "Login"]
														]
                 ]))


