USE employee_db;

insert into departments (dep_name)
values
('Admin'), 
('Taproom'), 
('Event'), 
('Brewery'), 
('Kitchen');

insert into roles (title, salary, department_id)
values
('Owner', 90000, 1),
('General Manager', 60000, 1),
('Taproom Manager', 50000, 2),
('Executive Chef', 45000, 5),
('Event Coordinator', 54000, 3),
('Shift Lead', 40000, 2),
('Cook', 24000, 5),
('Dishwasher', 18000, 5),
('Prep', 20000, 5),
('Server', 35000, 2),
('Bartender', 35000, 2),
('Host', 23000, 2),
('Runner', 22000, 2),
('Event Bartender', 38000, 3),
('Event Barback', 30000, 3),
('Head Brewer', 48000, 4),
('Brewer', 44000, 4),
('Packaging Supervisor', 31000, 4),
('Packaging', 28000, 4),
('Shipping', 28000, 4);

insert into employees (first_name, last_name, role_id, manager_id)
values
('Adam', 'Savage', 1, null),
('Jeremy', 'Irons', 1, null),
('Scott', 'Pippin', 1, null),
('Zach', 'Attack', 2, 1),
('Kim', 'Fields', 3, 2),
('Alex', 'Nash', 4, 2),
('Meagan', 'Donahue', 5, 2),
('Kevin', 'Daniels', 6, 3),
('Evan', 'Charles', 6, 3),
('Jonathan', 'Banks', 6, 3),
('Courtney', 'Reed', 6, 3),
('Erika', 'Gray', 10, 3),
('Erin', 'McGathy', 20, 16),
('Jeff', 'Davis', 20, 16),
('Tyler', 'Childers', 16, 1),
('Jay', 'Hawk', 17, 16),
('Sav', 'Wright', 17, 16),
('Sandra', 'Connor', 17, 16),
('James', 'Reed', 18, 16),
('Josh', 'Mason', 19, 18),
('Samantha', 'Wolf', 11, 3),
('Ricky', 'Gervais', 14, 5),
('Taylor', 'Allen', 15, 5),
('Nicole', 'Johnson', 13, 3),
('Jarett', 'Umphrey', 9, 4),
('Spencer', 'Crittenden', 7, 4),
('Carson', 'Smith', 8, 4),
('Lora', 'Guess', 12, 3),
('Maggie', 'Donaldson', 10, 3);


