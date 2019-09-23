(ns web-app.components
		(:require-macros [cljs.core.async.macros :refer [go]])
  (:require [sablono.core :as sab]
  										[cljs-http.client :as http]
  										[cljs.core.async :refer [<!]]
  										))


(def table-state (atom {:id "0"
																								:username "abc"
																								:email "asd@asd.com"
																								:password_hash "pass"}))
(def email-address (atom "teste"))
(def password (atom "password"))

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

(defn check-user-api [email pass user-state]
	
	(go (let [response (<! (http/get (str "http://localhost:3000/checkuser/" email "." pass)
                                 {:with-credentials? false
                                  }))]
      (prn (:body response))
      (prn (map :id (:body response)))
	;;(go (let [response (<! (http/get (str "http://localhost:3000/checkuser/" email "." pass)
 ;;                                {:with-credentials? false
 ;;                                 }))
	;;					body (:body response)]
						;;(prn  (:id (.stringify js/JSON (clj->js body))))
						;;(prn (js->clj body :keywordize-keys true))
	;;					(prn "antes")
	;;					(prn  (.parse js/JSON (.stringify js/JSON body)))
						;;(prn (js->clj (-> body js/JSON.stringify js/JSON.parse)))
						;;(reset! user-state (js->clj body :keywordize-keys true));; reset!
	;;					(prn "depois")
;;						(prn user-state)
      ;;(cond 
						;;	(= (empty? body) true) (.log js/console "logado")
						;;	:else (.log js/console "nao logado erro"))
      )))

(defn input-element
  [id name type value]
  [:input {:id id
           :name name
           :class "form-control"
           :type type
           :required ""
           :value @value
           :on-change #(reset! value (.-target.value %))
           }])


(defn like-seymore [data user-state]
		(.log js/console "Hey Seymore! wts goin' on?")
  (sab/html
     [:div {:class "signup-wrapper"}
     		[:h1 "Seymore's quantified popularity: " (:likes @data)]
             [:div [:a {:href "#"
                        :onClick #(swap! data update-in [:likes] inc)}
                    "Thumbs up"]]
       [:h2 "Welcome "]
       [:h2  "LOGADO: " (:username @user-state)]
       [:form
       	(input-element "email" "email" "email" email-address )
       	(input-element "pass" "pass" "password" password )
       	
       ]
       [:button {:on-click (fn [e] (check-user-api @email-address @password user-state))} "Login"]]))





		;; TESTES:::
		;;(get-data table)
 ;; (sab/html [:div
   ;;          [:h1 "Seymore's quantified popularity: " (:likes @data)]
  ;;           [:div [:a {:href "#"
  ;;                      :onClick #(swap! data update-in [:likes] inc)}
  ;;                  "Thumbs up"]]
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
;;														[:div
;;																[:p "Login: "]
;;																[:input {:type "text" :id "login"}]
;;																[:p "Password: "]
;;																[:input {:type "password" :id "password"}]
;;																[:button {:on-click (fn [e] (js/console.log "Hello!!"))} "Login"]
;;														]
 ;;                ]))


