SELECT departments.id AS departments, role_employee.deparment_id
FROM role_employee
LEFT JOIN departments
ON departments.id = role_employee.deparment_id
;

SELECT role_employee.id AS role_employee, employee.role_id
FROM role_employee
LEFT JOIN employee
ON role_employee.id = employee.role_id;
