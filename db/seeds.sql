INSERT INTO departments (name)
VALUES ("Human Resources"),
    ("IT"),
    ("Accounting"),
    ("Marketing"),
    ("R&D");

INSERT INTO role_employee (title, salary,department_id)
VALUES ("Manager",7.75,3),
    ( "Marketing Coordinator",9.75,4),
    ( "Public Relations",20.00,1),
    ( "Receptionist",15.50,4),
    ( "Secretary",9.75,2),
    ( "Chief Operating Officer",14.25,5),
    ( "Computer Scientist",22.75,3);
    

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ("Dave","Smith",2,1),
    ("Cara","Smith",2,3),
    ("Page","Jone",3,1),
    ("Dave","Kite",1,2),
    ("Cate","Smith",2,1);
