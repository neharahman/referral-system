const express = require('express')
const routes = express.Router()
const {signUp} = require('../controller/signup.js')
const {login} = require('../controller/login.js');
const {myInvites} = require('../controller/myinvites.js');
const {displayAll} = require('../controller/display.js');
const {myRewards} = require('../controller/myrewards.js');
const {referAndEarn} = require('../controller/referAndEarn.js');

routes.get('/',displayAll)
routes.post('/signup',signUp)
routes.post('/login',login)
routes.post('/myinvites',myInvites)
routes.post('/myrewards',myRewards)
routes.post('/refer_and_earn',referAndEarn)

module.exports=routes