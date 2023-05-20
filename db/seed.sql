-- Update the review table
UPDATE Review
SET rating = 3, description = 'Not my game but decent', date_created = '2020-01-01 00:00:00'
WHERE id = 1;

UPDATE Review
SET rating = 1, description = 'Hard Pass', date_created = '2020-01-01 00:00:00'
WHERE id = 2;

UPDATE Review
SET rating = 5, description = 'BUY NOW!!!', date_created = '2020-01-01 00:00:00'
WHERE id = 3;

UPDATE Review
SET rating = 2, description = 'Never, will I ever spend 50 dollars on this, maybe 20', date_created = '2020-01-01 00:00:00'
WHERE id = 4;

UPDATE Review
SET rating = 5, description = 'Good', date_created = '2020-01-01 00:00:00'
WHERE id = 5;

-- Update the user table
UPDATE User
SET username = 'Sal', email = 'sal@hotmail.com', password = 'password12345'
WHERE id = 1;
