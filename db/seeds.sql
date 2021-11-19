use sql2_electric_boogaloo;

insert into departments (name)
values
('Admin'), -- 1
('Taproom'), --2
('Event'), --3
('Brewery'), --4
('Kitchen'); --5

insert into roles (title, salary, department_id)
values
('Owner/Operator', 400000, 1),      --1
('General Manager', 60000, 1),      --2
('Taproom Manager', 50000, 2),      --3
('Executive Chef', 45000, 5),       --4
('Event Coordinator', 54000, 3)     --5
('Shift Lead', 40000, 2)            --6
('Cook', 24000, 5)                  --7
('Dishwasher', 18000, 5)            --8
('Prep', 20000, 5)                  --9
('Server', 35000, 2)                --10
('Bartender', 35000, 2)             --11
('Host', 23000, 2)                  --12
('Runner', 22000, 2)                --13
('Event Bartender', 38000, 3)       --14
('Event Barback', 30000, 3)         --15
('Head Brewer', 48000, 4)           --16
('Brewer', 44000, 4)                --17
('Packaging Supervisor', 31000, 4)  --18
('Packaging', 28000, 4)             --19
('Shipping', 28000, 4)              --20

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
('Maggie', 'Donaldson', 10, 3)


