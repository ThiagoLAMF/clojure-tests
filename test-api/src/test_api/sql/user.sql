-- :name users-all :? :*
-- :doc select all users
SELECT *  
  FROM "user"

-- :name users
-- :command :query
-- :result n
-- :doc select all with cols defined by {:cols [<col_name>...]}
SELECT :i*:cols  
  FROM "user"

-- :name users-check :? :*
-- :doc seleciona um usuario pelo login e senha
SELECT * 
	FROM "user"
	WHERE username = :login
	AND password_hash = :password