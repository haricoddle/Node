const express = require('express');
const app = express();
const port = 8001;

const signRoute = require('./routes/signUpRoute');
const empSignRoute = require('./routes/employeeRoute');
const bikesRoute = require('./routes/vehicleRoute');
const serviceRoute = require('./routes/serviceBookRoute')
app.use('/customer', signRoute);

app.use('/employee', empSignRoute);

app.use('/vehicle', bikesRoute);

app.use('/service', serviceRoute)

app.listen(port, function(){
    console.log('server listening at port 8001');  
});