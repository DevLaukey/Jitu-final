CREATE DATABASE tangarine_furniture

use tangarine_furniture

CREATE TABLE Users
(
    userId INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    fullName VARCHAR(100),
    email VARCHAR(100),
    telephone VARCHAR(20),
    [password] VARCHAR(255),
    [role] BIT DEFAULT 0,
    isActive BIT DEFAULT 0,
    isDeleted BIT DEFAULT 0,
)
go

CREATE OR ALTER PROCEDURE verify_exists
    @email VARCHAR(100)
AS

BEGIN
    SELECT *
    FROM Users
    WHERE email = @email
END

GO 

CREATE OR ALTER PROCEDURE insert_user
    (
    @fullName VARCHAR(100),
    @email VARCHAR(100),
    @telephone VARCHAR(20),
    @password VARCHAR(255))
AS
BEGIN
    INSERT INTO Users
        (fullName, email, telephone, [password])
    VALUES(@fullName, @email, @telephone, @password)
END

go

SELECT * from Users