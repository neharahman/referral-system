const express = require('express')
const routes = express.Router()
const {signUp} = require('../controller/signup.js')
const {login} = require('../controller/login.js');
const {myInvites} = require('../controller/myinvites.js');
const {displayAll} = require('../controller/display.js');

routes.get('/',displayAll)
routes.post('/signup',signUp)
routes.post('/login',login)
routes.post('/myinvites',myInvites)

module.exports=routes