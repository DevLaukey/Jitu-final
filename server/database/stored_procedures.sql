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

-- Stored procedures for categories

CREATE OR ALTER PROCEDURE all_categories
AS
BEGIN
    SELECT *
    FROM Categories
END
GO

CREATE OR ALTER PROCEDURE verify_category
    @categoryName VARCHAR(100)
AS
BEGIN
    SELECT *
    FROM Categories
    WHERE categoryName = (@categoryName)
END
GO

CREATE OR ALTER PROCEDURE add_category
    @categoryName VARCHAR(100)
AS
BEGIN
    INSERT INTO categories
    VALUES(@categoryName)
END
GO

CREATE OR ALTER PROCEDURE update_category
    (
    @categoryId INT,
    @categoryName VARCHAR(100)
)
AS
BEGIN
    UPDATE Categories SET category=@categoryName
WHERE categoryId=@categoryId
END
GO


-- Stored procedures for products

CREATE OR ALTER PROCEDURE all_products
AS
BEGIN
    SELECT *
    FROM Products
END
GO


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
    INSERT INTO Products
        (imageUrl, productName, price, [description], categoryId )
    VALUES
        ( @imageUrl, @productName, @price , @description, @categoryId)
END
GO

CREATE OR ALTER PROCEDURE update_product
    (
    @proddId INT,
    @imageUrl VARCHAR(255),
    @productName VARCHAR(100),
    @price SMALLMONEY,
    @description TEXT,
    @categoryId INT
)
AS
BEGIN
    UPDATE Products SET imageUrl=@imageUrl, productName=@productName, price=@price, [description]=@description, categoryId=@categoryId
WHERE productID=@proddId
END
GO

