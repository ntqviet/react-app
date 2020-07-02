const express = require('express');
const mongoose = require("mongoose");
const BookRouter = require('./router/book.router');
const cors = require("cors");
mongoose.connect('mongodb://localhost:27017/qlbooks', {useNewUrlParser: true,  useUnifiedTopology: true});

const app = express()
    app.use(cors());
    app.get('/', function(req,res){
            res.send('sever tra ve')
    })
    app.use('/qlbooks',cors(),BookRouter);
app.listen(3003);