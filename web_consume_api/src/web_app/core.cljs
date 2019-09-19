(ns web-app.core
  (:require [sablono.core :as sab]
            [web-app.components :refer [like-seymore]]))

(defonce app-state (atom { :likes 0 }))
(def table-state (atom [{:login "0"}]))

(defn render! []
  (.render js/ReactDOM
           (like-seymore app-state table-state)
           (.getElementById js/document "app")))

(add-watch app-state :on-change (fn [_ _ _ _] (render!)))

;;(add-watch table-state :on-change (fn [_ _ _ _] (render!)))

(render!)