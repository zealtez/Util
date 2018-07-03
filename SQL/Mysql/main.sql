-- ----------------------------------------------------
-- #Mysql Sequence
-- ----------------------------------------------------

-- #board_seq   varchar(8) NOT NULL
SELECT 
	CONCAT( 'A', LPAD( CONCAT(CAST( IFNULL(SUBSTR( MAX(board_seq), 2), 0) AS UNSIGNED ) +1 ), '5', 0 ) ) AS NEXT_SEQ
	
-- #board_seq  varchar(10) NOT NULL without char Mark
SELECT
	LPAD( CONCAT(CAST( IFNULL(SUBSTR( MAX(board_seq), 2), 0) AS UNSIGNED ) +1 ), '9', 0 ) AS NEXT_SEQ
-- #board_seq   SMALLINT   NOT NULL
SELECT 
	IFNULL( MAX(board_seq), 0)  +1  AS NEXT_SEQ 
-- postregresql
SELECT
	CAST(COALESCE(CAST(MAX(ad_order) AS INTEGER), 0) + 1 AS VARCHAR)  AS NEXT_SEQ
FROM
	bms_dd_admin_ad_sche
