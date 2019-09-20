(ns test_api.user
  (:require [schema.core :as s]
            [test_api.models.user :refer [User]]
            [buddy.hashers :as hashers]
            [clojure.set :refer [rename-keys]]
            ;;[toucan.db :as db]
            [test_api.db :refer [db]]
            [test_api.sql :as sql]
            [ring.util.http-response :refer [ok not-found created]]
            [compojure.api.sweet :refer [GET POST PUT DELETE]]
            [test_api.string-util :as str]
            [test_api.db :refer [db]]
            [test_api.sql :as sql]
            [clojure.pprint :as pprint]
            [clojure.data.json :as json]))




(def user-routes
  [(GET "/users" []
   				(json/write-str (sql/users-all db)))
   ;;TODO: Hash password
   (GET ["/checkuser/:login.:password" ] [login password]
   				(prn (str "Login: " login "Password: " password))
    			(json/write-str (sql/users-check db {:login login :password password})))
])