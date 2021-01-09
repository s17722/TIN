const db = require('../../config/mysql2/db');

exports.getEmployees = () => {
  return db
    .promise()
    .query('SELECT * FROM Employee')
    .then((results, fields) => {
      console.log(results[0]);
      return results[0];
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.getEmployeeById = (empId) => {
  const query = `SELECT e._id as _id, e.firstName, e.lastName, e.email, empl._id as empl_id,
empl.salary, empl.dateFrom, dept._id as dept_id, empl.dateTo, dept.name, dept.budget 
FROM Employee e 
left join Employment empl on empl._id = e._id
left join Department dept on empl._id = dept._id 
where e._id = ?`;
  return db
    .promise()
    .query(query, [empId])
    .then((results, fields) => {
      const firstRow = results[0][0];
      if (!firstRow) {
        return {};
      }
      const emp = {
        _id: parseInt(empId),
        firstName: firstRow.firstName,
        lastName: firstRow.lastName,
        email: firstRow.email,
        employments: [],
      };
      for (let i = 0; i < results[0].length; i++) {
        const row = results[0][i];
        if (row.empl_id) {
          const employment = {
            _id: row.empl_id,
            salary: row.salary,
            dateFrom: row.dateFrom,
            dateTo: row.dateTo,
            department: {
              _id: row.dept_id,
              name: row.name,
              budget: row.budget,
            },
          };
          emp.employments.push(employment);
        }
      }
      return emp;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

exports.createEmployee = (newEmpData) => {
  const firstName = newEmpData.firstName;
  const lastName = newEmpData.lastName;
  const email = newEmpData.email;
  const sql =
    'INSERT into Employee (firstName, lastName, email) VALUES (?, ?, ?)';
  return db.promise().execute(sql, [firstName, lastName, email]);
};

exports.updateEmployee = (empId, empData) => {
  const firstName = empData.firstName;
  const lastName = empData.lastName;
  const email = empData.email;
  const sql = `UPDATE Employee set firstName = ?, lastName = ?, email = ? where _id = ?`;
  return db.promise().execute(sql, [firstName, lastName, email, empId]);
};

exports.deleteEmployee = (empId) => {
  const sql1 = 'DELETE FROM Employment where emp_id = ?';
  const sql2 = 'DELETE FROM Employee where _id = ?';

  return db
    .promise()
    .execute(sql1, [empId])
    .then(() => {
      return db.promise().execute(sql2, [empId]);
    });
};
