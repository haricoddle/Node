/* eslint-disable linebreak-style */
const con = require('../config/dbConnect');

async function fileUploadQuery(path) {
  const qr = `UPDATE vehicle
        SET image_url = '${path}'
        WHERE id = 123;`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

async function uploadSinglePdfQuery(path) {
  const qr = `UPDATE vehicle
        SET pdf_url = '${path}'
        WHERE id = 123;`;
  const passedQuery = con.promise().query(qr);
  return passedQuery;
}

module.exports = {
  fileUploadQuery,
  uploadSinglePdfQuery,
};
