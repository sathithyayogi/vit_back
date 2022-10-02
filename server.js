require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}));
app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(cors({
    origin: "*"
}));

    
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true})
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const list = require('./routes/list')
app.use('/',list)


app.listen(3001,() => console.log('Server Started'))