const db = require('../../config/db');

module.exports = {
  create(data) {
    const query = `
      INSERT INTO addresses (
      street, number, district, city, region, complement, zip_code
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id`
      data.zip_code = data.zip_code.replace(/\D/g, "")
    const values = [data.street, data.number, data.district, data.city, data.region, data.complement, data.zip_code]
    return db.query(query, values)
  }
}