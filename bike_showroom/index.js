const express = require('express');
const app = express();
const port = 3000;

const signRoute = require('./routes/customer');
const empSignRoute = require('./routes/employee');
const bikesRoute = require('./routes/vehicle');
const serviceRoute = require('./routes/serviceBook');
const salesRoute = require('./routes/sales');
const accessRoutes = require('./routes/accessories')

app.use('/customer', signRoute);

app.use('/employee', empSignRoute);

app.use('/vehicle', bikesRoute);

app.use('/service', serviceRoute);

app.use('/sale', salesRoute);

app.use('/accessories', accessRoutes);

app.listen(port, function(){
    console.log('server listening at port '+ port);  
});