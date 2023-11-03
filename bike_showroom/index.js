const express = require('express');
const app = express();
const query = require('./models/connection');

const signRoute = require('./routes/signUpRoute');

app.use('/customer', signRoute);

app.listen(8001, function(){
    console.log('server listening at port 8001');
    
});