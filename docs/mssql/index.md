# MSSQL

## Create Db and User

```sql
CREATE database MyDb
GO

USE MyDb
GO

CREATE LOGIN MyUser
    WITH PASSWORD = 'MyPassword';
GO

-- Creates a database user for the login created above.
CREATE USER MyUser FOR LOGIN MyUser;
GO

CREATE SCHEMA [mailservice]
GO

ALTER AUTHORIZATION ON SCHEMA::[MySchema] TO [MyUser]
GO

-- add db_owner role
-- EXEC sp_addrolemember N'db_owner', N'MyUser'
-- GO
```

## show fragmentation

```sql
SELECT dbschemas.[name] as 'Schema',
dbtables.[name] as 'Table',
dbindexes.[name] as 'Index',
indexstats.avg_fragmentation_in_percent,
indexstats.page_count
FROM sys.dm_db_index_physical_stats (DB_ID(), NULL, NULL, NULL, NULL) AS indexstats
INNER JOIN sys.tables dbtables on dbtables.[object_id] = indexstats.[object_id]
INNER JOIN sys.schemas dbschemas on dbtables.[schema_id] = dbschemas.[schema_id]
INNER JOIN sys.indexes AS dbindexes ON dbindexes.[object_id] = indexstats.[object_id]
AND indexstats.index_id = dbindexes.index_id
WHERE indexstats.database_id = DB_ID() AND dbtables.[name] like '%%'
ORDER BY indexstats.avg_fragmentation_in_percent desc
```

## rebuild all indexes

```sql
Exec sp_msforeachtable 'SET QUOTED_IDENTIFIER ON; ALTER INDEX ALL ON ? REBUILD'
GO
```

## recompile views

```sql
-----------------------------------------------------------------------------
-- REFRESH ALL VIEWS
-----------------------------------------------------------------------------
SET NOCOUNT ON
DECLARE @SQL varchar(max) = ''
SELECT @SQL = @SQL + 'print ''Refreshing --> ' + name + '''
EXEC sp_refreshview ' + name + ';
'
  FROM sysobjects
  WHERE type = 'V' and name like 'vw_%'  --< condition to select all views, may vary by your standards
--SELECT @SQL
EXEC(@SQL)
go
```

## change collation by copying databases

[link](https://confluence.atlassian.com/kb/how-to-fix-the-collation-of-a-microsoft-sql-server-database-744326177.html)

- create new database with new collation
- generate script from old database
  - Click "Tasks" » "Generate Scripts..."
  - In the "Choose Objects" screen, choose "Select specific database objects"
    -Tick "Tables" - this selects all the objects in the database, but not the database itself (since we already created the new database)
  - On the "Set Scripting Options" click "Advanced" and adjust the following options:
  - Set "Script USE DATABASE" to false
  - Set "Script Full-Text Indexes" to true
  - Set "Script Indexes" to true
  - Click "Next," then "Finish"
  - Run the script against your new database. At this point, your new database will contain tables with the correct data types and collation, but no data.
- Disabling Constraint Checks before importing
  ```SQL
  EXEC sp_MSforeachtable"ALTER TABLE ? NOCHECK CONSTRAINT all"
  ```
- Importing Data from the Old Database
  - Click "Tasks" » "Export Data..."
  - In the "Choose a Data Source" screen, ensure your old database is selected. Then click "Next"
  - In the "Choose a Destination" screen, provide the connection information for your new database. Usually, this will be the same server; however, you can use any SQL Server you can authenticate against. Then click "Next"
  - Choose "Copy Data from one or more tables or views" then click "Next"
  - In the "Select Source Tables and Views," ensure all tables are ticked, and that all tables have been highlighted
  - With the tables highlighted, click "Edit Mappings..."
  - Ensure the correct schema has been selected (DBO is usually the correct schema) and that "Enable Identity Insert" has been ticked. Click "OK"
  - Click "Next" and complete the transfer of data. Depending on the size of the database, and the speed of the database server(s) being used, this process will take time.
- Re-enabling Constraint Checks after importing
  ```SQL
  EXEC sp_MSforeachtable"ALTER TABLE ? WITH CHECK CHECK CONSTRAINT all"
  ```
