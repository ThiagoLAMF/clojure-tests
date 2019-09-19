(defproject web-app "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.10.520"]
                 [cljsjs/react "15.2.1-1"]
																 [cljsjs/react-dom "15.2.1-1"]
																	[sablono "0.7.4"]
																	[cljs-http "0.1.46"]]
  :plugins [[lein-figwheel "0.5.19"]]
  :clean-targets [:target-path "out"]
  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:main "web-app.core"}
             }]
   }
   :figwheel { ;; <-- add server level config here
     :css-dirs ["css"]
   })