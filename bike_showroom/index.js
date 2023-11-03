const express = require('express');
const app = express();
const port = 8001;

const signRoute = require('./routes/signUpRoute');

app.use('/customer', signRoute);

app.listen(port, function(){
    console.log('server listening at port 8001');
    
});