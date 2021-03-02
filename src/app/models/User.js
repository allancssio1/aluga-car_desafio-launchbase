const db = require('../../config/db')

module.exports = {
  create(data) {
    const query = `
      INSERT INTO customers (name, code_person, birth_date, email, addresses_id)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id`
    data.code_person = data.code_person.replace(/\D/g, "")
    const values = [data.name, data.code_person, data.birth_date, data.email, data.addresses_id]
    return db.query(query, values)
  }
}