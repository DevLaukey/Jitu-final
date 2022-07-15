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
GO

CREATE TABLE categories
(
    categoryId INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    categoryName VARCHAR(100)
)
GO

CREATE TABLE Products
(
    productID INT IDENTITY(1,1) PRIMARY KEY NOT NULL,
    imageUrl VARCHAR(255),
    productName VARCHAR(100),
    price SMALLMONEY,
    [description] TEXT,
    inStock BIT DEFAULT 1 ,-- 1 as true and 0 as false
    categoryId INT NOT NULL FOREIGN KEY REFERENCES categories(categoryId)
)
GO