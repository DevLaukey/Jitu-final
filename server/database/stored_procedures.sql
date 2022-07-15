CREATE OR ALTER PROCEDURE all_users
AS
BEGIN
    SELECT *
    FROM Users
END
GO

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
    UPDATE Categories SET categoryName=@categoryName
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

CREATE OR ALTER PROCEDURE verify_product
    @productName VARCHAR(100)
AS
BEGIN
    SELECT *
    FROM Products
    WHERE productName = @productName
END
GO

CREATE OR ALTER  PROCEDURE add_products(
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

CREATE OR ALTER PROCEDURE update_product (
    @proddId INT,
    @imageUrl VARCHAR(255),
    @productName VARCHAR(100),
    @price SMALLMONEY,
    @description TEXT,
    @categoryId INT
)
AS
BEGIN
    UPDATE Products SET 
        imageUrl=@imageUrl, productName=@productName, 
        price=@price, [description]=@description, 
        categoryId=@categoryId
    WHERE productID=@proddId
END
GO

-- Stored procedures for Orders

CREATE OR ALTER PROCEDURE all_orders
AS
BEGIN
    SELECT *
    FROM Orders
END
GO

CREATE OR ALTER PROCEDURE verify_order
    @orderid INT
AS
BEGIN
    SELECT *
    FROM Orders
    WHERE OrderId = @orderid
END
GO

CREATE OR ALTER  PROCEDURE create_order(
    @userid INT,
    @totalamount DECIMAL(12,2)
)
AS
BEGIN
    INSERT INTO Orders
        (UserId, TotalAmount)
    VALUES
        (@userid,@totalamount)
END
GO

-- Stored procedures for Order_Product

CREATE OR ALTER PROCEDURE all_prod_orders
AS
BEGIN
    SELECT *
    FROM Order_Product
END
GO


CREATE OR ALTER PROCEDURE verify_prodOrder
    @prodOrderId INT
AS
BEGIN
    SELECT *
    FROM Order_Product
    WHERE Order_Product_Id = @prodOrderId
END
GO

CREATE OR ALTER  PROCEDURE add_prodorder(
    @orderid INT,
    @productid INT,
    @unitprice DECIMAL(12,2),
    @quantity INT = 1
)
AS
BEGIN
    INSERT INTO Order_Product
        (OrderId, ProductId, UnitPrice, Quantity)
    VALUES
        (@orderid,@productid,@unitprice,@quantity)
END
GO
