const express = require('express')
const routes = express.Router()
const {signUp} = require('../controller/signup.js')

routes.post('/signup',signUp)

module.exports=routes