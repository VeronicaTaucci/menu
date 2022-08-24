CREATE TABLE categories
(
    id SERIAl NOT NULL PRIMARY KEY,
    name varchar(50)
);

INSERT INTO categories VALUES 
(DEFAULT, 'BBQ'),
(DEFAULT, 'Gluten-Free'),
(DEFAULT, 'Mexican'),
(DEFAULT, 'Tapas'),
(DEFAULT, 'Greek'),
(DEFAULT, 'Chinese'),
(DEFAULT, 'Ethopian'),
(DEFAULT, 'Indan'),
(DEFAULT, 'Thai'),
(DEFAULT, 'Vietnamese'),
(DEFAULT, 'German'); 

CREATE TABLE menuItem
(
    id SERIAL PRIMARY KEY,
    name varchar(100),
    category integer REFERENCES categories(id),
    foodDescription varchar(300),
    price float,
    course varchar(50),
    imageURL varchar(150)
);