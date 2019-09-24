  (ns test_api.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [test_api.user :refer [user-routes]]
            [compojure.api.sweet :refer [api routes]]
            [test_api.db :refer [db]]
            [test_api.sql :as sql]
            [clojure.pprint :as pprint]
            [ring.middleware.cors :refer [wrap-cors]])
  (:gen-class))

;;links:https://www.compose.com/articles/embrace-sql-with-hugsql-clojure-and-postgresql/
;;https://www.demystifyfp.com/clojure/blog/restful-crud-apis-using-compojure-api-and-toucan-part-1/

(def swagger-config
  {:ui "/swagger"
   :spec "/swagger.json"
   :options {:ui {:validatorUrl nil}
             :data {:info {:version "1.0.0", :title "Restful CRUD API"}}}})

(def app (api {:swagger swagger-config} (apply routes user-routes)))
				 ;;(wrap-cors (apply routes user-routes)  :access-control-allow-origin [#".*"] 
				 ;;										:access-control-allow-methods [:get :put :post :delete])))

(defn -main
  [& args]
  (run-jetty app {:port 3000})
  (println "Hello, World!")
  )