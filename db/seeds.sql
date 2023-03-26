INSERT INTO departments (id,name)
VALUES (1,"Lion King"),
    ("The Godfather"),
    ("West Side Story"),
    ("Parasite"),
    ("The Wizard of Oz");

INSERT INTO role_employee (id, title, salary)
VALUES (1, "Zazu is underrated. Give that hornbill a sequel!","$7.75"),
    ( "I'm gonna make him an offer you can't refuse, watch this movie","$9.75"),
    ( "Scar is the lion everyone loves to hate","$9.75"),
    ( "Ten years of ballet and three years of tap to join a gang in this neighborhood","$9.75"),
    ( "The tin man gave a metallic, hollow performance","$9.75"),
    ( "Hakuna matata","$9.75"),
    ( "Those flying monkeys are nightmare fuel!","$9.75");
    

INSERT INTO employee (id,first_name,role_id,manager_id)
VALUES (1,"Dave","Smith",1,1),
    (1,"Cara","Smith",1,1),
    (1,"Page","Jone",1,1),
    (1,"Dave","Kite",1,1),
    (1,"Cate","Smith",1,1),
