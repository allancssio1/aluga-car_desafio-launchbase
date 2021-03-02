const User = require('../models/User')
const Addresses = require('../models/Addresses')

module.exports = {
  async create(req, res) {
    return res.render('forms/users/create.njk')
  },
  async post(req, res) {
    const keys = Object.keys(req.body)
    for(key of keys){
      if (req.body[key] == "") {
        return res.send('Preencha todos os campos.')
      }
    }
    let addresses = await Addresses.create(req.body)
    const addressUser = addresses.rows[0].id
    //AINDA NÃO IMPLEMENTADO A LOGICA QUE ADCIONA ID DO ADDRESSES PARA O CUSTOMERS
  }
}