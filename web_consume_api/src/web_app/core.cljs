(ns web-app.core
  (:require [sablono.core :as sab]
            [web-app.components :refer [like-seymore]]))

(defonce app-state (atom { :likes 0
																											:logado 0}))


(def user-state (atom {:id "0"
																								:username "abc"
																								:email "asd@asd.com"
																								:password_hash "pass"}))

(defn render! []
  (.render js/ReactDOM
           (like-seymore app-state user-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

;;(add-watch table-state :on-change (fn [_ _ _ _] (render!)))

(render!)