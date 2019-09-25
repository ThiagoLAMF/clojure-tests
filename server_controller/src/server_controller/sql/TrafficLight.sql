-- :name devices-all :? :*
-- :doc select all devices
SELECT *  
  FROM TrafficLight

-- :name devices-select :? :*
-- :doc select a specifc device
SELECT * 
	FROM TrafficLight
	WHERE TrafficLightID = :id

-- :name update-device :! :n
-- :doc update a specific device
UPDATE TrafficLight
	SET Status = :status
	WHERE TrafficLightID = :id

-- :name insert-log :! :n
-- :doc insert log
INSERT INTO TrafficLightLog 
VALUES(:trafficlightfk, :status,current_timestamp)