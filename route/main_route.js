const express = require('express')
const routes = express.Router()
const {signUp} = require('../controller/signup.js')
const {login} = require('../controller/login.js');

routes.post('/signup',signUp)
routes.post('/login',login)

module.exports=routes