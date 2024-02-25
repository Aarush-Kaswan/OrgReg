INSERT INTO organization (org_id, name, org_address) VALUES
(1, 'Samsung', 'Bangalore'),
(2, 'Jio', 'Bangalore'),
(3, 'Apple', 'Mumbai'),
(4, 'Oneplus', 'HongKong'),
(5, 'Xiaomi', 'Beijing');


INSERT INTO organization_hr (orghr_id, org_id, orghr_contact_number, orghr_email, orghr_first_name, orghr_last_name) VALUES
(101, 1, '123456789', 'john1@gmail.com', 'Johnny', 'Doe'),
(201, 2, '987654321', 'jane@gmail.com', 'Jane', 'Doe'),
(216, 3, '9810363837', 'aarushkaswan2@gmail.com', 'Aarush', 'Kaswan'),
(219, 4, '7810264864', 'rishabh@gmail.com', 'Rishabh', 'Rai'),
(220, 5, '8642537568', 'anurag@gmail.com', 'Anurag', 'Babal');


INSERT INTO users (id, password, username) VALUES
(1, 'root1', 'admin1'),
(2, 'root2', 'admin2');