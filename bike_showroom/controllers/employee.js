const qer = require('../models/employee');

const createEmployee = async (req,res) => {
    let deptId =  req.body.dept_id;
    let name =  req.body.name;
    let dob =  req.body.dob;
    let phone =  req.body.phone;
    let mail =  req.body.email;
    let hireDate =  req.body.hire_date;
    let salary =  req.body.salary;

    if(!deptId || !name || !dob || !phone || !mail || !hireDate || !salary) {
        res.status(400).send({error : 'All feilds are required'});
    }
    try{
        await qer.empSignUpQuery(deptId,name,dob,phone,mail,hireDate,salary)
        res.status(200).send({success: 'Created new employee'});
    }
    catch(err) {
        res.status(500).send({error : err, success: false});
    }        
}

// const updateEmployee = (req, res) => {

// }

module.exports = {
    createEmployee,
}