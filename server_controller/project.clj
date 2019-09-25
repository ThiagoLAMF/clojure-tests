(defproject server_controller "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.0"]
  															[clojurewerkz/machine_head "1.0.0-beta9"]
  															[org.clojure/data.json "0.2.6"]
  															[com.layerware/hugsql "0.4.5"]
  															[toucan "1.1.9"]
                 [org.postgresql/postgresql "42.2.4"]]
  :main ^:skip-aot server-controller.core
  :target-path "target/%s"
  :profiles {:uberjar {:aot :all}})
