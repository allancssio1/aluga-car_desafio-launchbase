const express = require('express')
const Route = express.Router()
const UserController = require('./app/controllers/user')


Route.get('/', (req, res) => res.render('layout'))
Route.get('/user/create', UserController.create)
Route.post('/user', UserController.post)

module.exports = Route