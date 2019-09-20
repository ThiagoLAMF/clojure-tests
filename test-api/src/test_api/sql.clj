(ns test_api.sql
  (:require [hugsql.core :as hugsql]))

(hugsql/def-db-fns "test_api/sql/user.sql")

