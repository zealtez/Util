-- ----------------------------------------------------
-- #Mysql Sequence
-- ----------------------------------------------------

-- #inst_seq   varchar(8) NOT NULL
SELECT 
	CONCAT( 'A', LPAD( CONCAT(CAST( IFNULL(SUBSTR( MAX(board_seq), 2), 0) AS UNSIGNED ) +1 ), '5', 0 ) ) AS NEXT_SEQ 
-- #inst_seq   SMALLINT   NOT NULL
SELECT 
	IFNULL( MAX(board_seq), 0)  +1  AS NEXT_SEQ 
