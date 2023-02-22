const express = require('express')
const app=express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const routes= require('./route/main_route.js')


//bodyparser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//configuration
dotenv.config({path:'./config.env'})

//database
let database=process.env.DATABASE.replace('<PASSWORD>',process.env.PASSWORD)
mongoose.set('strictQuery', false)
mongoose.connect(database,(err)=>{
    if(err) console.log(err)
    console.log('db connected succefully')
})

//routes
app.use('/referral',routes)

app.listen(process.env.PORT,()=>{
    console.log('listen to the server',process.env.PORT)
})
