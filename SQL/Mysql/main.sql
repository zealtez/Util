-- ----------------------------------------------------
-- #Mysql Sequence
-- ----------------------------------------------------

-- #inst_seq   varchar(8) NOT NULL
SELECT 
	CONCAT( 'A', LPAD( CONCAT(CAST( IFNULL(SUBSTR( MAX(inst_seq), 2), 0) AS UNSIGNED ) +1 ), '5', 0 ) ) AS NEXT_SEQ 
