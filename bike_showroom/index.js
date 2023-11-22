/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const port = 3000;

const signRoute = require('./routes/customer');
const empSignRoute = require('./routes/employee');
const bikesRoute = require('./routes/vehicle');
const serviceRoute = require('./routes/serviceBook');
const salesRoute = require('./routes/sales');
const accessRoutes = require('./routes/accessories');

const userServiceBookRoute = require('./userSide/routes/serviceBook');
const fileUploadRoute = require('./routes/fileUpload');
const cartRoute = require('./userSide/routes/cart');
const orderRoute = require('./userSide/routes/order');

app.use('/bookService', userServiceBookRoute);

app.use('/customer', signRoute);

app.use('/employee', empSignRoute);

app.use('/vehicle', bikesRoute);

app.use('/service', serviceRoute);

app.use('/sale', salesRoute);

app.use('/accessories', accessRoutes);

app.use('/profile', express.static('uploads/image'));

app.use('/fileUpload', fileUploadRoute);

app.use('/cart', cartRoute);

app.use('/orders', orderRoute);

app.listen(port, () => {
  console.log(`server listening at port ${port}`);
});
