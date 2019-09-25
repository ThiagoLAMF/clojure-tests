(ns server_controller.sql
  (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "server_controller/sql/TrafficLight.sql")