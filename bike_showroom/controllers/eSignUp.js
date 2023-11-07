const con = require('../config/dbConnect');
const qer = require('../models/empConnection');

const createEmployee = (req,res) => {
    let deptId = req.body.dept_id;
    let name = req.body.name;
    let dob = req.body.dob;
    let phone = req.body.phone;
    let mail = req.body.email;
    let hireDate = req.body.hire_date;
    let salary = req.body.salary;

    if(!deptId || !name || !dob || !phone || !mail || !hireDate || !salary) {
        res.status(400).send({error : 'All feilds are required'});
    }

        con.query(qer.empSignUpQuery(deptId,name,dob,phone,mail,hireDate,salary), (err, result) => {
            if(err) {
                res.status(500).send({error : err});
            } else {
                res.status(200).send({success: 'Created new employee'});
            }
        })
    }

// const updateEmployee = (req, res) => {

// }

module.exports = {
    createEmployee,
}