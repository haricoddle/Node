const con = require('../config/dbConnect');

async function imageUploadOuery(path) {
  const qr = `UPDATE vehicle
        SET image_url = '${path}'
        WHERE id = 123;`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

async function fileUploadOuery(path) {
  const qr = `UPDATE vehicle
          SET pdf_url = '${path}'
          WHERE id = 123;`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

async function partImageQuery(id, path) {
  const qr = `UPDATE parts 
        SET image_url = '${path}'
        WHERE id = ${id};`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  imageUploadOuery,
  fileUploadOuery,
  partImageQuery,
};
