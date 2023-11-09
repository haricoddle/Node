const express = require('express');
const app = express();
const port = 8001;

const signRoute = require('./routes/customer');
const empSignRoute = require('./routes/employee');
const bikesRoute = require('./routes/vehicle');
const serviceRoute = require('./routes/serviceBook')
app.use('/customer', signRoute);

app.use('/employee', empSignRoute);

app.use('/vehicle', bikesRoute);

app.use('/service', serviceRoute)

app.listen(port, function(){
    console.log('server listening at port 8001');  
});