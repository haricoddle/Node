/* eslint-disable consistent-return */
const con = require('../config/dbConnect');

async function imageUploadOuery(path) {
  try {
    const qr = `UPDATE vehicle
        SET image_url = ?
        WHERE id = 123;`;
    const passedQuery = con.query(qr, [path]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function fileUploadOuery(path) {
  try {
    const qr = `UPDATE vehicle
          SET pdf_url = ?
          WHERE id = 123;`;
    const passedQuery = con.query(qr, [path]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

async function partImageQuery(id, path) {
  try {
    const qr = `UPDATE parts 
        SET image_url = ?
        WHERE id = ?;`;
    const passedQuery = con.query(qr, [path, id]);
    return passedQuery;
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  imageUploadOuery,
  fileUploadOuery,
  partImageQuery,
};
