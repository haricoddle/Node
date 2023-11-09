const con = require('../config/dbConnect');
const qer = require('../models/employee');

const createEmployee = async (req,res) => {
    let deptId = await req.body.dept_id;
    let name = await req.body.name;
    let dob = await req.body.dob;
    let phone = await req.body.phone;
    let mail = await req.body.email;
    let hireDate = await req.body.hire_date;
    let salary = await req.body.salary;

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