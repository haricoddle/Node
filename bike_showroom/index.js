const express = require('express');
const app = express();

const signRoute = require('./routes/signUpRoute');

app.use('/', signRoute);


app.listen(8001, function(){
    console.log('server listening at port 8001');
});