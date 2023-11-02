const express = require('express');
const app = express();
const cors = require('cors');

const userRouter = require('./routes/user')

app.use(cors());

const {connectDB } = require('./connection')

connectDB();
 
app.use('/customer', userRouter);

app.listen(8001, function(){
    console.log('server listening at port 8001');
})