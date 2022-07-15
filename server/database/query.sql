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
SELECT * FROM Users

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

CREATE OR ALTER PROCEDURE update_user
    (
    @fullName VARCHAR(100),
    @email VARCHAR(100),
    @telephone VARCHAR(20)
)
AS
BEGIN
    UPDATE Users SET fullName=@fullName, telephone=@telephone
WHERE email=@email
END
GO

go

CREATE TABLE Products(
    productID INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    imageUrl VARCHAR(255), 
    productName VARCHAR(100),
    price SMALLMONEY,
    [description] TEXT,
-- 1 as true and 0 as false
    inStock BIT DEFAULT 1 ,
    categoryId INT NOT NULL FOREIGN KEY REFERENCES categories(categoryId)
)

go

CREATE OR ALTER PROCEDURE all_products
AS
BEGIN
SELECT * FROM Products
END

go

CREATE OR ALTER  PROCEDURE add_products
(
    @imageUrl VARCHAR(255), 
    @productName VARCHAR(100),
    @price SMALLMONEY,
    @description TEXT,
    @categoryId INT
)
AS
BEGIN
INSERT INTO Products(
    imageUrl, 
    productName,
    price,
    [description],
    categoryId
) VALUES (
    @imageUrl, @productName, @price , @description, @categoryId
)
END

CREATE TABLE categories(
    categoryId INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    categoryName VARCHAR(100)
)

GO

CREATE OR ALTER PROCEDURE add_category 
@categoryName VARCHAR(100)
AS
BEGIN
INSERT INTO categories VALUES(@categoryName)
END

SELECT * FROM Products